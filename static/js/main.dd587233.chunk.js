(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,t){},131:function(e,t){},178:function(e,t,n){"use strict";n.r(t);var a=n(2),l=n.n(a),c=n(75),o=n.n(c),r=(n(86),n(87),n(20)),i=n(76),s=n(77),d=n(79),m=n(78),u=n(80);var f=function(e){var t=e.id,n=e.text,a=e.checked,c=e.onChange,o=e.i,r=e.handleDelete;return l.a.createElement("li",{key:t},l.a.createElement("div",{className:"list-item"},l.a.createElement("div",{className:"list-item__check"},l.a.createElement("input",{id:o,className:"list-item__check-box "+(a?"text--through":""),type:"checkbox",checked:a,onChange:c}),l.a.createElement("label",{htmlFor:o})),l.a.createElement("div",{className:"list-item__text "+(a?"text--through":"")},n),l.a.createElement("div",{className:"list-item__delete",onClick:function(){return r(t)}}," \u2715 ")))},h="Completed",v="All",p="Active";var E=function(e){return l.a.createElement("footer",{className:"footer "+(e.length?"":"hidden")},l.a.createElement("div",{className:"footer__item"},l.a.createElement("p",null,e.counter," items left")),l.a.createElement("div",{className:"footer__item",onClick:e.onclick},l.a.createElement("button",{name:v,className:"footer-item__btn "+(e.selected===v?"selected":"")},"All"),l.a.createElement("button",{name:p,className:"footer-item__btn "+(e.selected===p?"selected":"")},"Active"),l.a.createElement("button",{name:h,className:"footer-item__btn "+(e.selected===h?"selected":"")},"Completed")),l.a.createElement("div",{className:"footer__item"},l.a.createElement("button",{className:"footer-item__btn",onClick:e.onDeleteClick}," Clear completed")))},b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).createNewTodo=function(e){var t=n(88);t=t.generate({length:5,charset:"alphabetic"});var l=[].concat(Object(r.a)(a.state.todos),[{id:t,text:a.state.currentToDo,completed:!1}]);a.setState({todos:l,currentToDo:""},a.filter),e.preventDefault()},a.handleChange=function(e){var t=e.target.value;a.setState({currentToDo:t})},a.handleDelete=function(e){var t=Object(r.a)(a.state.todos).filter(function(t){return t.id!==e});a.setState({todos:t},a.filter)},a.handleChangeStatus=function(e){var t=Object(r.a)(a.state.todos);t[e.target.id].completed=e.target.checked,a.setState({todos:t})},a.counterActiveTodos=function(){var e=a.state.todos.filter(function(e){return!1===e.completed}).length;a.setState({counter:e})},a.filter=function(){var e,t=Object(r.a)(a.state.todos);e="Active"===a.state.selectedFilter?t.filter(function(e){return!1===e.completed}):a.state.selectedFilter===h?t.filter(function(e){return!0===e.completed}):t,a.counterActiveTodos(),a.setState({finalTodos:e})},a.selectFilter=function(e){a.setState({selectedFilter:e.target.name},a.filter)},a.handleClickDeleteAll=function(e){var t=a.state.todos.filter(function(e){return!1===e.completed});a.setState({todos:t},a.filter)},a.state={currentToDo:"",todos:[{id:1,text:1,completed:!1},{id:2,text:2,completed:!0}],selectedFilter:"All",finalTodos:[],counter:0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.filter()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"todos"},l.a.createElement("form",{onSubmit:this.createNewTodo},l.a.createElement("input",{className:"todos__input",type:"text",value:this.state.currentToDo,placeholder:"What need to be done?",onChange:this.handleChange})),l.a.createElement("div",{className:"todo-list"},l.a.createElement("ul",null,this.state.finalTodos.map(function(t,n){return l.a.createElement(f,{id:t.id,text:t.text,checked:t.completed,onChange:e.handleChangeStatus,i:n,handleDelete:e.handleDelete})}))),l.a.createElement(E,{selected:this.state.selectedFilter,length:this.state.todos.length,counter:this.state.counter,onclick:this.selectFilter,onDeleteClick:this.handleClickDeleteAll}))}}]),t}(l.a.Component);var _=function(){return l.a.createElement("main",{className:"main"},l.a.createElement("h1",null,"todos"),l.a.createElement(b,null))};o.a.render(l.a.createElement(_,null),document.getElementById("root"))},81:function(e,t,n){e.exports=n(178)},86:function(e,t,n){},87:function(e,t,n){},93:function(e,t){},95:function(e,t){}},[[81,1,2]]]);
//# sourceMappingURL=main.dd587233.chunk.js.map