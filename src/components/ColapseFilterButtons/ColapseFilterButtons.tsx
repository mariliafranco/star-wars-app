import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Col } from "antd";
import React from "react";

interface IShowFiltersButton {
  openedFilter: boolean;
  onToggle: () => void;
  offset?: number;
}

export const ColapseFilterButtons: React.FC<IShowFiltersButton> = ({
  openedFilter,
  onToggle,
  offset,
}: IShowFiltersButton) => {
  if (openedFilter) {
    return (
      <Col span={3} offset={offset} className="ShowFiltersButton">
        <Button
          id="filter-button"
          name="openFilterButton"
          type="link"
          onClick={onToggle}
          className="buttonFilter"
        >
          Open Filter
          <DownOutlined style={{ marginLeft: "1em", marginTop: "0.3em" }} />
        </Button>
      </Col>
    );
  }
  return (
    <Col span={3} offset={offset} className="ShowFiltersButton">
      <Button
        name="closeFilterButton"
        type="link"
        onClick={onToggle}
        className="buttonFilter"
      >
        Close Filter
        <UpOutlined style={{ marginLeft: "1em", marginTop: "0.3em" }} />
      </Button>
    </Col>
  );
};
