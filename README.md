
# [GoodTrails](https://good-trails.herokuapp.com/)
GoodTrails is a goodreads.com clone which focuses on locating popular Trails in each state. Whether you're a novice or expert level hiker, GoodTrails is the place for you to keep track of your past adventures and/or upcoming desires.
  * [Features](https://github.com/Run5/GoodTrails/wiki/Features) 
  * [Schema](https://github.com/Run5/GoodTrails/wiki/Database-Schema)
  * 
 MAYBE INSERT dbdiagram.io image INSERT HERE--
 
  * [Frontend-Routes](https://github.com/Run5/GoodTrails/wiki/Frontend-Routes)
  * [API-Routes](https://github.com/Run5/GoodTrails/wiki/API-Documentation)
  
 INSERT HOME PAGE IMAGE-landing
 INSERT IMAGE HERE REGISTER PAGE-signup
 INSERT IMAGE HERE COLLECTIONS-mytrails
 INSERT IMAGE HERE COMMENTING ON SPECIFIC TRAIL-reviewing specific trail
  
 ### Technologies Used
 * JavaScript
 * Node.js
 * Postgresql (Sequelize ORM)
 * Express.js
 * Heroku
 * JQuery
 * Pug
 * CSS

 ### Users will have the ability to sign-up (edit)
   * the authenticated user can create a collection of trails they are either interested in, or have previously visited.  This is accomplished by selecting state codes which houses the trail data for a variety of trails with ranging difficulties.
   *
   * ability to write reviews reflecting specific trails, and will have the ability to edit and delete these reviews.

## Discussion of two features that show off the team's technical abilities(!!need image!!)
  * Dynamically create review divs
  ```javascript
function renderReviews(reviews, reviewDisplayContainer) {
  // console.log("line 259, reviews array has length?", reviews.length);
  try {
    if (reviews.length === 0) {
      const noReviewText = document.createElement("p")
      noReviewText.innerHTML = "There are no reviews for this trail yet"
      reviewDisplayContainer.appendChild(noReviewText);
    } else {
      // empty the reviewDisplayContainer
      reviewDisplayContainer.innerHTML = "";
      reviews.forEach(review => {
        const newReviewDiv = document.createElement("div");
        newReviewDiv.setAttribute("id", `review-${review.id}-div`);
        newReviewDiv.setAttribute("class", "each-review");
        // fill in review text and author
        const newReviewText = document.createElement("p")
        const newReviewUser = document.createElement("p")
        newReviewText.innerHTML = review.review
        newReviewUser.innerHTML = `-Reviewed by ${review.User.username}`
        newReviewDiv.append(newReviewText, newReviewUser)
        reviewDisplayContainer.append(newReviewDiv)
      })
    }
  } catch (error) {
    console.error(error);
  }
}
  ```

 ## Discussion of both challenges faced and the way the team solved them
 
 
 ## Code snippets to highlight the best code
  --INSERT IMAGES FROM md_images folder--(adding CODEimages branch)


