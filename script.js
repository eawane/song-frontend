document.addEventListener("DOMContentLoaded", async function () {
  const container = document.getElementById("songs");

  try {
   const response = await fetch("https://song-backend-qebi.onrender.com/api/songs");

    if (!response.ok) {
      throw new Error("Could not load songs");
    }

    const songs = await response.json();
    container.textContent = "";

    for (const song of songs) {
      const item = document.createElement("section");

      const title = document.createElement("h2");
      title.textContent = song.title;

      const artist = document.createElement("p");
      artist.textContent = `Artist: ${song.artist}`;

      const genre = document.createElement("p");
      genre.textContent = `Genre: ${song.genre.join(", ")}`;

      item.append(title, artist, genre);
      container.appendChild(item);
    }
  } catch (error) {
    container.textContent = "Unable to load songs. Make sure the backend is running.";
    console.error(error);
  }
});