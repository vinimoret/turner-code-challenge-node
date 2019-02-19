import * as React from 'react';
import { SpinProps } from 'antd/lib/spin';
import { Row, Col, List } from 'antd';
import { ITitles, IParticipants } from '../interfaces/titles';
import { WrappedFormUtils } from 'antd/lib/form/Form';

export interface ITitleProps {
  participants: IParticipants[];
}

const RenderParticipants: React.SFC<ITitleProps> = props => {
  return (
    <React.Fragment>
      <h1>Participant Names</h1>
      <List
        itemLayout="horizontal"
        dataSource={props.participants}
        renderItem={(item: IParticipants) => (
          <List.Item>
            <List.Item.Meta title={item.Name} description={item.RoleType} />
          </List.Item>
        )}
      />
    </React.Fragment>
  );
};

export default RenderParticipants;
