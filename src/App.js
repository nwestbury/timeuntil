import { useState } from "react";
import "./App.css";
import { StartDateSelectorInput } from "./StartDateSelectorInput";
import { Milestones } from "./Milestones";
import { EndDateSelectorInput } from "./EndDateSelectorInput";

function App() {
  const currentDate = new Date();
  const [bday, setBday] = useState("");
  const [endDate, setEndDate] = useState(
    currentDate.toISOString().split("T")[0],
  );

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-6 sm:py-8 lg:py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Time until
            </h1>
          </div>
          <StartDateSelectorInput
            maxDate={endDate}
            date={bday}
            setDate={setBday}
          />
          {bday !== "" && (
            <Milestones startDateStr={bday} endDateStr={endDate} />
          )}
          {bday !== "" && (
            <EndDateSelectorInput
              minDate={bday}
              date={endDate}
              setDate={setEndDate}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
