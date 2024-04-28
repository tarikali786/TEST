import { Button, Modal } from "antd";
import { useState } from "react";
import { PlayCircleFilled } from "@ant-design/icons";
export const Work = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div id="works" className="block worksBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>How it Works</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <Button
          onClick={showModal}
          type="primary"
          style={{
            backgroundColor: "transparent",
                margin: "0 auto",
                width:"100%"
          }}
        >
          <PlayCircleFilled style={{ fontSize: "80px", color: "#1890ff" }} />
        </Button>

        <Modal
          footer={null}
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <iframe
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/DxNu1tVksqM"
            title="Welcome Tech"
            allowfullscreen
          ></iframe>
        </Modal>
      </div>
    </div>
  );
};
