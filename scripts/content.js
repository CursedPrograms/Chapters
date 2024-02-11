const data = {
    "title": "The Tale of Aquilia and Frostclaw",
    "content": [
        "Once upon a time in the mystical land of Frostwater, a sea dragon named Aquilia and a yeti named Frostclaw forged an extraordinary friendship...",
        "As they journeyed through the enchanted realms of Frostwater, they encountered magical creatures, ancient artifacts, and breathtaking landscapes...",
        "Their friendship became a symbol of unity in Frostwater, bringing together different species and fostering harmony among the inhabitants...",
        "And so, in the heart of Frostwater, the legacy of Aquilia and Frostclaw lived on, reminding everyone that true friendship knows no bounds."
    ]
};

document.getElementById('bookTitle').innerText = data.title;
document.getElementById('bookContent').innerHTML = data.content.map(paragraph => `<p>${paragraph}</p>`).join('');
