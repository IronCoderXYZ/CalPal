import React from 'react';
import {
  Row,
  Col,
  Card,
  Alert,
  Button,
  CardText,
  CardBody,
  CardTitle,
  Container,
  CardSubtitle,
  Table
} from 'reactstrap';

export default ({ viewIndex, consumed, goal, onClickGoal, onClickFoods }) => (
  <Col sm="12" className="">
    <Card className="text-dark text-center my-3">
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div onClick={onClickGoal}>
          <p className="overview-subtitle">Target Goal:</p>
          <p className="overview-subtitle">{`${goal} kCal`}</p>
        </div>
        <div>
          <p className="overview-subtitle">Consumed:</p>
          <p className="overview-subtitle">{`${consumed} kCal`}</p>
        </div>
      </div>
    </Card>
  </Col>
);
