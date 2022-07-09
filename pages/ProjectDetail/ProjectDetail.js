// pages/ProjectDetail/ProjectDetail.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: 30 * 60 * 60 * 1000,
    timeData: {},
    // 控制遮罩层开关
    show: false,
  },
  // 点击跳转到我的报价页面
  tomyPrice(){
   wx.navigateTo({
     url: '../../pages/myPrice/myPrice',
   })
  },
  // 点击提交报价执行的函数
 async submitPrice(){
  Toast({
    type:'success',
    message:'报价成功',
    onClose:()=>{
      wx.navigateBack({
        delta: 1,
      })
    }
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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