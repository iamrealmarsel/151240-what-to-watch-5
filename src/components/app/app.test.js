import React from "react";
import TestRenderer from "react-test-renderer";
import {App} from "./app";
import {noop} from "test-mocks";


test(`render App`, () => {
  const tree = TestRenderer
    .create(
        <App
          initAction={noop}
          isApplicationReady={false}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
