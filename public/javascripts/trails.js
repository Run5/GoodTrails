document.addEventListener("DOMContentLoaded", async () => {

  // Grab the elements on the page to manipulate
  const trailHeader = document.querySelector('h1');
  const response = await fetch('/users/current')
  const user = await response.json()
  const trailId = trailHeader.id;
  const userId = user.id
  const userName = user.username
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

  const { review, csrfToken } = await getReviews(trailId)
  newToken = csrfToken
  renderReviews(review, reviewDisplayContainer, userId)

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
      const { updatedReviews } = await postReview(trailId, textToSend, newToken)
      renderReviews(updatedReviews, reviewDisplayContainer, userId)
      // clear and hide the form
      textBox.value = ""
      reviewFormContainer.style.display = "none"
      //consider resetting reviewFormContainer to allow another review
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

  // Delete the review
  const deleteReviewButtons = document.querySelectorAll('.delete-review')
  if (deleteReviewButtons) {
    deleteReviewButtons.forEach(review => {
      review.addEventListener("click", async (e) => {
        const updatedReviews2 = await fetch(`/reviews/${review.id}`, {
          method: "DELETE"
        })
        renderReviews(updatedReviews2, reviewDisplayContainer, userId)
      })
    })
  }

});//endEventListener

/**************************************************/
/*  Helper Functions (outside of eventListener)   */
/**************************************************/

async function getReviews(trailId) {
  const reviewRes = await fetch(`/trails/${trailId}/reviews`)
  const { review, csrfToken } = await reviewRes.json()
  return { review, csrfToken };
}

async function postReview(trailId, textToSend, newToken) {
  try {
    const postRoute = `/trails/${trailId}/reviews`

    const res = await fetch(postRoute, {
      credentials: 'same-origin',
      method: "POST",
      headers: {
        "Content-Type": "application/json", 'CSRF-Token': newToken
      },
      body: JSON.stringify({ textToSend }),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Error in trails.js public", err);
  }
}

//dynamically create review divs
function renderReviews(reviews, reviewDisplayContainer, userId) {
  try {
    if (reviews.length === 0) {
      const noReviewText = document.createElement("p")
      noReviewText.innerHTML = "There are no reviews for this trail yet"
      reviewDisplayContainer.appendChild(noReviewText);
    } else {
      reviewDisplayContainer.innerHTML = ""; //clear container
      reviews.forEach(review => {
        // create the review div: text, user, delete button
        const newReviewDiv = document.createElement("div");
        newReviewDiv.setAttribute("id", `review-${review.id}-div`);
        newReviewDiv.setAttribute("class", "each-review");
        const newReviewText = document.createElement("p")
        const newReviewUser = document.createElement("p")

        newReviewText.innerHTML = review.review
        newReviewUser.innerHTML = `-Reviewed by ${review.User.username}`

        // delete button for logged in users
        if (userId === review.user_id) {
          const deleteReviewButton = document.createElement("span")
          deleteReviewButton.classList.add('delete-review')
          deleteReviewButton.setAttribute("id", `${review.id}`)
          deleteReviewButton.innerHTML = 'Delete'
          newReviewDiv.append(newReviewText, newReviewUser, deleteReviewButton)
        } else { newReviewDiv.append(newReviewText, newReviewUser) }

        reviewDisplayContainer.append(newReviewDiv)
      })
    }
  } catch (error) {
    console.error(error);
  }
}
