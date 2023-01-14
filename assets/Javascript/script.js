let Btns = document.querySelectorAll(".template__btn-item");

for(let key in Btns){
    let btn = Btns[key];

    btn.addEventListener("click", () =>{
        btn.classList.toggle("active");
    });
};
