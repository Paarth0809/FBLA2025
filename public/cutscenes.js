export function playVideo(fileName) {
    const videoContainer = document.getElementById('videoContainer');
    const rootPath = window.location.origin; // Get the root path of your website
    const videoPath = `/cutscenesAir/${fileName}`;

    videoContainer.innerHTML = `
      <video width="756" height="400" controls autoplay muted onerror="handleVideoError(this)">
        <source src="${videoPath}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  }