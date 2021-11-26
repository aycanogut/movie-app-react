import{s,r as d,j as e,F as y,b as m}from"./vendor.3e792043.js";import{P as h,I as x,e as b,N as S,C as v,S as w,a as C,H as $,T as j,F as I,c as f,d as F}from"./Footer.styled.d01c0005.js";import{h as o}from"./index.62363ac6.js";import{C as D}from"./CardContainer.styled.3283bdef.js";const H=s.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 70%;
  margin: 2rem auto;
  padding: 1rem 2rem;
  background-color: ${o.colors.body};
  border: 1px solid gray;
  border-radius: 3rem;

  @media only screen and ${o.device.md} {
    width: 50%;
  }

  @media only screen and ${o.device.lg} {
    position: absolute;
    width: 40%;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1;
  } ;
`,R=s.input`
  width: 100%;
  font-size: 1.2rem;
  background-color: ${o.colors.body};
  border: none;

  &:focus {
    outline: none;
    border: none;
  }

  &::placeholder,
  &:focus,
  &:focus-visible {
    color: ${o.colors.text};
  }
`,T=s.div`
  cursor: pointer;
`,g=({source:c,submitSearch:u})=>{const a=d.exports.useRef(null),i=r=>{r.preventDefault();const n=a.current.value;(n||n!=="")&&u(n),a.current.value=""},l=r=>{(r.code==="Enter"||r.code==="NumpadEnter")&&i(r)};return e(y,{children:m(H,{children:[e(R,{placeholder:"Search something..",ref:a,onSubmit:i,onKeyDown:r=>l(r)}),e(T,{children:e(x,{src:c,source:b,alt:""})})]})})};g.propTypes={submitSearch:h.func,source:h.string};const k=s.div`
  margin: 6rem auto 0 auto;
  max-width: 1920px;
  max-height: 1080px;

  @media only screen and ${o.device.lg} {
    margin: 0 auto;
  }
`,E=s.header`
  display: flex;
  align-content: center;
  margin: 1rem;
  color: ${o.colors.text};
`,M=s.img`
  width: 1920px;
  height: auto;
`,P=()=>{const{submitRequest:c}=F(),[u,a]=d.exports.useState([]),[i,l]=d.exports.useState([]),r=async t=>{const p=await c(f.search(t));l(p)},n=async()=>{const t=await c(f.popularMovies());a(t),l(t)};return d.exports.useEffect(()=>{n()},[]),m(k,{children:[e(S,{}),e(v,{children:u.map((t,p)=>m(w,{children:[e(M,{src:C.images(t.backdrop_path),alt:`poster of ${t.original_title} movie`}),e($,{title:t.original_title,text:t.overview.substring(0,220)})]},p))}),e(g,{submitSearch:r}),e(E,{children:e(j,{title:"Results"})}),e(D,{cardContainer:i}),e(I,{})]})};export{P as default};
