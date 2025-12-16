import './App.css';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CloudIcon from '@mui/icons-material/Cloud';
import Button from '@mui/material/Button';
import moment from 'moment/moment';
import "moment/min/locales";

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

moment.locale("ar");
let Cancelaxios = null;

function App() {
  const { t, i18n } = useTranslation();

  const [date, setDate] = useState("");
  const [temp, setTemp] = useState({
    Number: null,
    description: "",
    min: null,
    max: null,
    icon: null,
  });

  const [local, setLocal] = useState("ar");

  const change = () => {
    const newLang = local === "en" ? "ar" : "en";
    setLocal(newLang);
    i18n.changeLanguage(newLang);
    moment.locale(newLang);
    setDate(moment().format('MMMM Do YYYY, h:mm:ss a'));
  };

  useEffect(() => {
    i18n.changeLanguage(local);
    setDate(moment().format('MMMM Do YYYY, h:mm:ss a'));

    axios.get(
      'https://api.openweathermap.org/data/2.5/weather?lat=33.5731&lon=-7.5898&appid=710c525ed819a5558408251ad244e69a',
      {
        cancelToken: new axios.CancelToken(c => {
          Cancelaxios = c;
        })
      }
    )
    .then(res => {
      setTemp({
        Number: Math.round(res.data.main.temp - 272.15),
        min: Math.round(res.data.main.temp_min - 272.15),
        max: Math.round(res.data.main.temp_max - 272.15),
        description: res.data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
      });
    })
    .catch(err => console.log(err));

    return () => Cancelaxios && Cancelaxios();
  }, []);

  return (
    <div className="App">
      <Container maxWidth="sm">
        <div className="weather-wrapper">

          <div className="weather-card" dir={local === "ar" ? "rtl" : "ltr"}>

            <div className="city-time">
              <Typography variant="h3">{t("Casablanca")}</Typography>
              <Typography variant="h5">{date}</Typography>
            </div>

            <hr />

            <div className="weather-content">
              <div>
                <div className="temp-main">
                  <Typography variant="h1">{temp.Number}</Typography>
                  {temp.icon && <img src={temp.icon} alt="weather" />}
                </div>

                <Typography variant="h6" className="temp-description">
                  {t(temp.description)}
                </Typography>

                <div className="temp-minmax">
                  <span>{t("Min")} {temp.min}°</span>
                  <span>|</span>
                  <span>{t("Max")} {temp.max}°</span>
                </div>
              </div>

              <CloudIcon className="cloud-icon" />
            </div>
          </div>

          <div className="lang-switch">
            <Button onClick={change}>
              {local === "en" ? "English" : "Arabic"}
            </Button>
          </div>

        </div>
      </Container>
    </div>
  );
}

export default App;
