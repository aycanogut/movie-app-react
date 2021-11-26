import{s as o,r as n,j as r,b as l}from"./vendor.3e792043.js";import{P as g,u as f,b as m,a as u,B as d}from"./Footer.styled.d01c0005.js";import{h as s}from"./index.62363ac6.js";var y="/assets/fallback-card-image.28bf41e0.png";const x=o.section`
  display: grid;
  place-items: center;
  gap: 2.4rem;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 1rem;

  @media only screen and ${s.device.sm} {
    grid-template-columns: 1fr 1fr;

    padding: 0 2rem;
  }

  @media only screen and ${s.device.md} {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 3rem;
  }

  @media only screen and ${s.device.lg} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 0 5rem;
  }
`,F=o.div`
  display: flex;
  flex-direction: column;
`,_=o.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0;
`,C=({cardContainer:c})=>{const{favorites:t,setFavorites:i,addFavorite:v,removeFavorite:p}=f();return n.exports.useEffect(()=>{const e=localStorage.getItem("favorites"),a=JSON.parse(e);i(a||[])},[]),n.exports.useEffect(()=>{const e=JSON.stringify(t);localStorage.setItem("favorites",e)},[t]),r(x,{children:c.map((e,a)=>l(F,{children:[r(m,{image:e.poster_path===null||e.poster_path===void 0?y:u.w500images(e.poster_path),title:e.original_title||e.original_name?e.original_title||e.original_name:"No title",rating:e.vote_average===0||e.vote_average===void 0||!e.vote_average?"None":e.vote_average,info:e.overview===null||e.overview===void 0||!e.overview?`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Di
                stinctio necessitatibus debitis esse aliquid.`:e.overview.slice(0,100)}),l(_,{children:[r(d,{title:"Add to Favorites",onClick:()=>v(e)}),r(d,{title:"Remove from Favorites",onClick:()=>p(e)})]})]},a))})};C.propTypes={cardContainer:g.array};export{C};
