// Glitch Animation for Opening
window.addEventListener('DOMContentLoaded', () => {
  const glitchAnim = document.getElementById('glitch-animation');
  setTimeout(() => {
    glitchAnim.style.display = 'none';
  }, 3500);
});

// Animated Code Background
const canvas = document.getElementById('code-bg');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const chars = '01<>[]{}#@&$%*-=+\/|';
const fontSize = 22;
const columns = Math.floor(width / fontSize);
const drops = Array(columns).fill(1);

function drawCodeRain() {
  ctx.fillStyle = 'rgba(10,10,20,0.18)';
  ctx.fillRect(0, 0, width, height);
  ctx.font = fontSize + "px 'VT323', 'IBM Plex Mono', monospace";
  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillStyle = Math.random() > 0.5 ? '#0ff' : '#f06';
    ctx.shadowColor = ctx.fillStyle;
    ctx.shadowBlur = 8;
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    ctx.shadowBlur = 0;
    if (drops[i] * fontSize > height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(drawCodeRain, 50);

window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});

// Glitch hover effect for all .glitch-hover elements
const glitchHovers = document.querySelectorAll('.glitch-hover');
glitchHovers.forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.classList.add('glitch');
  });
  el.addEventListener('mouseleave', () => {
    el.classList.remove('glitch');
  });
});