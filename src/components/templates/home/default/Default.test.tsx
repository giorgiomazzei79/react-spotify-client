import { render, screen } from "@testing-library/react";
import Default from "./Default";

const logo = "baz";
const externalHref = "lurz";
const primaryText = "mains";
const secondaryText = "ponz";

test("renders learn react link", () => {
  render(
    <Default
      logo={logo}
      externalHref={externalHref}
      primaryText={primaryText}
      secondaryText={secondaryText}
    />
  );
  const linkElement = screen.getByText(/ponz/i);
  expect(linkElement).toBeInTheDocument();
});
