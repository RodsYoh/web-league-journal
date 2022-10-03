import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { Wrapper } from "../Wrapper";

describe("<Wrapper />", () => {
  it("should render a frame around the window", () => {
    render(<Wrapper>alô</Wrapper>);

    const frame = screen.getByTestId("frame");
    expect(frame).toBeVisible();
  });

  it("should render a static texture", () => {
    render(<Wrapper>alô</Wrapper>);

    const texture = screen.getByTestId("static-texture");
    expect(texture).toBeVisible();
  });

  it("should render an animated texture", () => {
    render(<Wrapper>alô</Wrapper>);

    const texture = screen.getByTestId("animated-texture");
    expect(texture).toBeVisible();
  });
});
