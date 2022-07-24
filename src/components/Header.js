import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar  />
        <AccessTimeIcon />
        {/* <ArrowBackIcon />
        <ArrowForwardIcon /> */}
      </HeaderLeft>
      <HeaderSearch>
          <SearchIcon />
          <input placeholder = "Hailemichael" />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
const HeaderSearch = styled.div`
  flex:0.4;
  opacity:1;
  border-radius: 6px;
  background-color:#421f44;
  text-align: center;
  display:flex;
  padding:0 50px;
  color:gray;
  border:1px gray solid;
  > input{
    background-color: transparent;
    border:none;
    text-align:center;
    min-width:30vw; 
    outline:0;
    color:white;
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  position:fixed;
  width:100%;
  align-items:center;
  justify-content: space-between;
  padding:10px 10px;
  background-color: var(--slack-color);
  color:white;

`;

const HeaderLeft = styled.div`
  flex:0.3;
  display:flex;
  align-items: center;
  margin-left: 20px;
  >.MuiSvgIcon-root{
    margin-left: auto;
    margin-right:30px;

  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: flex-end;
  flex:0.3;
  .MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 20px;

  }
`;
const HeaderAvatar = styled(Avatar)`
  cursor:pointer;

  :hover{
    opacity:0.8;
  }

`;
