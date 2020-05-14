(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{30:function(e,t,a){e.exports=a(55)},35:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),l=(a(35),a(24)),i=a(6),s=a(7),m=a(10),u=a(9),d=function(e){var t=e.query,a=e.onChange,n=e.onSearch;return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{className:"SearchForm"},r.a.createElement("button",{type:"submit",className:"SearchForm-button",onClick:n},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"query",value:t,onChange:a})))},h=function(e){var t=e.link,a=e.id,n=e.onClick;return r.a.createElement("li",{className:"ImageGalleryItem",id:a,onClick:n},r.a.createElement("img",{src:t,alt:"",className:"ImageGalleryItem-image"}))},g=function(e){var t=e.images,a=e.onClick;return r.a.createElement("ul",{className:"ImageGallery"},t.map((function(e){return r.a.createElement(h,{link:e.smallImgLink,key:e.id,id:e.id,onClick:a})})))},f=a(3),p=a(29),v=function(){return r.a.createElement(f.b,null,r.a.createElement("div",{className:"container"},r.a.createElement(p.a,{size:50,color:"#99CAF1"})))},E=function(e){var t=e.onLoadMore;return r.a.createElement("div",{className:"container"},r.a.createElement("button",{className:"Button",type:"button",onClick:t},"Load more"))},k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).closeModalEvent=function(t){"Escape"===t.key&&e.props.onClick()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModalEvent)}},{key:"render",value:function(){var e=this.props,t=e.link,a=e.onClick;return r.a.createElement("div",{className:"Overlay",onClick:a},r.a.createElement("div",{className:"Modal"},r.a.createElement("img",{src:t,alt:""})))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModalEvent)}}]),a}(n.Component),y=a(28),b=a.n(y),C=function(e,t){return b.a.get("".concat("https://pixabay.com/api/?","per_page=").concat(12*t,"&key=").concat("15456193-1a0f9fc7d1c8c40e5d352d336","&q=").concat(e,"&page=1"))},S=function(e){return e.map((function(e){return{id:e.id,smallImgLink:e.webformatURL,bigImgLink:e.largeImageURL}}))},I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],query:"",page:1,isLoading:!1,modalUrl:null},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(l.a)({},n,r))},e.fetchImages=function(t,a){e.setState({isLoading:!0}),C(t,a).then((function(t){var a=t.data;e.setState({images:S(a.hits)})})).then((function(){return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch(console.log).finally((function(){return e.setState({isLoading:!1})}))},e.handleSearch=function(t){t.preventDefault(),e.setState({page:1}),e.fetchImages(e.state.query,1)},e.handleIncrementPage=function(){var t=e.state.page+1;e.setState((function(){return{page:t}}),e.fetchImages(e.state.query,t))},e.handleOpenModal=function(t){var a=e.state.images.find((function(e){return e.id===Number(t.currentTarget.id)}));e.setState({modalUrl:a.bigImgLink})},e.handleCloseModal=function(){e.setState({modalUrl:null})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.images,a=e.query,c=e.modalUrl,o=e.isLoading;return r.a.createElement(n.Fragment,null,r.a.createElement(d,{query:a,onChange:this.handleChange,onSearch:this.handleSearch}),t.length>0&&r.a.createElement(g,{images:t,onClick:this.handleOpenModal}),o?r.a.createElement(v,null):t.length>0&&r.a.createElement(E,{onLoadMore:this.handleIncrementPage}),c&&r.a.createElement(k,{link:c,onClick:this.handleCloseModal}))}}]),a}(n.Component);o.a.render(r.a.createElement(I,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.21ee80b5.chunk.js.map