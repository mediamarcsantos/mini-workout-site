const workouts = [
  [
    "Press: Dumbbell Bench — 2 sets × 6–10",
    "Pull: Seated Row — 2 sets × 8–12",
    "Legs: Goblet Squat — 2 sets × 8–12"
  ],
  [
    "Press: Overhead Press — 2 sets × 6–10",
    "Pull: Lat Pulldown — 2 sets × 8–12",
    "Legs: Romanian Deadlift — 2 sets × 6–10"
  ],
  [
    "Press: Incline DB Press — 2 sets × 6–10",
    "Pull: One-Arm Row — 2 sets × 8–12/side",
    "Legs: Split Squat — 2 sets × 8–12/side"
  ],
  [
    "Press: Push-ups — 2 sets × near-technical-failure",
    "Pull: Chest-Supported Row — 2 sets × 8–12",
    "Legs: Leg Press — 2 sets × 10–15"
  ]
];

const btn = document.getElementById("btn");
const workoutList = document.getElementById("workoutList");

btn.addEventListener("click", () => {
  const pick = workouts[Math.floor(Math.random() * workouts.length)];
  workoutList.innerHTML = pick.map(item => `<li>${item}</li>`).join("");
});
