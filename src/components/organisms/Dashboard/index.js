/*
 * @Author: Rishav Goswami
 * @Date: 2020-05-04 02:42:38
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-19 20:22:52
 */
import React, { useEffect } from "react";
import Constants from "expo-constants";

//redux
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../../redux/helper";

// atoms
import Header from "../../atoms/Header";
import Button from "../../atoms/Button";

// styles
import { Container, ListWrap, ListText, FlatListComp } from "./styles";

// utils
import { navigationTo } from "../../../utils";

const Dashboard = (props) => {
  const {
    actions: { getUserList },
    navigation,
    userList,
  } = props;

  useEffect(() => {
    getUserList();
  }, []);

  const handleOnPress = () => navigationTo(navigation, "profile");

  const renderItems = ({ item }) => {
    const { name, website, email } = item;
    return (
      <ListWrap>
        <ListText>Name: {name}</ListText>
        <ListText>Website: {website}</ListText>
        <ListText>Email: {email}</ListText>
      </ListWrap>
    );
  };

  return (
    <Container statusBarHeight={Constants.statusBarHeight}>
      <Header title="Dashboard Screen" />
      <FlatListComp
        data={userList.data}
        renderItem={renderItems}
        keyExtractor={(item) => item.id}
      />
      <Button onPress={handleOnPress} title="Profile Screen" />
    </Container>
  );
};

export default connect(
  mapStateToProps("user", "single", "userList"),
  mapDispatchToProps
)(Dashboard);
