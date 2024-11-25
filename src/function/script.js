import $ from 'jquery'
/*$('.fnt-def-hover').attr('title' , 'livreur polyvalent')*/

/*$('.rating-hover').attr('title' , 'Le ranking est calculé à partir des 3 critères présents dans la colonne Performance')*/

//active class secteur
var header_main = document.getElementById("main-head");
var btn_sub = document.getElementsByClassName("sub-head"); 
for(var i=0; i<btn_sub.length; i++){
    btn_sub[i].addEventListener("click", function(){
        var current_sub = document.getElementsByClassName("active-sub");
        current_sub[0].className = current_sub[0].className.replace(" active-sub", "");
        this.className += " active-sub";
    });
}

var head_ol = document.getElementById("head-ol")
var sub_number = document.getElementsByClassName("sub-number")
for(var i=0; i<sub_number.length; i++){
    sub_number[i].addEventListener("click", function(){
        var crt_sub_nbr = document.getElementsByClassName("active-pagination")
        crt_sub_nbr[0].className = crt_sub_nbr[0].className.replace(" active-pagination", "")   
        this.className += " active-pagination"
    })
}


$(document).ready(() => {
    $('.qst-container-frstline').click(function(){
      $(this).siblings('.qst-container-content').toggle();
      $(this).find('.arrow-up').toggle();
      $(this).find('.arrow-down').toggle();
    })
  })


  $(document).ready(function() {
    $('.thumbnail').on('click', function() {
        // Get the source of the clicked thumbnail
        var newSrc = $(this).attr('src');
        // Update the main image source
        $('#mainImage').attr('src', newSrc);
    });
});
