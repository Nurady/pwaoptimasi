const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorit');
});

const emptyFavRestaurant = 'Nothing Item Favorit'; // sesuai dengan DOM element id emptyFavorit di halaman favorit

Scenario('showing empty favorite/like restaurant', ({ I }) => {
  I.seeElement('#emptyFavorit');
  I.see(emptyFavRestaurant, '#emptyFavorit');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.see(emptyFavRestaurant, '#emptyFavorit');
  I.amOnPage('/');

  I.seeElement('.restaurant-item__content a');

  const firstRestaurant = locate('.restaurant-item__content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorit');
  I.seeElement('.restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.view-detail');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Un-Liking one restaurant', async ({ I }) => {
  I.see(emptyFavRestaurant, '#emptyFavorit');
  I.amOnPage('/');

  I.seeElement('.restaurant-item__content a');

  const firstRestaurant = locate('.restaurant-item__content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorit');
  I.seeElement('.restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.view-detail');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(likedRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorit');
  I.seeElement('#emptyFavorit');

  const emptyFavoritPage = await I.grabTextFrom('#emptyFavorit');
  assert.strictEqual(emptyFavoritPage, emptyFavRestaurant);
});

Scenario('Consumer Review in detail page', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant-item__content a');

  const firstRestaurant = await I.grabTextFrom(locate('.restaurant-item__content a').first());
  I.click(firstRestaurant);

  I.scrollTo('.card-add-review');
  I.seeElement('.card-add-review');

  const reviewerName = 'E2E testing';
  const inputReview = 'E2E testing Consumer Review';

  // I.appendField('#reviewerName', name);
  // I.appendField('#inputReview', text);

  I.seeElement('#reviewerName');
  I.fillField('reviewerName', reviewerName);
  I.seeElement('#inputReview');
  I.fillField('inputReview', inputReview);

  I.click('.Submit-New-Review', '#update_form');

  I.refreshPage(); // reload current page
  I.amOnPage('/#/detail');
  I.waitForVisible('.card-review .review-content');
  I.seeElement('.card-review .review-content');

  // const NewUserNameReview = await I.grabTextFrom(locate('.card-review .review-content .name-review').last());
  // I.seeTextEquals(NewUserNameReview, reviewerName);
  // const NewUserNameReview = await I.grabTextFrom(locate('.card-review .review-content .name-review').last());
  // const NewUserNameReview = await I.grabTextFrom(locate('.review-content h5').last());
  // const inputNewReview = await I.grabTextFrom(locate('.card-review .review-content .testimonial').last());
  // assert.strictEqual(NewUserNameReview, reviewerName);
  // assert.strictEqual(inputNewReview, inputReview);
});
