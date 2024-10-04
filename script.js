const dogFoodData = {
    "Labrador Retriever": {
        "Puppy": [
            {
                "brand": "Royal Canin Labrador Retriever Puppy",
                "image": "https://example.com/royal-canin-labrador-puppy.jpg",
                "link": "https://www.chewy.com/royal-canin-labrador-retriever-puppy/dp/158428",
            },
            {
                "brand": "Hill's Science Diet Puppy Large Breed",
                "image": "https://example.com/hills-science-diet-puppy.jpg",
                "link": "https://www.chewy.com/hills-science-diet-large-breed-puppy/dp/282173",
            },
        ],
        "Adult": [
            {
                "brand": "Blue Buffalo Life Protection Formula",
                "image": "https://example.com/blue-buffalo-adult.jpg",
                "link": "https://www.chewy.com/blue-buffalo-life-protection-formula/dp/292840",
            },
            {
                "brand": "Royal Canin Labrador Retriever Adult",
                "image": "https://example.com/royal-canin-labrador-adult.jpg",
                "link": "https://www.chewy.com/royal-canin-labrador-retriever-adult/dp/291438",
            },
        ],
        "Senior": [
            {
                "brand": "Hill's Science Diet Senior",
                "image": "https://example.com/hills-science-diet-senior.jpg",
                "link": "https://www.chewy.com/hills-science-diet-adult-senior/dp/269122",
            },
        ],
    },
    "German Shepherd": {
        "Puppy": [
            {
                "brand": "Royal Canin German Shepherd Puppy",
                "image": "https://example.com/royal-canin-german-puppy.jpg",
                "link": "https://www.chewy.com/royal-canin-german-shepherd-puppy/dp/292090",
            },
        ],
        "Adult": [
            {
                "brand": "Taste of the Wild High Prairie",
                "image": "https://example.com/taste-of-the-wild-adult.jpg",
                "link": "https://www.chewy.com/taste-wild-high-prairie-adult/dp/103154",
            },
        ],
        "Senior": [
            {
                "brand": "Wellness CORE Grain-Free Senior",
                "image": "https://example.com/wellness-core-senior.jpg",
                "link": "https://www.chewy.com/wellness-core-grain-free-senior/dp/186337",
            },
        ],
    },
    // Additional breeds and recommendations can be added here
};

// Function to get dog food recommendations
function getDogFoodRecommendations(breed, age) {
    const recommendations = dogFoodData[breed][age];
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

    getDogFoodRecommendations(breed, age);
});
