const circCordi = [];

function circIntersect(x1, x2, r1, y1, y2, r2) {
  return Math.hypot(x1 - x2, y1 - y2) <= r1 + r2;
}

function checkInersection() {
  const firstCirc = circCordi[0];
  const secondCirc = circCordi[1];

  const x1 = firstCirc.x;
  const x2 = secondCirc.x;
  const y1 = firstCirc.y;
  const y2 = secondCirc.y;
  const r1 = firstCirc.r;
  const r2 = secondCirc.r;

  return circIntersect(x1, x2, r1, y1, y2, r2);
}

document.addEventListener("click", (e) => {
  const randomRadi = Math.floor(Math.random() * (300 - 200 + 1) + 200);
  console.log(randomRadi);

  const x = e.clientX;
  const y = e.clientY;
  const r = randomRadi / 2;

  circCordi.push({ x, y, r }); // pushing the cordinated to the array

  const randomRed = Math.floor(Math.random() * 255); // for red color
  const randomGreen = Math.floor(Math.random() * 255); // for green color
  const randomBlue = Math.floor(Math.random() * 255); // for blue color

  const circle = document.createElement("div");

  const totalCircles = document.querySelectorAll(".circle");
  if (totalCircles.length === 2) {
    totalCircles.forEach((circ) => {
      document.body.removeChild(circ);
      circCordi.shift();
    });
  }

  circle.classList.add("circle");
  circle.style.top = y - r + "px";
  circle.style.left = x - r + "px";
  circle.style.width = randomRadi + "px";
  circle.style.height = randomRadi + "px";
  circle.style.backgroundColor = `rgb(${randomRed},${randomGreen},${randomBlue})`;
  circle.style.border = `2px solid rgb(${randomRed},${randomGreen},${randomBlue})`;

  document.body.appendChild(circle);

  if (circCordi.length === 2) {
    const res = checkInersection();
    setTimeout(() => {
      console.log(`circles are ${res === true ? "" : "not "}intersecting`);
      // alert(`circles are ${res === true ? "" : "not "}intersecting`);
    }, 0);
  }
});
