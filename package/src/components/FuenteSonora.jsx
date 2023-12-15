import React from 'react'
import { useState } from 'react';
import {Card,Row,Col,CardTitle,CardBody,Button,Form,FormGroup,Label,Input,FormText,} from "reactstrap";
import DragAndDrop from './DragAndDrop';

function handleChange(valor) {
  let mensaje;
  let dato;
  dato = valor;
  mensaje = 'Hola';
  alert(mensaje + ' ' +dato);
}

const fuenteSonora = () => {
  return (
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
                  <Input type="checkbox" name="fuenteSonora" value="amplificacion" />Amplificación
                </Col>
                <Col>
                  <Input type="checkbox" name="fuenteSonora" value="conjunto" />Conjuntos en vivo
                </Col>
                <Col>
                  <Input type="checkbox" name="fuenteSonora" value="otros" />Otros
                </Col>
              </Row>
            </Col>
            <Col>
              <Label for="examplePassword">Potencia del Equipo</Label>
              <Input id="eidPotencia" name="potencia" placeholder="Potencia" type="number" />
            </Col>
            <Col>
              <Label for="examplePassword">Número de parlantes</Label>
              <Input id="idNroParlantes" name="parlantes" placeholder="Parlantes" type="number" />
            </Col>
            <Col>
              <Label for="exampleEmail">Propiedad</Label>
              <Input id="idPropiedadParlantes" name="select" type="select">
                <option id="1"> Propio </option>
                <option id="2"> Alquiler </option>
              </Input>
            </Col>
            <Col>
            <DragAndDrop/>
            </Col>
          </Row>

          <Button onClick={handleChange(54)}> Guardar </Button>
        </Form>
      </CardBody>
    </Card>
  )
}

export default fuenteSonora;