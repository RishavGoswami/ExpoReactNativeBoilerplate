/*
 * @Author: Rishav Goswami
 * @Date: 2020-05-14 17:40:48
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-19 18:32:05
 */
import React, { Component } from "react";

// components
import Profile from "../components/organisms/Profile";

export class ProfileScreen extends Component {
  render() {
    return <Profile navigation={this.props.navigation} />;
  }
}
