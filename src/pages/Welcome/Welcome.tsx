/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Row, Col, Button } from "antd";
import { useContext } from "react";
import { useHistory } from "react-router";
import PlanetsContext from "../../contexts/planets";

import "./Welcome.scss";

export const Welcome = () => {
  const { setState: setGlobalState } = useContext(PlanetsContext);

  const history = useHistory();

  return (
    <Row className="Welcome">
      <Row className="introductionRow">
        <Col span={24} className="introductionCol">
          Are you looking for a planet to move to? I have a list that can help
          you!
        </Col>
      </Row>
      <Row className="welcomeButtonRow">
        <Button
          className="welcomeButton"
          onClick={() => history.push("/planets-table")}
        >
          Show me the planets
        </Button>
      </Row>
    </Row>
  );
};
