const inputTxt = document.getElementById("inputTxt");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    const name = inputTxt.value.trim();
    const api = `https://api.api-ninjas.com/v1/dogs?name=${name}`;
    const apiKey = 'Xyvr5lv/qRJiNk8+yENBQg==bCnZbpr0xvPVlQUo';

    fetchAPI(api, apiKey, (data) => {
        const encodedData = encodeURIComponent(JSON.stringify(data));
        window.location.href = `infopage.html?data=${encodedData}`;
    });
});

async function fetchAPI(api, apiKey, callback) {
    try {
        const response = await fetch(api, {
            headers: {
                'X-Api-Key': apiKey
            }
        });
        const data = await response.json();
        console.log(data);
        callback(data);
    } catch (error) {
        console.error("Could not fetch:", error);
    }
}
