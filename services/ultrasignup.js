const axios = require('axios');

/**
 * TODO document
 * @param {*} fname
 * @param {*} lname
 * @param {*} age
 * @param {*} gender
 * @param {*} id
 */
const search = async (fname, lname, age, gender, id) => {
  const fn = fname || 'a';
  const ln = lname || 'a';
  const url = (id && !(fname || lname || age || gender))
    ? `http://ultrasignup.com/service/events.svc/history/${encodeURI(fn)}/${encodeURI(ln)}/?pid=${id}`
    : `http://ultrasignup.com/service/events.svc/history/${encodeURI(fn)}/${encodeURI(ln)}/`;
  try {
    const res = await axios.get(url);
    const matches = res.data.filter(r => (age === null || r.Age === age) && (gender === null || r.Gender === gender) && (id === null || r.Id === id))
    console.log(`${matches.length} matches for (name: ${fname} ${lname}, age: ${age}, gender: ${gender}, id: ${id})`);
    return matches;
  } catch (e) {
    console.error(`Failed to fetch results for (name: ${fname} ${lname}, age: ${age}, gender: ${gender}, id: ${id})`);
    return [];
  }
}

/**
 * TODO document
 * @param {*} id
 */
const get = async (id) => {
  const url = `http://ultrasignup.com/service/events.svc/history/a/a/?pid=${id}`;
  try {
    const res = await axios.get(url);
    if (res.data.length === 0) {
      throw new Error(404);
    }
    return res.data[0];
  } catch (e) {
    console.error(`Failed to fetch results for (id: ${id})`);
  }
}

module.exports = { search, get };
