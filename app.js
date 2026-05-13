const STORAGE_KEY = "apt-strength-tracker.v1";

const PROGRAM = {
  days: {
    A: {
      name: "Day A - Hinge, Push, Vertical Pull",
      goal: "Own the hinge, train chest and back, then press without dumping into lumbar extension.",
      warmup: [
        ["90/90 breathing", "5 slow breaths. Long exhale, ribs down, belt buckle slightly up."],
        ["Couch stretch", "45 seconds per side. Glute squeezed. No arching to fake range."],
        ["Dead bug", "6 reps per side. Low back gently heavy. No rib flare."],
        ["Glute bridge hold", "2 x 20 seconds. Posterior tilt first, then squeeze."]
      ],
      exercises: ["trapBarDeadlift", "inclineDbPress", "chestSupportedRow", "hipThrust", "boxBackedPress", "facePull"]
    },
    B: {
      name: "Day B - Squat, Hamstrings, Row",
      goal: "Train legs hard while keeping hamstrings and abs in charge of the pelvis.",
      warmup: [
        ["90/90 breathing", "5 slow breaths. Feel abs bring ribs toward pelvis."],
        ["Half-kneeling stretch", "45 seconds per side. Glute tight. No lumbar arch."],
        ["Squat reset", "8 controlled reps. Ribs stacked, pelvis quiet."],
        ["RKC plank", "2 x 15 seconds. Max tension, short set."]
      ],
      exercises: ["hackSquat", "latPulldown", "seatedLegCurl", "dbRdl", "cableRow", "rkcPlank"]
    },
    C: {
      name: "Day C - Single-Leg, Posterior Chain, Shoulders",
      goal: "Build total-body strength while forcing pelvic control under asymmetrical load.",
      warmup: [
        ["90/90 breathing", "5 slow breaths. If ribs are up, reset before loading."],
        ["Couch stretch", "45 seconds per side. Glute squeezed."],
        ["Bird dog", "6 reps per side. Hips square, no spine twisting."],
        ["Lateral band walk", "10 steps each way. Knees soft, pelvis level."]
      ],
      exercises: ["reverseLunge", "machineChestPress", "seatedCableRow", "barbellHipThrust", "pallofPress", "lateralRearDelt"]
    }
  },
  exercises: {
    trapBarDeadlift: exercise("Trap Bar Deadlift", "Main lift", "Trap bar", "Brace first. Push the floor away. Finish with glutes, not low back.", [3, "8-10", 7, "90s"], [4, "5-7", 8, "120s"], [4, "4-6", 8.5, "150s"]),
    inclineDbPress: exercise("Incline Dumbbell Press", "Upper push", "Dumbbells", "Feet anchored. Ribs down on the bench. Stop one rep before shoulder dump.", [3, "8-12", 7, "75s"], [4, "6-8", 8, "90s"], [4, "5-7", 8.5, "105s"]),
    chestSupportedRow: exercise("Chest-Supported Row", "Upper pull", "Machine or bench", "Chest stays glued down. Pull elbows back without shrugging.", [3, "10-12", 7, "75s"], [4, "8-10", 8, "90s"], [4, "6-8", 8.5, "105s"]),
    hipThrust: exercise("Hip Thrust", "Glutes", "Barbell or machine", "Tuck slightly at the top. If low back feels it, shorten the range.", [3, "10-12", 7, "75s"], [4, "8-10", 8, "90s"], [4, "6-8", 8.5, "105s"]),
    boxBackedPress: exercise("Flat-Back Box Dumbbell Shoulder Press", "APT-corrective press", "Box and dumbbells", "Sit against the box, ribs stacked. Press only through the range you can own.", [3, "8-10", 7, "75s"], [3, "6-8", 8, "90s"], [4, "5-7", 8, "105s"]),
    facePull: exercise("Face Pull", "Shoulders", "Cable", "Pull to forehead. Elbows high. Neck relaxed.", [2, "12-15", 7, "45s"], [3, "10-12", 7.5, "60s"], [3, "10-12", 8, "60s"]),
    hackSquat: exercise("Hack Squat", "Main lift", "Machine", "Brace before descent. Stop depth before pelvis rolls under or ribs flare.", [3, "8-10", 7, "90s"], [4, "6-8", 8, "120s"], [4, "5-7", 8.5, "150s"]),
    latPulldown: exercise("Lat Pulldown", "Upper pull", "Cable", "Lean back slightly, ribs down. Drive elbows to pockets.", [3, "8-12", 7, "75s"], [4, "6-8", 8, "90s"], [4, "6-8", 8.5, "105s"]),
    seatedLegCurl: exercise("Seated Leg Curl", "Hamstrings", "Machine", "Control the return. Hamstrings should feel like the limiter.", [3, "10-15", 7, "60s"], [4, "8-10", 8, "75s"], [4, "6-8", 8.5, "90s"]),
    dbRdl: exercise("Dumbbell RDL", "Posterior chain", "Dumbbells", "Hips back, shins quiet. Stop before the low back takes over.", [3, "8-10", 7, "75s"], [4, "6-8", 8, "90s"], [4, "5-7", 8.5, "105s"]),
    cableRow: exercise("Seated Cable Row", "Upper pull", "Cable", "Stay tall without rib flare. Pull, pause, own the return.", [3, "10-12", 7, "75s"], [4, "8-10", 8, "90s"], [4, "6-8", 8.5, "105s"]),
    rkcPlank: exercise("RKC Plank", "Anti-extension core", "Bodyweight", "Elbows pull toward toes. Glutes tight. Short, hard sets.", [3, "15-25 sec", 8, "45s"], [3, "20-30 sec", 8.5, "60s"], [4, "20-30 sec", 9, "60s"]),
    reverseLunge: exercise("Reverse Lunge", "Single-leg", "Dumbbells", "Step back softly. Front heel heavy. Pelvis stays level.", [3, "8-10/side", 7, "75s"], [4, "6-8/side", 8, "90s"], [4, "5-7/side", 8.5, "105s"]),
    machineChestPress: exercise("Machine Chest Press", "Upper push", "Machine", "Back stays stacked. Do not trade ribs for extra range.", [3, "8-12", 7, "75s"], [4, "6-8", 8, "90s"], [4, "5-7", 8.5, "105s"]),
    seatedCableRow: exercise("Seated Cable Row", "Upper pull", "Cable", "Start stacked, pause each rep, return with control.", [3, "10-12", 7, "75s"], [4, "8-10", 8, "90s"], [4, "6-8", 8.5, "105s"]),
    barbellHipThrust: exercise("Barbell Hip Thrust", "Glutes", "Barbell", "Posterior tilt at lockout. No lower-back finish.", [3, "8-12", 7, "75s"], [4, "6-8", 8, "90s"], [4, "5-7", 8.5, "105s"]),
    pallofPress: exercise("Pallof Press", "Anti-rotation core", "Cable or band", "Exhale before the press. Hips and ribs face forward.", [3, "10-12/side", 7, "45s"], [3, "8-10/side", 8, "60s"], [4, "8-10/side", 8.5, "60s"]),
    lateralRearDelt: exercise("Lateral Raise + Rear Delt", "Shoulders", "Dumbbells or cables", "Small bend in elbows. No swinging through the low back.", [2, "12-15", 7, "45s"], [3, "10-12", 7.5, "60s"], [3, "10-12", 8, "60s"])
  }
};

