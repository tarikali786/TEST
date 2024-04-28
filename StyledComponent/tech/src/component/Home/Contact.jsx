import { TechButton, TechHeading } from "../Styled/StyledComponent";
import { Form, Input } from "antd";
import { ContactItems } from "../data/data";
import TextArea from "antd/es/input/TextArea";
export const Contact = () => {
  return (
    <div id="contact" className="block .contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <TechHeading>Get in Touch</TechHeading>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          style={{ width: "80%", margin: "0 auto" }}
        >
          {ContactItems.map((item) => (
            <Form.Item
              key={item.key}
              name={item.name}
              rules={[
                {
                  required: true,
                  message: `Please input your ${item.name}`,
                },
              ]}
            >
              <Input prefix={item.prefix} placeholder={item.placeholder} />
            </Form.Item>
          ))}

          <Form.Item
            key={"message"}
            name={"message"}
            rules={[
              {
                required: true,
                message: `Please input your message`,
              },
            ]}
          >
            <TextArea placeholder={"Please Enter Your Message"} />
          </Form.Item>

          <Form.Item>
            <TechButton primary htmlType="submit">
              Submit
            </TechButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
