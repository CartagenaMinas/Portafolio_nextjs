import { render } from "@testing-library/react";
import Yo from "@/components/yo";
import fs from "fs";
import path from "path";

const photoUrl = "yo.jpg";

test("loads and displays my photo", async () => {
  const { getByAltText } = render(<Yo />);
  const img = getByAltText("Juan Sensio");
  //expect(img.src).toEqual(url);
  const files = fs.readdirSync(path.join(process.cwd(), "public"));
  expect(files.includes(photoUrl)).toBeTruthy();
});
