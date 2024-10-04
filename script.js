const dogFoodRecommendations = {
    "Labrador Retriever": {
        "<1": [
            {
                name: "Royal Canin Labrador Retriever Puppy",
                image: "https://example.com/royal-canin-labrador-puppy.jpg",
                link: "https://www.royalcanin.com/us/dogs/products/retail/labrador-retriever-puppy-dry-dog-food"
            },
            {
                name: "Hill's Science Diet Puppy",
                image: "https://example.com/hills-science-diet-puppy.jpg",
                link: "https://www.hillspet.com/dog-food/sd-canine-large-breed-puppy"
            },
            {
                name: "Purina Pro Plan Puppy",
                image: "https://example.com/purina-pro-plan-puppy.jpg",
                link: "https://www.proplan.com/dogs/products/purina-pro-plan-puppy-large-breed/"
            },
            {
                name: "Blue Buffalo Life Protection Puppy",
                image: "https://example.com/blue-buffalo-puppy.jpg",
                link: "https://bluebuffalo.com/dog-food/life-protection-formula/labrador-retriever-puppy/"
            },
            {
                name: "Wellness Complete Health Puppy",
                image: "https://example.com/wellness-complete-puppy.jpg",
                link: "https://www.wellnesspetfood.com/dog-food/complete-health-puppy/"
            }
        ],
        "1-6": [
            {
                name: "Blue Buffalo Life Protection Adult",
                image: "https://example.com/blue-buffalo-adult.jpg",
                link: "https://bluebuffalo.com/dog-food/life-protection-formula/labrador-retriever-adult/"
            },
            {
                name: "Merrick Grain-Free Texas Beef & Sweet Potato",
                image: "https://example.com/merrick-beef-sweet-potato.jpg",
                link: "https://www.merrickpetcare.com/dog-food/grain-free/texas-beef-sweet-potato-recipe/"
            },
            {
                name: "Royal Canin Labrador Retriever Adult",
                image: "https://example.com/royal-canin-labrador-adult.jpg",
                link: "https://www.royalcanin.com/us/dogs/products/retail/labrador-retriever-adult-dry-dog-food"
            },
            {
                name: "Purina Pro Plan Savor Adult",
                image: "https://example.com/purina-pro-plan-adult.jpg",
                link: "https://www.proplan.com/dogs/products/pro-plan-savor-adult/"
            },
            {
                name: "Wellness Core Grain-Free",
                image: "https://example.com/wellness-core-adult.jpg",
                link: "https://www.wellnesspetfood.com/dog-food/core-grain-free/"
            }
        ],
        "7+": [
            {
                name: "Hill's Science Diet Senior",
                image: "https://example.com/hills-science-diet-senior.jpg",
                link: "https://www.hillspet.com/dog-food/sd-canine-large-breed-senior"
            },
            {
                name: "Royal Canin Mature 8+",
                image: "https://example.com/royal-canin-mature.jpg",
                link: "https://www.royalcanin.com/us/dogs/products/retail/labrador-retriever-mature-8-dry-dog-food"
            },
            {
                name: "Blue Buffalo Life Protection Senior",
                image: "https://example.com/blue-buffalo-senior.jpg",
                link: "https://bluebuffalo.com/dog-food/life-protection-formula/labrador-retriever-senior/"
            },
            {
                name: "Purina Pro Plan Bright Mind Senior",
                image: "https://example.com/purina-pro-plan-senior.jpg",
                link: "https://www.proplan.com/dogs/products/pro-plan-bright-mind-senior/"
            },
            {
                name: "Merrick Grain-Free Senior",
                image: "https://example.com/merrick-senior.jpg",
                link: "https://www.merrickpetcare.com/dog-food/grain-free/senior-recipe/"
            }
        ]
    },
    // Add other breeds in the same format...
};

// Example function to get recommendations
function getRecommendations(breed, age) {
    return dogFoodRecommendations[breed][age].map(food => `
        <div class="food-item">
            <h3>${food.name}</h3>
            <img src="${food.image}" alt="${food.name}">
            <a href="${food.link}" target="_blank">Shop Now</a>
        </div>
    `).join('');
}
