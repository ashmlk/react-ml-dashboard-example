import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import { Formik, useFormik, Form, FieldArray, Field, withFormik, FastField } from 'formik';
import Editor from "react-simple-code-editor";
import GraphQLQueryCode from './GraphQLQueryCode';
import GraphQLQuerySubmissionStatus from './GraphQLFormSubissionStatus';
import { object, string } from 'yup';


function getSubmissionResponse() {

  /* return random response from some CoolAPI() */
  const responses = [
    {
      status: "failed",
      message: "Name for character with ID 2423 was not found"
    },
    {
      status: "success",
      message: "Query was submitted successfully"
    },
    {
      status: "failed",
      message: "Name for character with ID 2423 was not found"
    },
  ]

  return (
    responses[Math.floor(Math.random() * responses.length)]
  )

}


const GraphQLQueryFormik = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;
  return (
    <div>
<form onSubmit={handleSubmit}>
      <div className="d-flex align-items-center mt-3 form-group d-flex">
        <label className="h6 mr-1 ds-text-sm" htmlFor="model" style={{ display: 'block' }}>
          Model:
        </label>
        <select
          name="model"
          value={values.model}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ display: 'inline-block', width:'auto' }}
          className="form-control form-control-sm"
        >
          
          <option value="" label="Select a model" />
          {
            values.modelList.map(m => (
              <option value={m} label={m} />
            ))
          }
        </select>
      </div>
      <div>
        <span className="ds-text-sm">
          {errors.model &&
          touched.model &&
          <div className="input-feedback">
            {errors.model}
        </div>}
        </span>
      </div>
      <div className="d-flex align-items-center form-group d-flex">
        <label className="h6 mr-1 ds-text-sm" htmlFor=" type" style={{ display: 'block' }}>
          Type:
        </label>
        <select
          name="type"
          value={values.type}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ display: 'block', width:'auto' }}
          className="form-control form-control-sm"
        >
          <option value="" label="Select a type" />
          <option value="query" label="query" />
          <option value="mutation" label="mutation" />
        </select>
        
      </div>
      <div>
        <span className="ds-text-sm">
        {errors.type &&
          touched.type &&
          <div className="input-feedback">
            {errors.type}
          </div>}
        </span>
      </div>
      <div className="card border ds-rounded-border bg-white my-2" style={{minHeight: '250px'}}>
          <GraphQLQueryCode />
      </div>  
      <div className="float-right">
          <button
              type="button"
              className="outline btn btn-sm mr-1"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
          >
              Reset
          </button>
          <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn btn-sm btn-primary mr-1"
          >
              Submit
          </button>
      </div>
    </form>
    <div id="query-response-container" className="my-2"></div>
    </div>
    
  );
};

const GraphQLQueryForm = withFormik({
  mapPropsToValues: props => ({ model: '',type:'', modelList:props.models,graph_code:'' }),
  validationSchema: object().shape({
    model: string().required('Please select a model'),
    type: string().required('Please select your query type'),

  }),
  handleSubmit: (values, { setSubmitting }) => {
    
    let response = getSubmissionResponse();
    let variant = null;
    response.status == "success" ? variant = "success" : variant = "danger";

    setTimeout(() => {
      values.graph_code = document.getElementById('graph_code_textarea_id').value;
      render (
        <GraphQLQuerySubmissionStatus variant={variant} message={response.message} model={values.model} />,
        document.getElementById('query-response-container')
      )
      setSubmitting(false);
    }, 500);
  },
  displayName: 'BasicForm', // helps with React DevTools
})(GraphQLQueryFormik);

export default GraphQLQueryForm;