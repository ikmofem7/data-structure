function start() {
    const gridSize = document.getElementById("gridSize").value;
    const players = document.getElementById("players").value;
  const gridValue = +gridSize * +gridSize;
  let value = [];
  for (let index = 1; index <= +players; index++) {
    value.push({
      player: index,
      currentRoll: 0,
      diceRollHistory: [],
      currentposition: 0,
      positionHistory: [],
      status: "",
    });
  }

  function helper(array, stop) {
    let checkForValues = array.find((element, index) => {
      return element.currentposition === gridValue;
    });
    if (checkForValues) {
      array.forEach((element) => {
        if (element.player === checkForValues.player) {
          element.status = "winner";
        }
      });
      return array;
    }
    array.forEach((element) => {
      const diceRoll = Math.ceil(Math.random() * 6);
      element.currentRoll = diceRoll;
      element.diceRollHistory = [...element.diceRollHistory, diceRoll];
      if (element.currentposition + diceRoll > gridValue) {
        element.currentposition = element.currentposition;
      } else {
        element.positionHistory = [
          ...element.positionHistory,
          element.currentposition + diceRoll,
        ];
        element.currentposition = element.currentposition + diceRoll;
      }
    });
    return helper(array);
  }
  helper(value);
  let table = document.getElementById("tableBody");
  for (let i = 0; i < value.length; i++) {
    var node = document.createElement("TR");
    Object.entries(value[i]).map(([key, value]) => {
      if (key !== "currentposition") {
        var textnode = document.createElement("TD");
        var text = document.createTextNode(value);
        textnode.appendChild(text);
        node.appendChild(textnode); // Append the text to <tr>
      }
    });
    document.getElementById("tableBody").appendChild(node);
  }
}
