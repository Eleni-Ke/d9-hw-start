import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";

const Favorites = () => {
  let favorites = useSelector((state) => state.favorites.content);

  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col>
          <ul></ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Favorites;
