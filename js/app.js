const galleryDOMElement = document.querySelector('.gallery')
console.log(galleryDOMElement)

const galleryObjects = [
	{
		image: './img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: './img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: './img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: './img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: './img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]
// console.log(galleryObjects)

// ciclo for per ottenere i diversi elementi degli oggetti
for (let i = 0; i < galleryObjects.length; i++) {
	const currentImage = galleryObjects[i].image
    const currentTitle = galleryObjects[i].title
    const currentText = galleryObjects[i].text

    // console.log(currentImage)
    // console.log(currentTitle)
    // console.log(currentText)

    const html = `
    <img class="gallery__img" src="${currentImage}">
    <h3 class="gallery__title">${currentTitle}</h3>
    <p class="gallery__text">${currentText}</p>
    </div>
    `
    // console.log(html)
    
    galleryDOMElement.innerHTML += html
    console.log(galleryDOMElement)

}
