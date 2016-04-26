var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./CommentBox/CommentBox')

var main = React.createClass({
  render: function(){
    return (
      <div className="main">
        <CommentBox />
      </div>

    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
