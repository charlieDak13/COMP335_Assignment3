// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script'); //creates a script tag element in HTML
tag.src = "https://www.youtube.com/iframe_api"; //sets the src attribute of the script tag to the URL of the YouTube IFrame Player API
var firstScriptTag = document.getElementsByTagName('script')[0]; //finds the first script tag in the HTML
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); //inserts the new script tag into DOM before the FirstScriptTag in the HTML

// sets up varible player as a YT player with the dimensions and id of our chosen video
// 'onReady' is an event handler that calls the onPlayerReady function when the player is ready
// to accept commands
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'kPRA0W1kECg',
    events: {
      'onReady': onPlayerReady,
    }
  });
}


// function is used when the youtube player that is set up by the onYouTubeIframeAPIReady function is ready
// gets player object. 
//Function also creates an options object that is used to set up our IntersectionObserver
function onPlayerReady(event) {
  // Get the player
  const video = document.getElementById('player');

  // Options for the IntersectionObserver
  const options = {
    root: null, //uses the viewport of the browser as the root to check the visaibility of the video since it is set to null
    rootMargin: '0px',
    threshold: 1.0 //checks to see if the video is 100% visible
  };

  // Callback function to handle intersection
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Play the video
        player.playVideo();
      } else {
        // Pause the video
        player.pauseVideo();
      }
    });
  }

  // Create the IntersectionObserver
  const observer = new IntersectionObserver(handleIntersection, options);

  // Start observing the video
  observer.observe(video);
}
