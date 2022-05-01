import { Button, Table, Tag } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const TableJobs = () => {
  const { data } = useSelector((state) => state.application);
  const handleUpdate = () => {};

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
          <Tag color={"green"}>{tags.toUpperCase()}</Tag>
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
    <Table style={{ width: "100%" }} dataSource={data} columns={columns} />
  );
};

export default TableJobs;
