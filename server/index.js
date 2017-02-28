var ssllabs = require('node-ssllabs');
var request = require('request')
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('top100.list')
})

lineReader.on('line', function (line) {
  request('https://'+line, function (error, response, body) {
    if(response){

      if(response.statusCode === 200){
        var secureStatue = ',Secure'
      }

      request('http://'+line, function (error, response, body) {
        uri = JSON.parse(JSON.stringify(response.request.uri))
        if(uri.port === 443){
          var forceStatue = ',Force HTTPS'
        }else{
          var forceStatue = ',Not Force HTTPS'
        }

        console.log(line+' '+secureStatue+' '+forceStatue)
      })
    }else{
      console.log(line+',Not Secure')
    }

  })
})

// ssllabs.scan('zocialeye.com', function (err, host) {
// 	console.dir(host);
// });
