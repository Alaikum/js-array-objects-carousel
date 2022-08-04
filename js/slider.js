// console.log('slider')
const slides = [
	{
		url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
		title: 'Svezia',
		description:
			'Lorem ipsum SVEZIA, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Perù',
		description:
			'Lorem ipsum PERÙ, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},

	{
		url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
		title: 'Chile',
		description:
			'Lorem ipsum CHILE, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
		title: 'Argentina',
		description:
			'Lorem ipsum ARGENTINA, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
	{
		url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
		title: 'Colombia',
		description:
			'Lorem ipsum COLOMBIA, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
	},
]

const ulElement = document.querySelector('.slides-wrapper')

console.log(ulElement, slides)



slides.forEach(stampaSlides)


// stampa tutto slides e da classe attiva alla prima Slide 
function stampaSlides(slides,i) {

	// per mettere classe attiva solo alla prima slide 

	let attiva = ''
	
	

	if (i===0) {
		attiva = 'active'

	}

	ulElement.innerHTML += `<li class="slide ${attiva}">
	<img src="${slides.url}" alt="">
	<div class="slide__content">
  	<h3 class="slide__title">${slides.title}</h3>
  	<p class="slide__description">${slides.description}</p>
	</div>
	</li>`
	
}

const slidesCarousel= document.querySelectorAll('.slide')
console.log(slidesCarousel)


const nextArrowEl = document.querySelector('.arrow-next');
currentIndex=0
// next arrow 
nextArrowEl.addEventListener('click', function () {

    let slideAttiva = slidesCarousel[currentIndex];
    let slideSuccessiva = slidesCarousel[currentIndex + 1]
    let circleAttivo = circleArray[currentIndex]
    let circleSuccessivo = circleArray[currentIndex + 1];

	console.log(slideAttiva,slideSuccessiva)

    // qui si torna alla prima img quando siamo arrivati alla fine 
    if (currentIndex === slidesCarousel.length -1) {
        slideSuccessiva = slidesCarousel[0];
        slideAttiva.classList.remove('active');
        slideSuccessiva.classList.add('active');
        circleSuccessivo = circleArray[0]
        circleAttivo.classList.remove('circle__active');
        circleSuccessivo.classList.add('circle__active');
      
        currentIndex = -1;
 

    } else {
        // togliere classe active dalla slide attiva 
        slideAttiva.classList.remove('active');
        slideSuccessiva.classList.add('active');
        circleAttivo.classList.remove('circle__active');
        circleSuccessivo.classList.add('circle__active');
    }
    currentIndex++

})





const prevArrowEl = document.querySelector('.arrow-prev');

// prev arrow 
prevArrowEl.addEventListener('click', function () {

    let slideAttiva = slidesCarousel[currentIndex];
    let slideSuccessiva = slidesCarousel[currentIndex + -1]
    let circleAttivo = circleArray[currentIndex]
    let circleSuccessivo = circleArray[currentIndex + -1];



    // qui si torna alla prima img quando siamo arrivati alla fine 
    if (currentIndex === 0) {
        slideSuccessiva = slidesCarousel[4];
        slideAttiva.classList.remove('active');
        slideSuccessiva.classList.add('active');
        circleSuccessivo = circleArray[4]
        circleAttivo.classList.remove('circle__active');
        circleSuccessivo.classList.add('circle__active');
        currentIndex = 5;


    } else {
        // togliere classe active dalla slide attiva 
        slideAttiva.classList.remove('active');
        slideSuccessiva.classList.add('active');
        circleAttivo.classList.remove('circle__active');
        circleSuccessivo.classList.add('circle__active');
    }
    currentIndex--


})

// implementare pulsanti sotto la foto 
const circles = document.querySelector('.circles')
const circleArray = []
circles.innerHTML = ' '

// genera circles 
for (let i = 0; i < slides.length; i++) {
    // creo p
    const p = document.createElement('p');

    // do la classe circles__dot a p 
    p.className = 'circles__dot';
    p.classList.add('slide' + i)



    // assegno alla prima p la classe circle__active 
    if (i === currentIndex) {
        p.classList.add('circle__active')
    }

    // aggancio il cricle
    circles.append(p)

    // push nell array di circle
    circleArray.push(p);


}


const circle0 = document.querySelector('.slide0')
circle0.addEventListener('click', function () {

    let alternativeIndex=0
    let slideAttiva = slidesCarousel[currentIndex];
    let slideSuccessiva = slidesCarousel[alternativeIndex]
    let circleAttivo = circleArray[currentIndex]
    let circleSuccessivo = circleArray[alternativeIndex];
    slideAttiva.classList.remove('active');
    slideSuccessiva.classList.add('active');
    circleAttivo.classList.remove('circle__active');
    circleSuccessivo.classList.add('circle__active');
    currentIndex = alternativeIndex;

})

// bottone 1 
const circle1 = document.querySelector('.slide1')
// circle1.addEventListener('click', function () {

//     let alternativeIndex=1
//     let slideAttiva = slidesCarousel[currentIndex];
//     let slideSuccessiva = slidesCarousel[alternativeIndex]
//     let circleAttivo = circleArray[currentIndex]
//     let circleSuccessivo = circleArray[alternativeIndex];
//     slideAttiva.classList.remove('active');
//     slideSuccessiva.classList.add('active');
//     circleAttivo.classList.remove('circle__active');
//     circleSuccessivo.classList.add('circle__active');
//     currentIndex = alternativeIndex;

// })

circle1.addEventListener('click', circleActive(1))
// bottone 2 
const circle2 = document.querySelector('.slide2')
circle2.addEventListener('click', circleActive(2))

function circleActive(altIndex){
	let alternativeIndex=altIndex
	console.log(altIndex)
    let slideAttiva = slidesCarousel[currentIndex];
    let slideSuccessiva = slidesCarousel[alternativeIndex]
    let circleAttivo = circleArray[currentIndex]
    let circleSuccessivo = circleArray[alternativeIndex];
    slideAttiva.classList.remove('active');
    slideSuccessiva.classList.add('active');
    circleAttivo.classList.remove('circle__active');
    circleSuccessivo.classList.add('circle__active');
    currentIndex = alternativeIndex;
}

console.log(currentIndex)