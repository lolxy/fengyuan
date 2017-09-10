// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  formSubmit: function (e) {  
    var formData = e.detail.value;
    if (e.detail.value.full_name.length == 0) {
    wx.showToast({
      title: '姓名不得为空!',
      icon: 'loading',
      duration: 1500
    })
    setTimeout(function () {
      wx.hideToast()
    }, 2000)
  }else if(e.detail.value.email.length != 11) {
    wx.showToast({
      title: '请输入11位手机号码!',
      icon: 'loading',
      duration: 1500
    })
    setTimeout(function () {
      wx.hideToast()
    }, 2000)
  }else if(e.detail.value.title.length==0) {
    wx.showToast({
      title: '请输入QQ号码!',
      icon: 'loading',
      duration: 1500
    })
    setTimeout(function () {
      wx.hideToast()
    }, 2000)
  }else if(e.detail.value.msg == 0) {
    wx.showToast({
      title: '请填写您需要开发的项目!',
      icon: 'loading',
      duration: 1500
    })
    setTimeout(function () {
      wx.hideToast()
    }, 2000)
  }else{
    wx.request({
      url: '',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method:"POST",
      data: formData,
      success: function (res) {
        console.log(res);
        if (res.data.status == 0) {
          wx.showToast({
            title: res.data.info,
            icon: 'loading',
            duration: 1500
          })
        } else {
          wx.showToast({
            title: res.data.info,
            icon: 'success',
            duration: 1000
          })
        }
      }
    })
  }
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
  onShareAppMessage: function () {
  
  }
})