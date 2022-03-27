import React from "react";

const ListItems = ({ path, total, setItem, selected }) => {
  let listItems = [];
  for (let i = 0; i < total; i++) {
    listItems.push(
      <div key={i} onClick={() => setItem(i)} className={selected === i? 'selected': ''} >
        <img src={`character/${path}/${i+1}.png`} className="img-item" alt="" height={60}/>
      </div>
    );
  }
  return (<div className="items">{listItems}</div>);
};

export default ListItems;

