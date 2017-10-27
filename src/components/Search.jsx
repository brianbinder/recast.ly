class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleDebounced = _.debounce(this.props.requestVideos.bind(this), 300);

    this.state = {
      searchText: ''
    };
  }

  keyHandler(event) {
    if (event.keyCode === 13) {
      this.props.requestVideos(event.target.value);
    }
  }

  inputHandler(event) {
    this.setState({
      searchText: event.target.value
    });
    this.handleDebounced(event.target.value);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.inputHandler.bind(this)} onKeyUp={this.keyHandler.bind(this)} />
        <button
          className="btn hidden-sm-down"
          onClick={this.props.requestVideos.bind(null, this.state.searchText)}
        >
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;