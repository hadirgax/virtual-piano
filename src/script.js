
document.addEventListener("keypress", (event) => {
   if (event.code === "KeyA" || event.code === "KeyS" ||
       event.code === "KeyD" || event.code === "KeyF" ||
       event.code === "KeyG" || event.code === "KeyH" || event.code === "KeyJ") {
       // console.log(`The '${event.key}' is pressed.`)
       let audio = new Audio(`white_keys/${event.key.toUpperCase()}.mp3`);
       audio.play();
   } else if (event.code === "KeyW" || event.code === "KeyE" ||
       event.code === "KeyT" || event.code === "KeyY" || event.code === "KeyU") {
       // console.log(`The '${event.key}' is pressed.`)
       let audio = new Audio(`black_keys/${event.key.toUpperCase()}.mp3`);
       audio.play();
   } else {
       console.warn(`The '${event.key}' can not be pressed.`)
   }
});
