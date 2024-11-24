const accounts = document.querySelector("[accounts-anim]");

gsap.fromTo(
  accounts,
  {
    marginLeft: 0,
    duration: 1,
  },
  { marginLeft: -24, duration: 2, repeat: -1, yoyo: true }
);
