import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import TitleForm from './TitleForm';
import style from './TitleForm.module.scss';

class TitleManagement extends Component<RouteComponentProps> {
  render() {
    return (
      <div className={style.titlesList}>
        <TitleForm />
      </div>
    );
  }
}

export default TitleManagement;
