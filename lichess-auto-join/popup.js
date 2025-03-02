document.getElementById("join-now").addEventListener("click", async () => {
    const tournaments = await getUpcomingTournaments();
    
    if (tournaments.length > 0) {
        const firstTournament = tournaments[0];
        const success = await joinTournament(firstTournament.id, "lip_V2HSFsiIemujxZmzmqcV");
        
        alert(success ? `Joined ${firstTournament.name}!` : "Failed to join.");
    } else {
        alert("No upcoming tournaments found.");
    }
});
