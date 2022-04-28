const input = document.getElementById("email");
const inputBox = document.getElementsByClassName("box__input")[0];
const btn = document.getElementsByClassName("box__btn")[0];
const iconBox = document.getElementsByClassName("icon--box");
const icon = document.getElementsByTagName("svg");
let isClick = true;
let isTrue = true;
let inputValue ='';

function ValidateEmail(mail) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return (true)
    }
    return (false)
}
function createError(textContent,addBefore,isErr){
    isClick = isErr;
    if(isClick){
        let er = document.createElement("p");
        let parent = document.getElementsByClassName('input-field')[0]
        er.classList.add("input-error")
        er.textContent=textContent
        inputBox.classList.add("input-error-border")
        if(checkMobile()){
            parent.insertBefore(er,addBefore)
            isClick= false;
        }
        if(!checkMobile()){
            parent.childNodes[1].appendChild(er)
             isClick = false;
        }

    }
}
function removeError(){
    let errMsg = document.getElementsByClassName("input-error");
    while(errMsg.length){
        errMsg[0].remove();
    }
    inputBox.classList.remove("input-error-border")
}

function checkMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        return true;
}
return false;
}
inputBox.addEventListener("click",()=>{
    input.focus();
})
input.addEventListener("input",(event)=>{
    inputValue = event.target.value;
    
})
btn.addEventListener("click",()=>{

        if(isTrue){
            if(!ValidateEmail(inputValue)){
                createError("Please provide a valid email address",btn,true)
                
                isTrue = false;
            }
        }
    
    
    if(ValidateEmail(inputValue)){
        removeError()
        isTrue = true;
    }
})
inputBox.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        btn.click();
    }
})


for(let i=0;i<icon.length;i++){
    iconBox[i].addEventListener("mouseover",()=>{
        icon[i].style.fill="white";
    })
}
Array.from(iconBox).forEach(item=>{
    item.addEventListener("mouseleave",()=>{
        Array.from(icon).forEach(i=>{
            i.style.fill="var(--color-input-button"
        })
    })
})
