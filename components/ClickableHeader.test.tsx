import ClickableHeader, { Logo, Props, constant } from "./ClickableHeader";
import { render, screen, fireEvent, getByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HeaderType } from '../interfaces/frameData';
import '@testing-library/jest-dom'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(() => { }),
  dispatch: jest.fn()
}));

describe("ClickableHeader", () => {
  it("非活性状態と昇順の場合、表示は問題ないか", async () => {
    const props = {
      title: "Test Title",
      type: HeaderType.BLOCK,
      handleTableHeaderStatus: jest.fn,
      isActive: false,
      isAscending: false
    }
    render(<table><tbody><tr><ClickableHeader {...props} /></tr></tbody></table>);
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(Logo.ASCENDING)).toBeInTheDocument();
    expect(screen.getByTestId(constant.className)).not.toHaveClass('js-active');
  });
  it("活性状態と降順の場合、表示は問題ないか", async () => {
    const props = {
      title: "Test Title",
      type: HeaderType.BLOCK,
      handleTableHeaderStatus: jest.fn,
      isActive: true,
      isAscending: true
    }
    render(<table><tbody><tr><ClickableHeader {...props} /></tr></tbody></table>);
    expect(screen.getByTestId(constant.className)).toHaveClass('js-active');
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(Logo.DESCENDING)).toBeInTheDocument();
  });
  it("活性状態と昇順の場合、表示は問題ないか", async () => {
    const props = {
      title: "Test Title",
      type: HeaderType.BLOCK,
      handleTableHeaderStatus: jest.fn,
      isActive: true,
      isAscending: false
    }
    render(<table><tbody><tr><ClickableHeader {...props} /></tr></tbody></table>);
    expect(screen.getByTestId(constant.className)).toHaveClass('js-active');
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(Logo.ASCENDING)).toBeInTheDocument();
  });
});
