const labels = document.querySelectorAll('.form-control label')

// The code is looping through each label element on the page and transforming its text into a series of span elements, each with its own inline transition delay. The delay is calculated based on the position of each letter within the original text, with a delay of 50ms multiplied by the index of each letter. This creates the illusion of each letter appearing in sequence and creates a transition effect.

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})