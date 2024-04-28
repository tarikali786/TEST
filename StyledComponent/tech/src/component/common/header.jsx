import { ThunderboltFilled, MenuOutlined } from "@ant-design/icons";
import styled from "styled-components";
import "./common.css";
import { Button, Drawer, Flex, Radio, Space } from "antd";
import { Anchor } from "antd";
import { useState } from "react";
const { Link } = Anchor;

const HeaderWrappper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 15px;
`;
export const TechHeader = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <HeaderWrappper>
        <div className="header" style={{ width: "100%" }}>
          <div className="logo" style={{ width: "100%" }}>
            <ThunderboltFilled
              style={{ color: "#1890ff", padding: "0 4px", fontSize: "28px" }}
            />
            Tech
          </div>
          <div className="mobileHidden">
            <Anchor targetOffset={"65"}>
              <Link href="#hero" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#feature" title="Features" />
              <Link href="#works" title="How it works" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </div>
          <div className="mobileVisible">
            <Button type="primary" onClick={showDrawer} style={{display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%", width:"40px", height:"40px"}}>
              <MenuOutlined />
            </Button>
            <Drawer
              placement={"right"}
              width={500}
              onClose={onClose}
              open={open}
            >
              <Anchor targetOffset={"65"}>
                <Link href="#hero" title="Home" />
                <Link href="#about" title="About" />
                <Link href="#feature" title="Features" />
                <Link href="#works" title="How it works" />
                <Link href="#faq" title="FAQ" />
                <Link href="#pricing" title="Pricing" />
                <Link href="#contact" title="Contact" />
              </Anchor>
            </Drawer>
          </div>
        </div>
      </HeaderWrappper>
    </>
  );
};
