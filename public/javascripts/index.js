document.addEventListener("DOMContentLoaded", async () => {
    const allContainer = document.querySelector('.allContainer');
    function getRandomInt(min, max) {
        return Math.floor(min + Math.random() * (max - min));
    }
    const trailsArray = []
    for (var i = 0; i < 3; i++) {
        do {
            var random = getRandomInt(1, 8);
        } while( trailsArray.includes(random) );// will return false if random isn't asigned
        trailsArray.push(random);
    };//endFor
    let containerNumber = 1;
    trailsArray.forEach(async (id) => {
        const res = await fetch(`/trail/${id}`);
        const trail = await res.json();
        const trailContainer = document.createElement('div');
        trailContainer.classList.add(`trail-container${containerNumber}`);
        const trailWrapperImg = document.createElement('a');
        trailWrapperImg.href = `/trails/${id}`;
        const trailImage = document.createElement('img');
        trailImage.src = `/images/trail${id}.jpg`;
        trailImage.classList.add('trail-image');
        trailWrapperImg.appendChild(trailImage);
        trailContainer.appendChild(trailWrapperImg);
        const trailInfo = document.createElement('div');
        trailInfo.classList.add('trail-info');
        const trailWrapperName = document.createElement('a');
        trailWrapperName.href = `/trails/${trail.id}`;
        const trailName = document.createElement('h1');
        trailName.classList.add('trail-name');
        trailName.innerHTML = trail.name;
        trailWrapperName.appendChild(trailName);
        trailInfo.appendChild(trailWrapperName);
        const stateWrapper = document.createElement('a');
        stateWrapper.href = `/states/${trail.State.state_code}`;
        const trailState = document.createElement('h2');
        trailState.classList.add('trail-state');
        trailState.innerHTML = trail.State.state_code;
        stateWrapper.appendChild(trailState);
        trailInfo.appendChild(stateWrapper);
        const trailLength = document.createElement('h3');
        trailLength.classList.add('trail-length');
        trailLength.innerHTML = trail.length + ' miles';
        trailInfo.appendChild(trailLength);
        const trailDifficulty = document.createElement('h3');
        trailDifficulty.classList.add('trail-difficulty');
        trailDifficulty.innerHTML = 'Difficulty: ' + trail.difficulty;
        trailInfo.appendChild(trailDifficulty);
        trailContainer.appendChild(trailInfo);
        allContainer.appendChild(trailContainer);
        containerNumber+=1;
    });
});//endDOMContentLoadedEventListener
