const parseArgs = require('./services/args');
const scrape = require('./services/scrape');

const args = parseArgs(process.argv);

if (args.help) {
  // TODO print help
}

scrape(args.fname, args.lname, args.age, args.gender).then((runner) => {
  if (runner === null) {
    console.log('Failed to find runner');
    return;
  }
  console.log(runner);
});

