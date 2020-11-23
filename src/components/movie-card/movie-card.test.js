import React from "react";
import TestRenderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import {MovieCard} from "./movie-card";
import * as mock from "test-mock";


test(`render MovieCard`, () => {
  const tree = TestRenderer
    .create(
        <BrowserRouter>
          <MovieCard
            movie={mock.MOVIE}
            onMovieCardClick={mock.noop}
            onMouseEnter={mock.noop}
            onMouseLeave={mock.noop}
            playVideo={mock.noop}
            isVideo={false}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
