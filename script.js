const memeImage = document.getElementById('meme-img');
const memeButton = document.getElementById('btn-meme');


memeButton.addEventListener('click', fetchMemeImage);

function fetchMemeImage() {
    // let clientID = "tE7UOZI-TDa9p_z6KPlwNVO9y58FkbkO3NJ3ivX10qE"
    let endpoint = "https://api.unsplash.com/photos/random?client_id=tE7UOZI-TDa9p_z6KPlwNVO9y58FkbkO3NJ3ivX10qE&query=cars"
    let imageElement = document.querySelector("#unplashImage");
    let imageLink = document.querySelector("#imageLink");

    fetch(endpoint)
        .then((response) => response.json())
        .then((jsonData) => {
            imageElement.src = jsonData.urls.regular;
            imageLink.setAttribute("href", jsonData.links.html);

        })
        .catch((error) => {
            console.log("Error: " + error);

    });

}