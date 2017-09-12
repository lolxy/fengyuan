// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 118.607610,
    latitude: 24.861450,
  },

  call1: function () {
    wx.makePhoneCall({
      phoneNumber: '15659607775', 
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },

  call2: function () {
    wx.makePhoneCall({
      phoneNumber: '13055812121',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 使用 wx.createMapContext 获取 map 上下文 
    this.mapCtx = wx.createMapContext('myMap')
  },

  openLocation: function () {
    var latitude = this.data.latitude;
    var longitude = this.data.longitude;
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        wx.openLocation({
          name:'泉州逢源信息咨询有限公司',
          address:'泉州市晋江市泉商环球广场三期二栋2208室',
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    return {
      title: '泉州逢源信息咨询有限公司',
      desc: '泉州逢源信息咨询有限公司',
      path: '/pages/contact/contact',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})