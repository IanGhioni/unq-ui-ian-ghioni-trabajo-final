
export function getLeaderboard() {
    return JSON.parse(localStorage.getItem("leaderboard")) ?? [];
}

export function saveScore(score) {
    const leaderboard = getLeaderboard();

    leaderboard.push(score);

    leaderboard.sort((a, b) => b - a);

    localStorage.setItem(
        "leaderboard",
        JSON.stringify(leaderboard.slice(0, 10))
    );
}