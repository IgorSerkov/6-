import React from "react";
import loading from "/home/yodjj/CIT/my_app/src/Assets/tenor.gif";

const Preloader = ({ style }) => {
	return <img src={loading} alt="" style={style} />;
};

export default Preloader;