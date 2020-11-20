import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Tabs} from "./tabs";
import * as mock from "test-mock";


configure({adapter: new Adapter()});

test(`click tab`, () => {
  const handleClick = jest.fn();

  const wrapper = shallow(
      <Tabs
        movie={mock.MOVIE}
        onTabClick={handleClick}
        tab={mock.TAB}
        fetchCommentsAction={mock.noop}
      />
  );

  const tab1 = wrapper.find(`.movie-nav__link`).at(0);
  const tab2 = wrapper.find(`.movie-nav__link`).at(1);
  const tab3 = wrapper.find(`.movie-nav__link`).at(2);
  tab1.simulate(`click`);
  tab2.simulate(`click`);
  tab3.simulate(`click`);
  expect(handleClick).toHaveBeenCalledTimes(3);
});
