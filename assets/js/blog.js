// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const backButton = document.querySelector("#back");
const mainEl = document.querySelector("main");

// TODO: Create a function that builds an element and appends it to the DOM
// const main = document.main;
// const articleEl = document.createElement('article');
// const h2El = document.createElement('h2'); //title
// const blockquoteEl = document.createElement('blockquote'); //content
// const pEl = document.createElement('p'); //username

function appendBlog(title, content, username) {
  const articleEl = document.createElement("article");
  const h2El = document.createElement("h2"); //title
  const blockquoteEl = document.createElement("blockquote"); //content
  const pEl = document.createElement("p"); //username
  h2El.textContent = title;
  blockquoteEl.textContent = content;
  pEl.textContent = username;

  articleEl.appendChild(h2El);
  articleEl.appendChild(blockquoteEl);
  articleEl.appendChild(pEl);

  mainEl.appendChild(articleEl);
}
// TODO: Create a function that handles the case where there are no blog posts to display
function emptyBlog() {
  const mainEl = document.querySelector("main");
  const blogContent = JSON.parse(localStorage.getItem("blogPost"));
  if (blogContent === null || Object.keys(blogContent).length === 0) {
    const messageEl = document.createElement("p");
    messageEl.textContent = "No Blog posts yet...";
    mainEl.appendChild(messageEl);
  }
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
  const blogContent = JSON.parse(localStorage.getItem("blogContent"));
//   for (let i = 0; i < blogContent.length; i++) {
//     const title = blogContent[i].title;
//     const content = blogContent[i].content.trim();
//     const username = blogContent[i].username;

//     if (blogContent.length !== 0) {
//       appendBlog(title, content, username);
//     } else {
//       emptyBlog();
//     }
//   }
//   //   return blogContent;
// }
if (blogContent === null || blogContent.length === 0) {
  emptyBlog();
  return;
}

for (let i = 0; i < blogContent.length; i++) {
  const title = blogContent[i].title;
  const content = blogContent[i].content.trim();
  const username = blogContent[i].username;

  appendBlog(title, content, username);
}
}
// TODO: Call the `renderBlogList` function
renderBlogList();
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
// const redirectPage = function (url) {
//   redirectURL = url;
//   location.assign(url);
// };
backButton.addEventListener("click", function () {
  let redirectURL = "";
  redirectPage("index.html");
});