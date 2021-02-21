import React, { Component } from 'react';
import PercentBar from "../ProgressComponents/PercentBar";
import Card from "react-bootstrap/Card";

class PipelineCard extends Component {

    handleLabel() {
        return (this.props.PipelineObject.status < 100 ? "In progress" : "Completed");
    }

    render() {
        return (
            <Card style={{ width: 'auto', minHeight: '4rem'}}>
                <Card.Body>
                    <Card.Title className="h6">{this.props.PipelineObject.job_title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted ds-text-xs">{this.props.PipelineObject.date_started}</Card.Subtitle>
                    <Card.Text>
                        <div className="ds-font-sm">
                            <a href="#">
                            {this.props.PipelineObject.outputNotebooksPath}
                            </a>
                        </div>
                    </Card.Text>
                    <div className="py-3">
                        <PercentBar label={this.handleLabel} percent={this.props.PipelineObject.status} />
                    </div>
                    
                    <Card.Link className="ds-text-sm" href="#">Details</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}
export default PipelineCard;