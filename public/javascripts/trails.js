document.addEventListener("DOMContentLoaded", async () => {

  // Grab the elements on the page to manipulate
  const trailHeader = document.querySelector('h1');
  // Grab the trail id passed in through the pug template
  const trailId = trailHeader.id;
  const userId = trailHeader.classList[0]
  const userName = trailHeader.classList[1]
  const visited = document.querySelector('.visited');
  const interested = document.querySelector('.interested');


  try {
    const res = await fetch(`/trails/toggles/${trailId}`);
    const { trailToggles } = await res.json();
    if (trailToggles[0]) {
      // Setting the initial state of the buttons from the database
      if (trailToggles[0].visited) visited.classList.add('toggled');
      else visited.classList.remove('toggled');
      if (trailToggles[0].want_to_visit) interested.classList.add('toggled');
      else interested.classList.remove('toggled');
    }//endIf
  }//endTry
  catch (err) {
    console.error(err);
  }//endCatch
  visited.addEventListener("click", async (event) => {
    if (visited.classList.contains('toggled')) {
      try {
        if (interested.classList.contains('toggled')) {
          const res = await fetch(`/trails/toggles/${trailId}`, {
            headers: {
              "Content-Type": "application/json",
            },
            method: 'PUT',
            body: JSON.stringify({
              visited: false,
              want_to_visit: true
            }),
          });
          if (!res.ok) throw res;
          visited.classList.remove('toggled');
        }//endIf
        else {
          const res = await fetch(`/trails/toggles/${trailId}`, {
            headers: {
              "Content-Type": "application/json",
            },
            method: 'PUT',
            body: JSON.stringify({
              visited: false,
              want_to_visit: false
            }),
          });
          if (!res.ok) throw res;
          visited.classList.remove('toggled');
        }//endElse
      }//endTry
      catch (err) {
        console.log(err);
      }//endCatch
    }//endIf
    else {
      try {
        if (interested.classList.contains('toggled')) {
          const res = await fetch(`/trails/toggles/${trailId}`, {
            headers: {
              "Content-Type": "application/json",
            },
            method: 'PUT',
            body: JSON.stringify({
              visited: true,
              want_to_visit: true
            }),
          });
          if (!res.ok) throw res;
          visited.classList.add('toggled');
        }//endIf
        else {
          const res = await fetch(`/trails/toggles/${trailId}`, {
            headers: {
              "Content-Type": "application/json",
            },
            method: 'PUT',
            body: JSON.stringify({
              visited: true,
              want_to_visit: false
            }),
          });
          if (!res.ok) throw res;
          visited.classList.add('toggled');
        }//endElse
      }//endTry
      catch (err) {
        console.error(err);
      }//endCatch
    }//endElse
  });//endEventListener
  interested.addEventListener("click", async (event) => {
    if (interested.classList.contains('toggled')) {
      try {
        if (visited.classList.contains('toggled')) {
          const res = await fetch(`/trails/toggles/${trailId}`, {
            headers: {
              "Content-Type": "application/json",
            },
            method: 'PUT',
            body: JSON.stringify({
              visited: true,
              want_to_visit: false
            }),
          });
          if (!res.ok) throw res;
          interested.classList.remove('toggled');
        }//endIf
        else {
          const res = await fetch(`/trails/toggles/${trailId}`, {
            headers: {
              "Content-Type": "application/json",
            },
            method: 'PUT',
            body: JSON.stringify({
              visited: false,
              want_to_visit: false
            }),
          });
          if (!res.ok) throw res;
          interested.classList.remove('toggled');
        }//endElse
      }//endTry
      catch (err) {
        console.log(err);
      }//endCatch
    }//endIf
    else {
      try {
        if (visited.classList.contains('toggled')) {
          const res = await fetch(`/trails/toggles/${trailId}`, {
            headers: {
              "Content-Type": "application/json",
            },
            method: 'PUT',
            body: JSON.stringify({
              visited: true,
              want_to_visit: true
            }),
          });
          if (!res.ok) throw res;
          interested.classList.add('toggled');
        }//endIf
        else {
          const res = await fetch(`/trails/toggles/${trailId}`, {
            headers: {
              "Content-Type": "application/json",
            },
            method: 'PUT',
            body: JSON.stringify({
              visited: false,
              want_to_visit: true
            }),
          });
          if (!res.ok) throw res;
          interested.classList.add('toggled');
        }//endElse
      }//endTry
      catch (err) {
        console.error(err);
      }//endCatch
    }//endElse
  });//endEventListener

  /**************************************************/
  /*                  Reviews                       */
  /**************************************************/

  const reviewOpenButton = document.querySelector('.review-open-button')
  const reviewFormContainer = document.querySelector('.review-form-container')
  const reviewDisplayContainer = document.querySelector('.review-display-container')
  const submitReviewButton = document.querySelector('.submit-review')
  const cancelReviewButton = document.querySelector('.cancel-review')

  /**************************************************/
  /*            Reviews with GET route              */
  /**************************************************/
  let newToken = ""

  const { review, csrfToken } = await fetchReviews(trailId)
  newToken = csrfToken
  console.log("line 250", review);
  renderReviews(review, reviewDisplayContainer)

  //open the text box
  if (reviewOpenButton) {
    reviewOpenButton.addEventListener("click", (e) => {
      // display div with form, remove button.
      reviewFormContainer.style.display = "block";
      reviewOpenButton.style.display = "none";
    })
  }

  // POST the review, dynamically display new review
  // if (submitReviewButton) {
  //   submitReviewButton.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     const textToSend = document.querySelector(".review-text-area").value;
  //     const reviewId = postReview(`/reviews/${trailId}`, textToSend, userId, trailId)

  //     // dynamically display the new review
  //     const newReviewDiv = document.createElement("div");
  //     newReviewDiv.setAttribute("id", `review-${trailId}-div`);
  //     newReviewDiv.setAttribute("class", "each-review");
  //     // fill in review text and author
  //     const newReviewText = document.createElement("p")
  //     const newReviewUser = document.createElement("p")
  //     newReviewText.innerHTML = textToSend
  //     newReviewUser.innerHTML = `-Reviewed by ${userName}`
  //     newReviewDiv.append(newReviewText, newReviewUser)
  //     reviewDisplayContainer.append(newReviewDiv)
  //   })
  // }

  // POST the review
  if (submitReviewButton) {
    submitReviewButton.addEventListener('click', e => {
      e.preventDefault()

      const textBox = document.querySelector(".review-text-area");
      const textToSend = textBox.value;

      // const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
      console.log("line 231: is there a token here?", newToken);
      const reviewId = postReview(`/reviews/${trailId}`, textToSend, userId, trailId, newToken)

      // refresh reviewFormContainer with latest reviews
      const { reviewData, csrfToken } = fetchReviews(trailId)

      renderReviews(reviewData, reviewDisplayContainer)
      // clear and hide the form
      textBox.value = ""
      reviewFormContainer.style.display = "none"
    })
  }

  // Cancel the review, remove text box
  if (cancelReviewButton) {
    cancelReviewButton.addEventListener("click", (e) => {
      e.preventDefault();
      reviewFormContainer.style.display = "none";
      reviewOpenButton.style.display = "block"
    });
  }



});//endEventListener

