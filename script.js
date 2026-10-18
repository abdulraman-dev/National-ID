const getStartedBtn = document.getElementById("getStarted");
const landing = document.getElementById("landing");
const createAccount = document.getElementById("createAccount");
const landingPage = document.getElementById("landingPage");

// =======================================================
// Event listener for the get Started button
getStartedBtn.addEventListener("click", function () {
  landing.style.display = "none";
  landingPage.style.background = "#ffff";
  createAccount.style.display = "block";
});

// --------------------------------------------------------------------------------
// event listener for back button
const backBtn = document.getElementById("bactTolanding");

backBtn.addEventListener("click", function () {
  createAccount.style.display = "none";
  landing.style.display = "block";
  landingPage.style.background = "#020296";
});

// -------------------------------------------------------------------------------
// collecting the users input
const userFullName = [];

const usersPhoneNumber = [];

const usersEmail = [];

const password = [];

const fullName = document.getElementById("fullName");

const submitBtn = document.getElementById("submit");

const phoneNumberInput = document.getElementById("phonenumber");

const emailInput = document.getElementById("email");

const createPassword = document.getElementById("password");

const passwordConfirm = document.getElementById("passwordConfirm");

const wrongPassword = document.getElementById("wrongPassword");

const displaySectionOfTheUserName = document.getElementById("usergreeting");

const dashBoard = document.getElementById("welcomePage");

// -------------------------------------------------------------------------------------
// event listener for account creation
submitBtn.addEventListener("click", function () {
  // push the user name into the userFullName array
  if (fullName.value) {
    displaySectionOfTheUserName.textContent = fullName.value;
    userFullName.push(fullName.value);
  } else {
    document.getElementById("fill").textContent = "Please Enter your full name";
  }

  //  phone number input

  if (phoneNumberInput.value) {
    usersPhoneNumber.push(phoneNumberInput.value);
  } else {
    document.getElementById("fill2").textContent =
      "Please Enter your full name";
  }

  //  email input
  if (emailInput.value) {
    usersPhoneNumber.push(usersEmail.value);
  } else {
    document.getElementById("fill3").textContent =
      "Please Enter your full name";
  }

  //  password input
  if (createPassword.value) {
    if (createPassword.value === passwordConfirm.value) {
      password.push(createAccount);
    } else {
      wrongPassword.textContent = "password mismatch please try again";
    }
  } else {
    document.getElementById("fill4").textContent =
      "Please Enter your full name";
  }

  //   password confirmation input
  if (passwordConfirm.value) {
    password.push(passwordConfirm.value);
  } else {
    document.getElementById("fill5").textContent =
      "Please Enter your full name";
  }

  if (
    fullName.value &&
    phoneNumberInput.value &&
    emailInput.value &&
    createPassword.value === passwordConfirm.value
  ) {
    dashBoard.style.display = "block";
    createAccount.style.display = "none";
  }
});

// -----------------------------------------------------------------------------
// take user to the new application tab
const newApplicationButton = document.getElementById("moveToNewApplication");
const newApplicationTab = document.getElementById("newApplication");
const newApplicatinDiv = document.getElementById("newApplications");

// --------------------------------------------------------------------
// event listener for the application btn
newApplicationButton.addEventListener("click", function () {
  newApplicationTab.style.display = "block";
  dashBoard.style.display = "none";
  chainNumber1.style.background = "#0f0fe9";
  chainNumber1.style.color = "#ffff";
});

// -----------------------------------------------------------------
// event listener for the application div

// newApplicatinDiv.addEventListener("click", function () {
//   newApplicationTab.style.display = "block";
//   dashBoard.style.display = "none";
//   chainNumber1.style.background = "#0f0fe9";
//   chainNumber1.style.color = "#ffff";
// });

// --------------------------------------------------------------
// Application back button
const backButton = document.getElementById("newBackbtn");

backButton.addEventListener("click", function () {
  dashBoard.style.display = "block";
  newApplicationTab.style.display = "none";
});

// -------------------------------------------------------
// phase 1
const phase1NextBtn = document.getElementById("phase1");

const fname = document.getElementById("fname");

const dateOfBirthInput = document.getElementById("DOB");

const selectInput = document.getElementById("gender");

const placeOfBirthInput = document.getElementById("placeOfBirth");

const chainNumber2 = document.getElementById("second");

const chainNumber1 = document.getElementById("first");

phase1NextBtn.addEventListener("click", function () {
  if (!fname.value) {
    document.getElementById("feel1").textContent = message;

    document.getElementById("feel1").style.display = "block";
  }

  if (!dateOfBirthInput.value) {
    document.getElementById("feel2").textContent = message;

    document.getElementById("feel2").style.display = "block";
  }

  if (!selectInput.value) {
    document.getElementById("feel3").textContent = message;

    document.getElementById("feel3").style.display = "block";
  }

  if (!placeOfBirthInput.value) {
    document.getElementById("feel4").textContent = message;

    document.getElementById("feel4").style.display = "block";
  }

  if (
    fname.value &&
    dateOfBirthInput.value &&
    placeOfBirthInput.value &&
    selectInput.value
  ) {
    chainNumber2.style.background = "#0f0fe9";

    chainNumber2.style.color = "#ffff";

    chainNumber1.style.background = "transparent";

    chainNumber1.style.color = "#020244";

    document.getElementById("newApplication").style.display = "none";

    applicationPhase2.style.display = "block";
  }
});

// -----------------------------------------------------------------------
//  phase 2

// back to phase 1

const backToPhase1 = document.getElementById("backtophase1");

const applicationPhase2 = document.getElementById("applicationPhase2");

const message = " This Field must not be empty";

