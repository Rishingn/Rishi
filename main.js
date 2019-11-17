window.addEventListener("load", initEvents);

function initEvents(){
    openBox = document.querySelector(".open");
    openBox.addEventListener("click", start);
    closeBox = document.querySelector(".close");
    closeBox.addEventListener("click", closeBook);
}

function start(){
    document.querySelector(".col_1").className="col_1_open";
    document.querySelector(".col_3").className="col_3_open";
    document.querySelector(".col_2").className="col_2_open";
}

function closeBook(){
    document.querySelector(".col_1_open").className="col_1";
    document.querySelector(".col_2_open").className="col_2";
    document.querySelector(".col_3_open").className="col_3";
}