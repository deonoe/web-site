import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Layout } from 'antd';

const { Meta } = Card;
const { Content } = Layout;

function CourseCard(props) {
  return (
    <Content style={{ paddingLeft: '2rem' }}>
      <Link to="#">
        <Card
          hoverable
          style={{
            backgroundColor: '#f0f2f5',
            width: 230,
            height: 230,
          }}
          cover={
            <img alt="course" src={props.img} style={{ borderRadius: '3px' }} />
          }
          bordered="false"
        >
          <Meta title={props.title} description={props.instructor} />
        </Card>
      </Link>
    </Content>
  );
}

export default CourseCard;
