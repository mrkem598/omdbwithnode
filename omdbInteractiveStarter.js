
var request = require("request");

// Grab or assemble the movie name and store it in a variable called "movieName"
var movieName = process.argv[2];
// ...


// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";


// This line is just to help us debug against the actual URL.
console.log(queryUrl);


// Then create a request to the queryUrl
// ...
request(queryUrl, function(error, response, body){

  // If the request is successful
  // ...
if (!error && response.statusCode === 200) {
	// Then log the Release Year for the movie
	console.log("Release Year: " + JSON.parse(body).Type);
}
  
  
});