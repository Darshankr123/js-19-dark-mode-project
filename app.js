const btn = document.querySelector(".btn");
const section = document.querySelector(".articles");

btn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

const elements = articles
  .map((item) => {
    const { title, date, length, snippet } = item;

    const formatDate = moment(date).format("MMMM Do, YYYY");
    return `
        <article class="post">
        <h2>${title}</h2>
        <div class="post-info">
          <span>${formatDate}</span>
          <span>${length} min read</span>
        </div>
        <p>
          ${snippet}
        </p>
       </article>
    `;
  })
  .join("");

section.innerHTML = elements;
