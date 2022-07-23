"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[274],{86799:function(e,t,n){var r=n(4942),o=n(70977),a=n(67294),i=n(1597),l=n(23494),c=n(89706);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.Z=function(e){var t=e.tags,n=(0,l.Z)(),g=n.tagsPath,p=n.basePath;return(0,o.tZ)(a.Fragment,null,t.map((function(e,t){return(0,o.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,o.tZ)(i.Link,{sx:function(e){var t;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},null===(t=e.styles)||void 0===t?void 0:t.a)},to:(0,c.Z)("/"+p+"/"+g+"/"+e.slug)},e.name))})))}},91896:function(e,t,n){n.d(t,{Z:function(){return z}});var r=n(4942),o=n(67294),a=n(23431),i=n(70977),l=n(87825),c=n(14123),s=n(50817),g=n(95078),p=n(23494),u=function(e){var t=e.isDark,n=e.toggle;return(0,i.tZ)("button",{onClick:n,type:"button","aria-label":t?"Activate Light Mode":"Activate Dark Mode",title:t?"Activate Light Mode":"Activate Dark Mode",sx:{opacity:.65,position:"relative",borderRadius:"5px",width:"40px",height:"25px",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.3s ease",border:"none",outline:"none",background:"none",cursor:"pointer",padding:0,appearance:"none","&:hover, &:focus":{opacity:1}}},(0,i.tZ)("div",{sx:{position:"relative",width:"24px",height:"24px",borderRadius:"50%",border:function(e){return t?"4px solid "+(0,l.U2)(e,"colors.toggleIcon"):"none"},backgroundColor:t?"toggleIcon":"transparent",transform:t?"scale(0.55)":"scale(1)",transition:"all 0.45s ease",overflow:t?"visible":"hidden",boxShadow:function(e){return t?"none":"inset 8px -8px 0px 0px "+(0,l.U2)(e,"colors.toggleIcon")},"&:before":{content:'""',position:"absolute",right:"-9px",top:"-9px",height:"24px",width:"24px",border:function(e){return t?"2px solid "+(0,l.U2)(e,"colors.toggleIcon"):"none"},borderRadius:"50%",transform:t?"translate(14px, -14px)":"translate(0, 0)",opacity:t?0:1,transition:"transform 0.45s ease"},"&:after":{content:'""',width:"8px",height:"8px",borderRadius:"50%",margin:"-4px 0 0 -4px",position:"absolute",top:"50%",left:"50%",boxShadow:function(e){return"0 -23px 0 "+(0,l.U2)(e,"colors.toggleIcon")+", 0 23px 0 "+(0,l.U2)(e,"colors.toggleIcon")+", 23px 0 0 "+(0,l.U2)(e,"colors.toggleIcon")+", -23px 0 0 "+(0,l.U2)(e,"colors.toggleIcon")+", 15px 15px 0 "+(0,l.U2)(e,"colors.toggleIcon")+", -15px 15px 0 "+(0,l.U2)(e,"colors.toggleIcon")+", 15px -15px 0 "+(0,l.U2)(e,"colors.toggleIcon")+", -15px -15px 0 "+(0,l.U2)(e,"colors.toggleIcon")},transform:t?"scale(1)":"scale(0)",transition:"all 0.35s ease"}}}))},b=n(1597),m=n(89706);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var f=function(e){var t=e.nav,n=(0,p.Z)().basePath;return(0,i.tZ)(o.Fragment,null,t&&t.length>0&&(0,i.tZ)("nav",{sx:{"a:not(:last-of-type)":{mr:3},fontSize:[1,"18px"],".active":{color:"heading"}}},t.map((function(e){return(0,i.tZ)(b.Link,{activeClassName:"active",key:e.slug,sx:function(e){var t;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},null===(t=e.styles)||void 0===t?void 0:t.a)},to:(0,m.Z)("/"+n+"/"+e.slug)},e.title)}))))},h=n(26754),y=function(){var e=(0,h.Z)().siteTitle,t=(0,p.Z)().basePath;return(0,i.tZ)(b.Link,{to:(0,m.Z)("/"+t),"aria-label":e+" - Back to home",sx:{color:"heading",textDecoration:"none"}},(0,i.tZ)("div",{sx:{my:0,fontWeight:"medium",fontSize:[3,4]}},e))},x=function(){var e=(0,p.Z)().externalLinks;return(0,i.tZ)(o.Fragment,null,e&&e.length>0&&(0,i.tZ)("div",{sx:{"a:not(:first-of-type)":{ml:3},fontSize:[1,"18px"]}},e.map((function(e){return(0,i.tZ)(c.rU,{key:e.url,href:e.url},e.name)}))))},v=function(){var e=(0,p.Z)().navigation,t=(0,g.If)(),n=t[0],r=t[1],o="dark"===n;return(0,i.tZ)("header",{sx:{mb:[5,6]}},(0,i.tZ)(c.kC,{sx:{alignItems:"center",justifyContent:"space-between"}},(0,i.tZ)(y,null),(0,i.tZ)(u,{isDark:o,toggle:function(e){e.preventDefault(),r(o?"light":"dark")}})),(0,i.tZ)("div",{sx:{boxSizing:"border-box",display:"flex",variant:"dividers.bottom",alignItems:"center",justifyContent:"space-between",mt:3,color:"secondary",a:{color:"secondary",":hover":{color:"heading"}},flexFlow:"wrap"}},(0,i.tZ)(f,{nav:e}),(0,i.tZ)(x,null)))},k=function(){var e=(0,h.Z)().siteTitle;return(0,i.tZ)("footer",{sx:{boxSizing:"border-box",display:"flex",justifyContent:"space-between",mt:[6],color:"secondary",a:{variant:"links.secondary"},flexDirection:["column","column","row"],variant:"dividers.top"}},(0,i.tZ)("div",null,"© ",(new Date).getFullYear()," by ",e,". All rights reserved."),(0,i.tZ)("div",null,(0,i.tZ)(c.rU,{"aria-label":"Link to the theme's GitHub repository",href:"https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog"},"Theme")," ","by"," ",(0,i.tZ)(c.rU,{"aria-label":"Link to the theme author's website",href:"https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"},"LekoArts")))},w=n(66795),O={"[data-name='live-editor']":{fontSize:1,"textarea, pre":{padding:function(e){return e.space[3]+" !important"}}},"[data-name='live-preview']":{padding:function(e){return"calc("+e.space[2]+" + 10px) !important"},backgroundColor:(0,w.nV)("primary",.7)},".prism-code":{fontSize:[1,1,2],padding:"2rem 1rem 1rem 1rem",webkitOverflowScrolling:"touch",backgroundColor:"transparent",minWidth:"100%",mb:0,mt:0,overflow:"auto",'&[data-linenumber="false"]':{".token-line":{pl:3}}},".gatsby-highlight[data-language=''], .gatsby-highlight[data-language='noLineNumbers']":{".prism-code":{pt:"1rem"}},".token":{display:"inline-block"},"p > code, li > code":{bg:"gray.2",color:"gray.8",px:2,py:1,borderRadius:"2px"},".gatsby-highlight":{fontSize:[1,1,2],position:"relative",webkitOverflowScrolling:"touch",bg:"rgb(1, 22, 39)",borderRadius:"2px",mx:[0,0,0,-3],".token-line":{mx:-3,minWidth:"100%"},"pre code":{float:"left",minWidth:"100%"},'pre[class*="language-"]:before':{bg:"white",borderRadius:"0 0 0.25rem 0.25rem",color:"black",fontSize:"12px",letterSpacing:"0.025rem",padding:"0.1rem 0.5rem",position:"absolute",left:"1rem",textAlign:"right",textTransform:"uppercase",top:0},'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before':{content:'"js"',background:"#f7df1e",color:"black"},'pre[class~="language-jsx"]:before':{content:'"jsx"',background:"#61dafb",color:"black"},'pre[class~="language-ts"]:before':{content:'"ts"',background:"#61dafb",color:"black"},'pre[class~="language-tsx"]:before':{content:'"tsx"',background:"#61dafb",color:"black"},'pre[class~="language-html"]:before':{content:'"html"',background:"#005a9c",color:"white"},'pre[class~="language-xml"]:before':{content:'"xml"',background:"#005a9c",color:"white"},'pre[class~="language-svg"]:before':{content:'"svg"',background:"#005a9c",color:"white"},'pre[class~="language-graphql"]:before':{content:'"GraphQL"',background:"#E10098"},'pre[class~="language-css"]:before':{content:'"css"',background:"#ff9800",color:"black"},'pre[class~="language-mdx"]:before':{content:'"mdx"',background:"#f9ac00",color:"black"},'pre[class~="language-php"]:before':{content:'"php"',background:"#777bb3",color:"black"},'pre[class~="language-py"]:before, pre[class~="language-python"]:before':{content:'"py"',background:"#306998",color:"white"},'pre[class~="language-text"]:before':{content:'"text"'},"pre[class~='language-shell']:before":{content:"'shell'"},"pre[class~='language-sh']:before":{content:"'sh'"},"pre[class~='language-bash']:before":{content:"'bash'"},"pre[class~='language-yaml']:before":{content:"'yaml'",background:"#ffa8df"},"pre[class~='language-yml']:before":{content:"'yml'",background:"#ffa8df"},"pre[class~='language-markdown']:before":{content:"'md'"},"pre[class~='language-json']:before, pre[class~='language-json5']:before":{content:"'json'",background:"linen"},"pre[class~='language-diff']:before":{content:"'diff'",background:"#e6ffed"}},'.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]':{wordSpacing:"normal",wordBreak:"normal",overflowWrap:"normal",lineHeight:1.5,tabSize:4,hyphens:"none"},".gatsby-highlight pre::-webkit-scrollbar":{width:2,height:2},".gatsby-highlight pre::-webkit-scrollbar-thumb":{backgroundColor:"primary"},".gatsby-highlight pre::-webkit-scrollbar-track":{background:"rgb(1, 22, 39)"},".line-number-style":{display:"inline-block",width:"3em",userSelect:"none",opacity:.3,textAlign:"center",position:"relative"},".code-title":{backgroundColor:(0,w.nV)("primary",.7),color:"black",fontSize:0,px:3,py:2,fontFamily:"monospace",mx:[0,0,0,-3]},"[data-name='live-preview'], [data-name='live-editor']":{mx:[0,0,0,-3],fontSize:[1,1,2]},".token-line":{pr:3},".highlight-line":{backgroundColor:"rgb(2, 55, 81)",borderLeft:"4px solid rgb(2, 155, 206)",".line-number-style":{width:"calc(3em - 4px)",opacity:.5,left:"-2px"}},".react-live-wrapper":{position:"relative"},".react-live-wrapper .code-copy-button":{right:[0,0,0,-3]}},Z=n(63366),j=["children"],P={border:0,clip:"react(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:0,overflow:"hidden",position:"absolute","&:focus":{padding:3,position:"fixed",top:"15px",left:"15px",backgroundColor:"heading",color:"background",zIndex:1,width:"auto",height:"auto",clip:"auto",textDecoration:"none"}},S=function(e){var t=e.children,n=(0,Z.Z)(e,j);return(0,i.tZ)("a",Object.assign({},n,{sx:P,href:"#skip-nav","data-skip-link":"true"}),t)};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=function(e){var t=e.children,n=e.className,r=void 0===n?"":n;return(0,i.tZ)(o.Fragment,null,(0,i.tZ)(a.xB,{styles:function(e){return{"*":{boxSizing:"inherit"},html:{WebkitTextSizeAdjust:"100%"},img:{borderStyle:"none"},pre:{fontFamily:"monospace",fontSize:"1em"},"[hidden]":{display:"none"},"::selection":{backgroundColor:(0,l.U2)(e,"colors.text"),color:(0,l.U2)(e,"colors.background")},a:{transition:"all 0.3s ease-in-out",color:"text"}}}}),(0,i.tZ)(s.Z,null),(0,i.tZ)(S,null,"Skip to content"),(0,i.tZ)(c.W2,null,(0,i.tZ)(v,null),(0,i.tZ)(c.xu,{id:"skip-nav",as:"main",variant:"layout.main",sx:D({},O),className:r},t),(0,i.tZ)(k,null)))}},54372:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(70977),o=n(4942),a=n(67294),i=n(14123),l=n(1597),c=n(86799);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){var t=e.post,n=e.showTags,o=void 0===n||n;return(0,r.tZ)(i.xu,{mb:4},(0,r.tZ)(l.Link,{to:t.slug,sx:function(e){var t;return g(g({},null===(t=e.styles)||void 0===t?void 0:t.a),{},{fontSize:[1,2,3],color:"text"})}},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&o&&(0,r.tZ)(a.Fragment,null," — ",(0,r.tZ)(c.Z,{tags:t.tags}))))},u=function(e){var t=e.posts,n=e.className,o=void 0===n?"":n,a=e.showTags,i=void 0===a||a;return(0,r.tZ)("section",{sx:{mb:[5,6,7]},className:o},t.map((function(e){return(0,r.tZ)(p,{key:e.slug,post:e,showTags:i})})))}},89706:function(e,t){t.Z=function(e){return e.replace(/\/\/+/g,"/")}},50817:function(e,t,n){var r=n(67294),o=n(35414),a=n(1597),i=n(26754);t.Z=function(e){var t=e.title,n=void 0===t?"":t,l=e.description,c=void 0===l?"":l,s=e.pathname,g=void 0===s?"":s,p=e.image,u=void 0===p?"":p,b=e.children,m=void 0===b?null:b,d=e.canonicalUrl,f=void 0===d?"":d,h=(0,i.Z)(),y=h.siteTitle,x=h.siteTitleAlt,v=h.siteUrl,k=h.siteDescription,w=h.siteLanguage,O=h.siteImage,Z=h.author,j={title:n||x,description:c||k,url:""+v+(g||""),image:""+v+(u||O)};return r.createElement(o.q,{title:n,defaultTitle:x,titleTemplate:"%s | "+y},r.createElement("html",{lang:w}),r.createElement("meta",{name:"description",content:j.description}),r.createElement("meta",{name:"image",content:j.image}),r.createElement("meta",{property:"og:title",content:j.title}),r.createElement("meta",{property:"og:url",content:j.url}),r.createElement("meta",{property:"og:description",content:j.description}),r.createElement("meta",{property:"og:image",content:j.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:j.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:j.title}),r.createElement("meta",{name:"twitter:url",content:j.url}),r.createElement("meta",{name:"twitter:description",content:j.description}),r.createElement("meta",{name:"twitter:image",content:j.image}),r.createElement("meta",{name:"twitter:image:alt",content:j.description}),r.createElement("meta",{name:"twitter:creator",content:Z}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("meta",{name:"google-site-verification",content:"FMhEQZFg_zmvyh25RxBMer6KxzTjsHuMdUKhUNM1iM0"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),f?r.createElement("link",{rel:"canonical",href:f}):null,m)}},26754:function(e,t,n){var r=n(1597);t.Z=function(){return(0,r.useStaticQuery)("318001574").site.siteMetadata}}}]);
//# sourceMappingURL=d1c6bce19cf5cceb26566f3a4265fa59323568be-dd177da4df7a9b70f7fd.js.map