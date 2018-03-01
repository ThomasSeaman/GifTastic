$(document).ready(function () {

  function ajaxCall(term) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=5YG1izQ996GdM5LUGUHgZgCNfF9L8Dmc&q=" + term + "&limit=10&offset=0&rating=g&lang=en";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      for (var i = 0; i < 11; i++) {
        $('<img src="' + response.data[i].images.fixed_height_still.url + '" ' +
          'data-still="' + response.data[i].images.fixed_height_still.url + '" ' +
          'data-animate="' + response.data[i].images.fixed_height.url + '" ' +
          'data-state="still"' + 'class="gif"/>').appendTo("#images")
      }
    }).catch(function (err) {

    })

  }

  var gifArray = ["surfing", "gym", "basketball", "swing", "classroom", "zoo", "dog", "cooking", "santa", "olympic"]
  
  // creates buttons 
  for (var i = 0; i < gifArray.length; i++) {
    $('<button type="submit" class="btn btn-primary gif-button" id="gif-button">' + gifArray[i] + " fails" + '</button>').appendTo('#button-header');
  }
  
  
  // when gif button is clicks, display 10 images below 
  $(".gif-button").on("click", function () {
    $('.gif').remove();
    ajaxCall($(this).text());
  })
  
  // when search button is clicked, adds button to gifArray
  $('#search-button').on('click', function () {
    var userSearch = $('#user-input').val();
    gifArray.push(userSearch);
    $('<button type="submit" class="btn btn-primary gif-button-new" id="gif-button">' + userSearch + " fails" + '</button>').appendTo('#button-header');
    console.log(gifArray)
    $('.gif').remove();
    ajaxCall($(".gif-button-new").text());
  })

  // switch between animated gif and still image on image click
  $(".gif").on("click", function() {
    console.log(this)
    alert("hello")
    console.log("hello")
    var state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
});