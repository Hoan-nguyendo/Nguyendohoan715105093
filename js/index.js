function showMenu() {
    var btn = document.querySelector('.DropDown');
    var nutbam = document.querySelector('.nutbam1');
    btn.style.display = 'block';
    nutbam.style.display = 'none';
}

function hideMenu() {
    var btn = document.querySelector('.DropDown');
    var nutbam = document.querySelector('.nutbam2');
    btn.style.display = 'none';
    nutbam.style.display = 'block';
    var nutbam = document.querySelector('.nutbam1');
    nutbam.style.display = 'block';
}

function showMenu2() {
    var btn = document.querySelector('.bottomMenu');
    var nutbam = document.querySelector('.nutbam3');
    btn.style.display = 'block';
    nutbam.style.display = 'none';
}

function hideMenu2() {
    var btn = document.querySelector('.bottomMenu');
    var nutbam = document.querySelector('.nutbam4');
    btn.style.display = 'none';
    nutbam.style.display = 'block';
    var nutbam = document.querySelector('.nutbam3');
    nutbam.style.display = 'block';
}
var soLuongLike = document.querySelector('.count');
let sl = 0;

function demLike() {
    sl = sl + 1;
    soLuongLike.innerText = sl;
}
var soLuongLike2 = document.querySelector('.count2');
let sl2 = 0;

function demLike2() {
    sl2 = sl2 + 1;
    soLuongLike2.innerText = sl2;
}