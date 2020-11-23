import React from "react";
import TestRenderer from "react-test-renderer";
import withMovieCardState from "./with-movie-card-state";


const MockComponent = () => {
  return <article></article>;
};

const MockComponentContainer = withMovieCardState(MockComponent);

test(`render withMovieCardState`, () => {
  const tree = TestRenderer
    .create(
        <MockComponentContainer />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
