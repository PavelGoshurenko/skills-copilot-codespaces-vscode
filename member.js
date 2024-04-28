function skillsMember() {
  var skill = document.getElementById("skills");
  var skillValue = skill.options[skill.selectedIndex].value;
  var skillText = skill.options[skill.selectedIndex].text;
  var skillList = document.getElementById("skillList");
  var skillItem = document.createElement("li");
  skillItem.setAttribute("id", skillValue);
  skillItem.setAttribute("class", "list-group-item");
  skillItem.appendChild(document.createTextNode(skillText));
  skillList.appendChild(skillItem);
  skill.options[skill.selectedIndex].disabled = true;
}