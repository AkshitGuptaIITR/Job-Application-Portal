import { Button, Modal } from "antd";
import React from "react";
import style from "./StatusModal.module.css";

const StatusModal = (props) => {
  const { visible, handleCancel } = props;

  return (
    <Modal
      visible={visible}
      onCancel={handleCancel}
      title="Status Change."
      footer={null}
    >
      <div className={style.structure}>
        <Button type="primary">Accept</Button>
        <Button>Decline</Button>
      </div>
    </Modal>
  );
};

export default StatusModal;
