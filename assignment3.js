// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'kPRA0W1kECg', // replace with your video id
    events: {
      'onReady': onPlayerReady,
    }
  });
}

function onPlayerReady(event) {
  // Get the player
  const video = document.getElementById('player');

  // Options for the IntersectionObserver
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0 // Trigger when 100% of the video is visible
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
