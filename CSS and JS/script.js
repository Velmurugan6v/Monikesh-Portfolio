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

  let particles = [];
  let particleDensity = 0.00015; // particles per pixel (adjust this to make more/less dense)

  class Particle {
    constructor(width, height) {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.radius = Math.random() * 2 + 1;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.color = `hsl(${Math.random() * 360}, 80%, 70%)`;
    }
    update(width, height) {
      this.x += this.speedX;
      this.y += this.speedY;

      // Wrap around
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }
    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  function initParticles() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];

    let totalParticles = Math.floor(canvas.width * canvas.height * particleDensity);
    for (let i = 0; i < totalParticles; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update(canvas.width, canvas.height);
      p.draw(ctx);
    });
    requestAnimationFrame(animate);
  }

  // Init and animate
  initParticles();
  animate();

  // Re-init on resize
  window.addEventListener("resize", initParticles);

