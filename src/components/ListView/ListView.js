import React from "react";
import PropTypes from "prop-types";
import MiniPost from "../MiniPost/MiniPost";
import "./ListView.css";

const ListView = ({ all }) => {
  const miniPosts = all.map((shoe) => (
    <MiniPost
      title={shoe.title}
      size={shoe.size}
      image={shoe.url}
      key={shoe.id}
      id={shoe.id}
    />
  ));

  return <div className="ListView">{miniPosts.reverse()}</div>;
};

export default ListView;

ListView.propTypes = {
  all: PropTypes.arrayOf(
    PropTypes.shape({
      brand: PropTypes.string,
      code: PropTypes.string,
      colors: PropTypes.string || PropTypes.array,
      contact: PropTypes.string,
      id: PropTypes.number,
      release: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
      user: PropTypes.string,
    })
  ).isRequired,
};
