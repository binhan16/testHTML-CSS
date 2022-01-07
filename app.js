var firstName = document.querySelector('#fname')
var lastName = document.querySelector('#lname')
var contactNumber = document.querySelector('#cnumber')
var company = document.querySelector('#company')
var email = document.querySelector('#email')
var form = document.querySelector('form')

function showError(input,message) {
    let parent=  input.parentElement;
    let small= parent.querySelector('small')

    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input) {
    let parent=  input.parentElement;
    let small= parent.querySelector('small')

    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim()

        if(!input.value){
            isEmptyError = true;
            showError(input,'Không được để trống !')
        }else{
            showSuccess(input)
        }
    });

    return isEmptyError
}

function checkEmailError(input){
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    input.value= input.value.trim()

    let isEmailError = !regexEmail.test(input.value)
    if(regexEmail.test(input.value)){
        showSuccess()
    }else{
        showError(input,'Email không đúng định dạng !')
    }

    return isEmailError

}

function checkLengthError(input, min, max){
    input.value =  input.value.trim()

    if(input.value.length < min){
        showError(input,`Phải có ít nhất ${min} ký tự !`)
        return true
    }

    if(input.value.length > max){
        showError(input,`Không được quá ${max} ký tự !`)
        return true
    }

  
    return false
}


form.addEventListener('submit', function(e){
    e.preventDefault()

    let isEmptyError = checkEmptyError([firstName,lastName,email,contactNumber,company])

    let isEmailError = checkEmailError(email)

    let isFNameLengthError = checkLengthError(firstName,3 ,10)
    let isLNameLengthError = checkLengthError(lastName,3 ,10)

    
})




// backToTop
var mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// hover - show menu-2

$('#menu > li').hover(function() {
       
    $('.dropdown_menu', this).slideDown();
  },function() {
   
    $('.dropdown_menu', this).slideUp();
  });

  $('.dropdown_menu > li').hover(function() {
    
    $('.submenu', this).slideDown();
  },function() {
    
    $('.submenu', this).slideUp();
  });


  // toggle

  const drop_btn = document.querySelector(".drop-btn i");
  const show_menu = document.querySelector(".show-menu");
         const menu_bar = document.querySelector(".menu-bar");
         const ours_drop = document.querySelector(".ours-drop");
         const industry_drop = document.querySelector(".industry-drop");
         const ours_item = document.querySelector(".ours-item");
         const industry_item = document.querySelector(".industry-item");
         const ours_btn = document.querySelector(".back-ours-btn");
         const industry_btn = document.querySelector(".back-industry-btn");
           drop_btn.onclick = (()=>{
             show_menu.classList.toggle("show");

           });

           
           ours_item.onclick = (()=>{
             menu_bar.style.marginLeft = "-500px";
             setTimeout(()=>{
              ours_drop.style.display = "block";
             }, 100);
           });
           industry_item.onclick = (()=>{
             menu_bar.style.marginLeft = "-500px";
             setTimeout(()=>{
               industry_drop.style.display = "block";
             }, 100);
           });
           ours_btn.onclick = (()=>{
             menu_bar.style.marginLeft = "0px";
             ours_drop.style.display = "none";
           });
           industry_btn.onclick = (()=>{
             industry_drop.style.display = "none";
             menu_bar.style.marginLeft = "0px";
           });






