// pages/qiyerongyu/qiyerongyu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    honor:[]
  },
  // 获取企业荣誉相关数据
   async getHonor(){
    const honor = await wx.p.request({
      url:'https://www.yngyjt.com/api/siteweb/images/list/honor?pageSize=8&pageNum=1',
      methods:'GET'
    })
    this.setData({
      honor:honor.data.rows
    })
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  this.getHonor()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})