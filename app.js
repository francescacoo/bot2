<<<<<<< HEAD
/*-----------------------------------------------------------------------------
This Bot uses the Bot Connector Service but is designed to showcase whats 
possible on Skype using the framework. The demo shows how to create a looping 
menu, use the built-in prompts, send Pictures, send Hero & Thumbnail Cards, 
send Receipts, and use Carousels. 
# RUN THE BOT:
    You can run the bot locally using the Bot Framework Emulator but for the best
    experience you should register a new bot on Skype and bind it to the demo 
    bot. You can then run the bot locally using ngrok found at https://ngrok.com/.
    * Install and run ngrok in a console window using "ngrok http 3978".
    * Create a bot on https://dev.botframework.com and follow the steps to setup
      a Skype channel.
    * For the endpoint you setup on dev.botframework.com, copy the https link 
      ngrok setup and set "<ngrok link>/api/messages" as your bots endpoint.
    * Next you need to configure your bots MICROSOFT_APP_ID, and
      MICROSOFT_APP_PASSWORD environment variables. If you're running VSCode you 
      can add these variables to your the bots launch.json file. If you're not 
      using VSCode you'll need to setup these variables in a console window.
      - MICROSOFT_APP_ID: This is the App ID assigned when you created your bot.
      - MICROSOFT_APP_PASSWORD: This was also assigned when you created your bot.
    * To use the bot you'll need to click the join link in the portal which will
      add it as a contact to your skype account. 
    * To run the bot you can launch it from VSCode or run "node app.js" from a 
      console window. 
-----------------------------------------------------------------------------*/

=======
>>>>>>> 4e278a8785f03a8576b7dfaf8720327da0ac6048
var restify = require('restify');
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
<<<<<<< HEAD
    appId: 'f828b328-816b-4d08-8558-1826c7bcde59',
    appPassword: 'dPNcfPNJRxc4mXLtFen4iWR'
});

=======
    appId: '05d7d11d-4c13-49b8-9dca-db6ac975fb12',
    appPassword: 'pHHTpacqsQwjA3DnYMdeCEs'
});
>>>>>>> 4e278a8785f03a8576b7dfaf8720327da0ac6048
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());


<<<<<<< HEAD
=======



>>>>>>> 4e278a8785f03a8576b7dfaf8720327da0ac6048
//=========================================================
// Activity Events
//=========================================================

<<<<<<< HEAD
=======



>>>>>>> 4e278a8785f03a8576b7dfaf8720327da0ac6048
bot.on('conversationUpdate', function (message) {
   // Check for group conversations
    if (message.address.conversation.isGroup) {
        // Send a hello message when bot is added
        if (message.membersAdded) {
            message.membersAdded.forEach(function (identity) {
                if (identity.id === message.address.bot.id) {
                    var reply = new builder.Message()
                            .address(message.address)
                            .text("Hello everyone!");
                    bot.send(reply);
                }
            });
        }

        // Send a goodbye message when bot is removed
        if (message.membersRemoved) {
            message.membersRemoved.forEach(function (identity) {
                if (identity.id === message.address.bot.id) {
                    var reply = new builder.Message()
                        .address(message.address)
                        .text("Goodbye");
                    bot.send(reply);
                }
            });
        }
    }
});

bot.on('contactRelationUpdate', function (message) {
    if (message.action === 'add') {
        var name = message.user ? message.user.name : null;
        var reply = new builder.Message()
                .address(message.address)
                .text("Hello %s... Thanks for adding me. Say 'hello' to start chatting.", name || 'there');
        bot.send(reply);
    } else {
        // delete their data
    }
});

<<<<<<< HEAD
bot.on('deleteUserData', function (message) {
    // User asked to delete their data
});


//=========================================================
// Bots Middleware
//=========================================================

// Anytime the major version is incremented any existing conversations will be restarted.
bot.use(builder.Middleware.dialogVersion({ version: 1.0, resetCommand: /^reset/i }));

=======
>>>>>>> 4e278a8785f03a8576b7dfaf8720327da0ac6048
//=========================================================
// Bots Global Actions
//=========================================================

