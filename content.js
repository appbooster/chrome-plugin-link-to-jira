var prTitleEl = document.querySelector('.js-issue-title')
var prTitle = prTitleEl.innerText
// Add jira-links
var match = prTitle.match(/[A-Z0-9]+-\d+/)
if (match) {
  prTitleEl.innerHTML = prTitle.replace(match[0], `<a href="https://appbooster.atlassian.net/browse/${match[0]}" target="_blank">${match[0]}</a>`)
}

// Add clickup-links
match = prTitle.match(/CU-[a-z0-9]+/)
if (match) {
  prTitleEl.innerHTML = prTitle.replace(match[0], `<a href="https://app.clickup.com/t/${match[0]}" target="_blank">${match[0]}</a>`)
}
