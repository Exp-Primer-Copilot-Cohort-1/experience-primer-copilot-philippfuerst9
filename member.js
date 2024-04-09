function skillsMember() {
  var member = document.getElementById('member');
  var memberSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Express', 'SQL'];
  var skills = document.createElement('ul');
  skills.setAttribute('id', 'skills');
  member.appendChild(skills);
  for (var i = 0; i < memberSkills.length; i++) {
    var skill = document.createElement('li');
    skill.textContent = memberSkills[i];
    skills.appendChild(skill);
  }
}
