"use strict";(self.webpackChunkborder=self.webpackChunkborder||[]).push([[4969],{4969:(e,n,r)=>{r.r(n),r.d(n,{default:()=>i}),r(35666);var t=r(30166);function o(e,n,r,t,o,u,i){try{var a=e[u](i),s=a.value}catch(e){return void r(e)}a.done?n(s):Promise.resolve(s).then(t,o)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(t,u){var i=e.apply(n,r);function a(e){o(i,t,u,a,s,"next",e)}function s(e){o(i,t,u,a,s,"throw",e)}a(void 0)}))}}r(44431),r(51825),r(51206);const i=function(e){var n,o=e.apiKey,i=e.networkId,a=e.preferred,s=e.label,c=e.iconSrc;return{name:s||"Fortmatic",svg:e.svg||'\n  <svg \n    height="40" \n    viewBox="0 0 40 40" \n    width="40" \n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path d="m2744.99995 1155h9.99997 10.00008v9.98139h-10.00008-9.99997-9.99998v9.9814.64001 9.28323.05815 9.9234h-9.99997v-9.9234-.05815-9.28323-.64001-9.9814-9.98139h9.99997zm9.99961 29.88552h-9.94167v-9.92324h19.93595v10.27235c0 2.55359-1.01622 5.00299-2.82437 6.80909-1.80867 1.8061-4.26182 2.82181-6.82018 2.82335h-.34973z" \n      fill="#617bff" \n      fill-rule="evenodd" \n      transform="translate(-2725 -1155)"/>\n  </svg>\n',iconSrc:c,wallet:(n=u(regeneratorRuntime.mark((function e(n){var a,s,c,f,d,v,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(769).then(r.t.bind(r,769,23));case 2:return a=e.sent,s=a.default,c=new s(o,1===i?void 0:(0,t.n)(i)),f=c.getProvider(),d=n.BigNumber,v=n.getAddress,e.abrupt("return",{provider:f,instance:c,interface:{name:"Fortmatic",connect:function(){return c.user.login().then((function(e){return l=!0,e}))},disconnect:function(){return c.user.logout()},address:{get:function(){return l?v(f):Promise.resolve()}},network:{get:function(){return Promise.resolve(i)}},balance:{get:function(){var e=u(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l&&c.user.getBalances().then((function(e){return e[0]?d(e[0].crypto_amount).times(d("1000000000000000000")).toString(10):null})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},dashboard:function(){return c.user.settings()}}});case 8:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)}),type:"sdk",desktop:!0,mobile:!0,preferred:a}}}}]);