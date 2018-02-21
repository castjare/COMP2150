var http = require('http')
var fs = require('fs')

var fileName = 'players_info.json'

var server = http.createServer ((request, response) => {
    var srcStream = fs.createReadStream(fileName)

    srcStream.pipe(response)

    response.writeHead(200,{'content-type' : 'application/json'})

})

server.listen(8000)

