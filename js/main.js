/*Menu Hamburguesa*/
((doc)=>{
    const $btnMenu = doc.querySelector(".btn-menu"),
    $navbar = doc.querySelector(".navbar");

    $btnMenu.addEventListener("click", (e)=>{
        $btnMenu.firstElementChild.classList.toggle("display-none");
        $btnMenu.lastElementChild.classList.toggle("display-none");
        $navbar.classList.toggle("is-active")
    });
    doc.addEventListener("click", e=>{
        if(!e.target.matches(".menu a"))
        return false;

        $btnMenu.firstElementChild.classList.remove("display-none");
        $btnMenu.lastElementChild.classList.add("display-none");
        $navbar.classList.remove("is-active")
    });
})(document);

