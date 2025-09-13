// sample JS to inject posts and small interactions
document.getElementById('year').textContent = new Date().getFullYear();

const posts = [
  { title: "Creating Custom Domain Email On Gmail", url: "https://blog.yunuserturk.com/creating-custom-domain-email" , date: "2024-09-27" },
  { title: "How to Host WordPress for Free on Vercel", url: "https://blog.yunuserturk.com/host-wordpress-vercel", date: "2023-12-18" },
  { title: "Build Your Own Cloud Storage for Your Freelancer Brand", url: "https://blog.yunuserturk.com/cloud-storage-freelancer", date: "2022-10-10" }
];

const postsList = document.getElementById('posts');
posts.forEach(p => {
  const li = document.createElement('li');
  li.innerHTML = `<a href="${p.url}" target="_blank" rel="noopener">${escapeHtml(p.title)}</a> <small style="color:var(--muted)"> — ${p.date}</small>`;
  postsList.appendChild(li);
});

function escapeHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
