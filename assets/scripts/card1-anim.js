const createBlock = document.querySelector("#card1");

const mouseTimeline = gsap.timeline({ paused: false, repeat: -1, yoyo: true });
const createBtn = document.querySelector("#create-post-btn");

mouseTimeline
  .to("#mouse", { scale: 0.5, duration: 1 }, 0)
  .to(
    "#create-post-btn",
    { scale: 0.9, backgroundColor: "#ffc34d", duration: 1 },
    0
  )
  .to("#mouse", { scale: 1, duration: 1 }, "+=0")
  .to(
    "#create-post-btn",
    { scale: 1, backgroundColor: "#FFCC69", duration: 1 },
    "-=1"
  )
  .to("#mouse", { y: 50, duration: 1 })
  .to("#mouse", { x: 20, duration: 1 })
  .to("#mouse", { x: -30, duration: 1 })
  .to("#mouse", { y: 70, duration: 1 });

createBtn.addEventListener("mouseenter", () => {
  gsap.to(createBtn, { backgroundColor: "#ffc34d", duration: 1 });
});

createBtn.addEventListener("mouseleave", () => {
  gsap.to(createBtn, { backgroundColor: "#FFCC69", duration: 1 });
});

// createBlock.addEventListener("mouseenter", () => {
//   mouseTimeline.play();
// });

// createBlock.addEventListener("mouseleave", () => {
//   mouseTimeline.pause();
// });

gsap.to("rect", {
  strokeDasharray: "600 0",
  duration: 2,
  ease: "power1.inOut",
});
