import { Col, Row, Table } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { ColapseFilterButtons } from "../../components/ColapseFilterButtons/ColapseFilterButtons";
import { Filter } from "../../components/Filter/Filter";
import PlanetsContext from "../../contexts/planets";
import { getPlanets } from "../../services/planetList.api";

import "./planetsTable.scss";

export const PlanetsTable = () => {
  const { state, setState } = useContext(PlanetsContext);
  const { setState: setGlobalState } = useContext(PlanetsContext);

  useEffect(() => {
    async function fetchPlanets() {
      const response = await getPlanets.getPlanets();
      setGlobalState(response.data);
    }

    fetchPlanets();
  }, [setGlobalState]);

  const [filterIsOpen, setFilterIsOpen] = useState(false);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Rotation Period",
      dataIndex: "rotation_period",
      key: "rotation_period",
    },
    {
      title: "Orbital Period",
      dataIndex: "orbital_period",
      key: "orbital_period",
    },
    {
      title: "Diameter",
      dataIndex: "diameter",
      key: "diameter",
    },
    {
      title: "Climate",
      dataIndex: "climate",
      key: "climate",
    },
    {
      title: "Gravity",
      dataIndex: "gravity",
      key: "gravity",
    },
    {
      title: "Terrain",
      dataIndex: "terrain",
      key: "terrain",
    },
    {
      title: "Surface Water",
      dataIndex: "surface_water",
      key: "surface_water",
    },
    {
      title: "Population",
      dataIndex: "population",
      key: "population",
    },
    {
      title: "Films",
      dataIndex: "films",
      key: "films",
    },
    {
      title: "Created",
      dataIndex: "created",
      key: "created",
    },
    {
      title: "Edited",
      dataIndex: "edited",
      key: "edited",
    },
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
    },
  ];

  const returnDataSource = () => {
    if (state.filterResults) {
      return state.filterResults;
    }
    return state.results;
  };

  return (
    <Row className="PlanetsTable">
      <Row className="buttons-filters" justify="end">
        <ColapseFilterButtons
          onToggle={() => setFilterIsOpen((prevstate) => !filterIsOpen)}
          openedFilter={!filterIsOpen}
        />
      </Row>
      <Row className="filter-collapse-area">
        <Col span={12}>
          <Filter openedFilter={filterIsOpen} />
        </Col>
      </Row>
      <Row className="tableRow">
        <Col className="tableCol" span={24}>
          <Table
            className="tableComponent"
            columns={columns}
            dataSource={returnDataSource()}
            pagination={false}
          />
        </Col>
      </Row>
    </Row>
  );
};
