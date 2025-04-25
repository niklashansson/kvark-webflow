import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.navbar').forEach((navbar) => {
    if (!(navbar instanceof HTMLElement) || navbar.dataset.scriptInitialized) return;
    navbar.dataset.scriptInitialized = 'true';

    let isContent = false;

    ScrollTrigger.create({
      trigger: 'body',
      start: '50px top',
      markers: false,
      onToggle() {
        if (isContent) {
          navbar.classList.remove('is-content');
          isContent = false;
        } else {
          navbar.classList.add('is-content');
          isContent = true;
        }
      },
    });
  });
});
