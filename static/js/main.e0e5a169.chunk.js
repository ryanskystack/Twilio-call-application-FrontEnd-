(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},24:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),s=a(17),l=a.n(s),r=(a(24),a(18)),c=a(2),i=a(3),u=a(5),h=a(4),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={isChecked:!1},e.toggleCheckboxChange=function(){var t=e.props,a=t.handleCheckboxChange,o=t.label;e.setState((function(e){return{isChecked:!e.isChecked}})),a(o)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.label,t=this.state.isChecked;return n.a.createElement("div",{className:"checkbox"},n.a.createElement("label",null,n.a.createElement("input",{type:"checkbox",value:e,checked:t,onChange:this.toggleCheckboxChange}),e))}}]),a}(o.Component),m=a(6),d=a.n(m),p=["Are you an Australian Citizen?","Do you hold the correct work rights or visa for this role?","Tell me about a time you went above and beyond your work scope to achieve success.","Describe your greatest strengths and weaknesses.","What applicable skills, knowledge and experience can you bring to this position?","Tell me about a time you had to work with a coworker who was difficult to work with.","\u200bWhat are your motivations in applying for this position within our organisation?","\u200bTell me a little bit about yourself.","At times you will be asked to work across many tasks at once, How do you prioritise your workload?","What do you know about our company?","What are your long term career goals over the next 5 years?","Tell me about a time you made a mistake and did not deliver to expectations. What was the situation and what did you learn?"],g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).UNSAFE_componentWillMount=function(){o.selectedCheckboxes=new Set},o.toggleCheckbox=function(e){o.selectedCheckboxes.has(e)?o.selectedCheckboxes.delete(e):o.selectedCheckboxes.add(e)},o.myChangeHandler=function(e){o.setState({phoneNumber:e.target.value,response:"",questions:{}})},o.handleFormSubmit=function(e){e.preventDefault();var t=Object.assign({},o.state);console.log("");var a,n=[],s=Object(r.a)(o.selectedCheckboxes);try{for(s.s();!(a=s.n()).done;){var l=a.value;console.log("element",l),n.push(l)}}catch(b){s.e(b)}finally{s.f()}console.log("questions:",n);for(var c=0;c<n.length;c++)t.questions[c+1]=n[c];console.log("newState:",t),o.setState(t),0===o.selectedCheckboxes.size&&alert("Please at least select one question."),""===o.state.phoneNumber&&alert("Please input one mobile number.");var i={phoneNumber:o.state.phoneNumber};console.log("Object.values(this.state.questions):",Object.values(o.state.questions));for(var u=Object.values(o.state.questions),h=0;h<u.length;h++)i[h+1]=u[h];console.log("request:",i),d.a.defaults.headers.post["Access-Control-Allow-Origin"]="*",d.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",d.a.post("https://triggertwilio.azurewebsites.net/api/triggertwilio",i).then((function(e){console.log(e),console.log(e.data);var t={response:e.data};o.setState(t)}))},o.createCheckbox=function(e){return n.a.createElement(b,{label:e,handleCheckboxChange:o.toggleCheckbox,key:e})},o.createCheckboxes=function(){return p.map(o.createCheckbox)},o.state={phoneNumber:"",response:"",questions:{}},o}return Object(i.a)(a,[{key:"render",value:function(){return""===this.state.response?n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("form",{onSubmit:this.handleFormSubmit},n.a.createElement("p",null,"Welcome to Twilio Call App"),n.a.createElement("p",null,"Choose the questions:"),this.createCheckboxes(),n.a.createElement("div",null,n.a.createElement("p",null,"Enter your mobile phone number e.g.+458694753:"),n.a.createElement("input",{type:"text",value:this.state.phoneNumber,onChange:this.myChangeHandler})),n.a.createElement("button",{className:"btn btn-default",type:"submit"},"Submit"))))):n.a.createElement("div",null,n.a.createElement("p",null,this.state.response))}}]),a}(o.Component);l.a.render(n.a.createElement(g,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.e0e5a169.chunk.js.map