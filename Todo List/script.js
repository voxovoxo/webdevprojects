console.log("hello world")

$(document).ready(function(){
    
    $('#input').change(function(){
        var input = $(this).val();
        $('ul').append('<li>' + input + '<i class="fa-solid fa-check"></i> <i class="fa-solid fa-trash"></i></li>'); 

});


    $('ul').on('click','.fa-trash',function(){    
        $(this).parent('li').fadeOut(200);     
});
    
    $('ul').on('click','.fa-check',function(){
        
        $(this).parent('li').toggleClass('checked').fadeOut(1000);
});
  
});
