import React from "react";
import { render } from "react-dom";
import { withFormik } from "formik";
import PipelineJobOrError from "../../Pipelines/PipelineJobOrError";
import PipelineCancelOrError from "../../Pipelines/PipelineCancelOrError";

/**
 *
 * @param {*} props
 * For object which takes pipeline ID as input
 */
const StatusForm = (props) => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    dirty,
  } = props;
  return (
    <form className="pb-1" onSubmit={handleSubmit}>
      <div className="form-group pt-2">
        <label htmlFor="status_id" style={{ display: "block" }}>
          <span className="h6 font-weight-bold">Pipeline ID</span>
        </label>
        <input
          id="status_id"
          placeholder="Enter pipeline ID"
          type="text"
          value={values.status_id}
          onChange={handleChange}
          onBlur={handleBlur}
          className={
            errors.status_id && touched.status_id
              ? "text-input form-control error"
              : "text-input form-control "
          }
        />
        {errors.status_id && touched.status_id && (
          <div className="input-feedback">{errors.status_id}</div>
        )}
      </div>
      <div className="float-right">
        <button
          type="button"
          className="outline btn btn-sm"
          onClick={handleReset}
          disabled={!dirty || isSubmitting}
        >
          Reset
        </button>
        <button
          className="btn btn-sm btn-dark"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const StatusFormExpanded = withFormik({
  mapPropsToValues: () => ({ status_id: "" }),

  // Custom sync validation
  validate: (values) => {
    let errors = {};
    if (!values.status_id) {
      errors.status_id = "Required";
    } else if (!/^[a-zA-Z0-9-_]+$/i.test(values.status_id)) {
      errors.status_id = "Invalid pipeline ID";
    }
    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      /* here we handle the submission of the id */
      /* a function will return a piple if the result is found - however, for demo we only accept a list of ids */
      render(
        <PipelineJobOrError id={values.status_id} />,
        document.getElementById("graph-status-result")
      );
      setSubmitting(false);
    }, 1000);
  },
})(StatusForm);

export default StatusFormExpanded;
