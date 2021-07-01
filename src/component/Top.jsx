import React from "react";
import VerticalAlignTopIcon from "@material-ui/icons/VerticalAlignTop";

const Top = () => {
  var mybutton = document.getElementById("myBtn");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  return (
    <>
      <button
        id="myBtn"
        title="go to top"
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
      >
        <VerticalAlignTopIcon style={{fontSize: 30}} />
      </button>
    </>
  );
};

export default Top;
