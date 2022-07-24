import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EditIcon from "@mui/icons-material/Edit";
function Sidebar() {
  return (
    <div>
      <SidebarContainer>
        <SidebarHeader>
          <SidebarInfo>
            <h1>Team Hailemichael</h1>
            <h3>
              <FiberManualRecordIcon />
              hailemichael sintayehu
            </h3>
            <EditIcon />
          </SidebarInfo>
        </SidebarHeader>
      </SidebarContainer>
    </div>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  margin-top: 60px;
  flex: 0.3;
  display:flex;
  height: 100vh;
`;
const SidebarHeader = styled.div``;
const SidebarInfo = styled.div``;
