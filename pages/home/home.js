// pages/home/home.js
Page({
  handlegetUsrInfo(event)
  {
    console.log(event)
  },

  //--------------1、监听页面的生命周期函数------------
  //页面被加载出来
  onLoad:function(){
    console.log('onLoad')
    wx.request({
      url:'http://123.207.32.32:8000/recommend',
      success:(res)=>{
        console.log(res)
      }
    })
  },

  //页面显示出来
  onShow:function(){
    console.log('onShow')
  },

  //页面初次渲染完成
  onReady:function(){
    console.log('onReady')
  },

  //页面被隐藏时
  onHide:function(){
    console.log('onHide')
  },

  
  onUnload:function(){
    console.log('onUnload')
  },

  //------------2、监听一些点击事件--------
  handleViewtap()
  {
    console.log("哈哈哈，被点击了")
  },


  //------------------3、监听其它事件--------
  //监听页面的滚动
  onPageScroll(obj){
    console.log(obj)
  },

  //监听页面是否滚动到底部
  onReachBottom(){
    console.log("到底部了")
  },

  //下拉刷新
  onPullDownRefresh(){
    console.log("下拉刷新中……")
  }

})