// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<h1>Welcome!</h1>'
    )
  } else if (request.url === '/randomjoke') {
      var randomNumber = Math.floor(Math.random() * 2)) + 1
      if (randomNumber = 1) {
        response.write('<p>Knock, knock!<br>Who’s there?<br>Opportunity!<br>That is impossible. Opportunity doesn’t come knocking twice!</p>')
      } else if (randomNumber = 2) {
        response.write('<p>Knock knock.<br>Who’s there?<br>An extraterrestrial.<br>Extraterrestrial who?<br>What – how many extra-terrestrials do you know?</p>')
      } else {
        response.write('<p>Knock knock.<br>Who’s there?<br>Beats.<br>Beats who?<br>Beats me.</p>')
      }
  }
    response.end('<p>Homepage<a href="/">click here</a>!</p>')
  } else if (request.url === '/cuteness') {
    response.write('<h1>Everyone likes cute kitten!</h1><img src="https://i.pinimg.com/originals/00/a2/5e/00a25e20bc5b615799588d377bfaac5e.jpg"')
    response.end('<p>Homepage<a href="/">click here</a>!</p>')
  } else {
    response.write('<h1>404. That is an ERROR!</h1><br><p>The requested URL' + request.url + ' was not found on this server. That is all we know.</p>')
    response.end('<p>Homepage<a href="/">click here</a>!</p>')
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
