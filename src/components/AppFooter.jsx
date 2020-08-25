import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

const { Footer } = Layout;
const currentTime = new Date();
const year = currentTime.getFullYear();

export default function AppFooter() {
  return (
    <Footer className="text-color footer">
      <div className="links">
        <ul className="unstyled-list link-column">
          <li>
            <Link to="#">Who We Are</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
          <li>
            <Link to="#">Contact Us</Link>
          </li>
          <li>
            <Link to="#">Blog</Link>
          </li>
        </ul>

        <ul className="unstyled-list link-column">
          <li>
            <Link to="#">Partners</Link>
          </li>
          <li>
            <Link to="/jobs">SiteMap</Link>
          </li>
          <li>
            <Link to="#">Help and FAQ</Link>
          </li>
          <li>
            <Link to="#">Last Offers</Link>
          </li>
        </ul>

        <ul className="unstyled-list link-column">
          <li>
            <Link to="#">Newsroom</Link>
          </li>
          <li>
            <Link to="#">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="#">Privacy Policy</Link>
          </li>
        </ul>

        <div className="link-column icon-pad">
          <Link to="#" className="fa fa-facebook"></Link>
          <Link to="#" className="fa fa-twitter"></Link>
          <Link to="#" className="fa fa-instagram"></Link>
          <Link to="#" className="fa fa-linkedin"></Link>
          <Link to="#" className="fa fa-youtube"></Link>
        </div>
      </div>

      <hr></hr>

      <div className="copyright-container">
        © Copyright {year} TuoloTec, Inc. All Rights Reserved.
      </div>
    </Footer>
  );
}
