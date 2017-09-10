//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      '../../image/img01.png',
      '../../image/img02.png'
    ],
    productlist: [
      { id:1,'proimg': '../../image/xcx01.png', tit: '财务实训'}, 
      { id: 2,'proimg': '../../image/xcx02.png', tit: '代理记账' },
      { id: 3,'proimg': '../../image/xcx03.png', tit: '公司注册' },
      { id: 4,'proimg': '../../image/xcx04.png', tit: '纳税申报' },
      { id: 5,'proimg': '../../image/xcx05.png', tit: '年检换照' },
      { id: 6, 'proimg': '../../image/xcx06.png', tit: '企业变更'}
    ],
    indicatorDots: false,
    autoplay: false,
    circular:true,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //设置分享
  onShareAppMessage: function (res) {
    return {
      title: '泉州逢源信息咨询有限公司',
      desc: '泉州逢源信息咨询有限公司',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
