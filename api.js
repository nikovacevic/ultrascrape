const express = require('express');
const moment = require('moment');

const parseArgs = require('./services/args');
const us = require('./services/ultrasignup');

const app = express();
const args = parseArgs(process.argv);
const port = args.port || 3000;
app.set('view engine', 'pug')

const getRunners = async query => {
  try {
    if (!(query.name || query.id)) {
      return [];
    }

    const names = query.name.split(' ');
    const lname = names[names.length - 1] || '';
    const fname = names.slice(0, names.length - 1).join(' ');

    const id = parseInt(query.id) || null;

    const bd = moment(query.birthday) || null;
    let age = null;
    if (query.birthday) {
      try {
        age = parseInt(bd.add(6, 'months').fromNow().split(' ')[0]);
      } catch (e) {
        console.error(`Failed to parse age from birthday: ${val}`);
      }
    }

    return await us.search(fname, lname, age, null, id)
  } catch (e) {
    console.error(e);
    return [];
  }
}

app.get('/', async (req, res) => {
  const runners = await getRunners(req.query);
  return res.render('index', {
    runners,
    name: req.query.name || null,
    id: req.query.id || null,
    birthday: req.query.birthday || null,
    search: req.query.search || false
  });
});

app.listen(port, () => console.log(`UltraScrape listening on port ${port}`));
