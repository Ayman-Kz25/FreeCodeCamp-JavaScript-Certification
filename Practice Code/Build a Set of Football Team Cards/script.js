const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    {
      name: "Diego Maradona",
      position: "midfielder",
      isCaptain: true,
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Jorge Burruchaga",
      position: "forward",
      isCaptain: false,
    }
  ]
};

const team = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersSelect = document.getElementById("players");

// Display team information
team.textContent = footballTeam.team;
year.textContent = footballTeam.year;
headCoach.textContent = footballTeam.headCoach;

// Function to display players
function displayPlayers(position) {
  const players =
    position === "all"
      ? footballTeam.players
      : footballTeam.players.filter(
          (player) => player.position === position
        );

  playerCards.innerHTML = players
    .map(
      (player) => `
      <div class="player-card">
        <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
        <p>Position: ${player.position}</p>
      </div>
    `
    )
    .join("");
}

// Show all players initially
displayPlayers("all");

// Filter when dropdown changes
playersSelect.addEventListener("change", (event) => {
  displayPlayers(event.target.value);
});