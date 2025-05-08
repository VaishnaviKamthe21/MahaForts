// Smooth search functionality with "No Results" message
document.getElementById('searchInput').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const fortCards = document.querySelectorAll('.fort-card');
    const noResults = document.getElementById('noResults');
    let anyVisible = false;
  
    fortCards.forEach(card => {
      const fortName = card.querySelector('.card-title').textContent.toLowerCase();
      if (fortName.includes(searchValue)) {
        card.parentElement.style.display = "block";
        setTimeout(() => {
          card.parentElement.style.opacity = 1;
        }, 50);
        anyVisible = true;
      } else {
        card.parentElement.style.opacity = 0;
        setTimeout(() => {
          card.parentElement.style.display = "none";
        }, 300);
      }
    });
  
    // Show/hide No Results message
    if (!anyVisible) {
      noResults.style.display = "block";
    } else {
      noResults.style.display = "none";
    }
  });

  

 // Function to get query parameter by name
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  // Function to load the fort data based on the fort name
  function loadFortData() {
    const fortName = getQueryParameter('fort');
    
    if (!fortName) {
      document.getElementById('fort-name').innerText = 'Fort Not Found';
      return;
    }
  
    const fortsData = {
      'sinhagad': {
        name: 'Sinhagad Fort',
        history: 'Sinhagad Fort, also known as the "Lion\'s Fort", is located near Pune in Maharashtra. The fort has a rich history, including its significance during the Maratha Empire, especially the battle of Sinhagad in 1670.',
        architecture: 'The fort is known for its rugged walls, bastions, and beautiful gates. The architecture reflects Maratha military engineering, with a strategic location for surveillance.',
        trekking: 'Difficulty: Moderate, Best season: Winter and early monsoon. The trek is popular for its scenic views and the ruins of historical structures.',
        image: 'images/sinhagad.jpg',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.316158263712!2d73.75550487513441!3d18.366587072667636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc293db43d33d2f%3A0x3ee2ac1fdd689e60!2sSinhagad%20Fort!5e0!3m2!1sen!2sin!4v1715156303218!5m2!1sen!2sin',
        gallery: ['images/sinhagad.jpg', 'images/sinhagad.jpg', 'images/sinhagad.jpg']
      },
      'raigad': {
        name: 'Raigad Fort',
        history: 'Raigad Fort, the capital of the Maratha Empire under Chhatrapati Shivaji Maharaj, is located in the Sahyadri mountains. It was the seat of the Maratha administration and holds immense historical importance.',
        architecture: 'The fort features a unique structure with a series of steps leading to the top. Key features include the Shivaji Maharaj Samadhi, the Maha Darwaza (main gate), and several temples.',
        trekking: 'Difficulty: Moderate to difficult, Best season: Monsoon and winter. The trek is steep and challenging but offers beautiful views and a rich historical experience.',
        image: 'images/raigad.jpg',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.654316425214!2d73.44303647514514!3d18.23631708265527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8000be209ece7%3A0x78a67b7cfb55fa89!2sRaigad%20Fort!5e0!3m2!1sen!2sin!4v1715156485782!5m2!1sen!2sin',
        gallery: ['images/raigad.jpg', 'raigad2.jpg', 'raigad3.jpg']
      },
      'rajgad': {
        name: 'Rajgad Fort',
        history: 'Rajgad Fort was the first capital of the Maratha Empire and served as the stronghold for Chhatrapati Shivaji Maharaj. It has a rich historical significance with remnants of ancient structures.',
        architecture: 'The fort has grand ramparts, several gates, and intricate architecture reflecting Maratha fort building skills. The iconic structures include the Padmavati Temple and the Ballekilla (high citadel).',
        trekking: 'Difficulty: Moderate, Best season: Winter and early monsoon. The trek offers breathtaking views of the surrounding mountains and valleys.',
        image: 'images/rajgad.jpg',
        map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.628339897613!2d73.6771305751406!3d18.24629128264178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e0f5a8e46d3d%3A0x5c9f7c98983c02c0!2sRajgad%20Fort!5e0!3m2!1sen!2sin!4v1715156641778!5m2!1sen!2sin',
        gallery: ['images/rajgad.jpg', 'rajgad2.jpg', 'rajgad3.jpg']
      }
    };
  
    const fortData = fortsData[fortName.toLowerCase()];
  
    if (fortData) {
      document.getElementById('fort-name').innerText = fortData.name;
      document.getElementById('fort-history').innerText = fortData.history;
      document.getElementById('fort-architecture').innerText = fortData.architecture;
      document.getElementById('fort-trekking').innerText = fortData.trekking;
      document.getElementById('fort-image').src = fortData.image;
  
      // Load Google Map
      document.getElementById('fort-map').innerHTML = `<iframe src="${fortData.map}" width="100%" height="400" frameborder="0" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
  
      // Load Gallery
      const galleryDiv = document.getElementById('fort-gallery');
      fortData.gallery.forEach(img => {
        const imgElem = document.createElement('img');
        imgElem.src = img;
        imgElem.alt = fortData.name + ' photo';
        imgElem.style.width = '30%';
        imgElem.style.borderRadius = '10px';
        galleryDiv.appendChild(imgElem);
      });
  
    } else {
      document.getElementById('fort-name').innerText = 'Fort Not Found';
    }
  }
  
  window.onload = loadFortData;
  