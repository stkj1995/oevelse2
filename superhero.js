let superhero = {
  navn: "Batman",
  hemmeligIdentitet: "Bruce Wayne",
  evner: ["intelligens", "kampsport", "detektiv", "rigdom"],
  fjender: ["Joker", "Two-Face", "Penguin"],
};

// Udskriv oplysningerne om superhelten til konsollen
console.log("Superheltoplysninger:");
console.log("Navn: " + superhero.navn);
console.log("Hemmelig identitet: " + superhero.hemmeligIdentitet);
console.log("Evner: " + superhero.evner.join(", "));
console.log("Fjender: " + superhero.fjender.join(", "));

// app.js

// Opdaterer DOM med superheltoplysninger
document.getElementById("superhero-name").innerText = "Navn: " + superhero.navn;
document.getElementById("secret-identity").innerText = "Hemmelig identitet: " + superhero.hemmeligIdentitet;
document.getElementById("superpowers").innerText = "Evner: " + superhero.evner.join(", ");
document.getElementById("enemies").innerText = "Fjender: " + superhero.fjender.join(", ");
