const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'BBDD_UPCAAES_eeis',
  password: 'Al0hech0pech0',
  port: 5432,
})

const createUser = (request, response) => {
  const { name, email } = request.body
  pool.query('INSERT INTO tipo_de_fuente_sonora (eeis_id_eeis, amplificacion_conjunto_otros, potencia_del_equipo, nro_de_parlante, propio_alquiler) VALUES ($1, $2, $3, $4, $5)', [eeis_id_eeis, amplificacion_conjunto_otros, potencia_del_equipo, nro_de_parlante, propio_alquiler], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

module.exports = {
  createUser,
}