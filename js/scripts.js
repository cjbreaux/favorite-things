var things = [];
var counter=0;
$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    things.push($("#userInput").val());
    $("#favList").append("<li>" + things[counter] + "</li>");
    console.log(things+counter);
    counter+=1;
  });
});
