window.onscroll = function () {
    scrollFunction()
    mobileScrollFunction()
};




function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('navbar').style.top = '0';
    } else {
        document.getElementById('navbar').style.top = '-30px';
    }
}


function mobileScrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('mobileNavbar').style.top = '0';
    } else {
        document.getElementById('mobileNavbar').style.top = '-120px';
    }
}