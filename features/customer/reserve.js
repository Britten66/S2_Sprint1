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
  //  trying to link the confimation table with the guests picked et here
  //=============================
  //this will show the date selected in the confirm area
  const confirmDate = document.getElementById("confirmDate");

  //guests picked from drop down
  const confirmGuests = document.getElementById("confirmGuests");
  //time drop down

  const confirmTime = document.getElementById("confirmTime");
  //area picked will be from the calendar made above

  const confirmArea = document.getElementById("confirmArea");

  //the calander was not so easy to transfer

  const timeSelect = document.getElementById("timeSelect");

  const guestSelect = document.getElementById("guestSelect");

  const areaChecks = document.querySelectorAll('input[name="areaChoice"]');
  // moving to funcitons for confiriming set up

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

  // this kind of took forever but
  // found a handler for the form, it was storing and breaking when refreshed
  //this should handle dupes
  // 'input[name="areaChoice"]'
  //need to use this ^^

  function setConfirm(y, mIdx, d) {
    const monthName = months[mIdx];
    confirmDate.textContent = `${monthName} ${d}, ${y}`;
  }

  function setGuests(val) {
    confirmGuests.textContent = val || "No Guest Selected"; // this will handle the validation within this funciton and conftinued in same format
  }

  function setTime(val) {
    confirmTime.textContent = val || "No Time Selected";
  }

  // Here is the calendar validation functiion
  // it was also very complex and reqwuired .map

  function setArea() {
    const selected = Array.from(areaChecks)
      .filter((c) => c.checked && !c.disabled)
      //map here
      .map((c) => c.value.trim());
    confirmArea.textContent = selected.length
      ? selected.join(",")
      : " No Seating Picked Yet ";
  }

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
    // working **
    const today = new Date();

    if (year === today.getFullYear() && month === today.getMonth()) {
      dayList
        .querySelector(`li[data-day="${today.getDate()}"]`)
        ?.classList.add("active");

      setConfirm(year, month, today.getDate());
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

    //clicked date here

    setConfirm(
      current.getFullYear(),
      current.getMonth(),
      Number(li.dataset.day)
    );
  });
  //=============================
  // this was not running stack overflow post referenced runninng the update outside aswell
  //=============================
  updateCalendar();

  // if statements to handle confirmation

  if (guestSelect) setGuests(guestSelect.value);
  if (timeSelect) setTime(timeSelect.value);

  // calendar select here again

  setArea();

  // event handling here

  if (guestSelect)
    guestSelect.addEventListener("change", (e) => setGuests(e.target.value));
  if (timeSelect)
    timeSelect.addEventListener("change", (e) => setTime(e.target.value));
  // calander event listener that was hard to handle here again and final .. hoping ..

  areaChecks.forEach((c) => c.addEventListener("change", setArea));
});
