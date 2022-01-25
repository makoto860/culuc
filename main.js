/*電卓*/
function get_calc(btn) {
      if(btn.value == "=") {
        document.dentaku.display.value = eval(document.dentaku.display.value);
      } else if (btn.value == "AC") {
        document.dentaku.display.value = "";
      } else {
        if (btn.value == "×") {
          btn.value = "*";
        } else if (btn.value == "÷") {
          btn.value = "/";
        } 
        document.dentaku.display.value += btn.value;
        document.dentaku.display.multi_btn.value = "×";
        document.dentaku.display.div_btn.value = "÷";
      }
    }
  
