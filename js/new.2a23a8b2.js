(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["new"],{4734:function(e,t,a){"use strict";var l=a("6a65"),s=a.n(l);s.a},"48e2":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"classRoom"}},[a("el-row",[a("el-col",{attrs:{span:16,offset:4}},[a("router-link",{attrs:{to:"/"}},[a("el-page-header",{attrs:{content:"申请教室"}})],1)],1)],1),a("div",{staticStyle:{"background-color":"#fafafa",padding:"40px"}},[a("el-row",[a("el-col",{attrs:{span:10,offset:7}},[a("el-form",{ref:"form",attrs:{model:e.leave,"label-width":"100px"}},[a("el-row",{staticClass:"bgbox"},[a("el-col",{attrs:{span:24}},[a("P",{staticStyle:{color:"#1989FA"}},[e._v("请先选择借用时间*")]),a("el-form-item",{attrs:{label:"借用时间"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择开始时间"},model:{value:e.leave.date1,callback:function(t){e.$set(e.leave,"date1",t)},expression:"leave.date1"}})],1),a("el-col",{staticClass:"line",staticStyle:{"text-align":"center"},attrs:{span:2}},[a("i",{staticClass:"el-icon-d-arrow-right"})]),a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择结束时间"},model:{value:e.leave.date2,callback:function(t){e.$set(e.leave,"date2",t)},expression:"leave.date2"}})],1)],1)],1)],1),a("el-row",{staticClass:"bgbox"},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"借用人"}},[a("el-input",{model:{value:e.leave.name,callback:function(t){e.$set(e.leave,"name",t)},expression:"leave.name"}})],1),a("el-form-item",{attrs:{label:"联系电话"}},[a("el-input",{attrs:{placeholder:"联系电话"},model:{value:e.leave.phone,callback:function(t){e.$set(e.leave,"phone",t)},expression:"leave.phone"}})],1),a("el-form-item",{attrs:{label:"借用单位"}},[a("el-cascader",{attrs:{options:e.options,size:"medium"},on:{change:e.handleChange},model:{value:e.leave.class,callback:function(t){e.$set(e.leave,"class",t)},expression:"leave.class"}})],1),a("el-form-item",{attrs:{label:"教室号码"}},[a("el-cascader",{attrs:{options:e.classOption},on:{change:e.handleChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),a("el-form-item",{attrs:{label:"教室类型"}},[a("el-radio-group",{attrs:{size:"medium"},model:{value:e.leave.choose,callback:function(t){e.$set(e.leave,"choose",t)},expression:"leave.choose"}},[a("el-radio",{attrs:{border:"",label:!0}},[e._v("大教室")]),a("el-radio",{attrs:{border:"",label:!1}},[e._v("小教室")])],1)],1),a("el-form-item",{attrs:{label:"具体用途"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.leave.desc,callback:function(t){e.$set(e.leave,"desc",t)},expression:"leave.desc"}})],1),a("el-button",{staticStyle:{"margin-top":"12px",float:"right"}},[e._v("提交")])],1)],1)],1)],1)],1)],1)],1)},s=[],n={name:"classRoom",data:function(){return{active:1,leave:{name:"",number:"",choose:!0,date1:"",date2:"",phone:"",desc:"",homeNum:""},classOption:[{label:"2栋",value:"2",children:[{label:"201",value:"201"},{label:"404",value:"404",disabled:!0}]},{label:"1栋",value:"1",children:[{label:"201",value:"201"},{label:"404",value:"404"}]}],options:[{label:"组织",value:"zz",children:[{label:"学生会",value:"xsh"}]},{label:"协会",value:"xh",children:[{label:"人机交往协会",value:"rjjw"}]}]}}},o=n,i=(a("4734"),a("2877")),c=Object(i["a"])(o,l,s,!1,null,"91e892f2",null);t["default"]=c.exports},"67bf":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-row",[l("el-col",{attrs:{span:24}},[l("img",{attrs:{src:a("1f7c"),alt:"",width:"100%"}})])],1),l("Nav"),l("el-row",[l("el-col",{attrs:{span:13,offset:3}},[l("el-row",{staticStyle:{"margin-bottom":"40px"},attrs:{type:"flex",justify:"space-between"}},e._l(e.newItem,(function(t,a){return l("el-col",{key:a,attrs:{span:7}},[l("div",{staticClass:"newitem"},[l("h3",[l("a",{attrs:{href:"#"}},[e._v(e._s(t.title))])]),l("p",{staticClass:"content"},[e._v(e._s(t.content))]),l("p",[l("i",{staticClass:"el-icon-alarm-clock clock i-mr"}),l("span",{staticClass:"clock-font i-mr"},[e._v(e._s(t.time))]),l("i",{staticClass:"el-icon-view i-mr clock-font"}),l("span",{staticClass:"clock-font i-mr"},[e._v(e._s(t.see))])])])])})),1),l("el-row",{staticStyle:{"margin-bottom":"40px"},attrs:{type:"flex",justify:"space-between"}},e._l(e.newItem,(function(t,a){return l("el-col",{key:a,attrs:{span:7}},[l("div",{staticClass:"newitem"},[l("h3",[l("a",{attrs:{href:"#"}},[e._v(e._s(t.title))])]),l("p",{staticClass:"content"},[e._v(e._s(t.content))]),l("p",[l("span",{staticClass:"clock-font i-mr"},[e._v(e._s(t.time))]),l("i",{staticClass:"el-icon-view i-mr clock-font"}),l("span",{staticClass:"clock-font i-mr"},[e._v(e._s(t.see))])])])])})),1),l("p",{staticStyle:{"text-align":"center"}},[l("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:1e3}})],1)],1),l("el-col",{attrs:{span:4,offset:1}},[l("div",{staticClass:"block"},[l("i",{staticClass:"el-icon-camera"}),l("span",{staticClass:"defaultColor"},[e._v("图读茂知")]),l("el-carousel",{attrs:{height:"150px","indicator-position":"outside"}},e._l(3,(function(e,t){return l("el-carousel-item",{key:t},[l("h3",{staticClass:"small"},[l("img",{attrs:{src:a("e731"),alt:"",height:"100%"}})])])})),1)],1),l("el-collapse",{staticStyle:{"margin-top":"20px"},on:{change:e.handleChange},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[l("p",{staticClass:"demonstration defaultColor"},[e._v("近日热点")]),l("el-collapse-item",{attrs:{title:"一致性 Consistency",name:"1"}},[l("div",[e._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),l("div",[e._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")])]),l("el-collapse-item",{attrs:{title:"反馈 Feedback",name:"2"}},[l("div",[e._v("控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；")]),l("div",[e._v("页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。")])]),l("el-collapse-item",{attrs:{title:"效率 Efficiency",name:"3"}},[l("div",[e._v("简化流程：设计简洁直观的操作流程；")]),l("div",[e._v("清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；")]),l("div",[e._v("帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。")])]),l("el-collapse-item",{attrs:{title:"可控 Controllability",name:"4"}},[l("div",[e._v("用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；")]),l("div",[e._v("结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。")])])],1)],1)],1)],1)},s=[],n=a("216c"),o={name:"New",components:{Nav:n["a"]},data:function(){return{activeNames:["1"],newItem:[{title:"【微观清华】清华紫+志愿蓝，我们愿做五星红旗灿烂光华中淡淡的一笔",content:"十一过半，有一群清华人依旧忙碌在志愿服务岗位上，为新中国成立70周年献礼，为这个十一假期找到另一种意义。",time:"2019-18-19",see:"22"},{title:"【微观清华】清华紫+志愿蓝，我们愿做五星红旗灿烂光华中淡淡的一笔",content:"十一过半，有一群清华人依旧忙碌在志愿服务岗位上，为新中国成立70周年献礼，为这个十一假期找到另一种意义。",time:"2019-18-19",see:"22"},{title:"【微观清华】清华紫+志愿蓝，我们愿做五星红旗灿烂光华中淡淡的一笔",content:"十一过半，有一群清华人依旧忙碌在志愿服务岗位上，为新中国成立70周年献礼，为这个十一假期找到另一种意义。",time:"2019-18-19",see:"22"}],cslImg:[]}},methods:{handleChange:function(e){console.log(e)}}},i=o,c=(a("724f"),a("2877")),r=Object(c["a"])(i,l,s,!1,null,"4cabfc23",null);t["default"]=r.exports},"6a65":function(e,t,a){},"724f":function(e,t,a){"use strict";var l=a("c048"),s=a.n(l);s.a},c048:function(e,t,a){}}]);
//# sourceMappingURL=new.2a23a8b2.js.map