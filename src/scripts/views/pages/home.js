import theRestaurantDbSource from '../../data/therestaurantdb-source';
import {
  createRestaurantItemTemplate,
  loadingBar,
  createRestaurantFailedRequestTemplate,
  createSkeletonRestaurantTemplate,
} from '../templates/template-creator';

const list = {
  async render() {
    return `
      ${loadingBar}             
      <div class="content">                      
            <div class="failed-request" id="failed-request"></div>             
            <div id="restaurants" class="restaurants">
            ${createSkeletonRestaurantTemplate(20)}
            </div>
      </div>    
      `;
  },

  async afterRender() {
    try {
      const restaurants = await theRestaurantDbSource.home();
      const restaurantsContainer = document.querySelector('#restaurants');
      restaurantsContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      const load = document.querySelector('#loadingbar');
      load.style.display = 'none';
      createSkeletonRestaurantTemplate.display = 'none';
    } catch (error) {
      const failedRequest = document.querySelector('#failed-request');
      failedRequest.style.display = 'block';
      let errorMessage;
      if (error.message === 'Failed to fetch') {
        errorMessage = 'Failed to Request';
      } else {
        errorMessage = 'Error Request Time Out';
      }
      failedRequest.innerHTML += createRestaurantFailedRequestTemplate(errorMessage);
    }
  },
};

export default list;
