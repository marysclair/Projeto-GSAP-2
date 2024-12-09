const accounts = document.querySelector("[accounts-anim]");

gsap.fromTo(
  accounts,
  {
    marginLeft: 0,
  },
  { marginLeft: -24, repeat: -1, yoyo: true, duration: 1 }
);
