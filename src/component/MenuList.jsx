import { Menu } from "antd";
import {
  HomeFilled,
  AppstoreAddOutlined,
  AreaChartOutlined,
  FireFilled,
  BarsOutlined
} from "@ant-design/icons";

const MenuList = ({ lightTheme }) => {
  return (
    <Menu
      theme={lightTheme ? "light" : "dark"}
      mode="inline"
      className="menu-bar"
    >
      <Menu.Item key="home" icon={<HomeFilled />}>
        Home
      </Menu.Item>

      <Menu.Item key="students" icon={<AppstoreAddOutlined />}>
        Studentsdata
      </Menu.Item>

      <Menu.SubMenu key="semaster" icon={<BarsOutlined />} title="Semaster">
        <Menu.Item key="mid-1">Mid-1</Menu.Item>
        <Menu.Item key="end-2">End-2</Menu.Item>

        <Menu.SubMenu
          key="subtests"
          icon={<BarsOutlined />}
          title="Assignments"
        >
          <Menu.Item key="subtest-1">Assignment 1</Menu.Item>
          <Menu.Item key="subtest-2">Assignment 2</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>

      <Menu.Item key="studentsdata" icon={<FireFilled />}>
        Studentsdata
      </Menu.Item>

      <Menu.Item key="documents" icon={<AreaChartOutlined />}>
        Documents
      </Menu.Item>

      <Menu.Item key="reports" icon={<AreaChartOutlined />}>
        Reports
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
