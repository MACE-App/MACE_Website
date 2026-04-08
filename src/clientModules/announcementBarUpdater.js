let cachedTag = null;

function updateAnnouncementBar() {
  const bar = document.querySelector('[class*="announcementBar"] a[href*="releases"]');
  if (bar && cachedTag) {
    bar.textContent = cachedTag;
  }
}

export function onRouteDidUpdate() {
  if (cachedTag) {
    updateAnnouncementBar();
  } else {
    fetch('https://api.github.com/repos/MACE-App/MACE/releases/latest')
      .then((res) => res.json())
      .then((data) => {
        if (data.tag_name) {
          cachedTag = data.tag_name;
          updateAnnouncementBar();
        }
      })
      .catch(() => {
        // Silently fail — the hardcoded version remains as fallback
      });
  }
}
