import React, { Component } from 'react';
import { GET_TITLES } from './title.queries';
import { Query } from 'react-apollo';
import { Tag, Input } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import { Link } from 'react-router-dom';
import TableWithPagination from '../../components/TableWithPagination';
import { ITitles } from '../../interfaces/titles';
import SearchText from '../../components/SearchText';

interface ITitleResponse {
  id: string;
  name: string;
}
interface ITitlesResponse {
  titles: {
    payload: ITitles[];
    totalRows: number;
  };
}

interface ITitleListState {
  page: number;
  skip: number;
  pageSize: number;
  searchText: string;
}

interface ITitleListProps {}

class TitleListQuery extends Query<ITitlesResponse> {}

class TitleList extends Component<ITitleListProps, ITitleListState> {
  state = {
    page: 1,
    skip: 0,
    pageSize: 10,
    searchText: '',
  };
  columns: ColumnProps<ITitleResponse>[] = [
    {
      title: 'Action',
      dataIndex: '_id',
      key: 'id',
      render: id => <Link to={`/title/${id}`}>Show Values</Link>,
    },

    {
      title: 'Title',
      dataIndex: 'TitleName',
      key: 'TitleName',
    },
    {
      title: 'Release Year',
      dataIndex: 'ReleaseYear',
      key: 'ReleaseYear',
    },
    {
      title: 'Genres',
      dataIndex: 'Genres',
      key: 'Genres',
      render: Genres => {
        if (Genres) {
          return Genres.map((g: any) => {
            return (
              <Tag key={g} style={{ pointerEvents: 'none' }}>
                {g}
              </Tag>
            );
          });
        }
      },
    },
  ];
  handleChangeValue = (searchText: string) => {
    this.setState({ searchText });
  };
  render() {
    const { page, skip, pageSize, searchText } = this.state;
    return (
      <React.Fragment>
        <SearchText handleChangeValue={this.handleChangeValue} />
        <TitleListQuery query={GET_TITLES} variables={{ skip, pageSize, searchText }}>
          {({ loading, data, error, fetchMore }) => {
            const onShowSizeChange = (current: number, pageSize: number) => {
              this.setState({ pageSize });
            };

            const onChange = (page: number, pageSize?: number) => {
              pageSize = pageSize ? pageSize : 15;
              this.setState({ page, skip: (page - 1) * pageSize, pageSize });
            };

            return (
              <React.Fragment>
                <TableWithPagination
                  loading={loading}
                  page={page}
                  pageSize={pageSize}
                  totalRows={data && data.titles ? data.titles.totalRows : 0}
                  columns={this.columns}
                  dataSource={data && data.titles ? data.titles.payload : []}
                  rowKey="_id"
                  collection="Titles"
                  onChange={onChange}
                  onShowSizeChange={onShowSizeChange}
                />
              </React.Fragment>
            );
          }}
        </TitleListQuery>
      </React.Fragment>
    );
  }
}

export default TitleList;
