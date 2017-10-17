import { Animal } from './../js/animal.js';

$(document).ready(function() {
  let animalName = $('.animal').val();
   let newAnimal = new Animal(animalName, 30);

   $('.test').html(newAnimal.healthAlert);

  $('.name').on('click', function(){

    $('.animal-name').text(animalName);
    var foodLevelOut = newAnimal.setHunger();
    $('.health-result').html(newAnimal.healthLevel);

  });

  $('.health').click(function() {
    $('.health-result').text(newAnimal.healthLevel);
    console.log(newAnimal.healthLevel);
  });

  $('.feed-btn').click(function() {
    let test1 = newAnimal.feed()
    console.log('health:', newAnimal.healthLevel);
  });

  $('.sleep-btn').click(function() {
    newAnimal.sleep();
    console.log(newAnimal.healthLevel);
  });

  $('.wake-up-btn').click(function(){
    newAnimal.waken();
    console.log(newAnimal.healthLevel);
  });

});

$(document).ready(function(){


  // $('#pokemon-form').submit(function(e){
  //   e.preventDefault();
  //   pokemonResult = $('.pokemon-id').val();
  //   console.log(pokemonResult);
  //   pokeSubmit();
  // });


    // function pokeSubmit(){
    //   var param = document.getElementById("pokeInput").value;
    //   var pokeURL = "http://pokeapi.co/api/v1/pokemon/" + param;
    //
    //   $.getJSON(pokeURL, function(data){
    //     console.log(data);
    //     console.log(JSON.stringify(data, null, "  "));
    //     console.log(param);
    //   });
    // }

    $("#my-button").click(function(){

      var myInput = $("#my-input").val();
      console.log(myInput);
      var myUrl = "https://pokeapi.co/api/v2/pokemon/" + myInput + "/";
      console.log(myUrl);

      $.ajax({
        method: "GET",
        url: myUrl,
        success: function(data){
          $("#poke-name").html(data.id);

          $("#poke-img").attr("src", data.sprites.front_default);

        }
      });


    });
});
