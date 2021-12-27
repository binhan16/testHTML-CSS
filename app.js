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
            showError(input,'Không được để trống')
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
        showError(input,'Email Invalid')
    }

    return isEmailError

}

function checkLengthError(input, min, max){
    input.value =  input.value.trim()

    if(input.value.length < min){
        showError(input,`Phải có ít nhất ${min} ký tự`)
        return true
    }

    if(input.value.length > max){
        showError(input,`Không được quá ${max} ký tự`)
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


// toggle
const mainMenu =document.querySelector('.mainMenu');
const closeMenu =document.querySelector('.closeMenu');
const openMenu =document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show (){
    mainMenu.style.display="inline-block";
    mainMenu.style.top="0";
    mainMenu.style.backgroundColor="#F6EAF5";

}

function close (){
    mainMenu.style.display='none';
}

