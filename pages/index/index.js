//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
     swiperData:[
      {name:"item1",id:1,bgColor:'green'},
      {name:"item2",id:2,bgColor:'red'},
      {name:"item3",id:3,bgColor:'yellow'},
      {name:"item4",id:4,bgColor:'white'},
    ],
    userInfo: {},
    goodsKindDetails1:[
      {
        name:"kind1",
        img:"img1"
      },
      {
        name:"kind2",
        img:"img2"
      },
      {
        name:"kind3",
        img:"img3"
      }
    ],
    goodsKindDetails2:[
      {
        name:"kind4",
        img:"img4"
      },
      {
        name:"kind5",
        img:"img5"
      },
      {
        name:"kind6",
        img:"img6"
      }
    ]
  },
  onPullDownRefresh(){
    wx.showToast({
      title:'正在加载中...'
    })
  }


  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   console.log('onLoad')
  //   var that = this
  //   //调用应用实例的方法获取全局数据
  //   app.getUserInfo(function(userInfo){
  //     //更新数据
  //     that.setData({
  //       userInfo:userInfo
  //     })
  //   })
  // }
})
