const typeText = "Hey, I'm Ilakkiya 👋";
let i = 0;

function typeWriter() {
  if (i < typeText.length) {
    document.getElementById("typewriter").innerHTML += typeText.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
typeWriter();

function showContent(section) {
  const box = document.getElementById('content-box');
  box.classList.remove('hidden');

  if (section === 'skills') {
    box.innerHTML = `
      <h3>✨ My Skills</h3>
      <ul>
        <li>Languages: Python, C, Java</li>
        <li>Embedded: ESP32, Arduino</li>
        <li>Mobile Dev: Android Studio, Firebase</li>
        <li>Tools: Git, Figma, Canva</li>
      </ul>
    `;
  } else if (section === 'projects') {
    box.innerHTML = `
      <h3>📁 My Projects</h3>
      <ul>
        <li><b>AI-Powered Inhaler Assistant</b> – ESP32 based health alert system</li>
        <li><b>SkillSet CV</b> – Android resume builder app</li>
        <li><b>Travel Blog with Maps</b> – Interactive tourism website</li>
      </ul>
    `;
  } else if (section === 'contact') {
    box.innerHTML = `
      <h3>📫 Contact Me</h3>
      <p>Email: <a href="mailto:ilakkiya@example.com">ilakkiyajothi040804@gmail.com</a></p>
      <p>GitHub: <a href="https://github.com/Ilakkiya-4" target="_blank">github.com/Ilakkiya-4</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/ilakkiya-jothi-v-p-488a90333/" target="_blank">linkedin.com/in/ilakkiya-jothi-v-p-488a90333</a></p>
    `;
  }
}
