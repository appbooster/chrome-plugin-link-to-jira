var prTitleEl = document.querySelector('.js-issue-title')
var prTitle = prTitleEl.innerText
var match = prTitle.match(/[A-Z0-9]+-\d+/)
if (match) {
  prTitleEl.innerHTML = prTitle.replace(match[0], `<a href="https://appbooster.atlassian.net/browse/${match[0]}" target="_blank">${match[0]}</a>`)
}
