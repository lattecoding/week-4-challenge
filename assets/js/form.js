// TODO: Create a variable that selects the form element
const formEl = document.getElementById('form')
const submitButton = document.querySelector('input[type="submit"]');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function submission(event) {
    event.preventDefault();

        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

    if (!username || !title || !content) {
        document.getElementById("error").textContent = "Please complete the form.";
    } else {
        let blogList = JSON.parse(localStorage.getItem("blogContent")) || [];
        const blogContent = {
            username: username,
            title: title,
            content: content,
        };
        blogList.push(blogContent);

        localStorage.setItem('blogContent', JSON.stringify(blogList));

        let redirectURL = '';

        // const redirectPage = function (url) {
        // redirectURL = url;
        // location.assign(url);
        // };
        redirectPage("blog.html");
    };
};


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formEl.addEventListener('submit', function (event) {
    submission(event);
});