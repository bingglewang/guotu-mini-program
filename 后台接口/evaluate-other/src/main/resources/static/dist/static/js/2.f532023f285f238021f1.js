webpackJsonp([2],{"+uyb":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("cAgV"),i=a("a0qG"),r={directives:{waves:n.a},components:{},data:function(){return{userTableHeight:"calc(100% - 280px)",listLoading:!0,dialogId:"",form:{name:"",formqueryDate:""},centerDialogVisible:!1,userName:"",nickName:"",phoneNumber:"",userEmail:"",queryDate:"",sex:"",sexOption:[{label:"请选择",key:""},{label:"男",key:"1"},{label:"女",key:"0"}],enableCount:"",registerTime:"",tableData:[],currentPage:1,pageSize:10,totalItems:0,downloadLoading:!1,pickerOptions1:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},pickerOptions2:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]}}},mounted:function(){this.initUserData(),this.doSearchUser(),document.getElementById("nameFocus").focus()},methods:{initUserData:function(){this.userName="",this.nickName="",this.phoneNumber="",this.userEmail="",this.sex="",this.enableCount="",this.queryDate="",this.registerTime=""},enterSearchList:function(e){13==e.keyCode&&this.doSearchUser()},cancle:function(){this.centerDialogVisible=!1,this.form.name="",this.form.formqueryDate=""},onSubmit:function(e){var t=this,a={id:parseInt(t.dialogId)};""!=t.form.name&&null!=t.form.name&&(a.enableCount=t.form.name),""!=t.form.formqueryDate&&null!=t.form.formqueryDate&&(a.startEnableTime=""!=t.form.formqueryDate&&null!=t.form.formqueryDate?Object(i.a)(t.form.formqueryDate[0],"yyyy-MM-dd"):"",a.endEnableTime=""!=t.form.formqueryDate&&null!=t.form.formqueryDate?Object(i.a)(t.form.formqueryDate[1],"yyyy-MM-dd"):""),""!=t.form.name||""!=t.form.formqueryDate?(t.$post("/admin/updateUserById",a).then(function(e){"success"==e.msg?(t.$message({type:"success",message:"编辑成功!"}),t.doSearchUser()):t.$message({type:"error",message:"编辑失败!"})}),t.centerDialogVisible=!1,t.form.name="",t.form.formqueryDate=""):this.centerDialogVisible=!1},doSearchUser:function(){var e=this;this.listLoading=!0,console.log(656565,this.queryDate),console.log(8787,this.registerTime);var t={userName:this.userName,nickName:this.nickName,phoneNumber:this.phoneNumber,userMail:this.userEmail,sex:this.sex,enableCount:this.enableCount,startEnableTime:""!=this.queryDate&&null!=this.queryDate?Object(i.a)(this.queryDate[0],"yyyy-MM-dd"):"",endEnableTime:""!=this.queryDate&&null!=this.queryDate?Object(i.a)(this.queryDate[1],"yyyy-MM-dd"):"",startRegisterDate:""!=this.registerTime&&null!=this.registerTime?Object(i.a)(this.registerTime[0],"yyyy-MM-dd hh:mm:ss"):"",endRegisterDate:""!=this.registerTime&&null!=this.registerTime?Object(i.a)(this.registerTime[1],"yyyy-MM-dd hh:mm:ss"):"",currentPage:this.currentPage,pageSize:this.pageSize};this.$post("/admin/getUserByPages",t).then(function(t){e.tableData=t.items,e.totalItems=t.totalNum,console.log(678,t),setTimeout(function(){e.listLoading=!1},1500)})},open1:function(e){var t=this,a=this;this.$confirm("此操作将启用用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var n={id:e,delFlag:"N"};t.$post("/admin/updateUserById",n).then(function(e){"success"==e.msg?(a.$message({type:"success",message:"启用成功!"}),a.doSearchUser()):a.$message({type:"error",message:"启用失败!"})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},open2:function(e){var t=this,a=this;this.$confirm("此操作将禁用用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var n={id:e,delFlag:"Y"};t.$post("/admin/updateUserById",n).then(function(e){"success"==e.msg?(a.$message({type:"success",message:"禁用成功!"}),a.doSearchUser()):a.$message({type:"error",message:"禁用失败!"})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},formateDate:function(e){return Object(i.a)(new Date(e),"yyyy-MM-dd")},formateDatetime:function(e){return Object(i.a)(new Date(e),"yyyy-MM-dd hh:mm:ss")},changeSexHandler:function(){this.doSearchUser()},handleEdit:function(e){console.log(11,e),this.dialogId=e,this.centerDialogVisible=!0},handleEnable:function(e){this.open1(e)},handleDelete:function(e){console.log(22,e),this.open2(e)},handleSizeChange:function(e){console.log("每页 "+e+" 条"),this.pageSize=e,this.doSearchUser()},handleCurrentChange:function(e){console.log("当前页: "+e),this.currentPage=e,this.doSearchUser()},tableRowClassName:function(e){e.row;var t=e.rowIndex;return(t+1)%2==0?"warning-row":t%2==0?"success-row":""},handleDownload:function(){var e=this;this.downloadLoading=!0,a.e(7).then(a.bind(null,"zWO4")).then(function(t){var a=[];e.tableData.forEach(function(t,n){var i={};i.index=n+1,i.registerDate=e.formateDatetime(t.registerDate),i.userName=t.userName,i.nickName=t.nickName,i.phoneNumber=t.phoneNumber,i.userMail=t.userMail,i.sex=1==t.sex?"男":"女",i.enableCount=t.enableCount,i.enableTime=e.formateDate(t.startEnableTime)+"~"+e.formateDate(t.endEnableTime),a.push(i)});var n=e.formatJson(["index","registerDate","userName","nickName","phoneNumber","userMail","sex","enableCount","enableTime"],a);t.export_json_to_excel({header:["序号","注册时间","姓名","昵称","电话","邮箱","性别","可查次数","可查时段"],data:n,filename:"用户列表"}),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"timestamp"===e?parseTime(t[e]):t[e]})})}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-list-container"},[a("div",{staticClass:"container-user"},[a("div",{staticClass:"user-panel"},[a("div",{staticClass:"filter-container"},[a("div",[a("div",{staticClass:"filter-item"},[a("span",{staticClass:"filter-item-label"},[e._v("姓名")]),e._v(" "),a("el-input",{staticClass:"filter-item-content",attrs:{placeholder:"姓名",id:"nameFocus"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterSearchList(t)}},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),e._v(" "),a("div",{staticClass:"filter-item"},[a("span",{staticClass:"filter-item-label"},[e._v("电话")]),e._v(" "),a("el-input",{staticClass:"filter-item-content",attrs:{placeholder:"电话"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterSearchList(t)}},model:{value:e.phoneNumber,callback:function(t){e.phoneNumber=t},expression:"phoneNumber"}})],1),e._v(" "),a("div",{staticClass:"filter-item"},[a("span",{staticClass:"demonstration"},[e._v("可查时段")]),e._v(" "),a("el-date-picker",{staticStyle:{width:"400px"},attrs:{type:"daterange",align:"right","unlink-panels":"",clearable:"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions2},model:{value:e.queryDate,callback:function(t){e.queryDate=t},expression:"queryDate"}})],1),e._v(" "),a("div",{staticClass:"filter-item"},[a("span",{staticClass:"filter-item-label"},[e._v("可查次数")]),e._v(" "),a("el-input",{staticClass:"filter-item-content",attrs:{placeholder:"可查次数",type:"number"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterSearchList(t)}},model:{value:e.enableCount,callback:function(t){e.enableCount=t},expression:"enableCount"}})],1)]),e._v(" "),a("div",[a("div",{staticClass:"filter-item"},[a("span",{staticClass:"filter-item-label"},[e._v("昵称")]),e._v(" "),a("el-input",{staticClass:"filter-item-content",attrs:{placeholder:"昵称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterSearchList(t)}},model:{value:e.nickName,callback:function(t){e.nickName=t},expression:"nickName"}})],1),e._v(" "),a("div",{staticClass:"filter-item"},[a("span",{staticClass:"filter-item-label"},[e._v("邮箱")]),e._v(" "),a("el-input",{staticClass:"filter-item-content",attrs:{placeholder:"邮箱"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterSearchList(t)}},model:{value:e.userEmail,callback:function(t){e.userEmail=t},expression:"userEmail"}})],1),e._v(" "),a("div",{staticClass:"filter-item"},[a("span",{staticClass:"demonstration"},[e._v("注册时间")]),e._v(" "),a("el-date-picker",{attrs:{type:"datetimerange","picker-options":e.pickerOptions1,"range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",align:"right"},model:{value:e.registerTime,callback:function(t){e.registerTime=t},expression:"registerTime"}})],1),e._v(" "),a("div",{staticClass:"filter-item",staticStyle:{"margin-right":"20px"}},[e._m(0),e._v(" "),a("el-select",{staticClass:"filter-item-content",attrs:{placeholder:"性别",clearable:""},on:{change:e.changeSexHandler},model:{value:e.sex,callback:function(t){e.sex=t},expression:"sex"}},e._l(e.sexOption,function(e){return a("el-option",{key:e.key,attrs:{label:e.label,value:e.key}})}),1)],1),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item-search",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.doSearchUser}},[e._v("搜索\n          ")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item-download",attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v("导出\n          ")])],1)]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,fit:"",height:e.userTableHeight,"highlight-current-row":"","header-cell-style":{backgroundColor:"#EFF2F7"},"row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{label:"用户头像",align:"center",width:"160"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.userImage,width:"60px",height:"60px"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"注册时间",align:"center",width:"190"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time"}),e._v(" "),a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e.formateDatetime(t.row.registerDate)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"姓名",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{trigger:"hover",placement:"top"}},[a("p",[e._v("姓名: "+e._s(t.row.userName))]),e._v(" "),a("p",[e._v("电话: "+e._s(t.row.phoneNumber))]),e._v(" "),a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"medium"}},[e._v(e._s(t.row.userName))])],1)])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"昵称",align:"center",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.nickName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"电话",align:"center",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.phoneNumber))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"邮箱",align:"center",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.userMail))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"性别",align:"center",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(1==t.row.sex?"男":"女"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"已查次数",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.back1))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"可查次数",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.enableCount))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"可查时段",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e.formateDate(t.row.startEnableTime))+"~"+e._s(e.formateDate(t.row.endEnableTime)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center","min-width":"250px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.row.id)}}},[e._v("编辑\n            ")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger",disabled:"Y"==t.row.delFlag},on:{click:function(a){return e.handleDelete(t.row.id)}}},[e._v("禁用\n            ")]),e._v(" "),a("el-button",{staticStyle:{"background-color":"#5daf34","border-color":"#5daf34"},attrs:{size:"mini",type:"danger",disabled:"N"==t.row.delFlag},on:{click:function(a){return e.handleEnable(t.row.id)}}},[e._v("启用\n            ")])]}}])})],1),e._v(" "),a("div",{staticClass:"block",staticStyle:{"margin-top":"20px"}},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[10,20,50,100],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalItems},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)]),e._v(" "),a("el-dialog",{attrs:{title:"编辑用户查询次数和时段",visible:e.centerDialogVisible,width:"30%",modal:"",center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[a("el-form",{ref:"formRule",attrs:{model:e.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"可查次数"}},[a("el-input",{staticStyle:{width:"calc(100% - 50px)"},attrs:{type:"number",oninput:"if(value.length>10)value=value.slice(0,10)",placeholder:"请输入可查次数"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"可查时段"}},[a("el-date-picker",{staticStyle:{width:"calc(100% - 50px)"},attrs:{type:"daterange",align:"right","unlink-panels":"",clearable:"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions2},model:{value:e.form.formqueryDate,callback:function(t){e.$set(e.form,"formqueryDate",t)},expression:"form.formqueryDate"}})],1),e._v(" "),a("el-form-item",[a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("确定")]),e._v(" "),a("el-button",{staticStyle:{float:"right","margin-right":"15px"},on:{click:e.cancle}},[e._v("取消")])],1)],1)],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"filter-item-label"},[this._v("性"),t("span",{staticStyle:{visibility:"hidden"}},[this._v("楼栋")]),this._v("别")])}]};var l=a("C7Lr")(r,s,!1,function(e){a("grC2")},null,null);t.default=l.exports},a0qG:function(e,t,a){"use strict";function n(e,t){/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));var a={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var n in a)if(new RegExp("("+n+")").test(t)){var i=a[n]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?i:r(i))}function r(e){return("00"+e).substr(e.length)}return t}t.a=n},cAgV:function(e,t,a){"use strict";var n=a("aA9S"),i=a.n(n),r=(a("ctMr"),{bind:function(e,t){e.addEventListener("click",function(a){var n=i()({},t.value),r=i()({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),s=r.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var l=s.getBoundingClientRect(),o=s.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":((o=document.createElement("span")).className="waves-ripple",o.style.height=o.style.width=Math.max(l.width,l.height)+"px",s.appendChild(o)),r.type){case"center":o.style.top=l.height/2-o.offsetHeight/2+"px",o.style.left=l.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(a.pageY-l.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(a.pageX-l.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=r.color,o.className="waves-ripple z-active",!1}},!1)}}),s=function(e){e.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(s)),r.install=s;t.a=r},ctMr:function(e,t){},grC2:function(e,t){}});