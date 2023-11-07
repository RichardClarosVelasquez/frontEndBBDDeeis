import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";

const About = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Sobre El sistema para Estudios de Evaluación de Impacto Sonoro
          </CardTitle>
          <CardBody className="p-4">
            <Row >
              <Col lg="8">
                <h2 className="mt-4">Estudio de Evaluación de Impacto Sonoro</h2>
                <h5 className=" mb-4">
                  El SI6 es el primer sistema digital para Documentos Ambientales dentro de la Dirección de Prevencón y Control Ambiental, para ayudar a la población a agilizar los procesos y reducir la burocracia, además que ahorramos papel pues choy!
                </h5>
                <img
                  src = "https://scontent.flpb2-2.fna.fbcdn.net/v/t39.30808-6/368836231_616294690641139_7698768102029836981_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=bi-xJBv_Q5oAX-WLSmD&_nc_ht=scontent.flpb2-2.fna&oh=00_AfDc8k8ewo1gCCM3quEuaQoltSaQ1b36FES_XA3YFr8jvQ&oe=64EACD4A"
                  alt="my"
                  width="800"
                  height="400"
                />
                <br />
                <Button
                  className="mt-3"
                  color="primary"
                  href="https://wrappixel.com/templates/materialpro-react-admin/?ref=33"
                  target="_blank"
                >
                  Ir a la página oficial
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
