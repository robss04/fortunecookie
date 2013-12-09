
$("#button button").delay(1000).animate({"opacity": "1"}, 700);

function getRandomQuote(arr) {
    var randoms = [], clone = arr.slice(0);
    for (var i = 0, index; i < count; ++i) {
        index = Math.floor(Math.random() * clone.length);
        randoms.push(clone[index]);
        clone[index] = clone.pop();
    }
    return randoms;
}

var quotes = [
    "Your time is limited, so don't waste it living someone else's life. -Steve Jobs", 
    "Strive not to be a success, but rather to be of value. -Albert Einstein",
    "Every strike brings you closer to the next home run. -Babe Ruth",
    "The mind is everything. What you think you become.  -Buddha",
    "Eighty percent of success is showing up. -Woody Allen",
    "Don't wait. The time will never be just right. -Napoleon Hill",
    "Winning isn't everything, but wanting to win is. -Vince Lombardi",
    "Every child is an artist.  The problem is how to remain an artist once he grows up. -Pablo Picasso",
    "You can never cross the ocean until you have the courage to lose sight of the shore. -Christopher Columbus",
    "Whether you think you can or you think you can't, you're right. -Henry Ford",
    "The best revenge is massive success. -Frank Sinatra",
    "People often say that motivation doesn't last. Well, neither does bathing.  That's why we recommend it daily. -Zig Ziglar",
    "There is only one way to avoid criticism: do nothing, say nothing, and be nothing. -Aristotle",
    "The only person you are destined to become is the person you decide to be. -Ralph Waldo Emerson",
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "Happiness is not something readymade.  It comes from your own actions. -Dalai Lama",
    "Build your own dreams, or someone else will hire you to build theirs. -Farrah Gray",
    "Remember that not getting what you want is sometimes a wonderful stroke of luck. -Dalai Lama",
    "Do what you can, where you are, with what you have. -Theodore Roosevelt",
    "Remember no one can make you feel inferior without your consent. -Eleanor Roosevelt",
    "Change your thoughts and you change your world. -Norman Vincent Peale",
    "Nothing is impossible, the word itself says, 'I'm possible!' -Audrey Hepburn",
    "The only way to do great work is to love what you do. -Steve Job",
    "If you can dream it, you can achieve it. -Zig Ziglar",
    "When you can't change the direction of the wind - adjust your sails. -H. Jackson Brown Jr."
  ];


function fortuneFall() {
    
  var f = $('#fortunecookies');
  var e = $("#fortune");
  var b = $('#button');
  var n = $('#buttonRefresh');

 
        if ( f.css("display") == "none" ) {
          f.css("display", "block"); 
          b.css("display", "none");
          n.css("display", "none");
          e.css("display", "none");
        } else {
          f.css("display", "none");
          e.css("display", "block");
          n.css("display", "none");
        }
  
  };



function pickOne() {    
  var e = $("#fortune");
  var f = $("#fortunecookies");
  var b = $('#button');
        var item = quotes[Math.floor(Math.random()*quotes.length)];
        console.log(item)
        f.css("display", "none")
        e.text(item)
        e.css("display", "block")
        b.css("display", "block")
};

// $("img").hover(function(){
//   $("img").addClass("class", "animated flash");
//   },function(){
//   $("img").css("");
// });


$(document).ready(function () {
  var animations = [ 'hop',
            'spin',
            'horray'
             ];

  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  $('.one').mouseover(function () {
    var fortune = this;
    var animation = animations[getRandomInt(0, 3)];

    $(fortune).addClass(animation);

  $('.one').mouseout(function () {
    $(fortune).removeClass(animation);
    });
  });

  $('.two').mouseover(function () {
    var fortune = this;
    var animation = animations[getRandomInt(0, 3)];

    $(fortune).addClass(animation);

  $('.two').mouseout(function () {
    $(fortune).removeClass(animation);
    });
  });

  $('.three').mouseover(function () {
    var fortune = this;
    var animation = animations[getRandomInt(0, 3)];

    $(fortune).addClass(animation);

  $('.three').mouseout(function () {
    $(fortune).removeClass(animation);
    });
  });

  $('.four').mouseover(function () {
    var fortune = this;
    var animation = animations[getRandomInt(0, 3)];

    $(fortune).addClass(animation);

  $('.four').mouseout(function () {
    $(fortune).removeClass(animation);
    });
  });



  window.fbAsyncInit = function() {
    // init the FB JS SDK
    FB.init({
      appId      : 'YOUR_APP_ID',                        // App ID from the app dashboard
      status     : true,                                 // Check Facebook Login status
      xfbml      : true                                  // Look for social plugins on the page
    });

    // Additional initialization code such as adding Event Listeners goes here
  };

  // Load the SDK asynchronously
  (function(){
     // If we've already installed the SDK, we're done
     if (document.getElementById('facebook-jssdk')) {return;}

     // Get the first script element, which we'll use to find the parent node
     var firstScriptElement = document.getElementsByTagName('script')[0];

     // Create a new script element and set its id
     var facebookJS = document.createElement('script'); 
     facebookJS.id = 'facebook-jssdk';

     // Set the new script's source to the source of the Facebook JS SDK
     facebookJS.src = '//connect.facebook.net/en_US/all.js';

     // Insert the Facebook JS SDK into the DOM
     firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
   }());

});

