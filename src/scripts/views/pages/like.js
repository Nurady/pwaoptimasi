import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading" tabindex="0">Your Favorit Restaurants</h2>   
        <div id="emptyFavorit" class="emptyFavorit">
         Nothing Item Favorit       
        </div>      
        <div id="restaurants" class="restaurants"></div>        
      </div>
    `;
  },

  async afterRender() {
    const restaurantsFavorit = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsFavoritContainer = document.querySelector('#restaurants');

    restaurantsFavorit.forEach((restaurant) => {
      restaurantsFavoritContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });

    const emptyFavorit = document.querySelector('#emptyFavorit');

    if (restaurantsFavoritContainer.innerHTML) {
      emptyFavorit.style.display = 'none';
    } else {
      emptyFavorit.style.display = 'block';
    }
  },
};

export default Like;
