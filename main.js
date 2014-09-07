var irc = require('irc');
var moment = require('moment');

var client = new irc.Client('irc.twitch.tv', 'ReedBot', {
	channels: ['#tracreed', '#stretchmyjerky'],
	password: 'oauth:fcordflerf34f7ouc7t6mdlyx6gzchh'
});
// this is the module that tells you time
var now = moment();


var commands = {
	tracreed: {
		// base name: function (from, to, message){client.say(to, )}
	hello: function (from, to, message){client.say(to, 'Hello ' + from)},
	skin: function (from, to, message){client.say(to, from + ' http://www.google.se')},
	time: function (from, to, message){client.say(to, now)},
	google: function (from, to, message){client.say(to, 'http://www.google.com/#q=' + message.substr(7).split(' ').join('+') )}
},
    hatsuney: {
    	test: function (from, to, message){client.say(to, 'lol!')},
    },
    stretchmyjerky: {
    time: function (from, to, message){client.say(to, now)},
	google: function (from, to, message){client.say(to, 'http://www.google.com/#q=' + message.substr(7).split(' ').join('+') )},
	alot: function (from, to, message){client.say(to, 'http://hyperboleandahalf.blogspot.se/2010/04/alot-is-better-than-you-at-everything.html' )}
    }
};
// listens to the messages
client.addListener('message',function (from, to, message){
	console.log(from + ' => ' + to + ': ' + message);
	if (message.search('alot')> 0 ){
client.say(to, from + ' http://hyperboleandahalf.blogspot.se/2010/04/alot-is-better-than-you-at-everything.html' )
	}
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
