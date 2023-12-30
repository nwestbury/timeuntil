export const EndDateSelectorInput = ({ minDate, date, setDate }) => {
  return (
    <div className="px-auto">
      <div className="col-span-full py-4 py">
        <label
          htmlFor="endDate"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          <i>(Optional)</i> End date
        </label>
        <input
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="date"
          id="endDate"
          name="endDate"
          value={date}
          min={minDate}
          max={"2100-01-01"}
          onChange={(e) => {
            const desiredDateStr = e.currentTarget.value;

            const desiredDate = new Date(desiredDateStr);
            if (
              desiredDate >= new Date(minDate) &&
              desiredDate <= new Date("2100-01-01")
            ) {
              setDate(desiredDateStr);
            }
          }}
        />
      </div>
    </div>
  );
};
