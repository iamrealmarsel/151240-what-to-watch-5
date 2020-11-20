import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {BrowserRouter} from 'react-router-dom';
import {SignIn} from "./sign-in";


configure({adapter: new Adapter()});

test(`submit sign in form`, () => {
  const loginAction = jest.fn();

  const wrapper = mount(
      <BrowserRouter>
        <SignIn
          loginAction={loginAction}
        />
      </BrowserRouter>
  );

  const form = wrapper.find(`form`);
  form.simulate(`submit`);
  expect(loginAction).toHaveBeenCalledTimes(1);
});
