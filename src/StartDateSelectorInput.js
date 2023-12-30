export const StartDateSelectorInput = ({ maxDate, date, setDate }) => {
  return (
    <div className="px-auto">
      <div className="col-span-full py-4 py">
        <label
          htmlFor="bday"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Your birthday
        </label>
        <input
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="date"
          id="bday"
          name="bday"
          value={date}
          min="1900-01-01"
          max={maxDate}
          onChange={(e) => {
            const desiredDateStr = e.currentTarget.value;

            const desiredDate = new Date(desiredDateStr);
            if (
              desiredDate >= new Date("1900-01-01") &&
              desiredDate <= new Date(maxDate)
            ) {
              setDate(desiredDateStr);
            }
          }}
        />
      </div>
    </div>
  );
};
