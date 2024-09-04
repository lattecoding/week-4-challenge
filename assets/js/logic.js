// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggle = document.querySelector("#toggle");
const theme = document.querySelector("body");

let mode = localStorage.getItem("theme") || "dark";
theme.classList.add(mode);

toggle.addEventListener("click", function () {
  if (mode === "dark") {
    mode = "light";
    theme.classList.remove("dark");
    theme.classList.add("light");
  } else {
    mode = "dark";
    theme.classList.remove("light");
    theme.classList.add("dark");
    document.documentElement.style.setProperty('--circle-color', '#312f2c');
  }

  localStorage.setItem("theme", mode);
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage(value) {
  const localData = JSON.parse(localStorage.getItem(value)) || [];
  return localData;
}
// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage
function storeLocalStorage(newData) {
  const existingData = JSON.parse(localStorage.getItem("blogContent")) || [];
  const updateData = [...existingData, newData];
  localStorage.setItem("blogContent", JSON.stringify(updateData));
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = "";

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
