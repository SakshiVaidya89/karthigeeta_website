// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get all filter links
    const filterLinks = document.querySelectorAll('[data-filter]');
    
    // Get all gallery items
    const galleryItems = document.querySelectorAll('[data-category]');

    // Add click event listener to each filter link
    filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            filterLinks.forEach(l => l.classList.remove('text-yellow-500'));
            
            // Add active class to clicked link
            link.classList.add('text-yellow-500');
            
            const filterValue = link.getAttribute('data-filter');
            
            // Show/hide items based on filter
            galleryItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'flex';
                } else {
                    if (item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
});