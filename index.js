$(document).ready(function() {

    $.ajax({
        type:"GET",
        url:"https://hanters-metals.herokuapp.com/portal/",
        contentType:"application/json;",
        dataType: "json",
        success: function(data){
                console.log(data.data.empresa.nombre)
                $("#aboutmision").append(`<p class="font-14">${data.data.empresa.mision}<p>`)
                $("#aboutvision").append(`<p class="font-14">${data.data.empresa.vision}<p>`)
                $("#aboutprincipios").append(`<p class="font-14">${data.data.empresa.principios}<p>`)
                $("#aboutvalores").append(`<p class="font-14">${data.data.empresa.valores}<p>`)
                $("#direccion").append(`<p>${data.data.empresa.direccion}<p>`)
         
            $.each(data,function(key,value){
              
                $.each(value.servicios,function(key,value2){
          
                     $("#containerServices").append
                        (`
                            <div class="col-12 col-lg-4 d-flex mt-5 justify-content-center">
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
                            </div>

                            <div class="col-12 col-lg-4 d-flex mt-5 justify-content-center">
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
                        </div>


                        <div class="col-12 col-lg-4 d-flex mt-5 justify-content-center">
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
                    </div>


                          
                        `)
                })



                $.each(value.contactos,function(key,contac){
                        console.log(key)
                    if((key < 3)){
                        console.log(contac.contacto)
                        $("#contactos1").append
                            (`

                                <span class="font-12" >${contac.contacto}</span>

                            `)
                    }else if(key>=3 && key<=4){

                        $(`#`+key).click(function(event){
                            console.log(contac.contacto)
                        })
                    }     
                })

            })
           
        }
    })


    $.ajax({
        type:"GET",
        url:"https://hanters-metals.herokuapp.com/portal/noticias/",
        contentType:"application/json;",
        dataType: "json",
        success: function(data){

            $.each(data.data,function(key,x){
                console.log(x.noticias)
                $.each(x.noticias,function(key,v){
                    console.log(key)
                    console.log(v.descripcion_corta)
                        
                    $(".carousel-inner").append
                        (`
                            <a href="PageNews.html">
                            <div id="news1"  class=" carousel-item " style="border: none;">
                    
                                <img class="d-block w-100" src=${"."+v.imagen} alt="1" style="height: 475px;">
                                <div class="bg-black-light  carousel-caption w-100 d-flex justify-content-start flex-column  font-weight-bold ">
                            
                                    <div class="d-flex ml-4 justify-content-start text-white animate__animated animate__bounceInDown " style="animation-delay:1s;">
                                        <span  style="font-size:32px;">${v.nombre}</span>
                                    </div>

                                    <div class="line-container ml-4 d-flex  justify-content-start text-white  mb-4  animate__animated animate__bounceInUp" style="animation-delay: 0.8s;font-size:1.2vw;">
                                        <p class="small1 d-flex flex-wrap single-line font-14">${v.descripcion}</p>
                                    </div>

                                </div>
                          
                            </div>
                            </a>
       
                        `)

                  
             
                    $('#noticias').append
                        (`
                            <li data-target="#carouselExampleIndicators" data-slide-to=${key} class=" tabs-porfolio  p-2  d-flex ">
                                <img class="img-tabs h-100" src=${"."+v.miniatura} >

                                <div  class="w-100 text-dark d-lg-flex flex-column justify-content-end d-none  " style="height: 100%; width: 60%;">
                                    <span class="font-weight-bold font-24 ml-2">${v.nombre}</span>
                                    <span class="font-weight-bold font-10 text-secondary ml-2 mb-2 single-line2"  > ${v.descripcion_corta}</span>
                                </div>
                            </li>
                        `)

                    let linkp = $("#noticias");
                    let link = linkp.find("li");  
                    let item =  $(".carousel-item");
    
                    link.eq(0).addClass("active");
                    item.eq(0).addClass("active");
                  
        
                })
          
            });  
         
        }
        
    })


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

         /*$("ol li ").click(function(){
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



  

});


