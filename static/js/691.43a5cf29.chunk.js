"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[691],{691:function(e,n,r){r.r(n),r.d(n,{default:function(){return G}});var t=r(439),s=r(791),i=r(434),a=r(16),l="Card_card__JasSW",c="Card_top__F4m+4",o="Card_avatar-wrapper__nrAox",u="Card_bottom__aW6hE",d="Card_text__ORNRM";var f=r.p+"static/media/LogoGoIt.e917114d7945c04c85a8946a331d28b6.svg",_="Avatar_container__S12nP",v="Avatar_image__2XlRs",h=r(184),j=function(e){var n=e.avatar;return(0,h.jsx)("div",{className:_,children:(0,h.jsx)("img",{className:v,src:n,alt:""})})},x="Button_button__bQ9He",m="Button_active__nrTNj",p=function(e){var n=e.label,r=e.isActive,t=void 0!==r&&r,s=e.onClick;return(0,h.jsx)("button",{className:"".concat(x," ").concat(t?m:""),onClick:s,children:n})},w=r(751),N=function(e){var n=e.user,r=(0,i.v9)((function(e){return e.follow})).ids.includes(n.id),t=(0,i.I0)();return(0,h.jsxs)("div",{className:l,children:[(0,h.jsxs)("div",{className:c,children:[(0,h.jsx)("img",{src:f,alt:""}),(0,h.jsx)("div",{className:o,children:(0,h.jsx)(j,{avatar:n.avatar})})]}),(0,h.jsxs)("div",{className:u,children:[(0,h.jsxs)("span",{className:d,children:[(0,h.jsx)("span",{children:n.tweets}),(0,h.jsx)("span",{children:"TWEETS"})]}),(0,h.jsxs)("span",{className:d,children:[(0,h.jsx)("span",{children:r?(Number(n.followers)+1).toLocaleString("en-GB"):Number(n.followers).toLocaleString("en-GB")}),(0,h.jsx)("span",{children:"FOLLOWERS"})]}),(0,h.jsx)(p,{label:r?"following":"follow",isActive:r,onClick:function(){return t((0,w.T)(n.id))}})]})]})},b="CardList_inner__3jWGG",C="CardList_filter__TKCtb",g="CardList_wrapper__7adnc",S="CardList_more__mfWpO",L="Filter_dropdown__KfTHQ",k="Filter_selected-option__6DRIh",F="Filter_options__rw4RK",T=function(e){var n=e.options,r=e.onSelect,i=e.initialValue,a=(0,s.useState)(i),l=(0,t.Z)(a,2),c=l[0],o=l[1],u=(0,s.useState)(!1),d=(0,t.Z)(u,2),f=d[0],_=d[1];return(0,h.jsxs)("div",{className:L,children:[(0,h.jsx)("div",{className:k,onClick:function(){_(!0)},children:c.label}),f&&(0,h.jsx)("ul",{className:F,children:n.map((function(e){return(0,h.jsx)("li",{onClick:function(){return function(e){o(e),r(e),_(!1)}(e)},children:e.label},e.value)}))})]})},E=r(299),R=function(e,n,r){var t=n*e;return r.slice(0,t)},A=[{label:"All",value:"all"},{label:"Follow",value:"follow"},{label:"Following",value:"following"}],W=function(){var e=(0,i.v9)((function(e){return e.users})),n=e.users,r=e.isLoading,l=e.error,c=(0,i.v9)((function(e){return e.filter})),o=(0,i.v9)((function(e){return e.follow})).ids,u=(0,s.useState)([]),d=(0,t.Z)(u,2),f=d[0],_=d[1],v=(0,s.useState)(1),j=(0,t.Z)(v,2),x=j[0],m=j[1],p=(0,s.useState)(!1),w=(0,t.Z)(p,2),L=w[0],k=w[1],F=(0,s.useRef)(!0),W=(0,i.I0)();return(0,s.useEffect)((function(){F.current||_(function(e,n,r){switch(n.value){case"all":return e;case"follow":return e.filter((function(e){return!r.includes(e.id)}));case"following":return e.filter((function(e){return r.includes(e.id)}))}}(n,c,o))}),[c,o,n]),(0,s.useEffect)((function(){F.current||k(f.length>=12*x)}),[f,x]),(0,s.useEffect)((function(){W((0,a.u)()),F.current=!1}),[]),(0,h.jsx)(h.Fragment,{children:r?(0,h.jsx)("div",{children:"Loading..."}):l?(0,h.jsx)("div",{children:l}):n.length?(0,h.jsxs)("div",{className:b,children:[(0,h.jsx)("div",{className:C,children:(0,h.jsx)(T,{options:A,initialValue:c,onSelect:function(e){return W((0,E.T)(e))}})}),(0,h.jsx)("div",{className:g,children:R(x,12,f).map((function(e){return(0,h.jsx)(N,{user:e},e.id)}))}),L&&(0,h.jsx)("button",{className:S,onClick:function(){return m((function(e){return e+1}))},children:"More"})]}):(0,h.jsx)("div",{children:"There are no users"})})},G=function(){return(0,h.jsx)(W,{})}}}]);
//# sourceMappingURL=691.43a5cf29.chunk.js.map