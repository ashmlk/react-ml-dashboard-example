import React, { Component, useState } from "react";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { render } from 'react-dom';

function PipelineAlert(variant, message) {

    return (
      <Alert variant={variant}>
        <span>
          {message}
        </span>
      </Alert>
    );
  }
  

class PipelineRequestStatus extends Component {

    render () {
        return (
            PipelineAlert(this.props.variant, this.props.message)
        );
    }
}

export default PipelineRequestStatus;