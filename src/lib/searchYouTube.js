var searchYouTube = (options, callback) => {
  $.get({
    url: 'https://www.googleapis.com/youtube/v3/search',
    dataType: 'json',
    data: options,
    // success: function(data) {
    //   callback(data);
    // },
    // error: function(data) {
    //   console.error('failed', data);
    // }
  })
    .done( ({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail( ({responseJSON}) => {
      console.error('failed');
    });
};

window.searchYouTube = searchYouTube;