const state = loadState();
const els = {
  weekSelect: document.getElementById("weekSelect"),
  daySelect: document.getElementById("daySelect"),
  blockCard: document.getElementById("blockCard"),
  sessionLabel: document.getElementById("sessionLabel"),
  sessionTitle: document.getElementById("sessionTitle"),
  sessionGoal: document.getElementById("sessionGoal"),
  warmupList: document.getElementById("warmupList"),
  exerciseList: document.getElementById("exerciseList"),
  exerciseTemplate: document.getElementById("exerciseTemplate"),
  finishSession: document.getElementById("finishSession"),
  sessionNotice: document.getElementById("sessionNotice"),
  bodyWeight: document.getElementById("bodyWeight"),
  aptScore: document.getElementById("aptScore"),
  postureNote: document.getElementById("postureNote"),
  saveBody: document.getElementById("saveBody"),
  summaryStats: document.getElementById("summaryStats"),
  exportJson: document.getElementById("exportJson"),
  exportCsv: document.getElementById("exportCsv"),
  importJson: document.getElementById("importJson"),
  resetData: document.getElementById("resetData")
};

function exercise(name, type, equipment, cues, accumulation, strength, intensification) {
  return {
    name,
    type,
    equipment,
    cues,
    targets: {
      accumulation: target(...accumulation),
      strength: target(...strength),
      intensification: target(...intensification),
      deload: target(Math.max(2, accumulation[0] - 1), accumulation[1], 6, accumulation[3]),
      consolidation: target(strength[0], strength[1], 7.5, strength[3])
    }
  };
}

