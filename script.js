/*document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a").forEach((link) => {
    const rawHref = link.getAttribute("href");

    if (rawHref && !rawHref.startsWith("#")) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.classList.add("glitch-transition");

        const destination = this.href;

        setTimeout(() => {
          window.location.href = destination;
        }, 600);
      });
    }
  });
});*/
document.querySelectorAll("a, .nav-button").forEach((el) => {
  const destination = el.tagName === "A" ? el.href : el.dataset.href;

  if (destination && !destination.startsWith("#")) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.classList.add("glitch-transition");

      setTimeout(() => {
        window.location.href = destination;
      }, 600); // tempo in ms uguale alla durata della tua animazione
    });
  }
});

