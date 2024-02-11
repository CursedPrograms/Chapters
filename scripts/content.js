const data = {
    "chapters": [
        {
            "title": "Chapter 1: The Tale of Frostclaw",
            "content": [
                `In the desolate and haunting land of Frostwater, where the ethereal glow of the moon shone cold and pale upon the icy landscapes, a melancholic tale unfolded amidst the shadows of a civil war. It was a tale not of heroes and triumph, but of a sea dragon named Aquilia and a yeti known as Frostclaw, who forged a bond amidst the chaos that enveloped their realm.

                As the bitter winds carried the whispers of conflict through Frostwater, Aquilia and Frostclaw embarked on a harrowing journey. The once enchanted realms now echoed with the cries of magical creatures caught in the crossfire, and ancient artifacts were coveted not for their mystical grace but for the power they promised in the throes of war.
                
                Through the war-torn landscapes, where the moonlight struggled to pierce the gloom, Aquilia and Frostclaw faced challenges that went beyond the physical realm. They witnessed the devastation wrought by the warring factions, felt the agony of families torn asunder, and walked upon landscapes scarred by the shadows of conflict.
                
                Yet, in the midst of despair, the unlikely duo clung to their friendship as a flickering candle in the darkness. Aquilia, with scales as cold as the war-torn waters, and Frostclaw, whose fur bore witness to the scars of battle, emerged as symbols of resilience and unity.`
            ]
        },
        {
            "title": "Chapter 2: The Tale of Aquilia",
            "content": [
                `Their journey, fraught with sorrow and haunted by the echoes of war, became a Gothic fable. They traversed through haunted forests where twisted branches clawed at the moonlit sky and crossed desolate moors where the fog clung to the ground like the ghosts of the fallen.

                In their tireless efforts to bridge the chasm between the divided clans, Aquilia and Frostclaw faced not only the physical dangers but the shadows that whispered doubt and discord. Their friendship, tested by the malevolent forces that sought to tear them apart, stood as a testament to the enduring strength of camaraderie in the face of darkness.
                
                And as the war in Frostwater slowly receded, leaving behind a haunted legacy, the tale of Aquilia and Frostclaw lived on. In the heart of the desolate realm, their legacy became a ghostly reminder that even in the most Gothic of times, the bonds of true friendship could transcend the shadows, bringing a glimmer of hope to a land forever marked by the scars of war.`
            ]
        }
    ]
};

let currentChapterIndex = 0;

function setChapterContent(chapterIndex) {
    document.getElementById('bookTitle').innerText = data.chapters[chapterIndex].title;
    document.getElementById('bookContent').innerHTML = data.chapters[chapterIndex].content.map(paragraph => `<p>${paragraph}</p>`).join('');
}

function changeChapterOnClick() {
    currentChapterIndex = (currentChapterIndex + 1) % data.chapters.length;
    setChapterContent(currentChapterIndex);
}

function goBackOnRightClick(event) {
    // Prevent the default context menu
    event.preventDefault();

    // Change chapter index to go back
    currentChapterIndex = (currentChapterIndex - 1 + data.chapters.length) % data.chapters.length;
    setChapterContent(currentChapterIndex);
}

// Set initial content for Chapter 1
setChapterContent(currentChapterIndex);

// Attach the click event to change chapters
document.getElementById('bookContent').addEventListener('click', changeChapterOnClick);

// Attach the contextmenu event to go back a chapter on right-click
document.getElementById('bookContent').addEventListener('contextmenu', goBackOnRightClick);
