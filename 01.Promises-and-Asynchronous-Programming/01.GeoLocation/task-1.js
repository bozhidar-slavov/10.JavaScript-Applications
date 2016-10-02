(function () {

    function getGeoLocation() {
        let promise = new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(position => {
                resolve(position);
            });
        });

        return promise;
    }

    function showGeolocationImage(position) {
        let latitude = position.coords.latitude,
            longitude = position.coords.longitude,
            image = new Image();

        image.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
        document.body.appendChild(image);
    }

    getGeoLocation()
        .then(success => {
            showGeolocationImage(success);
        }, error => {
            console.error(error);
        });
}());