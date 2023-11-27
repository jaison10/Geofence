const restaurantName = "Embassy Court, 76 Kenton Road";

// Example: Using Google Maps Geocoding API to obtain coordinates
const apiKey = "YOUR_GOOGLE_MAPS_API_KEY";
const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(restaurantName)}&key=${apiKey}`;

// Fetch the coordinates using the Geocoding API
module.export =  fetch(geocodingUrl)
  .then(response => response.json())
  .then(data => {
    if (data.results && data.results.length > 0) {
      const location = data.results[0].geometry.location;
      const restaurantCoordinates = {
        latitude: location.lat,
        longitude: location.lng
      };
      console.log("Restaurant Coordinates:", restaurantCoordinates);
      return restaurantCoordinates;
      // Now you have the coordinates of the restaurant
    } else {
      console.log("Location not found.");
    }
  })
  .catch(error => {
    console.error("Error fetching location:", error);
  });