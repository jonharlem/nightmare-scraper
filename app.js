var Nightmare = require('nightmare');

var demo = new Nightmare({show: true})
	//some sites have different versions for different browsers
	.viewport(800, 800)
	.useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490 Safari/537.36")
	.goto('http://www.galvanize.com/')
	.wait(1000)
	//create a pdf
	.screenshot('demo.png')
	.run(function(err, nightmare) {
		if (err) return console.log(err);
		console.log('Done');
	});

demo.end();