import { Component } from "react";
import PipelineCard from "./PipelineCard";
import PipelineRequestStatus from "./PipelineRequestStatus";

const jobs = {
  1: {
    id: "1",
    job_title: "job1",
    status: "96",
    date_started: "2021-02-12",
    outputNotebooksPath: "path_to_1",
  },
  2: {
    id: "2",
    job_title: "PIPELINE_ADVANCE",
    status: "72",
    date_started: "2021-02-18",
    outputNotebooksPath: "path_to_2",
  },
  3: {
    id: "3",
    job_title: "job1",
    status: "16",
    date_started: "2021-02-21",
    outputNotebooksPath: "path_to_3",
  },
};

class PipelineJobOrError extends Component {
  /* call api and get a function object */
  render() {
    if (jobs[this.props.id] != undefined) {
      return <PipelineCard PipelineObject={jobs[this.props.id]} />;
    } else {
      let message = `The pipeline you requested { id: ${this.props.id} } was not found`;
      return <PipelineRequestStatus variant="danger" message={message} />;
    }
  }
}

export default PipelineJobOrError;
