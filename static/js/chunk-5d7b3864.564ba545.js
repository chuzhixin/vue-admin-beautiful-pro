/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2021-7-4 22:50:37
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d7b3864"],{"577a":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"map-container"},[e("div",{staticClass:"container",attrs:{id:"map"}})])}],i=(e("2769"),e("8639"),e("e1d4"),e("bc3a")),s=e.n(i),o=e("fdf9"),d={name:"Map",components:{},data:function(){return{}},created:function(){},mounted:function(){var t=this;this.$nextTick((function(){var a=t.$baseMap();s.a.get("https://cdn.jsdelivr.net/npm/mapv@2.0.12/examples/data/od-xierqi.txt").then((function(t){var e=[],n=[];t=t.data.split("\n");for(var r=0,i=0;i<t.length;i++){var s=t[i].split(","),d=[];s.length>r&&(r=s.length);for(var l=0;l<s.length;l+=2){var c=Number(s[l])/20037508.34*180,p=Number(s[l+1])/20037508.34*180;p=180/Math.PI*(2*Math.atan(Math.exp(p*Math.PI/180))-Math.PI/2),0!=c&&NaN!=p&&(d.push([c,p]),n.push({geometry:{type:"Point",coordinates:[c,p]},count:1,time:l}))}e.push({geometry:{type:"LineString",coordinates:d}})}var u=new o["DataSet"](e),h={strokeStyle:"rgba(53,57,255,0.5)",shadowColor:"rgba(53,57,255,0.2)",shadowBlur:3,lineWidth:3,draw:"simple"},m=(new o["MaptalksLayer"]("mapv1",u,h).addTo(a),new o["DataSet"](n)),f={fillStyle:"rgba(255, 250, 250, 0.2)",globalCompositeOperation:"lighter",size:1.5,animation:{stepsRange:{start:0,end:100},trails:3,duration:5},draw:"simple"};new o["MaptalksLayer"]("mapv2",m,f).addTo(a)}))}))},methods:{}},l=d,c=(e("f3d2"),e("5d22")),p=Object(c["a"])(l,n,r,!1,null,"e6a1fd9c",null);a["default"]=p.exports},8208:function(t,a,e){},f3d2:function(t,a,e){"use strict";e("8208")}}]);