
//Dependencies
var request = require('request');

var Persona = (function () {

	//configurational options
	var options = {};

	var setIdentity = function (configuration, callback) {
		options.method = 'GET';
		options.personaVerifierLink = 'https://verifier.login.persona.org/verify';
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
		verify : verifyIdentity
	}

})();