function target(sets, reps, rpe, rest) {
  return { sets, reps, rpe, rest };
}

function loadState() {
  const empty = { logs: [], bodyLogs: [], completedSessions: [], selectedWeek: 1, selectedDay: "A" };
  try {
    return { ...empty, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
  } catch {
    return empty;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getBlock(week) {
  if (week === 4 || week === 8) return { key: "deload", name: "Deload / Pattern Lock-In", rule: "Reduce load 10-15%, drop one set, and make every rep clean." };
  if (week === 12) return { key: "consolidation", name: "Audit Week", rule: "No max testing. Beat week 9 form with smoother reps and cleaner bracing." };
  if (week <= 3) return { key: "accumulation", name: "Base Hypertrophy", rule: "Add reps first. Add load after all sets hit the top of the range at target RPE." };
  if (week <= 7) return { key: "strength", name: "Strength Bias", rule: "Use heavier loads while keeping ribs stacked and pelvis quiet." };
  return { key: "intensification", name: "Intensification", rule: "Progress only when the set stays clean under heavier load." };
}

function initControls() {
  for (let week = 1; week <= 12; week += 1) {
    els.weekSelect.add(new Option(`Week ${week}`, String(week)));
  }
  Object.entries(PROGRAM.days).forEach(([key, day]) => {
    els.daySelect.add(new Option(day.name, key));
  });
  els.weekSelect.value = state.selectedWeek;
  els.daySelect.value = state.selectedDay;
}

function render() {
  const week = Number(els.weekSelect.value);
  const dayKey = els.daySelect.value;
  const day = PROGRAM.days[dayKey];
  const block = getBlock(week);
  state.selectedWeek = week;
  state.selectedDay = dayKey;
  saveState();

  els.blockCard.innerHTML = `<strong>${block.name}</strong><span>${block.rule}</span>`;
  els.sessionLabel.textContent = `Week ${week} / ${dayKey}`;
  els.sessionTitle.textContent = day.name;
  els.sessionGoal.textContent = day.goal;
  renderWarmup(day.warmup);
  renderExercises(day.exercises, block, week, dayKey);
  renderBodyInputs();
  renderSummary();
}

function renderWarmup(warmup) {
  els.warmupList.innerHTML = "";
  warmup.forEach(([name, cue]) => {
    const item = document.createElement("div");
    item.className = "warmup-item";
    item.innerHTML = `<strong>${escapeHtml(name)}</strong><span>${escapeHtml(cue)}</span>`;
    els.warmupList.appendChild(item);
  });
}

function renderExercises(exerciseIds, block, week, dayKey) {
  els.exerciseList.innerHTML = "";
  exerciseIds.forEach((id, index) => {
    const exerciseItem = PROGRAM.exercises[id];
    const plan = exerciseItem.targets[block.key];
    const node = els.exerciseTemplate.content.cloneNode(true);
    const card = node.querySelector(".exercise-card");
    const noteInput = card.querySelector(".exercise-note");
    const savedNote = state.logs.find(log => log.week === week && log.day === dayKey && log.exerciseId === id && log.note)?.note || "";

    card.querySelector(".exercise-kicker").textContent = `${index + 1}. ${exerciseItem.type}`;
    card.querySelector(".exercise-name").textContent = exerciseItem.name;
    card.querySelector(".exercise-meta").textContent = `${exerciseItem.equipment} | Rest ${plan.rest}`;
    card.querySelector(".exercise-target").textContent = `${plan.sets} x ${plan.reps} @ RPE ${plan.rpe}`;
    card.querySelector(".cue-box").textContent = exerciseItem.cues;
    card.querySelector(".suggestion").textContent = loadSuggestion(id, plan, week, dayKey);
    noteInput.value = savedNote;

    const tbody = card.querySelector("tbody");
    for (let setIndex = 1; setIndex <= plan.sets; setIndex += 1) {
      const saved = findLog(week, dayKey, id, setIndex) || {};
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${setIndex}</td>
        <td><input type="text" inputmode="decimal" value="${saved.weight ?? ""}" aria-label="Load for ${exerciseItem.name} set ${setIndex}"></td>
        <td><input type="text" inputmode="numeric" value="${saved.reps ?? ""}" aria-label="Reps for ${exerciseItem.name} set ${setIndex}"></td>
        <td><input type="text" inputmode="decimal" value="${saved.rpe ?? ""}" aria-label="RPE for ${exerciseItem.name} set ${setIndex}"></td>
        <td><input type="checkbox" ${saved.done ? "checked" : ""} aria-label="Set ${setIndex} complete"></td>
      `;
      const [weightInput, repsInput, rpeInput, doneInput] = row.querySelectorAll("input");
      const persist = () => {
        upsertLog({
          week,
          day: dayKey,
          exerciseId: id,
          exerciseName: exerciseItem.name,
          setIndex,
          target: `${plan.sets} x ${plan.reps} @ RPE ${plan.rpe}`,
          weight: weightInput.value === "" ? "" : Number(weightInput.value),
          reps: repsInput.value === "" ? "" : Number(repsInput.value),
          rpe: rpeInput.value === "" ? "" : Number(rpeInput.value),
          done: doneInput.checked,
          note: noteInput.value,
          updatedAt: new Date().toISOString()
        });
      };
      [weightInput, repsInput, rpeInput, doneInput, noteInput].forEach(input => {
        input.addEventListener("input", persist);
        input.addEventListener("change", persist);
      });
      tbody.appendChild(row);
    }

    els.exerciseList.appendChild(node);
  });
}

function findLog(week, day, exerciseId, setIndex) {
  return state.logs.find(log => log.week === week && log.day === day && log.exerciseId === exerciseId && log.setIndex === setIndex);
}

function upsertLog(nextLog) {
  const index = state.logs.findIndex(log => log.week === nextLog.week && log.day === nextLog.day && log.exerciseId === nextLog.exerciseId && log.setIndex === nextLog.setIndex);
  if (index >= 0) {
    state.logs[index] = nextLog;
  } else {
    state.logs.push(nextLog);
  }
  saveState();
  renderSummary();
}

function loadSuggestion(exerciseId, plan, week, dayKey) {
  const previous = [...state.logs]
    .filter(log => log.exerciseId === exerciseId && log.done && log.weight !== "" && !(log.week === week && log.day === dayKey))
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))[0];
  if (!previous) return "Start with a conservative load and leave clean reps in reserve.";
  const topRep = topNumber(plan.reps);
  const hitTop = previous.reps >= topRep && previous.rpe <= plan.rpe;
  const suggested = hitTop && previous.weight ? round(previous.weight + smallJump(previous.weight)) : previous.weight;
  return hitTop
    ? `Last clean set was ${previous.weight} x ${previous.reps}. Try ${suggested} if bracing is still solid.`
    : `Repeat around ${previous.weight} until you own the top of the rep range.`;
}

function topNumber(value) {
  const nums = String(value).match(/\d+/g);
  return nums ? Number(nums[nums.length - 1]) : 0;
}

function smallJump(weight) {
  if (weight < 40) return 2.5;
  if (weight < 120) return 5;
  return 10;
}

function saveBodyLog() {
  state.bodyLogs.push({
    date: new Date().toISOString().slice(0, 10),
    timestamp: new Date().toISOString(),
    week: Number(els.weekSelect.value),
    bodyWeight: els.bodyWeight.value,
    aptScore: els.aptScore.value,
    note: els.postureNote.value
  });
  els.bodyWeight.value = "";
  els.aptScore.value = "";
  els.postureNote.value = "";
  saveState();
  renderBodyInputs();
  renderSummary();
}

function renderBodyInputs() {
  const latest = state.bodyLogs.at(-1);
  els.bodyWeight.placeholder = latest?.bodyWeight || "";
  els.aptScore.placeholder = latest?.aptScore || "";
}

function renderSummary() {
  const latest = state.bodyLogs.at(-1);
  const first = state.bodyLogs[0];
  const bodyDelta = latest?.bodyWeight && first?.bodyWeight ? round(Number(latest.bodyWeight) - Number(first.bodyWeight)) : null;
  const aptDelta = latest?.aptScore && first?.aptScore ? round(Number(latest.aptScore) - Number(first.aptScore)) : null;
  const completed = state.completedSessions.length;
  const loggedSets = state.logs.filter(log => log.done).length;
  els.summaryStats.innerHTML = `
    <div class="stat-row"><span>Sessions</span><strong>${completed}/36</strong></div>
    <div class="stat-row"><span>Logged sets</span><strong>${loggedSets}</strong></div>
    <div class="stat-row"><span>Latest weight</span><strong>${latest?.bodyWeight || "-"}</strong></div>
    <div class="stat-row"><span>Weight delta</span><strong>${formatDelta(bodyDelta, " lb")}</strong></div>
    <div class="stat-row"><span>Latest APT</span><strong>${latest?.aptScore || "-"}</strong></div>
    <div class="stat-row"><span>APT delta</span><strong>${formatDelta(aptDelta, "")}</strong></div>
  `;
}

function finishSession() {
  const sessionId = `${els.weekSelect.value}-${els.daySelect.value}`;
  if (!state.completedSessions.includes(sessionId)) {
    state.completedSessions.push(sessionId);
  }
  saveState();
  els.sessionNotice.hidden = false;
  els.sessionNotice.textContent = "Session marked complete. Export a backup after meaningful updates.";
  renderSummary();
}

function exportJson() {
  download("apt-strength-tracker-backup.json", JSON.stringify({ exportedAt: new Date().toISOString(), data: state }, null, 2), "application/json");
}

function exportCsv() {
  const header = ["week", "day", "exercise", "set", "target", "weight", "reps", "rpe", "done", "note", "updatedAt"];
  const rows = state.logs.map(log => header.map(key => csvCell(key === "exercise" ? log.exerciseName : log[key])).join(","));
  download("apt-strength-log.csv", [header.join(","), ...rows].join("\n"), "text/csv");
}

function importJson(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      const incoming = parsed.data || parsed;
      if (!Array.isArray(incoming.logs) || !Array.isArray(incoming.bodyLogs) || !Array.isArray(incoming.completedSessions)) {
        throw new Error("Invalid export");
      }
      Object.assign(state, incoming);
      saveState();
      els.weekSelect.value = state.selectedWeek || 1;
      els.daySelect.value = state.selectedDay || "A";
      render();
    } catch {
      window.alert("Import failed. That JSON is not a valid APT Strength Tracker export.");
    }
  };
  reader.readAsText(file);
}

function resetData() {
  if (!window.confirm("Wipe all APT Strength Tracker data from this browser?")) return;
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
}

function download(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function csvCell(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function formatDelta(value, suffix) {
  if (value === null || Number.isNaN(value)) return "-";
  return `${value > 0 ? "+" : ""}${value}${suffix}`;
}

function round(value) {
  return Math.round(value * 10) / 10;
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

function bindEvents() {
  els.weekSelect.addEventListener("change", render);
  els.daySelect.addEventListener("change", render);
  els.finishSession.addEventListener("click", finishSession);
  els.saveBody.addEventListener("click", saveBodyLog);
  els.exportJson.addEventListener("click", exportJson);
  els.exportCsv.addEventListener("click", exportCsv);
  els.importJson.addEventListener("change", event => {
    const file = event.target.files?.[0];
    if (file) importJson(file);
    event.target.value = "";
  });
  els.resetData.addEventListener("click", resetData);
}

initControls();
bindEvents();
render();
