import {
  ThunderboltFilled,
  FacebookFilled,
  InstagramFilled,
  TwitterSquareFilled,
  LinkedinFilled,
  ArrowUpOutlined,
} from "@ant-design/icons";
import "./common.css";
import { FloatButton } from "antd";
export const TechFooter = () => {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo" style={{ width: "100%" }}>
          <ThunderboltFilled
            style={{ color: "#1890ff", padding: "0 4px", fontSize: "28px" }}
          />
          Tech
        </div>
        <ul className="socials">
          <li>
            {" "}
            <a href="">
              {" "}
              <FacebookFilled />
            </a>
          </li>
          <li>
            {" "}
            <a href="">
              {" "}
              <InstagramFilled />
            </a>
          </li>
          <li>
            {" "}
            <a href="">
              {" "}
              <TwitterSquareFilled />
            </a>
          </li>
          <li>
            {" "}
            <a href="">
              {" "}
              <LinkedinFilled />
            </a>
          </li>
        </ul>
        <p className="copyright">copyright &copy; 2024</p>
        <div className="gotop">
      
          <FloatButton.BackTop
            type="primary "
            icon={<ArrowUpOutlined />}
            style={{
              right: 40,
            }}
          />
        </div>
      </div>
    </div>
  );
};
