const btn_menu = document.getElementById("menu_btn");

function toggle(){
    const nav = document.getElementById("menu_section");
    nav.classList.toggle('active');
}

btn_menu.addEventListener("click",toggle);