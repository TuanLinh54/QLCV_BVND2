import React, { useContext } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './sidebar.scss';

function Sidebar({ user, handleLogout }) {
    return (
        <div className="sidebar">
            <Nav defaultActiveKey="/home" className="flex-column">
                <NavLink to="/s" className="nav-link">Trang chủ</NavLink>
                {user && user.isAuthenticated === true && user.account.departmentId === 1 && (
                    <>
                        <NavLink to="/list_user" className="nav-link">Người dùng</NavLink>
                        <NavLink to="/list_doc" className="nav-link">Văn bản</NavLink>
                        <NavLink to="/list_giamdoc" className="nav-link">Giám đốc</NavLink>
                    </>
                )}
                {user && user.isAuthenticated === true && user.account.departmentId === 3 && (
                    <NavLink to="/list_doc" className="nav-link">Văn bản</NavLink>
                )}
                {user && user.isAuthenticated === true ? (
                    <NavDropdown title={user.account.fullName} id="basic-nav-dropdown">
                        <NavDropdown.Item>Đổi mật khẩu</NavDropdown.Item>
                        <NavDropdown.Item onClick={handleLogout}>Đăng xuất</NavDropdown.Item>
                    </NavDropdown>
                ) : (
                    <NavLink to="/login_user" className="nav-link">Đăng nhập</NavLink>
                )}
            </Nav>
        </div>
    );
}

export default Sidebar;
