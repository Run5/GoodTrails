
document.addEventListener("DOMContentLoaded", async () => {
                          //ALL TRAILS
  const allButton = document.querySelector('.allButton');
  const allContainer = document.querySelector('.allContainer');

  allButton.addEventListener('click', async (e) => {
    const res = await fetch('/my-trails/all')
    const allTrails = await res.json()
    allContainer.innerHTML = [allTrails[0].Trail.name];
    console.log(allTrails)
  })

//_____________________________________________________________________________
                        //VISITED TRAILS
  const visitedButton = document.querySelector('.visitedButton');

  visitedButton.addEventListener('click', async (e) => {
    const res = await fetch('/my-trails/visited');

    if(visitedButton.classList.contains('on')) {
      visitedButton.classList.remove('on')
    } else {
      visitedButton.classList.add('on')
    }

    const visitedTrails = await res.json();
        allContainer.innerHTML = [visitedTrails[0].Trail.name];
        console.log(visitedTrails)

  })

  // const wantToVisitButton = document.querySelector('.wantToVisit');
  // const wantToVisitContainer = document.querySelector('.wantToVisitContainer');
  // wantToVisitButton.addEventListener('click', async (e) => {
  //   const res = await fetch('/my-trails/want-to-visit')
  //   const wantToVisitTrails = await res.json()
  //   wantToVisitContainer.innerHTML = wantToVisitTrails;
  // })



});
