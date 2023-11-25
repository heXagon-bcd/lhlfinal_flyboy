const yelp = require('yelp-fusion');
const process = require('process'); 

const apiKey = 'SDzrM8FUGWFMAO8pHOpg2TWbF58Raa8e_hC7RDxjOAjue8DNYrPih-R_qsEW7hpuYGP-sda9ZPrjypl_6yHgmq_0L1QrbdfQVzhAeon_8u2gEGITOEXcuZMrXfBbZXYx';

const term = process.argv[2]
const location = process.argv[3]
console.log(`You've entered : ${term} at ${location}`)

const searchRequest = {
  term: term,
  location: location
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const secondResult = response.jsonBody.businesses[1];
  console.log(typeof secondResult)
  console.log(firstResult);
  console.log(secondResult);

}).catch(e => {
  console.log(e);
});