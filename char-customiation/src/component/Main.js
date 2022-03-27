import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import ListItems from "./ListItems";

const Main = ({total}) => {
  const [body, setBody] = useState(0);
  const [hair, setHair] = useState(0);
  const [eyebrows, setEyebrows] = useState(0);
  const [eyes, setEyes] = useState(0);
  const [mouths, setMouths] = useState(0);
  const [hats, setHats] = useState(0);
  const [glasses, setGlasses] = useState(0);
  const [clothes1, setClothes1] = useState(0);
  const [clothes2, setClothes2] = useState(0);
  const [clothes3, setClothes3] = useState(0);
  const randomize = () => {
    setBody(Math.floor(Math.random() * total.body));
    setHair(Math.floor(Math.random() * total.hair));
    setEyebrows(Math.floor(Math.random() * total.eyebrows));
    setEyes(Math.floor(Math.random() * total.eyes));
    setMouths(Math.floor(Math.random() * total.mouths));
    setHats(Math.floor(Math.random() * total.hats));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setClothes1(Math.floor(Math.random() * total.clothes1));
    setClothes2(Math.floor(Math.random() * total.clothes2));
    setClothes3(Math.floor(Math.random() * total.clothes3));
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setBody(items.body);
      setHair(items.hair);
      setEyebrows(items.eyebrows);
      setEyes(items.eyes);
      setMouths(items.mouths);
      setHats(items.hats);
      setGlasses(items.glasses);
      setClothes1(items.clothes1);
      setClothes2(items.clothes2);
      setClothes3(items.clothes3);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "items",
      JSON.stringify({
        body,
        hair,
        eyebrows,
        eyes,
        mouths,
        hats,
        glasses,
        clothes1,
        clothes2,
        clothes3,
      })
    );
  }, [
    body,
    hair,
    eyebrows,
    eyes,
    mouths,
    hats,
    glasses,
    clothes1,
    clothes2,
    clothes3,
  ]);


  return (
    <div className="main-container">
      <Avatar
        body={body}
        hair={hair}
        eyebrows={eyebrows}
        eyes={eyes}
        mouths={mouths}
        hats={hats}
        glasses={glasses}
        clothes1={clothes1}
        clothes2={clothes2}
        clothes3={clothes3}
        randomize={randomize}
      />
      <div className="list-items-wrapper">
        <div className="list-items">
          <h2>Body</h2>
          <ListItems
            path="body"
            total={total.body}
            setItem={setBody}
            selected={body}
          />
        </div>
        <div className="list-items">
          <h2>Hair</h2>
          <ListItems
            path="hair"
            total={total.hair}
            setItem={setHair}
            selected={hair}
          />
        </div>
        <div className="list-items">
          <h2>Eyebrows</h2>
          <ListItems
            path="eyebrows"
            total={total.eyebrows}
            setItem={setEyebrows}
            selected={eyebrows}
          />
        </div>
        <div className="list-items">
          <h2>Eyes</h2>
          <ListItems
            path="eyes"
            total={total.eyes}
            setItem={setEyes}
            selected={eyes}
          />
        </div>
        <div className="list-items">
          <h2>Mouths</h2>
          <ListItems
            path="mouths"
            total={total.mouths}
            setItem={setMouths}
            selected={mouths}
          />
        </div>
        <div className="list-items">
          <h2>Hats</h2>
          <ListItems
            path="hats"
            total={total.hats}
            setItem={setHats}
            selected={hats}
          />
        </div>
        <div className="list-items">
          <h2>Glasses</h2>
          <ListItems
            path="glasses"
            total={total.glasses}
            setItem={setGlasses}
            selected={glasses}
          />
        </div>
        <div className="list-items">
          <h2>Clothes 1</h2>
          <ListItems
            path="clothes1"
            total={total.clothes1}
            setItem={setClothes1}
            selected={clothes1}
          />
        </div>
        <div className="list-items">
          <h2>Clothes 2</h2>
          <ListItems
            path="clothes2"
            total={total.clothes2}
            setItem={setClothes2}
            selected={clothes2}
          />
        </div>
        <div className="list-items">
          <h2>Clothes 3</h2>
          <ListItems
            path="clothes3"
            total={total.clothes3}
            setItem={setClothes3}
            selected={clothes3}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
