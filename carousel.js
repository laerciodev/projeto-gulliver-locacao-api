import getCar from './index.js';

let currentSlide = 0;

const nextButton = document.querySelector('.next-slide');
const prevButton = document.querySelector('.prev-slide');

const images = document.querySelectorAll('.car');

const carTitle = document.querySelector('.car-title');

async function fillCarInfo(index = 0) {
  const { Modelo: modelo } = await getCar(index);
  carTitle.innerHTML = modelo;
}

fillCarInfo();

nextButton.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide < 4) {
    images[currentSlide - 1].classList.remove('active');
    images[currentSlide].classList.add('active');
    fillCarInfo(currentSlide);
  } else {
    currentSlide = 0;
    images[3].classList.remove('active');
    images[0].classList.add('active');
    fillCarInfo(currentSlide);
  }
});

prevButton.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = 3;
    images[0].classList.remove('active');
    images[3].classList.add('active');
    fillCarInfo(currentSlide);
  } else {
    images[currentSlide + 1].classList.remove('active');
    images[currentSlide].classList.add('active');
    fillCarInfo(currentSlide);
  }
});
