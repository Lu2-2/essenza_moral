const nome = document.querySelector('#form_name');
const dia = document.querySelector('#form_date');
const hora = document.querySelector('#form_time');
const formulario = document.querySelector('#meu-form');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    
    console.log('enviado')

    console.log({
        nome: nome.value,
        dia: dia.value,
        hora: hora.value
    });
});