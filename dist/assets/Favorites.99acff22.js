import{s as i,r as s,b as n,j as t}from"./vendor.3e792043.js";import{u,N as f,C as g,S as h,a as v,H as x,T as F,F as C,c as S,d as j}from"./Footer.styled.d01c0005.js";import{h as y}from"./index.62363ac6.js";import{C as b}from"./CardContainer.styled.3283bdef.js";const w=i.div`
  margin: 6rem auto 0 auto;
  max-width: 1920px;
  max-height: 1080px;

  @media only screen and ${y.device.lg} {
    margin: 0 auto;
  }
`,I=i.img`
  width: 1920px;
  height: auto;
`,E=()=>{const{submitRequest:l}=j(),{favorites:r,setFavorites:c}=u(),[o,d]=s.exports.useState([]),p=async(e,a,m)=>{e=await l(a),m(e)};return s.exports.useEffect(()=>{p(o,S.popularMovies(),d)},[]),s.exports.useEffect(()=>{const e=localStorage.getItem("favorites"),a=JSON.parse(e);a&&c(a)},[r]),n(w,{children:[t(f,{}),t(g,{children:o.map((e,a)=>n(h,{children:[t(I,{src:v.images(e.backdrop_path),alt:`poster of ${e.original_title} movie`}),t(x,{title:e.original_title,text:e.overview.substring(0,220)})]},a))}),t(F,{title:"Favorites"}),t(b,{cardContainer:r}),t(C,{})]})};export{E as default};
