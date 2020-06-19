/*
 * @Author: Rishav Goswami
 * @Date: 2020-05-04 02:42:38
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-19 18:22:12
 */
import React from "react";
import { Text } from "react-native";
import Constants from "expo-constants";

//redux
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../../redux/helper";

// atoms
import Button from "../../atoms/Button";
import Header from "../../atoms/Header";

// styles
import { Container } from "./styles";
import { navigationTo } from "../../../utils";

const Profile = (props) => {
  const { navigation } = props;

  const handleOnPress = () => navigationTo(navigation, "dashboard");

  return (
    <Container statusBarHeight={Constants.statusBarHeight}>
      <Header title="Profile Screen" />
      <Button onPress={handleOnPress} title="Back to dashboard" />
    </Container>
  );
};

export default connect(
  mapStateToProps(
    [{ stateName: "user", propsNameInComp: "usersList", isSame: false }],
    "multiple"
  ),
  mapDispatchToProps
)(Profile);
