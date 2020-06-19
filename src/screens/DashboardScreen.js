/*
 * @Author: Rishav Goswami
 * @Date: 2020-05-14 17:40:48
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-19 18:36:01
 */
import React, { Component } from "react";

// components
import Dashboard from "../components/organisms/Dashboard";

export class DashboardScreen extends Component {
  render() {
    return <Dashboard navigation={this.props.navigation} />;
  }
}
