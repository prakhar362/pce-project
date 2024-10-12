
// Stop video when scrolling down
let videoElement = document.getElementById('hero-video');

window.addEventListener('scroll', () => {
    // Check if the user has scrolled down
    if (window.scrollY > 15) {
        videoElement.pause(); // Stop the video
    } else {
        videoElement.play(); // Resume video if scrolled back to the top
    }
});

// Event listener for country form submission
document.getElementById('country-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const selectedCountry = document.getElementById('country-select').value;
    const resources = {
        India: {
            resources: ['Solar', 'Wind'],
            technologies: ['Solar Panels', 'Wind Turbines'],
            financialImpact: 'Reduction in energy costs.',
            gdpBenefit: '1.2%',
            sectors: 'Agriculture, Industry'
        },
        Kenya: {
            resources: ['Hydropower', 'Biomass'],
            technologies: ['Micro Hydropower', 'Biomass Plants'],
            financialImpact: 'Reduction in energy costs, growth in local industries.',
            gdpBenefit: '1.5%',
            sectors: 'Tourism, Agriculture'
        },
        Germany: {
            resources: ['Wind', 'Solar'],
            technologies: ['Offshore Wind Farms', 'Solar PV'],
            financialImpact: 'Boost in local job market, reduction in carbon emissions.',
            gdpBenefit: '0.5%',
            sectors: 'Manufacturing, Energy'
        },
        USA: {
            resources: ['Solar', 'Wind', 'Natural Gas'],
            technologies: ['Solar Farms', 'Wind Turbines', 'Hydroelectric Power'],
            financialImpact: 'Significant energy cost savings.',
            gdpBenefit: '0.7%',
            sectors: 'Energy, Manufacturing'
        },
        // Add more countries as needed
        Brazil: {
            resources: ['Hydropower', 'Biomass', 'Solar'],
            technologies: ['Large Hydropower Plants', 'Sugarcane Biomass Energy', 'Solar Farms'],
            financialImpact: 'Economic growth in rural areas, enhanced energy security',
            gdpBenefit: '2.5%',
            sectors: ['Agriculture', 'Mining', 'Energy']
        },
        China: {
            resources: ['Hydropower', 'Wind', 'Solar'],
            technologies: ['Three Gorges Hydropower', 'Wind Turbines', 'Solar Power Plants'],
            financialImpact: 'Significant reduction in coal dependency, cleaner air quality',
            gdpBenefit: '3.7%',
            sectors: ['Manufacturing', 'Textiles', 'Tech']
        },
        Australia: {
            resources: ['Solar', 'Wind', 'Geothermal'],
            technologies: ['Solar PV Farms', 'Onshore Wind', 'Geothermal Plants'],
            financialImpact: 'Lower energy prices, job creation in renewable sectors',
            gdpBenefit: '1.8%',
            sectors: ['Mining', 'Agriculture', 'Tourism']
        },
        SouthAfrica: {
            resources: ['Solar', 'Wind', 'Hydropower'],
            technologies: ['Solar Rooftop Systems', 'Wind Farms', 'Small Hydropower Projects'],
            financialImpact: 'Reduction in blackouts, economic boost for local communities',
            gdpBenefit: '1.6%',
            sectors: ['Mining', 'Agriculture', 'Tourism']
        },
        Canada: {
            resources: ['Hydropower', 'Wind', 'Biomass'],
            technologies: ['Hydropower Dams', 'Wind Farms', 'Biomass Energy'],
            financialImpact: 'Energy security, reduced reliance on oil and gas',
            gdpBenefit: '2.3%',
            sectors: ['Forestry', 'Energy', 'Manufacturing']
        },
        Japan: {
            resources: ['Wind', 'Solar', 'Geothermal'],
            technologies: ['Offshore Wind Farms', 'Solar Power Plants', 'Geothermal Stations'],
            financialImpact: 'Boost to local clean energy markets, reduced imports of fossil fuels',
            gdpBenefit: '2.0%',
            sectors: ['Technology', 'Manufacturing', 'Energy']
        }
    };

    // Display results for the selected country
    const resultDiv = document.getElementById('country-results');
    const countryData = resources[selectedCountry];
    if (countryData) {
        resultDiv.innerHTML = `
            <h3>${selectedCountry}</h3>
            <p><strong>Resources:</strong> ${countryData.resources.join(', ')}</p>
            <p><strong>Technologies:</strong> ${countryData.technologies.join(', ')}</p>
            <p><strong>Financial Impact:</strong> ${countryData.financialImpact}</p>
            <p><strong>GDP Benefit:</strong> ${countryData.gdpBenefit}</p>
            <p><strong>Sectors Benefited:</strong> ${countryData.sectors}</p>
        `;
    } else {
        resultDiv.innerHTML = `<p>No data available for ${selectedCountry}.</p>`;
    }
});
