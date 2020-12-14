import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h3 class="restaurant__title" tabindex="0">${restaurant.name}</h3>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous" tabindex="0" />

  <div class="restaurant__info">
      <h4 tabindex="0">City</h4>
        <p tabindex="0">${restaurant.city}</p>
      <h4 tabindex="0">Address</h4>
        <p tabindex="0">${restaurant.address}</p>   
      <h4 tabindex="0">Categories</h4>
        <p tabindex="0">${restaurant.categories
    .map((food) => `${food.name}`).join(', ')}
        </p>          
      <h4 tabindex="0">Rating</h4>
        <p tabindex="0"> ⭐️ ${restaurant.rating}</p>
  </div>

  <div class="Menu-Categories">
    <div class="Foods-Categories">
      <h4 class="menu-foods" tabindex="0">
        Foods 
      </h4>
      <ol>${restaurant.menus.foods
    .map((food) => `<li class="list-food" tabindex="0">${food.name}</li>`).join('')}
      </ol>
    </div>
   
    <div class="drinks-Categories">
      <h4 class="menu-drink" tabindex="0">
        Drinks 
      </h4>
      <ol>${restaurant.menus.drinks
    .map((drink) => `<li class="list-drink" tabindex="0">${drink.name}</li>`).join('')}
      </ol>
    </div>
  </div>

  <div class="restaurant__overview">
    <h4 tabindex="0">Overview</h4>
    <p tabindex="0">${restaurant.description}</p>
  </div> 

  
  <div class="container-review"> 
  <h4 tabindex="0">Reviews</h4>      
      <div class="card-review">${restaurant.customerReviews
    .map((customerReview) => `<div class="review-content">
         <h5 class="name-review" tabindex="0">${customerReview.name}</h5>         
         <p class="testimonial" tabindex="0"> ${customerReview.review} </p>
         <hr class="line-review" tabindex="0"></hr>
         <p class="date-review" tabindex="0">${customerReview.date}</p>
        </div>`)}         
      </div>
  </div>  
`;

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i <= count; i += 1) {
    template += `
      <div class="restaurant-item">
        <div class="restaurant-item__header">
            <img class="restaurant-item__header__poster" width="100%" height="200px" src="./images/heros/placeholder.png" alt="skeleton">
            <div class="restaurant-item__header__rating">
              <p tabindex="0">⭐️<span class="restaurant-item__header__rating__score" tabindex="0"></span></p>
            </div>
        </div>
        <div class="restaurant-item__content">
            <a class="view-detail" href="#">View Detail</a>
            <h3 class="skeleton" tabindex="0"></h3>
            <p class="skeleton" tabindex="0"></hp>
            <p class="skeleton" tabindex="0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
        </div>
      </div>
  `;
  }
  return template;
};

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img tabindex="0" class="lazyload restaurant-item__header__poster" width="100%" height="200px" alt="${restaurant.name}"
        data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" crossorigin="anonymous">  
        <div class="restaurant-item__header__rating">
            <p tabindex="0">⭐️<span class="restaurant-item__header__rating__score" tabindex="0">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">        
        <a class="view-detail" href="${`/#/detail/${restaurant.id}`}">View Detail</a>
        <h3 tabindex="0">${restaurant.name}</h3>
        <p class="place" tabindex="0">${restaurant.city}</hp>
        <p tabindex="0">${restaurant.description}</p>
    </div>
  </div> 
`;

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

const addReview = `
      <br>
      <div class="card-add-review">
      <h4 tabindex="0"> Add Your Review to Improve our Service </h4>
        <form id="update_form">
          <label for="reviewerName" tabindex="0">Name</label><br>
            <textarea id="reviewerName" name="reviewerName" placeholder="Your Name"></textarea>  
          <br><br>

          <label for="inputReview" tabindex="0">Review</label><br>  
            <textarea id="inputReview" name="inputReview" placeholder="Your Review"></textarea>       
      
          <button type="submit" value="Submit" class="Submit-New-Review">Submit</button>
          
        </form>
      </div>
`;

const createRestaurantFailedRequestTemplate = `
      <div class="Container-Failed-Request"></div>      
`;

const loadingBar = `    
    <div class="loadingbar" id="loadingbar">     
      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>   
    </div>      
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createSkeletonRestaurantTemplate,
  addReview,
  createRestaurantFailedRequestTemplate,
  loadingBar,
};
