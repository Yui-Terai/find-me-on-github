const apiKey = "7d9d7aa1f83f1108f2fa44981815469acd11d92b";

const Github = {
  searchProject(username) {
    return fetch(`https://api.github.com/users/${username}/projects`, {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.inertia-preview+json",
        Authorization: `Bearer ${apiKey}`
      }
    })
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        console.log(`im json response ${jsonResponse}`);
      });
  }
};

export default Github;
