const numbersSpin = document.querySelectorAll("[number-spin]");

numbersSpin.forEach((numberSpin, index) => {
  gsap.fromTo(
    numberSpin,
    {
      textContent: 0,
    },
    {
      textContent: numberSpin.getAttribute("number-spin"),
      duration: 2,
      ease: "power1.in",
      snap: { textContent: 1 },
      onUpdate: function () {
        this.targets()[0].innerHTML = Math.ceil(this.targets()[0].textContent);
      },
    },
    index + 0.5
  );
});

const starsAnim = document.querySelectorAll("[stars-anim]");
const starTimeline = gsap.timeline({ repeat: -1 });

starsAnim.forEach((star) => {
  console.log(star);
  starTimeline
    .to(star, { rotation: 15, duration: 0.5 })
    .to(star, { rotation: 0, duration: 0.6 })
    .to(star, { rotation: -15, duration: 0.5 })
    .to(star, { rotation: 0, duration: 0.6 });
});

const arrows = document.querySelectorAll("[arrow-up-anim]");

arrows.forEach((arrow, index) => {
  gsap.fromTo(
    arrow,
    { y: 5 },
    { y: -5, duration: 1, repeat: -1, yoyo: true },
    index
  );
});
