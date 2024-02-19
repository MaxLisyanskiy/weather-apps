import axios from "axios";
import https from "https";

import { getKeyValue } from "./storage.js";
import { APP_DICTIONARY } from "./../shared/dictionary.js";

const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case "01":
      return "☀️";
    case "02":
      return "🌤️";
    case "03":
      return "☁️";
    case "04":
      return "☁️";
    case "09":
      return "🌧️";
    case "10":
      return "🌦️";
    case "11":
      return "🌩️";
    case "13":
      return "❄️";
    case "50":
      return "🌫️";
  }
};

const getWeather = async (city) => {
  const token =
    process.env.API_TOKEN ?? (await getKeyValue(APP_DICTIONARY.token));

  if (!token) {
    throw new Error("Не задан ключ API, задайте его через команду -t [TOKEN]");
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "ru",
        units: "metric",
      },
    },
  );

  return data;
};

const getWeather_Deprecated = async (city) => {
  const token =
    process.env.API_TOKEN ?? (await getKeyValue(APP_DICTIONARY.token));

  if (!token) {
    throw new Error("Не задан ключ API, задайте его через команду -t [TOKEN]");
  }

  const url = new URL("https://api.openweathermap.org/data/2.5/weather");

  url.searchParams.append("q", city);
  url.searchParams.append("appid", token);
  url.searchParams.append("units", "metric");
  url.searchParams.append("lang", "ru");

  let result = "";

  https.get(url, (response) => {
    response.on("data", (chunck) => (result += chunck));

    response.on("end", () => JSON.parse(result));
  });
};

export { getIcon, getWeather };
