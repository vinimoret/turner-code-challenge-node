import * as React from 'react';
import { ITitles } from '../interfaces/titles';
import RenderParticipants from './RenderParticipants';
import RenderStoryLines from './RenderStoryLines';
import { Collapse } from 'antd';
import styles from './TitleFormComponent.module.scss';
const Panel = Collapse.Panel;

export interface ITitleProps {
  data: {
    titleById: ITitles;
  };
}

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

const TitleFormComponent: React.SFC<ITitleProps> = props => {
  const { data } = props;
  return (
    <React.Fragment>
      <Collapse defaultActiveKey={['1', '2']} bordered={false}>
        <Panel header="Participants" key="1" style={customPanelStyle}>
          <RenderParticipants participants={data.titleById.Participants} />
        </Panel>
        <Panel header="Story Lines" key="2" style={customPanelStyle}>
          <RenderStoryLines storyLines={data.titleById.Storylines} />
        </Panel>
      </Collapse>
    </React.Fragment>
  );
};

export default TitleFormComponent;
