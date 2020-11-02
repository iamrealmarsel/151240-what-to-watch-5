import React from 'react';
import {Tab} from 'Src/const';


const withTabState = (Component) => {
  class WithTabState extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        tab: Tab.OVERVIEW
      };
      this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(event) {
      event.preventDefault();
      this.setState({
        tab: event.currentTarget.dataset.tab,
      });
    }

    render() {
      const {tab} = this.state;

      return <Component {...this.props} onTabClick={this.handleTabClick} tab={tab} />;
    }
  }

  return WithTabState;
};


export default withTabState;
