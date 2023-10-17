// 타이핑 효과
let str = "The Best PHARMACY For You and Your Family";

const div = document.querySelector(".section_title");
let idx = 0;

function showStr() {
  if (idx == 0) {
    div.textContent = '';
  }
  if (idx < str.length) {
    div.textContent += (str.charAt(idx));
    idx++;
    setTimeout(showStr, 200);
  } else {
    idx = 0;
    setTimeout(showStr, 3000);
  }
}
showStr();

// medicine, doctor 아코디언
$(document).ready(function(){

})




// topics_img 움직이기

// let show = document.querySelector(".sec_main .inner .slide_img");
let topics_arr = document.querySelector(".sec_main .inner .slide_img .topics_img ul");
let topics_arrs = document.querySelectorAll(".sec_main .inner .slide_img .topics_img ul li");
let next_btn = document.querySelector(".sec_main .inner .next_btn");
let pre_btn = document.querySelector(".sec_main .inner .pre_btn");
let current_idx = 5;
let width = 224.5;
clone();

function clone() {
  for (i = 0; i < topics_arrs.length; i++) {
    let temp = topics_arrs[i].cloneNode(true);
    temp.classList.add("clone");
    topics_arr.appendChild(temp);
  }
  for (i = topics_arrs.length - 1; i >= 0; i--) {
    let temp = topics_arrs[i].cloneNode(true);
    temp.classList.add("clone");
    topics_arr.prepend(temp);
  }
  setTimeout(function () {
    topics_arr.classList.add('animated');
  }, 100);
  let temp = -width * 5;
  topics_arr.style.transform = "translate("+temp+"px)";
  console.log(topics_arr);

}

next_btn.addEventListener("click", function () {
  current_idx++;
  let temp = -current_idx * width;
  topics_arr.style.transform = "translate(" + temp + "px)";
  if (current_idx == 10) {
    setTimeout(function () {
      topics_arr.classList.remove('animated');
      temp = -width * 5;
      topics_arr.style.transform ="translate("+temp+"px)";
      current_idx = 5;
      
    }, 500);
    setTimeout(function () {
      topics_arr.classList.add('animated');
    }, 600);
  }
  console.log(current_idx);
});

pre_btn.addEventListener("click", function () {
  current_idx--;
  let temp = -current_idx * width;
  topics_arr.style.transform = "translate(" + temp + "px)";
  if (current_idx == 0) {
    setTimeout(function () {
      topics_arr.classList.remove('animated');
      temp = -width * 5;
      topics_arr.style.transform ="translate("+temp+"px)";
      current_idx = 5;
      
    }, 300);
    setTimeout(function () {
      topics_arr.classList.add('animated');
    }, 400);
  }
  console.log(current_idx);
});