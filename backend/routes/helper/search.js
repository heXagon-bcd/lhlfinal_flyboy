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
    const secondResult = response.jsonBody.businesses[1];

    const resultObj = {
      id: secondResult.id,
      name: secondResult.name,
      image: secondResult.image_url,
      categories: secondResult.categories,
      rating: secondResult.rating,
      location: secondResult.location.address1
    };

    return resultObj;
  } catch (error) {
    console.error('Error in Yelp API request:', error);
    throw error; // Rethrow the error so the caller can handle it
  }
}

module.exports = { search };
