document.addEventListener("DOMContentLoaded", async () => {

/*==========================================================================*/
/*===========================    Declarations    ===========================*/
/*==========================================================================*/
  const allButton = document.querySelector('.allButton');
  const allContainer = document.querySelector('.allContainer');
  const actualError = document.querySelector('.actualError');
  const visitedButton = document.querySelector('.visitedButton');
  const interestedButton = document.querySelector('.wantToVisit');
  const errorContainer = document.querySelector('.errorContainer');
  const tryFetch = async (url, container, button) => {
    try {
      const res = await fetch(url);
      const visitedTrails = await res.json();
      visitedTrails.forEach((trail) => {
        const trailContainer = document.createElement('div');
        trailContainer.classList.add('trail-container');
        const trailWrapperImg = document.createElement('a');
        trailWrapperImg.href = `/trails/${trail.Trail.id}`;
        const trailImage = document.createElement('img');
        trailImage.src = `/images/trail${trail.Trail.id}.jpg`;
        trailImage.classList.add('trail-image');
        trailWrapperImg.appendChild(trailImage);
        trailContainer.appendChild(trailWrapperImg);
        const trailInfo = document.createElement('div');
        trailInfo.classList.add('trail-info');
        const trailWrapperName = document.createElement('a');
        trailWrapperName.href = `/trails/${trail.Trail.id}`;
        const trailName = document.createElement('h1');
        trailName.classList.add('trail-name');
        trailName.innerHTML = trail.Trail.name;
        trailWrapperName.appendChild(trailName);
        trailInfo.appendChild(trailWrapperName);
        const stateWrapper = document.createElement('a');
        stateWrapper.href = `/states/${trail.Trail.State.state_code}`;
        const trailState = document.createElement('h2');
        trailState.classList.add('trail-state');
        trailState.innerHTML = trail.Trail.State.state_code;
        stateWrapper.appendChild(trailState);
        trailInfo.appendChild(stateWrapper);
        const trailLength = document.createElement('h3');
        trailLength.classList.add('trail-length');
        trailLength.innerHTML = trail.Trail.length + ' miles';
        trailInfo.appendChild(trailLength);
        const trailDifficulty = document.createElement('h3');
        trailDifficulty.classList.add('trail-difficulty');
        trailDifficulty.innerHTML = 'Difficulty: ' + trail.Trail.difficulty;
        trailInfo.appendChild(trailDifficulty);
        trailContainer.appendChild(trailInfo);
        container.appendChild(trailContainer);
      });//endForEach
      button.classList.add('toggled');
    }//endTry
    catch (err) {
      console.log('Sorry, we couldn\'t find any trails!', err);
      if(errorContainer.firstChild) actualError.innerHTML = 'Sorry, we couldn\'t find any trails in this collection.';
      else {
        const actualError = document.createElement('div');
        actualError.innerHTML = 'Sorry, we couldn\'t find any trails in this collection.';
      }//endElse
      button.classList.add('toggled');
    }//endCatch
  };//endFunction

/*========================================================================*/
/*===========================    All TRAILS    ===========================*/
/*========================================================================*/

  allButton.addEventListener('click', async (e) => {
    if(interestedButton.classList.contains('toggled') || visitedButton.classList.contains('toggled')) {
      while (allContainer.firstChild) allContainer.removeChild(allContainer.firstChild);
      while (errorContainer.firstChild) errorContainer.removeChild(errorContainer.firstChild);
      interestedButton.classList.remove('toggled');
      visitedButton.classList.remove('toggled');
    }//endIf
    if(allButton.classList.contains('toggled')) {
      while (allContainer.firstChild) allContainer.removeChild(allContainer.firstChild);
      while (errorContainer.firstChild) errorContainer.removeChild(errorContainer.firstChild);
      allButton.classList.remove('toggled');
    }//endIf
    else {
      tryFetch('/my-trails/all', allContainer, allButton);
    }//endElse
  })//endEventListener

/*============================================================================*/
/*===========================    VISITED TRAILS    ===========================*/
/*============================================================================*/
  visitedButton.addEventListener('click', async (e) => {
    if(interestedButton.classList.contains('toggled') || allButton.classList.contains('toggled')) {
      while (allContainer.firstChild) allContainer.removeChild(allContainer.firstChild);
      while (errorContainer.firstChild) errorContainer.removeChild(errorContainer.firstChild);
      interestedButton.classList.remove('toggled');
      allButton.classList.remove('toggled');
    }//endIf
    if(visitedButton.classList.contains('toggled')) {
      while (allContainer.firstChild) allContainer.removeChild(allContainer.firstChild);
      while (errorContainer.firstChild) errorContainer.removeChild(errorContainer.firstChild);
      visitedButton.classList.remove('toggled');
    }//endIf
    else {
      tryFetch('/my-trails/visited', allContainer, visitedButton);
    }//endElse
  })//endEventListener

/*===============================================================================*/
/*===========================    Interested TRAILS    ===========================*/
/*===============================================================================*/
  interestedButton.addEventListener('click', async (e) => {
    if(visitedButton.classList.contains('toggled') || allButton.classList.contains('toggled')) {
      while (allContainer.firstChild) allContainer.removeChild(allContainer.firstChild);
      while (errorContainer.firstChild) errorContainer.removeChild(errorContainer.firstChild);
      visitedButton.classList.remove('toggled');
      allButton.classList.remove('toggled');
    }//endIf
    if(interestedButton.classList.contains('toggled')) {
      while (allContainer.firstChild) allContainer.removeChild(allContainer.firstChild);
      while (errorContainer.firstChild) errorContainer.removeChild(errorContainer.firstChild);
      interestedButton.classList.remove('toggled');
    }//endIf
    else {
      tryFetch('/my-trails/want_to_visit', allContainer, interestedButton);
    }//endElse
  })//endEventListener

/*================================================================================*/
/*============================    Clicking a Trail    ============================*/
/*================================================================================*/
  // allContainer.addEventListener("click", (event) => {
  //   if(event.target.classList.contains('trail-image')) {
  //     console.log('THIS IS THE TRAIL IMAGE YOU CLICKED');
  //     window.redirect(`/trails/${id}`);
  //   }//endIf
  // });//endEventListener

});//endDOMContentLoadedEventListener
