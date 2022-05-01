import { Button, Table, Tag } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import StatusModal from "../StatusModal/StatusModal";

const TableJobs = () => {
  const { data } = useSelector((state) => state.application);
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  const handleUpdate = () => {
    handleVisible();
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Resume",
      dataIndex: "resume",
      key: "resume",
    },
    {
      title: "Mobile Number",
      dataIndex: "mobileNumber",
      key: "mobileNumber",
    },
    {
      title: "Email Id",
      dataIndex: "emailId",
      key: "emailId",
    },
    {
      title: "Academic Info",
      dataIndex: "acadInfo",
      key: "acadInfo",
    },

    {
      title: "Professional Experience",
      dataIndex: "professionalExperience",
      key: "professionalExperience",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (tags) => (
        <>
          <Tag
            color={
              tags === "accepted"
                ? "green"
                : tags === "decline"
                ? "red"
                : "blue"
            }
          >
            {tags.toUpperCase()}
          </Tag>
        </>
      ),
    },
    {
      title: "Action",
      key: "Action",
      render: (data) => (
        <Button onClick={() => handleUpdate(data)}>Update</Button>
      ),
    },
  ];

  return (
    <>
      <StatusModal visible={visible} handleCancel={handleVisible} />
      <div style={{ overflowX: "scroll", overflowY: "hidden", width: "100%" }}>
        <Table style={{ width: "100%" }} dataSource={data} columns={columns} />
      </div>
    </>
  );
};

export default TableJobs;
