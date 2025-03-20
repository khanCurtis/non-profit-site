document.addEventListener('DOMContentLoaded', function() {
    // Function to check viewport size and adjust any inline width attributes
    function makeImagesResponsive() {
        const allImages = document.querySelectorAll('img');
        
        allImages.forEach(img => {
            // Remove inline width if it exists
            if (img.getAttribute('width')) {
                // Store the original width as a data attribute for reference
                if (data-original-width')) {
                    img.setAttribute('data-original-width', img.getAttribute('width'));
                }
                // Remove the width attribute to let CSS handle it
                img.removeAttribute('width');
            }
        });
    }
    
    // Run once when page loads
    makeImagesResponsive();
    
    // Run when window is resized
    window.addEventListener('resize', makeImagesResponsive);
});

