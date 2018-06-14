import React, { Component } from 'react'
import { StyleSheet, View, Image , Dimensions,ListView, ActivityIndicator, RefreshControl} from 'react-native'
import { connect } from 'react-redux'

import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

import { NavigationActions } from '../utils'
import HTTPUtil from '../utils/httpUtil'
import Swiper from 'react-native-swiper'
import NetRequest from '../utils/fetch'

const { width } = Dimensions.get('window')


@connect()
class Home extends Component {

  constructor(props){
    super(props)
    var ds = new ListView.DataSource({     rowHasChanged: (r1, r2) => r1 !== r2,    });
      this.state = {
      demoList:  ds.cloneWithRows([{a:'21'},{a:'21'},{a:'21'},{a:'21'},{a:'21'},{a:'21'},{a:'21'},{a:'21'},{a:'21'},{a:'21'},{a:'21'},{a:'21'},{a:'21'},{a:'21'},{a:'21'},{a:'21'},{a:'21'},{a:'21'},{a:'21'},{a:'21'}]),
      isLoadingTail: false,
      isRefreshing: false,
      isNoMoreData: false,
      imgList: [
        'https://gitlab.pro/yuji/demo/uploads/d6133098b53fe1a5f3c5c00cf3c2d670/DVrj5Hz.jpg_1',
        'https://gitlab.pro/yuji/demo/uploads/2d5122a2504e5cbdf01f4fcf85f2594b/Mwb8VWH.jpg',
        'https://gitlab.pro/yuji/demo/uploads/4421f77012d43a0b4e7cfbe1144aac7c/XFVzKhq.jpg',
        'https://gitlab.pro/yuji/demo/uploads/576ef91941b0bda5761dde6914dae9f0/kD3eeHe.jpg'
      ]
    }
  }
  static navigationOptions = {
    title: '首页',
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/house.png')}
      />
    ),
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }
  componentDidMount(){



  }
  getData = ()=>{
    // let formData = new FormData();
    // formData.append("id",1060);
    //
    // var getHandle =  HTTPUtil.get('http://rap2api.taobao.org/app/mock/11554/api/hotsale/getSwipper');
    // getHandle.then(function(json){
    //   alert(json)
    //   // //处理 请求success
    //   // if(json.code === 0 ){
    //   //
    //   //   //我们假设业务定义code为0时，数据正常
    //   // }else{
    //   //   //处理自定义异常
    //   //   this.doException(json);
    //   // }
    // })
    // NetRequest.get('http://www.baidu.com',{},(res)=>{
    //   alert('success')
    // })
    fetch('http://www.baidu.com',{
      method: 'GET',
    })
      .then((response) => {
        alert('success')
      })
      .catch((error) => {
        alert(error)
      });
  }
  _renderHeader(){
    return(<Text>热销品</Text>)
  }
  _renderRow(rowData){
   return (<Text>{rowData.a}</Text>)
  }
  _renderFooter(){
    return(<Text>加载更多</Text>)
  }
  _endReached(){
     alert('end')
  }
  _onRefresh(){
    alert('refresh')
    this.setState({
      isRefreshing:false
    })
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Icon name="home" size={30} color="#900" />
          <Icon name="ios-arrow-dropup-circle-outline" size={30} color="#900" />

          <Button  block onPress={this.getData}>
            <Text>提交</Text>
          </Button>
        </View>
        <View style={{height:150}}>
        <Swiper autoplay showsButtons style={styles.wrapper} height={150}
                onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                dot={<View style={{backgroundColor: 'rgba(0,0,0,.5)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                activeDot={<View style={{backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                paginationStyle={{
                  bottom: 0
                }} loop>
          <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('../images/1.jpg')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('../images/2.jpg')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('../images/3.jpg')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('../images/4.jpg')} />
          </View>
        </Swiper>
        </View>
        <View style={{height:250}}>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.demoList}
          renderHeader={()=>this._renderHeader()}
          renderRow={(rowData) => this._renderRow(rowData)}
          renderFooter={() => this._renderFooter()}
          onEndReached={() => this._endReached()}
          onEndReachedThreshold={100}
          initialListSize={5}
          pageSize={5}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={() => this._onRefresh()}/>
          }
        />
        </View>







      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },


  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width,
    flex: 1
  }
})

export default Home
