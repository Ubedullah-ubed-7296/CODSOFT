function myFunction() {
    var element = document.body;
    var icon = document.querySelector(".mode-btn i");

    if (element.classList.contains("dark-mode")) {
        element.classList.remove("dark-mode");
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        element.classList.add("dark-mode");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
}