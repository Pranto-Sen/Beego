// voting.js

document.addEventListener('DOMContentLoaded', function () {
    const votingSection = document.getElementById('votingSection');
    const catImage = document.getElementById('catImage');
    const upvoteBtn = document.getElementById('upvoteBtn');
    const downvoteBtn = document.getElementById('downvoteBtn');
    const favBtn = document.getElementById('favBtn');

    let currentCat = null;
    let currentUser = 'user-123';

    function fetchCat() {
        fetch('/api/cat')
            .then(response => response.json())
            .then(data => {
                currentCat = data;
                catImage.src = data.url;
            })
            .catch(error => console.error('Error fetching cat:', error));
    }

    function addFavorite(imageId) {
        const rawBody = JSON.stringify({
            "image_id": imageId,
            "sub_id": currentUser
        });

        fetch('/api/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: rawBody
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.error('Error:', data.error);
                } else {
                    alert("Successfully added to favorites");
                    console.log('Success:', data);
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }

    // Event listeners for voting buttons
    upvoteBtn.addEventListener('click', fetchCat);
    downvoteBtn.addEventListener('click', fetchCat);

    // Event listener for adding favorite
    favBtn.addEventListener('click', () => {
        if (currentCat) {
           
            addFavorite(currentCat.id);
        }
        fetchCat();
    });

    // Initial load
    if (votingSection.style.display !== 'none') {
        fetchCat();
    }
});
