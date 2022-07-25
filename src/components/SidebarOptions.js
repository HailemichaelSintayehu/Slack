import React from "react";
import styled from "styled-components";
function SidebarOptions({Icon,title}) {
  return (
  
  <SidebarContainer>
      {Icon && <Icon fontSize = "small"  style = {{padding:10}}/>}
      {Icon ? (
        <h3>{title}</h3>
      ):(
        <SidebarOptionChannel>
            <span>#</span>{title}
        </SidebarOptionChannel>
      )}
  </SidebarContainer>
  )
}

export default SidebarOptions;

const SidebarContainer = styled.div`
display: flex;

`;
const SidebarOptionChannel = styled.div`
`

