		var send  = React.createClass({
		          render: function() {
		        return (
			    <div className="row">
						<form method="POST" role="form">
					<legend>Add a blog entry!</legend>

					<div className="form-group">
						<label htmlFor="author">Blog ID</label>
						<input name="author" type="text" className="form-control" ref="author" 
						placeholder="Input field"/>	
					</div>

					<div className="form-group">
						<label htmlFor="title">Blog Title</label>
						<input name="title" type="text" className="form-control" ref="title" 
						placeholder="Input field"/>	
					</div>
					
					<div className="form-group">
						<label htmlFor="body">Blog Body</label>
						<textarea name="body" type="text" className="form-control" ref="body" 
						placeholder="Input field" rows="5"></textarea>
					</div>

					<button onClick={this.handleSubmit} type="submit" className="btn btn-primary">submit</button>
				</form>
				</div>
		        );
		    }
		});

		React.render(<SubmitBlog "/api/blogs"/>, document.getElementById("submit-field"));
