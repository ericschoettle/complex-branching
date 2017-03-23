$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();

    // define variables
    var firstName = $("input#first-name").val().trim();
    var movieGenre = $("select#movie-genre").val();
    var food = $("select#favorite-foods").val();
    var music = $("input:radio[name=music]:checked").val();

    $(".confirm").show();

    $("#genre").text(movieGenre);
    $("#food").text(food);
    $("#music").text(music);

  });
});

    // if (firstName == "") {
    //   $(".has-error").show();
    //   $(".name").hide();
    //   $("form#survey").submit(function(event){
    //     var firstName = $("input#error-name").val().trim();
    //     $(".confirm").show();
    //
    //     $("#genre").text(movieGenre);
    //     $("#food").text(food);
    //     $("#music").text(music);
    //   });
    // } else {

    // }
    // $(".confirm").show();
    //
    // $("#genre").text(movieGenre);
    // $("#food").text(food);
    // $("#music").text(music);

    // if(firstName) {
    //   $(".confirm").show();
    //
    //   $("#genre").text(movieGenre);
    //   $("#food").text(food);
    //   $("#music").text(music);
    // }


    // $("ul.contact").children("li").click(function() {
    //   $("div[class~='firstName']").show();
    // });
