import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class theRestaurantDbSource {
  static async home() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async addReview(data) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(data),
    };

    await fetch(API_ENDPOINT.REVIEW, options);
  }
}

export default theRestaurantDbSource;
