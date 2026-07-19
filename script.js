// ---------- helpers ----------

function trimContent(text, maxLength = 140) {
  const flat = text.replace(/\s+/g, " ").trim();
  if (flat.length <= maxLength) return flat;
  return flat.slice(0, maxLength).trim() + "…";
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr; // fall back to raw string if unparsable
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit"
  });
}

function paragraphsHTML(content) {
  return content
    .split(/\n\s*\n/)
    .map(p => `<p>${p.trim()}</p>`)
    .join("");
}

function sortedPosts() {
  return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

function recordNumber(index, total) {
  return String(total - index).padStart(3, "0");
}

// ---------- rendering: list view ----------

function renderList() {
  const grid = document.getElementById("post-grid");
  const posts = sortedPosts();

  if (posts.length === 0) {
    grid.innerHTML = `<p class="empty-state">No entries yet. Add one in data.js.</p>`;
    document.getElementById("record-count").textContent = "";
    return;
  }

  grid.innerHTML = posts.map((post, i) => `
    <a class="post-card" href="#post/${encodeURIComponent(post.id)}">
      <div>
        <span class="card-index">No. ${recordNumber(i, posts.length)}</span>
        <span class="card-date">${formatDate(post.date)}</span>
      </div>
      <h2 class="card-title">${post.name}</h2>
      <div class="card-body">
        ${post.image ? `<img class="card-thumb" src="${post.image}" alt="" loading="lazy">` : ""}
        <div>
          <p class="card-excerpt">${trimContent(post.content)}</p>
          <span class="card-more">read entry &rarr;</span>
        </div>
      </div>
    </a>
  `).join("");

  document.getElementById("record-count").textContent =
    `${posts.length} ${posts.length === 1 ? "entry" : "entries"} logged`;
}

// ---------- rendering: detail view ----------

function renderDetail(id) {
  const post = blogPosts.find(p => p.id === id);
  const detailEl = document.getElementById("post-detail");

  if (!post) {
    detailEl.innerHTML = `<p class="empty-state">Entry not found.</p>`;
    return;
  }

  detailEl.innerHTML = `
    <span class="detail-date">${formatDate(post.date)}</span>
    <h1 class="detail-title">${post.name}</h1>
    ${post.image ? `<img class="detail-image" src="${post.image}" alt="${post.name}">` : ""}
    <div class="detail-content">${paragraphsHTML(post.content)}</div>
  `;
}

// ---------- routing ----------

function route() {
  const hash = window.location.hash; // e.g. "#post/my-id"
  const listView = document.getElementById("list-view");
  const detailView = document.getElementById("detail-view");

  if (hash.startsWith("#post/")) {
    const id = decodeURIComponent(hash.replace("#post/", ""));
    renderDetail(id);
    listView.hidden = true;
    detailView.hidden = false;
    window.scrollTo(0, 0);
  } else {
    listView.hidden = false;
    detailView.hidden = true;
  }
}

window.addEventListener("hashchange", route);

// ---------- init ----------

renderList();
route();