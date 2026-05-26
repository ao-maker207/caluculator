$(document).ready(function() {

  let display_result = "";

  $('button').click(function() {
    $('button').removeClass('active-button');
    $(this).addClass('active-button');
    
    let buttonText = $(this).text();
    let dataType = $(this).data('type');
    console.log(buttonText);
  
    if (dataType === "operator") {
      display_result = display_result + buttonText;
      $('[data-type="operator"]').prop('disabled', true);
      
    } else if (dataType === "number") {
      if (buttonText === "00") {
        let numbers = display_result.split(/[\+\-\*\/]/);
        let lastNumber = numbers[numbers.length - 1];
        if (lastNumber === ""|| lastNumber === "0") {
        return; }
      }

      if (buttonText === ".") {
        let numbers = display_result.split(/[\+\-\*\/]/);
        let lastNumber = numbers[numbers.length - 1];
        if (lastNumber === "") {
          display_result = display_result + "0.";
          $('[data-type="operator"]').prop('disabled', false);
          $('.display_result').text(display_result);
          return;
        } else if (lastNumber === "0") {
          display_result = display_result + ".";
          $('[data-type="operator"]').prop('disabled', false);
          $('.display_result').text(display_result);
          return;
      } else if (lastNumber.includes('.')) {
          return; 
        }
    }
      let numbers = display_result.split(/[\+\-\*\/]/);
      let lastNumber = numbers[numbers.length - 1];
      if (lastNumber === "0" && buttonText !== ".") {
        display_result = display_result.slice(0, -1);
      }

      display_result = display_result + buttonText;
      $('[data-type="operator"]').prop('disabled', false);

    } else if (dataType === "clear") {
      display_result = "";
      $('[data-type="operator"]').prop('disabled', false);
      
    } else if (dataType === "equal") {
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