		var IndexBody = React.createClass({
		    render: function() {
		        return (
		          <div>
		              <ul>
		                <h1>  hello world </h1>
		              </ul>
		          </div>
		        );
		    }
		});

React.render(<IndexBody url="/"/>, document.getElementById("main-body"))