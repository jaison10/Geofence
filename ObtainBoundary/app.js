// import {currentLoc} from ('./currentLoc');

var fetchByName = import ('./fetchByName');  

 // Initialize Google Maps
  function initMap() {
    currentLoc = getLocation();

    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: currentLoc[0], lng: currentLoc[1] }, // Center the map at a specific point
      zoom: 15, // Adjust the zoom level
    });
  

    // // Assuming you have the coordinates defining the boundary of the restaurant
    // const restaurantCoordinates = [
    //     { lat: currentLoc[0], lng: currentLoc[1] }    
    // ];

    // // Construct a polygon from the coordinates to represent the boundary
    // const restaurantBoundary = new google.maps.Polygon({
    //   paths: restaurantCoordinates,
    //   strokeColor: "#FF0000",
    //   strokeOpacity: 0.8,
    //   strokeWeight: 2,
    //   fillColor: "#FF0000",
    //   fillOpacity: 0.35,
    // });
  
    // // Set the polygon on the map
    // restaurantBoundary.setMap(map);
  }

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
  initMap();