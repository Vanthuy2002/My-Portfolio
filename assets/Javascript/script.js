let Btns = document.querySelectorAll(".template__btn-item");
// tạo hiệu ứng click vào button
for(let key in Btns){
    let btn = Btns[key];

    btn.onclick = (e)=>{
        btn.classList.toggle("active");
        e.stopPropagation();
    }
};
