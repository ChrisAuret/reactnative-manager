import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './listItem';
import {
  employeesFetch
} from '../actions';

class EmployeeList extends Component {

  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componenetWillReceiveProps(nextProps) {
    // nextProps are the next set of props that hte componentWillMount
    // will be rendered with
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <ListView
        
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
