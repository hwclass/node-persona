
//Dependencies
var request = require('request');

var Persona = (function () {

	//configurational options
	var options = {
		method : 'GET',
		url : 'https://verifier.login.persona.org/verify'
	};

	function setIdentity (configuration, callback) {
		options.email = configuration.email;
		verifyIdentity(function (resp) {
			callback(resp);
		});
	};

	function verifyIdentity (callback) {
		if (typeof options !== undefined && typeof options !== 'null') {
			request(options, function (err, res) {
				callback(resp);
			});
		}
	};

	return {
		set : setIdentity
	}

})();

module.exports = Persona;