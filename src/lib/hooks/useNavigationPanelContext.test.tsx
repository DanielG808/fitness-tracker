import NavigationPanelContextProvider from "@/contexts/navigation-panel-context";
import { useNavigationPanelContext } from "./useNavigationPanelContext";
import { render, screen, fireEvent } from "@testing-library/react";

function TestComponent() {
  const { open, setOpen } = useNavigationPanelContext();

  return (
    <div>
      <p data-testid="panel-state">{open ? "open" : "closed"}</p>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        Toggle
      </button>
    </div>
  );
}

describe("useNavigationPanelContext", () => {
  it("provides default context value and allows toggling", () => {
    render(
      <NavigationPanelContextProvider>
        <TestComponent />
      </NavigationPanelContextProvider>
    );

    const panelState = screen.getByTestId("panel-state");
    const toggleButton = screen.getByText("Toggle");

    expect(panelState.textContent).toEqual("open");

    fireEvent.click(toggleButton);
    expect(panelState.textContent).toEqual("closed");

    fireEvent.click(toggleButton);
    expect(panelState.textContent).toEqual("open");
  });

  it("throws an error when hook is called outside context provider", () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});

    expect(() => render(<TestComponent />)).toThrow(
      "useNavigationPanelContext must be used within NavigationPanelContextProvider."
    );

    spy.mockRestore();
  });
});
