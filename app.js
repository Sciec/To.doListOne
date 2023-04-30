// jshinit esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
// to load the static files residing in the public dir

app.get('/', function (req, res) {
  let today = new Date();
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };

  // tolocale has been to sync with operating systems's timezone
  let day = today.toLocaleDateString('en-US', options);

  res.render('list', { kindOfDay: day, newListItem: items });
});

app.post('/', function (req, res) {
  let item = req.body.newItem;

  items.push(item);

  res.redirect('/');
  // redirect with send to app.get to check the availability of any value for item
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
