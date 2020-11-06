import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import TopBar from "./TopBar";
import DatePicker from "./DatePicker/DatePicker";
import Location from "./Location/Location";

configure({ adapter: new Adapter() });

describe("<TopBar />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TopBar />);
  });

  it("should render one <DatePicker />", () => {
    expect(wrapper.find(DatePicker)).toHaveLength(1);
  });

  it("should render one <Location />", () => {
    expect(wrapper.find(Location)).toHaveLength(1);
  });
});
