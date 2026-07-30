fetch('https://api.github.com/repos/isaiahscape/bedrock/commits')
  .then(res => res.json())
  .then(data => console.log(data[0].sha, data[0].commit.committer.date))
  .catch(err => console.error(err))
