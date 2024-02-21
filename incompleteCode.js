const myIp = "";

const isShowLicensedByCountryCode = {
  CA: false,
  US: false,
};

// --- No need to edit, but you can comment out console.logs --
async function travelPathAllClear(ip) {
  const response = await fetch(`https://ipapi.co/${ip}/country/`);
  const countryCode = await response.text();
  console.log(`Country code for your IP: ${countryCode}`);
  // default to false if countryCode is not in the object
  const allClear = isShowLicensedByCountryCode[countryCode] || false;
  console.log(`Code ${countryCode} is licensed: ${allClear}`);

  return allClear;
}

// --- Don't edit below this line --
async function testForAllClear() {
  if (myIp.length < 7) {
    return console.log("Did you set your IP on line 1?");
  }

  const allClear = await travelPathAllClear(myIp);

  if (allClear) {
    console.log("All clear!");
  } else {
    console.log("Some paths along the journey are yet licensed...");
  }
}
testForAllClear();
