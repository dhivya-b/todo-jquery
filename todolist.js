$(document).ready(function(){
$("tbody").on("mouseenter",".list",function(){
    //alert("tbody entered");
                $(this).children().addClass("trash");
            });

            $("tbody").on("mouseleave",".list",function(){

                  $(this).children().removeClass("trash")
                });




 $("tbody").on("click", "td", function(){
    //  $(this).on("click",function(){
        $(this).toggleClass("todoDecor");
    //  });
     
});

$("tbody").on("click","span",function(event){
    
   $(this).parent().fadeOut(500,function(){
       $(this).remove();
       event.stopPropagation();// stop event bubbling
   })
 
});

$("input[type='text']").on("keypress",function(event){
    if(event.which===13){
           
        var text=$(this).val();
        $("tbody").append("<tr><td class='list'><span><i class='fa fa-trash trash'></i></span> " + text+"</td></tr>");
    }
 });

$("input[type='text']").on("focus",function(){
    $(this).toggleClass("inputMode");
    $(this).parent().toggleClass("inputParentmode");
});

$(".fa-plus").click(function(){
    $("#newTodo").fadeToggle(); 
})


});