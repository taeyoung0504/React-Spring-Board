import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import '../css/Header.css';

const BasicMenu = ({ style }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const buttonStyle = {
    fontSize: "30px",
    marginRight: "30px",
    marginTop:"-20px",
    minWidth: "unset",
  };

  const LinkStyle = {
    textDecoration: "none",
    color: "black",
    marginRight: "10px",
    marginLeft: "10px",
  };
/* 로그아웃*/
const handleLogout = () => {
  sessionStorage.removeItem("userData");
  Swal.fire({
    icon: 'success',
    title: '로그아웃 성공',
    html: '<b> 로그아웃에 성공하였습니다.</b>',
  }).then(() => {
    // Redirection after the success message is acknowledged
    window.location.href = "http://192.168.10.67:3000";
  });
  handleClose();
};

  const userData = JSON.parse(sessionStorage.getItem("userData"));

  const handleWrite = () => {
    // Check if userData exists before allowing access to the "글쓰기" page
    if (userData) {
      window.location.href = "/board/write";
    } else {
      // If userData doesn't exist, prevent access to the "글쓰기" page.
      alert("로그인이 필요합니다.");
      handleClose(); // Close the menu after showing the alert (optional)
    }
  };


  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={buttonStyle}
      >
        ☰
      </Button>
      <Menu
        style={style}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {/* 공통 메뉴 */}
    <MenuItem onClick={handleClose}><Link to="/board/list" style={LinkStyle}>게시물보기</Link></MenuItem>
       {!userData ? (
  <>
    <MenuItem onClick={handleClose}><Link to="/login" style={LinkStyle}>로그인</Link></MenuItem>
    <MenuItem onClick={handleClose}><Link to="/join" style={LinkStyle}>회원가입</Link></MenuItem>
  </>
) : (
  <>
    <MenuItem onClick={handleWrite}><Link to="/board/write" style={LinkStyle}>글쓰기</Link></MenuItem>
    <MenuItem onClick={handleLogout}><Link to="/logout" style={LinkStyle}>로그아웃</Link></MenuItem>
  </>
)}
      </Menu>
    </div>
  );
}

export default BasicMenu;