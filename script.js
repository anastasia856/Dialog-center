$('a[href^="#"]').click(function(){ 
    let scroll = $(this).attr('href');  
    $('html, body').animate({           
    scrollTop:  $(scroll).offset().top - 60  
    }, 600);                            
    });
