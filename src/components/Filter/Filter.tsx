import React, { useContext, useRef, useState } from "react";
import { Input, Button, Col, Row, Collapse, Select } from "antd";
import PlanetsContext from "../../contexts/planets";
import "antd/dist/antd.css";
import "./Filter.scss";

interface IFilter {
  openedFilter: boolean;
}

export const Filter: React.FC<IFilter> = ({ openedFilter }: IFilter) => {
  const filterFormRef = useRef(null);
  const [previousColumn, setPreviousColumn] = useState<string>("");
  const [column, setColumn] = useState<string[]>([]);
  const [previousComparison, setPreviousComparison] = useState<string>("");
  const [comparison, setComparison] = useState("");
  const [previousValue, setPreviousValue] = useState<string>();
  const [value, setValue] = useState("");
  const { state, setState } = useContext(PlanetsContext);

  const clearFilterForm = () => {
    setState({
      ...state,
      filterResults: [],
      filterNumericResults: { column: "", comparison: "", value: undefined },
    });
  };

  const returnNewDataSource = (type: string, value: any) => {
    const search = value.toLowerCase();

    switch (type) {
      case "name":
        {
          const nameResults = state.results.filter((item) =>
            item.name.toLowerCase().includes(search)
          );

          setState({ ...state, filterResults: nameResults });
        }
        break;
      case "climate":
        {
          const climateResults = state.results.filter((item) =>
            item.climate.toLowerCase().includes(search)
          );

          setState({ ...state, filterResults: climateResults });
        }
        break;
      case "gravity":
        {
          const gravityResults = state.results.filter((item) =>
            item.gravity.toLowerCase().includes(search)
          );

          setState({ ...state, filterResults: gravityResults });
        }
        break;
      case "terrain":
        {
          const terrainResults = state.results.filter((item) =>
            item.terrain.toLowerCase().includes(search)
          );

          setState({ ...state, filterResults: terrainResults });
        }
        break;
      case "films":
        {
          const filmsResults = state.results.filter((item) =>
            item.films.find((x) => x.toLowerCase().includes(search))
          );

          setState({ ...state, filterResults: filmsResults });
        }
        break;
      case "created":
        {
          const createdResults = state.results.filter((item) =>
            item.created.toLowerCase().includes(search)
          );

          setState({ ...state, filterResults: createdResults });
        }
        break;
      case "edited":
        {
          const editedResults = state.results.filter((item) =>
            item.edited.toLowerCase().includes(search)
          );

          setState({ ...state, filterResults: editedResults });
        }
        break;
      case "url":
        {
          const urlResults = state.results.filter((item) =>
            item.url.toLowerCase().includes(search)
          );

          setState({ ...state, filterResults: urlResults });
        }
        break;

      default:
        break;
    }

    console.log(state.filterResults);
  };

  const setColumnFields = (value: string) => {
    setPreviousColumn(value);
    const newColumnArray = column.push(value);

    console.log(newColumnArray);
  };

  const setComparisonFields = (value: string) => {
    setPreviousComparison(value);
  };

  const setValuesFields = (value: string) => {
    setPreviousValue(value);
  };

  const generateNumericFilterFields = () => {
    if (previousColumn && previousComparison && previousValue) {
      return (
        <Row className="selectorsRow">
          <Col style={{ display: "flex" }}>
            <Select
              className="selectClassname"
              placeholder="Select an option"
              onChange={(value: string) => setColumnFields(value)}
            >
              <Select.Option
                className="selectOptionClassname"
                value="population"
              >
                Population
              </Select.Option>
              <Select.Option
                className="selectOptionClassname"
                value="orbital_period"
              >
                Orbital Period
              </Select.Option>
              <Select.Option className="selectOptionClassname" value="diameter">
                Diameter
              </Select.Option>
              <Select.Option
                className="selectOptionClassname"
                value="surface_period"
              >
                Surface Period
              </Select.Option>
              <Select.Option
                className="selectOptionClassname"
                value="rotation_period"
              >
                Rotation Period
              </Select.Option>
            </Select>
          </Col>
          <Col style={{ display: "flex" }}>
            <Select
              className="selectClassname"
              placeholder="Select a comparison"
              onChange={(value: string) => setComparisonFields(value)}
              style={{ width: 200, zIndex: 5 }}
            >
              <Select.Option className="selectOptionClassname" value="bigger">
                Bigger than
              </Select.Option>
              <Select.Option className="selectOptionClassname" value="smaller">
                Smaller than
              </Select.Option>
              <Select.Option className="selectOptionClassname" value="equal">
                Equal to
              </Select.Option>
            </Select>
          </Col>
          <Col style={{ display: "flex" }}>
            <Input
              placeholder="For what value?"
              onChange={(e) => setValuesFields(e.target.value)}
              defaultValue=""
            />
          </Col>
        </Row>
      );
    }
  };
  const generateFilterFields = () => {
    return (
      <>
        <Row className="inputsRow">
          <Col style={{ display: "flex", marginBottom: "1em" }}>
            <Input
              placeholder="Name"
              style={{ marginRight: "0.5em" }}
              onChange={(e) => returnNewDataSource("name", e.target.value)}
            />
            <Input
              placeholder="Climate"
              allowClear
              style={{ marginRight: "0.5em" }}
              onChange={(e) => returnNewDataSource("climate", e.target.value)}
            />
            <Input
              placeholder="Gravity"
              style={{ marginRight: "0.5em" }}
              onChange={(e) => returnNewDataSource("gravity", e.target.value)}
            />
            <Input
              placeholder="Terrain"
              onChange={(e) => returnNewDataSource("terrain", e.target.value)}
            />
          </Col>
        </Row>
        <Row className="inputsRow">
          <Col style={{ display: "flex" }}>
            <Input
              placeholder="Films"
              style={{ marginRight: "0.5em" }}
              onChange={(e) => returnNewDataSource("films", e.target.value)}
            />
            <Input
              placeholder="Created"
              style={{ marginRight: "0.5em" }}
              onChange={(e) => returnNewDataSource("created", e.target.value)}
            />
            <Input
              placeholder="Edited"
              style={{ marginRight: "0.5em" }}
              onChange={(e) => returnNewDataSource("edited", e.target.value)}
            />
            <Input
              placeholder="URL"
              onChange={(e) => returnNewDataSource("url", e.target.value)}
            />
          </Col>
        </Row>
        <Row className="selectorsRow">
          <Col style={{ display: "flex" }}>
            <Select
              className="selectClassname"
              placeholder="Select an option"
              onChange={(value: string) => setColumnFields(value)}
            >
              <Select.Option
                className="selectOptionClassname"
                value="population"
              >
                Population
              </Select.Option>
              <Select.Option
                className="selectOptionClassname"
                value="orbital_period"
              >
                Orbital Period
              </Select.Option>
              <Select.Option className="selectOptionClassname" value="diameter">
                Diameter
              </Select.Option>
              <Select.Option
                className="selectOptionClassname"
                value="surface_period"
              >
                Surface Period
              </Select.Option>
              <Select.Option
                className="selectOptionClassname"
                value="rotation_period"
              >
                Rotation Period
              </Select.Option>
            </Select>
          </Col>
          <Col style={{ display: "flex" }}>
            <Select
              className="selectClassname"
              placeholder="Select a comparison"
              onChange={(value: string) => setComparisonFields(value)}
              style={{ width: 200, zIndex: 5 }}
            >
              <Select.Option className="selectOptionClassname" value="bigger">
                Bigger than
              </Select.Option>
              <Select.Option className="selectOptionClassname" value="smaller">
                Smaller than
              </Select.Option>
              <Select.Option className="selectOptionClassname" value="equal">
                Equal to
              </Select.Option>
            </Select>
          </Col>
          <Col style={{ display: "flex" }}>
            <Input
              placeholder="For what value?"
              onChange={(e) => setValuesFields(e.target.value)}
            />
          </Col>
        </Row>
        {generateNumericFilterFields()}
      </>
    );
  };

  return (
    <Collapse
      bordered={false}
      activeKey={openedFilter ? "1" : ""}
      className="Filter"
    >
      <Collapse.Panel
        key="1"
        showArrow={false}
        header=""
        id="filter-collapse-panel"
      >
        <Row className="filterForm" ref={filterFormRef}>
          {generateFilterFields()}
        </Row>
        <Row className="filterButtonRow">
          <Col span={7} className="filterButtonCol">
            <Button
              className="filterClearButton"
              type="link"
              onClick={() => clearFilterForm()}
            >
              Clean
            </Button>
          </Col>
          <Col span={12}>
            <Button
              shape="round"
              className="filterButton"
              onClick={() => console.log(column, comparison, value)}
            >
              Filter
            </Button>
          </Col>
        </Row>
      </Collapse.Panel>
    </Collapse>
  );
};
