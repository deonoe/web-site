import React from 'react';
import { Layout, Button } from 'antd';
import business from '../assets/business.jpg';
import { Link } from 'react-router-dom';

const { Content } = Layout;

export default function Consultoria() {
  return (
    <Content>
      <div className="container-wraper">
        <div className="business-wraper">
          <div className="business-bg">
            <div className="business-content-wraper">
              <img src={business} className="business-image" alt="business" />
              <div className="business">
                <h3
                  style={{ marginBottom: '0.8rem' }}
                  className="business-heading text-color"
                >
                  TuoloTec for Consulting Services
                </h3>
                <p className="business-content text-color">
                  Get unlimited acess to 50+ of TuoloTec top courses for your
                  team
                </p>
                <Link to="#">
                  <Button>Consulting</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
}
