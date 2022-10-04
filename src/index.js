import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import CascadingDropdown from './CascadingDropdown';
import { Typography, Divider, Button, Row, Col, Space, Image } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

const blockContent = `Cortical morphological networks (CMNs) model the associations between regional measures of cortical morphometry in recognition that cortical regions develop and function in a coordinated fashion. Here we present a couple of CMNs derived using multivariate modelling of regional cortical measures of volume and surface from high-quality structural MRI scans from healthy participants in the Human Connectome Project (HCP, http://www.humanconnectomeproject.org/).`;

ReactDOM.render(
    <React.StrictMode>
        <Row justify="center" style={{marginTop:'20px'}}>
            <Col span={12}>
                <Typography>
                    <Title>CORTICAL MORPHOLOGICAL NETWORKS</Title>
                    <Paragraph>
                        <pre>{blockContent}</pre>
                    </Paragraph>
                </Typography>
                <Space>
                    <CascadingDropdown />
                    <Button type="primary">
                        <a href="https://www.nitrc.org/projects/sbn_2020" target="_blank">
                            Get Data
                        </a>
                    </Button>
                </Space>
            </Col>
        </Row>
        <Row justify="center" style={{marginTop:'20px'}}>
            <Image width={600} src="https://github.com/ruiyangge/CMN_visualization/blob/master/src/brain.jpg" />
        </Row>
    </React.StrictMode>,
    document.getElementById('root')
);
