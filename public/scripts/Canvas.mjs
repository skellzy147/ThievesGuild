//* Draw Actual UI
function draw(document, factions) {
  var buttonStr = "";
  for (var objIndex in factions) {
    buttonStr += drawButton(factions[objIndex]);
  }
  document.getElementById("grid").innerHTML = buttonStr;
  return 1;
}

//* Add buttons for each faction
function drawButton(faction) {
  console.log(faction);
  return (
    '<li> <div class="hexagon" onclick=\'ThievesGuild.' +
    faction.name +
    '.buy("' +
    faction.name +
    " \")'> <p> <span >" +
    faction.getName() +
    ': </span> <span id="' +
    faction.name +
    'Number">' +
    faction.owned +
    '</span><br><span>Cost:</span><span id="' +
    faction.name +
    'Cost">' +
    faction.cost +
    "</span> </p></div></li>"
  );
}

export { draw }
