
var builder = require('botbuilder');

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  
// Create chat bot
var connector = new builder.ChatConnector({
    appId: "6eae7597-7604-4cf1-82f0-b8941fed5111",
    appPassword: "VviH8b2Y1S8NomBOadtiNLA"
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//=========================================================
// Bots Dialogs
//=========================================================


bot.dialog('/', [
function (session) {
        builder.Prompts.text(session, "Hello... What's your name?");
    },
    function (session, results) {
        session.userData.name = results.response;
        session.send("Nice to meet you " + results.response + "!"); 
 		session.send("To integrate EC please check the following link: https://developer.paypal.com.");  
 		builder.Prompts.choice(session, "Do you have any specific question?", ["Basic Integration", "Advanced Integration", "Customization"]); 


    },
	function (session, results) {
        switch (results.response.entity) {
            case "Basic Integration":
                session.replaceDialog("/basic");
                break;
            case "Advanced Integration":
                session.replaceDialog("/advanced");
                break;
            case "Customization":
                session.replaceDialog("/customization");
                break;
            default:
                session.replaceDialog("/");
                break;
        }
    }
]);

bot.dialog('/basic', [
	function (session) {
         session.send("Working on a basic integration.. very good. \n The technical guidelines can be found here: https://developer.paypal.com/docs/integration/direct/express-checkout/integration-jsv4/basic-integration/");
    	 builder.Prompts.choice(session, "Which is your current scenario?", ["First time integration", "HELP! I have issues!"]); 
    	},
    	 function (session, results) {
        switch (results.response.entity) {
            case "First time integration":
                session.replaceDialog("/first");
                break;
            case "HELP! I have issues!":
                session.replaceDialog("/help");
                break;
            default:
                session.replaceDialog("/");
                break;
        }
    

    }
]);

bot.dialog('/advanced', [
	function (session) {
         session.send("Advanced integration! \n The technical guidelines can be found here: https://developer.paypal.com/docs/integration/direct/express-checkout/integration-jsv4/advanced-integration/");
    }  
    ]);  
 bot.dialog('/customization', [
	function (session) {
         session.send("You Choose customization! Check the UX guidelines here: ");
    }
]);

 bot.dialog('/first', [
	function (session) {
         session.send("If you are just starting I recommend you to create a test / sandbox account here: http://developer.paypal.com/");
         session.send("After that you can check some awesome sample code here: GITHUB");
    }  
    ]); 

  bot.dialog('/help', [
	function (session) {
         session.send("No Panic! I am here to help you! :) \n Please try the troubleshooting guidance here: LINK");
         session.send("You can check here the common errors and error codes: LINK");
    }  
    ]); 
