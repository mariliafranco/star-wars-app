import { Col, Row } from "antd";
import { Fragment } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { PlanetsTable } from "../PlanetsTable/PlanetsTable";
import { Welcome } from "../Welcome/Welcome";

import "./Container.scss";

export const Container = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Row id="overflow-row" className="overflow-row">
          <Col span={24}>
            <Row id="content-row" className="content-row">
              <Switch>
                <Redirect from="/" to="/welcome" exact />
                <Route path="/welcome" component={Welcome} />
                <Route path="/planets-table" component={PlanetsTable}></Route>
              </Switch>
            </Row>
          </Col>
        </Row>
      </BrowserRouter>
    </Fragment>
  );
};
