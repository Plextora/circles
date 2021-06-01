particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 8,
        "density": {
          "enable": false,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": true
        }
      },
      "size": {
        "value": 8,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 80,
          "size_min": 0.7,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 35,
        "color": "#008b8b",
        "opacity": 0.7,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": true,
          "rotateX": 1000,
          "rotateY": 50,
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 10,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 10,
          "size": 60,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 112
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 100
        }
      }
    },
    "retina_detect": false,
    "config_demo": {
      "hide_card": true,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);