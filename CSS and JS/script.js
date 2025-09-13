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

