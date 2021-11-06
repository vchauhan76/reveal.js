const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
    
document.querySelector('#markdown-section').setAttribute('data-markdown', `content/${params.file}.md`);