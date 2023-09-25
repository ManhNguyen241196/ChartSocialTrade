import React from "react";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
import {
  DownOutlined,
  FallOutlined,
  GlobalOutlined,
  RiseOutlined,
  SortAscendingOutlined,
  UserOutlined,
} from "@ant-design/icons";
export default function Fillter() {
  const handleMenuClick = (e) => {
    message.info("Key ở console.log");
    console.log("click", e.key);
  };
  const items = [
    {
      label: "Tăng %",
      key: "1",
      icon: <RiseOutlined />,
    },
    {
      label: "Giảm %",
      key: "2",
      icon: <FallOutlined />,
    },
    {
      label: "Phổ biến",
      key: "3",
      icon: <GlobalOutlined />,
    },
    {
      label: "Tên",
      key: "4",
      icon: <SortAscendingOutlined />,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div className="fillter_container">
      <Space wrap>
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              <b>Fillter</b>
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Space>
    </div>
  );
}
