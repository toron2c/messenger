"use strict";(self.webpackChunkmessenger2000=self.webpackChunkmessenger2000||[]).push([[262],{8262:function(e,s,t){t.r(s),t.d(s,{default:function(){return i}});var n=t(2478),a="ChatsMobileMessages_boxMessageMobile__jIOba",r=t(184);function i(){return(0,r.jsx)("div",{className:a,children:(0,r.jsx)(n.Z,{})})}},2478:function(e,s,t){t.d(s,{Z:function(){return N}});var n={warning:"Messages_warning__4JPGe",box:"Messages_box__E+k70",messagesTitle:"Messages_messagesTitle__5bXmh",messages:"Messages_messages__f1rfY",messagesTitleName:"Messages_messagesTitleName__mTkd9",user:"Messages_user__3YK6t",bot:"Messages_bot__KOeto",date:"Messages_date__CPU+m",box__back:"Messages_box__back__7vufU",avatar:"Messages_avatar__d5zb+"},a=t(5048),r=t(7689),i=t(1087),c="MessageInputNewMessage_box__DjvQx",u="MessageInputNewMessage_inputMessageArea__L3idV",o="MessageInputNewMessage_buttonEnter__nrtTz",g=t(5122),d=t(184);function l(e){var s=e.uid,t=(0,a.I0)(),n=(0,a.v9)((function(e){return e.messages.textNewMessage}));return(0,d.jsxs)("div",{className:c,children:[(0,d.jsx)("textarea",{className:u,autoFocus:!0,id:"inputRef",value:n,onChange:function(e){e.preventDefault(),t((0,g.wm)(e.target.value))},placeholder:"text message"}),(0,d.jsx)("button",{className:o,onClick:function(e){e.preventDefault(),""!==n&&(t((0,g.kG)(s)),document.getElementById("inputRef").focus())},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})}var m=t(2791),f="message_text__Kk+Cy",_="message_time__44iFz",h="message_user__PWgOe",v="message_bot__PyeOS",x=(0,m.forwardRef)((function(e,s){var t=e.el,n=new Date(t.TimestampServer?t.TimestampServer:new Date),a=window.innerWidth;return(0,m.useEffect)((function(){a<=600?s.current.scrollIntoView(!0):s.current.scrollIntoView({behavior:"smooth"})}),[s,a]),(0,d.jsx)("div",{className:"you"===t.author?h:v,children:(0,d.jsxs)("div",{className:f,children:[t.message,(0,d.jsxs)("div",{className:_,children:[n.getHours()," : ",(n.getMinutes()<10?"0":"")+n.getMinutes()]})]})})}));function j(e){var s,t,r=e.uid,i=(0,a.v9)((s=r,function(e){return e.messages.messageList[s].messages})),c=(0,a.I0)(),u=(0,m.useRef)();(0,m.useEffect)((function(){return c((0,g.L9)(r)),function(){c((0,g.qn)(r))}}),[r,c]);var o=i.map((function(e){var s=new Date(e.TimestampServer?e.TimestampServer:new Date);if(void 0===t||t.getDate()!==s.getDate()){var a=(t=s).toLocaleString("default",{month:"long"});return(0,d.jsxs)(m.Fragment,{children:[(0,d.jsxs)("div",{className:n.date,children:[a," ",t.getDate()]},"".concat(e.idMessage,"_date")),(0,d.jsx)(M,{ref:u,el:e},"".concat(e.idMessage,"_m"))]},e.idMessage)}return(0,d.jsx)(M,{ref:u,el:e},"".concat(e.idMessage,"_message"))}));return(0,d.jsxs)(d.Fragment,{children:[o&&o,(0,d.jsx)("div",{ref:u})]})}var M=m.memo(x),b=t(3398);function N(){var e=(0,r.UO)().id,s=(0,a.I0)(),t=(0,m.useMemo)((function(){return(0,b.iN)(e)}),[e]),c=(0,a.v9)(t),u=(0,m.useRef)(),o=window.innerWidth;(0,m.useEffect)((function(){c&&s((0,g.Lt)(c.chatId))}),[c,s]);return(0,d.jsx)(d.Fragment,{children:c?(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:n.box,children:[(0,d.jsxs)("div",{className:n.messagesTitle,children:[(0,d.jsxs)("div",{className:n.messagesTitleName,children:[c.nameDialog,c.avatar&&(0,d.jsx)("img",{className:n.avatar,src:c.avatar,width:"24",heigth:"24",alt:"profile avatar"})]}),o<1024&&(0,d.jsx)("div",{children:(0,d.jsx)(i.rU,{class:n.box__back,to:"/chats",children:"\u2190"})})]}),(0,d.jsxs)("div",{onScroll:function(){Math.abs(u.current.getBoundingClientRect().top-u.current.offsetTop)<1&&s((0,g.Sq)(c.chatId))},className:n.messages,children:[(0,d.jsx)("div",{ref:u}),(0,d.jsx)(j,{uid:c.chatId})]}),(0,d.jsx)("div",{className:n.input,children:(0,d.jsx)(l,{uid:c.chatId})})]})}):(0,d.jsx)("p",{className:n.warning,children:"\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0447\u0430\u0442"})})}},3398:function(e,s,t){function n(){return function(e){return e.chats.chatList}}function a(e){return function(s){return s.chats.chatList.find((function(s){return s.linkToDialog===Number(e)}))}}function r(){return function(e){return e.chats.toggleNewChat}}function i(){return function(e){return e.chats.error.isError}}function c(){return function(e){return e.chats.error.msg}}t.d(s,{VF:function(){return r},dO:function(){return c},dq:function(){return i},iN:function(){return a},vK:function(){return n}})}}]);
//# sourceMappingURL=262.3140c179.chunk.js.map