$(document).ready(function() {

$("form#radios").submit(function(event) {

var place = ("input:radio[name=favePlace]:checked").val();
var temperature = ("input:radio[name=temp]:checked").val();
var scared = ("input:radio[name=afraid]:checked").val();
var bodyOfWater = ("input:radio[name=water]:checked").val();
var tree = ("input:radio[name=tree]:checked").val();



if (place === "forest" && temperature === "hot" && scared === "spiders" && bodyOfWater === "ocean" && tree === palm) {
$(".showpic").removeClass("showpic");
$(".belize").addClass("showpic");
}

else if (place === "beach" && temperature === "hot" && scared === "snakes" && bodyOfWater === "ocean" && tree === palm) {
$(".showpic").removeClass("showpic");
$(".belize").addClass("showpic");
}

else if (place === "mountain" && temperature === "cold" && scared === "giantSquid" && bodyOfWater === "lake" && tree === pine) {
$(".showpic").removeClass("showpic");
$(".craterLake").addClass("showpic");
}

else if (place === "jungle" && temperature === "hot" && scared === "sharks" && bodyOfWater === "river" && tree === palm) {
$(".showpic").removeClass("showpic");
$(".amazon").addClass("showpic");

else {
$(".showpic").removeClass("showpic");
$(".jail").addClass("showpic");
}



  event.preventDefault();
      });
});
