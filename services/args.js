const moment = require('moment');

/**
 * TODO document
 * @param {*} args
 */
const parseArgs = (args) => {
  // Args with default values
  let help = false;
  let fname = null;
  let lname = null;
  let age = null;
  let gender = null;
  // Parse flags into args
  const flags = ['-h', '--help', '-n', '--name', '-b', '--birthday', '-g', '--gender'];
  let flag = null;
  args.forEach((val) => {
    if (flags.indexOf(val) >= 0) {
      flag = val;
      if (flag === '-h' || flag === '--help') {
        help = true;
      }
      return;
    }

    if (flag === '-n' || flag === '--name') {
      if (fname === null) {
        fname = val;
      } else if (lname === null) {
        lname = val;
      } else {
        fname = fname + ' ' + lname;
        lname = val;
      }
    }

    if (flag === '-g' || flag === '--gender') {
      gender = val.toUpperCase().slice(0,1);
      if (gender !== 'M' && gender !== 'F') {
        gender = null;
      }
    }

    if (flag === '-b' || flag === '--birthday') {
      const bd = moment(val)
      try {
        age = parseInt(bd.add(6, 'months').fromNow().split(' ')[0]);
      } catch (e) {
        console.error(`Failed to parse age from birthday: ${val}`);
      }
    }
  });

  return { help, fname, lname, age, gender };
};

module.exports = parseArgs;
