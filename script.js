document.addEventListener("DOMContentLoaded", function () {
  // Opret et array med navnene på dine yndlings-tracks
  var tracks = ["Two of Us", "Dig a Pony", "Across the Universe", "I Me Mine", "Dig it", "Let it be", "Maggie Mae", "I've got a feeling", "One after 909", "Get Back"];

  // Hent reference til ul-elementet
  var playliste = document.getElementById("playliste");

  // Loop igennem arrayet med forEach og tilføj hvert track som et listeelement
  tracks.forEach(function (track) {
    var listItem = document.createElement("li");
    listItem.textContent = track;
    playliste.appendChild(listItem);
  });
});
