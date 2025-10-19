
// Wait until the page loads
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // stop form from reloading the page

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if(name && email && message) {
            alert("Thank you for reaching out, " + name + "! I will get back to you at " + email + "")
            form.reset(); // clear the form
        } else {
            alert("Please fill in all fields before submitting")
        }
     });
});
