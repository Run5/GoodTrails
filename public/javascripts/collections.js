
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
  const visitedContainer = document.querySelector('.visitedContainer');

  visitedButton.addEventListener('click', async (e) => {
    const res = await fetch('/my-trails/visited');

    const visitedTrails = await res.json();

        visitedContainer.innerHTML = [visitedTrails[0].Trail.name];
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
