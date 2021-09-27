import React from 'react';
import {Button, Menu, Typography, Avatar} from 'antd';
import {Link} from 'react-dom';
import { HomeOutlined, MoneyCollectOutlines, FundOutlined, MenuOutlined} from '@ant-design/icons'
import icon from "../images/crypto.png";

export const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
                {/* <Button className="menue-control-container"></Button> */}
            </div>
            
        </div>
    )
}
