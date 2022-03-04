import React from "react";

export class EventosES6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        };

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar() {
        //console.log("Sumando");

        this.setState({
            contador: this.state.contador + 1,
        });
    }

    restar() {
        console.log("Restando");
        this.setState({
            contador: this.state.contador - 1,
        });
    }


    render() {
        return(
            <div>
                <h2>Eventos en Componentes de Clase ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}

// Properties Initializer
export class EventosES7 extends React.Component {
    state = {
        contador: 0,
    };

    // Arow functions
    sumar = (e) => {
        //console.log("Sumando");

        this.setState({
            contador: this.state.contador + 1,
        });
    }

    restar = (e) => {
        console.log("Restando");
        this.setState({
            contador: this.state.contador - 1,
        });
    }


    render() {
        return(
            <div>
                <h2>Eventos en Componentes de Clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}

/*function Boton (props) {
    return(
        <button onClick={props.myOnClick}>Botón hecho componente</button>
    );
}*/

/*const Boton = (props) => (
    <button onClick={props.myOnClick}>Botón hecho componente</button>
);*/

const Boton = ({ myOnClick }) => (
    <button onClick={myOnClick}>Botón hecho componente</button>
);

export class MasSobreEventos extends React.Component {
    handleClick = (e, mensaje) => {
        //console.log(e);
        //console.log(e.target);
        //console.log(e.nativeEvent);
        //console.log(e.nativeEvent.target);
        //console.log(mensaje);
    }

    render() {
        return(
            <div>
                <h2>Más Sobre Eventos</h2>
                <button onClick={(e) =>
                    this.handleClick(e, "Pasando parámetro desde un evento")
                }>
                    Saludar
                </button>
                <Boton myOnClick={(e) =>
                    this.handleClick(e, "Pasando parámetro desde un evento")
                } />
            </div>
        );
    }
}
