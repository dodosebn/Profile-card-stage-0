// Getting the UTC time
const currentUTCDate = new Date();
const utcYear = currentUTCDate.getUTCFullYear();
const utcMonth = currentUTCDate.getUTCMonth() + 1;
const utcDay = currentUTCDate.getUTCDate(); // Corrected to get the day of the month
const utcHours = currentUTCDate.getUTCHours();
const utcMinutes = currentUTCDate.getUTCMinutes();
const utcSeconds = currentUTCDate.getUTCSeconds();
const utcMilliSeconds = currentUTCDate.getUTCMilliseconds();

// Corrected formatting
const formattedUTCDateTime = `${utcYear}-${utcMonth.toString().padStart(2, '0')}-${utcDay.toString().padStart(2, '0')} ` +
                             `${utcHours.toString().padStart(2, '0')}:${utcMinutes.toString().padStart(2, '0')}:${utcSeconds.toString().padStart(2, '0')}.` +
                             `${utcMilliSeconds.toString().padStart(3, '0')} UTC`;

console.log(formattedUTCDateTime);
