(this["webpackJsonpfcc-markdown-previewer"]=this["webpackJsonpfcc-markdown-previewer"]||[]).push([[0],{33:function(e,n,t){e.exports=t(45)},38:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(4),i=t.n(r),s=(t(38),t(29)),l=t(72),c=t(75),d=t(39);d.setOptions({breaks:!0});var u=new d.Renderer;u.link=function(e,n,t){return'<a target="_blank" href="'.concat(e,'">').concat(t)+"</a>"};var h=Object(l.a)((function(e){return{parent:{display:"flex",justifyContent:"center"},child:{margin:e.spacing(1),width:"40%"}}}));var m=function(){var e=h(),n=o.a.useState(f),t=Object(s.a)(n,2),a=t[0],r=t[1];return o.a.createElement("div",null,o.a.createElement("form",{className:e.parent,noValidate:!0,autoComplete:"off"},o.a.createElement(c.a,{className:e.child,style:{height:"80%"},id:"editor",label:"Editor",multiline:!0,rows:"45",variant:"outlined",value:a,onChange:function(e){r(e.target.value)}}),o.a.createElement("div",{id:"preview",className:e.child,style:{border:"1px solid lightgrey",display:"inline-block"},dangerouslySetInnerHTML:{__html:d(a,{renderer:u})}})))},f="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n";Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.94b1b108.chunk.js.map