// lazyLoadVideo.js

// Get the video container
const videoContainer = document.getElementById('videoContainer');

// Options for the IntersectionObserver
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0 // Trigger when at least 100% of the video is visible
};

// Callback function to handle intersection
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Play the video
      const iframe = videoContainer.querySelector('iframe');
      iframe.src = iframe.src + '&autoplay=1';
      // Stop observing since we only want to play it once
      observer.unobserve(videoContainer);
    }
  });
}

// Create the IntersectionObserver
const observer = new IntersectionObserver(handleIntersection, options);

// Start observing the video container
observer.observe(videoContainer);
