(function(t){function n(n){for(var i,s,a=n[0],c=n[1],u=n[2],l=0,f=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(n);while(f.length)f.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],i=!0,a=1;a<e.length;a++){var c=e[a];0!==r[c]&&(i=!1)}i&&(o.splice(n--,1),t=s(s.s=e[0]))}return t}var i={},r={app:0},o=[];function s(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=i,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)s.d(e,i,function(n){return t[n]}.bind(null,i));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/tictactoe/dist/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var u=0;u<a.length;u++)n(a[u]);var p=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var i=e("85ec"),r=e.n(i);r.a},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("header",[t._v(" "+t._s(t.bout)+" ")]),t._l(t.map,(function(n,i){return e("div",{key:i,staticClass:"row"},t._l(n,(function(n,r){return e("div",{key:r,staticClass:"cell",on:{click:function(n){return t.cellClick(i,r)}}},[e("span",[t._v(t._s(n))])])})),0)})),e("footer",[e("p",{directives:[{name:"show",rawName:"v-show",value:t.isWin,expression:"isWin"}]},[t._v("恭喜["+t._s(t.winner)+"]方获胜")]),e("button",{on:{click:t.reset}},[t._v("重新开始")])])],2)},o=[],s=(e("d81d"),{name:"App",data:function(){return{n:0,map:[["","",""],["","",""],["","",""]],isWin:!1,isDraw:!1,winner:""}},methods:{cellClick:function(t,n){if(!this.isWin&&""===this.map[t][n]){this.winner=this.n%2?"X":"O",this.map[t][n]=this.winner,this.n++,console.log(this.n);var e=this.checkWin();if(e){this.isWin=!0;var i=this.winner;(function(){setTimeout((function(){alert("恭喜“".concat(i,"”胜利！"))}),100)})()}else{if(9===this.n)return this.isDraw=!0,void setTimeout((function(){alert("平局！")}),100);console.log(t,n)}}},checkWin:function(){for(var t=0;t<=2;t++)if(""!==this.map[t][0]&&this.map[t][0]===this.map[t][1]&&this.map[t][1]===this.map[t][2])return!0;for(var n=0;n<=2;n++)if(""!==this.map[0][n]&&this.map[0][n]===this.map[1][n]&&this.map[1][n]===this.map[2][n])return!0;return""!==this.map[0][0]&&this.map[0][0]===this.map[1][1]&&this.map[1][1]===this.map[2][2]||""!==this.map[0][2]&&this.map[0][2]===this.map[1][1]&&this.map[1][1]===this.map[2][0]},reset:function(){this.map=[["","",""],["","",""],["","",""]],this.n=0,this.isWin=!1,this.isDraw=!1}},computed:{bout:function(){return 0===this.n?"等待游戏开始":"第 ".concat(this.n," 手")}}}),a=s,c=(e("034f"),e("2877")),u=Object(c["a"])(a,r,o,!1,null,null,null),p=u.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(p)}}).$mount("#app")},"85ec":function(t,n,e){}});
//# sourceMappingURL=app.0083933a.js.map