<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Voter</title>
    <link rel="stylesheet" href="/static/css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

</head>
<body>
    <div class="container">
        
        <main id="mainContent">
            <nav class="nav-menu">
           
                    <button id="votingBtn" class="active">
                        <i class="fas fa-sort"></i>
                        <span>Voting</span>
                    </button>
                    <button id="breedsBtn">
                        <i class="fas fa-search"></i>
                        <span>Breeds</span>
                    </button>
                    <button id="favsBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                        <span>Favs</span>
                    </button>
            </nav>

         <div id="breedsSection" style="display:none;">
                <select id="breedSelect">
                    <option value="">Select a breed</option>
                    <!-- Populate this dropdown with breed options dynamically -->
                </select>
                <!-- Swiper -->
                <div class="swiper mySwiper">
                    <div class="swiper-wrapper" id="carouselInner"></div>
                    <!-- Pagination Dots -->
                    <div class="swiper-pagination"></div>
                </div>
                <!-- Breed Info -->
                <div id="breedInfo"></div>
            </div>        
        </main>
    </div>
    <script src="/static/js/breeds.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
</body>
</html>






 
          

            