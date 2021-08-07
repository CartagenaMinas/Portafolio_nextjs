import { render } from "@testing-library/react";
import Project from "@/components/project";
import { BiRocket } from "react-icons/bi";

const testLink = "http://abc/";

test("loads and displays my photo", async () => {
  const { getByTitle } = render(<Project icon={BiRocket} link={testLink} />);
  const link = getByTitle("icon").closest("a");
  expect(link.href).toEqual(testLink);
});
