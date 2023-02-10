// This is JavaScript code that creates buttons and assigns event listeners to them. The code starts by defining a constant variable sounds which is an array of strings representing different sounds.

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

// Next, the code uses the forEach() method to iterate over the sounds array and perform certain actions for each sound.
// For each sound, the code first creates a new button element using document.createElement('button'). The newly created button element is stored in a constant btn.

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  // After that, the code assigns an event listener to the button using the addEventListener() method. The event listener listens for a 'click' event and when triggered, it calls the stopSongs() function and plays the sound using document.getElementById(sound).play().

  btn.addEventListener("click", () => {
    stopSongs();

    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

// The stopSongs() function stops all the songs that are currently playing. It does this by using the forEach() method to iterate over the sounds array and calling the pause() method and setting currentTime to 0 for each sound.

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
