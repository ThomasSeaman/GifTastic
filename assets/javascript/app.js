var userSearch = "soccer"

var searchGiphy = function () {
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=5YG1izQ996GdM5LUGUHgZgCNfF9L8Dmc&q=" + userSearch + "%20fails" + "&limit=10&offset=0&rating=g&lang=en";
  $.ajax({
    url: queryURL,
    method: 'GET'
  })
    .then(function (resp) {
      console.log(resp)
    })
    .catch(function (err) {
      // throw err;
      console.log(err)
    });
}
console.log(searchGiphy())