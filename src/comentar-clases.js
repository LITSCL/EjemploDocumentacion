//@ts-check

/**
 * Esta clase pretende crear objetos de tipo "Programador".
 * @example new Programador({nombre: "Rodrigo", edad: 42}, "C++", "Eclipse");
 */
class Programador {

    /**
     * @param {{nombre: string, edad: number}} usuario Información del usuario.
     * @param {string} lenguaje Lenguaje de programación.
     * @param {string} editor Editor de código favorito.
     */
    constructor(usuario, lenguaje, editor) {
        this.usuario = usuario;
        this.lenguaje = lenguaje;
        this.editor = editor;
    }

    /**
     * Este método pretende dar información sobre el programador.
     * @returns {void}
     */
    getInformacion() {
        console.log(`Mi nombre es: ${this.usuario.nombre} y mi lenguaje de programación favorito es ${this.lenguaje}`);
    }

}

var programador1 = new Programador({nombre: "Daniel", edad: 23}, "Java", "Eclipse");
var programador2 = new Programador({nombre: "Esteban", edad: 22}, "PHP", "NetBeans");

programador1.getInformacion();
programador2.getInformacion();

