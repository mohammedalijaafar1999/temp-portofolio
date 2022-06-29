var cursor = document.getElementById("cursor");

function animationEnter(container) {
  return gsap.from(container, {
    autoAlpha: 0,
    duration: 0.8,
    clear: "all",
    ease: "none",
  });
}
function animationLeave(container) {
  return gsap.to(container, {
    autoAlpha: 0,
    duration: 0.8,
    clear: "all",
    ease: "none",
  });
}

function init() {
  // cursor script
  barba.init({
    transitions: [
      {
        once({ next }) {
          animationEnter(next.container);
        },
        leave: ({ current }) => animationLeave(current.container),
        enter({ next }) {
          animationEnter(next.container);
        },
      },
    ],
  });

  barba.hooks.after((data) => {
    let js = data.next.container.querySelectorAll("main script");
    if (js != null) {
      js.forEach((item) => {
        console.log(js);
        eval(item.innerHTML);
      });
    }
  });

  document.addEventListener("mousemove", (e) => {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });
}

init();
