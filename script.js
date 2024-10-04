document.getElementById('pet-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const breed = document.getElementById('breed').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseInt(document.getElementById('weight').value);
    const diet = document.getElementById('diet').value;

    let recommendations = '';

    if (diet === 'grain-free') {
        recommendations += '<h3>Recommended Grain-Free Pet Foods:</h3>';
        recommendations += '<p>Blue Buffalo Wilderness, Wellness CORE, Taste of the Wild</p>';
    } else if (diet === 'hypoallergenic') {
        recommendations += '<h3>Recommended Hypoallergenic Pet Foods:</h3>';
        recommendations += '<p>Hill’s Science Diet Sensitive Stomach, Royal Canin Veterinary Diet, Purina Pro Plan Veterinary Diets</p>';
    } else if (diet === 'senior' && age > 7) {
        recommendations += '<h3>Recommended Senior Pet Foods:</h3>';
        recommendations += '<p>Hill’s Science Diet Senior, Blue Buffalo Senior, Nutro Ultra Senior</p>';
    } else if (diet === 'puppy' && age < 1) {
        recommendations += '<h3>Recommended Puppy Foods:</h3>';
        recommendations += '<p>Royal Canin Puppy, Blue Buffalo Puppy, Wellness Complete Health Puppy</p>';
    } else {
        recommendations += '<h3>General Recommendations:</h3>';
        recommendations += '<p>Purina Pro Plan, Royal Canin, Blue Buffalo</p>';
    }

    if (weight < 20) {
        recommendations += '<p>For small dogs: Merrick Lil’ Plates, Blue Buffalo Small Breed</p>';
    } else if (weight > 50) {
        recommendations += '<p>For large dogs: Wellness Large Breed, Nutro Ultra Large Breed</p>';
    }

    document.getElementById('results').innerHTML = recommendations;
});
