import axios from "axios";
import bodyParser from "body-parser";
import express from "express";

const app = new express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/help", (req, res) => {
  res.render("help.ejs");
});

app.post("/submit", async (req, res) => {
  try {
    var latitude = req.body.latitude;
    var longitude = req.body.longitude;
    var location = latitude + ", " + longitude;

    const responseTime = await axios.get(
      `https://www.timeapi.io/api/time/current/coordinate?latitude=${latitude}&longitude=${longitude}`
    );
    const timeZoneF = responseTime.data.timeZone;
    console.log(timeZoneF);

    const responseWeather = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,rain,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,rain_sum,wind_speed_10m_max&wind_speed_unit=ms&timezone=${timeZoneF}&forecast_days=3`
    );
    console.log(responseWeather.data);
    res.render("index.ejs", {
      weatherData: responseWeather.data,
      timeData : responseTime.data,
      map: location,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
