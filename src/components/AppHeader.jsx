import React from 'react';
import { PageHeader, Row, Col, Input, Menu, Button, Affix } from 'antd';
import { NavLink } from 'react-router-dom';
import tuolotec from '../assets/tuolotec.jpeg';

const { Search } = Input;

export default function AppHeader() {
  return (
    <Affix>
      <PageHeader className="header">
        <Row>
          <Col
            style={{ flexFlow: 'nowrap' }}
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            xxl={4}
          >
            <div className="logo">
              <NavLink to="/">
                <img alt="logo" src={tuolotec} className="logo-img" />
                <span className="text-color">TuoloTec</span>
              </NavLink>
            </div>
          </Col>
          <Col
            className="search-container"
            xs={12}
            sm={12}
            md={5}
            lg={5}
            xl={7}
            xxl={7}
          >
            <div className="search">
              <Search placeholder="Search for anything" />
            </div>
          </Col>
          <Col
            className="menu-row"
            xs={0}
            sm={0}
            md={10}
            lg={10}
            xl={8}
            xxl={8}
          >
            <div className="menu">
              <Menu mode="horizontal">
                <Menu.Item>
                  <NavLink to="/tuolotec">Sobre Nos</NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink to="/consutoria">Consultoria</NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink to="/cursos">Cursos</NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink to="/blog">Blog</NavLink>
                </Menu.Item>
              </Menu>
            </div>
          </Col>

          <Col md={5} lg={5} xl={5} xxl={5}>
            <div className="menu-button">
              <Button className="btn-login">Entrar</Button>
              <Button className="btn-signup">Cadastra-se</Button>
            </div>
          </Col>
        </Row>
      </PageHeader>
    </Affix>
  );
}
