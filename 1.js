// Function to toggle the visibility of the popup
function togglePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = popup.style.display === "none" ? "block" : "none";
}

// Function to close the popup when the close button is clicked
function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

// Call togglePopup() to display the popup initially
togglePopup();
