// Sample ramen data
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg", rating: 5, comment: "Rich and creamy!" }
];

// Function to display ramen images
function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramenMenu.innerHTML = ''; // Clear existing content
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.classList.add('ramen-image'); // Add a class for styling
        img.addEventListener('click', () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

// Function to handle ramen image click
function handleClick(ramen) {
    const ramenDetail = document.getElementById('ramen-detail');
    ramenDetail.innerHTML = `
        <h2>${ramen.name}</h2>
        <h3>${ramen.restaurant}</h3>
        <p>Rating: ${ramen.rating || 'N/A'}</p>
        <p>Comment: ${ramen.comment || 'N/A'}</p>
    `
}

// Function to validate image URL
function isValidImageURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

// Function to add a new ramen entry
function addSubmitListener() {
    const form = document.getElementById('new-ramen-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = event.target.name.value.trim();
        const restaurant = event.target.restaurant.value.trim();
        const image = event.target.image.value.trim();
        const rating = event.target.rating.value ? parseInt(event.target.rating.value) : null;
        const comment = event.target.comment.value.trim();

        // Validate the image URL
        if (!isValidImageURL(image)) {
            alert("Please enter a valid image URL.");
            return;
        }

        // Create a new ramen object
        const newRamen = {
            id: ramens.length + 1,
            name,
            restaurant,
            image,
            rating,
            comment
        };

        // Add the new ramen to the array and update the display
        ramens.push(newRamen);
        displayRamens();
        handleClick(newRamen); // Display the new ramen details
        form.reset(); // Clear the form
    });
}

// Main function to initialize the app
function main() {
    displayRamens();
    addSubmitListener();
    handleClick(ramens[0]); // Display the first ramen details on page load
}

// Ensure the DOM is fully loaded before running the main function
document.addEventListener('DOMContentLoaded', main);