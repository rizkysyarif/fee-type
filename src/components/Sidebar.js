import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

import Dropdown from "react-bootstrap/Dropdown";
import userAvatar from "../assets/img/user.png";

const Nav = styled.div`
  background: #15171c;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const NavBar = styled.div`
  padding: 2px;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars size={24} onClick={showSidebar} />
          </NavIcon>
          <NavBar>
            <NavIcon
              to="/Dashboard"
              className="text-decoration-none text-white"
            >
              <h4>React App</h4>
            </NavIcon>
            <Dropdown className="text-white">
              <Dropdown.Toggle
                className="text-white"
                variant="default"
                id="dropdown-custom-components"
              >
                <img
                  src={userAvatar}
                  alt="avatar"
                  width={40}
                  className="rounded-circle"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="1">
                  <FaIcons.FaUserAlt className="text-black mb-1" size={15} />
                  <span style={{ marginLeft: "10px" }}>My Profile</span>
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">
                  <FaIcons.FaKey className="text-black mb-1" size={15} />
                  <span style={{ marginLeft: "10px" }}>Change Password</span>
                </Dropdown.Item>
                <Dropdown.Item eventKey="1">
                  <FaIcons.FaSignOutAlt className="text-black mb-1" size={15} />
                  <span style={{ marginLeft: "10px" }}>Sign Out</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </NavBar>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose size={24} onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
