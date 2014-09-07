var irc = require('irc');
var moment = require('moment');

var client = new irc.Client('irc.twitch.tv', 'Your-nick', {
	channels: ['#channel-name'],
	password: 'oauth:'
});
// this is the module that tells you time
var now = moment();


var commands = {
	// base name: function (from, to, message){client.say(to, )}
};
// listens to the messages
client.addListener('message',function (from, to, message){
	console.log(from + ' => ' + to + ': ' + message);
	// If the first chraracter is !
	if (message.substr(0,1) == '!'){
		var tmp = message.substr(1).split(' ')[0].toLowerCase();
		var chan = to.substr(1).split(' ')[0]
		// Checks if the command exist
		if (commands[chan][tmp]){
			//Returns the values that the commands code use
			commands[chan][tmp](from, to, message.substr(1))
		}
	}
});
