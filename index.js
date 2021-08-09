$(document).ready(function() {


        
    let url = 'https://hanters-metals.herokuapp.com'

    let idMaterial=0

    let idNoticias=0

    let hashPath= $(location).attr('hash');  


     

        if(hashPath==="#0"){
            idMaterial=3
            idNoticias=2
         }else if(hashPath ==="#1"){
             idMaterial=2
             idNoticias=1
         }
    

      




   /* if(hashPath==="#1"){
        $("html, body").animate({
            scrollTop: $("#about").offset().top -100
        }, 100);
    }else    if(hashPath==="#2"){
  
       $("html, body").animate({
        scrollTop: $("#services").offset().top -100
    }, 100);}
    else    if(hashPath==="#3"){
  
        $("html, body").animate({
         scrollTop: $("#productos").offset().top +850
     }, 100); 
    }else  if(hashPath==="#4"){
        $("html, body").animate({
            scrollTop: $("#testimonio").offset().top +100
        }, 100);
    }else    if(hashPath==="2"){
        $("html, body").animate({
            scrollTop: $("#contactus").offset().top -100
        }, 100);
    }else if(hashPath==="#0"){
       idMaterial=3
       idNoticias=2
    }else if(hashPath ==="#1"){
        idMaterial=2
        idNoticias=1
    }*/


    //alert(hashPath)


 
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

                          


                          
                        `)
                })

                $.each(value.materiales,function(key,value2){
                    console.log("------")
                    console.log(value2)
          
                    $("#containerMateriales").append
                       (`
                            <div  id=hashPath${key} class="material col-sm-12  col-md-6 col-xl-4  d-flex justify-content-center mt-4 " >
                                <a href="PageMaterial.html#${key}">
                                    <div id="imageProtoflio" style=" background-image: url(${'https://hanters-metals.herokuapp.com'+value2.imagen});height:370px;width: 346px;"  style=" background-image: url(./assets/img/Bronce_1.jpg)" id="imageProtoflio" class="bg-banner-23  d-flex justify-content-center position-relative" >

                                        
                                        <div class="hover-lastproyect"><span>${value2.nombre}</span>
                                            <span class="font-12 text-white">Managua,Nicaragua</span>
                                        </div>

                                    </div>
                                </a>
                            </div>
                       `)

             
                       
                        if(key!=2){

                          /*  $("#containerMateriales2").append
                            (`
                                 <div class="col-sm-12  col-md-6  mt-4">
                                     <div style="height: 150px;" class=" ">
                                         <a href="PageMaterial.html">
                                             <div style=" background-image: url(${"."+value2.imagen});height:150px;width: 100%;"  style=" background-image: url(./assets/img/Bronce_1.jpg)" id="imageProtoflio" class="bg-banner-23  d-flex justify-content-center position-relative" >
                                                 
                
                                                 
                                                 <div class="hover-lastproyect"><span>${value2.nombre+"hashPath"}</span>
                                                     <span class="font-12 text-white">Managua,Nicaragua</span>
                                                 </div>
     
                                             </div>
                                         </a>
                                     
                                     </div>
                                 </div>
                            `)*/

                        }

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
                    console.log("----")
                    console.log(key)
                    console.log(v.descripcion_corta)
            
  
                    $(".carousel-inner").append
                        (`
                          
                            <div id=${key}  class=" carousel-item " style="border: none;">
                            <a href="PageNews.html#${key}">
                                <img class="d-block w-100" src=${url+v.imagen} alt="1" style="height: 475px;">
                             
                                <div class="bg-black-light  carousel-caption w-100 d-flex justify-content-start flex-column  font-weight-bold ">
                            
                                    <div class="d-flex ml-4 justify-content-start text-white animate__animated animate__bounceInDown " style="animation-delay:1s;">
                                        <span  style="font-size:32px;">${v.nombre}</span>
                                    </div>
                                    <div class="line-container ml-4 d-flex  justify-content-start text-white  mb-4  animate__animated animate__bounceInUp" style="animation-delay: 0.8s;font-size:1.2vw;">
                                        <p class="small1 d-flex flex-wrap single-line font-14">${v.descripcion}</p>
                                    </div>
                                </div>
                                </a>
                          
                            </div>
                        
                        `)

                        $(`#${key}`).click(function() {
                     

                         });

                  
             
                    $('#noticias').append
                        (`
                            <li data-target="#carouselExampleIndicators" data-slide-to=${key} class=" tabs-porfolio  p-2  d-flex ">
                                <img class="img-tabs h-100" src=${url+v.miniatura} >
                                <div  class="w-100 text-dark d-lg-flex flex-column justify-content-end d-none  " style="height: 100%; width: 60%;">
                                    <span class="font-weight-bold font-24 ml-2">${v.nombre}</span>
                                    <span class="font-weight-bold font-10 text-secondary ml-2 mb-2 single-line2"  >${v.descripcion_corta}</span>
                                </div>
                            </li>
                        `)

                        

                         if(key === (idNoticias-1) ) {

                        $('#noticiasrecientes').append
                        (`
                            <div class=" tabs-porfolio col-12 col-lg-6 mt-2 mb-2  d-flex flex-column ">
                                <div class="bg-banner-23 " style="height: 250px;background-image: url(${url+v.miniatura});" >
                                </div>
                    
                                <div  class="w-100 text-dark d-flex flex-column justify-content-end   " style="height: 100%; width: 100%;">
                                    <span class="font-weight-bold font-24 ml-2">${v.nombre}</span>
                                    <span class="font-weight-bold font-10 text-secondary ml-2 mb-2 single-line2">${v.descripcion_corta}</span>
                                </div>
                            </div>
                        `)

                         }

                    let linkp = $("#noticias");
                    let link = linkp.find("li");  
                    let item =  $(".carousel-item");
    
                    link.eq(0).addClass("active");
                    item.eq(0).addClass("active");
                  
        
                })
          
            });  
         
        }
        
    })


   


    $.ajax({
        type:"GET",
        url:`https://hanters-metals.herokuapp.com/portal/noticia/${idNoticias}/`,
        contentType:"application/json;",
        dataType: "json",
        success: function(data){
            $("#titulonoticia").append
            (`
                <span class="mr-3">${data.data.nombre}</span>
     
            `)

            $("#imgnoticias").append
            (`

                <div class="bg-banner-23 w-100 " style="background-image: url(${url+data.data.imagen});height: 475px;"></div>
     
            `)

            $("#noticiasdescripcion").prepend
            (`
                <p>${data.data.descripcion}</p>
     
            `)
            
               
         
        }
        
    })


    $.ajax({
        type:"GET",
        url:`https://hanters-metals.herokuapp.com/portal/material/${idMaterial}/`,
        contentType:"application/json;",
        dataType: "json",
        success: function(data){

            
            $.each(data.data,function(key,x){

                if(key===0){
                    $("#title23").append
                            
                    (`
                    <span  class="text-green pol">
                    ${x.nombre}</span>
                    </div>
                    `)
                }

           
                $('#holap1').css('background-image', 'url(' + url+x.imagen + ')');

                console.log("haylago",x.nombre)
                console.log("haylago",x.galerias)

                $("#containerMateriales2").append
                (`
                    <div id=${key}  class="col-sm-12 mlo  col-md-6  mt-4">
                         <div style="height: 150px;" class=" ">
                             <a >
                                 <div style=" background-image: url(${url+x.imagen});height:150px;width: 100%;"  style=" background-image: url(./assets/img/Bronce_1.jpg)" id="imageProtoflio" class="bg-banner-23  d-flex justify-content-center position-relative" >
                                     
    
                                     
                                     <div class="hover-lastproyect"><span>${x.nombre}</span>
                                         <span class="font-12 text-white">Managua,Nicaragua</span>
                                     </div>
                                 </div>
                             </a>
                         
                         </div>
                     </div>
                `)
                    if(key===0){

                   

                        $.each(x.galerias,function(key,y){
                        
                            console.log("haylago33",y.imagen)


                         $('#holap1').css('background-image', 'url(' + url+x.imagen + ')');
        
        
                            $("#galeriaMateriales").append
               
                            (`
                                    <div class="col-sm-12 pol col-md-6 col-xl-4 mt-4">
                                   
                                    <div style="height: 500px; background-image: url(${'https://hanters-metals.herokuapp.com'+y.imagen})" class="bg-banner-23 ">
                                    
                                    </div>
                                </div>
            
                           
                    
                        `)
                            
                        })

                    }
        

           


                  
                        $(`#${key}`).on('click', function(e){
                            $( ".pol" ).remove();
                            $('#holap1').css('background-image', 'url(' + url+x.imagen + ')');
                        
                            //alert("funciona")
                            $("html, body").animate({scrollTop: 0}, 100);
                        // e.preventDefault();
                            //console.log(algodon)
                    
                            //console.log("juana la cubana"+this.id);
                            //alert(this.id)
                            //algodon==this.id
                            //console.log( "123")
                            //console.log(algodon)
                            //return algodon

                    
                        
                            $("#title23").append
                            
                            (`
                            <span  class="text-green pol">
                            ${x.nombre}</span>
                            </div>
                        
                        `)



                                    
                   


                                        $.each(x.galerias,function(key,y){
                                    
                                            console.log("haylago33",y.imagen)
                        
                        
                                            $("#galeriaMateriales").append
                            
                                            (`
                                                    <div class="col-sm-12 pol col-md-6 col-xl-4 mt-4">
                                              
                                                    <div style="height: 500px; background-image: url(${'https://hanters-metals.herokuapp.com'+y.imagen})" class="bg-banner-23 ">
                                                    
                                                    </div>
                                                </div>
                            
                                        
                                    
                                        `)
                                            
                                        })
                                        
                            
                                    
                        })
             
                   
                    
                })
        
            
               
         
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
                    scrollTop: $("#productos").offset().top -100
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


            $(".navbarProfolio").toggleClass("collapse-porfolio-navbar","")


   
   
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



    if(hashPath==="#1"){
        $("html, body").animate({
            scrollTop: $("#about").offset().top +350  }, 500);
    }else    if(hashPath==="#2"){
  
       $("html, body").animate({
        scrollTop: $("#services").offset().top +350}, 500);}
    else    if(hashPath==="#3"){
  
        $("html, body").animate({
         scrollTop: $("#productos").offset().top +1300  }, 500);  
     
    }else    if(hashPath==="#4"){
        $("html, body").animate({
            scrollTop: $("#testimonio").offset().top +1700}, 500);
    }else    if(hashPath==="#5"){
        $("html, body").animate({
            scrollTop: $("#contactus").offset().top +1700}, 500);
    }








});


