document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch(`https://localhost:8080/toggles/${trailId}`)
    const { trailToggles} = await res.json();
    console.log(`===================================`, trailToggles)
    const visited = document.querySelector('.visited')
    if(trailToggles.visited === true){
        visited.classList.add('working')
    }

  }
  catch (err){
    console.error(err)
  }

});
