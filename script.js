const standings = document.querySelector(".standings");
const standingUrl = "https://ergast.com/api/f1/current/driverStandings.json";

fetch(standingUrl)
  .then((res) => res.json())
  .then((res) => {
    displayStandings(res);
  });

function displayStandings(stand) {
  let name1 =
    stand.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver
      .code;
  let score1 =
    stand.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points;
  let place1 =
    stand.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position;
  const mockStandings1 = `
    <div class="standing-form">
        <img class="verstappen" src="https://cdn.racingnews365.com/Riders/Verstappen/_570x570_crop_center-center_none/f1_2023_mv_red_lg.png?v=1677514463">
        <p>${place1}</p>
        <p>${name1}</p>
        <p>${score1}</p>
    </div>
   `;
  let name2 =
    stand.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver
      .code;
  let score2 =
    stand.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].points;
  let place2 =
    stand.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].position;
  const mockStandings2 = `
    <div class="standing-form">
        <p>${place2}</p>
        <p>${name2}</p>
        <p>${score2}</p>
    </div>
   `;
  let name3 =
    stand.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver
      .code;
  let score3 =
    stand.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].points;
  let place3 =
    stand.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].position;
  const mockStandings3 = `
    <div class="standing-form">
        <p>${place3}</p>
        <p>${name3}</p>
        <p>${score3}</p>
    </div>
   `;
  let name4 =
    stand.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver
      .code;
  let score4 =
    stand.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].points;
  let place4 =
    stand.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].position;
  const mockStandings4 = `
    <div class="standing-form">
        <p>${place4}</p>
        <p>${name4}</p>
        <p>${score4}</p>
    </div>
   `;
  let name5 =
    stand.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver
      .code;
  let score5 =
    stand.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].points;
  let place5 =
    stand.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].position;
  const mockStandings5 = `
    <div class="standing-form">
        <p>${place5}</p>
        <p>${name5}</p>
        <p>${score5}</p>
    </div>
   `;
  standings.insertAdjacentHTML("beforeend", mockStandings1);
  standings.insertAdjacentHTML("beforeend", mockStandings2);
  standings.insertAdjacentHTML("beforeend", mockStandings3);
  standings.insertAdjacentHTML("beforeend", mockStandings4);
  standings.insertAdjacentHTML("beforeend", mockStandings5);
}

const nextRace = document.querySelector(".next-race");
const nextRaceUrl = "https://ergast.com/api/f1/2024.json";

fetch(nextRaceUrl)
  .then((res) => res.json())
  .then((res) => {
    displayNextRace(res);
  });

function displayNextRace(next) {
  let race1 = next.MRData.RaceTable.Races[0].raceName;
  let race2 = next.MRData.RaceTable.Races[0].date;
  const mockNext = `
    <div class="next-race-in">
        <p>${race1}</p>
        <img class="bahrain-track" src="https://img.redbull.com/images/e_trim:10:transparent/c_limit,w_1200/bo_5px_solid_rgb:00000000/q_auto,f_png/redbullcom/2020/2/12/mr6aat7ryxygkucu01wz/bahrain-international-circuit">
        <p>${race2}</p>
    </div>
    `;
  nextRace.insertAdjacentHTML("beforeend", mockNext);
}

const constructors = document.querySelector(".constructors");
const constUrl = "https://ergast.com/api/f1/current/constructorStandings.json";

fetch(constUrl)
  .then((res) => res.json())
  .then((res) => {
    displayCon(res);
  });

const weather = document.querySelector(".next-race");
const weatherUrl =
  "https://api.open-meteo.com/v1/forecast?latitude=26.0333&longitude=50.55&current=temperature_2m,rain,wind_speed_10m&hourly=wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&forecast_days=1";

fetch(weatherUrl)
  .then((res) => res.json())
  .then((res) => {
    console.log(res)

    displayWeather(res);
  });

function displayWeather(currentWeather) {
  let temperature = currentWeather.current.temperature_2m;
  let rain = currentWeather.current.rain;
  let wind = currentWeather.current.wind_speed_10m;

  const mockTemp = `
          <div class="temp-card">
          <p>Track Temperature: ${temperature} F</p>
          <p>Rain: ${rain}</p>
            <p>Wind: ${wind}</p>
          </div>
        `;

  weather.innerHTML += mockTemp;
}

function displayCon(constructor) {
  let pos1 =
    constructor.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0]
      .position;
  let name1 =
    constructor.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0]
      .Constructor.name;
  let points1 =
    constructor.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0]
      .points;

  const mockCons1 = `
    <div class = "constructor-card">
    <img class="redbull" src="https://stunodracing.net/index.php?attachments/redbull-racing-team-png.128674/" >
      <p>${pos1}</p>
      <p>${name1}</p>
      <p>${points1}</p>
    </div>
    `;

  let pos2 =
    constructor.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[1]
      .position;
  let name2 =
    constructor.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[1]
      .Constructor.name;
  let points2 =
    constructor.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[1]
      .points;

  const mockCons2 = `
    <div class = "constructor-card">
      <p>${pos2}</p>
      <p>${name2}</p>
      <p>${points2}</p>
    </div>
    `;
  let pos3 =
    constructor.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[2]
      .position;
  let name3 =
    constructor.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[2]
      .Constructor.name;
  let points3 =
    constructor.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[3]
      .points;

  const mockCons3 = `
    <div class = "constructor-card">
      <p>${pos3}</p>
      <p>${name3}</p>
      <p>${points3}</p>
    </div>
    `;

  constructors.insertAdjacentHTML("beforeend", mockCons1);
  constructors.insertAdjacentHTML("beforeend", mockCons2);
  constructors.insertAdjacentHTML("beforeend", mockCons3);
}
