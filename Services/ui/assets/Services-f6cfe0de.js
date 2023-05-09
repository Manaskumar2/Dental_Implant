import{r as t,b as i,j as e,L as s}from"./index-55c8c7a0.js";import{N as c,M as n,F as d}from"./Navbar-b3ab9993.js";function m(){const[l,r]=t.useState([]);return t.useEffect(()=>{i.fetch(`
      *[_type== "post"] {
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt,
        },
      }
    `).then(a=>{r(a)}).catch(console.error)},[]),e.jsxs(e.Fragment,{children:[e.jsx(c,{}),e.jsx("div",{className:"max-w-7xl px-5 mx-auto mb-10 mt-10 bg-[#fff]",children:e.jsx("h1",{className:"text-4xl lg:text-6xl mb-6 capitalize",children:"All Services"})}),e.jsx("section",{className:"px-5 2xl:max-w-7xl 2xl:mx-auto",children:e.jsx("div",{className:"grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3",children:l.map(a=>e.jsxs("article",{className:"shadow-md rounded-md ",children:[e.jsx("img",{src:a.mainImage.asset.url,alt:a.mainImage.alt,className:"h-64 w-[100%] rounded"}),e.jsxs("div",{className:"p-[1rem] rounded bg-[#f2ffff]",children:[e.jsx("h4",{className:"text-xl mt-2 capitalize",children:a.title}),e.jsx("p",{className:" text-[1rem] mt-2 leading-relaxed",children:`${a.body[0].children[0].text.substring(0,140)}...`}),e.jsx("button",{className:"mt-6 mb-5",children:e.jsx(s,{to:`/services/${a.slug.current}`,className:"py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold",children:"Read More"})})]})]},a.slug.current))})}),e.jsx("div",{className:"max-w-7xl mx-auto px-5 mb-5 py-8 flex items-end rounded justify-end",children:e.jsx(s,{to:"/",className:"bg-black py-2 px-8  rounded text-white tracking-wide hover:opacity-75 tranistion-all duration-200",children:"Back to Homepage"})}),e.jsx(n,{}),e.jsx(d,{})]})}export{m as default};
