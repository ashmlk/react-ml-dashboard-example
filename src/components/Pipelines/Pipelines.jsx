import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PipelinesList from "./PipelinesList";
import "./Pipelines.css";
import { NavLink, Router, Switch, Route, withRouter } from "react-router-dom";
import GraphQLQueryForm from '../Forms/Pipelines/GraphQLQueryForm';
import StatusFormExpanded from '../Forms/Pipelines/GraphQLStatus';
import CancelFormExpanded from '../Forms/Pipelines/GraphQLCancel';

class PipelinesListDisplay extends Component {
  render() {
    return (
      <div className="Pipelines">
        <div class="pipelines-lists">
          <div class="pipelines-list-header px-1">
            <span>Recent Pipelines</span>
          </div>
          <div>
            <PipelinesList />
          </div>
        </div>
      </div>
    );
  }
}

class PipelinesAdd extends Component {

  getResources () {
    /* This would return the resources for submitting queries
     * as demo we only return 2 resources 
    */
   return ["model1","model2","model3"];
  }

  render() {
    return (
      <div>
        <div class="graph-ql-query">
          <GraphQLQueryForm models={this.getResources()} />
        </div>
      </div>
    );
  }
}

class PipelinesSearch extends Component {
  render() {
    return (
      <div>
        <div className=" pt-2 h4">
          Get Status
        </div>
        <div className="graphql-search">
            <StatusFormExpanded action="Search" />
        </div>
            <div className="mt-5 border-top pt-2" id="graph-status-result"></div>
      </div>
    );
  }
}

class PipelinesCancel extends Component {
  render() {
    return (
      <div>
        <div className=" pt-2 h4">
          Cancel Pipeline Job
        </div>
        <div className="graphql-search">
            <CancelFormExpanded action="Cancel"/>
        </div>
            <div className="mt-5 border-top pt-2" id="graph-status-result"></div>
      </div>
    );
  }
}


class Pipelines extends Component {
  render() {
    return (
      <Row>
        <div class="col-2 pipe-line-actions ds-rounded-border pb-3 border bg-white">
          <div class="py-1 pt-3 header-action ds-text-secondary">
            <h5>Overview</h5>
          </div>
          <div className="pipeline-action-lists text-left">
            <div className="pipeline-action-item my-1">
              <div className="border  ds-rounded-border ">
                <NavLink
                  to="/pipelines/running-jobs"
                  activeClassName="pipeline-link-selected"
                  className="nav-item-link d-flex align-items-center  p-1 px-1 "
                >
                  <span className="nav-link-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-play-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                  </span>
                  <span className="nav-item-label">Running Jobs</span>
                </NavLink>
              </div>
            </div>
            <div className="pipeline-action-item my-1">
              <div className="border ds-rounded-border ">
                <NavLink
                  to="/pipelines/scheduled-jobs"
                  activeClassName="pipeline-link-selected"
                  className="nav-item-link d-flex align-items-center  p-1 px-1 "
                >
                  <span className="nav-link-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-clock-history"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                      <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                      <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                  </span>
                  <span className="nav-item-label">Scheduled Jobs</span>
                </NavLink>
              </div>
            </div>
            <div className="pipeline-action-item my-1">
              <div className="border ds-rounded-border ">
                <NavLink
                  to="/pipelines/recently-completed"
                  activeClassName="pipeline-link-selected"
                  className="nav-item-link d-flex align-items-center  p-1 px-1 "
                >
                  <span className="nav-link-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-check2-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                      <path d="M8.354 10.354l7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                    </svg>
                  </span>
                  <span className="nav-item-label">Recently Completed</span>
                </NavLink>
              </div>
            </div>
            <div className="pipeline-action-item my-1">
              <div className="border ds-rounded-border ">
                <NavLink
                  to="/pipelines/cancel-job"
                  activeClassName="pipeline-link-selected"
                  className="nav-item-link d-flex align-items-center p-1 px-1 "
                >
                  <span className="nav-link-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-x-octagon"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </span>
                  <span className="nav-item-label">Failed Jobs</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div class="py-1 pt-3 header-action ds-text-secondary">
            <h5>Actions</h5>
          </div>
          <div className="pipeline-action-lists text-left">
            <div className="pipeline-action-item my-1">
              <div className="border ds-rounded-border p-0">
                <NavLink
                  to="/pipelines/submit-query"
                  activeClassName="pipeline-link-selected"
                  className="nav-item-link d-flex align-items-center p-1 px-1"
                >
                  <span className="nav-link-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </span>
                  <span className="nav-item-label">Submit Query</span>
                </NavLink>
              </div>
            </div>
            <div className="pipeline-action-item my-1">
              <div className="border ds-rounded-border ">
                <NavLink
                  to="/pipelines/check-status"
                  activeClassName="pipeline-link-selected"
                  className="nav-item-link d-flex align-items-center  p-1 px-1 "
                >
                  <span className="nav-link-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-card-checklist"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                      <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                    </svg>
                  </span>
                  <span className="nav-item-label">Check Status</span>
                </NavLink>
              </div>
            </div>
            <div className="pipeline-action-item my-1">
              <div className="border ds-rounded-border ">
                <NavLink
                  to="/pipelines/cancel"
                  activeClassName="pipeline-link-selected"
                  className=" nav-item-link d-flex align-items-center p-1 px-1 "
                >
                  <span className="nav-link-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-x-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </span>
                  <span className="nav-item-label">Cancel Task</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div class="py-1 pt-3 header-action ds-text-secondary">
            <h5>Team</h5>
          </div>
          <div className="pipeline-action-lists text-left">
            <div className="pipeline-action-item my-1">
              <div className="border  ds-rounded-border ">
                <NavLink
                  to="/pipelines/pending-reviews"
                  activeClassName="pipeline-link-selected"
                  className="nav-item-link d-flex align-items-center  p-1 px-1 "
                >
                  <span className="nav-item-label mx-2">Pending Review</span>
                </NavLink>
              </div>
            </div>
            <div className="pipeline-action-item my-1">
              <div className="border ds-rounded-border ">
                <NavLink
                  to="/pipelines/to-review"
                  activeClassName="pipeline-link-selected"
                  className="nav-item-link d-flex align-items-center  p-1 px-1 "
                >
                  <span className="nav-item-label mx-2">To Review</span>
                </NavLink>
              </div>
            </div>
            <div className="pipeline-action-item my-1">
              <div className="border ds-rounded-border ">
                <NavLink
                  to="/pipelines/completed-files"
                  activeClassName="pipeline-link-selected"
                  className=" nav-item-link d-flex align-items-center p-1 px-1"
                >
                  <span className="nav-item-label mx-2">Completed Files</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="col-9">
          <Switch>
            <Route exact path="/pipelines" component={PipelinesListDisplay} />
            <Route exact path="/pipelines/check-status" component={PipelinesSearch} />
            <Route exact path="/pipelines/submit-query" component={PipelinesAdd} />
            <Route exact path="/pipelines/cancel" component={PipelinesCancel} />
          </Switch>
        </div>
      </Row>
    );
  }
}

export default Pipelines;
