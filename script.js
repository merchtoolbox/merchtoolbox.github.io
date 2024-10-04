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
            '<1': ['Royal Canin Labrador Retriever Puppy', 'Hill\'s Science Diet Puppy', 'Purina Pro Plan Puppy'],
            '1-6': ['Blue Buffalo Life Protection Adult', 'Merrick Grain-Free Texas Beef & Sweet Potato'],
            '7+': ['Hill\'s Science Diet Senior', 'Royal Canin Mature 8+']
        },
        'German Shepherd': {
            '<1': ['Royal Canin German Shepherd Puppy', 'Orijen Puppy'],
            '1-6': ['Purina Pro Plan Adult', 'Wellness Core Grain-Free'],
            '7+': ['Blue Buffalo Life Protection Senior', 'Nutro Ultra Senior']
        },
        'Golden Retriever': {
            '<1': ['Merrick Grain-Free Puppy', 'Royal Canin Golden Retriever Puppy'],
            '1-6': ['Hill\'s Science Diet Adult Large Breed', 'Purina Pro Plan Savor Adult'],
            '7+': ['Wellness Complete Health Senior', 'Blue Buffalo Life Protection Senior']
        },
        'Bulldog': {
            '<1': ['Royal Canin Bulldog Puppy', 'Hill\'s Science Diet Puppy'],
            '1-6': ['Merrick Grain-Free Bulldog Recipe', 'Orijen Original'],
            '7+': ['Nutro Ultra Senior', 'Wellness Simple Senior']
        },
        'Poodle': {
            '<1': ['Royal Canin Poodle Puppy', 'Hill\'s Science Diet Puppy'],
            '1-6': ['Blue Buffalo Freedom Grain-Free Adult', 'Purina Pro Plan Adult'],
            '7+': ['Wellness Core Senior', 'Merrick Grain-Free Senior']
        },
        'Beagle': {
            '<1': ['Royal Canin Beagle Puppy', 'Hill\'s Science Diet Puppy'],
            '1-6': ['Purina Pro Plan Focus Adult', 'Blue Buffalo Life Protection Adult'],
            '7+': ['Nutro Ultra Senior', 'Wellness Complete Health Senior']
        },
        'Boxer': {
            '<1': ['Royal Canin Boxer Puppy', 'Merrick Grain-Free Puppy'],
            '1-6': ['Hill\'s Science Diet Adult Large Breed', 'Orijen Regional Red'],
            '7+': ['Blue Buffalo Life Protection Senior', 'Purina Pro Plan Bright Mind Senior']
        },
        'Rottweiler': {
            '<1': ['Royal Canin Rottweiler Puppy', 'Hill\'s Science Diet Puppy'],
            '1-6': ['Merrick Grain-Free Rottweiler Recipe', 'Purina Pro Plan Savor Adult'],
            '7+': ['Wellness Complete Health Senior', 'Nutro Ultra Senior']
        },
        'Dachshund': {
            '<1': ['Royal Canin Dachshund Puppy', 'Orijen Puppy'],
            '1-6': ['Blue Buffalo Life Protection Adult', 'Merrick Grain-Free'],
            '7+': ['Wellness Core Senior', 'Purina Pro Plan Bright Mind Senior']
        },
        'Siberian Husky': {
            '<1': ['Royal Canin Siberian Husky Puppy', 'Hill\'s Science Diet Puppy'],
            '1-6': ['Orijen Adult', 'Merrick Grain-Free'],
            '7+': ['Blue Buffalo Life Protection Senior', 'Nutro Ultra Senior']
        },
        'Cocker Spaniel': {
            '<1': ['Royal Canin Cocker Spaniel Puppy', 'Hill\'s Science Diet Puppy'],
            '1-6': ['Purina Pro Plan Savor Adult', 'Merrick Grain-Free'],
            '7+': ['Wellness Complete Health Senior', 'Nutro Ultra Senior']
        },
        'Australian Shepherd': {
            '<1': ['Royal Canin Australian Shepherd Puppy', 'Hill\'s Science Diet Puppy'],
            '1-6': ['Purina Pro Plan Focus Adult', 'Merrick Grain-Free'],
            '7+': ['Wellness Core Senior', 'Blue Buffalo Life Protection Senior']
        }
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
            recommendations += '<p>Consider "Taste of the Wild High Prairie" or "Merrick Grain-Free" for a grain-free option.</p>';
        } else if (diet === 'hypoallergenic') {
            recommendations += '<p>For hypoallergenic needs, "Hill\'s Science Diet Sensitive Stomach" or "Royal Canin Veterinary Diet" are great choices.</p>';
        } else if (diet === 'senior') {
            recommendations += '<p>Look into "Wellness Core Senior" or "Purina Pro Plan Bright Mind" for older dogs.</p>';
        } else if (diet === 'puppy') {
            recommendations += '<p>High-quality puppy options include "Orijen Puppy" and "Acana Puppy & Junior".</p>';
        }
    } else {
        recommendations = '<p>Please fill out all fields to get recommendations.</p>';
    }

    // Display specific recommendations
    resultsDiv.innerHTML = recommendations;
});
