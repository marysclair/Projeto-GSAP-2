const stars = document.querySelectorAll(".stars");

stars.forEach((star, index) => {
  gsap.fromTo(
    star,
    { y: 0, color: "#FFCC69" },
    {
      color: "#ffaa00",
      y: -10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      delay: index * 0.2,
    }
  );
});
