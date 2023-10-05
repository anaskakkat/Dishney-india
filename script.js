const totop = document.querySelector("#to-topBtn");

window.addEventListener("scroll",()=>{
    if(window.pageYOffset>100){
        totop.classList.add('active');
    }
        else{
            totop.classList.remove('active');
    }
})