let Btns = document.querySelectorAll(".template__btn-item");
// tạo hiệu ứng click vào button
for(let key in Btns){
    let btn = Btns[key];

    btn.addEventListener("click", () =>{
        btn.classList.toggle("active");
    });
};
