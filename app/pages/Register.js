import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Header, Content, Form, Item, Input, Label, Button, Text} from 'native-base';
import {NavigationActions} from '../utils'

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      userPassWord: ""
    }
  }

  submit = () => {
    const {userName, userPassWord} = this.state;
    alert(userName + '--' + userPassWord)
  }

  render() {
    const {userName, userPassWord} = this.state;
    return (
      <Container style={styles.container}>
        <Content>
          <Form>
            <Item>
              <Input placeholder="用户账号" value={userName} onChangeText={(text) => this.setState({userName: text})}/>
            </Item>
            <Item>
              <Input secureTextEntry={true} placeholder="用户密码" value={userPassWord}
                     onChangeText={(text) => this.setState({userPassWord: text})}/>
            </Item>


          </Form>

          <View style={{padding: 10, paddingTop: 50}}>
            <Button block rounded onPress={this.submit}>
              <Text>注册</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  icon: {
    width: 32,
    height: 32,
  },
  pad10: {
    padding: 10
  }
})
