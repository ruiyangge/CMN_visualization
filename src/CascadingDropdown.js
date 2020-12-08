import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import CV1 from './graphs/CV1';
const { SubMenu } = Menu;

const menu = (
    <Menu>
        <SubMenu title="cortical volume (CV)">
            <SubMenu title="frontal cortical morphological networks">
                <Menu.Item>cortical morphological network #1</Menu.Item>
                <Menu.Item>cortical morphological network #2</Menu.Item>
                <Menu.Item>cortical morphological network #3</Menu.Item>
            </SubMenu>
            <SubMenu title="insular cortical morphological network">
                <Menu.Item>cortical morphological network #4</Menu.Item>
                <Menu.Item>cortical morphological network #5</Menu.Item>
                <Menu.Item>cortical morphological network #6</Menu.Item>
            </SubMenu>
            <SubMenu title="temporal cortical morphological networks">
                <Menu.Item>cortical morphological network #7</Menu.Item>
                <Menu.Item>cortical morphological network #8</Menu.Item>
                <Menu.Item>cortical morphological network #9</Menu.Item>
            </SubMenu>
            <SubMenu title="parietal cortical morphological network">
                <Menu.Item>cortical morphological network #10</Menu.Item>
                <Menu.Item>cortical morphological network #11</Menu.Item>
            </SubMenu>
            <SubMenu title="occipital cortical morphological network">
                <Menu.Item>cortical morphological network #12</Menu.Item>
                <Menu.Item>cortical morphological network #13</Menu.Item>
                <Menu.Item>cortical morphological network #14</Menu.Item>
                <Menu.Item>cortical morphological network #15</Menu.Item>
            </SubMenu>
        </SubMenu>

        <SubMenu title="cortical thickness (CT)">
            <SubMenu title="frontal cortical morphological networks">
                <Menu.Item>cortical morphological network #1</Menu.Item>
                <Menu.Item>cortical morphological network #2</Menu.Item>
                <Menu.Item>cortical morphological network #3</Menu.Item>
                <Menu.Item>cortical morphological network #4</Menu.Item>
                <Menu.Item>cortical morphological network #5</Menu.Item>
            </SubMenu>
            <SubMenu title="insular cortical morphological networks">
                <Menu.Item>cortical morphological network #6</Menu.Item>
                <Menu.Item>cortical morphological network #7</Menu.Item>
                <Menu.Item>cortical morphological network #8</Menu.Item>
            </SubMenu>
            <SubMenu title="temporal cortical morphological networks">
                <Menu.Item>cortical morphological network #9</Menu.Item>
                <Menu.Item>cortical morphological network #10</Menu.Item>
                <Menu.Item>cortical morphological network #11</Menu.Item>
                <Menu.Item>cortical morphological network #12</Menu.Item>
            </SubMenu>
            <SubMenu title="parietal and occipital cortical morphological networks">
                <Menu.Item>cortical morphological network #13</Menu.Item>
                <Menu.Item>cortical morphological network #14</Menu.Item>
                <Menu.Item>cortical morphological network #15</Menu.Item>
            </SubMenu>
        </SubMenu>

        <SubMenu title="gyrification index (GI)">
            <SubMenu title="frontal cortical morphological networks">
                <Menu.Item>cortical morphological network #1</Menu.Item>
                <Menu.Item>cortical morphological network #2</Menu.Item>
                <Menu.Item>cortical morphological network #3</Menu.Item>
            </SubMenu>
            <SubMenu title="insular cortical morphological network">
                <Menu.Item>cortical morphological network #4</Menu.Item>
            </SubMenu>
            <SubMenu title="temporal cortical morphological networks">
                <Menu.Item>cortical morphological network #5</Menu.Item>
                <Menu.Item>cortical morphological network #6</Menu.Item>
                <Menu.Item>cortical morphological network #7</Menu.Item>
            </SubMenu>
            <SubMenu title="parietal cortical morphological networks">
                <Menu.Item>cortical morphological network #8</Menu.Item>
                <Menu.Item>cortical morphological network #9</Menu.Item>
                <Menu.Item>cortical morphological network #10</Menu.Item>
                <Menu.Item>cortical morphological network #11</Menu.Item>
                <Menu.Item>cortical morphological network #12</Menu.Item>
                <Menu.Item>cortical morphological network #13</Menu.Item>
            </SubMenu>
            <SubMenu title="occipital cortical morphological network">
                <Menu.Item>cortical morphological network #14</Menu.Item>
                <Menu.Item>cortical morphological network #15</Menu.Item>
            </SubMenu>
        </SubMenu>

        <SubMenu title="fractal dimension (FD)">
            <SubMenu title="frontal cortical morphological networks">
                <Menu.Item>cortical morphological network #1</Menu.Item>
                <Menu.Item>cortical morphological network #2</Menu.Item>
                <Menu.Item>cortical morphological network #3</Menu.Item>
                <Menu.Item>cortical morphological network #4</Menu.Item>
                <Menu.Item>cortical morphological network #5</Menu.Item>
            </SubMenu>
            <SubMenu title="temporal cortical morphological networks">
                <Menu.Item>cortical morphological network #6</Menu.Item>
                <Menu.Item>cortical morphological network #7</Menu.Item>
                <Menu.Item>cortical morphological network #8</Menu.Item>
                <Menu.Item>cortical morphological network #9</Menu.Item>
            </SubMenu>
            <SubMenu title="parietal cortical morphological networks">
                <Menu.Item>cortical morphological network #10</Menu.Item>
                <Menu.Item>cortical morphological network #11</Menu.Item>
                <Menu.Item>cortical morphological network #12</Menu.Item>
                <Menu.Item>cortical morphological network #13</Menu.Item>
                <Menu.Item>cortical morphological network #14</Menu.Item>
            </SubMenu>
            <SubMenu title="occipital cortical morphological network">
                <Menu.Item>cortical morphological network #15</Menu.Item>
            </SubMenu>
        </SubMenu>

        <SubMenu title="sulcal depth (SulcD)">
            <SubMenu title="frontal cortical morphological network">
                <Menu.Item>cortical morphological network #1</Menu.Item>
            </SubMenu>
            <SubMenu title="insular cortical morphological network">
                <Menu.Item>cortical morphological network #2</Menu.Item>
            </SubMenu>
            <SubMenu title="temporal cortical morphological networks">
                <Menu.Item>cortical morphological network #3</Menu.Item>
                <Menu.Item>cortical morphological network #4</Menu.Item>
                <Menu.Item>cortical morphological network #5</Menu.Item>
                <Menu.Item>cortical morphological network #6</Menu.Item>
            </SubMenu>
            <SubMenu title="parietal cortical morphological networks">
                <Menu.Item>cortical morphological network #7</Menu.Item>
                <Menu.Item>cortical morphological network #8</Menu.Item>
                <Menu.Item>cortical morphological network #9</Menu.Item>
                <Menu.Item>cortical morphological network #10</Menu.Item>
                <Menu.Item>cortical morphological network #11</Menu.Item>
                <Menu.Item>cortical morphological network #12</Menu.Item>
            </SubMenu>
            <SubMenu title="occipital cortical morphological networks">
                <Menu.Item>cortical morphological network #13</Menu.Item>
                <Menu.Item>cortical morphological network #14</Menu.Item>
                <Menu.Item>cortical morphological network #15</Menu.Item>
            </SubMenu>
        </SubMenu>
    </Menu>
);

const CascadingDropdown = () => {
    return (
        <Fragment>
            <Dropdown overlay={menu}>
                <Button>
                    Select a network
                    <DownOutlined />
                </Button>
            </Dropdown>

            <a href="/CT1.html" target="_blank">
   a
  </a>

        </Fragment>
    );
};

export default CascadingDropdown;
