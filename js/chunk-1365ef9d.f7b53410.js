(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1365ef9d"],{"0400":function(t,n,a){"use strict";var e=a("5c0f"),s=a.n(e);s.a},"2b2e":function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"navigate-bar"},[a("span",{staticClass:"iconfont iconjiantou2",on:{click:function(n){return t.$router.back()}}}),a("strong",[t._v(t._s(t.title))]),t.showHome?a("span",{staticClass:"iconfont iconshouye",on:{click:function(n){return t.$router.push("/")}}}):a("span",{staticClass:"iconfont iconshouye",staticStyle:{opacity:"0"}})])},s=[],o={props:["title","showHome"]},i=o,r=(a("88f5"),a("2877")),c=Object(r["a"])(i,e,s,!1,null,"c0d440fe",null);n["a"]=c.exports},"34a6":function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"listbar"},[a("router-link",{attrs:{to:t.path||"#"}},[a("div",[t._v(t._s(t.label))]),a("div",{staticClass:"tips"},[t._v(" "+t._s(t.tips)+" "),a("span",{staticClass:"iconfont iconjiantou1"})])])],1)},s=[],o={props:["label","tips","path"]},i=o,r=(a("0400"),a("2877")),c=Object(r["a"])(i,e,s,!1,null,"613161b6",null);n["a"]=c.exports},"51a6":function(t,n,a){},"5c0f":function(t,n,a){},"88f5":function(t,n,a){"use strict";var e=a("51a6"),s=a.n(e);s.a},dadb:function(t,n,a){},f6a7:function(t,n,a){"use strict";var e=a("dadb"),s=a.n(e);s.a},fb5e:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("NavigateBar",{attrs:{title:"编辑资料"}}),a("div",{staticClass:"avatar"},[a("img",{attrs:{src:t.$axios.defaults.baseURL+t.userInfor.head_img,alt:""}}),a("van-uploader",{staticClass:"uploader",attrs:{"after-read":t.afterRead}})],1),a("Listbar",{attrs:{label:"昵称",tips:t.userInfor.nickname},nativeOn:{click:function(n){t.show=!0}}}),a("van-dialog",{attrs:{title:"修改昵称","show-cancel-button":""},on:{confirm:t.handleChangeNickname},model:{value:t.show,callback:function(n){t.show=n},expression:"show"}},[a("van-field",{attrs:{placeholder:"请输入用户名"},model:{value:t.nickname,callback:function(n){t.nickname=n},expression:"nickname"}})],1),a("Listbar",{attrs:{label:"密码",tips:"******"},nativeOn:{click:function(n){t.showPassword=!0}}}),a("van-dialog",{attrs:{title:"修改密码","show-cancel-button":""},on:{confirm:t.handleChangePassword},model:{value:t.showPassword,callback:function(n){t.showPassword=n},expression:"showPassword"}},[a("van-field",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}})],1),a("Listbar",{attrs:{label:"性别",tips:["女","男"][t.userInfor.gender]},nativeOn:{click:function(n){t.showGender=!0}}}),a("van-action-sheet",{attrs:{actions:t.actions},on:{select:t.onSelect},model:{value:t.showGender,callback:function(n){t.showGender=n},expression:"showGender"}})],1)},s=[],o=a("2b2e"),i=a("34a6"),r={components:{NavigateBar:o["a"],Listbar:i["a"]},data:function(){return{userInfor:{},userJson:{},show:!1,showPassword:!1,showGender:!1,actions:[{name:"男",gender:1},{name:"女",gender:0}],nickname:"",password:""}},mounted:function(){var t=this,n=JSON.parse(localStorage.getItem("userInfo"));this.userJson=n,this.$axios({url:"/user/"+n.user.id,headers:{Authorization:n.token}}).then((function(n){var a=n.data.data;t.userInfor=a,t.nickname=a.nickname}))},methods:{afterRead:function(t){var n=this;console.log(t);var a=new FormData;a.append("file",t.file),console.log(a),this.$axios({url:"/upload",method:"post",headers:{Authorization:this.userJson.token},data:a}).then((function(t){console.log(t);var a=t.data.data.url;n.userInfor.head_img=a,n.handleEdit({head_img:a})}))},handleEdit:function(t){var n=this;this.$axios({url:"/user_update/"+this.userInfor.id,method:"post",headers:{Authorization:this.userJson.token},data:t}).then((function(t){console.log(t),n.$toast.success("修改成功")}))},handleChangeNickname:function(){this.handleEdit({nickname:this.nickname}),this.userInfor.nickname=this.nickname},handleChangePassword:function(){this.handleEdit({password:this.password})},onSelect:function(t){this.showGender=!1,console.log(t),this.handleEdit({gender:t.gender}),this.userInfor.gender=t.gender}}},c=r,l=(a("f6a7"),a("2877")),u=Object(l["a"])(c,e,s,!1,null,"ff917ce4",null);n["default"]=u.exports}}]);
//# sourceMappingURL=chunk-1365ef9d.f7b53410.js.map