export function playVideo(fileName) {
    const videoContainer = document.getElementById('videoContainer');
    const rootPath = window.location.origin; // Get the root path of your website
    const videoPath = `/cutscenes/${fileName}`;

    videoContainer.innerHTML = `
      <video width="80%" controls autoplay muted onerror="handleVideoError(this)">
        <source src="${videoPath}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  }