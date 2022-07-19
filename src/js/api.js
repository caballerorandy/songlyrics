import * as UI from "./ui.js";
import * as Helper_Functions from "./helpers_functions.js";

class API {
  constructor(artist, song) {
    this.artist = artist;
    this.song = song;
  }

  async searchAPI() {
    const url = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`;

    Helper_Functions.cleanHTML();
    Helper_Functions.spinner();

    try {
      const response = await fetch(url);
      const responseData = await response.json();
      const { lyrics } = responseData;

      if (lyrics) {
        UI.result.textContent = lyrics;
        UI.form.reset();
      } else {
        Helper_Functions.cleanHTML();
        Helper_Functions.alertMessage(
          "Lyrics not found!",
          "text-red-700",
          "font-black",
          "uppercase",
        );
        UI.form.reset();
      }
    } catch (error) {
      if (error) {
        console.log(Helper_Functions.alertMessage("Error! Check the URL"));
      }
    }
  }
}

export default API;
