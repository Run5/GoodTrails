document.addEventListener("DOMContentLoaded", async () => {

  // Grab the elements on the page to manipulate
  const trailHeader = document.querySelector('h1');
  // Grab the trail id passed in through the pug template
  const trailId = trailHeader.id;
  const visited = document.querySelector('.visited');
  const interested = document.querySelector('.interested');

  try {

    const res = await fetch(`/trails/toggles/${trailId}`);
    const { trailToggles } = await res.json();
    console.log(trailToggles);
    // Setting the initial state of the buttons from the database
    if (trailToggles[0].visited) visited.classList.add('toggled');
    else visited.classList.remove('toggled');
    if (trailToggles[0].want_to_visit) interested.classList.add('toggled');
    else interested.classList.remove('toggled');

  }//endTry
  catch (err) {

    console.error(err);

  }//endCatch

  visited.addEventListener("click", async (event) => {

    if (visited.classList.contains('toggled')) {

      try {

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
            method: 'POST',
            body: JSON.stringify({
              visited: true,
              want_to_visit: true
            }),
          });

        }//endIf
        else {

          const res = await fetch(`/trails/toggles/${trailId}`, {
            headers: {
              "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({
              visited: true,
              want_to_visit: false
            }),
          });

        }//endElse

        if (!res.ok) throw res;

        visited.classList.add('toggled');

      }//endTry
      catch (err) {

        console.error(err);

      }//endCatch

    }//endElse

  });//endEventListener

});//endEventListener

