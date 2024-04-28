import { Layout } from "antd";
import "./App.css";
import { Apphome } from "./component/view/home";
import { TechHeader } from "./component/common/header";
import { Footer } from "antd/es/layout/layout";
import { TechFooter } from "./component/common/Footer";
import { Test } from "./test";
import { useEffect } from "react";
const { Header, Content } = Layout;

function App() {
  useEffect(() => {
    const stars = () => {
      const e = document.createElement("div");
      e.className = "star";
      // e.innerHTML = "⭐";
      e.style.zIndex = "0";
      document.body.appendChild(e);
      e.style.left = Math.random() * window.innerWidth + "px";
      const size = Math.random() * 12;
      e.style.fontSize = 12 + size + "px";
      setTimeout(() => {
        document.body.removeChild(e);
      }, 10000);
    };

    setInterval(() => {
      stars();
    }, 100);
  }, []);
  return (
    <>
      {/* <Layout className="mainLayout">
        <Header style={{ position: "sticky", top: 0 }}>
          <TechHeader />
        </Header>
        <Content>
          <Apphome />
        </Content>
        <Footer>
          <TechFooter />
        </Footer>
      </Layout> */}
      <Test />
    </>
  );
}

export default App;
