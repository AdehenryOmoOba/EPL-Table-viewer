import { apiKey } from "./apiKey.js";

export const footballURL =
`https://data.football-api.com/v3/standings/1204?Authorization=${apiKey}`;

 export let teamLogos = {
    "9092": "https://apiv2.allsportsapi.com/logo/88_chelsea.jpg",
    "9259": "https://apiv2.allsportsapi.com/logo/80_manchester-city.jpg",
    "9249": "https://apiv2.allsportsapi.com/logo/84_liverpool.jpg",
    "9427": "https://apiv2.allsportsapi.com/logo/3081_west-ham-united.jpg",
    "9002": "https://apiv2.allsportsapi.com/logo/141_arsenal.jpg",
    "9406": "https://apiv2.allsportsapi.com/logo/164_tottenham-hotspur.jpg",
    "9260": "https://apiv2.allsportsapi.com/logo/102_manchester-united.jpg",
    "9446": "https://apiv2.allsportsapi.com/logo/3077_wolverhampton-wanderers.jpg",
    "9065": "https://apiv2.allsportsapi.com/logo/3079_brighton--hove-albion.jpg",
    "9240": "https://apiv2.allsportsapi.com/logo/155_leicester-city.jpg",
    "9127": "https://apiv2.allsportsapi.com/logo/3429_crystal-palace.jpg",
    "9059": "https://apiv2.allsportsapi.com/logo/3086_brentford.jpg",
    "9008": "https://apiv2.allsportsapi.com/logo/3088_aston-villa.jpg",
    "9158": "https://apiv2.allsportsapi.com/logo/3073_everton.jpg",
    "9363":"https://apiv2.allsportsapi.com/logo/3072_southampton.jpg",
    "9238": "https://apiv2.allsportsapi.com/logo/3103_leeds-united.jpg",
    "9423": "https://apiv2.allsportsapi.com/logo/3427_watford.jpg",
    "9072": "https://apiv2.allsportsapi.com/logo/3075_burnley.jpg",
    "9296": "https://apiv2.allsportsapi.com/logo/3093_norwich-city.jpg",
    "9287": "https://apiv2.allsportsapi.com/logo/3100_newcastle-united.jpg"
}




export function rowsGen() {
    let rows = []
    for(let i=1; i <= 20;) {
        let tableRow = "tableRow" + [i]
        tableRow = document.createElement('tr')
        rows.push(tableRow)
         i++
    }
    return rows
}

