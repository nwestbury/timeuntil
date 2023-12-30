const getNumSuffix = (num) => {
  switch (num % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const getAnniversaryNum = (num) => {
  return `${num}${getNumSuffix(num)}`;
};

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
});

const formatDate = (date) => {
  return date == null ? "" : dateFormatter.format(date);
};

const addS = (str, num) => {
  return num + " " + (num > 1 ? `${str}s` : str);
};

const displayDuration = (numDays) => {
  if (numDays > 365) {
    const numYears = Math.round((numDays * 100) / 365) / 100;
    return "~" + addS("year", numYears);
  }
  if (numDays < 1) {
    return "<1 day";
  }
  return "~" + addS("day", numDays);
};

const Milestone = ({ magintudeName, numMagnitudeAgo, prevDate, nextDate }) => {
  const lowerCaseMagName = magintudeName.toLowerCase();
  const numDays =
    Math.round(((nextDate.getTime() - Date.now()) * 10) / (86400 * 1e3)) / 10;

  return (
    <div className="w-full rounded overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{magintudeName} Milestones</div>
        <div className="text-gray-700 text-base">
          <ul className="list-disc">
            {numMagnitudeAgo > 0 && (
              <li>
                You have been alive for more than {numMagnitudeAgo}{" "}
                {lowerCaseMagName} seconds{" "}
              </li>
            )}
            {numMagnitudeAgo > 0 && (
              <li>
                Your last ({getAnniversaryNum(numMagnitudeAgo)}){" "}
                {lowerCaseMagName} second anniversary was on{" "}
                {formatDate(prevDate)}
              </li>
            )}
            <li>
              Your next ({getAnniversaryNum(numMagnitudeAgo + 1)}){" "}
              {lowerCaseMagName} second anniversary will be on{" "}
              {formatDate(nextDate)} (in {displayDuration(numDays)})
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const Milestones = ({ startDateStr, endDateStr }) => {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  let secondsAgo = Math.ceil((endDate.getTime() - startDate.getTime()) / 1000);

  const numMillionsOfSecondsAgo = Math.floor(secondsAgo / 1e6);
  const numBillionsOfSecondsAgo = Math.floor(secondsAgo / 1e9);

  const nextMillionDate = new Date(
    startDate.getTime() + (numMillionsOfSecondsAgo + 1) * 1e9,
  );
  let lastMillionDate;

  if (numMillionsOfSecondsAgo > 0) {
    lastMillionDate = new Date(
      startDate.getTime() + numMillionsOfSecondsAgo * 1e9,
    );
  }

  const nextBillionDate = new Date(
    startDate.getTime() + (numBillionsOfSecondsAgo + 1) * 1e12,
  );
  let lastBillionDate;
  if (numBillionsOfSecondsAgo > 0) {
    lastBillionDate = new Date(
      startDate.getTime() + numBillionsOfSecondsAgo * 1e12,
    );
  }

  return (
    <div>
      <Milestone
        magintudeName="Million"
        numMagnitudeAgo={numMillionsOfSecondsAgo}
        prevDate={lastMillionDate}
        nextDate={nextMillionDate}
      />
      <Milestone
        magintudeName="Billion"
        numMagnitudeAgo={numBillionsOfSecondsAgo}
        prevDate={lastBillionDate}
        nextDate={nextBillionDate}
      />
    </div>
  );
};
