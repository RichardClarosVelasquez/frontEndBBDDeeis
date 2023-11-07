import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import { useState } from "react";


const Forms = () => {
  
  var controlador = 1;
  const tipodepersona = () => {
    var controlador = 0;
  };

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
                <Label for = "exampleSelect">Tipo de persona</Label>
                <Input id = "exampleSelect" name="select" type="select" onChange = {tipodepersona}>
                  <option id = "1"> Natural </option>                                                
                  <option id = "2"> Juridico </option>
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
                <Label for = "exampleSelect">Documento de identidad</Label>
                <Input id = "exampleSelect" name="select" type="select" onChange = {tipodepersona}>
                  <option id = "1"> CI </option>                                                
                  <option id = "2"> RUN </option>
                  <option id = "1"> PASAPORTE </option>                                                
                  <option id = "2"> CARNET DE EXTRANJERO </option>
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
                <Label for = "exampleSelect">Lugar</Label>
                <Input id = "exampleSelect" name="select" type="select" onChange = {tipodepersona}>
                  <option id = "1"> Avenida </option>                                                
                  <option id = "2"> Calle </option>
                  <option id = "1"> Pasaje </option>                                                
                  <option id = "2"> Plaza </option>
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
            <FormGroup>
                <Label for="exampleSelect">Estado</Label>
                <Input id="exampleSelect" name="select" type="select">
                  <option>Proyecto</option>
                  <option>En operación</option>
                </Input>
              </FormGroup>              
              <FormGroup>
                <Label for="exampleEmail">Días de mayor afluencia</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
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
              <FormGroup>
                <Label for="examplePassword">Nombre o Razon Social</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Subalcaldía</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                />
              </FormGroup>              
              <FormGroup>
                <Label for="exampleEmail">Zona</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
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
              <FormGroup>
                <Label for="exampleEmail">Numero</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Edificio</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup> 
              <FormGroup>
                <Label for="exampleEmail">Bloque</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup> 
              <FormGroup>
                <Label for="exampleEmail">Piso</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Dpto/Oficina/Local N°</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Entre calles:</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>              
              <FormGroup>
                <Label for="exampleEmail">Telefono</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Horario de atención</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
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
            <FormGroup>
                <Label for="exampleSelect">E establecimiento es</Label>
                <Input id="exampleSelect" name="select" type="select">
                  <option>Propio</option>
                  <option>Alquilado</option>
                  <option>Anticretico</option>
                  <option>Otro</option>
                </Input>
              </FormGroup>              
              <FormGroup>
                <Label for="exampleEmail">Niveles</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Superficie Interior en m2</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Altura Interior en m2</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                />
              </FormGroup>              
              <FormGroup>
                <Label for="exampleEmail">Volumen en m3</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Coordenada Norte</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Coordenada Este</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
              <Button>Submit</Button>
            </Form>         
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
