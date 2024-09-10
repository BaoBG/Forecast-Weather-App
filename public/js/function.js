function geoFindMe() {
    // Getting the current position
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // set value for input
        document.getElementById("latitude").setAttribute("value", latitude);
        document.getElementById("longitude").setAttribute("value", longitude);
    }

    function error() {
        alert(`ERROR(${error.code}): ${error.message}`);
    }

    /* geolocation IS NOT available */
    if (!navigator.geolocation) { 
        alert("Geolocation is not supported by your browser");
    } else { /* geolocation is available */
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

document.querySelector("#btn-locate").addEventListener("click", geoFindMe);


