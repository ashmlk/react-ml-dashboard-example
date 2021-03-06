import { Component, useState } from "react";
import Toast from "react-bootstrap/Toast";
import Alert from "react-bootstrap/Alert";

/**
 *
 * @param {*} props is the pipeline submitted with the status response message sent
 * to show the status of the submission form the server
 */

function GraphQLQuerySubmissionStatus(props) {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return (
    <Toast show={showA} onClose={toggleShowA}>
      <Toast.Header>
        <strong className="mr-auto">{props.model}</strong>
      </Toast.Header>
      <Toast.Body>
        <Alert variant={props.variant}>{props.message}</Alert>
      </Toast.Body>
    </Toast>
  );
}

export default GraphQLQuerySubmissionStatus;
