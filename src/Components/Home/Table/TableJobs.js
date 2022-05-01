import { Button, Table, Tag } from "antd";
import React from "react";

const TableJobs = () => {
  const handleUpdate = () => {};

  const dataSource = [
    {
      name: "Akshit Gupta",
      resume: "Test",
      mobileNumber: "7877553148",
      emailId: "gakshit92@gmail.com",
      acadInfo: "2nd year IIT Roorkee",
      professionalExperience: "2 yrs",
      status: "applied",
    },
  ];

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
        <Button onClick={() => console.log(data)}>Update</Button>
      ),
    },
  ];

  return (
    <Table
      style={{ width: "100%" }}
      dataSource={dataSource}
      columns={columns}
    />
  );
};

export default TableJobs;
