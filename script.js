const dogFoodRecommendations = {
    "Labrador Retriever": {
        "<1": [
            {
                name: "Royal Canin Labrador Retriever Puppy",
                image: "https://cdn.royalcanin.com/royalcanin/dog-2019/images/product/2840-4d9e94.jpg",
                link: "https://www.royalcanin.com/us/dogs/products/retail/labrador-retriever-puppy-dry-dog-food"
            },
            {
                name: "Hill's Science Diet Puppy Large Breed",
                image: "https://www.hillspet.com/-/media/hills/dog-food/hills-science-diet-large-breed-puppy-dry-dog-food/size-180-10-46-300-72-1.png",
                link: "https://www.hillspet.com/dog-food/sd-canine-large-breed-puppy"
            },
            {
                name: "Purina Pro Plan Puppy Large Breed",
                image: "https://www.proplan.com/dogs/wp-content/uploads/sites/15/2017/07/puppy-large-breed.jpg",
                link: "https://www.proplan.com/dogs/products/pro-plan-puppy-large-breed/"
            },
            {
                name: "Blue Buffalo Life Protection Puppy",
                image: "https://www.bluebuffalo.com/wp-content/uploads/2021/07/Blue-Buffalo-Dog-Food-Product-Page_Life-Protection-Puppy-Formula.jpg",
                link: "https://bluebuffalo.com/dog-food/life-protection-formula/labrador-retriever-puppy/"
            },
            {
                name: "Wellness Complete Health Puppy",
                image: "https://www.wellnesspetfood.com/wp-content/uploads/2021/08/Wellness-Complete-Health-Puppy-1.jpg",
                link: "https://www.wellnesspetfood.com/dog-food/complete-health-puppy/"
            }
        ],
        "1-6": [
            {
                name: "Blue Buffalo Life Protection Adult",
                image: "https://www.bluebuffalo.com/wp-content/uploads/2021/07/Blue-Buffalo-Dog-Food-Product-Page_Life-Protection-Adult-Formula.jpg",
                link: "https://bluebuffalo.com/dog-food/life-protection-formula/labrador-retriever-adult/"
            },
            {
                name: "Merrick Grain-Free Texas Beef & Sweet Potato",
                image: "https://www.merrickpetcare.com/wp-content/uploads/2021/05/Merrick-Texas-Beef-Recipe-Dry-Dog-Food-1.jpg",
                link: "https://www.merrickpetcare.com/dog-food/grain-free/texas-beef-sweet-potato-recipe/"
            },
            {
                name: "Royal Canin Labrador Retriever Adult",
                image: "https://cdn.royalcanin.com/royalcanin/dog-2019/images/product/2841-bf7e12.jpg",
                link: "https://www.royalcanin.com/us/dogs/products/retail/labrador-retriever-adult-dry-dog-food"
            },
            {
                name: "Purina Pro Plan Savor Adult",
                image: "https://www.proplan.com/dogs/wp-content/uploads/sites/15/2017/07/savor-adult.jpg",
                link: "https://www.proplan.com/dogs/products/pro-plan-savor-adult/"
            },
            {
                name: "Wellness Core Grain-Free",
                image: "https://www.wellnesspetfood.com/wp-content/uploads/2021/07/Wellness-Core-Grain-Free-Adult-Dog-Food.jpg",
                link: "https://www.wellnesspetfood.com/dog-food/core-grain-free/"
            }
        ],
        "7+": [
            {
                name: "Hill's Science Diet Senior",
                image: "https://www.hillspet.com/-/media/hills/dog-food/hills-science-diet-large-breed-senior-dry-dog-food/size-180-10-46-300-72-1.png",
                link: "https://www.hillspet.com/dog-food/sd-canine-large-breed-senior"
            },
            {
                name: "Royal Canin Mature 8+",
                image: "https://cdn.royalcanin.com/royalcanin/dog-2019/images/product/2842-43f5f8.jpg",
                link: "https://www.royalcanin.com/us/dogs/products/retail/labrador-retriever-mature-8-dry-dog-food"
            },
            {
                name: "Blue Buffalo Life Protection Senior",
                image: "https://www.bluebuffalo.com/wp-content/uploads/2021/07/Blue-Buffalo-Dog-Food-Product-Page_Life-Protection-Senior-Formula.jpg",
                link: "https://bluebuffalo.com/dog-food/life-protection-formula/labrador-retriever-senior/"
            },
            {
                name: "Purina Pro Plan Bright Mind Senior",
                image: "https://www.proplan.com/dogs/wp-content/uploads/sites/15/2017/07/bright-mind-senior.jpg",
                link: "https://www.proplan.com/dogs/products/pro-plan-bright-mind-senior/"
            },
            {
                name: "Merrick Grain-Free Senior",
                image: "https://www.merrickpetcare.com/wp-content/uploads/2021/06/Merrick-Grain-Free-Senior-Dog-Food.jpg",
                link: "https://www.merrickpetcare.com/dog-food/grain-free/senior-recipe/"
            }
        ]
    },
    // Additional breeds can be added in the same format.
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
