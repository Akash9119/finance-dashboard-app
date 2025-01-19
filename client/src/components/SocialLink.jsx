import React from "react";
import PropTypes from "prop-types";

const SocialLink = ({ href, className, iconPath, srText }) => {
  return (
    <a href={href} className={className}>
      <svg
        className="w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path fillRule="evenodd" d={iconPath} clipRule="evenodd" />
      </svg>
      <span className="sr-only">{srText}</span>
    </a>
  );
};

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  iconPath: PropTypes.string.isRequired,
  srText: PropTypes.string.isRequired,
};

export default SocialLink;
