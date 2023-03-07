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
    })
}
btnClose.onclick = function () {
    modal.style.display = "none";
}


let interViewModal = document.getElementById("interviewModal");
let btnInterview = document.getElementsByClassName("c-flexbox__overlayC");
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
              <img src="${dataItem.imgPCSrc}" alt="">
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
        let close = document.getElementsByClassName("c-closeInterview")[0];
        close.onclick = function () {
            interViewModal.style.display = "none";

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
    }
    if (event.target == interViewModal) {
        interViewModal.style.display = "none";
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