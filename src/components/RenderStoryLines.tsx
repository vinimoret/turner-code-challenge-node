import * as React from 'react';
import { Row, Col, Card } from 'antd';
import { IStorylines } from '../interfaces/titles';
import styles from './RenderStoryLines.module.scss';
require('./RenderStoryLines.scss');
export interface IStoryLinesProps {
  storyLines: IStorylines[];
}

const RenderStoryLines: React.SFC<IStoryLinesProps> = props => {
  return (
    <Row>
      <h1>Story Lines</h1>
      {props.storyLines.map((participant: IStorylines, i) => {
        return (
          <div key={i}>
            <Card title={`Story Line #${i + 1}`}>
              <h3>Description</h3>
              <Col className={styles.storyWrapper}>{participant.Description}</Col>
              <h3>Language</h3>
              <Col className={styles.storyWrapper}>{participant.Language}</Col>
              <h3>Type</h3>
              <Col className={styles.storyWrapper}>{participant.Type}</Col>
            </Card>
            <br />
            <br />
          </div>
        );
      })}
    </Row>
  );
};

export default RenderStoryLines;
