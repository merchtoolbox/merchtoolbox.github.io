const dogFoodData = {
    "Labrador Retriever": {
        "Puppy": [
            {
                "brand": "Royal Canin Labrador Retriever Puppy",
                "image": "https://images.chewy.com/is/image/catalog/158428_MAIN._AC_SL1500_V1510208220_.jpg",
                "link": "https://www.chewy.com/royal-canin-labrador-retriever-puppy/dp/158428",
            },
            {
                "brand": "Hill's Science Diet Puppy Large Breed",
                "image": "https://images.chewy.com/is/image/catalog/282173_MAIN._AC_SL1500_V1610627607_.jpg",
                "link": "https://www.chewy.com/hills-science-diet-large-breed-puppy/dp/282173",
            },
        ],
        "Adult": [
            {
                "brand": "Blue Buffalo Life Protection Formula",
                "image": "https://images.chewy.com/is/image/catalog/292840_MAIN._AC_SL1500_V1556680863_.jpg",
                "link": "https://www.chewy.com/blue-buffalo-life-protection-formula/dp/292840",
            },
            {
                "brand": "Royal Canin Labrador Retriever Adult",
                "image": "https://images.chewy.com/is/image/catalog/291438_MAIN._AC_SL1500_V1510208221_.jpg",
                "link": "https://www.chewy.com/royal-canin-labrador-retriever-adult/dp/291438",
            },
        ],
        "Senior": [
            {
                "brand": "Hill's Science Diet Senior",
                "image": "https://images.chewy.com/is/image/catalog/269122_MAIN._AC_SL1500_V1600756508_.jpg",
                "link": "https://www.chewy.com/hills-science-diet-adult-senior/dp/269122",
            },
        ],
    },
    "German Shepherd": {
        "Puppy": [
            {
                "brand": "Royal Canin German Shepherd Puppy",
                "image": "https://images.chewy.com/is/image/catalog/292090_MAIN._AC_SL1500_V1510208224_.jpg",
                "link": "https://www.chewy.com/royal-canin-german-shepherd-puppy/dp/292090",
            },
        ],
        "Adult": [
            {
                "brand": "Taste of the Wild High Prairie",
                "image": "https://images.chewy.com/is/image/catalog/103154_MAIN._AC_SL1500_V1629207765_.jpg",
                "link": "https://www.chewy.com/taste-wild-high-prairie-adult/dp/103154",
            },
        ],
        "Senior": [
            {
                "brand": "Wellness CORE Grain-Free Senior",
                "image": "https://images.chewy.com/is/image/catalog/186337_MAIN._AC_SL1500_V1576523793_.jpg",
                "link": "https://www.chewy.com/wellness-core-grain-free-senior/dp/186337",
            },
        ],
    },
    // Additional breeds and recommendations can be added here
};

// Function to get dog food recommendations
function getDogFoodRecommendations(breed, age) {
    const recommendations = dogFoodData[breed]?.[age]; // Optional chaining
    let output = '<h2>Your Recommendations:</h2>';

    if (recommendations) {
        recommendations.forEach(food => {
            output += `
                <div class="food-item">
                    <img src="${food.image}" alt="${food.brand}">
                    <h3>${food.brand}</h3>
                    <a href="${food.link}" target="_blank">Shop Now</a>
                </div>
            `;
        });
    } else {
        output += '<p>No recommendations available for this selection.</p>';
    }
    document.getElementById('results').innerHTML = output;
}

// Event listener for the button
document.getElementById('start-button').addEventListener('click', () => {
    const breed = document.getElementById('breed').value;
    const age = document.getElementById('age').value;

    if (breed && age) {
        getDogFoodRecommendations(breed, age);
    } else {
        alert('Please select both breed and age.');
    }
});
