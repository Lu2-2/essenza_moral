import Nome from "./componentes/Nome/Nome";

const Reserva = () => {
    return (
        <body>
            <section className="Reserva">
                <form action="">
                    <h2>Preencha os dados para reservar uma mesa</h2>
                    <Nome placeholder='Digite o seu nome' />
                </form>
            </section>
        </body>
    )
}

export default Reserva