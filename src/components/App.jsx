class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeVideo: 0
    };
  }

  clickHandler(event) {
    this.clicked = event.target.id;
    this.setState({
      activeVideo: event.target.id
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.props.videos[this.state.activeVideo]} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.props.videos} clickHandler={this.clickHandler.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
