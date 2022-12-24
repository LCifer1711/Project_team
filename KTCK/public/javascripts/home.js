let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
const cardsMenu = document.querySelector(".box-container2");
const cardsMenuPopular = document.querySelector(".box-container");

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;

function renderFoodPopular() {
  fetch("https://638576f9875ca3273d3d290a.mockapi.io/Food_popular")
  .then((res) => res.json())
  .then((data) => {
      cardsMenuPopular.innerHTML = data
          .map( (obj) => `
            <div class="box">
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-eye"></a>
              <img src="${obj.image}" alt="">
              <h3>${obj.name}</h3>
              <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
              </div>
              <span>${obj.price}</span>
              <a href="#" class="btn">add to cart</a>
            </div>
          `
          )
          .join("");
          muahang();
        })
}
function renderFood() {
  fetch("https://638576f9875ca3273d3d290a.mockapi.io/Food")
  .then((res) => res.json())
  .then((data) => {
      cardsMenu.innerHTML = data
          .map( (obj) => `
              <div class="box">
                <div class="image">
                    <img src=${obj.image} alt="" food-id="${obj.id}">
                    <a href="#" class="fas fa-heart"></a>
                </div>
                <div class="content">
                    <div class="stars">
                        

                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <h3>${obj.name}</h3>
                    <p>${obj.describe}</p>
                    <a href="#" class="btn">Add to cart</a>
                    <span class="price">${obj.price}</span>
                </div>
              </div>
          `
          )
          .join("");
          muahang();
        })
}
function muahang() {
  const btncard = document.querySelectorAll(".btn");
  btncard.forEach((btn) => {
      btn.addEventListener("click", () => {
          const idCard = btn.getAttribute("food-id");
          getFoodId(idCard);
          btnshop.classList.add("active");
          setTimeout(() => {
              btnshop.classList.remove("active");
          }, 2000);
      });
  });
}
function getFoodId(id) {
  fetch(`https://638576f9875ca3273d3d290a.mockapi.io/Food/${id}`)
      .then((res) => res.json())
      .then((data) => {
          addCardInShop(data);
      });
}
const arrGioHang = [];
function addCardInShop(obj) {
    arrGioHang.push(obj);
    addgiohang.innerHTML = arrGioHang
        .map(
            (obj) => `
    <div class="navbar__giohang--sanpham">
        <div class="navbar__giohang--image">
            <img src=${obj.img} alt="" />
        </div>
        <div class="navbar__giohang--name">${obj.name}</div>
        <div class="navbar__giohang--cost">${obj.cost} K</div>
        <div class="navbar__giohang--x">              
            <img src="./images/rubbish-bin.png" alt="" />
         </div>
    </div>
    `
        )
        .join("");
    removeItemGioHang();
}

function removeItemGioHang() {
  const timesItems = document.querySelectorAll(".navbar__giohang--x");
  timesItems.forEach(
      (timesItem, index) =>
          (timesItem.onclick = () => {
              arrGioHang.splice(arrGioHang.indexOf(arrGioHang[index]), 1);
              timesItem.parentElement.remove();
          })
  );
}

renderFoodPopular();
renderFood();