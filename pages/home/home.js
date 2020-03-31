// pages/home/home.js
Page({
  data:{
    name:'Dean',
    age:18,
    students:[
      {id:110,name:'xw',age:30},
      {id:111,name:'xh',age:20},
      {id:112,name:'xm',age:3},
      {id:113,name:'xx',age:18},
      {id:114,name:'xg',age:15}
    ],
    counter:0
  },
  handleAdd()
  {
    //1、错误做法，页面不会自动刷新
    // this.data.counter+=1
    // console.loh(this.data.counter)

    //2、this.setData()
    this.setData({
      counter:this.data.counter+1
    })
  },
  handleSub()
  {
    this.setData({
      counter:this.data.counter-1
    })
  }


})
