// ✅ Set footer year
document.getElementById('year').textContent = new Date().getFullYear();

// ✅ Blog posts array
const posts = [
  { title: "Creating Custom Domain Email On Gmail", url: "https://blog.yunuserturk.com/creating-custom-domain-email", date: "2024-09-27" },
  { title: "How to Host WordPress for Free on Vercel", url: "https://blog.yunuserturk.com/host-wordpress-vercel", date: "2023-12-18" },
  { title: "Build Your Own Cloud Storage for Your Freelancer Brand", url: "https://blog.yunuserturk.com/cloud-storage-freelancer", date: "2022-10-10" }
];

// ✅ Render posts if #posts exists
const postsList = document.getElementById('posts');
if (postsList) {
  posts.forEach(p => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${p.url}" target="_blank" rel="noopener">${escapeHtml(p.title)}</a> 
                    <small style="color:var(--muted)"> — ${p.date}</small>`;
    postsList.appendChild(li);
  });
}

// Escape HTML helper
function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ✅ Show navbar after scrolling past hero
document.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  const navbar = document.querySelector(".glass-navbar");

  if (window.scrollY > hero.offsetHeight) {
    navbar.classList.add("visible");
  } else {
    navbar.classList.remove("visible");
  }
});

const sections = document.querySelectorAll("section.cards article");
const navLinks = document.querySelectorAll(".glass-navbar .nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // offset for navbar height
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

const items = document.querySelectorAll('.glass-box');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 }); // trigger when 20% is visible

items.forEach(item => observer.observe(item));


// Particle

const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.color = `hsl(${Math.random() * 360}, 80%, 70%)`;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Wrap around screen
    if (this.x < 0) this.x = canvas.width;
    if (this.x > canvas.width) this.x = 0;
    if (this.y < 0) this.y = canvas.height;
    if (this.y > canvas.height) this.y = 0;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// Init particles
for (let i = 0; i < 100; i++) {
  particles.push(new Particle());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

animate();

// Resize support
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

