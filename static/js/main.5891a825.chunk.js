(this["webpackJsonpreact-bookshelf"]=this["webpackJsonpreact-bookshelf"]||[]).push([[0],{13:function(e,t,o){e.exports=o(23)},18:function(e,t,o){},23:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(8),s=o.n(r),u=o(9),c=o(10),i=o(12),l=o(11),h=(o(18),o(3)),b=o.n(h);o(20);b.a.initializeApp({apiKey:"AIzaSyAIBPuWWVfA0NThgpSltustP0WAvEdcYYw",authDomain:"thebookshelf-de2fa.firebaseapp.com",databaseURL:"https://thebookshelf-de2fa.firebaseio.com",projectId:"thebookshelf-de2fa",storageBucket:"thebookshelf-de2fa.appspot.com",messagingSenderId:"74952590677",appId:"1:74952590677:web:766830e9d1bc2638859bdc"});var d=b.a;var p=function(e){return n.a.createElement("li",{onClick:function(){d.database().ref(e.bookId).remove()}},e.bookTitle)},f=function(e){Object(i.a)(o,e);var t=Object(l.a)(o);function o(){var e;return Object(u.a)(this,o),(e=t.call(this)).handleSubmit=function(t){(t.preventDefault(),""!==e.state.userInput)&&(d.database().ref().push(e.state.userInput),e.setState({userInput:""}))},e.handleUserIput=function(t){e.setState({userInput:t.target.value})},e.state={books:[],userInput:""},e}return Object(c.a)(o,[{key:"componentDidMount",value:function(){var e=this;d.database().ref().on("value",(function(t){var o=t.val(),a=[];for(var n in o)a.push({bookName:o[n],bookId:n});console.log(a),e.setState({books:a})}))}},{key:"render",value:function(){return console.log(d),n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"\ud83d\udcd3 My Bookshelf \ud83c\udf4e"),n.a.createElement("form",{action:"",onSubmit:this.handleSubmit},n.a.createElement("input",{type:"text",id:"userBook",value:this.state.userInput,onChange:this.handleUserIput}),n.a.createElement("button",{type:"submit"},"Add Book")),n.a.createElement("ul",null,this.state.books.map((function(e){return console.log(e.bookId),n.a.createElement(p,{bookId:e.bookId,bookTitle:e.bookName})}))))}}]),o}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.5891a825.chunk.js.map