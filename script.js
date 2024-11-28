const facts = {
    all: [
        "Honey never spoils.",
        "Octopuses have three hearts.",
        "Bananas are berries, but strawberries aren't.",
        "A group of flamingos is called a 'flamboyance'.",
        "The Eiffel Tower can be 15 cm taller during the summer."
    ],
    science: [
        "Water can boil and freeze at the same time.",
        "Light takes 8 minutes and 20 seconds to travel from the Sun to the Earth.",
        "A day on Venus is longer than a year on Venus.",
        "The human nose can detect about 1 trillion smells."
    ],
    history: [
        "Cleopatra lived closer to the invention of the iPhone than to the construction of the Great Pyramid.",
        "Oxford University is older than the Aztec Empire.",
        "Woolly mammoths were still alive during the time of the Great Pyramid."
    ],
    animals: [
        "Koalas have fingerprints that are almost indistinguishable from humans.",
        "A shrimp's heart is located in its head.",
        "Dolphins have names for each other."
    ],
};

document.getElementById('generateButton').addEventListener('click', () => {
    const category = document.getElementById('category').value;
    const selectedFacts = facts[category];
    const randomFact = selectedFacts[Math.floor(Math.random() * selectedFacts.length)];
    
    document.getElementById('fact').innerText = randomFact;
    
    // Change background color
    document.querySelector('.container').style.backgroundColor = getRandomColor();
    
    // Play sound
    document.getElementById('clickSound').play();
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
