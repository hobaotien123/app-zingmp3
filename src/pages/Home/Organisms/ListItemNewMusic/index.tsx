// libs
import React from "react";
// components
import ItemNewMusic from "../../Atoms/ItemNewMusic";
// others
import "./style.scss";
const ListItemNewMusic: React.FC = () => {
  const listItemNewMusic = [
    { thumItemNewMusic: "https://via.placeholder.com/390x200" },
    { thumItemNewMusic: "https://via.placeholder.com/390x200" },
    { thumItemNewMusic: "https://via.placeholder.com/390x200" },
  ];
  return (
    <div className="list-item-newmusic-wrapper">
      {listItemNewMusic.map((item, index) => (
        <ItemNewMusic item={item} key={index} />
      ))}
    </div>
  );
};

export default ListItemNewMusic;
