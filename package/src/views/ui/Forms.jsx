import {Card,Row,Col,CardTitle,CardBody,Button,Form,FormGroup,Label,Input,FormText} from "reactstrap";
import { useState } from "react";

const Forms = () => {

  var controlador = 1;
  const tipodepersona = () => {
    var controlador = 0;
  };

  // const express = require('express')
  // const bodyParser = require('body-parser')
  // const app = express()
  // const db = require('../../services/queries.js')
  // const port = 3000

  // const RegistrarFSonora = (e) => {
  //   app.use(bodyParser.json())
  //   app.use(
  //     bodyParser.urlencoded({
  //       extended: true,
  //     })
  //   )
  //   app.get('/', (request, response) => {
  //     response.json({ info: 'Node.js, Express, and Postgres API' })
  //   })
  //   app.post('/users', db.createUser)

  //   app.listen(port, () => {
  //     console.log(`App running on port ${port}.`)
  //   })
  // }

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Datos del titular de la actividad - Representante Legal
          </CardTitle>
          <CardBody>
            <Form>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleSelect">Tipo de persona</Label>
                    <Input id="exampleSelect" name="select" type="select" onChange={tipodepersona}>
                      <option id="1"> Natural </option>
                      <option id="2"> Juridico </option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail"> Nro. de poder de rep. </Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Documento de identidad</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleSelect">Documento de identidad</Label>
                    <Input id="exampleSelect" name="select" type="select" onChange={tipodepersona}>
                      <option id="1"> CI </option>
                      <option id="2"> RUN </option>
                      <option id="1"> PASAPORTE </option>
                      <option id="2"> CARNET DE EXTRANJERO </option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Nombre</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Apellido Paterno</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Apellido Materno</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Zona</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleSelect">Lugar</Label>
                    <Input id="exampleSelect" name="select" type="select" onChange={tipodepersona}>
                      <option id="1"> Avenida </option>
                      <option id="2"> Calle </option>
                      <option id="1"> Pasaje </option>
                      <option id="2"> Plaza </option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Numero</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Edificio</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Bloque</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Piso</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Dpto/Oficina/Local N°</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Telefono</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">E-mail</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <Button>GUARDAR</Button>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>

        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Estado y Datos de la actividad
          </CardTitle>
          <CardBody>
            <Form>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleSelect">Estado</Label>
                    <Input id="exampleSelect" name="select" type="select">
                      <option>Proyecto</option>
                      <option>En operación</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Días de mayor afluencia</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup tag="fieldset">
                    <legend>Tipo de actividad</legend>
                    <FormGroup check>
                      <Input name="radio1" type="radio" />{" "}
                      <Label check>
                        PUB
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input name="radio1" type="radio" />{" "}
                      <Label check>
                        Discoteca
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input name="radio1" type="radio" />{" "}
                      <Label check>
                        Club Nocturno
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input name="radio1" type="radio" />{" "}
                      <Label check>
                        Karaoke
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input name="radio1" type="radio" />{" "}
                      <Label check>
                        Peñas
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input name="radio1" type="radio" />{" "}
                      <Label check>
                        Salones de Baile y Fiestas
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input name="radio1" type="radio" />{" "}
                      <Label check>
                        Actividades que cuenten con la presentación de grupos musicales en vivo
                      </Label>
                    </FormGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Nombre o Razon Social</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Subalcaldía</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Zona</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleSelectMulti">Lugar</Label>
                    <Input
                      id="exampleSelectMulti"
                      multiple
                      name="selectMulti"
                      type="select"
                    >
                      <option>Avenida</option>
                      <option>Calle</option>
                      <option>Pasaje</option>
                      <option>Plaza</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Numero</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Edificio</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Bloque</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Piso</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Dpto/Oficina/Local N°</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Entre calles:</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Telefono</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Horario de atención</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>

        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Datos del establecimiento donde funciona la actividad
          </CardTitle>
          <CardBody>
            <Form>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleSelect">El establecimiento es</Label>
                    <Input id="exampleSelect" name="select" type="select">
                      <option>Propio</option>
                      <option>Alquilado</option>
                      <option>Anticretico</option>
                      <option>Otro</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Niveles</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Superficie Interior en m2</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Altura Interior en m2</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Volumen en m3</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>

        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            COLINDANCIAS
          </CardTitle>
          <CardBody>
            <Form>
              <Row>
                <Col>
                  NORTE
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Titular de la propiedad / Dirección</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Actividad del Predio</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Horario de funcionamiento</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  SUR
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Titular de la propiedad / Dirección</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Actividad del Predio</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Horario de funcionamiento</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  ESTE
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Titular de la propiedad / Dirección</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Actividad del Predio</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Horario de funcionamiento</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  OESTE
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Titular de la propiedad / Dirección</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Actividad del Predio</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Horario de funcionamiento</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  SUPERIOR
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Titular de la propiedad / Dirección</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Actividad del Predio</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Horario de funcionamiento</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  INFERIOR
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Titular de la propiedad / Dirección</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Actividad del Predio</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Horario de funcionamiento</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            DATOS DEL RESPONSABLE TECNICO
          </CardTitle>
          <CardBody>
            <Form>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Nombres</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Apellido Paterno</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Apellido Materno</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Profesión</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Domicilio</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Nro. de RENCA</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Telefono</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">E-Mail</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            TIPO DE FUENTE SONORA
          </CardTitle>
          <CardBody>
            <Form>
              <Row>
                <Col>

                  <Row>
                    <Col>
                      <Input
                        type="checkbox"
                        name="fuenteSonora"
                        value="amplificacion"
                      />Amplificación
                    </Col>
                    <Col>
                      <Input
                        type="checkbox"
                        name="fuenteSonora"
                        value="conjunto"
                      />Conjuntos en vivo
                    </Col>
                    <Col>
                      <Input
                        type="checkbox"
                        name="fuenteSonora"
                        value="otros"
                      />Otros
                    </Col>
                  </Row>

                </Col>
                <Col>

                  <Label for="examplePassword">Potencia del Equipo</Label>
                  <Input
                    id="eidPotencia"
                    name="potencia"
                    placeholder="Potencia"
                    type="password"
                  />

                </Col>
                <Col>

                  <Label for="examplePassword">Número de parlantes</Label>
                  <Input
                    id="idNroParlantes"
                    name="parlantes"
                    placeholder="Parlantes"
                    type="password"
                  />

                </Col>
                <Col>
                  <Label for="exampleEmail">Propiedad</Label>
                  <Input id="idPropiedadParlantes" name="select" type="select">
                    <option id="1"> Propio </option>
                    <option id="2"> Alquiler </option>
                  </Input>
                </Col>
              </Row>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            RESULTADOS DE MONITOREO DE NIVEL DE PRESION SONORA
          </CardTitle>
          <CardBody>
            <Form>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Equipo Empleado</Label>
                    <Input
                      id="idEquipo"
                      name="equipo"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Marca</Label>
                    <Input
                      id="idMarca"
                      name="marca"
                      placeholder="password placeholder"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Modelo</Label>
                    <Input
                      id="idModelo"
                      name="modelo"
                      placeholder="password placeholder"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Número de Serie</Label>
                    <Input
                      id="idSerie"
                      name="Serie"
                      placeholder="with a placeholder"
                      type="number"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Clase</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="text"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Fecha de Calibración</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Titular del Equipo</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Fecha de Ensayo</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
{/*        <DragAndDrop/>*/}
      </Col>
    </Row>

  );
};

export default Forms;
