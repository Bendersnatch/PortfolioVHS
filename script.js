document.querySelectorAll("a").forEach((link) => {
  if (link.href && !link.href.startsWith("#")) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.classList.add("glitch-transition");

      const destination = this.href;

      setTimeout(() => {
        window.location.href = destination;
      }, 600); // durata della animazione
    });
  }
});
