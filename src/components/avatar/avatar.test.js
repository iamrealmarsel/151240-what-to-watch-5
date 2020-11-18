import React from "react";
import {BrowserRouter} from 'react-router-dom';
import TestRenderer from "react-test-renderer";
import {Avatar} from "./avatar";


test(`render Avatar`, () => {
  const tree = TestRenderer
    .create(
        <BrowserRouter >
          <Avatar
            isAuthenticated={false}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
