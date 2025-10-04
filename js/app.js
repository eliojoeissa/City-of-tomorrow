// Simple starter functions
function uploadData() {
    alert('Data upload feature will be added soon!');
}

function exportData() {
    alert('Export feature will be added soon!');
}

function showChapter(chapterNum) {
    alert('Chapter ' + chapterNum + ' will be implemented!');
}

// Initialize the map
function initMap() {
    // Simple map initialization
    const map = L.map('map').setView([29.7604, -95.3698], 10);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    console.log('Map initialized - Houston data layers will be added next');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initMap();
});
