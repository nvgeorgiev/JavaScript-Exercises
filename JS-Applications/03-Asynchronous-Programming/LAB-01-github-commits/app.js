const usernameEl = document.getElementById('username');
const repoEl = document.getElementById('repo');
const commitsUlEl = document.getElementById('commits');

function getUrl(username, repo) {
  return `https://api.github.com/repos/${username}/${repo}/commits`;
}

function loadCommits() {
  commitsUlEl.innerHTML = '';
  const username = usernameEl.value;
  const repo = repoEl.value;
  const url = getUrl(username, repo);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.commit.author.name}: ${item.commit.message}`;
        commitsUlEl.appendChild(li);
      });
    });
}