bot.endConversationAction('goodbye', 'Goodbye :)', { matches: /^goodbye/i });
bot.beginDialogAction('help', '/help', { matches: /^help/i });

<<<<<<< HEAD
=======

>>>>>>> 4e278a8785f03a8576b7dfaf8720327da0ac6048
//=========================================================
// Bots Dialogs
//=========================================================

<<<<<<< HEAD
=======

>>>>>>> 4e278a8785f03a8576b7dfaf8720327da0ac6048
bot.dialog('/', [
    function (session) {
        // Send a greeting and show help.
        var card = new builder.HeroCard(session)
<<<<<<< HEAD
            .title("PayPal Integration's Bot")
            .text("(Beta!)")
            .images([
                 builder.CardImage.create(session, "http://docs.botframework.com/images/demo_bot_image.png")
            ]);
        var msg = new builder.Message(session).attachments([card]);
        session.send(msg);
        session.send("Hi there! :-) Welcome to the <b>PayPal Integration's bot</b> (Beta!). I can help you with <b>integrations</b>.  ");
=======
            .title("Integration Test Bot")
            .text("Our smartest integration team mate.")
            .images([
                 builder.CardImage.create(session, "https://img0.etsystatic.com/033/1/9136998/il_340x270.625165576_jf6k.jpg")
            ]);
        var msg = new builder.Message(session).attachments([card]);
        session.send(msg);
        session.send("Hi... I'm the integration bot for Skype.");
>>>>>>> 4e278a8785f03a8576b7dfaf8720327da0ac6048
        session.beginDialog('/help');
    },
    function (session, results) {
        // Display menu
        session.beginDialog('/menu');
    },
    function (session, results) {
        // Always say goodbye
        session.send("Ok... See you later!");
    }
]);

<<<<<<< HEAD
bot.dialog('/menu', [
    function (session) {
        var style = builder.ListStyle['button'];
        builder.Prompts.choice(session, "What would you like to do?", "Start an integration|Customization|How to..|xxx|(quit)", { listStyle: style });
    },
    function (session, results) {
        if (results.response && results.response.entity != '(quit)') {
            // Launch demo dialog
            switch (results.response.entity) {
                case "Start an integration":
                    session.beginDialog("/integration");
                    break;
                case "How to..":
                    session.beginDialog("/howto");
                    break;
                case "xxx":
                    session.beginDialog("/xxx");
                    break;
                default:
                    session.beginDialog("/");
                    break;
            }
            //session.beginDialog('/' + results.response.entity);
        } else {
            // Exit the menu
            session.endDialog();
        }
    },
    function (session, results) {
        // The menu runs a loop until the user chooses to (quit).
        session.replaceDialog('/menu');
    }
]).reloadAction('reloadMenu', null, { matches: /^menu|show menu/i });

