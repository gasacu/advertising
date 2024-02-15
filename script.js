let $menuTriggerButton = document.getElementById('menuTrigger');
let $mainMenuNav = document.getElementById('mainMenu');

$menuTriggerButton.addEventListener('click' , () => {
    $mainMenuNav.classList.toggle('Active');
});

document.onclick = function(e) {
    if (!$menuTriggerButton.contains(e.target) && !$mainMenuNav.contains(e.target) || $mainMenuNav.contains(e.target)) {
        $mainMenuNav.classList.remove('Active');
    }
}

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})