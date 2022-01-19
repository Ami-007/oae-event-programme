import "./Layout.scss";
import { useEffect } from "react";
import getFontType from "../../utils/stringHelper";
import Navbar from "../Navbar/Navbar";

const Layout = (props) => {
  const { fontType, children, eventId, themeType, textColor, highlightColor } =
    props;
  let theme = getFontType(fontType);

  useEffect(() => {
    let { style } = document.documentElement;
    themeType && style.setProperty("--theme-color-primary", themeType);
    textColor && style.setProperty("--theme-color-text", textColor);
    highlightColor &&
      style.setProperty("--theme-color-highlight", highlightColor);
  }, [themeType, textColor, highlightColor]);
  return (
    <div className={`layout ${theme}`}>
      <div>{children}</div>
      <Navbar eventId={eventId} />
    </div>
  );
};

export default Layout;