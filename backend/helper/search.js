const yelp = require('yelp-fusion');

const apiKey = 'SDzrM8FUGWFMAO8pHOpg2TWbF58Raa8e_hC7RDxjOAjue8DNYrPih-R_qsEW7hpuYGP-sda9ZPrjypl_6yHgmq_0L1QrbdfQVzhAeon_8u2gEGITOEXcuZMrXfBbZXYx';

console.log("Hello, please enter a city + state/province, then enter a business")
const term = input("Enter a business");
const location = input("Enter a location (City, State/Province")

const searchRequest = {
  term: term,
  location: location
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});