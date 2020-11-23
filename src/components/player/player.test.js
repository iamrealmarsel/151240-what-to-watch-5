import React from "react";
import TestRenderer from "react-test-renderer";
import Player from "./player";


test(`render Player`, () => {
  const tree = TestRenderer
    .create(
        <Player />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
