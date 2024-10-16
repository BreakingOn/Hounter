//sliders on the first block
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1.5, // number of slides presented at the same time
    spaceBetween: 5, // space between slides
    centeredSlides: true,
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000, 
    },
});

//tabs on the second block
document.addEventListener("DOMContentLoaded", function() {

    const tabContents = document.getElementsByClassName("tab-content");
    const tabLinks = document.getElementsByClassName("tab-link");

    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active-tab");
    }

    tabContents[0].classList.add("active-tab"); 
    tabLinks[0].classList.add("active"); 
});

//function to open a tab and remowe a prewious one
function openTab(evt, tabName) {
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active-tab");
    }

    var tabLinks = document.getElementsByClassName("tab-link");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active-tab");

    evt.currentTarget.classList.add("active");
}
  



//For some reason, slider will always slide one element more of what is actually present on the slider
document.addEventListener("DOMContentLoaded", function() {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const items = document.querySelectorAll('.carousel-item');
    
    let currentIndex = 0;
    const totalItems = items.length;
    const itemWidth = items[0].offsetWidth + 50; 
    const visibleItems = Math.floor(carouselWrapper.offsetWidth / itemWidth); 

  //function to update buttons on whether can you slide in their direction of not
    function updateButtons() {
        if (currentIndex === 0) {
            prevButton.classList.add('disabled');
        } else {
            prevButton.classList.remove('disabled');
        }

        if (currentIndex >= totalItems - visibleItems) {
            nextButton.classList.add('disabled');
        } else {
            nextButton.classList.remove('disabled');
        }
    }

    updateButtons();

    //Listener for the action of sliding
    nextButton.addEventListener('click', function() {
        if (currentIndex < totalItems - visibleItems) {  
            currentIndex++;
            const offset = -currentIndex * itemWidth;
            carouselWrapper.style.transform = `translateX(${offset}px)`;
            updateButtons();
        }
    });

    //Listener for the action of sliding backwards
    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            const offset = -currentIndex * itemWidth;
            carouselWrapper.style.transform = `translateX(${offset}px)`;
            updateButtons();
        }
    });
});

//Modal opening
function openModal(startIndex) {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";

    const swiper = new Swiper('.mySwiper', {
        initialSlide: startIndex,
        navigation: {
            nextEl: '.swiper-custom-next',
            prevEl: '.swiper-custom-prev',
        },
    });
}

//Modal closing
function closeModal() {
    const modal = document.getElementById("modal");
      const iframes = modal.querySelectorAll('iframe');
      iframes.forEach(iframe => {
          const src = iframe.src;
          iframe.src = '';  
          iframe.src = src; 
      });
    modal.style.display = "none";
}

// link click to closing modal
document.addEventListener("DOMContentLoaded", function() {
    const closeButton = document.querySelector(".close");
    closeButton.addEventListener("click", closeModal);
});
//swiper for the rewiews
var swiperRew = new Swiper('.reviews-swiper', {
    loop: false,  
    pagination: {
      el: '.swiper-pagination',  
      clickable: true,  
    },
  });
