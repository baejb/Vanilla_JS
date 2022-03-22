
//querySelector는 element를 CSS 방식으로 검색할 수 있음 
const title1=document.querySelector("div.hello:first-child h1");
//querySelector는 하나만 가져오니까 querySelectorAll 해주면 됨 


// click event 는 클릭하는것 ,click을 listen
function handleTitleClick(){
    title1.style.color="blue";
}
function handleMouseEnter(){
    title1.innerText = "Mouse is here!";
}
function handleMouseLeave(){
    title1.innerText = "Mouse is Gone!";
}

//유저가 title을 클릭하면 실행
title1.addEventListener("click",handleTitleClick);
title1.addEventListener("mouseenter",handleMouseEnter);
title1.addEventListener("mouseleave",handleMouseLeave);

