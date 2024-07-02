import React from "react";

// The title bar on ManageStudentsPage
function TitleBar(props) {
  // props data fields: title, type
  // Style based on other pages to be inline
  const darkBlue = "#2c3c64";
  const Blue = "#25396b";
  const titleBarShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)";

  const renderTitleBar = () => {
    const commonStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: titleBarShadow,
      paddingLeft: "5%",
      paddingRight: "5%",
    };

    const mainStyle = {
      ...commonStyle,
      height: "120px",
      background: darkBlue,
    };

    const subStyle = {
      ...commonStyle,
      height: "40px",
      background: Blue,
    };

    switch (props.type) {
      case "main":
        return (
          <div className="row" style={mainStyle}>
            <h2 style={{ color: "white", margin: 0 }}>
              {props.title}
            </h2>
          </div>
        );
      case "sub":
        return (
          <div className="row" style={subStyle}>
            <h4 style={{ color: "white", margin: 0 }}>
              {props.title}
            </h4>
          </div>
        );
      default:
        return null; // Or some default JSX if needed
    }
  };

  return renderTitleBar();
}

export default TitleBar;
