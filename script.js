const name_input = document.querySelector('.name_input')
const name_warn = document.querySelector('.name_warn')

const number_input = document.querySelector('.number_input')
const number_warn = document.querySelector('.number_warn')

const date_input = document.querySelectorAll('.date_input')
const date_warn = document.querySelector('.date_warn')

const cvc_input = document.querySelector('.cvc_input')
const cvc_warn = document.querySelector('.cvc_warn')

const form_input = document.querySelectorAll(".form_input")

const card_number = document.querySelector(".card_number")
const card_name = document.querySelector("#card_name")
const card_month = document.querySelector("#card_month")
const card_yeat = document.querySelector("#card_year")
const card_cvc = document.querySelector("#card_cvc")

// Update card

form_input.forEach( input => {
    input.addEventListener("keyup", () => {
        if(event.target.classList.contains("name_input")){
            card_name.innerHTML = input.value
        } 
        
        if(event.target.classList.contains("number_input")){
            card_number.innerHTML = input.value
        } 

        if(event.target.classList.contains("date_mm_input")){
            if(event.target.classList.contains("date_mm_input")){
                card_month.innerHTML = input.value
            }
        } 

        if(event.target.classList.contains("date_yy_input")){
            card_year.innerHTML = input.value
        } 

        if(event.target.classList.contains("cvc_input")){
            card_cvc.innerHTML = input.value
        } 
    })
})

name_input.addEventListener("invalid", function(event){
    if(event.target.validity.valueMissing){
        event.target.style.border = '1px  solid hsl(0, 100%, 66%)'
        name_warn.classList.remove('hide')
        console.log(date_input)
    }
})

name_input.addEventListener('change', function(event){ 
    event.target.style.border = '1px solid rgba(41, 41, 41, 0.2)'
    name_warn.classList.add('hide')
})

number_input.addEventListener("invalid", function(event){
    if(event.target.validity.valueMissing){
        event.target.style.border = '1px  solid hsl(0, 100%, 66%)'
        number_warn.classList.remove('hide')
    }
})

number_input.addEventListener('change', function(event){ 
    event.target.style.border = '1px solid rgba(41, 41, 41, 0.2)'
    number_warn.classList.add('hide')
})

date_input.forEach(date => {
    date.addEventListener("invalid", function(event){
        if(event.target.validity.valueMissing){
            event.target.style.border = '1px  solid hsl(0, 100%, 66%)'
            date_warn.classList.remove('hide')
            
        }
    })

    date.addEventListener('change', function(event){ 
        if(!event.target.classList.contains('hide')){
            event.target.style.border = '1px solid rgba(41, 41, 41, 0.2)'
            date_warn.classList.add('hide')
        }
    })
});

cvc_input.addEventListener("invalid", function(event){
    if(event.target.validity.valueMissing){
        event.target.style.border = '1px  solid hsl(0, 100%, 66%)'
        cvc_warn.classList.remove('hide')
    }
})

cvc_input.addEventListener('change', function(event){ 
    event.target.style.border = '1px solid rgba(41, 41, 41, 0.2)'
    cvc_warn.classList.add('hide')
})


