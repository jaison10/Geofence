window.onload = function() {
    // my current location
    currentLoc = getLocation();

    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: currentLoc[0], lng: currentLoc[1] }, // Center the map at a specific point
      zoom: 15, // Adjust the zoom level
    });
};

// Obtain current location co-ordinates
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
        function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        return [latitude, longitude];
        // You can use the latitude and longitude values as needed
        },
        function(error) {
        console.error("Error getting user location:", error);
        }
        );
    } else {
    console.log("Geolocation is not supported by this browser.");
    }
}