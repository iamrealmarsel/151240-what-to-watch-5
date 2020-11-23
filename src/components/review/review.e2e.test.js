import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Review} from "./review";
import * as mock from "test-mock";


configure({adapter: new Adapter()});

test(`add review`, () => {
  const handleSubmit = jest.fn();
  const handleTextChange = jest.fn();

  const wrapper = mount(
      <Provider store={mock.store}>
        <BrowserRouter>
          <Review
            movies={mock.MOVIES}
            postCommentAction={mock.noop}
            match={mock.MATCH}
          />
        </BrowserRouter>
      </Provider>
  );

  const form = wrapper.find(`.add-review__form`);
  form.simulate(`submit`);

  const textarea = wrapper.find(`.add-review__textarea`);
  textarea.simulate(`change`, {
    target: {
      value: ``
    }});

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleTextChange).toHaveBeenCalledTimes(1);
});
