class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeVideo: null,
      videos: []
    };
  }

  componentDidMount() {
    this.requestVideos('dog');
  }

  clickHandler(video) {
    this.setState({
      activeVideo: video
    });
  }

  requestVideos(query) {
    var options = {
      q: query,
      maxResults: 5,
      key: window.YOUTUBE_API_KEY,
      videoEmbeddable: 'true',
      type: 'video',
      part: 'snippet',
      order: 'relevance'
    };

    this.props.searchYouTube(options, (items) =>
      this.setState({
        videos: items,
        activeVideo: items[0]
      })
    );
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search requestVideos={this.requestVideos.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.activeVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} clickHandler={this.clickHandler.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
