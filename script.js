document.addEventListener('DOMContentLoaded', () => {
    const petForm = document.getElementById('pet-form');
    const resultsDiv = document.getElementById('results');

    petForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting

        const breed = document.getElementById('breed').value;
        const age = document.getElementById('age').value;
        const weight = document.getElementById('weight').value;
        const diet = document.getElementById('diet').value;

        // Call your function to get recommendations based on these inputs
        getDogFoodRecommendations(breed, age, weight, diet);
    });

    function getDogFoodRecommendations(breed, age, weight, diet) {
        // Basic recommendations logic (you can expand this)
        let recommendations = [];
        
        // Sample food recommendations based on the breed
        if (breed === "Labrador Retriever") {
            recommendations.push("Labrador Retriever Specific Food");
        } else if (breed === "German Shepherd") {
            recommendations.push("German Shepherd Diet Formula");
        } else if (breed === "Golden Retriever") {
            recommendations.push("Golden Retriever Nutritional Mix");
        } else {
            recommendations.push("General Dog Food for " + breed);
        }

        // Adjust recommendations based on age
        if (age === "<1") {
            recommendations.push("Puppy Food");
        } else if (age === "10+") {
            recommendations.push("Senior Dog Food");
        }

        // Weight considerations
        if (weight === "1-10") {
            recommendations.push("Small Breed Food");
        } else if (weight === "71-80") {
            recommendations.push("Large Breed Food");
        }

        // Dietary preferences
        if (diet === "grain-free") {
            recommendations.push("Grain-Free Formula");
        } else if (diet === "hypoallergenic") {
            recommendations.push("Hypoallergenic Dog Food");
        }

        // Display the recommendations
        resultsDiv.innerHTML = `
            <h2>Recommended Dog Food:</h2>
            <p>Breed: ${breed}</p>
            <p>Age: ${age}</p>
            <p>Weight: ${weight}</p>
            <p>Dietary Preference: ${diet}</p>
            <ul>
                ${recommendations.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
    }
});
