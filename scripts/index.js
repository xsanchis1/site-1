document.getElementById("scroll-link-abt-me").addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const headerHeight = 60; // Adjust this value as needed
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth" // Use smooth scrolling behavior
    });
});

document.getElementById("scroll-link-carreer").addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const headerHeight = 60; // Adjust this value as needed
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth" // Use smooth scrolling behavior
    });
});

document.getElementById("scroll-link-contact").addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const headerHeight = 60; // Adjust this value as needed
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth" // Use smooth scrolling behavior
    });
});