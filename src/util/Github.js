const apiKey = "7d9d7aa1f83f1108f2fa44981815469acd11d92b";

const Github = {
  searchRepo(username) {
    return fetch(`https://api.github.com/users/${username}/repos`, {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.v3 + json",
        Authorization: `token ${apiKey}`
      }
    })
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        // console.log(`im from searchRepo ${jsonResponse[0].name}`);
        if (jsonResponse) {
          return jsonResponse.map(repo => {
            return {
              name: repo.name
            };
            // console.log(`im from searchRepo ${repo.name}`);
          });
        }
        
      });
  }
};

export default Github;
