import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import DatePicker, { DateItemsWrapper } from "./DatePicker";

configure({ adapter: new Adapter() });

describe("<DatePicker />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DatePicker />);
  });

  it("should render 14 <DateItemsWrapper>", () => {
    expect(wrapper.find(DateItemsWrapper)).toHaveLength(14);
  });
});
