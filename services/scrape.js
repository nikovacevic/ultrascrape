const axios = require('axios');

/**
 * TODO document
 * @param {*} fname
 * @param {*} lname
 * @param {*} age
 * @param {*} gender
 */
const scrape = async (fname, lname, age, gender) => {
  const url = `http://ultrasignup.com/service/events.svc/history/${encodeURI(fname)}/${encodeURI(lname)}/`;
  try {
    const res = await axios.get(url);
    const matches = res.data.filter(r => (!age || r.Age === age) && (!gender || r.Gender === gender))
    if (matches.length > 1) {
      console.log(`Too many matches (${matches.length}) for (name: ${fname} ${lname}, age: ${age}, gender: ${gender})`);
      return null;
    }
    return matches[0];
  } catch (e) {
    console.error(`Failed to fetch results for (name: ${fname} ${lname}, age: ${age}, gender: ${gender})`);
  }
}

module.exports = scrape;
