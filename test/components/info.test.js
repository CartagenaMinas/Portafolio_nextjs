import { render } from "@testing-library/react";
import Info from "@/components/info";

test("loads and displays info", async () => {
  const { getByText, getByTitle } = render(<Info />);
  getByText("Juan Sensio");
  getByText(
    "Desarrollador de Software. Aquí encontrarás algunos de mis proyectos."
  );
  let link = getByTitle("twitter").closest("a");
  expect(link.href).toEqual("https://twitter.com/juansensio");
  expect(link.target).toEqual("_blank");
  link = getByTitle("github").closest("a");
  expect(link.href).toEqual("https://github.com/juansensio");
  expect(link.target).toEqual("_blank");
  link = getByTitle("mail").closest("a");
  expect(link.href).toEqual("mailto:juansensio03@gmail.com");
});
