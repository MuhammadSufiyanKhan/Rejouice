function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed",
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
locomotiveAnimation();


function cursorEffect() {
    var page1Content = document.querySelector("#page1-content")
    var cursor = document.querySelector("#cursor")

    page1Content.addEventListener("mousemove", function (details) {
        gsap.to(cursor, {
            x: details.x,
            y: details.y
        })
    })
    page1Content.addEventListener("mouseenter", function () {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        })
    })

    page1Content.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        })
    })
}
cursorEffect()

function page2Animation() {
    gsap.from(".elem h1", {
        y: 120,
        opacity: -1,
        stagger: 0.25,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 40%",
            end: "top 37%",
            scrub: 1 // Smooth scrubbing effect
            // toggleActions: "restart none none none", 
        }
    })
}
page2Animation()

function page6Animation() {
    gsap.from(".eelem h1", {
        y: 120,
        opacity: -1,
        stagger: 0.25,
        duration: 1,
        scrollTrigger: {
            trigger: "#page6",
            scroller: "#main",
            start: "top 40%",
            end: "top 37%",
            scrub: 1 // Smooth scrubbing effect
            // toggleActions: "restart none none none", 
        }
    })
}
page6Animation()


// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#page2", // Trigger element
//         start: "top center", // Start the animation when the trigger element is at the center of the viewport
//         end: "bottom center", // End the animation when the trigger element is at the bottom of the viewport
//         scrub: true, // Smooth scrubbing effect
//         //   markers: true, // Add markers for visualization (optional)
//     },
// });

// // Set initial state
// tl.from(".elem h1", { y: 100, opacity: 0 });

// // Add animation to h1 elements
// t1.to(".elem h1", {
//     y: 0,
//     opacity: 1,
//     duration: 1, // Duration of the animation
// });

// function pageAAnimation() {
//     gsap.from(".alam h1", {
//         y: 100,
//         opacity: 0,
//         stagger: 1,
//         duration: 1,
//         delay: 4,
//         ScrollTrigger: {
//             trigger: "#page2",
//             scroller: "#main",
//             start: "top 100%",
//             end: "top 100%",
//             markers: true,
//             scrub: 5
//         }
//     })
// }
// pageAAnimation()

// function page2Animation() {
//     gsap.from(".elem h1", {
//         y: 100,
//         opacity: 0,
//         stagger: 1,
//         duration: 1,
//         delay: 5,
//         scrollTrigger: {
//         trigger: "#page2",
//         scroller: "#main",
//         start: "top 0",
//         end: "top -5%",
//         scrub: true,
//       },
//     })
// }
// page2Animation()

// function pageAAAnimation() {
//     gsap.from(".aalam h1", {
//         y: 100,
//         opacity: 0,
//         stagger: 1,
//         duration: 1,
//         delay: 4,
//         ScrollTrigger: {
//             trigger: "#page6",
//             scroller: "#main",
//             start: "top 100%",
//             end: "top 100%",
//             markers: true,
//             scrub: 5
//         }
//     })
// }
// pageAAAnimation()

// function page6Animation() {
//     gsap.from(".eelem h1", {
//         y: 100,
//         opacity: 0,
//         stagger: 1,
//         duration: 5,
//         delay: 5,
//         ScrollTrigger: {
//             trigger: "#page6",
//             scroller: "#main",
//             start: "top 100%",
//             end: "top 100%",
//             markers: true,
//             scrub: 5
//         }
//     })
// }
// page6Animation()




function sliderAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
    });
}
sliderAnimation()

var tl = gsap.timeline()
tl.from("#loader h3", {
    x: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.1
})
tl.to("#loader h3", {
    opacity: 0,
    x: -40,
    duration: 1,
    stagger: 0.1
})
tl.to("#loader", {
    opacity: 0
})
tl.from("#page1-content h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    delay: -0.5
})
tl.to("#loader", {
    display: "none"
})

// const h2 = document.querySelector("h2")
// const hr1 = document.getElementById('hr1');
// const hr2 = document.getElementById('hr2');

// // Mouse enter animation for hr1
// h2.addEventListener("mouseenter", () => {
//     gsap.from(hr1, { duration: 1,  width: 0 });
// });

// // Mouse leave animation for hr1
// h2.addEventListener("mouseleave", () => {
//     gsap.from(hr1, { duration: 1, width: 0 });
// });

// // Mouse enter animation for hr2
// h2.addEventListener("mouseenter", () => {
//     gsap.from(hr2, { duration: 1, width: 0 });
// });

// // Mouse leave animation for hr2
// h2.addEventListener("mouseleave", () => {
//     gsap.from(hr2, { duration: 1,  width: 0 });
// });

const h2_1 = document.getElementById('h2-1');
const h2_2 = document.getElementById('h2-2');
const hr1 = document.getElementById('hr1');
const hr2 = document.getElementById('hr2');

// Mouse enter animation for hr1 triggered by h2_1
h2_1.addEventListener("mouseenter", () => {
    gsap.fromTo(hr1, { width: 0 }, { duration: 1, width: '40%' });
    gsap.fromTo(hr2, { width: 0 }, { duration: 1, width: '43%' });
});

// Mouse leave animation for hr1 triggered by h2_1
h2_2.addEventListener("mouseleave", () => {
    gsap.fromTo(hr1, { width: 0 }, { duration: 1, width: '40%' });
    gsap.fromTo(hr2, { width: 0 }, { duration: 1, width: '43%' });
});

// Mouse enter animation for hr2 triggered by h2_2
h2_2.addEventListener("mouseenter", () => {
    gsap.fromTo(hr2, { width: 0 }, { duration: 1, width: '43%' });
    gsap.fromTo(hr1, { width: 0 }, { duration: 1, width: '40%' });
});

// Mouse leave animation for hr2 triggered by h2_2
h2_1.addEventListener("mouseleave", () => {
    gsap.fromTo(hr2, { width: 0 }, { duration: 1, width: '43%' });
    gsap.fromTo(hr1, { width: 0 }, { duration: 1, width: '40%' });
});