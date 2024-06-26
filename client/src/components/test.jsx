import { useState } from "react";
import { Button, DatePicker } from "@nextui-org/react";

export default function Test() {
  const [dateState, setDateState] = useState();
  console.warn("%c⧭", "color: #ff0000", dateState);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex flex-wrap gap-4 items-center ">
        <Button color="default" size="sm">
          Default
        </Button>
        <Button color="primary" size="md">
          Primar
        </Button>
        <Button color="secondary" size="lg">
          Secondary
        </Button>
        <Button color="success" size="sm">
          Success
        </Button>
        <Button color="warning" size="md">
          Warning
        </Button>
      </div>
      <DatePicker
        label="Birth date"
        className="max-w-[284px]"
        onChange={(date) => setDateState(date)}
      />
    </>
  );
}
