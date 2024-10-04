document.getElementById('pet-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const breed = document.getElementById('breed').value;
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const diet = document.getElementById('diet').value;

    let recommendations = `<h3>Recommended Pet Foods for ${breed}:</h3>`;

    if (diet === 'grain-free') {
        recommendations += '<h4>Grain-Free Options:</h4><p>Blue Buffalo Wilderness, Wellness CORE, Taste of the Wild</p>';
    } else if (diet === 'hypoallergenic') {
        recommendations += '<h4>Hypoallergenic Options:</h4><p>Hill’s Science Diet Sensitive Stomach, Royal Canin Veterinary Diet, Purina Pro Plan Veterinary Diets</p>';
    } else if (diet === 'senior' && parseInt(age) >= 7) {
        recommendations += '<h4>Senior Pet Foods:</h4><p>Hill’s Science Diet Senior, Blue Buffalo Senior, Nutro Ultra Senior</p>';
    } else if (diet === 'puppy' && age === '<1') {
        recommendations += '<h4>Puppy Foods:</h4><p>Royal Canin Puppy, Blue Buffalo Puppy, Wellness Complete Health Puppy</p>';
    } else {
        recommendations += '<h4>General Recommendations:</h4><p>Purina Pro Plan, Royal Canin, Blue Buffalo</p>';
    }

    if (weight === '1-10') {
        recommendations += '<p>For small dogs (1-10 lbs): Merrick Lil’ Plates, Blue Buffalo Small Breed</p>';
    } else if (weight === '11-20') {
        recommendations += '<p>For small-medium dogs (11-20 lbs): Merrick Lil’ Plates, Blue Buffalo Small Breed</p>';
    } else if (weight === '21-30') {
        recommendations += '<p>For medium dogs (21-30 lbs): Wellness Large Breed, Nutro Ultra Large Breed</p>';
    } else if (weight === '81+') {
        recommendations += '<p>For very large dogs (over 80 lbs): Wellness Large Breed, Nutro Ultra Large Breed</p>';
    } else {
        recommendations += `<p>We recommend checking the packaging for the weight guidelines of various brands.</p>`;
    }

    document.getElementById('results').innerHTML = recommendations;
});
