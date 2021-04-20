import React from "react";

const Footer = () => {
  return (
    <div
      className="ui inverted vertical footer segment"
      style={{
        position: "fixed",
        width: "100%",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "darkgrey",
      }}
    >
      Image Search
      <br />
      powered by Unsplash
      <a
        href="https://github.com/weiran0630"
        style={{ margin: "0 1rem 0 2rem", color: "unset" }}
      >
        <i className="github square icon big"></i>
      </a>
      <a
        href="https://www.instagram.com/__.xiran.__/"
        style={{ margin: "0 1rem 0 0.5rem", color: "unset" }}
      >
        <i className="instagram icon big"></i>
      </a>
      <a
        href="https://m.me/asanagishio"
        style={{ margin: "0 1rem 0 0.5rem", color: "unset" }}
      >
        <i className="facebook messenger icon big"></i>
      </a>
    </div>
  );
};

export default Footer;
