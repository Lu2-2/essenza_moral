const nome = document.querySelector('#form_name');
const dia = document.querySelector('#form_date');
const hora = document.querySelector('#form_time');
const formulario = document.querySelector('#form');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const partes = dia.value.split('-'); // Divide "2025-12-20"
    const dataFormatada = `${partes[2]}/${partes[1]}`; // Resulta em "20/12"

    console.log('enviado')

    alert(`Reserva feita para ${nome.value}, dia ${dataFormatada}, às ${hora.value}h.`
    )
});