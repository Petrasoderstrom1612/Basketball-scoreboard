let countHome = 0
let countGuest = 0
let totalScoreHome = document.getElementById("home-count")
let totalScoreGuest = document.getElementById("guest-count")

function GiveHome1point() {
    countHome += 1
    totalScoreHome.textContent = countHome
}

function GiveHome2points() {
    countHome += 2
    totalScoreHome.textContent = countHome
}

function GiveHome3points() {
    countHome += 3
    totalScoreHome.textContent = countHome
}

function GiveGuest1point() {
    countGuest += 1
    totalScoreGuest.textContent = countGuest
}

function GiveGuest2points() {
    countGuest += 2
    totalScoreGuest.textContent = countGuest
}

function GiveGuest3points() {
    countGuest += 3
    totalScoreGuest.textContent = countGuest
}

function resetPoints() {
    countHome = 0
    countGuest = 0
    totalScoreHome.textContent = countHome
    totalScoreGuest.textContent = countGuest
}