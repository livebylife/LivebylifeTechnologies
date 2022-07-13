let tspOptions = {
    fullScreen: false,
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "attract",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        attract: {
          distance: 80,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#FFD700",
      },
      links: {
        color: "#F7EF8A",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 60,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "char",
        character: {
            value: ["L", "i", "v", "e", "b", "y", "L", "i", "f", "e", "T", "e", "c", "h", "n", "o", "l", "o", "g", "i", "e", "s"],
            font: "Orbitron",
            fill: true,
        }
      },
      size: {
        value: { min: 2, max: 6 },
      },
    },
    detectRetina: true,
  }

  export default tspOptions


  