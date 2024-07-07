export const capitalize = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
};


export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

export const hideElementIfSmallScreen =(elementOrId,size=720)=> {
  // Helper function to get the element
  function getElement(elementOrId) {
    if (typeof elementOrId === 'string') {
      return document.querySelector(elementOrId);
    }
    return elementOrId;
  }

  const element = getElement(elementOrId);

  if (element) {
    // Function to hide the element based on screen size
    function checkScreenSize() {
      if (window.innerWidth > size) {
        element.style.display = 'none';
      } else {
        element.style.display = '';
      }
    }

    // Check the screen size on initial load
    checkScreenSize();

    // Add event listener to check screen size on resize
    window.addEventListener('resize', checkScreenSize);
  } else {
    console.error('Element not found:', elementOrId);
  }
}