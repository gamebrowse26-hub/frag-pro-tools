function showContent(type) {
  let content = "";

  if (type === "sensitivity") {
    content = `
      <h3>🎯 Sensitivity Calculator</h3>
      <b>Recommended (Balanced Players)</b><br><br>
      🔹 Aim Sensitivity: <b>75%</b><br>
      🔹 Movement Sensitivity: <b>80%</b><br>
      🔹 Aim Assist: <b>10</b><br><br>
      ✅ Best for mid–close range fights<br>
      ⚠️ Change slowly (±2 at a time)<br><br>
      <small>Pro tip: Use training mode before ranked</small>
    `;
  }

  else if (type === "settings") {
    content = `
      <h3>⚙️ Best Competitive Settings</h3>
      🎮 Graphics Quality: <b>Low</b><br>
      ⚡ FPS Mode: <b>Maximum</b><br>
      🎯 Aim Assist: <b>10</b><br>
      🔄 Auto Shoot: <b>ON</b><br><br>
      ✅ Stable FPS = Better aim<br>
      ❌ High graphics = More lag
    `;
  }

  else if (type === "fps") {
    content = `
      <h3>🚀 FPS Boost Tips</h3>
      ✔️ Close all background apps<br>
      ✔️ Restart phone before gaming<br>
      ✔️ Use Low graphics settings<br>
      ✔️ Keep phone cool<br><br>
      ⚠️ Avoid playing while charging
    `;
  }

  else if (type === "aim") {
    content = `
      <h3>🔥 Aim Training Routine</h3>
      ⏱️ 5 min – Tracking practice<br>
      🎯 5 min – Flick shots<br>
      ⚔️ 5 min – Close combat<br><br>
      📅 Practice daily for best results<br>
      💡 Consistency beats sensitivity
    `;
  }

  else if (type === "tier") {
    content = `
      <h3>🏆 Competitive Tier List</h3>
      <p>Updated for Tournament & Ranked Meta</p>

      <img src="tier-list.jpg"
           style="width:100%;border-radius:10px;margin:15px 0;"
           alt="FRAG Tournament Tier List">

      <small>
        ⚠️ Tournament focused • No banned characters • Meta-based
      </small>
    `;
  }

  else {
    content = `<p>Click a button above 👆</p>`;
  }

  document.getElementById("contentBox").innerHTML = content;
}
