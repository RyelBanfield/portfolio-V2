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

export const getScreenshot = async (repoName) => {
  const fileResponse = await fetch(`https://api.github.com/repos/RyelBanfield/${repoName}/contents/Screenshot.png`);
  const file = await fileResponse.json();
  const blobResponse = await fetch(`https://api.github.com/repos/RyelBanfield/${repoName}/git/blobs/${file.sha}`);
  const blob = await blobResponse.json();
  console.log(window.atob(`${blob.content}`));
};

export const getRateLimit = async () => {
  const response = await fetch('https://api.github.com/rate_limit');
  const rateLimit = await response.json();
  console.log(rateLimit);
};
