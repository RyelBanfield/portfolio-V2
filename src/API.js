export const getPinnedProjects = async () => {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
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
  // console.log(pinnedProjects.data.user.pinnedItems.edges);
  return pinnedProjects.data.user.pinnedItems.edges;
};

export const getScreenshots = async (projects) => {
  const projectNames = projects.map((project) => project.node.name);
  const fileUrls = projectNames.map((projectName) => `https://api.github.com/repos/RyelBanfield/${projectName}/contents/Screenshot.png`);

  let screenshotUrls = await fileUrls.map(async (url) => {
    const fileResponse = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: 'bearer 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',
      },
    });
    const screenshotUrl = await fileResponse.json();
    return screenshotUrl.download_url;
  });

  screenshotUrls = await Promise.all(screenshotUrls);
  // console.log(screenshotUrls);
  return screenshotUrls;
};
