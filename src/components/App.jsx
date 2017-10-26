class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeVideo: 0,
      searchText: '',
      videos: exampleVideoData
    };
  }

  clickHandler(event) {
    this.clicked = event.target.id;
    this.setState({
      activeVideo: event.target.id
    });
  }

  submitHandler() {
    var searchString = document.getElementsByClassName('form-control')[0].value;
    this.setState(
      { searchText: searchString },
      this.requestVideos
    );
  }

  requestVideos() {
    var self = this;
    $.get({
      url: 'https://www.googleapis.com/youtube/v3/search',
      dataType: 'json',
      data: {
        q: this.state.searchText,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: 'true',
        type: 'video',
        part: 'snippet',
        order: 'relevance'
      },
      success: function(data) {
        self.setState({
          videos: data.items
        });
      },
      error: function(data) {
        console.error('failed', data);
      }
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search submitHandler={this.submitHandler.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videos[this.state.activeVideo]} />
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
