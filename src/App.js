import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Hero from './components/hero';
import Data from './components/data';
import styled from 'styled-components';

const correctDay = (d, m) => {
  const longs = [1, 3, 5, 7, 8, 10, 12];
  if (d < 1) return 1;
  if (d > 28 && m === 2) return 28;
  if (d > 30 && longs.includes(m)) return 30;
  if (d > 31) return 31;
  return d;
};
const ImgDiv = styled.div`
  max-width: 95%;
  margin: 20px auto;
`;
const TitleH1 = styled.h1`
  color: #fff;
`;

const App = () => {
  const [date, setDate] = useState({ m: 6, d: 16, y: 1995 });
  const [form, setForm] = useState({ m: 6, d: 16, y: 1995 });
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const today = new Date();
    setDate({
      m: today.getMonth() + 1,
      d: today.getDate(),
      y: today.getFullYear()
    });
    setForm({
      m: today.getMonth() + 1,
      d: today.getDate(),
      y: today.getFullYear()
    });
    setLoading(true);
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=27GKmnNpc9MsQHPxjigCerSNkjFq8XbxytTCSpMP'
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  const updateForm = ({ target: { name, value } }) => {
    const newForm = { m: form.m, d: form.d, y: form.y };
    if (name === 'y') {
      if (Number(value) > date.y) {
        newForm.y = 2020;
        value = 2020;
      } else if (Number(value) < 1995) {
        newForm.y = 1995;
        value = 1995;
      } else {
        newForm.y = Number(value);
      }
    } else if (name === 'm') {
      if (Number(value) < 1) {
        newForm.m = 1;
        value = 1;
      } else if (Number(value) > 12) {
        newForm.m = 12;
        value = 12;
      } else {
        newForm.m = Number(value);
      }
    } else if (name === 'd') {
      newForm.d = correctDay(Number(value), newForm.m);
    }
    console.log(newForm);
    if (newForm.y === 2020 && newForm.m >= date.m) {
      newForm.m = date.m;
      if (newForm.d > date.d) newForm.d = date.d;
    } else if (newForm.y === 1995 && newForm.m <= 6) {
      newForm.m = 6;
      if (newForm.d < 16) newForm.d = 16;
    }
    setForm(newForm);
  };
  const getData = (ev) => {
    ev.preventDefault();
    const dateString = `${form.y}-${('0' + form.m).slice(-2)}-${(
      '0' + form.d
    ).slice(-2)}`;
    console.log(dateString);
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=27GKmnNpc9MsQHPxjigCerSNkjFq8XbxytTCSpMP&date=${dateString}`
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setData({
          hdurl: 'nasa.jpg',
          date: dateString,
          title: 'Oops!',
          explanation: "Looks like the API can't find that picture."
        });
      });
  };

  return (
    <div className='App'>
      <TitleH1>NASA's Astronomy Photo of the Day</TitleH1>
      <input
        placeholder='Month'
        onChange={updateForm}
        min='1'
        max='12'
        type='number'
        name='m'
      />
      <input
        placeholder='Day'
        onChange={updateForm}
        min='1'
        max='31'
        type='number'
        name='d'
      />
      <input
        placeholder='Year'
        onChange={updateForm}
        min='1995'
        max={`${date.y}`}
        type='number'
        name='y'
      />
      <button onClick={getData}>Search</button>
      {loading ? (
        <TitleH1>Loading... Please wait.</TitleH1>
      ) : (
        <ImgDiv>
          <Hero data={data} />
          <Data data={data} />
        </ImgDiv>
      )}
    </div>
  );
};

export default App;
