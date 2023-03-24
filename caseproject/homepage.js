const weekdays = [
    { name: "Sunday", opening: 8, closing: 18 },
    { name: "Monday", opening: 6, closing: 17 },
    { name: "Tuesday", opening: 6, closing: 17 },
    { name: "Wednesday", opening: 6, closing: 22 },
    { name: "Thursday", opening: 6, closing: 22 },
    { name: "Friday", opening: 6, closing: 22 },
    { name: "Saturday", opening: 6, closing: 22 },
  ];
  
  const today = new Date();
  const dayOfWeek = today.getDay();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const formattedDate = formatDate(today);
  
  const holidays = {
    "01/01": { name: "New Year's Day", reason: "holiday" },
    "12/25": { name: "Christmas Day", reason: "holiday" },
  };
  
  const openMessage = document.getElementById("opentime");
  
  console.log("The date is currently " + formattedDate);
  console.log(
    "The day number is " + dayOfWeek + " which is " + weekdays[dayOfWeek].name
  );
  console.log(
    "The next day is being reported as " +
      checkNextDay(dayOfWeek) +
      " which is " +
      weekdays[checkNextDay(dayOfWeek)].name
  );
  console.log("The hour in military time is currently " + hour);
  console.log("The minutes is currently " + minute);
  
  if (holidays[formattedDate]) {
    openMessage.innerHTML =
      "We are currently closed for " + holidays[formattedDate].name + "!";
  } else {
    checkOpen();
  }
  
  function checkOpen() {
    const currentDay = weekdays[dayOfWeek];
    if (hour >= currentDay.opening && hour < currentDay.closing) {
      openMessage.innerHTML = "We are open today until " + convertTime(currentDay.closing);
    } else if (hour < currentDay.opening) {
      openMessage.innerHTML =
        "We are closed, we will open today at " + convertTime(currentDay.opening);
    } else {
      const nextDay = weekdays[checkNextDay(dayOfWeek)];
      openMessage.innerHTML =
        "We are closed, we will open tomorrow at " + convertTime(nextDay.opening);
    }
  }
  
  
  function formatDate(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month < 10 ? "0" + month : month}/${day < 10 ? "0" + day : day}`;
  }

  //Converts Military time to AM/PM
  function convertTime(time) {
    //log time for debugging purposes
    console.log("Convert time is currently taking this as a parameter" + time)
    // Split the military time into hours and minutes
    //const [hours, minutes] = time.split(':');
    
    // Convert the hours to a number
    let hoursNum = parseInt(time);

    // Determine whether it's AM or PM
    const meridiem = hoursNum >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hoursNum = hoursNum % 12;
    hoursNum = hoursNum === 0 ? 12 : hoursNum;
    
    // Return the formatted time
    return `${hoursNum} ${meridiem}!`;
  }

  function checkNextDay(day) {
    if (day < 6) {
      return day + 1;
    } else {
      return 0;
    }
  }