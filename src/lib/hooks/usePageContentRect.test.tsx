import { render, screen } from "@testing-library/react";
import { usePageContentRect } from "./usePageContentRect";

function TestComponent() {
  const { mounted, containerRect } = usePageContentRect();

  return (
    <div>
      <div id="page-content-container">Page Content</div>
      <div data-testid="mounted">{mounted ? "true" : "false"}</div>
      <div data-testid="rect">
        {containerRect
          ? `${containerRect.width}x${containerRect.height}`
          : "null"}
      </div>
    </div>
  );
}

describe("usePageContentRect", () => {
  beforeEach(() => {
    Element.prototype.getBoundingClientRect = jest.fn(() => ({
      width: 200,
      height: 100,
      top: 0,
      left: 0,
      right: 200,
      bottom: 100,
      x: 0,
      y: 0,
      toJSON: () => {},
    }));
  });

  it("sets mounted to true and reads bounding rect of container", () => {
    render(<TestComponent />);

    const mounted = screen.getByTestId("mounted");
    const rect = screen.getByTestId("rect");

    expect(mounted.textContent).toBe("true");
    expect(rect.textContent).toBe("200x100");
  });
});
