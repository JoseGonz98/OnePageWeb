$(document).ready(function() {


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
             

                $("#aboutmision").append(`<p>${value3.mision}<p>`)
                $("#aboutvision").append(`<p>${value3.vision}<p>`)
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




