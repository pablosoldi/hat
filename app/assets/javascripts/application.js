//= require jquery.min
//= require_tree .

function autoClosingAlert(selector, delay) {
   var alert = $(selector).alert();
   window.setTimeout(function() { alert.fadeTo(500, 0).slideUp(500, function(){ alert.alert('close') });}, delay);
}

$(document).ready(function(){
  autoClosingAlert(".alert", 10000);
});