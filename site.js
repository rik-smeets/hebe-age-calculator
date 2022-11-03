var birthdateInput = document.getElementById("birthDate");
var ageAtDateInput = document.getElementById("ageAtDate");
ageAtDateInput.valueAsDate = new Date();
birthdateInput.addEventListener("change", onDateChanged);
ageAtDateInput.addEventListener("change", onDateChanged);

function onDateChanged() {
    var birthDate = moment(birthdateInput.valueAsDate);
    var toDate = moment(ageAtDateInput.valueAsDate);
    if (!birthDate.isValid() || !toDate.isValid()) {
        return;
    }

    var years = toDate.diff(birthDate, "year");
    birthDate.add(years, "years");
    var months = toDate.diff(birthDate, "months");
    birthDate.add(months, "months");
    var days = toDate.diff(birthDate, "days");

    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;
}