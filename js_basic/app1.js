
//querySelector는 element를 CSS 방식으로 검색할 수 있음 
const h1=document.querySelector("div.hello:first-child h1");
//querySelector는 하나만 가져오니까 querySelectorAll 해주면 됨 


// click event 는 클릭하는것 ,click을 listen
function handleTitleClick(){
    h1.className = "active";
    
}


h1.addEventListener("click",handleTitleClick);
