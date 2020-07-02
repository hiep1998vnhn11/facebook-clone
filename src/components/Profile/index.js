import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Navbar from '../Bar/Navbar';
import FirebaseController from '../../firebase';
import SidebarLeft from '../Bar/SidebarLeft';
import { Switch, Route, withRouter } from 'react-router-dom';

const { Content, Sider, Header } = Layout;

function MainProfile(props){
    const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);

    useEffect(() => {
        setIsLoggedIn(props.isLoggedIn);
        if(isLoggedIn) console.log(FirebaseController.getCurrentUser());
        else{
            props.history.replace('/login');
        }
    });

    return(
        <Layout style={{minHeight: '100vh'}}>
            <Header style={{width: '100%', position: 'fixed', backgroundColor: 'white' }}>
                <Navbar/>
            </Header>
                
            <Sider
                width={200}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    width: '25%',
                    position: 'fixed',
                    left: 0,
                    top: '10vh'
                }}
            >
                <SidebarLeft isLoggedIn={isLoggedIn} logout={props.logout} />
            </Sider>
           
        </Layout>
    );
}

export default withRouter(MainProfile);