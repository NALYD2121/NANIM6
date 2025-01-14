particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80, // Nombre de particules
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff" // Couleur des particules
        },
        "shape": {
            "type": "circle", // Forme des particules
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.5, // Opacité des particules
            "random": false
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2, // Vitesse des particules
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
                "enable": false
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse" // Effet au survol
            },
            "onclick": {
                "enable": true,
                "mode": "push" // Effet au clic
            }
        },
        "modes": {
            "repulse": {
                "distance": 100
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});
