var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.what3words.com/v2/reverse?coords=22.195130%2C-97.786571&key=Z9TT9Q81&lang=en&format=json&display=full",
  "method": "GET",
  "headers": {}
}

$.ajax(settings).done(function (response) {
  // console.log(response);
  var resp_str = JSON.stringify(response);
  var words = response.words;
  $(".location").prepend(words);
});
        