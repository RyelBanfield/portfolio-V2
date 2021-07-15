// import { useEffect, useState } from 'react';
import styled from 'styled-components';

const getPinnedProjects = async () => {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer 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',
    },
    body: JSON.stringify({
      query: `
        query {
          user(login: "RyelBanfield"){
            pinnedItems(first: 6, types: [REPOSITORY]) {
              totalCount
              edges {
                node {
                    ... on Repository {
                    name
                    description
                    url
                    homepageUrl
                  }
                }
              }
            }
          }
        }      
      `,
    }),
  });
  const pinnedProjects = await response.json();
  console.log(pinnedProjects);
  return pinnedProjects;
};

getPinnedProjects();

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => (
  <Container>
    <h1>Ryel Banfield</h1>
  </Container>
);
export default App;
