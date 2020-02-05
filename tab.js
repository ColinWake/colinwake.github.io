function tab(page, clickedTab) {
    var a = document.getElementsByClassName("tab")

    for (var i = 0; i < a.length; i++) {
        a[i].classList.add('hidden');
    }

    document.getElementById(page).classList.remove('hidden');

    var a = document.getElementsByClassName("navbar__active")

    for (var i = 0; i < a.length; i++) {
        a[i].className = "navbar__nav";
    }

    clickedTab.className = "navbar__active";
}