const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Main: path.resolve(__dirname, 'src/components/main/'),
      SignIn: path.resolve(__dirname, 'src/components/sign-in/'),
      MyList: path.resolve(__dirname, 'src/components/my-list/'),
      Movie: path.resolve(__dirname, 'src/components/movie/'),
      Tabs: path.resolve(__dirname, 'src/components/tabs/'),
      TabsDetails: path.resolve(__dirname, 'src/components/tabs-details/'),
      TabsOverview: path.resolve(__dirname, 'src/components/tabs-overview/'),
      TabsReviews: path.resolve(__dirname, 'src/components/tabs-reviews/'),
      VideoPlayer: path.resolve(__dirname, 'src/components/video-player/'),
      Review: path.resolve(__dirname, 'src/components/review/'),
      Player: path.resolve(__dirname, 'src/components/player/'),
      App: path.resolve(__dirname, 'src/components/app/'),
      GenreList: path.resolve(__dirname, 'src/components/genre-list/'),
      MovieCard: path.resolve(__dirname, 'src/components/movie-card/'),
      MovieList: path.resolve(__dirname, 'src/components/movie-list/'),
      RatingStars: path.resolve(__dirname, 'src/components/rating-stars/'),
      MovieListContainer: path.resolve(__dirname, 'src/components/movie-list-container/'),
      ShowMoreButton: path.resolve(__dirname, 'src/components/show-more-button/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Store: path.resolve(__dirname, 'src/store/'),
      Mocks: path.resolve(__dirname, 'src/mocks/'),
      Hocs: path.resolve(__dirname, 'src/hocs/'),
      Src: path.resolve(__dirname, 'src/'),
    }
  },
  devtool: 'source-map',
};
