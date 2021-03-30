(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return n?o.a.createElement(d,c(c({ref:t},s),{},{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(108)),i={id:"intro",title:"Introduction",slug:"/"},c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"OPERATIONAL MACHINE LEARNING AT ENTERPRISE SCALE",source:"@site/docs/intro.md",slug:"/",permalink:"/mlops/docs/",editUrl:"https://github.com/kmathur2/mlops/edit/master/docs/intro.md",version:"current",sidebar:"someSidebar",next:{title:"Prerequisites",permalink:"/mlops/docs/prereqs"}},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"OPERATIONAL MACHINE LEARNING AT ENTERPRISE SCALE\nBring DevOps-like speed and agility to ML workflows with support for every stage of the machine learning lifecycle: from sandbox experimentation with your choice of ML/DL frameworks, to model training on containerized distributed clusters, to deploying and tracking models in production."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Introduction")," (this section)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/lab/overview"}),Object(a.b)("strong",{parentName:"a"},"Lab Installation"))," - install a lab for KD"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/about-kd/intro"}),Object(a.b)("strong",{parentName:"a"},"KD Overview"))," - KD goals, concepts and terminology."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/kd-user/intro"}),Object(a.b)("strong",{parentName:"a"},"Using KD"))," - learn how to use KD"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/kd-img-dev/overview"}),Object(a.b)("strong",{parentName:"a"},"KD Image Development"))," - learn how to create KD images"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/kd-dev/overview"}),Object(a.b)("strong",{parentName:"a"},"KD Development"))," - learn how to hack KD itself")),Object(a.b)("p",null,"Each section builds on the previous section."),Object(a.b)("p",null,"You only need to take the sections to meeet your own learning goals.  For example, if you are only interested in learning how to administer MLOps, you can stop when you have finished the section ",Object(a.b)("strong",{parentName:"p"},"Using KD"),"."))}p.isMDXComponent=!0}}]);