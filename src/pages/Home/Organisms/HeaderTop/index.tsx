// libs
import React from "react";
// components
import LogoHeaderTop from "../../Atoms/LogoHeaderTop";
import SearchBoxHeaderTop from "../../Molecules/SearchBoxHeaderTop";
import UserProFile from '../../Molecules/UserProFille';
// others
import './style.scss';
const HeaderTop:React.FC = () => {
  return (
    <div className="header-top-wrapper">
      <LogoHeaderTop />
      <SearchBoxHeaderTop />
      <UserProFile />
    </div>
  );
};

export default HeaderTop;
