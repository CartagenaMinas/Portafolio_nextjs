import { render } from "@testing-library/react";
import Info from "@/components/info";

test("loads and displays info", async () => {
  const { getByText, getByTitle } = render(<Info />);
  getByText("Cristian Cartagena");
  getByText(
    "Desarrollador de Software. Aquí encontrarás algunos de mis proyectos."
  );
  let link = getByTitle("twitter").closest("a");
  expect(link.href).toEqual("");
  expect(link.target).toEqual("_blank");
  link = getByTitle("github").closest("a");
  expect(link.href).toEqual("");
  expect(link.target).toEqual("_blank");
  link = getByTitle("mail").closest("a");
  expect(link.href).toEqual("");
});
