
# Good Trails
A Good Reads Clone which focuses on locating popular Trails in each state. Whether you're a novice or expert level Hiker, Good Trails is the place for you to keep track of your past adventures and/or upcoming desires (edit)
  * [GoodTrails](https://good-trails.herokuapp.com/)
  * [Features](https://github.com/Run5/GoodTrails/wiki/Features)
  * [Schema](https://github.com/Run5/GoodTrails/wiki/Database-Schema)
  * [Frontend-Routes](https://github.com/Run5/GoodTrails/wiki/Frontend-Routes)
  * [API-Routes](https://github.com/Run5/GoodTrails/wiki/API-Documentation)
  ## Technologies used  (edit)
 * JavaScript
 * Node.js (Sequelize ORM)
 * Express.js
 * Heroku
 * JQuery
 * Pug
 * CSS



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
   * [Review Routes](md_images/get-post route reviews Good_trails.jpg)

 ### Users will have the ability to sign-up (edit)
 * Authenticated Users will have the ability to login/logout
   * the authenticated user can then create a collection of trails they are either interested in, or have previously visited
