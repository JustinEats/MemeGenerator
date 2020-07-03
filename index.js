const form = document.querySelector('#form-container');
const inputURL = document.querySelector('#meme-image');
const inputTop = document.querySelector('#top-text');
const inputBottom = document.querySelector('#bottom-text');
const section = document.querySelector('#meme-section');
const deleteMeme = document.querySelector('#delete-meme');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const source = document.createElement('img');
	const memeDiv = document.createElement('div');
	const topText = document.createElement('h3');
	const bottomText = document.createElement('h3');
	topText.setAttribute('id', 'top');
	bottomText.setAttribute('id', 'bottom');
	source.setAttribute('src', inputURL.value);
	topText.innerText = inputTop.value;
	bottomText.innerText = inputBottom.value;
	source.setAttribute('id', 'image');
	memeDiv.setAttribute('id', 'meme-align');
	memeDiv.append(source);
	memeDiv.append(topText);
	memeDiv.append(bottomText);
	section.append(memeDiv);

	inputURL.value = '';
	inputTop.value = '';
	inputBottom.value = '';
});

section.addEventListener('dblclick', (e) => {
	e.target.parentElement.remove();
});
