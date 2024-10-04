document.getElementById('pet-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const breed = document.getElementById('breed').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const diet = document.getElementById('diet').value;

    // Clear previous results
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    // Mapping for specific dog food recommendations
    const recommendationsMap = {
        'Labrador Retriever': {
            '<1': ['Brand A Puppy Formula', 'Brand B Puppy Food'],
            '1-6': ['Brand C Adult Dog Food', 'Brand D High-Protein'],
            '7+': ['Brand E Senior Dog Food', 'Brand F Joint Support'],
        },
        'German Shepherd': {
            '<1': ['Brand G Puppy Formula', 'Brand H High-Fat Puppy Food'],
            '1-6': ['Brand I Adult Dog Food', 'Brand J Grain-Free'],
            '7+': ['Brand K Senior Formula', 'Brand L Sensitive Stomach'],
        },
        // Add more breeds and their specific recommendations
    };

    let recommendations = '';

    if (breed && age && weight) {
        // Retrieve recommendations based on breed, age, and dietary preference
        if (recommendationsMap[breed]) {
            recommendations += `<h3>Best Food for a ${breed}:</h3>`;
            recommendations += `<ul>`;
            const specificRecommendations = recommendationsMap[breed][age] || [];
            specificRecommendations.forEach(brand => {
                recommendations += `<li>${brand}</li>`;
            });
            recommendations += `</ul>`;
        } else {
            recommendations += `<p>We don't have recommendations for this breed yet.</p>`;
        }

        // Add dietary preferences
        if (diet === 'grain-free') {
            recommendations += '<p>For a grain-free option, consider "Brand M Grain-Free" for your dog.</p>';
        } else if (diet === 'hypoallergenic') {
            recommendations += '<p>For hypoallergenic needs, "Brand N Limited Ingredients" is a great choice.</p>';
        } else if (diet === 'senior') {
            recommendations += '<p>Consider "Brand O Senior Formula" for older dogs.</p>';
        } else if (diet === 'puppy') {
            recommendations += '<p>Look into "Brand P Puppy Formula" for growing pups.</p>';
        }
    } else {
        recommendations = '<p>Please fill out all fields to get recommendations.</p>';
    }

    // Display specific recommendations
    resultsDiv.innerHTML = recommendations;
});
