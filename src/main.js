const allData = function () {
  let allDataObject = {};

  document
    .querySelectorAll(
      "input[type='text'], textarea, select, input[type='radio']:checked"
    )
    .forEach((item) => (allDataObject[item.id] = item.value));

  let arrayData = [];
  document
    .querySelectorAll("input[type='checkbox']:checked")
    .forEach((item) => {
      allDataObject[item.name] = arrayData;
      arrayData.push(item.id);
    });
  return allDataObject;
};

function print() {
  console.log(allData());
}

const button = document.getElementById("button");
button.addEventListener("click", print);
