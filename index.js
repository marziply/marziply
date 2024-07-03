import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const content = document.getElementById("content");
const data = fetch("./pages/index.md", {
  redirect: "follow",
});

data.then((res) => {
  res.text().then((md) => {
    content.innerHTML = marked.parse(md);
  });
});
