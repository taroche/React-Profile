(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{59:function(e,t,a){},60:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(25),i=a.n(c),r=(a(59),a(5)),o=a(10),l=a(11),h=a(12),d=a(34),b=a(9),j=a(17),m=a(35),u=a(54),p=(a(60),a(20)),f=a(21),g=a(2);var x=function(){return Object(g.jsx)("footer",{children:Object(g.jsx)(j.a,{fluid:!0,children:Object(g.jsxs)(p.a,{className:"border-top justify-content-between align-items-center p-3",children:[Object(g.jsxs)(f.a,{className:"p-0 md={3} sm={12}",children:[Object(g.jsx)("a",{href:"https://www.linkedin.com/in/tristan-laroche/",target:"_blank",children:"My Linkedin"}),Object(g.jsx)("br",{}),Object(g.jsx)("a",{href:"https://github.com/taroche",target:"_blank",children:"My Github"})]}),Object(g.jsx)(f.a,{className:"p-0 d-flex justify-content-end font-weight-light md={3}",children:"This site was made by Tristan LaRoche."})]})})})},O=a(38);var y=function(e){return Object(g.jsx)(O.a,{className:"jumbotron-fluid p-0",children:Object(g.jsx)(j.a,{className:"homeHeader",fluid:!0,children:Object(g.jsx)(p.a,{className:"heroRow d-flex align-items-center flex-column",children:Object(g.jsxs)(f.a,{xs:12,sm:12,lg:12,xl:12,children:[e.title&&Object(g.jsx)("h2",{className:"heroTitle display-3",children:e.title}),e.subTitle&&Object(g.jsx)("p",{className:" heroSubtitle",children:e.subTitle}),e.text&&Object(g.jsx)("p",{className:"arrowText font-weight-bold",children:e.text})]})})})})},v=a(19),w=a(44);var k=function(e){var t=Object(w.useSpring)({opacity:1,from:{opacity:0}});return Object(g.jsxs)(w.animated.div,{className:"t-card-info",style:t,children:[Object(g.jsx)("p",{className:"t-card-title",children:e.title}),Object(g.jsx)("p",{className:"t-card-sub-title",children:e.subTitle}),Object(g.jsx)("a",{className:"t-card-link text-center",href:e.link,target:"_blank",rel:"noopener noreferrer",children:"View"})]})};var N=function(e){return Object(g.jsxs)("div",{className:"d-inline-block t-card",onClick:function(t){return e.click(e.item)},children:[Object(g.jsx)("img",{className:"t-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&Object(g.jsx)(k,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})]})},T=a.p+"static/media/websiteImage.cc5a2905.png",C=a.p+"static/media/Weather-dashboard.a6d9f11a.png",S=a.p+"static/media/employee-directory-image.8d043b68.png",I=a.p+"static/media/Note_taker_homepage.c8bf52be.png",R=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(v.a)(n.state.items);console.log(e),a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return Object(g.jsx)(N,{item:e,click:function(t){return n.handleCardClick(e.id,t)}},e.id)}))},n.state={items:[{id:0,title:"Note Taker",subTitle:"An app that lets you take notes",imgSrc:I,link:"https://sleepy-thicket-78623.herokuapp.com/",selected:!1},{id:1,title:"Weather Dashboard",subTitle:"Clean and easy to use weather app",imgSrc:C,link:"https://taroche.github.io/Weather-Dashboard/",selected:!1},{id:2,title:"Road to Beer",subTitle:"An app to tell you about the bars in an area when you type in an areacode",imgSrc:T,link:"https://josephjlyons.github.io/DraughtPicker/",selected:!1},{id:3,title:"Employee Directory",subTitle:"Shows a directory that you can search through",imgSrc:S,link:"https://taroche.github.io/Employee-Directory/",selected:!1}]},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(g.jsx)(j.a,{fluid:!0,children:Object(g.jsx)(p.a,{className:"justify-content-around",children:this.makeItems(this.state.items)})})}}]),a}(s.a.Component);var F=function(e){return Object(g.jsxs)("div",{className:"homePage",children:[Object(g.jsx)(y,{title:e.title,subTitle:e.subTitle,text:e.text}),Object(g.jsx)("h1",{className:"heroTitle text-center display-3 mb-5",children:"Web Projects"}),Object(g.jsx)(R,{})]})};var L=function(e){return Object(g.jsx)(O.a,{className:"bg-transparent jumbotron-fluid p-0",children:Object(g.jsx)(j.a,{fluid:!0,children:Object(g.jsx)(p.a,{className:"border-bottom border-3 justify-content-center py-5",children:Object(g.jsxs)(f.a,{md:8,sm:12,children:[e.title&&Object(g.jsx)("h1",{className:"heroTitle display-2 font-weight-bolder",children:e.title}),e.subTitle&&Object(g.jsx)("h3",{className:"display-4 font-weight-light",children:e.subTitle}),e.text&&Object(g.jsx)("p",{className:"lead font-weight-light",children:e.text})]})})})})};var M=function(e){return Object(g.jsx)(j.a,{fluid:!0,children:Object(g.jsx)(p.a,{className:"justify-content-center",children:Object(g.jsx)(f.a,{md:8,children:e.children})})})};var E=function(e){return Object(g.jsxs)("div",{className:"container-fluid aboutContainer",children:[Object(g.jsx)(L,{title:e.title}),Object(g.jsx)(M,{children:Object(g.jsxs)("div",{className:"aboutMe",children:[Object(g.jsx)("p",{className:"display-4 hello",children:" Hello!"}),Object(g.jsx)("p",{children:"Before I became a developer, I was working at Gelato Fiasco. I started there as just a simple kitchen working at one of their stores. I would spend the days making gelato for each customer that walked into the door. They then decide to expand their business to make pints to sell in the shores all around America and for that they build a factory. When we moved into the new factory, they grabbed a couple of us form the kitchen to work there and since I had proven to be one of the harder workers there, I was put in charge of one of the two shifts even though I was one of the newer people. While in charge of my shift I made sure to always hit the number that they set for that day and to try and go above it whenever possible. In fact, I like to treat every day like a competition between us and the other shift so see who got more done (and I very rarely lost). The company then bought some new equipment to help produce things faster and because my shift was the more productive of the two, I was put in charge of learning the new machine and any other that we would get. I spent 2 years overseeing maintenance of all the machines under a great factory manager and when she left, I was promoted to her job where I would be in charge of everything until they decide to close their factory to switch to a third-party provider of cost resounds."}),Object(g.jsx)("p",{children:"I then switch to follow my dream to be a web developer. I went down to Maryland to go to a front-end development boot camp. Where I learn HTML, CSS, and JavaScript. I then got my first job in tech for Concourse Federal Group as a contract working in quality assurance. Just going over their code checking their spelling and grammar (since it were not written by native English speakers). When the contract ended, I got another job working at Clicknotices doing a lot of code refactoring. They had an old web site that had a lot of copy and pasted code that they want to make a lot cleaner and more reusable. They then got bought out and the company that did it decided to just scrap the whole project and to use their one development team to remake the whole thing. So, they let the development team at Clicknotices go. I then came back to Maine and enrolled in the UNH full stack development boot camp to learn to do more things then just front end."})]})})]})},D=a(29),H=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).submitForm=n.submitForm.bind(Object(D.a)(n)),n.state={status:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.status;return Object(g.jsxs)("div",{className:"contactPage container-fluid",children:[Object(g.jsx)(L,{title:this.props.title}),Object(g.jsx)("div",{className:"d-flex justify-content-center",children:Object(g.jsxs)("form",{className:"form  col-sm-12 col-md-8",onSubmit:this.submitForm,action:"https://formspree.io/f/mgepbovj",method:"POST",children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"full-name",children:"Name"}),Object(g.jsx)("input",{className:"form-control",id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"email",children:"Email"}),Object(g.jsx)("input",{className:"form-control",id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{children:"Message:"}),Object(g.jsx)("textarea",{className:"form-control",rows:"3",type:"text",name:"message"})]}),Object(g.jsxs)("div",{className:"form-group",children:["SUCCESS"===e?Object(g.jsx)("p",{children:"Thanks!"}):Object(g.jsx)("button",{className:"button",children:"Submit"}),"ERROR"===e&&Object(g.jsx)("p",{children:"There was an error."})]})]})}),Object(g.jsxs)("div",{className:"socials justify-content-center offset-2 col-8",children:[Object(g.jsx)("a",{href:"https://www.linkedin.com/in/tristan-laroche/",target:"_blank",children:"My Linkedin"}),Object(g.jsx)("br",{}),Object(g.jsx)("a",{href:"https://github.com/taroche",target:"_blank",children:"My Github"})]})]})}},{key:"submitForm",value:function(e){var t=this;e.preventDefault();var a=e.target,n=new FormData(a),s=new XMLHttpRequest;s.open(a.method,a.action),s.setRequestHeader("Accept","application/json"),s.onreadystatechange=function(){s.readyState===XMLHttpRequest.DONE&&(200===s.status?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},s.send(n)}}]),a}(s.a.Component),W=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={title:"Tristan LaRoche",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Tristan LaRoche",subTitle:"Web Developer"},about:{title:"About Me"},contact:{title:"Let's Chat!"}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(g.jsx)(d.a,{children:Object(g.jsxs)(j.a,{className:"p-0",fluid:!0,children:[Object(g.jsxs)(m.a,{className:"Navbar",bg:"transparent",expand:"lg",children:[Object(g.jsx)(m.a.Brand,{className:"nav-fonts",children:"Tristan LaRoche"}),Object(g.jsx)(m.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),Object(g.jsx)(m.a.Collapse,{id:"navbar-toggle",children:Object(g.jsxs)(u.a,{className:"ml-auto",children:[Object(g.jsx)(d.b,{className:"nav-fonts font-weight-bolder nav-link mr-4",to:"/",children:" Home"}),Object(g.jsx)(d.b,{className:"nav-fonts font-weight-bolder nav-link mr-4",to:"/about",children:" About"}),Object(g.jsx)(d.b,{className:"nav-fonts font-weight-bolder nav-link",to:"/contact",children:" Contact"})]})})]}),Object(g.jsx)(b.a,{path:"/",exact:!0,render:function(){return Object(g.jsx)(F,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),Object(g.jsx)(b.a,{path:"/about",exact:!0,render:function(){return Object(g.jsx)(E,{title:e.state.about.title})}}),Object(g.jsx)(b.a,{path:"/contact",exact:!0,render:function(){return Object(g.jsx)(H,{title:e.state.contact.title})}}),Object(g.jsx)(x,{})]})})}}]),a}(s.a.Component),A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};a(71);i.a.render(Object(g.jsx)(W,{}),document.getElementById("root")),A()}},[[72,1,2]]]);
//# sourceMappingURL=main.1dff53a9.chunk.js.map