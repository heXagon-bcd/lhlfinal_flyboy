const yelp = require('yelp-fusion');
const apiKey = 'SDzrM8FUGWFMAO8pHOpg2TWbF58Raa8e_hC7RDxjOAjue8DNYrPih-R_qsEW7hpuYGP-sda9ZPrjypl_6yHgmq_0L1QrbdfQVzhAeon_8u2gEGITOEXcuZMrXfBbZXYx';

const client = yelp.client(apiKey);

async function search(term, location) {
  try {
    const searchRequest = {
      term: term,
      location: location
    };

    const response = await client.search(searchRequest);
    const result = response.jsonBody.businesses[0];

    const resultObj = {
      id: result.id,
      name: result.name,
      image: result.image_url,
      categories: result.categories,
      rating: result.rating,
      location: result.location.address1
    };

    return resultObj;
  } catch (error) {
    console.error('Error in Yelp API request:', error);
    throw error; 
  }
}

module.exports = { search };
