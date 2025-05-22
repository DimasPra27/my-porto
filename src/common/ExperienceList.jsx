import parse from "html-react-parser";

function ExperienceList({ styles, experiences }) {
  const arr = [];

  experiences.forEach((element) => {
    arr.push(
      <div className={styles.experienceContainer}>
        <div className={styles.header}>
          <img src={element.companyLogo} alt="" />
        </div>
        <div>
          <div className={styles.header}>
            <h3>{element.companyTitle}</h3>
            <div className={styles.period}>
              <b>{convert(element.workStartDate, element.workEndDate)}</b>
            </div>
          </div>
          <hr />
          <div className={styles.header}>
            <ul>
              {(() => {
                const arr = [];
                element.workPositions.forEach((workPosition) => {
                  arr.push(
                    <li>
                      <div className={styles.experienceField}>
                        <h2>{workPosition.position}</h2>
                        <div className={styles.period}>
                          <b>
                            {convert(
                              workPosition.positionStartDate,
                              workPosition.positionEndDate
                            )}
                          </b>
                        </div>
                        <p>{parse(workPosition.description)}</p>
                      </div>
                    </li>
                  );
                });
                return arr;
              })()}
            </ul>
          </div>
        </div>
      </div>
    );
  });

  return arr;
}

function convert(start, end) {
  const format = {
    month: "short",
    year: "numeric",
  };

  const startDate = new Date(start);
  const startFormattedDate = startDate.toLocaleString("en-US", format);

  let endFormattedDate = "Present";
  let endDate = new Date();

  if (end !== "PRESENT") {
    endDate = new Date(end);
    endFormattedDate = endDate.toLocaleString("en-US", format);
  }

  return (
    startFormattedDate +
    " - " +
    endFormattedDate +
    " " +
    getPriod(startDate, endDate)
  );
}

function getPriod(startDate, endDate) {
  const DateDiff = {
    inDays: function (d1, d2) {
      var t2 = d2.getTime();
      var t1 = d1.getTime();

      return parseInt((t2 - t1) / (24 * 3600 * 1000));
    },

    inWeeks: function (d1, d2) {
      var t2 = d2.getTime();
      var t1 = d1.getTime();

      return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7));
    },

    inMonths: function (d1, d2) {
      var d1Y = d1.getFullYear();
      var d2Y = d2.getFullYear();
      var d1M = d1.getMonth();
      var d2M = d2.getMonth();

      return d2M + 12 * d2Y - (d1M + 12 * d1Y);
    },

    inYears: function (d1, d2) {
      return d2.getFullYear() - d1.getFullYear();
    },
  };

  let year = 0;
  let month = DateDiff.inMonths(startDate, endDate);
  while (month >= 12) {
    month -= 12;
    year++;
  }

  let result = "";
  if (year > 0) result += year + " Years";
  if (year > 0 && month > 0) result += " ";
  if (month > 0) result += month + " Months";

  return "(" + result + ")";
}

export default ExperienceList;
