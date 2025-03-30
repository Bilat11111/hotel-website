javascript


// Toggle Tabs
const tabs = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove 'active' class from all tabs and contents
        tabs.forEach(tab => tab.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add 'active' class to the clicked tab and corresponding content
        tab.classList.add('active');
        const targetTab = document.getElementById(tab.dataset.tab);
        targetTab.classList.add('active');
    });
});

// Modal functionality for booking form
const modal = document.getElementById('bookingModal');
const bookNowBtn = document.getElementById('bookNowBtn');
const closeBtn = document.querySelector('.close-btn');

// Open the modal
bookNowBtn.onclick = () => {
    modal.style.display = 'block';
};

// Close the modal
closeBtn.onclick = () => {
    modal.style.display = 'none';
};

// Close the modal if clicked outside of it
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Handle booking form submission (for now, just log the data)
document.getElementById('bookingForm').onsubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const room = document.getElementById('room').value;

    alert(`Thank you for booking, ${name}! A confirmation email will be sent to ${email}. You have selected the ${room} room.`);
    modal.style.display = 'none';  // Close the modal after submission
};
