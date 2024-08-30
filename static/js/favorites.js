// favorites.js

document.addEventListener('DOMContentLoaded', function () {
    const favsContainer = document.getElementById('favsContainer');
    const gridViewBtn = document.getElementById('gridViewBtn');
    const listViewBtn = document.getElementById('listViewBtn');
    let currentUser = 'user-123';
    
    function showFavorites(view) {
        fetch(`/api/favorites?sub_id=${currentUser}&limit=10&page=0`)
            .then(response => response.json())
            .then(favs => {
                // console.log(favs);
                
                favsContainer.innerHTML = '';
                favsContainer.className = view === 'grid' ? 'favs-grid' : 'favs-list';
                favs.forEach(fav => {
                    const img = document.createElement('img');
                    img.src = fav.image.url;
                    img.alt = 'Favorite Cat';
                    img.dataset.favoriteId = fav.id;

                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Remove';
                    deleteBtn.classList.add('remove-btn');
                    deleteBtn.onclick = () => removeFavorite(fav.id);

                    const container = document.createElement('div');
                    container.classList.add('image-container');
                    container.appendChild(img);
                    container.appendChild(deleteBtn);
                    favsContainer.appendChild(container);
                });
            })
            .catch(error => console.error('Error fetching favorites:', error));
    }

    function removeFavorite(favoriteId) {
        fetch(`/api/favorites/${favoriteId}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                if (data.message === 'SUCCESS') {
                    alert('Removed from favorites!');
                    showFavorites(favsContainer.className.includes('grid') ? 'grid' : 'list');
                } else {
                    alert('Error removing from favorites');
                }
            })
            .catch(error => console.error('Error removing favorite:', error));
    }

    // Event listeners to toggle views
    gridViewBtn.addEventListener('click', () => showFavorites('grid'));
    listViewBtn.addEventListener('click', () => showFavorites('list'));

    // Initial load
    if (favsContainer.style.display !== 'none') {
        showFavorites('grid');
    }
});
