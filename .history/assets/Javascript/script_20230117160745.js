let Btns = document.querySelectorAll(".template__btn-item");
// tạo hiệu ứng click vào button
for(let key in Btns){
    let btn = Btns[key];

    btn.onclick = (e)=>{
        btn.classList.toggle("active");
        e.stopPropagation();
    }
};

// bắt sự kiện onscroll
//scrollTop mặc định = 0

let toTopBtn = document.querySelector(".to__top");

window.onscroll = () =>{
    
    if(document.documentElement.scrollTop > 0){
        toTopBtn.style.display = "block";
    }
    else{
        toTopBtn.style.display = "none";
    }
}

let 