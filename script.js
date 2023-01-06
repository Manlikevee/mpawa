//$(document).ready(function() {
//$('.search-box').focus();
//});

const wrapper = document.querySelector(".wrapper");
const header = document.querySelector(".header");

wrapper.addEventListener("scroll", (e) => {
 e.target.scrollTop > 30
  ? header.classList.add("header-shadow")
  : header.classList.remove("header-shadow");
});

// const toggleButton = document.querySelector(".dark-light");

// toggleButton.addEventListener("click", () => {
//  document.body.classList.toggle("dark-mode");
// });


const jobCards = document.querySelectorAll(".job-card");
const logo = document.querySelector(".logo");
const jobLogos = document.querySelector(".job-logos");
const jobDetailTitle = document.querySelector(
 ".job-explain-content .job-card-title"
);
const jobBg = document.querySelector(".job-bg");

jobCards.forEach((jobCard) => {
 jobCard.addEventListener("click", () => {
  const number = Math.floor(Math.random() * 10);

  
  const url = `https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`;
  jobBg.src = url;

  const logo = jobCard.querySelector("svg");
  const bg = logo.style.backgroundColor;
  console.log(bg);
  jobBg.style.background = bg;
  const title = jobCard.querySelector(".job-card-title");
  jobDetailTitle.textContent = title.textContent;
  jobLogos.innerHTML = logo.outerHTML;
  wrapper.classList.add("detail-page");
  wrapper.scrollTop = 0;
 });
});

logo.addEventListener("click", () => {
 wrapper.classList.remove("detail-page");
 wrapper.scrollTop = 0;
   jobBg.style.background = bg;
});



function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
 
  const bod = document.querySelector('body');
  let user = getCookie("username");
  console.log(user)
  if (user == "dark-mode") {
    bod.classList.add('dark-mode');
  } else {
    //  user = prompt("Please enter your name:","");
     bod.classList.remove('dark-mode');
     
  }
}checkCookie()

function updateCookie(){
  const bod = document.querySelector('body');
  const man = bod.classList.contains('dark-mode');
  if (bod.classList.contains('dark-mode')) {
    bod.classList.remove('dark-mode')
    user = 'lightmode'
    setCookie("username", user, 30);

  } else {
    bod.classList.add('dark-mode');
    console.log('yay')
    user = 'dark-mode'
    setCookie("username", user, 30);
  }
}


function menuToggle(){
  console.log('it clicked')
  const toggleMenu = document.querySelector('.header-menu');
  toggleMenu.classList.toggle('navactive')

}



function gridToggle(){
  const toggleMenu3 = document.querySelector('.fio');
  const toggleMenu4 = document.querySelector('.fio2');
  console.log('it clicked')
  const toggleMenu = document.querySelector('.overviewscroll');
  const toggleMenu2 = document.querySelector('.dashcards');
  toggleMenu.classList.toggle('overviewscrolls');
  toggleMenu2.classList.toggle('dashcardss');
  toggleMenu3.classList.toggle('hide');
  toggleMenu4.classList.toggle('show');
  


}


function simpleInterestasas() {
  const collection = document.getElementsByClassName("iti__selected-dial-code");

  man = collection[0].innerHTML.substr(1)
  document.getElementById("phonenums").value = man + document.getElementById("mobile_code").value
  }

