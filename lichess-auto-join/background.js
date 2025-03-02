const lichessAPI = "https://lichess.org/api/tournament";

// Fetch upcoming tournaments
async function getUpcomingTournaments() {
    const response = await fetch(lichessAPI);
    const data = await response.json();

    if (data && data.created) {
        return data.created.filter(tournament => 
            new Date(tournament.startsAt) > new Date()
        );
    }
    return [];
}

// Auto-join a tournament
async function joinTournament(tournamentId, authToken) {
    const joinURL = `https://lichess.org/api/tournament/${tournamentId}/join`;

    const response = await fetch(joinURL, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${authToken}`
        }
    });

    return response.ok;
}

// Run every 5 minutes
setInterval(async () => {
    const tournaments = await getUpcomingTournaments();

    if (tournaments.length > 0) {
        const firstTournament = tournaments[0];
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icons/icon48.png",
            title: "Lichess Tournament Alert!",
            message: `Auto-joining ${firstTournament.name} in 1 min!`
        });

        // Join after 1 min
        setTimeout(async () => {
            const success = await joinTournament(firstTournament.id, "YOUR_LICHESS_TOKEN");
            if (success) {
                chrome.notifications.create({
                    type: "basic",
                    iconUrl: "icons/icon48.png",
                    title: "Joined Tournament!",
                    message: `Successfully joined ${firstTournament.name}`
                });
            }
        }, 60000);
    }
}, 300000);
