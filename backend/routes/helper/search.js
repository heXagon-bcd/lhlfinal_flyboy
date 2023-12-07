const yelp = require('yelp-fusion');
const apiKey = 'SDzrM8FUGWFMAO8pHOpg2TWbF58Raa8e_hC7RDxjOAjue8DNYrPih-R_qsEW7hpuYGP-sda9ZPrjypl_6yHgmq_0L1QrbdfQVzhAeon_8u2gEGITOEXcuZMrXfBbZXYx';

const client = yelp.client(apiKey);

async function search(terms, location, sDate, rDate) {
  const startDate = new Date(sDate);
  const endDate = new Date(rDate);
  const diff = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

  try {
    const resultsArray = [];

    for (let i = 0; i <= diff; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);

      for (const term of terms) {
        const searchRequest = {
          term: term,
          location: location
        };

        const response = await client.search(searchRequest);
        const result = response.jsonBody.businesses[i];
        console.log("test",result + i)

        if (!result) {
          console.warn(`No result found for index ${i} on date ${currentDate}`);
          continue;
        }

        resultsArray.push({
          id: result.id,
          name: result.name,
          image: result.image_url,
          rating: result.rating,
          location: result.location.address1,
          price : result.price,
          date: currentDate.toISOString().split('T')[0]
        });
      }
    }

    return resultsArray;
  } catch (error) {
    console.error('Error in Yelp API request:', error);
    throw error;
  }
}

module.exports = { search };
