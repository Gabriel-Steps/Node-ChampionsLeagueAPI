import { playerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database:playerModel[] = [
        {
            "id": 1,
            "name": "Lionel Messi",
            "club": "Paris Saint-German",
            "nationality": "Argentina",
            "position": "foward",
            "statistics": {
            "overall": 93,
            "pace": 85,
            "shooting": 94,
            "passing": 94,
            "dribbling": 95,
            "defending": 35,
            "physical": 65
            }
        },
        {
            "id": 2,
            "name": "Cristiano Ronaldo",
            "club": "Al Nassr",
            "nationality": "Portugal",
            "position": "forward",
            "statistics": {
                "overall": 92,
                "pace": 89,
                "shooting": 95,
                "passing": 87,
                "dribbling": 90,
                "defending": 35,
                "physical": 80
            }
        },
        {
            "id": 3,
            "name": "Neymar Jr.",
            "club": "Al Hilal",
            "nationality": "Brazil",
            "position": "forward",
            "statistics": {
                "overall": 91,
                "pace": 90,
                "shooting": 91,
                "passing": 92,
                "dribbling": 96,
                "defending": 30,
                "physical": 60
            }
        },
        {
            "id": 4,
            "name": "Kylian Mbappé",
            "club": "Paris Saint-Germain",
            "nationality": "France",
            "position": "forward",
            "statistics": {
                "overall": 91,
                "pace": 97,
                "shooting": 91,
                "passing": 87,
                "dribbling": 92,
                "defending": 35,
                "physical": 75
            }
        },
        {
            "id": 5,
            "name": "Robert Lewandowski",
            "club": "Barcelona",
            "nationality": "Poland",
            "position": "forward",
            "statistics": {
                "overall": 91,
                "pace": 83,
                "shooting": 95,
                "passing": 81,
                "dribbling": 88,
                "defending": 40,
                "physical": 85
            }
        },
        {
            "id": 6,
            "name": "Karim Benzema",
            "club": "Al Ittihad",
            "nationality": "France",
            "position": "forward",
            "statistics": {
                "overall": 90,
                "pace": 83,
                "shooting": 93,
                "passing": 89,
                "dribbling": 90,
                "defending": 35,
                "physical": 75
            }
        },
        {
            "id": 7,
            "name": "Mohamed Salah",
            "club": "Liverpool",
            "nationality": "Egypt",
            "position": "forward",
            "statistics": {
                "overall": 90,
                "pace": 90,
                "shooting": 92,
                "passing": 87,
                "dribbling": 93,
                "defending": 40,
                "physical": 65
            }
        },
        {
            "id": 8,
            "name": "Harry Kane",
            "club": "Bayern Munich",
            "nationality": "England",
            "position": "forward",
            "statistics": {
                "overall": 90,
                "pace": 79,
                "shooting": 93,
                "passing": 87,
                "dribbling": 85,
                "defending": 40,
                "physical": 80
            }
        },
        {
            "id": 9,
            "name": "Son Heung-min",
            "club": "Tottenham Hotspur",
            "nationality": "South Korea",
            "position": "forward",
            "statistics": {
                "overall": 89,
                "pace": 90,
                "shooting": 90,
                "passing": 85,
                "dribbling": 90,
                "defending": 30,
                "physical": 70
            }
        },
        {
            "id": 10,
            "name": "Romelu Lukaku",
            "club": "AS Roma",
            "nationality": "Belgium",
            "position": "forward",
            "statistics": {
                "overall": 89,
                "pace": 80,
                "shooting": 90,
                "passing": 80,
                "dribbling": 85,
                "defending": 40,
                "physical": 90
            }
        },
        {
            "id": 11,
            "name": "Gareth Bale",
            "club": "Retired",
            "nationality": "Wales",
            "position": "forward",
            "statistics": {
                "overall": 88,
                "pace": 92,
                "shooting": 89,
                "passing": 84,
                "dribbling": 88,
                "defending": 30,
                "physical": 78
            }
        },
        {
            "id": 12,
            "name": "Antoine Griezmann",
            "club": "Atlético Madrid",
            "nationality": "France",
            "position": "forward",
            "statistics": {
                "overall": 88,
                "pace": 84,
                "shooting": 88,
                "passing": 89,
                "dribbling": 87,
                "defending": 40,
                "physical": 70
            }
        },
        {
            "id": 13,
            "name": "Raheem Sterling",
            "club": "Aston Villa",
            "nationality": "England",
            "position": "forward",
            "statistics": {
                "overall": 88,
                "pace": 90,
                "shooting": 85,
                "passing": 83,
                "dribbling": 90,
                "defending": 30,
                "physical": 65
            }
        },
        {
            "id": 14,
            "name": "Luis Suárez",
            "club": "Grêmio",
            "nationality": "Uruguay",
            "position": "forward",
            "statistics": {
                "overall": 88,
                "pace": 79,
                "shooting": 91,
                "passing": 82,
                "dribbling": 87,
                "defending": 35,
                "physical": 78
            }
        },
        {
            "id": 15,
            "name": "Eden Hazard",
            "club": "Retired",
            "nationality": "Belgium",
            "position": "forward",
            "statistics": {
                "overall": 88,
                "pace": 87,
                "shooting": 86,
                "passing": 90,
                "dribbling": 91,
                "defending": 30,
                "physical": 70
            }
        },
        {
            "id": 16,
            "name": "Duvan Zapata",
            "club": "Atalanta",
            "nationality": "Colombia",
            "position": "forward",
            "statistics": {
                "overall": 87,
                "pace": 80,
                "shooting": 88,
                "passing": 77,
                "dribbling": 83,
                "defending": 40,
                "physical": 88
            }
        },
        {
            "id": 17,
            "name": "Gerard Moreno",
            "club": "Villarreal",
            "nationality": "Spain",
            "position": "forward",
            "statistics": {
                "overall": 87,
                "pace": 83,
                "shooting": 87,
                "passing": 81,
                "dribbling": 84,
                "defending": 35,
                "physical": 75
            }
        },
        {
            "id": 18,
            "name": "Patrik Schick",
            "club": "Bayer Leverkusen",
            "nationality": "Czech Republic",
            "position": "forward",
            "statistics": {
                "overall": 86,
                "pace": 81,
                "shooting": 86,
                "passing": 79,
                "dribbling": 80,
                "defending": 35,
                "physical": 82
            }
        },
        {
            "id": 19,
            "name": "Andréj Kramarić",
            "club": "Hoffenheim",
            "nationality": "Croatia",
            "position": "forward",
            "statistics": {
                "overall": 86,
                "pace": 82,
                "shooting": 84,
                "passing": 80,
                "dribbling": 83,
                "defending": 30,
                "physical": 75
            }
        },
        {
            "id": 20,
            "name": "Cody Gakpo",
            "club": "Liverpool",
            "nationality": "Netherlands",
            "position": "forward",
            "statistics": {
                "overall": 86,
                "pace": 87,
                "shooting": 84,
                "passing": 81,
                "dribbling": 85,
                "defending": 30,
                "physical": 72
            }
        }
    ];

export const findAllPlayers = async (): Promise<playerModel[]> => {
    return database;
}
export const findPlayerById = async (id:number): Promise<playerModel | undefined> => {
    return database.find(player => player.id === id);
}

export const insertPlayer = async (player: playerModel) =>{
    database.push(player);
}

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex(player => player.id === id);
    if(index !== -1){
        database.splice(index, 1);
        return true
    }
    return false;
} 

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel) => {
    const playerIndex = database.findIndex(player => player.id === id);
    if(playerIndex !== -1){
        database[playerIndex].statistics = statistics;
    }
    return database[playerIndex];
}