//@ts-check

/**
 * Librería de matemáticas.
 * @module Matematicas
 */

/**
 * Este módulo pretende sumar dos números.
 * @param {number} x Primer número.
 * @param {number} y Segundo número
 * @returns {number} Es el resultado de la suma.
 */
const sumar = (x, y) => x + y;

/**
 * Este módulo pretende restar dos números.
 * @param {number} x Primer número.
 * @param {number} y Segundo número
 * @returns {number} Es el resultado de la resta.
 */
const restar = (x, y) => x - y;

module.exports = {
    sumar,
    restar
}