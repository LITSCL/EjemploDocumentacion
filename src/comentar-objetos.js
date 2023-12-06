//@ts-check

/**
 * Este es un objeto JSON llamado persona1.
 * @type {{id: string, primerNombre: string, segundoNombre: string, edad: number}}
 */
const persona1 = {
    id: "19.757.106-3",
    primerNombre: "Daniel",
    segundoNombre: "Andres",
    edad: 23
}

/**
 * Este es un objeto JSON llamado persona2 el cual tiene un atributo que soporta 2 tipos de datos.
 * @type {{id: string | number, primerNombre: string, segundoNombre: string, edad: number}}
 */
 const persona2 = {
    id: 1,
    primerNombre: "Esteban",
    segundoNombre: "Rodrigo",
    edad: 23
}
