var fs = require('fs');

fs.readFile('access.log', function(err, logData) {
    if (err) throw err;

    var text = logData.toString(),
        lines = text.split('\n'),
        results = {},
        regex = /^(\S+) (\S+) (\S+) \[(\d{2}\/\w{3}\/\d{4}:\d{2}:\d{2}:\d{2} [\+|-]\d{4})\] \"(\S+ .*? \S+)\" (\d{3}) ([\d|-]+) "([^"]*)" "([^"]*)"/;

    lines.forEach(function(line) {

        results = regex.exec(line);

        for (i=0; i<results.length; i++){
            console.log(results[i]);
        }

    });  //#5
});

