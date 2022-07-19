import * as UI from "./ui.js";
import * as Helper_Functions from "./helpers_functions.js";
import API from "./api.js";

UI.form.addEventListener("submit", searchSong);

function searchSong(e) {
  e.preventDefault();

  const artist = UI.artist.value;
  const song = UI.song.value;

  Helper_Functions.cleanHTML();

  if (artist === "" || song === "") {
    Helper_Functions.alertMessage(
      "All fields are required!",
      "text-red-700",
      "font-black",
      "uppercase",
    );
    UI.form.reset();
  } else {
    const api = new API(artist, song);
    api.searchAPI();
  }
}
