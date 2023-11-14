const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActivate = 1;

next.addEventListener('click', () => {
  currentActivate++;
  if (currentActivate > circles.length) {
    currentActivate = circles.length;
  }
  update();
});

prev.addEventListener('click', () => {
  currentActivate--;
  if (currentActivate < 1) {
    currentActivate = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActivate) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
  const actives = document.querySelectorAll('.active');
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActivate === 1) {
    prev.disabled = true;
  } else if (currentActivate === circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
