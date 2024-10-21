const adviceDiv = document.getElementById('advice');
const button = document.getElementById('get-advice');

// obtenemos un consejo desde la api
const fetchAdvice = () => {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      adviceDiv.textContent = data.slip.advice; 
    })
    .catch(error => {
      adviceDiv.textContent = 'Hubo un error al obtener el consejo :(  Inténtalo de nuevo.';
      console.error('Error fetching the advice:', error);
    });
};


button.addEventListener('click', fetchAdvice);
