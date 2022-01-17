const app = getApp()
Page({
  data: {
    contentdata:null
  },
  onLoad(){
    this.setData({
      contentdata:app.contentdata
    })
  },
  todetail:function(e){
    var catalogid = e.currentTarget.dataset.id
    console.log("你点击了第" + (catalogid + 1) + "个展示")
    wx.navigateTo({
      url:'../detail/detail?catalogid=' + catalogid
    })
  }
})
