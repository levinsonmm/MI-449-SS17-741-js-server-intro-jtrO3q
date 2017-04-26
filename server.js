// Require Node's http module and assign it to a variable
var http = require('http')

// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      // greeting
      '<h1>Home</h1>' +
      '<p>Hiiiiiiiii</p>'
    )
  } else if (request.url === '/random-joke') {
    // 1 of 3 random knock knock jokes
    var num = Math.ceil(Math.random() * 100) % 3
    if (num === 0) {
      response.end(
        // joke 1
        '<h1>Joke</h1>' +
        '<p><a href="./">Go Home</a></p>' +
        '<p>Knock knock.</p>' +
        '<p>Who\'s there?</p>' +
        '<p>Major.</p>' +
        '<p>Major who?</p>' +
        '<p>Major day with this joke, haven\'t I?</p>'
      )
    } else if (num === 1) {
      response.end(
        // joke 2
        '<h1>Joke</h1>' +
        '<p><a href="./">Go Home</a></p>' +
        '<p>Knock knock.</p>' +
        '<p>Who\'s there?</p>' +
        '<p>Armageddon.</p>' +
        '<p>Armageddon who?</p>' +
        '<p>Armageddon a little bored. Let\'s go out.</p>'
      )
    } else if (num === 2) {
      response.end(
        // joke 3
        '<h1>Joke</h1>' +
        '<p><a href="./">Go Home</a></p>' +
        '<p>Knock knock.</p>' +
        '<p>Who\'s there?</p>' +
        '<p>Barbie.</p>' +
        '<p>Barbie who?</p>' +
        '<p>Let\'s Barbie Q!</p>'
      )
    }
  } else if (request.url === '/cuteness') {
    // cute animal
    response.end(
      // greeting
      '<h1>Cutie</h1>' +
      '<p><a href="./">Go Home</a></p>' +
      '<img src="https://scontent.fdet1-1.fna.fbcdn.net/v/t31.0-8/17880341_10210114320909138_3582055037028312316_o.jpg?oh=1390ec351cfbc0a874d444772b2e15ee&oe=59853006" alt="frankie the chihuahua">'
    )
  } else {
    // error page
    response.end(
      '<h1>Page Not Found</h1>' +
      '<p><a href="./">Go Home</a></p>' +
      '<p>The requested URL ' + request.url + ' was not found on this server. Sorry pal.</p>'
    )
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')
