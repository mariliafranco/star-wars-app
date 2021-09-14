import { Col, Row } from 'antd'
import React, { Fragment } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom'

export const Container = () => {
    return (
        <Fragment>
        <BrowserRouter>
        <Row>
            <Col>
            <Row>
                <Switch>
                    <Redirect from="/" to='/welcome' exact />
                    <Route path='/planets-table'></Route>
                </Switch>
            </Row>
            </Col>
        </Row>
        </BrowserRouter>
        </Fragment>
    )
}