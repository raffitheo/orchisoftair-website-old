import{r as s,S as k,j as n}from"./index-b6618c6c.js";import{I as x}from"./IconExtension-16c74aba.js";const b="_BackToTop_1krhu_1",p="_BackToTop_1krhu_1",_="_Active_1krhu_19",h="_Active_1krhu_19",T={BackToTop:b,backToTop:p,Active:_,active:h},w=i=>{const[c,l]=s.useState(!0),[f,e]=s.useState(!1),o=s.useContext(k),d=()=>{const a=(r,v)=>{const u=r.toFixed(),t=()=>{window.pageYOffset.toFixed()===u&&(window.removeEventListener("scroll",t),v())};window.addEventListener("scroll",t),t(),window.scrollTo({top:r,behavior:"smooth"})};l(!1),a(0,()=>l(!0))};return s.useEffect(()=>{(()=>{c&&o>i.minVisibleSize?i.maxVisibleSize?o<i.maxVisibleSize?e(!0):e(!1):e(!0):e(!1)})()},[c,o]),n.jsx("div",{className:`${T.BackToTop}${f?` ${T.Active}`:""}`,onClick:d,children:n.jsx(x,{name:"ChevronUp",size:35})})};export{w as default};
