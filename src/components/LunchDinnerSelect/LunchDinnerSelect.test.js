import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LunchDinnerSelect, { RadioBtn } from "./LunchDinnerSelect";

configure({ adapter: new Adapter() });

describe("<LunchDinnerSelect />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LunchDinnerSelect />);
  });

  it("should render 2 <RadioBtn>", () => {
    expect(wrapper.find(RadioBtn)).toHaveLength(2);
  });
});
