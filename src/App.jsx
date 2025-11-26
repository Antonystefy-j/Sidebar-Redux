import "./App.css";
import { useState } from "react";
import { Button, Layout, theme } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Logo from "./component/Logo";
import MenuList from "./component/MenuList";
import ToggleThemeButton from "./component/ToggleThemeButton";

const { Header, Sider } = Layout;

function App() {
  const [lightTheme, setLightTheme] = useState(true);
  const [collaped, setcollapsed] = useState(false);

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        collapsed={collaped}
        collapsible
        trigger={null}
        theme={lightTheme ? "light" : "dark"}
        className="sidebar"
      >
        <Logo />
        <MenuList lightTheme={lightTheme} />

        <ToggleThemeButton lightTheme={lightTheme} toggleTheme={toggleTheme} />
      </Sider>

      <Layout>
        {/* FIXED HEADER */}
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            className="toggle"
            onClick={() => setcollapsed(!collaped)}
          >
            {collaped ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </Header>
      </Layout>
    </Layout>
  );
}

export default App;
