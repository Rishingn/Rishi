window.addEventListener("load", initEvents);

function initEvents(){
    openBox = document.querySelector(".open");
    openBox.addEventListener("click", start);
    closeBox = document.querySelector(".close");
    closeBox.addEventListener("click", closeBook);

    $(document)
  .mousemove(function(e) {
    $('.cursor')
      .eq(0)
      .css({
        left: e.clientX,
        top: e.clientY
      });
    setTimeout(function() {
      $('.cursor')
        .eq(1)
        .css({
          left: e.clientX,
          top: e.clientY
        });
    }, 100);
});

$("#cl_3").hover(function(){
  $(this).parent().parent().parent().prev().removeClass("cursor_2").addClass("cursor_3");
},
function(){
$(this).parent().parent().parent().prev().removeClass("cursor_3").addClass("cursor_2");
});

$(".open").hover(function(){
  $(this).parent().parent().parent().prev().removeClass("cursor_2").addClass("cursor_3");
},
function(){
$(this).parent().parent().parent().prev().removeClass("cursor_3").addClass("cursor_2");
});

$(".projects-details").hover(function(){
  $(this).parent().parent().parent().parent().parent().prev().removeClass("cursor_2").addClass("cursor_3");
},
function(){
$(this).parent().parent().parent().parent().parent().prev().removeClass("cursor_3").addClass("cursor_2");
});
}

function start(){
    document.querySelector(".col_1").className="col_1_open";
    document.querySelector(".col_3").className="col_3_open";
    document.querySelector(".col_2").className="col_2_open";
    setTimeout(
        function midDis(){
            document.querySelector(".display").className="display-delay";
        },600
    );
    
    
}

function closeBook(){
    document.querySelector(".col_1_open").className="col_1";
    document.querySelector(".col_2_open").className="col_2";
    document.querySelector(".col_3_open").className="col_3";
    setTimeout(
        function midDis(){
            document.querySelector(".display-delay").className="display";
        },1000
    );
}



