import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.scroll-switch_section').forEach((element) => {
    if (!(element instanceof HTMLElement)) return;

    if (element.dataset.scriptInitialized) return;
    element.dataset.scriptInitialized = 'true';

    // Triggers
    const triggers = element.querySelectorAll('.scroll-switch_text-item');

    // Targets
    const visualItems = element.querySelectorAll('.scroll-switch_visual-item');
    const menuItems = element.querySelectorAll('.scroll-switch_menu-item');

    // Set first item to active on page load
    makeItemActive(triggers, visualItems, menuItems, 0);

    // Create triggers for each items
    triggers.forEach((trigger, index) => {
      ScrollTrigger.create({
        trigger: trigger,
        start: 'top center',
        end: 'bottom center',
        markers: false,
        onToggle: (isActive) => {
          if (isActive) {
            makeItemActive(triggers, visualItems, menuItems, index);
          }
        },
      });

      trigger.id = `scrolltrigger${index + 1}`;
    });

    // Set up click listeners for menu buttons
    menuItems.forEach((item, index) => {
      const menuButton = item.querySelector('button');
      if (!menuButton) return;

      menuButton.addEventListener('pointerdown', () => {
        const offsetY = window.innerHeight * 0.4;

        gsap.to(window, {
          duration: 0.5,
          scrollTo: { y: `#scrolltrigger${index + 1}`, offsetY, autoKill: true },
        });
      });
    });
  });
});

function makeItemActive(
  triggers: NodeListOf<Element>,
  visualItems: NodeListOf<Element>,
  menuItems: NodeListOf<Element>,
  index: number
) {
  triggers.forEach((trigger) => trigger.classList.remove('is-active'));
  visualItems.forEach((target) => target.classList.remove('is-active'));
  menuItems.forEach((target) => target.classList.remove('is-active'));

  triggers.forEach((trigger, triggerIndex) => {
    if (index === triggerIndex) {
      trigger.classList.add('is-active');
    }
  });

  visualItems.forEach((target, targetIndex) => {
    if (index === targetIndex) {
      target.classList.add('is-active');
    }
  });

  menuItems.forEach((target, targetIndex) => {
    if (index === targetIndex) {
      target.classList.add('is-active');
    }
  });
}
