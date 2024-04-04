window.onload = function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const encodedData = urlParams.get('data');

    if (encodedData) {
        const decodedData = JSON.parse(decodeURIComponent(encodedData));
        showData(decodedData[0]);
        console.log(decodedData)

    } else {
        console.error("Data not found in URL");
    }
}

function showData(breeds) {

    const main = document.getElementById('main');
    main.innerHTML = '';
    if (!breeds) {
        console.error('Data is undefined');
        return;
    }
    const { image_link, max_life_expectancy, min_life_expectancy, min_height_female, max_height_male, min_weight_female, max_weight_male, energy, trainability, barking } = breeds;

    const element = document.createElement('div');
    element.classList.add('continer-page');

    const img = document.createElement('div'); 
    img.classList.add('img');
    img.style.backgroundImage = `url("${image_link}")`;

    const info = document.createElement('div');
    info.classList.add('info');

    info.innerHTML = `
        <div class="stats age">age: ${min_life_expectancy}-${max_life_expectancy}</div>
        <div class="stats height">Height: ${min_height_female}-${max_height_male}</div>
        <div class="stats weight">Weight: ${min_weight_female}-${max_weight_male}</div>
        <div class="stats energy">Energy: ${energy}/5</div>
        <div class="stats trainability">Trainability: ${trainability}/5</div>
        <div class="stats barking">Barking: ${barking}/5</div>
    `;

    element.appendChild(img);
    element.appendChild(info);

    main.appendChild(element);
}
