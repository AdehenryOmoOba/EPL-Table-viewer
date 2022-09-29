import { apiKey } from "./apiKey.js";

export const fetchOptions =  {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': apiKey,
		'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
	}
};

export const footballURL =
"https://api-football-beta.p.rapidapi.com/standings?season=2022&league=39";

export function rowsGen() {
    let rows = []
    for(let i=1; i < 21;) {
        let tableRow = "tableRow" + [i]
        tableRow = document.createElement('tr')
        rows.push(tableRow)
         i++
    }
    return rows
}

