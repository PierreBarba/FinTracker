document.addEventListener('DOMContentLoaded', () => {

  function createCard(imageUrl, text, cardId, imageId) {
    // Crear los elementos de la tarjeta
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.id = cardId; // Asigna un ID a la tarjeta
    
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.alt = 'Card Image';
    imageElement.classList.add('card-image');
    imageElement.id = imageId; // Asigna un ID a la imagen
    
    const textElement = document.createElement('p');
    textElement.innerText = text;
    textElement.classList.add('card-text');
    
    // Añadir la imagen y el texto a la tarjeta
    cardElement.appendChild(imageElement);
    cardElement.appendChild(textElement);
    
    // Añadir la tarjeta al contenedor
    document.getElementById('cardContainer').appendChild(cardElement);
  }
  
  // Array de objetos con las URLs de las imágenes, los textos, y los IDs
  const cardsData = [
    { imageUrl: 'https://via.placeholder.com/150', text: 'Funcionalidad para tu empresa', cardId: 'card-1', imageId: 'image-1' },
    { imageUrl: 'https://via.placeholder.com/150', text: 'Nuestras tecnologías', cardId: 'card-2', imageId: 'image-2' },
    { imageUrl: 'https://via.placeholder.com/150', text: 'Nuestro equipo', cardId: 'card-3', imageId: 'image-3' },
  ];

  // Crear las tarjetas usando map
  cardsData.map(card => createCard(card.imageUrl, card.text, card.cardId, card.imageId));

  // Cambiar la imagen de la primera serie de tarjetas
  const firstCardImage = document.querySelector('#image-1');
  if (firstCardImage) {
    firstCardImage.src = './src/blog-1.jpg';
  }
  const secondCardImage = document.querySelector('#image-2');
  if(secondCardImage){
    secondCardImage.src = './src/blog-2.jpg';
  }
  const thirdCardImage = document.querySelector('#image-3');
  if(thirdCardImage){
    thirdCardImage.src = './src/blog-3.jpg';
  }
});

