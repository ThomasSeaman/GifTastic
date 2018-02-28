$(document).ready(function () {
  
  var gifArray = ["surfing", "gym", "basketball", "swing", "classroom", "zoo", "dog", "cooking", "santa", "olympic"]
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=5YG1izQ996GdM5LUGUHgZgCNfF9L8Dmc&q=" + gifArray + "%20fails" + "&limit=10&offset=0&rating=g&lang=en";


  for (var i = 0; i < gifArray.length; i++) {
    $('<button type="submit" class="btn btn-primary" id="gif-button' + [i] + '">' + gifArray[i] + " fails" + '</button>').appendTo('#button-header');
  }

  $('#search-button').on('click', function () {
    var userSearch = $('#user-input').val();
    gifArray.push(userSearch);
    $('<button type="submit" class="btn btn-primary" id="gif-button' + [i] + '">' + userSearch + " fails" + '</button>').appendTo('#button-header');
  })


  for (var i = 0; i < gifArray.length; i++) {
    $("#gif-button" + [i]).on("click", function () {
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        console.log(response)
      }).catch(function (err) {
          // console.error(err);
        })
      })
  }


  $(".gif").on("click", function () {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
});
