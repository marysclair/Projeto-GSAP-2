const audienceText = document.querySelector("#audience-text");

gsap.fromTo(audienceText, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, 2);
