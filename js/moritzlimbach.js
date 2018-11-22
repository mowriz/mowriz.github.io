var moritzlimbach = new Object({

    map: null,

    initDomReady: function () {

    },

    initLoad: function () {
        ml.initSwiper();
        ml.initMap();
        $('.portrait').tilt({
            glare: true,
            maxGlare: .7
        })
    },

    initSwiper: function () {
        var codeSwiper = new Swiper('.projects .swiper-container', {
            direction: 'horizontal',
            speed: 150,
            autoplay: 150,
            loop: true,
        });
        var photoSwiper = new Swiper('.photo .swiper-container', {
            direction: 'vertical',
            speed: 150,
            autoplay: 150,
            loop: true,
        });
    },

    initMap: function () {
        var customMapType = new google.maps.StyledMapType(
            [
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "weight": "0.20"
                        },
                        {
                            "lightness": "28"
                        },
                        {
                            "saturation": "23"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#494949"
                        },
                        {
                            "lightness": 13
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#144b53"
                        },
                        {
                            "lightness": 14
                        },
                        {
                            "weight": 1.4
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#08304b"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#0c4152"
                        },
                        {
                            "lightness": 5
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#0b434f"
                        },
                        {
                            "lightness": 25
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#0b3d51"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#000000"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#146474"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#021019"
                        }
                    ]
                }
            ]

            , {
                name: 'moritzlimbach'
            });

        var cgn = {
            lat: 50.923930,
            lng: 6.961632
        };

        var initZoom = 14;

        var customMapTypeId = 'custom_style';

        ml.map = new google.maps.Map(document.getElementById('map'), {
            zoom: initZoom,
            center: cgn,
            disableDefaultUI: true,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
            }
        });

        ml.map.mapTypes.set(customMapTypeId, customMapType);
        ml.map.setMapTypeId(customMapTypeId);
    },

});

var ml = moritzlimbach;

$(document).on('ready', function () {
    console.log('ready');
    ml.initDomReady();
});
$(window).on('resize', function () {
    console.log('resize');
});
$(window).on('load', function () {
    console.log('load');
    ml.initLoad();
});
