import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import TitlesList from './TitlesList';
import style from './TitlesList.module.scss';

class TitleManagement extends Component<RouteComponentProps> {
  render() {
    return (
      <div className={style.titlesList}>
        <TitlesList />
      </div>
    );
  }
}

export default TitleManagement;
