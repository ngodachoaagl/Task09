import data from './itvModal.json'  assert {type: 'json'}

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



let modal = document.getElementById("myModal");
let btnPick = document.getElementsByClassName("c-album__pick");
let btnClose = document.getElementsByClassName("c-closeModal")[0];
for (let item of btnPick) {
    item.addEventListener('click', function (e) {
        let imgSrc = e.currentTarget.getAttribute("data-source");
        modal.style.display = "block";
        modal.querySelector('.c-modal__img').src = imgSrc;
        document.body.style.overflow = "hidden"
    })
}
btnClose.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = "unset"
}


let interViewModal = document.getElementById("interviewModal");
let btnInterview = document.getElementsByClassName("c-flexbox__target");
let btnCloseInterview = document.getElementsByClassName("c-closeInterview")[0];
for (let item of btnInterview) {
    item.addEventListener('click', function (e) {
        let dataTarget = e.currentTarget.getAttribute("data-target");
        interViewModal.style.display = "block";

        let index = data.itvModal.findIndex(item => item.id == dataTarget);
        if (index != -1) {
            let dataItem = data.itvModal[index];

            let dlContent = ``;
            for (let i of dataItem.dlList) {
                let ddContent = ``;
                for (let dd of i.ddList) {
                    ddContent += `
              <dd class="c-interview__dd">
                  <p class="c-interview__ddTxt">
                 ${dd.ddText}
                  </p>
                </dd>
            `
                }
                dlContent += `
         <dl class="c-interview__dl">
                <dt class="c-interview__dt">
                  <p class="c-interview__dtTxt">${i.dtTxt}</p>
                </dt>
               ${ddContent}
              </dl>
        `
            }
            let content = `   <div class="c-interviewModal__content">
          <h4 class="c-title u-clBlue u-fs24">${dataItem.title}</h4>
          <div class="c-interviewModal__main">
            <div class="c-interviewModal__R">
            <picture>
  <source media="(max-width:1024px)" srcset="${dataItem.imgSPSrc}">
 
   <img src="${dataItem.imgPCSrc}" alt="">
</picture>
            
              <div class="c-interviewModal__banner">
                <p class="c-interviewModal__name">${dataItem.name}</p>
                <p class="c-interviewModal__desc">${dataItem.desc}</p>
              </div>
            </div>
            <div class="c-interviewModal__L">
            
${dlContent}       
            </div>
          </div>
          <span class="c-closeInterview">&times;閉じる</span>

        </div>`
            interViewModal.innerHTML = content;
        }
        document.body.style.overflow = "hidden"
        let close = document.getElementsByClassName("c-closeInterview")[0];
        close.onclick = function () {
            interViewModal.style.display = "none";
            document.body.style.overflow = "unset"
        }

    })
}


btnCloseInterview.onclick = function () {
    interViewModal.style.display = "none";
    console.log(1);
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "unset"
    }
    if (event.target == interViewModal) {
        interViewModal.style.display = "none";
        document.body.style.overflow = "unset"
    }
}
function openTab(evt, tabNum) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("c-tab--content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("c-tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabNum).style.display = "block";
    evt.currentTarget.className += " active";
}
window.openTab = openTab;
let navbarBtn = document.getElementById("navbarToggle");
navbarBtn.addEventListener('click',function(){
    if(!navbarBtn.classList.contains('is-active')){
        this.classList.add('is-active')
        this.src = '/assets/img/header/closemenu.svg' 
        headerMenu.style.display = 'block';
           document.body.style.overflow = "hidden";
    }else{
        this.classList.remove('is-active')
        this.src = '/assets/img/header/bar.svg' 
        headerMenu.style.display = 'none';
              document.body.style.overflow = "unset";
    }
   
})
let headerMenu = document.getElementById('c-header__menu')
let listMenuLi = document.querySelectorAll('.c-header__menuLi');
for(let li of listMenuLi){
    li.addEventListener('click',function(){
        headerMenu.style.display = 'none';
        navbarBtn.src = '/assets/img/header/bar.svg' 
    navbarBtn.classList.remove('is-active')
     document.body.style.overflow = "unset";
    })
}




let section = document.querySelectorAll("section");
let listsLink = document.querySelectorAll(".c-nav__item");
listsLink[0].classList.add("is-active");
window.onscroll = function () {
 

  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;

    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset -1000  && top <= offset + height) {
      listsLink.forEach((item) => {
        item.classList.remove("is-active");

        if (item.querySelector("a").getAttribute("href").trim() == "#" + id) {
          item.classList.add("is-active");
        }
      });
    }
  
  });
};