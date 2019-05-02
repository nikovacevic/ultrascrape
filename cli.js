const parseArgs = require('./services/args');
const us = require('./services/ultrasignup');

const args = parseArgs(process.argv);

const helpMessage = `
Usage: node cli [options]

Options:
  -n, --name [name]               search by runner name (first and last required)
  -b, --birthday [YYYY-MM-DD]     filter search by birthday
  -g, --gender [male|female]      filter search by gender
  -i, --id [id]                   search (or filter) by runner ID (not exactly easy to find)
`;

const logRunner = (runner) => {
  const raceHistory = runner.Results.reduce((hist, race) => {
    hist += `\n • ${race.eventname} ${race.place} place in ${race.formattime}`;
    return hist;
  }, '');
  console.log(`${runner.Id}: ${runner.FirstName} ${runner.LastName}${raceHistory}`);
}

if (args.help) {
  console.log(helpMessage);
  return;
}

us.search(args.fname, args.lname, args.age, args.gender, args.id)
  .then((runners) => { runners.forEach(logRunner); })
  .catch((e) => console.error(e));
