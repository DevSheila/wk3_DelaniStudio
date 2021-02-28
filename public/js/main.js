
$(document).ready(function(){
    // Toggle Effect on what we do section
      $('.what-icon').click(function(e){
          let whatIcon = e.currentTarget;
          let whatPara = e.currentTarget.nextElementSibling.childNodes[3];
          $(whatPara).toggle(function(){
   
           $(whatIcon).hide();
           $(whatPara).click(function(){
               $(whatIcon).show()
               $(whatPara).hide();
           })
          })
      })

      $('.image__overlay').hover(function(e){
          console.log(e.currentTarget)
          let currentImage = e.currentTarget

        $(currentImage).mouseover(function(){
            $(currentImage).css('opacity','1')

        })

        $(currentImage).mouseout(function(){
            $(currentImage).css('opacity','0')

        })
      })
       
   })