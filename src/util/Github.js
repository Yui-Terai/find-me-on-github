const apiKey = "7d9d7aa1f83f1108f2fa44981815469acd11d92b";

const Github = {
// Fetch the selected user's repos
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
        console.log("im from searchRepo", jsonResponse);
        if (jsonResponse) {
          return jsonResponse.map(repo => {
            return {
              name: repo.name
            };
          });
        }
      });
  },

// Fetch the selected repo's readme
  getReadMe(username, repo) {
    return fetch(`https://api.github.com/repos/${username}/${repo}/readme`, {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.V3.raw",
        Authorization: `token ${apiKey}`
      }
    })
      .then(response => {
        return response.text();
      })

      .then(jsonResponse => {
        return jsonResponse;
      });
  }
};

export default Github;
