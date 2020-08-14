import "./lab.css";

const root = document.getElementById("root");
const target = document.getElementById("target");

window.addEventListener('load', () => {
  observer.observe(target);
})

const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries);
  },
  {
    root: root,
    threshold: (new Array(1000).fill(1)).map((_, i) => (i + 1) / 1000)
  }
);

setInterval(() => {
  const oldLeft = getComputedStyle(target)["left"];
  target.style.left =
    Number(oldLeft.substr(0, oldLeft.length - 2)) - 5 + "px";
}, 1000);
