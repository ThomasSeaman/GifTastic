$(document).ready(function () {

  function ajaxCall() {
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=5YG1izQ996GdM5LUGUHgZgCNfF9L8Dmc&q=" + gifArray + "%20fails" + "&limit=10&offset=0&rating=g&lang=en";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response.data[0].images.downsized_medium)
      console.log(response.data[0].images.downsized_still)
      for(var i = 0; i<11 ; i++){
        $('<img src="'+response.data[0].images.downsized_still+'" ' +
        'data-still="'+response.data[0].images.downsized_still+'" ' +
        'data-animate="'+response.data[0].images.downsized_medium+'" ' +
        'data-state="still"' +
        'class="gif">').appendTo("#images")
      }
    }).catch(function (err) {
      console.error(err);
    })
  }
  ajaxCall()

// var animatedGif = response.data.images.downsized_medium
// var staticGif = response.data.images.downsized_still

var gifArray = ["surfing", "gym", "basketball", "swing", "classroom", "zoo", "dog", "cooking", "santa", "olympic"]

// creates buttons 
for (var i = 0; i < gifArray.length; i++) {
  $('<button type="submit" class="btn btn-primary" id="gif-button' + [i] + '">' + gifArray[i] + " fails" + '</button>').appendTo('#button-header');
}

// when search button is clicked, adds button to gifArray
$('#search-button').on('click', function () {
  var userSearch = $('#user-input').val();
  gifArray.push(userSearch);
  $('<button type="submit" class="btn btn-primary" id="gif-button' + [i] + '">' + userSearch + " fails" + '</button>').appendTo('#button-header');
})

// when gif button is clicks, display 10 images below 
for (var i = 0; i < gifArray.length; i++) {
  $("#gif-button" + [i]).on("click", function () {
    // alert("hello")
    // console.log(response)
  })
}

  // switch between animated gif and still image on image click
  $(".gif").on("click", function () {

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
