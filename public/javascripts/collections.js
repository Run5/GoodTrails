
document.addEventListener("DOMContentLoaded", async () => {
                          //ALL TRAILS
  const allButton = document.querySelector('.allButton');
  const allContainer = document.querySelector('.allContainer');
  const actualError = document.querySelector('.actualError');
  const visitedButton = document.querySelector('.visitedButton');

hideButton = () => {
  if(allContainer.style.visibility === 'hidden') {
    allContainer.style.visibility === 'visible'
  } else {
    allContainer.style.visibility === 'hidden'
  }
}

  allButton.addEventListener('click', async (e) => {
    hideButton(allButton)
    try {

      const res = await fetch('/my-trails/all');

      if(allButton.classList.contains('on')) {
        allButton.classList.remove('on');
        allButton.classList.add('off');
      } else {
        allButton.classList.remove('off');
        allButton.classList.add('on');
      }

      const allTrails = await res.json()
      allContainer.innerHTML = [allTrails[0].Trail.name];
      console.log(allTrails);

    } catch (err) {

      console.log('Sorry, we couldn\'t find any trails!', err);
      actualError.innerHTML = 'Sorry, we couldn\'t find any trails that you\'ve visited';
    }
  })

//_____________________________________________________________________________
                        //VISITED TRAILS
  visitedButton.addEventListener('click', async (e) => {
    try {

      const res = await fetch('/my-trails/visited');


      if(visitedButton.classList.contains('on')) {
          // visitedButton.classList.remove('on');
          visitedButton.classList.toggle('off')
          allContainer.style.visibility = 'hidden';
          // visitedButton.classList.add('off');
        } else {
            visitedButton.classList.toggle('on')
            allContainer.style.visibility = 'visible';
            // visitedButton.classList.remove('off');
            // visitedButton.classList.add('on');
          }

          const visitedTrails = await res.json();
          allContainer.innerHTML = [visitedTrails[0].Trail.name];
          console.log(visitedTrails);

        } catch (err) {
          console.log('Sorry, we couldn\'t find any trails!', err);
          actualError.innerHTML = 'Sorry, we couldn\'t find any trails that you\'ve visited';
        }
  })

  // const wantToVisitButton = document.querySelector('.wantToVisit');
  // const wantToVisitContainer = document.querySelector('.wantToVisitContainer');
  // wantToVisitButton.addEventListener('click', async (e) => {
  //   const res = await fetch('/my-trails/want-to-visit')
  //   const wantToVisitTrails = await res.json()
  //   wantToVisitContainer.innerHTML = wantToVisitTrails;
  // })



});
