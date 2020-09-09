//* Draw Actual UI
function draw(document, factions) {
  //var buttonStr = "";
  for (var objIndex in factions) {
    //buttonStr += drawButton(factions[objIndex]);
    if (document.getElementById(factions[objIndex].name) != null) {
      var element = document.getElementById(factions[objIndex].name);
      element.parentNode.removeChild(element);
    }
    document
      .getElementById("grid")
      .appendChild(drawButton(factions[objIndex]));
  }
  //document.getElementById("grid").innerHTML = buttonStr;
  return 1;
}

function newButton(faction) {
  const newDiv = document.createElement("div");
  newDiv.setAttribute("class", "factionButton");
  newDiv.setAttribute("id", faction.name);
  newDiv.onclick = function() {
    faction.buy();
  };
  return newDiv;
}
function newTextSection(label, attr) {
  const text = document.createElement("div");
  text.setAttribute("class", "textSection")
  text.innerHTML = label + attr + "\t";
  return text;
}
function drawButton(faction) {
  const newDiv = newButton(faction);
  newDiv.appendChild(newTextSection("", faction.getName()));
  newDiv.appendChild(newTextSection("OWNED: ", faction.owned));
  newDiv.appendChild(newTextSection("COST: ", faction.cost));
  return newDiv;
}

export { draw };
