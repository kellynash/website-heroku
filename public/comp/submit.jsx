var BlogForm = React.createClass({

   handleSubmit: function(e){
   e.preventDefault();
   var title = React.findDOMNode(this.refs.title).value.trim();
   var author = React.findDOMNode(this.refs.author).value.trim();
   var body = React.findDOMNode(this.refs.body).value.trim();
   if(!title){
     return;
   }
   var data = ({title: title, author: author, body: body});
   $.ajax({
       url: this.props.url,
       dataType: 'json',
       data: data,
       type: 'POST',
           success: function(data){
           console.log("posting data!" + data)
           document.location('blog.html')
           }.bind(this),
           error: function(xhr, status, err){
               console.log("not posting data!")
               console.error(this.props.url, status, err.toString());
           }.bind(this)
   })
   React.findDOMNode(this.refs.title);
 },
   render: function() {
       return (
                <div>
               <form>
                   <div className="form-group" method="POST">
                       <label >Title</label>
                       <input type="text" className="form-control" ref="title" placeholder="title"/>
                   </div>
                   <div className="form-group">
                       <label>Author</label>
                       <input type="text" className="form-control" ref="author" placeholder="author"/>
                   </div>
                   <div className="form-group">
                       <label>Block One</label>
                       <textarea  rows="12" className="form-control" ref="block1" placeholder="block"></textarea>
                   </div>
                   <div className="form-group">
                       <label>Subheader One</label>
                       <input type="text" className="form-control" ref="subHead1" placeholder="subheader"/>
                   </div>
                   <div className="form-group">
                       <label>Block Two</label>
                       <textarea  rows="6" className="form-control" ref="block2" placeholder="block"></textarea>
                   </div>
                    <div className="form-group">
                       <label>Subheader Two</label>
                       <input type="text" className="form-control" ref="subHead2" placeholder="subheader"/>
                   </div>
                   <div className="form-group">
                       <label>Block Three</label>
                       <textarea  rows="4" className="form-control" ref="block3" placeholder="block"></textarea>
                   </div>
                   <button onClick={this.handleSubmit} type="submit" className="btn btn-default">Submit</button>
               </form>
                </div>
           );
   }
});

React.render(<BlogForm url="/api/blogs"/>, document.getElementById('submit-field'))


		