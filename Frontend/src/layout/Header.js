import '../css/Header.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import { Link } from "react-router-dom";
import BasicMenu from '../component/BasicMenu';


function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
   
}

const Header = () => {
    <Box
    sx={{
        '& > :not(style)': {
            m: 2,
        },
    }}
></Box>
    const LinkStyle = {
        textDecoration: "none",
        color: "black",
        marginRight: "10px",
        marginLeft: "10px"
    };

    return (
        <header>
            <HomeIcon color="primary" sx={{ fontSize: 60 }} id="IconStyle" />
            <div id="pjtTitle"><Link to="/" style={LinkStyle}>태영 React+Spring 게시판</Link></div>
            <nav id="navMenu" style={{ display: "flex", justifyContent: "flex-end", marginRight:"50px" }}>
            <BasicMenu />
            </nav>
        </header>
    );
}

export default Header;