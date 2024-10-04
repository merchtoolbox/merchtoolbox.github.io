document.getElementById('pet-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const breed = document.getElementById('breed').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const diet = document.getElementById('diet').value;

    // Clear previous results
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    // Simple recommendation logic based on breed, age, weight, and dietary preferences
    let recommendations = '';

    if (breed && age && weight) {
        // Example specific recommendation logic
        recommendations += `<h3>Best Food for a ${breed}:</h3>`;
        
        if (age === '<1') {
            recommendations += '<p>We recommend a puppy formula with high protein and fat content for growth.</p>';
        } else if (age >= '7') {
            recommendations += '<p>Senior formulas with joint support and lower calories are ideal for older dogs.</p>';
        } else {
            recommendations += '<p>A balanced adult dog food with moderate protein and fat should work well.</p>';
        }

        if (diet === 'grain-free') {
            recommendations += '<p>Look for grain-free options with ingredients like sweet potato and pea.</p>';
        } else if (diet === 'hypoallergenic') {
            recommendations += '<p>Hypoallergenic formulas with limited ingredients are best for dogs with sensitivities.</p>';
        } else if (diet === 'senior') {
            recommendations += '<p>Senior-specific formulas can help support joint health and weight management.</p>';
        } else if (diet === 'puppy') {
            recommendations += '<p>Puppy-specific formulas are designed for rapid growth and development.</p>';
        }

        // Add more specific recommendations here if desired
    } else {
        recommendations = '<p>Please fill out all fields to get recommendations.</p>';
    }

    // Display specific recommendations
    resultsDiv.innerHTML = recommendations;
});
