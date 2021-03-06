// libs
import React from "react";
// components
import ItemLink from "../../Atoms/ItemLink";
// others
import "./style.scss";
const HeaderMain: React.FC = () => {
  const navLinkList = [
    { title: "trang chủ", isVip: false },
    { title: "#zingchart", isVip: false },
    { title: "mới phát hành", isVip: false },
    { title: "top100", isVip: false },
    { title: "chủ đề", isVip: false },
    { title: "mv", isVip: false },
    { title: "album", isVip: false },
    { title: "nghệ sĩ", isVip: false },
    { title: "nhạc cá nhân", isVip: false },
    { title: "vip", isVip: true },
  ];
  return (
    <div className="header-main-wrapper">
      {navLinkList.map((item, index) => (
        <ItemLink item={item} key={index} />
      ))}
    </div>
  );
};
export default HeaderMain;
