import { render, screen } from "@testing-library/react";
import Default from "./Default";

const logo = "baz";
const externalHref = "lurz";
const primaryText = "mains";

test("renders learn react link", () => {
  render(
    <Default
      logo={logo}
      externalHref={externalHref}
      primaryText={primaryText}
    />
  );
  const linkElement = screen.getByText(/ponz/i);
  expect(linkElement).toBeInTheDocument();
});
