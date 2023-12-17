document.addEventListener('DOMContentLoaded', function () {
  // Replace 'YOUR_MOVIE_API_ENDPOINT' with the actual endpoint of your movie API
  const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=48b7fd8eddafbd865f8799c3047acbc2';

  // Fetch data from the movie API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Replace image sources with fetched data
      updateImageSources('home', data.popular);
      updateImageSources('myList', data.trending);
      updateImageSources('tvShows', data.tvShows);
      updateImageSources('movies', data.actionAdventure);
      updateImageSources('originals', data.originals);
    })
    .catch(error => console.error('Error fetching data:', error));

  // Function to update image sources based on the section ID
  function updateImageSources(sectionId, images) {
    const section = document.getElementById(sectionId);
    const imageLinks = section.querySelectorAll('.box a');

    imageLinks.forEach((link, index) => {
      // Replace 'YOUR_BASE_IMAGE_URL' with the base URL for your images
      const imageUrl = `YOUR_BASE_IMAGE_URL${images[index].path}`;
      link.querySelector('img').src = imageUrl;
      link.href = images[index].link; // Update the link if needed
    });
  }
});