import React, { Component } from 'react';
import { Container, Content, Form, Item, Input,Button,Text } from 'native-base';
import {StyleSheet,View,Image} from "react-native";
import { NavigationActions } from '../utils'

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName:"",
      userPassWord:""
    }
  }
  static navigationOptions = {
    title: '登陆',
    tabBarLabel: 'Login',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/house.png')}
      />
    ),
  }

  register = () =>{
    this.props.navigation.dispatch(NavigationActions.navigate({routeName:'Register'}))
  }
  submit = ()=>{
    const {userName,userPassWord} = this.state;
    alert(userName+'--'+userPassWord);
  }
  render() {
    const {userName,userPassWord} = this.state;
    return (
      <Container style={styles.container}>
        <Content>
          <Form>
            <Item>
              <Input placeholder="用户帐号"  onChangeText={(text)=>this.setState({userName:text})} />
            </Item>
            <Item >
              <Input secureTextEntry={true}  placeholder="用户密码" onChangeText={(text)=>this.setState({userPassWord:text})} />
            </Item>
          </Form>
          <View style={{padding:10,paddingTop:50}}>
            <Button block rounded onPress={ this.submit }>
              <Text>登陆</Text>
            </Button>
          </View>
          <View>
            <Text onPress={ this.register }>注册</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff'
  },
  icon: {
    width: 32,
    height: 32,
  },
  pad10:{
    padding:10
  }
})
