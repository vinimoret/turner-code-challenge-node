import { Icon, Menu } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import React, { Component, Fragment } from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';

class Navbar extends Component<RouteComponentProps> {
  handleClick = (e: ClickParam) => {
    this.props.history.push(e.key);
  };

  render() {
    const SubMenu = Menu.SubMenu;
    return (
      <Fragment>
        <Menu onClick={this.handleClick} selectedKeys={[this.props.history.location.pathname]} mode="vertical" className="App-menu-wrapper">
          <SubMenu
            key="/"
            title={
              <span>
                <Icon type="bar-chart" />
                Titles
              </span>
            }
            onTitleClick={this.handleClick}
          />
        </Menu>
      </Fragment>
    );
  }
}

export default withRouter(Navbar);
