import { render } from "preact";
import { Survey } from "./shared.jsx";

export default function () {
  render(<Attribution />, document.body);
}

function Attribution() {
  return (
    <Survey
      title="Important Notice ⚠️"
      description={`If you don't attend our confirmation call, your order will be automatically canceled within 3 days.
Please ensure your contact number is correct and active.

For order confirmation or assistance, contact us at +92 304 2965682.`}
    />
  );
}
