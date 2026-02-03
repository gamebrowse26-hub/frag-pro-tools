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

  if (type === "settings") {
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

  if (type === "fps") {
    content = `
      <h3>🚀 FPS Boost Tips</h3>

      ✔️ Close all background apps<br>
      ✔️ Restart phone before gaming<br>
      ✔️ Use Low graphics settings<br>
      ✔️ Keep phone cool<br><br>

      ⚠️ Avoid playing while charging
    `;
  }

  if (type === "aim") {
    content = `
      <h3>🔥 Aim Training Routine</h3>

      ⏱️ 5 min – Tracking practice<br>
      🎯 5 min – Flick shots<br>
      ⚔️ 5 min – Close combat<br><br>

      📅 Practice daily for best results<br>
      💡 Consistency beats sensitivity
    `;
  }

  document.getElementById("contentBox").innerHTML = content;
}
