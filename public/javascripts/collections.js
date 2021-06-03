document.addEventListener("DOMContentLoaded", async () => {
                          //ALL TRAILS
  const allButton = document.querySelector('.allButton');
  const allContainer = document.querySelector('.allContainer');
  const actualError = document.querySelector('.actualError');
  const visitedButton = document.querySelector('.visitedButton');

  allButton.addEventListener('click', async (e) => {
    try {
      const res = await fetch('/my-trails/all');

      const allTrails = await res.json()
      allContainer.innerHTML = [allTrails[0].Trail.name];
      console.log(allTrails);

    } catch(err) {
      console.log('Sorry, we couldn\'t find any trails!', err);
      actualError.innerHTML = 'Sorry, we couldn\'t find any trails that you\'ve visited';
    }
  })

//_____________________________________________________________________________
                        //VISITED TRAILS
  visitedButton.addEventListener('click', async (e) => {
    try {
          const res = await fetch('/my-trails/visited');

          const visitedTrails = await res.json();
          allContainer.innerHTML = [visitedTrails[0].Trail.name];
          console.log(visitedTrails);
        } catch (err) {
          console.log('Sorry, we couldn\'t find any trails!', err);
          actualError.innerHTML = 'Sorry, we couldn\'t find any trails that you\'ve visited';
        }
  })
});
