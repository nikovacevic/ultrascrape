const parseArgs = require('./services/args');
const us = require('./services/ultrasignup');

const args = parseArgs(process.argv);

const logRunner = (runner) => {
  const raceHistory = runner.Results.reduce((hist, race) => {
    hist += `\n • ${race.eventname} ${race.place} place in ${race.formattime}`;
    return hist;
  }, '');
  console.log(`${runner.Id}: ${runner.FirstName} ${runner.LastName}${raceHistory}`);
}

if (args.help) {
  // TODO print help
}

console.log(args);

us.search(args.fname, args.lname, args.age, args.gender, args.id)
  .then((runners) => { runners.forEach(logRunner); })
  .catch((e) => console.error(e));
