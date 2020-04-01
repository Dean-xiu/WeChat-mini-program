App({
  //生命周期函数
  //小程序初始化完成时显示
  onLaunch:function(){
    console.log("小程序初始化完成")
  },

  //小程序界面显示出来后执行 
  onShow:function(option){
    console.log("界面显示出来了")
    //1、判断小程序的场景值
    switch(option.scene){
      case 1001:
        console.log("当前场景值为",option.scene)
        break;
    }
  },

  //界面被隐藏时执行
  onHide:function(){
    console.log("界面隐藏，后台运行中")
  },

  //程序出错时执行
  onError:function(){
    console.log('小程序出错了')
  }

})
