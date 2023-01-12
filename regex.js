var fs = require('fs');

fs.readFile('access.log', function (err, data) {//#1

  if (err) throw err;//#2

  var text = data.toString();//#3

  var lines = text.split('\n');//#4

  lines.forEach(function(line) {//#5
    console.log(line);//#6
  });
});
