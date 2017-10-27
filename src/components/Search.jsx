class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleDebounced = _.debounce(this.props.submitHandler.bind(this), 500);
  }

  inputHandler(event) {
    this.handleDebounced(event.target.value);
    // this.setState({
    //   searchString: event.target.value
    // });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.inputHandler.bind(this)} onKeyUp={this.props.keyHandler} />
        <button className="btn hidden-sm-down" onClick={this.props.submitHandler}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;