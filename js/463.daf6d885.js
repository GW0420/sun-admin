"use strict";(self["webpackChunksun_admin"]=self["webpackChunksun_admin"]||[]).push([[463],{2888:function(e,t,a){a.d(t,{Z:function(){return g}});var l=a(9963),n=a(6252),u=a(3577),s=a(2262);const c={class:"card"},i={class:"card-header"},o={class:"card-content"},r={class:"card-footer"},v={key:0,class:"iconfont icon-shangla-grey"},d={key:1,class:"iconfont icon-xiala-grey"},p=["textContent"];var f={__name:"DemoCard",props:{title:String,type:String,code:String},setup(e){(0,l.sj)((e=>({"60e19f8f":_.value,"103d0d3f":f.value,"16766d8e":m.value,"3ad43b8e":a.value})));const t=(0,s.iH)(!1),a=(0,s.iH)(0),f=(0,s.iH)(0),m=(0,s.iH)(0),_=(0,s.iH)(0),g=()=>{t.value=!t.value,f.value=t.value?"16px 0":"0px",a.value=t.value?"400px":"0px",m.value=t.value?1:0,_.value=t.value?"16px":"0px"};return(a,l)=>{const s=(0,n.up)("highlightjs"),f=(0,n.up)("dic");return(0,n.wg)(),(0,n.iD)("div",c,[(0,n._)("div",i,(0,u.zw)(e.title),1),(0,n._)("div",o,[(0,n.WI)(a.$slots,"default")]),(0,n._)("div",r,[(0,n.Wm)(s,{language:e.type,code:e.code},null,8,["language","code"]),(0,n.Wm)(f,{class:"card-code"},{default:(0,n.w5)((()=>[(0,n._)("div",{class:"card-look",onClick:g},[t.value?((0,n.wg)(),(0,n.iD)("span",v)):(0,n.kq)("",!0),t.value?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("span",d)),(0,n._)("span",{class:"card-mark",textContent:(0,u.zw)(t.value?"收起代码":"查看代码")},null,8,p)])])),_:1})])])}}},m=a(3744);const _=(0,m.Z)(f,[["__scopeId","data-v-44cc063e"]]);var g=_},7463:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var l=a(6252),n=a(2262),u=a(3577),s=a(9963),c=a(2888),i=a(8299),o=a.n(i);const r={class:"tabs-test-content"},v=["onClick"],d={class:"tabs-item-icon"},p={class:"tabs-item-title"},f={class:"tabs-item-close"};var m={__name:"index",setup(e){const{sunButton:t,sunSpecialButton:a}=o(),i=(0,n.iH)([]),m=(0,n.iH)(0),_=(0,n.iH)(0),g=(0,n.iH)(0),k=(0,n.iH)(0),w=()=>{m.value++;let e={path:"/features/preview",title:"图片预览",icon:"UserFilled",key:m.value};i.value=[...i.value,e],setTimeout((()=>{_.value=y(".sun-test-tabs"),g.value+=x(`.tabs-pane-${m.value}`)+3,i.value[m.value-1]["width"]=g.value,k.value=g.value-_.value,h(g.value,_.value)}))},b=e=>{let t=x(`.tabs-pane-${e.key}`)+3,a=document.querySelector(".tabs-test-content");k.value>=0&&k.value<g.value-_.value?(k.value+=t,a.style.transform=`translateX(-${k.value}px)`):(k.value=0,a.style.transform=`translateX(-${k.value}px)`)},y=e=>{let t="",a=document.querySelector(e);return t=a.offsetWidth,t},x=e=>{let t="",a=document.querySelector(e);return t=a.offsetWidth,t},h=(e,t)=>{if(e>t){let e=document.querySelector(".tabs-test-content");e.style.transform=`translateX(-${k.value+12}px)`}};return(e,a)=>{const o=(0,l.up)("el-row"),m=(0,l.up)("el-icon"),_=(0,l.up)("Close");return(0,l.wg)(),(0,l.j4)(c.Z,{title:"自定义路由标签（演示demo，详情可演示顶部动态路由标签）",type:"html",code:"xxx"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,null,{default:(0,l.w5)((()=>[(0,l.Wm)((0,n.SU)(t),{background:"linear-gradient(to right, rgb(68, 101, 180), rgba(68, 101, 180, 0.6))",onClick:w},{default:(0,l.w5)((()=>[(0,l.Uk)(" 添加路由标签 ")])),_:1})])),_:1}),(0,l.Wm)(o,{class:"sun-test-tabs"},{default:(0,l.w5)((()=>[(0,l._)("div",r,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.value,((t,a)=>((0,l.wg)(),(0,l.iD)("div",{class:(0,u.C_)(["tabs-pane",`tabs-pane-${t.key}`]),key:a,onClick:e=>b(t)},[(0,l._)("div",d,[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.j4)((0,l.LL)(t.icon)))])),_:2},1024)]),(0,l._)("div",p,(0,u.zw)(t.title),1),(0,l._)("div",f,[(0,l.Wm)(m,{onClick:(0,s.iM)((a=>e.onTagsClose(t.title)),["stop"])},{default:(0,l.w5)((()=>[(0,l.Wm)(_)])),_:2},1032,["onClick"])])],10,v)))),128))])])),_:1})])),_:1})}}},_=a(3744);const g=(0,_.Z)(m,[["__scopeId","data-v-f94ba4a6"]]);var k=g}}]);
//# sourceMappingURL=463.daf6d885.js.map