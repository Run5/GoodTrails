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

  let newToken = ""

  const { review, csrfToken } = await fetchReviews(trailId)
  newToken = csrfToken
  renderReviews(review, reviewDisplayContainer)

  //open the text box
  if (reviewOpenButton) {
    reviewOpenButton.addEventListener("click", (e) => {
      // display div with form, remove button.
      reviewFormContainer.style.display = "block";
      reviewOpenButton.style.display = "none";
    })
  }

  // POST the review
  if (submitReviewButton) {

    submitReviewButton.addEventListener('click', async (e) => {
      e.preventDefault()

      const textBox = document.querySelector(".review-text-area");
      const textToSend = textBox.value;
      const {updatedReviews} = await postReview(`/reviews/${trailId}`, textToSend, userId, trailId, newToken)

      console.log("line 209 updatedReviews array", updatedReviews);
      renderReviews(updatedReviews, reviewDisplayContainer)

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

async function fetchReviews(trailId) {
  const reviewRes = await fetch(`/reviews/${trailId}`)

  const { review, csrfToken } = await reviewRes.json()
  return { review, csrfToken };
}

async function postReview(postRoute, textToSend, userId, trailId, newToken) {
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
    console.log("line 252 data is a promise still?", data);
    return data;

  } catch (err) {
    console.log("Error in trails.js public",err);
  }
}

//dynamically create review divs
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
