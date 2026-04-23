export function initTyping(selector, text) {
  const el = document.querySelector(selector);
  if (!el) return;

  let i = 0;
  let deleting = false;

  function loop() {
    el.textContent = text.slice(0, i);

    if (!deleting) {
      i++;
      if (i > text.length) {
        deleting = true;
        setTimeout(loop, 1000);
        return;
      }
    } else {
      i--;
      if (i < 0) {
        deleting = false;
        i = 0;
      }
    }

    setTimeout(loop, deleting ? 60 : 100);
  }

  loop();
}