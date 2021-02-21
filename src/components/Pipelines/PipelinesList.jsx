import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PipelineCard from './PipelineCard';

function getPipelines(type) {
    /* this would be an API call to get the top 3-current active running pipelines 
    * based on the type of the pipelines requested it can return data
    * type can be "recent", "active", "failed", and etc.
    * API will be called based on type
    * For demo purposes this method now only return a list of recently active pipelines
    */

    return (
        {
            active:3,
            list: [
                {
                "id":"eirbv39-wrvBEOR0-iubrv-wruhn",
                "job_title":"job1",
                "status":"96",
                "date_started":"2021-02-12",
                },
                {
                "id":"eiWECEv39-wr2349R0-iubrv-3948HV",
                "job_title":"PIPELINE_ADVANCE",
                "status":"72",
                "date_started":"2021-02-18",
                },
                {
                "id":"WECEbv39-wrvWCEWEOR0-iubrv-w43n",
                "job_title":"job1",
                "status":"16",
                "date_started":"2021-02-21",
                },
            ]
       
        }
    )
  }


class PipelinesList extends Component {

    state = {
        typeOfPipelines: '',
        pipelines: [],
        activePipelines: 0
    }

    componentDidMount() {
        const data = getPipelines();
        // in a real example this would be -> const data = getPipelines(this.props.requestedType)
        this.setState({
            typeOfPipelines: this.props.requestedType,
            pipelines: data.list,
            activePipelines: data.active,
        })
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    {
                        (this.state.pipelines).map(pipeline => {
                                return (
                                    <Col sm="4" lg="3" className="p-1">
                                        <PipelineCard PipelineObject={pipeline} />
                                    </Col>
                                )
                            }
                        )
                    }
                </Row>
            </Container>
        )
    }



}

export default PipelinesList;