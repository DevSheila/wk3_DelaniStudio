
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

      //Hover effect on portfolio images

      $('.image__overlay').hover(function(e){
          let currentImage = e.currentTarget

        $(currentImage).mouseover(function(){
            $(currentImage).css('opacity','1')

        })

        $(currentImage).mouseout(function(){
            $(currentImage).css('opacity','0')

        })
      })
       
   })

//#contactForm
// #name
// #mce-EMAIL
// #message

const form = document.getElementById('contactForm');
const formName = document.getElementById('mce-MMERGE6');
const formEmail= document.getElementById('mce-EMAIL');
const formMessage = document.getElementById('mce-MMERGE2');


form.addEventListener("submit", e=>{
    e.preventDefault();
    console.log(formName.value + formEmail.value + formMessage.value);
    validateForm()
})


function validateForm(){
    //No Empty Fields
    if(formName.value === ""){ 
        alert("Please Enter Your Name");
    }else if(formEmail.value === ""){
        alert("Please Enter Your Email");
    }else if(formMessage.value === ""){
    alert("Please Enter Your Message");  
    }else{
        success();  
    }
}

function success(){
    alert("Thank you for contacting us " +(formName.value).toUpperCase() + " Your Message has been received" );
    clearFields();
}


function clearFields(){
    formName.value ='';
    formEmail.value ='';
    formMessage.value='';
};
