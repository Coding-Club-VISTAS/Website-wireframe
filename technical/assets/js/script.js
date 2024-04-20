'use strict';

$(function() {


  /*
  |--------------------------------------------------------------------------
  | Configure your website
  |--------------------------------------------------------------------------
  |
  | We provided several configuration variables for your ease of development.
  | Read their complete description and modify them based on your need.
  |
  */

  page.config({

   
    googleApiKey: 'AIzaSyDRBLFOTTh2NFM93HpUA4ZrA99yKnCAsto',



    googleAnalyticsId: '',

    disableAOSonMobile: true,

    smoothScroll: true,

  });

	/*Interactivity to determine when an animated element in in view. In view elements trigger our animation*/
	$(function() {
  $("#playlist li").on("click", function() {
    $("#videoarea").attr({
      "src": $(this).attr("movieurl"),
      "poster": "",
      "autoplay": "autoplay"
    })
  })
  $("#videoarea").attr({
    "src": $("#playlist li").eq(0).attr("movieurl"),
    "poster": $("#playlist li").eq(0).attr("moviesposter")
  })
})

	
	
	
	document.addEventListener("DOMContentLoaded", function(event) {
    var controller = new YTV('YourPlayerID', {
	   
		playlist: 'PLrkrSherBqJk5AsxyRqQ3nFbcuo3z0P0S'
    });
	});

});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
