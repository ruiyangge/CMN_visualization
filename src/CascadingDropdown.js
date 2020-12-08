import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

const menu = (
    <Menu>
        <SubMenu title="cortical volume (CV)">
            <SubMenu title="frontal cortical morphological networks">
                <Menu.Item>
                    <a href="data/CV001.html" target="_blank">
                        cortical morphological network #1
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/CV002.html" target="_blank">
                        cortical morphological network #2
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/CV003.html" target="_blank">
                        cortical morphological network #3
                    </a>
                </Menu.Item>
            </SubMenu>
            <SubMenu title="insular cortical morphological network">
                <Menu.Item>
                    <a href="data/CV004.html" target="_blank">
                        cortical morphological network #4
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/CV005.html" target="_blank">
                        cortical morphological network #5
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/CV006.html" target="_blank">
                        cortical morphological network #6
                    </a>
                </Menu.Item>
            </SubMenu>
            <SubMenu title="temporal cortical morphological networks">
                <Menu.Item>
                    <a href="data/CV007.html" target="_blank">
                        cortical morphological network #7
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/CV008.html" target="_blank">
                        cortical morphological network #8
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/CV009.html" target="_blank">
                        cortical morphological network #9
                    </a>
                </Menu.Item>
            </SubMenu>
            <SubMenu title="parietal cortical morphological network">
                <Menu.Item>
                    <a href="data/CV010.html" target="_blank">
                        cortical morphological network #10
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/CV011.html" target="_blank">
                        cortical morphological network #11
                    </a>
                </Menu.Item>
            </SubMenu>
            <SubMenu title="occipital cortical morphological network">
                <Menu.Item>
                    <a href="data/CV012.html" target="_blank">
                        cortical morphological network #12
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/CV013.html" target="_blank">
                        cortical morphological network #13
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/CV014.html" target="_blank">
                        cortical morphological network #14
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/CV015.html" target="_blank">
                        cortical morphological network #15
                    </a>
                </Menu.Item>
            </SubMenu>
        </SubMenu>

        <SubMenu title="cortical thickness (CT)">
            <SubMenu title="frontal cortical morphological networks">
                <Menu.Item>
                    <a href="data/CT001.html" target="_blank">
                        cortical morphological network #1
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/CT002.html" target="_blank">
                        cortical morphological network #2
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/CT003.html" target="_blank">
                        cortical morphological network #3
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/CT004.html" target="_blank">
                        cortical morphological network #4
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/CT005.html" target="_blank">
                        cortical morphological network #5
                    </a>
                </Menu.Item>
            </SubMenu>
            <SubMenu title="insular cortical morphological networks">
                <Menu.Item>
                    <a href="data/CT006.html" target="_blank">
                        cortical morphological network #6
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/CT007.html" target="_blank">
                        cortical morphological network #7
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/CT008.html" target="_blank">
                        cortical morphological network #8
                    </a>
                </Menu.Item>
            </SubMenu>
            <SubMenu title="temporal cortical morphological networks">
                <Menu.Item>
                    <a href="data/CT009.html" target="_blank">
                        cortical morphological network #9
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/CT010.html" target="_blank">
                        cortical morphological network #10
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/CT011.html" target="_blank">
                        cortical morphological network #11
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/CT012.html" target="_blank">
                        cortical morphological network #12
                    </a>
                </Menu.Item>
            </SubMenu>
            <SubMenu title="parietal and occipital cortical morphological networks">
                <Menu.Item>
                    <a href="data/CT013.html" target="_blank">
                        cortical morphological network #13
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/CT014.html" target="_blank">
                        cortical morphological network #14
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/CT015.html" target="_blank">
                        cortical morphological network #15
                    </a>
                </Menu.Item>
            </SubMenu>
        </SubMenu>

        <SubMenu title="gyrification index (GI)">
            <SubMenu title="frontal cortical morphological networks">
                <Menu.Item>
                    <a href="data/GI001.html" target="_blank">
                        cortical morphological network #1
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/GI002.html" target="_blank">
                        cortical morphological network #2
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/GI003.html" target="_blank">
                        cortical morphological network #3
                    </a>
                </Menu.Item>
            </SubMenu>
            <SubMenu title="insular cortical morphological network">
                <Menu.Item>
                    <a href="data/GI004.html" target="_blank">
                        cortical morphological network #4
                    </a>
                </Menu.Item>
            </SubMenu>
            <SubMenu title="temporal cortical morphological networks">
                <Menu.Item>
                    <a href="data/GI005.html" target="_blank">
                        cortical morphological network #5
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/GI006.html" target="_blank">
                        cortical morphological network #6
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/GI007.html" target="_blank">
                        cortical morphological network #7
                    </a>
                </Menu.Item>
            </SubMenu>
            <SubMenu title="parietal cortical morphological networks">
                <Menu.Item>
                    <a href="data/GI008.html" target="_blank">
                        cortical morphological network #8
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/GI009.html" target="_blank">
                        cortical morphological network #9
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/GI010.html" target="_blank">
                        cortical morphological network #10
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/GI011.html" target="_blank">
                        cortical morphological network #11
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/GI012.html" target="_blank">
                        cortical morphological network #12
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/GI013.html" target="_blank">
                        cortical morphological network #13
                    </a>
                </Menu.Item>
            </SubMenu>
            <SubMenu title="occipital cortical morphological network">
                <Menu.Item>
                    <a href="data/GI014.html" target="_blank">
                        cortical morphological network #14
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/GI015.html" target="_blank">
                        cortical morphological network #15
                    </a>
                </Menu.Item>
            </SubMenu>
        </SubMenu>

        <SubMenu title="fractal dimension (FD)">
            <SubMenu title="frontal cortical morphological networks">
                <Menu.Item>
                    <a href="data/FD001.html" target="_blank">
                        cortical morphological network #1
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/FD002.html" target="_blank">
                        cortical morphological network #2
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/FD003.html" target="_blank">
                        cortical morphological network #3
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/FD004.html" target="_blank">
                        cortical morphological network #4
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/FD005.html" target="_blank">
                        cortical morphological network #5
                    </a>
                </Menu.Item>
            </SubMenu>
            <SubMenu title="temporal cortical morphological networks">
                <Menu.Item>
                    <a href="data/FD006.html" target="_blank">
                        cortical morphological network #6
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/FD007.html" target="_blank">
                        cortical morphological network #7
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/FD008.html" target="_blank">
                        cortical morphological network #8
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/FD009.html" target="_blank">
                        cortical morphological network #9
                    </a>
                </Menu.Item>
            </SubMenu>
            <SubMenu title="parietal cortical morphological networks">
                <Menu.Item>
                    <a href="data/FD010.html" target="_blank">
                        cortical morphological network #10
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/FD011.html" target="_blank">
                        cortical morphological network #11
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/FD012.html" target="_blank">
                        cortical morphological network #12
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/FD013.html" target="_blank">
                        cortical morphological network #13
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/FD014.html" target="_blank">
                        cortical morphological network #14
                    </a>
                </Menu.Item>
            </SubMenu>
            <SubMenu title="occipital cortical morphological network">
                <Menu.Item>
                    <a href="data/FD015.html" target="_blank">
                        cortical morphological network #15
                    </a>
                </Menu.Item>
            </SubMenu>
        </SubMenu>

        <SubMenu title="sulcal depth (SulcD)">
            <SubMenu title="frontal cortical morphological network">
                <Menu.Item>
                    <a href="data/SD001.html" target="_blank">
                        cortical morphological network #1
                    </a>
                </Menu.Item>
            </SubMenu>
            <SubMenu title="insular cortical morphological network">
                <Menu.Item>
                    <a href="data/SD002.html" target="_blank">
                        cortical morphological network #2
                    </a>
                </Menu.Item>
            </SubMenu>
            <SubMenu title="temporal cortical morphological networks">
                <Menu.Item>
                    <a href="data/SD003.html" target="_blank">
                        cortical morphological network #3
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/SD004.html" target="_blank">
                        cortical morphological network #4
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/SD005.html" target="_blank">
                        cortical morphological network #5
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/SD006.html" target="_blank">
                        cortical morphological network #6
                    </a>
                </Menu.Item>
            </SubMenu>
            <SubMenu title="parietal cortical morphological networks">
                <Menu.Item>
                    <a href="data/SD007.html" target="_blank">
                        cortical morphological network #7
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/SD008.html" target="_blank">
                        cortical morphological network #8
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/SD009.html" target="_blank">
                        cortical morphological network #9
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/SD010.html" target="_blank">
                        cortical morphological network #10
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/SD011.html" target="_blank">
                        cortical morphological network #11
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/SD012.html" target="_blank">
                        cortical morphological network #12
                    </a>
                </Menu.Item>
            </SubMenu>
            <SubMenu title="occipital cortical morphological networks">
                <Menu.Item>
                    <a href="data/SD013.html" target="_blank">
                        cortical morphological network #13
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/SD014.html" target="_blank">
                        cortical morphological network #14
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="data/SD015.html" target="_blank">
                        cortical morphological network #15
                    </a>
                </Menu.Item>
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
        </Fragment>
    );
};

export default CascadingDropdown;