bot.dialog('/help', [
    function (session) {
        session.endDialog("Global commands that are available anytime:\n\n* <i>menu - Exits a demo and returns to the menu.\n* goodbye - End this conversation.\n* help - Displays these commands.</i>");
=======
// help

bot.dialog('/help', [
    function (session) {
        session.endDialog("Global commands that are available anytime:\n* goodbye - End this conversation.\n* help - Displays these commands.");
>>>>>>> 4e278a8785f03a8576b7dfaf8720327da0ac6048
    }
]);


<<<<<<< HEAD



//=========================================================
// INTEGRATION dialogs!
//=========================================================



bot.dialog('/integration', [
    function (session) {
// Ask the user to select an item from a carousel.
        var msg = new builder.Message(session)
            .textFormat(builder.TextFormat.xml)
            .attachmentLayout(builder.AttachmentLayout.carousel)
            .attachments([
                new builder.ThumbnailCard(session)
                    .title("Express Checkout")
                    .text("Gives your buyers a simplified checkout experience that keeps them local to your website")
                  .images([
                    builder.CardImage.create(session, "https://www.paypal.com/en_US/i/btn/btn_xpressCheckout.gif")
                          .tap(builder.CardAction.showImage(session, "https://www.paypal.com/en_US/i/btn/btn_xpressCheckout.gif")),
                 ])
                    .buttons([
                        builder.CardAction.openUrl(session, "https://developer.paypal.com/docs/classic/products/express-checkout/", "Overview"),
                        builder.CardAction.imBack(session, "select:100", "Bespoke"),
                        builder.CardAction.imBack(session, "select:101", "Cart")

                    ]),
                new builder.ThumbnailCard(session)
                    .title("Pro")
                    .text("gives you the flexibility and security to build a professional ecommerce site.")
                    .images([
                        builder.CardImage.create(session, "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/PikePlaceMarket.jpg/320px-PikePlaceMarket.jpg")
                            .tap(builder.CardAction.showImage(session, "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/PikePlaceMarket.jpg/800px-PikePlaceMarket.jpg")),
                    ])
                    .buttons([
                        builder.CardAction.openUrl(session, "https://developer.paypal.com/docs/classic/products/express-checkout/", "Overview"),
                        builder.CardAction.imBack(session, "select:200", "Bespoke"),
                        builder.CardAction.imBack(session, "select:201", "Cart")
                    ]),
                new builder.ThumbnailCard(session)
                    .title("Braintree")
                    .text("is your payments partner, not just a payments platform.")
                    .images([
                        builder.CardImage.create(session, "https://s3.amazonaws.com/braintree-badges/braintree-badge-dark.png")
                            .tap(builder.CardAction.showImage(session, "https://s3.amazonaws.com/braintree-badges/braintree-badge-dark.png"))
                    ])
                    .buttons([
                        builder.CardAction.openUrl(session, "https://developer.paypal.com/docs/classic/products/express-checkout/", "Overview"),
                        builder.CardAction.imBack(session, "select:300", "Bespoke"),
                        builder.CardAction.imBack(session, "select:301", "Cart")
                    ])
            ]);
        builder.Prompts.choice(session, msg, "select:100|select:101|select:200|select:201|select:300|select:301");
     },
    function (session, results) {
        var action, item;
        var kvPair = results.response.entity.split(':');
        switch (kvPair[0]) {
            case 'select':
                action = 'selected';
                break;
        }
        switch (kvPair[1]) {
            case '100':
                item ="/Ec-Bespoke";
                break;
            case '101':
                item ="/Ec-Cart";
                break;
            case '200':
                item ="/Pro-Bespoke";
                break;
            case '201':
                item ="/Pro-Cart";
                break;
            case '300':
                item ="/BT-Bespoke";
                break;
            case '301':
                item ="/BT-Cart";
                break;
        }
               // session.endDialog('You %s "%s"', action, item);
               session.beginDialog(item);
    } 

]);

bot.dialog('/Ec-Bespoke', [
     function (session) {
        session.send("Ec-Bespoke");
    }
]); 

bot.dialog('/Ec-Cart', [
 function (session) {
    session.send("Express Checkout Cart. Ok then, and which cart are you using?");
// Ask the user to select an item from a carousel.
        var msg = new builder.Message(session)
            .textFormat(builder.TextFormat.xml)
            .attachmentLayout(builder.AttachmentLayout.carousel)
            .attachments([
                new builder.ThumbnailCard(session)
                    .title("Magento")
                    .text("")
                  .images([
                    builder.CardImage.create(session, "http://freevectorlogo.net/wp-content/uploads/2012/10/magento-logo-vector.png")
                          .tap(builder.CardAction.showImage(session, "http://freevectorlogo.net/wp-content/uploads/2012/10/magento-logo-vector.png")),
                 ])
                    .buttons([
//                        builder.CardAction.openUrl(session, "https://developer.paypal.com/docs/classic/products/express-checkout/", "Overview"),
                        builder.CardAction.imBack(session, "select:100", "2.x"),
                        builder.CardAction.imBack(session, "select:101", "1.7-1.9"),
                        builder.CardAction.imBack(session, "select:101", "Older")

                    ]),
                new builder.ThumbnailCard(session)
                    .title("WooCommerce")
                    .text("")
                    .images([
                        builder.CardImage.create(session, "http://www.gfxmag.com/wp-content/uploads/2016/07/woocommerce-vector-logo.png")
                            .tap(builder.CardAction.showImage(session, "http://www.gfxmag.com/wp-content/uploads/2016/07/woocommerce-vector-logo.png")),
                    ])
                    .buttons([
                        builder.CardAction.imBack(session, "select:100", "2.x"),
                        builder.CardAction.imBack(session, "select:101", "1.7-1.9"),
                        builder.CardAction.imBack(session, "select:101", "Older")
                    ]),
                new builder.ThumbnailCard(session)
                    .title("Shopify")
                    .text("is your payments partner, not just a payments platform.")
                    .images([
                        builder.CardImage.create(session, "http://cdn-blog.cpcstrategy.com/wp-content/uploads/2015/09/shopify.jpg")
                            .tap(builder.CardAction.showImage(session, "http://cdn-blog.cpcstrategy.com/wp-content/uploads/2015/09/shopify.jpg"))
                    ])
                    .buttons([
                        builder.CardAction.imBack(session, "select:100", "2.x"),
                        builder.CardAction.imBack(session, "select:101", "1.7-1.9"),
                        builder.CardAction.imBack(session, "select:101", "Older")
                    ])
            ]);

        session.send("<b>Tip: Dont know the cart version?</b>\n<i>To check your platform version please log into your admin and normally the version is advised at the top or bottom of the page. Otherwise please check in your cart website or in Google \"how to check the version of \"+ cart name.</i>");
                builder.Prompts.choice(session, msg, "select:100|select:101|select:200|select:201|select:300|select:301");
     },
    function (session, results) {
        var action, item;
        var kvPair = results.response.entity.split(':');
        switch (kvPair[0]) {
            case 'select':
                action = 'selected';
                break;
        }
        switch (kvPair[1]) {
            case '100':
                item ="/Ec-Bespoke";
                break;
            case '101':
                item ="/Magento-1-EC";
                break;
            case '200':
                item ="/Pro-Bespoke";
                break;
            case '201':
                item ="/Pro-Cart";
                break;
            case '300':
                item ="/BT-Bespoke";
                break;
            case '301':
                item ="/BT-Cart";
                break;
        }
               // session.endDialog('You %s "%s"', action, item);
               session.beginDialog(item);
    } 
]);

bot.dialog('/Magento-1-EC', [
     function (session) {
        session.send("To enable Express Checkout in Magento 1.9.x you need to log into your admin panel and then go to System > Configuration > Payment Methods.");
             var msg = new builder.Message(session)
            .attachments([{
                contentType: "image/jpeg",
                contentUrl: "http://www.jfbdevs.com/bot/magento1images/step1.jpg"
            }]);
        session.send(msg);
        var style = builder.ListStyle['button'];
        builder.Prompts.choice(session, "", "Next", { listStyle: style });
    },
    function (session, results) {
        session.send("Please ensure that Merchant Country selection is correct.");
            var msg = new builder.Message(session)
            .attachments([{
                contentType: "image/jpeg",
                contentUrl: "http://www.jfbdevs.com/bot/magento1images/step2.jpg"
            }]);
        session.send(msg);
        var style = builder.ListStyle['button'];
        builder.Prompts.choice(session, "", "Next", { listStyle: style });
    },
    function (session, results) {
        session.send("Open the configuration of PayPal Express Checkout.");
        builder.Prompts.choice(session, "next");
    }


    
]);
































bot.dialog('/Pro-Bespoke', [
     function (session) {
        session.send("Pro-Bespoke");
    }
]);



bot.dialog('/Pro-Cart', [
     function (session) {
        session.send("Pro-Cart");
    }
]);

bot.dialog('/BT-Bespoke', [
     function (session) {
        session.send("BT-Bespoke");
    }
]);

bot.dialog('/BT-Cart', [
     function (session) {
        session.send("BT-Cart");
    }
]);



//=========================================================
// END INTEGRATION dialogs!
//=========================================================


bot.dialog('/howto', [
     function (session) {
        session.send("HOWTO");
    }
]);

bot.dialog('/xxx', [
     function (session) {
        session.send("XXX");
    }
]);



bot.dialog('/prompts', [
    function (session) {
        session.send("Our Bot Builder SDK has a rich set of built-in prompts that simplify asking the user a series of questions. This demo will walk you through using each prompt. Just follow the prompts and you can quit at any time by saying 'cancel'.");
        builder.Prompts.text(session, "Prompts.text()\n\nEnter some text and I'll say it back.");
    },
    function (session, results) {
        session.send("You entered '%s'", results.response);
        builder.Prompts.number(session, "Prompts.number()\n\nNow enter a number.");
    },
    function (session, results) {
        session.send("You entered '%s'", results.response);
        session.send("Bot Builder includes a rich choice() prompt that lets you offer a user a list choices to pick from. On Skype these choices by default surface using buttons if there are 3 or less choices. If there are more than 3 choices a numbered list will be used but you can specify the exact type of list to show using the ListStyle property.");
        builder.Prompts.choice(session, "Prompts.choice()\n\nChoose a list style (the default is auto.)", "auto|inline|list|button|none");
    },
    function (session, results) {
        var style = builder.ListStyle[results.response.entity];
        builder.Prompts.choice(session, "Prompts.choice()\n\nNow pick an option.", "option A|option B|option C", { listStyle: style });
    },
    function (session, results) {
        session.send("You chose '%s'", results.response.entity);
        builder.Prompts.confirm(session, "Prompts.confirm()\n\nSimple yes/no questions are possible. Answer yes or no now.");
    },
    function (session, results) {
        session.send("You chose '%s'", results.response ? 'yes' : 'no');
        builder.Prompts.time(session, "Prompts.time()\n\nThe framework can recognize a range of times expressed as natural language. Enter a time like 'Monday at 7am' and I'll show you the JSON we return.");
    },
    function (session, results) {
        session.send("Recognized Entity: %s", JSON.stringify(results.response));
        builder.Prompts.attachment(session, "Prompts.attachment()\n\nYour bot can wait on the user to upload an image or video. Send me an image and I'll send it back to you.");
    },
    function (session, results) {
        var msg = new builder.Message(session)
            .ntext("I got %d attachment.", "I got %d attachments.", results.response.length);
        results.response.forEach(function (attachment) {
            msg.addAttachment(attachment);    
        });
        session.endDialog(msg);
    }
]);

bot.dialog('/picture', [
    function (session) {
        session.send("You can easily send pictures to a user...");
        var msg = new builder.Message(session)
            .attachments([{
                contentType: "image/jpeg",
                contentUrl: "http://www.theoldrobots.com/images62/Bender-18.JPG"
            }]);
        session.endDialog(msg);
    }
]);

bot.dialog('/cards', [
    function (session) {
        session.send("You can use Hero & Thumbnail cards to send the user visually rich information...");

        var msg = new builder.Message(session)
            .textFormat(builder.TextFormat.xml)
            .attachments([
                new builder.HeroCard(session)
                    .title("Hero Card")
                    .subtitle("Space Needle")
                    .text("The <b>Space Needle</b> is an observation tower in Seattle, Washington, a landmark of the Pacific Northwest, and an icon of Seattle.")
                    .images([
                        builder.CardImage.create(session, "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Seattlenighttimequeenanne.jpg/320px-Seattlenighttimequeenanne.jpg")
                    ])
                    .tap(builder.CardAction.openUrl(session, "https://en.wikipedia.org/wiki/Space_Needle"))
            ]);
        session.send(msg);

        msg = new builder.Message(session)
            .textFormat(builder.TextFormat.xml)
            .attachments([
                new builder.VideoCard(session)
                    .title("Video Card")
                    .subtitle("Microsoft Band")
                    .text("This is Microsoft Band. For people who want to live healthier and achieve more there is Microsoft Band. Reach your health and fitness goals by tracking your heart rate, exercise, calorie burn, and sleep quality, and be productive with email, text, and calendar alerts on your wrist.")
                    .image(builder.CardImage.create(session, "https://tse1.mm.bing.net/th?id=OVP.Vffb32d4de3ecaecb56e16cadca8398bb&w=150&h=84&c=7&rs=1&pid=2.1"))
                    .media([
                        builder.CardMedia.create(session, "http://video.ch9.ms/ch9/08e5/6a4338c7-8492-4688-998b-43e164d908e5/thenewmicrosoftband2_mid.mp4")
                    ])
                    .autoloop(true)
                    .autostart(false)
                    .shareable(true)                    
            ]);
        session.send(msg);  

        msg = new builder.Message(session)
            .textFormat(builder.TextFormat.xml)
            .attachments([
                new builder.ThumbnailCard(session)
                    .title("Thumbnail Card")
                    .subtitle("Pikes Place Market")
                    .text("<b>Pike Place Market</b> is a public market overlooking the Elliott Bay waterfront in Seattle, Washington, United States.")
                    .images([
                        builder.CardImage.create(session, "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/PikePlaceMarket.jpg/320px-PikePlaceMarket.jpg")
                    ])
                    .tap(builder.CardAction.openUrl(session, "https://en.wikipedia.org/wiki/Pike_Place_Market"))
            ]);
        session.endDialog(msg);
    }
]);

bot.dialog('/list', [
    function (session) {
        session.send("You can send the user a list of cards as multiple attachments in a single message...");

        var msg = new builder.Message(session)
            .textFormat(builder.TextFormat.xml)
            .attachments([
                new builder.HeroCard(session)
                    .title("Hero Card")
                    .subtitle("Space Needle")
                    .text("The <b>Space Needle</b> is an observation tower in Seattle, Washington, a landmark of the Pacific Northwest, and an icon of Seattle.")
                    .images([
                        builder.CardImage.create(session, "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Seattlenighttimequeenanne.jpg/320px-Seattlenighttimequeenanne.jpg")
                    ]),
                new builder.ThumbnailCard(session)
                    .title("Thumbnail Card")
                    .subtitle("Pikes Place Market")
                    .text("<b>Pike Place Market</b> is a public market overlooking the Elliott Bay waterfront in Seattle, Washington, United States.")
                    .images([
                        builder.CardImage.create(session, "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/PikePlaceMarket.jpg/320px-PikePlaceMarket.jpg")
                    ])
            ]);
        session.endDialog(msg);
    }
]);

bot.dialog('/carousel', [
    function (session) {
        session.send("You can pass a custom message to Prompts.choice() that will present the user with a carousel of cards to select from. Each card can even support multiple actions.");
        
        // Ask the user to select an item from a carousel.
        var msg = new builder.Message(session)
            .textFormat(builder.TextFormat.xml)
            .attachmentLayout(builder.AttachmentLayout.carousel)
            .attachments([
                new builder.HeroCard(session)
                    .title("Space Needle")
                    .text("The <b>Space Needle</b> is an observation tower in Seattle, Washington, a landmark of the Pacific Northwest, and an icon of Seattle.")
                    .images([
                        builder.CardImage.create(session, "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Seattlenighttimequeenanne.jpg/320px-Seattlenighttimequeenanne.jpg")
                            .tap(builder.CardAction.showImage(session, "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Seattlenighttimequeenanne.jpg/800px-Seattlenighttimequeenanne.jpg")),
                    ])
                    .buttons([
                        builder.CardAction.openUrl(session, "https://en.wikipedia.org/wiki/Space_Needle", "Wikipedia"),
                        builder.CardAction.imBack(session, "select:100", "Select")
                    ]),
                new builder.HeroCard(session)
                    .title("Pikes Place Market")
                    .text("<b>Pike Place Market</b> is a public market overlooking the Elliott Bay waterfront in Seattle, Washington, United States.")
                    .images([
                        builder.CardImage.create(session, "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/PikePlaceMarket.jpg/320px-PikePlaceMarket.jpg")
                            .tap(builder.CardAction.showImage(session, "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/PikePlaceMarket.jpg/800px-PikePlaceMarket.jpg")),
                    ])
                    .buttons([
                        builder.CardAction.openUrl(session, "https://en.wikipedia.org/wiki/Pike_Place_Market", "Wikipedia"),
                        builder.CardAction.imBack(session, "select:101", "Select")
                    ]),
                new builder.HeroCard(session)
                    .title("EMP Museum")
                    .text("<b>EMP Musem</b> is a leading-edge nonprofit museum, dedicated to the ideas and risk-taking that fuel contemporary popular culture.")
                    .images([
                        builder.CardImage.create(session, "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Night_Exterior_EMP.jpg/320px-Night_Exterior_EMP.jpg")
                            .tap(builder.CardAction.showImage(session, "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Night_Exterior_EMP.jpg/800px-Night_Exterior_EMP.jpg"))
                    ])
                    .buttons([
                        builder.CardAction.openUrl(session, "https://en.wikipedia.org/wiki/EMP_Museum", "Wikipedia"),
                        builder.CardAction.imBack(session, "select:102", "Select")
                    ])
            ]);
        builder.Prompts.choice(session, msg, "select:100|select:101|select:102");
    },
    function (session, results) {
        var action, item;
        var kvPair = results.response.entity.split(':');
        switch (kvPair[0]) {
            case 'select':
                action = 'selected';
                break;
        }
        switch (kvPair[1]) {
            case '100':
                item = "the <b>Space Needle</b>";
                break;
            case '101':
                item = "<b>Pikes Place Market</b>";
                break;
            case '102':
                item = "the <b>EMP Museum</b>";
                break;
        }
        session.endDialog('You %s "%s"', action, item);
    }    
]);

bot.dialog('/receipt', [
    function (session) {
        session.send("You can send a receipts for purchased good with both images and without...");
        
        // Send a receipt with images
        var msg = new builder.Message(session)
            .attachments([
                new builder.ReceiptCard(session)
                    .title("Recipient's Name")
                    .items([
                        builder.ReceiptItem.create(session, "$22.00", "EMP Museum").image(builder.CardImage.create(session, "https://upload.wikimedia.org/wikipedia/commons/a/a0/Night_Exterior_EMP.jpg")),
                        builder.ReceiptItem.create(session, "$22.00", "Space Needle").image(builder.CardImage.create(session, "https://upload.wikimedia.org/wikipedia/commons/7/7c/Seattlenighttimequeenanne.jpg"))
                    ])
                    .facts([
                        builder.Fact.create(session, "1234567898", "Order Number"),
                        builder.Fact.create(session, "VISA 4076", "Payment Method"),
                        builder.Fact.create(session, "WILLCALL", "Delivery Method")
                    ])
                    .tax("$4.40")
                    .total("$48.40")
            ]);
        session.send(msg);

        // Send a receipt without images
        msg = new builder.Message(session)
            .attachments([
                new builder.ReceiptCard(session)
                    .title("Recipient's Name")
                    .items([
                        builder.ReceiptItem.create(session, "$22.00", "EMP Museum"),
                        builder.ReceiptItem.create(session, "$22.00", "Space Needle")
                    ])
                    .facts([
                        builder.Fact.create(session, "1234567898", "Order Number"),
                        builder.Fact.create(session, "VISA 4076", "Payment Method"),
                        builder.Fact.create(session, "WILLCALL", "Delivery Method")
                    ])
                    .tax("$4.40")
                    .total("$48.40")
            ]);
        session.endDialog(msg);
    }
]);

bot.dialog('/signin', [ 
    function (session) { 
        // Send a signin 
        var msg = new builder.Message(session) 
            .attachments([ 
                new builder.SigninCard(session) 
                    .text("You must first signin to your account.") 
                    .button("signin", "http://example.com/") 
            ]); 
        session.endDialog(msg); 
    } 
]); 


bot.dialog('/actions', [
    function (session) { 
        session.send("Bots can register global actions, like the 'help' & 'goodbye' actions, that can respond to user input at any time. You can even bind actions to buttons on a card.");

        var msg = new builder.Message(session)
           