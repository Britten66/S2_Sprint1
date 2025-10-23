//placeholder making sure the calandar clicks

//=============================
//Calendar Navigation Setup Here
//=============================
document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.querySelector(".month .prev");
  const nextBtn = document.querySelector(".month .next");

  const monthLabel = document.getElementById("month-label");
  // same applying to days here so it doesnt have to be writtenb out

  const dayList = document.querySelector(".days");
  //=============================
  //month names here
  //=============================

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //=============================
  // starting todays date here
  //=============================

  let current = new Date();

  //=============================
  // building a grid for current month here
  //=============================

  function buildDayGrid() {
    //=============================
    //function for days in month
    //=============================

    const year = current.getFullYear();
    const month = current.getMonth();
    //final day of month was throwing undefined
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    //=============================
    // falling on first day here
    //=============================

    const firstOfMonth = new Date(year, month, 1);
    const jsDay = firstOfMonth.getDay();

    //=============================
    // more code breaking issues led to research regarding this
    //=============================

    const monStart = (jsDay + 6) % 7;

    //=============================
    // jsDay = 0=sun 1 = mon .. continued to 6 being satturday
    //=============================
    //array here
    const parts = [];

    for (let i = 0; i < monStart; i++) {
      parts.push(`<li class="pad"></li>`);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      parts.push(`<li data-day="${d}">${d}</li>`);
    }

    // writing back to DOM so it all works

    dayList.innerHTML = parts.join("");

    //trying to get the current date to auto highlight
    const today = new Date();

    if (year === today.getFullYear() && month === today.getMonth()) {
      dayList
        .querySelector(`li[data-day="${today.getDate()}"]`)
        ?.classList.add("active");
    }
  }
  //=============================
  //funciton will update this
  //=============================

  function updateCalendar() {
    const monthName = months[current.getMonth()];
    const yearNum = current.getFullYear();
    // forgot to use back tics here ` `
    monthLabel.innerHTML = `${monthName}<br><span style="font-size:18px">${yearNum}</span>`;

    buildDayGrid();
  }

  //=============================
  //handler here for next/prev
  //=============================

  nextBtn.addEventListener("click", () => {
    current.setMonth(current.getMonth() + 1); //get set here -- adds 1 forward
    updateCalendar();
  });
  prevBtn.addEventListener("click", () => {
    current.setMonth(current.getMonth() - 1); //get set here -- adds 1 forward
    updateCalendar();
  });
  // active day highlight
  dayList.addEventListener("click", (e) => {
    const li = e.target.closest("li[data-day]");
    if (!li) return;
    dayList
      .querySelectorAll(".active")
      .forEach((n) => n.classList.remove("active"));

    li.classList.add("active");
  });
  //=============================
  // this was not running stack overflow post referenced runninng the update outside aswell
  //=============================
  updateCalendar();
});
