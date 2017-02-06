var ssllabs = require("node-ssllabs");

ssllabs.scan("zocialeye.com", function (err, host) {
	console.dir(host);
});
