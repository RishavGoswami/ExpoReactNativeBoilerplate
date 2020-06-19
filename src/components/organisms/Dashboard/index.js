/*
 * @Author: Rishav Goswami
 * @Date: 2020-05-04 02:42:38
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-19 21:04:00
 */
import React, { useEffect } from "react";
import Constants from "expo-constants";

//redux
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../../redux/helper";

// atoms
import Header from "../../atoms/Header";
import Button from "../../atoms/Button";
import Images from "../../atoms/Image";

// styles
import {
  Container,
  ListWrap,
  ListText,
  FlatListComp,
  ImageWrap,
  Details,
} from "./styles";

// utils
import { navigationTo, getDeviceWidth } from "../../../utils";

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
    const {
      name: { title, first, last },
      cell,
      email,
      picture: { thumbnail },
    } = item;
    return (
      <ListWrap>
        <ImageWrap source={thumbnail} isUrl />
        <Details>
          <ListText>
            Name: {title} {first} {last}
          </ListText>
          <ListText>Cell: {cell}</ListText>
          <ListText>Email: {email}</ListText>
        </Details>
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
