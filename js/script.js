$(document).ready(function() {

  console.log("document loaded")

  $("form#radios").submit(function(event) {

      var place = $("input:radio[name=fave]:checked").val();
      var temperature = $("input:radio[name=temp]:checked").val();
      var scared = $("input:radio[name=afraid]:checked").val();
      var bodyOfWater = $("input:radio[name=water]:checked").val();
      var tree = $("input:radio[name=tree]:checked").val();

    console.log("did we make it here?")

    if (place === "forest") {
      $("#craterLake").removeClass("gone");
    }

    else if (place === "beach") {
      $("#belize").removeClass("gone");
    }

    else if (place === "jungle") {
      $("#amazon").removeClass("gone");
    }

    else if (place === "mountain") {
      $("#craterLake").removeClass("gone");
    }


    else {
      $("#jail").removeClass("gone");
    }




    // if (place === "forest" && temperature === "hot" && scared === "spiders" && bodyOfWater === "ocean" && tree === palm) {
    //   $(".showpic").removeClass("showpic");
    //   $(".belize").addClass("showpic");
    // } else if (place === "beach" && temperature === "hot" && scared === "snakes" && bodyOfWater === "ocean" && tree === palm) {
    //   $(".showpic").removeClass("showpic");
    //   $(".belize").addClass("showpic");
    // } else if (place === "mountain" && temperature === "cold" && scared === "giantSquid" && bodyOfWater === "lake" && tree === pine) {
    //   $(".showpic").removeClass("showpic");
    //   $(".craterLake").addClass("showpic");
    // } else if (place === "jungle" && temperature === "hot" && scared === "sharks" && bodyOfWater === "river" && tree === palm) {
    //   $(".showpic").removeClass("showpic");
    //   $(".amazon").addClass("showpic"); }
    event.preventDefault();
  });
});
