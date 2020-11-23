import React from "react";
import TestRenderer from "react-test-renderer";
import withReviewState from "./with-review-state";
import * as mock from "test-mock";


const MockComponent = () => {
  return <section></section>;
};

const MockComponentContainer = withReviewState(MockComponent);

test(`render withReviewState`, () => {
  const tree = TestRenderer
    .create(
        <MockComponentContainer
          postCommentAction={mock.noop}
          match={mock.MATCH}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
