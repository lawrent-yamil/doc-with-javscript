//@ts-check
import { createConnection } from 'mysql2'

const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: '2005',
  database: 'holamundo'
});

/**
 * Una funcion que agrega un nuevo animal a la base de datos
 * @param {Number} id 
 * @param {String} tipo 
 * @param {Boolean} estado 
 * @returns Query
 */
const addAnimal =  (id, tipo, estado) => {
  const query = `INSERT INTO animales (id, tipo, estado) VALUES (?, ?, ?)`;
  const result =  connection.query(query, [id, tipo, estado]);
  return result;
}
/**
 * @type {Number}
 */
let age = 1;

/**
 * @type {Array<Number|String>}
 */
let ages = [];

/**
 * @typedef {Object} persona
 * @property {String} nombre
 * @property {Number} edad
 * @property {Boolean} casado
 */

/**
 * @type {persona}
 */
const persona = {
  nombre: 'Lawrent',
  edad: 20,
  casado: false
};

/**
 * Clase para trabajar con articulos
 */
class Articulo {
  /**
   * @param {Number} id ID del articulo
   * @param {String} nombre Nombre del articulo
   * @param {Number} precio Precio del articulo
   */
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
  /**
   * Borra el articulo de la base de datos
   * @param {Number|String} id El id a eliminar
   * @returns Query  
   */
  static deleteArticulo(id) {
    const query = `DELETE FROM articulos WHERE id = ${id}`;
    return connection.query(query);
  }
}

const articulo = new Articulo(1, 'Articulo 1', 100);