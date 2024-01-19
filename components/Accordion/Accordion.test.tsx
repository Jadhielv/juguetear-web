import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Accordion } from "./Accordion";

describe("Accordion", () => {
  it("Accordion click text render", async () => {
    render(
      <Accordion title="¿Hay que pagar para usar los juguetes?">
        <p>No, el prestamo es sin costo alguno.</p>
      </Accordion>
    );

    expect(
      screen.queryByText("No, el prestamo es sin costo alguno.")
    ).not.toBeInTheDocument();

    const accordionElement = screen.getByRole("button", {
      name: "¿Hay que pagar para usar los juguetes?",
    });

    await userEvent.click(accordionElement);

    expect(
      await screen.findByText("No, el prestamo es sin costo alguno.")
    ).toBeInTheDocument();
  });
});
