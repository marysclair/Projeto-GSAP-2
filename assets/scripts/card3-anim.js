const statsToAnim = document.querySelectorAll("[stats-elm]");

statsToAnim.forEach((stat) => {
  gsap.fromTo(
    stat,
    {
      height: 0,
    },
    { height: parseInt(stat.getAttribute("stats-elm")) },
    ">"
  );
});
