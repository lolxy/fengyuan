//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      '../../image/img01.png',
      '../../image/img02.png',
      '../../image/img03.png'
    ],
    menulist:[
      {'icon':'../../image/icon1.png',url:'#',tit:'企业建站'},
      {'icon': '../../image/icon2.png',url:'#',tit:'公众号开发'},
      {'icon': '../../image/icon3.png',url:'#',tit:'小程序开发'},
      {'icon': '../../image/icon4.png',url:'#',tit:'APP开发'}
    ],
    productlist: [
      { 'proimg': '../../image/xcx06.png', tit: '门店小程序' },
      { 'proimg': '../../image/xcx013.png', tit: 'B2B2C商城小程序' },
      { 'proimg': '../../image/xcx014.png', tit: 'B2C商城小程序' },
      { 'proimg': '../../image/xcx015.png', tit: '直播培训小程序' },
      { 'proimg': '../../image/xcx07.png', tit: '美容门店小程序' },
      { 'proimg': '../../image/xcx08.png', tit: '连锁门店小程序' },
      { 'proimg': '../../image/xcx011.png', tit: '上门服务小程序' },
      { 'proimg': '../../image/xcx012.png', tit: '在线点餐小程序' },
      { 'proimg': '../../image/xcx01.png', tit: '茶叶商城小程序' },
      { 'proimg': '../../image/xcx05.png', tit: '母婴商城小程序' },
      { 'proimg': '../../image/xcx02.png', tit: '服装商城小程序' },
      { 'proimg': '../../image/xcx03.png', tit: '高级餐厅小程序' },
      { 'proimg': '../../image/xcx04.png', tit: '民俗酒店小程序' },
      { 'proimg': '../../image/xcx09.png', tit: '两性商城小程序' },
      { 'proimg': '../../image/xcx010.png', tit: '培训机构小程序'},
      { 'proimg': '../../image/xcx016.jpg', tit: '其他产品小程序'}
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
      title: '福州众享智联网络技术有限公司',
      desc: '福州众享智联网络技术有限公司',
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
