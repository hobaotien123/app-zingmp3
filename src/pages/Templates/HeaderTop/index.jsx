import React from "react";
import './style.scss';
import LogoHeaderTop from "../../Organisms/LogoHeaderTop";
import SearchBoxHeaderTop from "../../Organisms/SearchBoxHeaderTop";
import UserProFile from '../../Organisms/UserProFille';
const HeaderTop = () => {
  return (
    <div className="headerTop-wrapper">
      <LogoHeaderTop />
      <SearchBoxHeaderTop />
      <UserProFile />
    </div>
  );
};

export default HeaderTop;
