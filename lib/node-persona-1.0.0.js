
//Dependencies
var request = require('request');

var Persona = (function () {

	//configurational options
	var options = {
		method : 'GET',
		personaVerifierLink : 'https://verifier.login.persona.org/verify'
	};

	var setIdentity = function (configuration, callback) {
		options.email = configuration.email;
		verifyIdentity(function (resp) {
			callback(resp);
		});
	};

	var verifyIdentity = function (callback) {
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