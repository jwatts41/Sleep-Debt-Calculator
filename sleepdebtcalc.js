function getSleepHours(day) {
  if(day === 'Monday') {
    return 6;
  } else if(day === 'Tuesday') {
    return 7;
  } else if(day === 'Wednesday') {
    return 8;
  } else if(day === 'Thursday') {
    return 4;
  } else if(day === 'Friday') {
    return 5;
  } else if(day === 'Saturday') {
    return 7;
  } else if(day === 'Sunday') {
    return 6;
  } else {
    console.log('invalid day please enter a valid day')
  }
}

function getActualSleepHours() {
  return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday'); 
}

console.log(getActualSleepHours());

function getIdealSleepHours() {
  const idealHours = 8
  return idealHours * 7
}

console.log(getIdealSleepHours())

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours()
  const idealSleepHours = getIdealSleepHours()
  if(actualSleepHours === idealSleepHours) {
    console.log('The user got the perfect amount of sleep')
  } else if(actualSleepHours > idealSleepHours) {
    console.log('The user got' + ' ' + (actualSleepHours - idealSleepHours) + ' ' + 'more sleep than needed')
  } else if(actualSleepHours < idealSleepHours) {
    console.log('The user should get' + ' ' + (idealSleepHours - actualSleepHours) + ' ' + 'more hours of sleep')
  } else {
    console.log('Invalid')
  }
}

calculateSleepDebt()
