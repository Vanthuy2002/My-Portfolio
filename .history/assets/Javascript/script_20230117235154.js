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
};

//thông báo khi click vào button Send

let btnSubmit = document.querySelector("#check__btn");
let toast = document.querySelector("#toastAll");
let closeToast = document.querySelector(".window__toast-close");

btnSubmit.addEventListener("click", ()=>{
    toast.style.display = "block";
    setTimeout(()=>{
        toast.style.display = "none";
    },3000);
});

closeToast.addEventListener("click", ()=>{
    toast.style.display = "none";
});

//Thông báo khi click vào button Reset

let BtnReset = btnSubmit.nextElementSibling;
let toastErr = document.querySelector("#toastReset");

BtnReset.addEventListener("click", ()=>{
    toastErr.style.display = "block";
    setTimeout(()=)
})