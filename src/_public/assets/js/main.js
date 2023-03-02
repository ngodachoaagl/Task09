window.addEventListener('scroll', scrollFade);
function scrollFade() {
    var box = document.querySelectorAll('.c-scrollBox');
    for (let i = 0; i < box.length; i++) {
        let windowHeight = window.innerHeight;
        let boxTop = box[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (boxTop < windowHeight - revealpoint) {
            box[i].classList.add('active');
        } else {
            box[i].classList.remove('active');
        }
    }
}



var modal = document.getElementById("myModal");


var btn = document.getElementsByClassName("c-album__pick");


var span = document.getElementsByClassName("c-closeModal")[0];


for(let item of btn){
    item.addEventListener('click', function (e) {
        let imgSrc = e.currentTarget.getAttribute("data-source");
        modal.style.display = "block";
        console.log(modal.querySelector('.c-modal__img'));
        modal.querySelector('.c-modal__img').src = imgSrc;
    })
}



span.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}