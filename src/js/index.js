import "modern-normalize";

var typeSplit = new SplitType(".preloader-text", {
  types: "lines, words, chars",
  tagName: "span",
});

var tl = gsap.timeline({});

tl.from(".preloader-text .char", {
  y: "100%",
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  stagger: 0.1,
});

tl.to(".preloader", { opacity: 0, display: "none" }, "+=1");

tl.from(".main .section, .main .header, .main .footer", {
  opacity: 0,
  duration: 1,
  ease: "power1.out",
  stagger: 0.1,
});
