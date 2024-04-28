import { Carousel } from "antd";
import "./Hero.css";
import { Carouselitems } from "../data/data";
import { TechButton, TechHeading } from "../Styled/StyledComponent";
import { DesktopOutlined } from "@ant-design/icons";
export const Hero = () => {
  return (
    <div id='hero' className="heroBlock">
      <Carousel autoplay>
        {Carouselitems.map((item) => (
          <div className="container-fluid " key="item.id">
            <div className="content">
              <TechHeading>{item.title}</TechHeading>
              <p>{item.content}</p>
              <div className="btnHolder">
              <TechButton primary>Learn More</TechButton>
              <TechButton  >
                <DesktopOutlined  style={{paddingRight:".4rem",fontSize:"22px"}}/>
                  Watch a Demo
               </TechButton>


              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
