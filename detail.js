const app = getApp();
Page({
  data: {
    data:null
  },
  onLoad:function(option){
    var id = option.catalogid
    this.setData({
      data:app.contentdata[id]
    })
  }
 
})