backToPhase1.addEventListener("click", function () {
  document.getElementById("feel1").style.display = "none";

  document.getElementById("feel2").style.display = "none";

  document.getElementById("feel3").style.display = "none";

  document.getElementById("feel4").style.display = "none";

  applicationPhase2.style.display = "none";

  document.getElementById("newApplication").style.display = "block";

  chainNumber1.style.background = "#0F0FE9";

  chainNumber1.style.color = "#ffff";
});

// =======================================================================

// phase2
// proceed to Face 3

const moveToPhase3 = document.getElementById("movetophase3");

const chainThird = document.getElementById("third");

moveToPhase3.addEventListener("click", function () {
  if (!addressValue.value) {
    document.getElementById("feelone").textContent = message;

    document.getElementById("feelone").style.display = "block";
  }

  if (!townValue.value) {
    document.getElementById("feeltwo").textContent = message;

    document.getElementById("feeltwo").style.display = "block";
  }

  if (!districtValue.value) {
    document.getElementById("feelthree").textContent = message;

    document.getElementById("feelthree").style.display = "block";
  }

  if (!phoneNumberValue.value) {
    document.getElementById("feelfourth").textContent = message;

    document.getElementById("feelfourth").style.display = "block";
  }

  if (
    townValue.value &&
    districtValue.value &&
    addressValue.value &&
    phoneNumberValue.value
  ) {
    chainThird.style.background = "#0f0fe9";

    chainThird.style.color = "#ffff";

    chainNumber1.style.background = "transparent";

    chainNumber1.style.color = "#020244";

    applicationPhase2.style.display = "none";

    phase3Tab.style.display = "block";
  }
});

// ======================================================================
// phase3

// Return to phase 2
const phase3Tab = document.getElementById("applicationPhase3");

const backTophase2Btn = document.getElementById("backtophase2");

backTophase2Btn.addEventListener("click", function () {
  document.getElementById("feelfourth").style.display = "none";

  document.getElementById("feelthree").style.display = "none";

  document.getElementById("feeltwo").style.display = "none";

  document.getElementById("feelone").style.display = "none";

  applicationPhase2.style.display = "block";

  chainNumber2.style.background = "#0f0fe9";

  chainNumber2.style.color = "#ffff";

  phase3Tab.style.display = "none";
});

// proceed to phase 4

const movetophase4bTn = document.getElementById("movetophase4");

const chainNumber4 = document.getElementById("fourth");

const phase4 = document.getElementById("phase4");

movetophase4bTn.addEventListener("click", function () {
  document.getElementById("fullname").textContent = fname.value;

  document.getElementById("dateofbirth").textContent = dateOfBirthInput.value;

  document.getElementById("male").textContent = selectInput.value;

  document.getElementById("birthp").textContent = placeOfBirthInput.value;

  document.getElementById("addressP").textContent = addressValue.value;

  document.getElementById("phobeNumberP").textContent = phoneNumberValue.value;

  document.getElementById("emails").textContent = emailValue.value;

  document.getElementById("districtsP").textContent = districtValue.value;

  if (!firstFileAccess.value) {
    document.getElementById("bf").textContent = "Field must not be empty";
  }

  if (!secondFileAccess.value) {
    document.getElementById("pf").textContent = "Field must not be empty";
  }

  if (firstFileAccess.value && secondFileAccess.value) {
    phase3Tab.style.display = "none";

    chainNumber4.style.background = "#0f0fe9";

    chainNumber4.style.color = "#ffff";

    phase4.style.display = "block";
  }
});

// first file input
const firstFileAccess = document.getElementById("firstfile");

firstFileAccess.addEventListener("change", function () {
  const fileStorer = firstFileAccess.files[0];

  if (fileStorer) {
    document.getElementById("phas3BirthDisappear").textContent =
      fileStorer.name;

    document.getElementById("bf").style.display = "none";

    document.getElementById("photoParagrap").style.display = "none";
  }
});

// second file input
const secondFileAccess = document.getElementById("secondFileAccess");

secondFileAccess.addEventListener("change", function () {
  const SecondFileStores = secondFileAccess.files[0];

  if (SecondFileStores) {
    document.getElementById("Proof").textContent = SecondFileStores.name;

    document.getElementById("pf").style.display = "none";

    document.getElementById("poa").style.display = "none";
  }
});

// third file input
const thirdFileAccess = document.getElementById("thirdFile");

thirdFileAccess.addEventListener("change", function () {
  const thirdFileStore = thirdFileAccess.files[0];

  if (thirdFileStore) {
    document.getElementById("voters").textContent = thirdFileStore.name;

    document.getElementById("font").style.display = "none";
  }
});

//  ==========================================================================

// phase 4
const addressValue = document.getElementById("Address");

const townValue = document.getElementById("town");

const districtValue = document.getElementById("districts");

const emailValue = document.getElementById("emailAddress");

const phoneNumberValue = document.getElementById("phoneNumber");

const backTophase3Btn = document.getElementById("backtophase3");

backTophase3Btn.addEventListener("click", function () {
  phase3Tab.style.display = "block";

  phase4.style.display = "none";

  chainThird.style.background = "#0f0fe9";

  chainThird.style.color = "#ffff";
});

// ========================================================

// submission
const phase4SubmitBtn = document.getElementById("Finalsubmit");

const finalPhase = document.getElementById("Application-Status");

phase4SubmitBtn.addEventListener("click", function () {
  phase4.style.display = "none";

  finalPhase.style.display = "block";
});

const returntoDashBoardbtn = document.getElementById("returntoDashBoard")

const Application_Status = document.getElementById("Application-Status")

returntoDashBoardbtn.addEventListener("click", function () {

    dashBoard.style.display = "block"

    Application_Status.style.display = "none"

})
