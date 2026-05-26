$(document).ready(function() {

 let display_result = "";

    $('button').click (function() {
     $('button').removeClass('active-button');
    $(this).addClass('active-button');
     let buttonText = $(this).text();
     let dataType = $(this).data('type');
     console.log(buttonText);
  
 if (dataType === "operator") {
      display_result = display_result + buttonText;
      $('[data-type="operator"]').prop('disabled', true);
    } else if (dataType === "number") {
       if (display_result === "" && (buttonText === "0" || buttonText === "00")) {
        return; 
      }
      display_result = display_result + buttonText;
      $('[data-type="operator"]').prop('disabled', false);
    } else if (dataType === "clear") {
        display_result = "";
      $('[data-type="operator"]').prop('disabled', false);
    }else if (dataType === "equal") {
      display_result = eval(display_result);
      $('[data-type="operator"]').prop('disabled', false);
    }
      
 if (display_result === "") {
      $('.display_result').text("0");
    } else {
      $('.display_result').text(display_result);

    }
   });
   
});