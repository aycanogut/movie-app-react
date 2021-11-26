import{j as t,S as y,a as x,r as c,B as v,b as u,R as w,c as d,W as b,N as _,T as k,d as E,e as R}from"./vendor.3e792043.js";const $=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}};$();const L="modulepreload",h={},S="/",m=function(s,i){return!i||i.length===0?s():Promise.all(i.map(n=>{if(n=`${S}${n}`,n in h)return;h[n]=!0;const e=n.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":L,e||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),e)return new Promise((p,g)=>{o.addEventListener("load",p),o.addEventListener("error",g)})})).then(()=>s())};function O(){return t(y,{baseColor:"#202020",highlightColor:"#444",children:t("p",{children:t(x,{count:1e3})})})}const j=c.exports.lazy(()=>m(()=>import("./Homepage.c6fa7848.js"),["assets/Homepage.c6fa7848.js","assets/vendor.3e792043.js","assets/Footer.styled.d01c0005.js","assets/Footer.styled.e60ab638.css"])),z=c.exports.lazy(()=>m(()=>import("./Search.c716581c.js"),["assets/Search.c716581c.js","assets/vendor.3e792043.js","assets/Footer.styled.d01c0005.js","assets/Footer.styled.e60ab638.css","assets/CardContainer.styled.3283bdef.js"])),P=c.exports.lazy(()=>m(()=>import("./Favorites.99acff22.js"),["assets/Favorites.99acff22.js","assets/vendor.3e792043.js","assets/Footer.styled.d01c0005.js","assets/Footer.styled.e60ab638.css","assets/CardContainer.styled.3283bdef.js"]));function A(){return t(v,{children:t(c.exports.Suspense,{fallback:t(O,{}),children:u(w,{children:[t(d,{path:"/",element:t(j,{})}),t(d,{path:"/search",element:t(z,{})}),t(d,{path:"/favorites",element:t(P,{})})]})})})}const a={xs:"320px",sm:"465px",md:"750px",lg:"1200px"},B={xs:`(min-width: ${a.xs})`,sm:`(min-width: ${a.sm})`,md:`(min-width: ${a.md})`,lg:`(min-width: ${a.lg})`},F={thin:"300",semiBold:"600",extraBold:"800"},N={body:"#1d1d1d",text:"#fff",textBadge:"#0FEFFD"};var l={size:a,device:B,fontWeight:F,colors:N};const T=b`

// global styles
html {
    font-size: 62.5%;
}

body {
height: 100vh;
font-family: 'Roboto', sans-serif;
background-color: ${l.colors.body};

}

img {
    max-width: 100%;
}

a, a:-webkit-any-link {
  text-decoration: none 
}

#root, .App {
  height: 100%;
}

// swiper.js breakpoints
.swiper-container {
  width: 480px;
}

@media screen and (min-width: 640px) {
  .swiper-container {
    width: 640px;
  }
}

@media screen and (min-width: 768px) {
  .swiper-container {
    width: 768px;
  }
}

.toaster {

  background-color: ${l.colors.body};

  @media only screen and ${l.device.md} {
    font-size: 1.4rem;
} ;
@media only screen and ${l.device.lg} {
  font-size: 1.8rem;
} ;

}

`;function C(){return u("div",{className:"App",children:[t(_,{}),t(k,{theme:"theme"}),t(T,{}),t(A,{})]})}E.render(t(R.StrictMode,{children:t(C,{})}),document.getElementById("root"));export{l as h};
