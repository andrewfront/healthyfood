const map = () => {
    function loadScript() {
        const elem = document.createElement('script');
        elem.type = 'text/javascript';
        elem.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDGgGu0VTYTQAtYvAdDC0Sj1N9OYnlsHgw&callback=initMap';
        document.querySelectorAll('body')[0].append(elem);
    }
    function initMap() {
        const myLatLng = {
            lat: 25.77821719595723,
            lng: -80.20044979735152
        };
        const map = new google.maps.Map(document.getElementById("map"), {
            mapId: "d8a11ce4e6e4563e",
            zoom: 14,
            center: myLatLng,

            disableDefaultUI: true,
            scrollwheel: false,
            zoomControl: true
        });
        const marker = new google.maps.Marker({
            position: {
                lat: 25.778617,
                lng: -80.199857
            },
            map,
            title: "Hello World!",
            optimized: false,
            icon: {
                url: '../../images/location.svg',
                scaledSize: new google.maps.Size(70, 70),
            }
        });
        const infowindow = new google.maps.InfoWindow({
            content: "thanks for click!",
        });
        marker.addListener("click", () => {
            infowindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
            });
        });
    }
    setTimeout(loadScript, 1000)
    setTimeout(initMap, 2000)
}
export default map