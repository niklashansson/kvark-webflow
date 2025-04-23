// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// document.addEventListener('DOMContentLoaded', function () {
//   document.querySelectorAll('.marquee_showcase_section').forEach((element) => {
//     const wrapper = element.querySelector('.marquee_showcase_wrap');

//     if (!(element instanceof HTMLElement) || !(wrapper instanceof HTMLElement)) return;

//     const tracks = element.querySelectorAll('.marquee_showcase_track');

//     // Clone track lists
//     tracks.forEach((track) => {
//       const list = track.querySelector('.marquee_showcase_list');
//       if (!(list instanceof HTMLElement)) return;

//       const clonedList = list.cloneNode(true) as HTMLElement;
//       track.appendChild(clonedList);
//     });

//     const lists = element.querySelectorAll('.marquee_showcase_list');

//     // Init animation
//     initGsap(wrapper, lists);
//   });
// });

// function initGsap(wrapperElement: HTMLElement, listElements: NodeListOf<Element>) {
//   const tl = gsap.timeline({
//     repeat: -1,
//     onReverseComplete: () => {
//       tl.progress(0);
//     },
//   });

//   tl.fromTo(listElements, { xPercent: 0 }, { xPercent: -100, duration: 50, ease: 'none' });

//   const object = {
//     value: 1,
//   };

//   ScrollTrigger.observe({
//     target: window,
//     type: 'wheel,scroll,touch,pointer',

//     onChangeY: (self) => {
//       //   if (isHovering) return;
//       let v = self.velocityY * 0.002;
//       v = gsap.utils.clamp(-40, 40, v); // replace clamp values for total increment of speed change
//       tl.timeScale(v);
//       let resting = 1;
//       if (v < 0) {
//         resting = -1;
//       }
//       gsap.fromTo(
//         object,
//         { value: v },
//         {
//           value: resting,
//           duration: 1,
//           onUpdate: () => {
//             tl.timeScale(object.value);
//           },
//         }
//       );
//     },
//   });

//   const players = listElements.forEach((list) => list.querySelector('hls-video'));
//   console.log(players);

//   wrapperElement.addEventListener('pointerenter', () => {
//     isHovering = true;
//   });

//   wrapperElement.addEventListener('pointerleave', () => {
//     isHovering = false;
//   });
// }
