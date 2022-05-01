import { Input, Modal } from "antd";
import { Formik } from "formik";
import React from "react";
import style from "./ApplicationModal.module.css";

const ApplicationModal = (props) => {
  const { visible, handleCancel } = props;

  const handleValidate = (values) => {
    const errors = {};
    if (!values.emailId) {
      errors.emailId = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailId)
    ) {
      errors.emailId = "Invalid email address";
    }
    if (!values.mobileNumber) {
      errors.mobileNumber = "Required";
    }
    if (!values.acadInfo) {
      errors.acadInfo = "Required";
    }
    if (!values.professionalExperience) {
      errors.professionalExperience = "Required";
    }
    if (!values.name) {
      errors.name = "Required";
    }
    return errors;
  };

  const handleOnSubmit = (values) => {
    console.log(values);
  };

  return (
    <Modal
      title="Add Job Application"
      footer={null}
      onCancel={handleCancel}
      visible={visible}
    >
      <Formik
        validate={handleValidate}
        onSubmit={handleOnSubmit}
        initialValues={{ name: "" }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form action="" onSubmit={handleSubmit} className={style.form}>
            <label htmlFor="">Name:</label>
            <Input
              name="name"
              onChange={handleChange}
              value={values.name}
              type="text"
              className={errors.name ? style.errorInput : null}
              placeholder="Enter Name."
            />
            <label htmlFor="">Resume:</label>
            <Input
              name="resume"
              value={values.resume}
              onChange={handleChange}
              type="file"
            />
            <label htmlFor="">Mobile Number</label>
            <Input
              name="mobileNumber"
              onChange={handleChange}
              value={values.mobileNumber}
              type="number"
              className={errors.mobileNumber ? style.errorInput : null}
              placeholder="Enter Mobile Number."
            />
            <label htmlFor="">Email Id:</label>
            <Input
              name="emailId"
              onChange={handleChange}
              value={values.emailId}
              type="text"
              className={errors.emailId ? style.errorInput : null}
              placeholder="Enter Email Id."
            />
            <label htmlFor="">Academic Info</label>
            <Input
              name="acadInfo"
              onChange={handleChange}
              value={values.acadInfo}
              type="text"
              className={errors.acadInfo ? style.errorInput : null}
              placeholder="Enter Academic Info."
            />
            <label htmlFor="">Professional Experience:</label>
            <Input
              name="professionalExperience"
              onChange={handleChange}
              value={values.professionalExperience}
              className={
                errors.professionalExperience ? style.errorInput : null
              }
              type="text"
              placeholder="Enter Professional Experience."
            />
            <div className={style.button}>
              <button type="submit" onClick={handleSubmit}>
                Apply
              </button>
            </div>
          </form>
        )}
      </Formik>
    </Modal>
  );
};

export default ApplicationModal;
