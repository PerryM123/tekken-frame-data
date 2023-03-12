import ClickableHeader, { Logo, Props } from "./ClickableHeader";
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HeaderType } from '../interfaces/frameData';
import '@testing-library/jest-dom'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(() => { }),
  dispatch: jest.fn()
}));

describe("ClickableHeader", () => {
  it("押下されたらアイコンが変更する", async () => {
    const dispatch = jest.fn();
    const props: Props = {
      title: "Test Title",
      type: HeaderType.BLOCK,
      handleTableHeaderStatus: jest.fn,
      isActive: false,
      isAscending: false
    }
    const user = userEvent.setup()
    const renderResult = render(<ClickableHeader {...props} />);
    renderResult.getByText(props.title);
    renderResult.getByText(Logo.ASCENDING);
    await user.click(screen.getByRole('button'));
    renderResult.getByText(Logo.DESCENDING);
    const x = 6;
    expect(x).toBe(5);
  });
});
