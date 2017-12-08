//app.js
var wilddog = require('wilddog-weapp-all');
App({
  onLaunch: function () {
    var config = {
      syncURL:'http://wd1587232634mfwkej.wilddogio.com',
      authDomain:'wd1587232634mfwkej.wilddog.com'
    }
    //数据库 ip: db
    wilddog.initializeApp(config);
    wilddog.auth().signInWeapp(function(err,user){
      console.log(user);
    })
    this.ref = wilddog.sync().ref('todo');
  },
  addItem:function(text){
    this.ref.push(text);
  },
  getTodoRef:function(){
    return this.ref;
  },
  globalData: {
    
  }
})