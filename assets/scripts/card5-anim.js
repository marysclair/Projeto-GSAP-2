const checks = document.querySelectorAll(".circle-check");
const checkTimeline = gsap.timeline({ repeat: -1 });

checks.forEach((check, index) => {
  checkTimeline.fromTo(
    check,
    { y: 0, color: "#7651DC" },
    {
      color: "#582ad5",
      y: -10,
      duration: 0.5,
      repeat: 1,
      yoyo: true,
      ease: "power1.inOut",
    },
    index * 1.5
  );
});
