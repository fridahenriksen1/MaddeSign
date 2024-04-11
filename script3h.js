const button3h = document.querySelector(".button3h");
button3h.addEventListener("click", () => {
  var selectedDate = document.getElementById('kursDatum').value;
  var selectedParticipants = document.getElementById('antal').value;
  console.log(totalBought);
  totalBought++
  console.log(totalBought);
  var addedCourse = {
    type: "3h",
    date: selectedDate,
    participants: selectedParticipants
  };
  var uniqueKey = 'addedCourse_' + new Date().getTime();
  localStorage.setItem(uniqueKey, JSON.stringify(addedCourse));
  localStorage.setItem('totalBought', totalBought);
  location.reload();
});