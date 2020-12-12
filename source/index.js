import './sass/style.scss'
import './style.css'
import axios from 'axios';

console.log('Aplicação iniciada com WebPack');

 fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {}
}).then(response => response.json())
    .then(json => console.log("Retorno com Fetch:", json));

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data)
    .then(json => console.log("Resultado com Axios: ", json));