/**************************************************/
/*  Helper Functions (outside of eventListener)   */
/**************************************************/


async function postReview(postRoute, textToSend, userId, trailId, newToken) {
console.log("this is the returned token", newToken);
  try {
    const res = await fetch(postRoute, {
      credentials: 'same-origin',
      method: "POST",
      headers: {
        "Content-Type": "application/json", 'CSRF-Token':newToken
      },
      body: JSON.stringify({ textToSend, userId, trailId }),
    });
    const data = await res.json();
    const reviewId = data.id;
    return reviewId;
  } catch (err) {
    console.log("Error in trails.js public",err);
  }
}

async function fetchReviews(trailId) {
  const reviewRes = await fetch(`/reviews/${trailId}`)
  const { review, csrfToken } = await reviewRes.json()

  console.log("reviewData line 282", review);
  console.log("csrf line 283", csrfToken);
  return { review , csrfToken};

  // console.log("this is review data>?>>>>/", reviewData);
  // return reviewRes;
}

//dynamically create review divs
function renderReviews(reviewArray, reviewDisplayContainer) {
  try {
    if (reviewArray.length === 0) {
      const noReviewText = document.createElement("p")
      noReviewText.innerHTML = "There are no reviews for this trail yet"
      reviewDisplayContainer.appendChild(noReviewText);
    } else {
      // empty the reviewDisplayContainer
      reviewDisplayContainer.innerHTML = "";

      reviewArray.forEach(review => {
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
