const termsHook = document.querySelector('.terms-and-conditions');
const btnAccept = document.querySelector('.accept');
let lastTerm = termsHook.lastElementChild;

const cb = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      btnAccept.disabled = false;
    }
  });
}

const observer = new IntersectionObserver(cb, {
  root: termsHook,
  threshold: 1
});

observer.observe(lastTerm);