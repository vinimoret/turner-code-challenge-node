import React, { Component } from 'react';
import { GET_TITLES_BY_ID } from '../titles/title.queries';
import { Query } from 'react-apollo';
import { Tag, Input } from 'antd';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import TableWithPagination from '../../components/TableWithPagination';
import { ITitles } from '../../interfaces/titles';
import TitleFormComponent from '../../components/TitleFormComponent';

interface ITitleResponse {
  id: string;
  name: string;
}
interface ITitlesResponse {
  titleById: ITitles;
}

interface ITitleListProps extends RouteComponentProps<any> {}

class TitleById extends Query<ITitlesResponse> {}

class TitleList extends Component<ITitleListProps> {
  render() {
    return (
      <React.Fragment>
        <TitleById query={GET_TITLES_BY_ID} variables={{ id: this.props.match.params.id }}>
          {({ loading, data, error, fetchMore }) => {
            if (loading) return <div />;
            if (!loading) return <TitleFormComponent data={data} />;
          }}
        </TitleById>
      </React.Fragment>
    );
  }
}

export default withRouter(TitleList);
