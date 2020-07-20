import React from "react";
import './style.scss';
import LogoHeaderTop from "../../Atoms/LogoHeaderTop";
import SearchBoxHeaderTop from "../../Molecules/SearchBoxHeaderTop";
import UserProFile from '../../Molecules/UserProFille';
const HeaderTop = () => {
  return (
    <div className="header-top-wrapper">
      <LogoHeaderTop />
      <SearchBoxHeaderTop />
      <UserProFile />
    </div>
  );
};

export default HeaderTop;
