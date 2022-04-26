document.querySelectorAll(".story-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("change");

    // nextElementSibling === class story (.story)
    btn.nextElementSibling.classList.toggle("change");
  });
});
