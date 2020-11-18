import React from "react";
import TestRenderer from "react-test-renderer";
import withTabState from "./with-tab-state";


const MockComponent = () => {
  return <React.Fragment></React.Fragment>;
};

const MockComponentContainer = withTabState(MockComponent);

test(`render withTabState`, () => {
  const tree = TestRenderer
    .create(
        <MockComponentContainer />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
