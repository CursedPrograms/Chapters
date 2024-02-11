fetch('../content.txt')
    .then(response => response.text())
    .then(text => {
        const lines = text.split('\n');
        const title = lines[0].trim();
        const content = lines.slice(1).join('\n').trim();

        document.getElementById('bookTitle').innerText = title;
        document.getElementById('bookContent').innerHTML = content.split('\n').map(paragraph => `<p>${paragraph.trim()}</p>`).join('');
    })
    .catch(error => console.error('Error fetching data:', error));

