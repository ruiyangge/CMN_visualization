import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import CascadingDropdown from './CascadingDropdown';
import { Typography, Divider, Button, Row, Col, Space } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

const blockContent = `Write some description here. Write some description here. Write some description here. Write some description here. Write some description here. Write some description here. Write some description here. Write some description here. Write some description here. Write some description here. Write some description here. Write some description here. Write some description here. Write some description here. Write some description here. `;

ReactDOM.render(
    <React.StrictMode>
        <Row justify="center">
            <Col span={12}>
                <Typography>
                    <Title>Title</Title>
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
    </React.StrictMode>,
    document.getElementById('root')
);
