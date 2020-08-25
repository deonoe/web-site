import React from 'react';

export default function Category(props) {
  return (
    <div className="carousel-scroll-item">
      <div className="tabs-nav-button-container">
        <button
          style={{ fontWeight: 'bold', fontSize: '1.07rem' }}
          type="button"
          className="tuolo-btn tuolo-btn-large tuolo-btn-ghost tabs-nav-button tabs-active"
        >
          <span>{props.title}</span>
        </button>
      </div>
    </div>
  );
}
