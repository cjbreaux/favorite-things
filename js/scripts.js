
var userNames=[];
var things = [];
var userAndThings =[];
var counter=0;
$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    userNames.push($("#nameInput").val());
    things.push($("#thingInput").val());
    $("#favList").append("<li>" + things[counter] + "</li>");
    $("#userList").append("<li>" + userNames[counter] + "</li>");
    userAndThings.push(userNames[counter]+" "+things[counter])
    console.log("here they are together: "+ userAndThings)
    counter+=1;
    $("ul#userList li").click(function(){
      alert(things[counter]);
    });
  });

});
