$(document).ready(function() {

    const mediaqueryList = window.matchMedia("(max-width: 1054px)");
    console.log(mediaqueryList.matches)

    $("ol li").click(function (event){
        if($(this).attr('id')==="1"){
            $('#scroll').animate({
                scrollTop: 0
            }, 100);
        

        }else{
            $('#scroll').animate({
                scrollTop: $(this).offset().top -300
            }, 100);

     
        }
        
    });



    $("#navbar a").click(function (event){
            console.log($(this).attr('id'))
     
            if($(this).attr('id')==="seccion1"){
                $("html, body").animate({
                    scrollTop: $("#home").offset().top -100
                }, 100);
            }else    if($(this).attr('id')==="seccion2"){
                $("html, body").animate({
                    scrollTop: $("#about").offset().top -100
                }, 100);
            }else    if($(this).attr('id')==="seccion3"){
                $("html, body").animate({
                    scrollTop: $("#services").offset().top -100
                }, 100);
            }else    if($(this).attr('id')==="seccion4"){
                $("html, body").animate({
                    scrollTop: $("#portafolio").offset().top -100
                }, 100);
            }else    if($(this).attr('id')==="seccion5"){
                $("html, body").animate({
                    scrollTop: $("#testimonio").offset().top -100
                }, 100);
            }else    if($(this).attr('id')==="seccion6"){
                $("html, body").animate({
                    scrollTop: $("#contactus").offset().top -100
                }, 100);
            }
   
    });


    $("#ubicanos").click(function(event){
        window.open('https://www.google.com/maps/place/Hanter+Metals/@12.1525352,-86.288167,17z/data=!4m12!1m6!3m5!1s0x8f7157aae829d611:0x94b42c47e2ba7bd8!2sHanter+Metals!8m2!3d12.15253!4d-86.2876842!3m4!1s0x8f7157aae829d611:0x94b42c47e2ba7bd8!8m2!3d12.15253!4d-86.2876842', '_blank');
    })


    $("ol li").click(function (event){
        if(mediaqueryList.matches==true){
            if($(this).attr('id')==="1"){        
                $('#caro').animate({
                    scrollLeft: 0
                }, -100);
            }else{
                $('#caro').animate({
                scrollLeft: $(this).offset().left
                }, -100);
            }
        }
        
        
    });

  /*  $("ol li ").click(function(){
        if ($(this).hasClass('active')){
            $('#caro').animate({
                scrollTop: $(this).offset().top
            }, 100);
        }
    });*/


      $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    
    $("#toTop").click(function () {
       $("html, body").animate({scrollTop: 0}, 100);
    });


    
    $("#Hambuger").click(function(){
        $(".navbarProfolio").toggleClass("collapse-porfolio-navbar","");
    })

    $.ajax({
        url:"./hantersmetals.json",
        type:"GET",
        success: function(data){
            console.log(data)
         
            $.each(data,function(key,value){


                $.each(value.servicios,function(key,value2){
                    console.log(value2.nombre)
                     $("#containerServices").append(
                            `<div class="col-sm-12 col-md-4 col-lg-4 mt-5">
                            <div class="container-services d-flex flex-column p-4 ">
                                <div class="container-icon-service d-flex align-items-end">
                                    <div class="icon-service">
                                        <img class="img-service-1" style="height: 50px;width: 50px;">

                                    </div>
                                    <div><h3>${value2.nombre}</h3></div>
                                </div>
                              
                                <div class="mt-3 pb-4">
                                    <span class="">
                                            ${value2.descripcion}
                                    </span>
                                </div>
                            </div>
                        </div>` 
                )
            })





            $.each(value.empresa,function(key,value3){
             

                $("#aboutmision").append(`<p class="font-14">${value3.mision}<p>`)
                $("#aboutvision").append(`<p class="font-14">${value3.vision}<p>`)
                $("#aboutprincipios").append(`<p class="font-14">${value3.principios}<p>`)
                $("#aboutvalores").append(`<p class="font-14">${value3.valores}<p>`)
                $("#direccion").append(`<p>${value3.direccion}<p>`)
                 console.log(value3.mision)
         })


    


        $.each(value.contactos,function(key,contac){

            if((key < 3)){
                console.log(contac.contacto)
                $("#contactos1").append(`

                <span class="font-12" >${contac.contacto}</span>
    


                `)
            }
         
                 

           
    })
            })
           
        }
    })




});




