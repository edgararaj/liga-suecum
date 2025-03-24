import json
from collections import defaultdict

def read_teams_from_file(filename):
    with open(filename, 'r') as file:
        teams = [line.strip() for line in file if line.strip()]
    return teams

def generate_tournament_schedule(teams):
    num_teams = len(teams)
    if num_teams % 2 == 1:  # If odd number of teams, add a "BYE" team
        teams.append("BYE")
    
    num_journeys = len(teams) - 1  # Each team plays every other team once
    schedule = defaultdict(list)
    team_matches = defaultdict(list)
    
    team_list = teams[:]  # Copy the list to avoid modifying the original

    for journey in range(1, num_journeys + 1):
        matches = []
        bye_team = None
        for i in range(len(team_list) // 2):
            team1 = team_list[i]
            team2 = team_list[-(i + 1)]
            if "BYE" in (team1, team2):  # Identify the bye team
                bye_team = team2 if team1 == "BYE" else team1
            else:
                matches.append({"team1": team1, "team2": team2})
                team_matches[team1].append(journey)
                team_matches[team2].append(journey)
        
        if bye_team:  # Include bye team in the JSON output
            matches.append({"team": bye_team, "bye": True})
        
        schedule[journey] = matches  # Store matches in the journey
        
        # Rotate the list for the next round (excluding the first team)
        team_list = [team_list[0]] + team_list[-1:] + team_list[1:-1]
    
    return dict(schedule), team_matches

def export_schedule_to_json(schedule, filename):
    json_schedule = []
    for journey, matches in schedule.items():
        json_schedule.append({
            "startDate": "<to be filled>",
            "endDate": "<to be filled>",
            "games": matches
        })
    
    with open(filename, 'w') as json_file:
        json.dump(json_schedule, json_file, indent=2)

# Example usage:
teams = read_teams_from_file("teams.txt")
schedule, team_matches = generate_tournament_schedule(teams)
export_schedule_to_json(schedule, "tournament_schedule.json")

# Print schedule
for journey, matches in schedule.items():
    print(f"Journey {journey}: {matches}")

print("\nGames per team:")
for team, journeys in team_matches.items():
    print(f"{team}: {len(journeys)} games in journeys {journeys}")

