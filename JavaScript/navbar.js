// Navigation
function nav() {
    const collapsedClass = "nav--collapsed";
    const lsKey = "navCollapsed";
    const nav = document.querySelector(".nav");
    const navBorder = nav.querySelector(".nav__border");

    if (localStorage.getItem(lsKey) === "true") {
        nav.classList.add(collapsedClass);
    }
    navBorder.addEventListener("click", () => {
        nav.classList.toggle(collapsedClass);
        localStorage.setItem(lsKey, nav.classList.contains(collapsedClass));
        });
}
