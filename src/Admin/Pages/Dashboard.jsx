import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: yellow; /* Set your desired yellow background color */
  color: black;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

const ProjectSection = styled.section`
  margin-top: 20px;
`;

const ProjectTitle = styled.h2`
  color: black;
  border-bottom: 2px solid black;
  padding-bottom: 10px;
`;

const ProjectItem = styled.div`
  margin-top: 15px;
`;

function Dashboard() {
  return (
    <DashboardContainer>
      <MainContent>
        {/* Your main content goes here */}
        <h2>Welcome to the Painter's Dashboard</h2>
        <p>This is a sample painter's dashboard. Add your content here...</p>

        <ProjectSection>
          <ProjectTitle>Recent Projects</ProjectTitle>
          <ProjectItem>
            <h3>Abstract Landscape</h3>
            <p>A vibrant abstract landscape painting inspired by nature.</p>
          </ProjectItem>
          <ProjectItem>
            <h3>Cityscape at Dusk</h3>
            <p>An urban cityscape capturing the beauty of the city during dusk.</p>
          </ProjectItem>
          {/* Add more project items as needed */}
        </ProjectSection>
      </MainContent>
    </DashboardContainer>
  );
}   
export default Dashboard;
