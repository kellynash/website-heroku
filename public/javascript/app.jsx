var BlogList = React.createClass({
    render: function() {
      
      var blogData = this.props.data.map(function(blog){
        return <li> {blog.text} </li>
      });

        return (
          <article class="panel panel-default">
            <div class="panel-heading">
                <h3> body.title </h3>
                <div class="panel-body"> body.body </div>
            </div>
          </article>
        );
    }
});

var BlogBox = React.createClass({

    getInitialState: function(){
      return {data: []};
    },

    loadBlogsFromServer: function() {
      var handle="idwardis"
      $.ajax({
        url: this.props.url + handle,
        dataType: 'json',
        cache: false,
        success: function(data) {
          console.log("inside success")
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.log("broken url is " + this.props.url)
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
  },

  componentDidMount: function(){
    this.loadBlogsFromServer();
  },

  

    render: function() {
        return (
        <div>
            <ul>
              <BlogList data={this.state.data}/>
            </ul>
        </div>
          );
    }
});

React.render(<TweetBox url="/api/handle/"/>, document.body);
