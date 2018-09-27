import React, { Component } from "react";
class Stars extends Component {
  render() {
    return (
      <div className="item">
        <span className="star">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
            <path fill="none" d="M0 0h18v18H0z" />
          </svg>
        </span>
        <span className="star">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
            <path fill="none" d="M0 0h18v18H0z" />
          </svg>
        </span>
        <span className="star">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
            <path fill="none" d="M0 0h18v18H0z" />
          </svg>
        </span>
      </div>
    );
  }
}

export default Stars;
