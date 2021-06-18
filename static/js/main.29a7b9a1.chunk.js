(this["webpackJsonpbwalshy-2020"]=this["webpackJsonpbwalshy-2020"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/github.617870e4.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin.619231ff.svg"},function(e,t,a){e.exports=a.p+"static/media/email.8a890f7c.svg"},function(e,t,a){e.exports=a.p+"static/media/resume.537ef4c6.svg"},,function(e,t,a){e.exports=a.p+"static/media/new-paltz-library.31b316bf.png"},function(e,t,a){e.exports=a.p+"static/media/radio-kingston.057fe367.png"},function(e,t,a){e.exports=a.p+"static/media/catskills-conf.bd6302ff.png"},function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),o=a(11),i=a(2),s=a(3),m=a(5),u=a(4),p=(a(28),a(29),a(15)),d=a.n(p),h=a(16),g=a.n(h),f=a(17),b=a.n(f),E=a(18),y=a.n(E),v=a(6),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).colorClick=function(t){e.props.updateGlobalColor(t.target.id)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("header",null,l.a.createElement("div",{className:"color-picker"},["blue","yellow","green","purple"].map((function(t){return l.a.createElement("div",{id:t,className:"color "+t,onClick:e.colorClick,key:t})}))),l.a.createElement("div",{className:"title-wrap"},l.a.createElement("h1",null,l.a.createElement("span",null,"Brandon Walsh |")," Full Stack Developer"),l.a.createElement("nav",null,l.a.createElement(v.b,{to:{pathname:"https://github.com/walshyb"},target:"_blank"},l.a.createElement("img",{src:d.a,alt:"Github"})),l.a.createElement(v.b,{to:{pathname:"https://www.linkedin.com/in/bwalshy/"},target:"_blank"},l.a.createElement("img",{src:g.a,alt:"LinkedIn"})),l.a.createElement(v.b,{to:{pathname:"mailto:bmwalshy@gmail.com"}},l.a.createElement("img",{src:b.a,alt:"Email"})),l.a.createElement(v.b,{to:"/Brandon_Walsh_Resume.pdf",target:"_blank"},l.a.createElement("img",{src:y.a,alt:"Resume"})))))}}]),a}(n.Component),w=(a(35),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",null)}}]),a}(n.Component)),j=(a(36),a(37),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.name;return l.a.createElement("span",{className:"tag"},l.a.createElement("span",{className:"hashtag"},"#"),l.a.createElement("span",{className:"tag-name"},e))}}]),a}(n.Component));function N(){return l.a.createElement("section",{className:"about"},l.a.createElement("p",null,"Hi, my name is Brandon. I'm a software developer based in NYC. I have 6+ years of experience across the stack and I'm particularly interested in backend technologies."),l.a.createElement("p",null,"The technologies I've used most in the last few years are ",l.a.createElement(j,{name:"python"}),", ",l.a.createElement(j,{name:"react"}),", ",l.a.createElement(j,{name:"typescript"}),", ",l.a.createElement(j,{name:"javascript"}),",   and ",l.a.createElement(j,{name:"rails"}),"."),l.a.createElement("p",{class:"strong"},"My experience includes: "),l.a.createElement("ul",null,l.a.createElement("li",null,"Designing & creating APIs in Python and Ruby on Rails"),l.a.createElement("li",null,"Maintaining thorough and clear documentation"),l.a.createElement("li",null,"Building sites in NextJS and React"),l.a.createElement("li",null,"Working in an agile methodology"),l.a.createElement("li",null,"Designing & managing database systems"),l.a.createElement("li",null,"Writing tests with BDD methodology"),l.a.createElement("li",null,"Building custom content management systems")))}a(38);var O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.image,n=e.imageAlt,r=e.tags,c=e.content,o=e.caseStudyUrl,i=e.liveSiteUrl;return l.a.createElement("article",{className:"project-item"},l.a.createElement("div",{className:"project-details"},l.a.createElement("img",{src:a,alt:n}),l.a.createElement("h2",null,t),l.a.createElement("div",{className:"tags"},r.map((function(e){return l.a.createElement(j,{name:e,key:e})}))),l.a.createElement("p",null,c)),l.a.createElement("div",{className:"project-links"},o?l.a.createElement("a",{className:"project-button",href:o},"Case Study"):null,i?l.a.createElement("a",{className:"project-button",href:i},"Live Site"):null))}}]),a}(n.Component),C=(a(39),a(20)),S=a.n(C),x=a(21),A=a.n(x),U=a(22),B=a.n(U),R=[{name:"SUNY New Paltz Library",image:S.a,imageAlt:"Screenshot of the SUNY New Paltz Library website.",tags:["wordpress","jquery","php","sass","gulp"],content:"A rebuild of the SUNY New Paltz library website from scratch to make the site accessible per ADA compliant standards and add the ability to manage content.",liveSiteUrl:"https://library.newpaltz.edu",caseStudyUrl:"https://miloaxelrod.com/stl-website.php"},{name:"Radio Kingston",image:A.a,imageAlt:"Screenshot of the Radio Kingston website.",tags:["react","es6","sass","node","wordpress","ssr"],content:"Radio Kingston is a local radio station in Kingston, NY. Working as a member of the Moonfarmer team, we built a react site as to play on-demand station episodes & podcasts.",liveSiteUrl:"https://radiokingston.org",caseStudyUrl:"https://moonfarmer.com/work/radio-kingston"},{name:"Catskills Conf",image:B.a,imageAlt:"Screenshot of the Catskills Conf website.",tags:["jquery","sass","handlebars"],content:"Static site for the annual tech conference Catskills Conf to headline speakers and their talks.",caseStudyUrl:"https://miloaxelrod.com/catskills-conf.php"}];var I=function(){return l.a.createElement("section",{className:"projects"},R.map((function(e){return l.a.createElement(O,Object.assign({},e,{key:e.name}))})))},W=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={color:"orange"},e.updateGlobalColor=function(t){e.setState(Object(o.a)(Object(o.a)({},e.state),{},{color:t}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e="content "+this.state.color;return l.a.createElement("div",null,l.a.createElement(k,{updateGlobalColor:this.updateGlobalColor}),l.a.createElement("main",{className:e},l.a.createElement(N,null),l.a.createElement(I,null),l.a.createElement(w,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v.a,null,l.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.29a7b9a1.chunk.js.map