import React, { PureComponent } from 'react';
import { Input } from 'antd';
import styles from './SearchText.module.scss';
const Search = Input.Search;

export interface ISearchText {
  handleChangeValue(searchText: string): void;
}

export default class SearchText extends PureComponent<ISearchText> {
  render() {
    return (
      <Search
        placeholder="Search for books titles"
        onChange={e => this.props.handleChangeValue(e.target.value)}
        className={styles.searchInput}
      />
    );
  }
}
