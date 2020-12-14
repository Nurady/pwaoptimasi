import UrlParser from '../../routes/url-parser';
import theRestaurantDbSource from '../../data/therestaurantdb-source';
import {
  createRestaurantDetailTemplate, addReview, loadingBar, createRestaurantFailedRequestTemplate,
} from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const detail = {
  async render() {
    return `        
        <h2 class="detail-title" tabindex="0">INFORMATION DETAIL</h2>
        ${loadingBar}
        <div id="restaurant" class="restaurant"></div>  
        <div class="failed-request" id="failed-request"></div>  
        <div id="likeButtonContainer"></div>      
      `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      // eslint-disable-next-line no-shadow
      const detail = await theRestaurantDbSource.detail(url.id);
      const restaurantContainer = document.querySelector('#restaurant');
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(detail.restaurant);

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: url.id,
          name: detail.restaurant.name,
          pictureId: detail.restaurant.pictureId,
          city: detail.restaurant.city,
          rating: detail.restaurant.rating,
          description: detail.restaurant.description,
        },
      });

      restaurantContainer.innerHTML += addReview;

      const addNewReviewButton = document.querySelector('.Submit-New-Review');
      const reviewerName = document.querySelector('#reviewerName');
      const inputReview = document.querySelector('#inputReview');

      addNewReviewButton.addEventListener('click', async (event) => {
        const newConsumerReview = {
          id: url.id,
          name: reviewerName.value,
          review: inputReview.value,
        };
        event.preventDefault();
        if (reviewerName.value === '' || inputReview.value === '') {
          alert('Required name and your review');
        } else {
          await theRestaurantDbSource.addReview(newConsumerReview).then(() => {
            location.reload();
          });
          alert('thank you for your review');
        }
      });
      const load = document.querySelector('#loadingbar');
      load.style.display = 'none';
    } catch (error) {
      const failedRequest = document.querySelector('#failed-request');
      failedRequest.style.display = 'block';
      let errorMessage;
      if (error.message === 'Failed to fetch') {
        errorMessage = 'Failed to Request';
      } else {
        errorMessage = 'Error Request Time Out';
      }
      failedRequest.innerHTML = createRestaurantFailedRequestTemplate(errorMessage);
    }
  },
};

export default detail;
