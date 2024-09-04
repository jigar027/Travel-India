const carouselItems = document.querySelector('.carousel-items');
const tabs = document.querySelectorAll('.tab');

const domesticDestinations = [
    { img: 'https://media.easemytrip.com/media/Deal/DL638358444589718002/SightSeeing/SightSeeingKuTWu0.jpg', name: 'Kashmir', price: '₹ 23599' },
    { img: 'https://media.easemytrip.com/media/Deal/DL638346262136790649/SightSeeing/SightSeeingpNiZJM.jpg', name: 'North East', price: '₹ 22999' },
    { img: 'https://media.easemytrip.com/media/Deal/DL638041919849237516/Attraction/AttractionbiuWkU.jpg', name: 'Rajasthan', price: '₹ 4999' },
    { img: 'https://static.toiimg.com/photo/93246451.cms', name: 'Himachal', price: '₹ 17999' },
    { img: 'https://media.easemytrip.com/media/Deal/DL637073497621323651/SightSeeing/SightSeeingq4M19J.jpg', name: 'Ooty', price: '₹ 17999' },
    { img: 'https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2Fgoa%202_11zon.webp&w=3840&q=75', name: 'Goa', price: '₹ 7999' },
    { img: 'https://www.indiadrivertours.com/wp-content/uploads/2017/06/tpkg-manalitour.jpg', name: 'Manali', price: '₹ 18999' },
    { img: 'https://static.toiimg.com/thumb/msid-102383896,width-748,height-499,resizemode=4,imgsize-238460/.jpg', name: 'Shimla', price: '₹ 17999' },
    { img: 'https://map.sahapedia.org/admin/assets/images/2021033013400727799_Banner.jpg?__imr__=bannerMuseum', name: 'Udaipur', price: '₹ 7999' },
    { img: 'https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg', name: 'Delhi', price: '₹ 6999' },
    { img: 'https://s3.india.com/wp-content/uploads/2024/04/Feature-Image-_-pondicherry.jpg', name: 'pondicherry', price: '₹ 13999' },
    { img: 'https://i.pinimg.com/originals/55/b2/fc/55b2fc2b0bae780c3157b74d017b6e1c.jpg', name: 'Kutch', price: '₹ 20000' },
    { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Trayambakeshwar_Temple_VK.jpg/640px-Trayambakeshwar_Temple_VK.jpg', name: 'Rishikesh', price: '₹ 9999' },
    { img: 'https://assets.vogue.in/photos/5ce41ea8b803113d138f5cd2/16:9/w_1920,h_1080,c_limit/Jaipur-Travel-Shopping-Restaurants.jpg', name: 'Jaipur', price: '₹ 7000' },
    { img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/01/08/32/agra-fort.jpg?w=600&h=500&s=1', name: 'Agra', price: '₹ 11999' },
    { img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/e7/47/b5/this-sanctum-sanctorum.jpg?w=600&h=-1&s=1', name: 'Amritsar', price: '₹ 12000' },
    { img: 'https://images.cnbctv18.com/wp-content/uploads/2022/08/Darjeeling.jpg?impolicy=website&width=400&height=300', name: 'Darjeeling', price: '₹ 17999' },
    { img: 'https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg', name: 'Mumbai', price: '₹ 7999' },
    { img: 'https://static.toiimg.com/photo/msid-80611280,width-96,height-65.cms', name: 'mussoorie', price: '₹ 19999' },
    { img: 'https://www.travelanddestinations.com/wp-content/uploads/2021/07/Varanasi-waterfront.jpg', name: 'Varanasi', price: '₹ 9999' },
    { img: 'https://thumbs.dreamstime.com/b/kya-gar-lake-leh-ladak-beautiful-94929268.jpg', name: 'Ladak', price: '₹ 9999' },
    { img: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Houseboats%2C_Dal_Lake%2C_Kashmir.jpg', name: 'Srinagar', price: '₹ 12999' },
    { img: 'https://www.rajasthantourplanner.com/blog/wp-content/uploads/2021/05/Andaman-and-Nicobar-Travel-Guide.jpg', name: 'Andaman and Nicobar ', price: '₹ 45999' },
    { img: 'https://www.esikkimtourism.in/wp-content/uploads/2018/10/ravangla-bnnnr.jpg', name: 'Sikkim', price: '₹ 19999' },
    { img: 'https://magikindia.com/wp-content/uploads/2015/12/mysore-1-1.jpg', name: 'Mysore', price: '₹ 17999' },
];

const internationalDestinations = [
    { img: 'https://media.easemytrip.com/media/Deal/DL638557908991826204/SightSeeing/SightSeeing3L1E8U.jpg', name: 'Maldives', price: '₹ 49999' },
    { img: 'https://media.easemytrip.com/media/Deal/DL638085374739011382/Attraction/Attraction6A87H7.jpg', name: 'Paris', price: '₹ 89999' },
    { img: 'https://media.easemytrip.com/media/Deal/DL637956616514362827/SightSeeing/SightSeeingAigHKJ.jpg', name: 'Bali', price: '₹ 39999' },
    { img: 'https://media.easemytrip.com/media/Deal/DL638034215971610479/SightSeeing/SightSeeingU7GjRW.png', name: 'Dubai', price: '₹ 59999' },
    { img: 'https://media.easemytrip.com/media/Deal/DL638560375050998482/SightSeeing/SightSeeingsjuuTz.jpg', name: 'Singapore', price: '₹ 55999' }
];

let currentIndex = 1; // Start at 1 due to cloning
const cardWidth = document.querySelector('.card').offsetWidth;

function loadDestinations(destinations) {
    carouselItems.innerHTML = ''; // Clear existing cards

    // Clone the first and last cards for smooth cyclic transition
    const firstClone = createCard(destinations[0]);
    const lastClone = createCard(destinations[destinations.length - 1]);

    carouselItems.appendChild(lastClone);
    destinations.forEach(destination => {
        carouselItems.appendChild(createCard(destination));
    });
    carouselItems.appendChild(firstClone);

    currentIndex = 1;
    updateCarousel();
}

function createCard(destination) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${destination.img}" alt="${destination.name}">
        <div class="card-content">
            <h3>${destination.name}</h3>
            <p>From ${destination.price}</p>
            <a href="#" class="explore-link">Explore &#x27A1;</a>
        </div>`;
    return card;
}

function updateCarousel() {
    const offset = -currentIndex * cardWidth;
    carouselItems.style.transition = "transform 0.3s ease-in-out";
    carouselItems.style.transform = `translateX(${offset}px)`;
}

// Event listeners for tab buttons
tabs[0].addEventListener('click', () => {
    tabs[0].classList.add('active');
    tabs[1].classList.remove('active');
    loadDestinations(domesticDestinations);
});

tabs[1].addEventListener('click', () => {
    tabs[1].classList.add('active');
    tabs[0].classList.remove('active');
    loadDestinations(internationalDestinations);
});

// Initialize with domestic destinations
loadDestinations(domesticDestinations);

// Auto sliding setup
let slideInterval = setInterval(moveRight, 3000);

carouselItems.addEventListener('mouseover', () => {
    clearInterval(slideInterval);
});

carouselItems.addEventListener('mouseout', () => {
    slideInterval = setInterval(moveRight, 3000);
});

function moveRight() {
    if (currentIndex >= domesticDestinations.length) {
        currentIndex++;
        updateCarousel();
        setTimeout(() => {
            currentIndex = 1;
            carouselItems.style.transition = "none";
            updateCarousel();
        }, 300);
    } else {
        currentIndex++;
        updateCarousel();
    }
}

function moveLeft() {
    if (currentIndex <= 0) {
        currentIndex--;
        updateCarousel();
        setTimeout(() => {
            currentIndex = domesticDestinations.length;
            carouselItems.style.transition = "none";
            updateCarousel();
        }, 300);
    } else {
        currentIndex--;
        updateCarousel();
    }
}


const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides[currentSlide].classList.remove('active');   


  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');   

}

setInterval(showSlide, 3000); // Change the interval as needed