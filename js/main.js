$(document).ready(function(){
    let button = $("#button-animate");
    let img = $(".offer-img");

    img.on('animationend', function(){
        img.removeClass("animate__backInRight animate__delay-2s");
    })

    button.click(function(e){
        e.preventDefault();
        img.addClass("animate__zoomIn");
        
        img.on('animationend', function(){
            img.removeClass("animate__zoomIn");
        })
  
    })

    scrollAnimate('.future', 300, [
        {
            element: '.future-title',
            class: 'animate__swing'
        },{
            element: '.item-1',
            class: 'animate__backInLeft'
        },{
            element: '.item-2',
            class: 'animate__zoomIn'
        },{
            element: '.item-3',
            class: 'animate__backInRight'
        }
    ]);

    scrollAnimate('.form-section', 300, [
        {
            element: '.form-section',
            class: 'animate__lightSpeedInLeft'
        }
    ]);

    scrollAnimate('.form-section', 200, [
        {
            element: '.footer',
            class: 'animate__fadeInUp'
        }
    ])


})
function scrollAnimate(sectionClass, delay, object){
    let sectionPosition = $(sectionClass).offset().top;
    
    $(document).scroll(function(){
        let scrollPosition = $(document).scrollTop();
        
     
        if(scrollPosition >= sectionPosition - delay){

            for(let i = 0; i < object.length; i++){
                $(object[i].element).addClass(object[i].class);
            }
          
        }
    })
    
}
