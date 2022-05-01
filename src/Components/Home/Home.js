import React from "react";
import style from "./Home.module.css";
import Card from "../../HelperComponents/Card/Card";
import { GrAddCircle } from "react-icons/gr";
import TableJobs from "./Table/TableJobs";

const Home = () => {
  const handleVisible = () => {};

  return (
    <div className={style.bodyStructure}>
      <Card onClick={handleVisible} style={{ width: "inherit" }}>
        <div className={style.createPost}>
          <GrAddCircle style={{ width: 24, height: 24, marginRight: 12 }} />
          <b>Add Job Application</b>
        </div>
      </Card>
      <Card>
        <TableJobs />
      </Card>
    </div>
  );
};

export default Home;
