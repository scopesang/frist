(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["repair"],{"33f4":function(e,l,a){},"7fe0":function(e,l,a){"use strict";a.r(l);var t=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",{attrs:{id:"classRoom"}},[a("el-row",[a("el-col",{attrs:{span:16,offset:4}},[a("router-link",{attrs:{to:"/"}},[a("el-page-header",{attrs:{content:"报修服务"}})],1)],1)],1),a("div",{staticStyle:{"background-color":"#fafafa",padding:"40px"}},[a("el-row",[a("el-col",{attrs:{span:10,offset:7}},[a("el-form",{ref:"form",attrs:{model:e.leave,"label-width":"100px"}},[a("el-row",{staticClass:"bgbox"},[a("el-col",{attrs:{span:24}},[a("P",{staticStyle:{"font-size":"14px",color:"#409eff"}},[e._v("请先选择报修类型*")]),a("el-form-item",{attrs:{label:"维修类型  :"}},[a("el-radio-group",{attrs:{size:"medium"},model:{value:e.leave.type,callback:function(l){e.$set(e.leave,"type",l)},expression:"leave.type"}},[a("el-radio",{attrs:{border:"",label:1}},[e._v("水维修")]),a("el-radio",{attrs:{border:"",label:2}},[e._v("电维修")]),a("el-radio",{attrs:{border:"",label:3}},[e._v("房屋维修")])],1)],1)],1)],1),a("el-row",{staticClass:"bgbox"},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"学生姓名"}},[a("el-input",{model:{value:e.leave.name,callback:function(l){e.$set(e.leave,"name",l)},expression:"leave.name"}})],1),a("el-form-item",{attrs:{label:"联系电话"}},[a("el-input",{attrs:{placeholder:"联系电话"},model:{value:e.leave.phone,callback:function(l){e.$set(e.leave,"phone",l)},expression:"leave.phone"}})],1),a("el-form-item",{attrs:{label:"专业班级"}},[a("el-cascader",{attrs:{options:e.options,size:"medium"},on:{change:e.handleChange},model:{value:e.leave.class,callback:function(l){e.$set(e.leave,"class",l)},expression:"leave.class"}})],1),a("el-form-item",{attrs:{label:"宿舍号码"}},[a("el-cascader",{attrs:{options:e.classOption},on:{change:e.handleChange},model:{value:e.value,callback:function(l){e.value=l},expression:"value"}})],1),a("el-form-item",{attrs:{label:"具体描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.leave.desc,callback:function(l){e.$set(e.leave,"desc",l)},expression:"leave.desc"}})],1),a("el-row",[a("el-col",{attrs:{span:4,offset:20}},[a("el-button",{staticStyle:{"margin-top":"12px"}},[e._v("提交")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},s=[],o={name:"classRoom",data:function(){return{active:1,leave:{name:"",number:"",type:"",date1:"",date2:"",phone:"",desc:"",homeNum:""},options:[{value:"tmgc",label:"土木工程",children:[{value:"2017",label:"2017级",children:[{value:"qlyb",label:"桥梁一班"},{value:"qleb",label:"桥梁二班"}]},{value:"2018",label:"2018级",children:[{value:"qlyb",label:"桥梁一班"},{value:"qleb",label:"桥梁二班"}]}]},{value:"jsj",label:"计算机系",children:[{value:"2017",label:"2017级",children:[{value:"wzeb",label:"网站二班"},{value:"wzyb",label:"网站一班"},{value:"wlyb",label:"网络一班"}]},{value:"2018",label:"2018级",children:[{value:"wzeb",label:"网站二班"},{value:"wzyb",label:"网站一班"},{value:"wlyb",label:"网络一班"}]},{value:"2019",label:"2019级",children:[{value:"wzeb",label:"网站二班"},{value:"wzyb",label:"网站一班"},{value:"wlyb",label:"网络一班"}]}]}],classOption:[{label:"2栋",value:"2",children:[{label:"201",value:"201"},{label:"404",value:"404",disabled:!0}]},{label:"1栋",value:"1",children:[{label:"201",value:"201"},{label:"404",value:"404"}]}]}},methods:{}},r=o,n=(a("99cd"),a("2877")),c=Object(n["a"])(r,t,s,!1,null,"03cb4055",null);l["default"]=c.exports},"99cd":function(e,l,a){"use strict";var t=a("33f4"),s=a.n(t);s.a}}]);
//# sourceMappingURL=repair.feae830f.js.map