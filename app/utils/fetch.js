/*
     *  get请求
     *  url:请求地址
     *  params:参数
     *  callback:回调函数
     * */
var get = (url,params,callback)=>{
  if (params) {
    let paramsArray = [];
    //拼接参数
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&')
    } else {
      url += '&' + paramsArray.join('&')
    }
  }
  //fetch请求
  fetch(url,{
    method: 'GET',
  })
    .then((response) => {
      callback(response)
    })
    .catch((error) => {
      alert(error)
    });
};

/*
     *  post请求
     *  url:请求地址
     *  params:参数,这里的参数格式是：{param1: 'value1',param2: 'value2'}
     *  callback:回调函数
     * */
var post  = (url,params,callback) =>{
  //fetch请求
  fetch(url,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(params)
  })
    .then((response) => response.json())
    .then((responseJSON) => {
      callback(responseJSON)
    })
    .catch((error) => {
      console.log("error = " + error)
    });
}

export default {'get':get,'post':post}
