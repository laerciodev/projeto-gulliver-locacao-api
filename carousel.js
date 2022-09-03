import getCar from './cars.js';
import getUser from './github.js';

let currentSlide = 0;

const nextButton = document.querySelector('.next-slide');
const prevButton = document.querySelector('.prev-slide');
const userComment = document.querySelector('.user-comment');
const avatar = document.querySelector('.avatar');

const images = document.querySelectorAll('.car');
const users = ['mojombo', 'defunkt', 'pjhyett', 'wycats'];

const carTitle = document.querySelector('.car-title');

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function fillCarInfo(index = 0) {
  const { Modelo: modelo } = await getCar(index);
  carTitle.innerHTML = modelo;
}

async function fillUserComment(index = 0) {
  const user = await getUser(users[index]);
  const str = capitalize(user.login);
  userComment.innerHTML = `${str} disse:`;
  avatar.src = user.avatar_url;
};

fillCarInfo();
fillUserComment();

nextButton.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide < 4) {
    images[currentSlide - 1].classList.remove('active');
    images[currentSlide].classList.add('active');
    fillCarInfo(currentSlide);
    fillUserComment(currentSlide);
  } else {
    currentSlide = 0;
    images[3].classList.remove('active');
    images[0].classList.add('active');
    fillCarInfo(currentSlide);
    fillUserComment(currentSlide);
  }
});

prevButton.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = 3;
    images[0].classList.remove('active');
    images[3].classList.add('active');
    fillCarInfo(currentSlide);
    fillUserComment(currentSlide);
  } else {
    images[currentSlide + 1].classList.remove('active');
    images[currentSlide].classList.add('active');
    fillCarInfo(currentSlide);
    fillUserComment(currentSlide);
  }
});
