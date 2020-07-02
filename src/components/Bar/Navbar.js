import React from 'react';
import { Menu } from 'antd';
import FirebaseController from '../../firebase';
import { withRouter } from 'react-router-dom';
import './bar.css';
import {
    HomeOutlined,
    NotificationOutlined,
    LogoutOutlined,
    UserOutlined,
    YoutubeOutlined,
    MessageOutlined,
    ShopOutlined,
    TeamOutlined,
    FacebookOutlined
} from '@ant-design/icons';

function Navbar(props) {
    var isLoggedIn = props.isLoggedIn;
    let user = null;
    let uid = '';
    let displayName = '';
    if (isLoggedIn) {
        user = FirebaseController.getCurrentUser();
        uid = user.uid;
        displayName = user.displayName;
    }

    return (
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[1]}
            defaultOpenKeys={['sub1']}
            
        >
            <Menu.Item key="sub1" icon={<FacebookOutlined />} onClick={() => props.history.push("/")}>

            </Menu.Item>
            <Menu.Item key="sub2">
            Search
            </Menu.Item>
            <Menu.Item key="sub3" icon={<HomeOutlined />} onClick={() => props.history.push("/")}>

            </Menu.Item>
            <Menu.Item key="sub4" icon={<YoutubeOutlined />} onClick="http:\\youtube.com">

            </Menu.Item>
            <Menu.Item key="sub5" icon={<ShopOutlined />} onClick="amazon.com">

            </Menu.Item>
            <Menu.Item key="sub6" icon={<TeamOutlined />} onClick="facebook.com">

            </Menu.Item>
            <Menu.Item key="sub7" icon={<UserOutlined />} onClick={() => props.history.push(`/user/${uid}`)} >
                {displayName}
            </Menu.Item>
            <Menu.Item key="sub9" icon={<MessageOutlined />}>

            </Menu.Item>
            <Menu.Item key="sub10" icon={<NotificationOutlined />}>

            </Menu.Item>
            <Menu.Item key="sub8" icon={<LogoutOutlined />} onClick={props.logout}>

            </Menu.Item>
        </Menu>
    )
}

export default withRouter(Navbar);