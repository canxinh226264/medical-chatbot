const bodyParts = [
  {
    id: "head",
    label: "Đầu",
    hint: "Đau đầu, chóng mặt hoặc khó chịu vùng đầu",
    symptoms: ["Đau đầu", "Chóng mặt", "Đau nửa đầu", "Sốt", "Choáng váng"]
  },
  {
    id: "ears",
    label: "Tai",
    hint: "Triệu chứng ở một hoặc hai tai",
    symptoms: ["Đau tai", "Ù tai", "Giảm thính lực", "Chảy dịch tai", "Chóng mặt"]
  },
  {
    id: "eyes",
    label: "Mắt",
    hint: "Triệu chứng thị giác hoặc khó chịu vùng mắt",
    symptoms: ["Đau mắt", "Đỏ mắt", "Mờ mắt", "Ngứa mắt", "Sưng mí mắt"]
  },
  {
    id: "nose",
    label: "Mũi",
    hint: "Triệu chứng mũi và đường hô hấp trên",
    symptoms: ["Nghẹt mũi", "Chảy nước mũi", "Đau xoang", "Chảy máu mũi", "Mất khứu giác"]
  },
  {
    id: "mouth",
    label: "Miệng",
    hint: "Triệu chứng môi, miệng hoặc răng lợi",
    symptoms: ["Đau răng", "Loét miệng", "Khô miệng", "Sưng lợi", "Méo miệng"]
  },
  {
    id: "throat",
    label: "Cổ và họng",
    hint: "Khó chịu vùng cổ, họng và đường thở trên",
    symptoms: ["Đau họng", "Khàn tiếng", "Ho", "Khó nuốt", "Sưng vùng cổ"]
  },
  {
    id: "chest",
    label: "Ngực và hô hấp",
    hint: "Triệu chứng ở lồng ngực hoặc đường hô hấp",
    symptoms: ["Ho khan", "Ho có đờm", "Khó thở", "Đau khi hít sâu", "Tức ngực"]
  },
  {
    id: "heart",
    label: "Tim",
    hint: "Triệu chứng tim mạch cần được theo dõi cẩn thận",
    symptoms: ["Đau thắt ngực", "Tim đập nhanh", "Khó thở", "Hồi hộp", "Đau lan xuống tay"]
  },
  {
    id: "shoulders",
    label: "Vai",
    hint: "Đau hoặc hạn chế vận động vùng vai",
    symptoms: ["Đau vai", "Cứng vai", "Đau khi giơ tay", "Sưng vai", "Đau lan xuống tay"]
  },
  {
    id: "abdomen",
    label: "Bụng",
    hint: "Khó chịu vùng bụng và hệ tiêu hóa",
    symptoms: ["Đau bụng", "Buồn nôn", "Tiêu chảy", "Đầy hơi", "Nôn liên tục"]
  },
  {
    id: "upperArms",
    label: "Cánh tay",
    hint: "Triệu chứng ở một hoặc hai cánh tay",
    symptoms: ["Đau cánh tay", "Tê bì", "Sưng đau", "Yếu tay", "Hạn chế vận động"]
  },
  {
    id: "elbows",
    label: "Khuỷu tay",
    hint: "Đau hoặc khó vận động khớp khuỷu tay",
    symptoms: ["Đau khuỷu tay", "Sưng khớp", "Cứng khớp", "Đau khi co duỗi", "Tê lan xuống tay"]
  },
  {
    id: "forearms",
    label: "Cẳng tay",
    hint: "Triệu chứng vùng cẳng tay",
    symptoms: ["Đau cẳng tay", "Tê bì", "Sưng đau", "Yếu tay", "Đau khi vận động"]
  },
  {
    id: "hands",
    label: "Bàn tay",
    hint: "Triệu chứng ở bàn tay, cổ tay hoặc ngón tay",
    symptoms: ["Đau bàn tay", "Tê ngón tay", "Sưng khớp", "Run tay", "Khó cầm nắm"]
  },
  {
    id: "hips",
    label: "Hông",
    hint: "Khó chịu hoặc hạn chế vận động vùng hông",
    symptoms: ["Đau hông", "Cứng khớp", "Đau khi đi lại", "Đau lan xuống chân", "Sưng đau"]
  },
  {
    id: "thighs",
    label: "Đùi",
    hint: "Triệu chứng ở một hoặc hai bên đùi",
    symptoms: ["Đau đùi", "Tê bì", "Căng cơ", "Sưng đau", "Yếu chân"]
  },
  {
    id: "knees",
    label: "Đầu gối",
    hint: "Đau hoặc khó vận động khớp gối",
    symptoms: ["Đau đầu gối", "Sưng khớp", "Cứng khớp", "Đau khi đi lại", "Khó co duỗi"]
  },
  {
    id: "legs",
    label: "Cẳng chân",
    hint: "Triệu chứng ở một hoặc hai cẳng chân",
    symptoms: ["Đau cẳng chân", "Tê bì", "Sưng phù", "Chuột rút", "Khó đi lại"]
  },
  {
    id: "feet",
    label: "Bàn chân",
    hint: "Triệu chứng ở bàn chân, cổ chân hoặc ngón chân",
    symptoms: ["Đau bàn chân", "Sưng cổ chân", "Tê ngón chân", "Đau gót chân", "Khó đứng vững"]
  },
  {
    id: "back",
    label: "Lưng",
    hint: "Đau hoặc khó chịu ở lưng trên",
    symptoms: ["Đau lưng", "Cứng lưng", "Đau khi vận động", "Tê vùng lưng", "Đau lan sang vai"]
  },
  {
    id: "lowerBack",
    label: "Thắt lưng",
    hint: "Đau hoặc khó chịu ở vùng lưng dưới",
    symptoms: ["Đau thắt lưng", "Đau lan xuống chân", "Cứng khớp", "Tê bì", "Khó cúi người"]
  }
];

const bodySelections = {};
let patientAge = 30;
let bodyGender = "female";
let activeBodyPartId = null;
let draftSymptoms = new Set();
let diagnosis = null;
let toastTimer;
let modalMode = "consult";
let pendingAppointment = null;

const navLinks = document.querySelectorAll(".nav-link");
const views = document.querySelectorAll(".view");
const triageBody = document.getElementById("triageBody");
const questionTitle = document.getElementById("questionTitle");
const stepEyebrow = document.getElementById("stepEyebrow");
const progressBar = document.getElementById("progressBar");
const flowBadge = document.getElementById("flowBadge");
const bodyPartModal = document.getElementById("bodyPartModal");
const bodyPartTitle = document.getElementById("bodyPartTitle");
const durationRange = document.getElementById("durationRange");
const durationOutput = document.getElementById("durationOutput");
const symptomChoices = document.getElementById("symptomChoices");
const removeBodyPart = document.getElementById("removeBodyPart");
const saveBodyPart = document.getElementById("saveBodyPart");
const paidModal = document.getElementById("paidModal");
const modalEyebrow = document.getElementById("modalEyebrow");
const paidTitle = document.getElementById("paidTitle");
const paidCopy = document.getElementById("paidCopy");
const confirmPaid = document.getElementById("confirmPaid");
const stayFree = document.getElementById("stayFree");
const accountToggle = document.getElementById("accountToggle");
const accountDropdown = document.getElementById("accountDropdown");
const logoutButton = document.getElementById("logoutButton");
const toast = document.getElementById("toast");
const toastTitle = document.getElementById("toastTitle");
const toastMessage = document.getElementById("toastMessage");
const saveProfile = document.getElementById("saveProfile");
const resetProfile = document.getElementById("resetProfile");
const profileInputs = Array.from(document.querySelectorAll("#view-profile .profile-grid input"));
const initialProfileValues = profileInputs.map((input) => input.value);
const customerAccountNameKey = "docahCustomerAccountName";

function syncCustomerAccountName(name) {
  const nextName = (name || profileInputs[0]?.value || "Nguyễn Minh Anh").trim();
  const nameNode = accountToggle?.querySelector(".dot + div > div:first-child");
  if (nameNode) nameNode.textContent = nextName;
  if (profileInputs[0] && profileInputs[0].value !== nextName) {
    profileInputs[0].value = nextName;
  }
  localStorage.setItem(customerAccountNameKey, nextName);
}

syncCustomerAccountName(localStorage.getItem(customerAccountNameKey) || profileInputs[0]?.value);

function setView(name) {
  views.forEach((view) => view.classList.toggle("active", view.id === `view-${name}`));
  navLinks.forEach((link) => link.classList.toggle("active", link.dataset.view === name));
}

function findBodyPart(partId) {
  return bodyParts.find((part) => part.id === partId);
}

function getDurationLabel(days) {
  const value = Number(days);
  if (value >= 30) return "Trên 30 ngày";
  return `${value} ngày`;
}

function getSelectionSummary(selection) {
  return `${selection.symptoms.join(", ")} · ${getDurationLabel(selection.duration)}`;
}

function getAgeProfile() {
  if (patientAge <= 12) {
    return {
      id: "child",
      label: "Trẻ em",
      transform: "translate(40 60) scale(0.75 0.8)"
    };
  }

  if (patientAge <= 17) {
    return {
      id: "teen",
      label: "Thiếu niên",
      transform: "translate(20 32) scale(0.875 0.9)"
    };
  }

  if (patientAge >= 60) {
    return {
      id: "senior",
      label: "Cao tuổi",
      transform: "translate(12 38) scale(0.925 0.9)"
    };
  }

  return {
    id: "adult",
    label: "Người lớn",
    transform: ""
  };
}

function bodyZone(partId, markup, extraClass = "") {
  const part = findBodyPart(partId);
  const selectedClass = bodySelections[partId] ? " is-active" : "";
  return `
    <g class="body-zone ${extraClass}${selectedClass}" data-body-part="${partId}" role="button" tabindex="0" aria-label="${part.label}">
      <title>${part.label}</title>
      ${markup}
    </g>
  `;
}

function renderFrontFigure() {
  const ageProfile = getAgeProfile();
  const headPath = bodyGender === "female"
    ? "M120 42 Q160 16 200 42 L197 88 Q190 126 160 133 Q130 126 123 88 Z"
    : "M117 40 Q160 14 203 40 L199 91 Q190 127 160 134 Q130 127 121 91 Z";
  const chestPath = bodyGender === "female"
    ? "M127 162 Q160 145 193 162 L199 246 Q160 258 121 246 Z"
    : "M121 162 Q160 142 199 162 L198 246 Q160 255 122 246 Z";
  const hipsPath = bodyGender === "female"
    ? "M130 306 Q160 320 190 306 L195 348 Q160 365 125 348 Z"
    : "M134 306 Q160 316 186 306 L190 345 Q160 356 130 345 Z";

  return `
    <svg class="body-figure age-${ageProfile.id} gender-${bodyGender}" viewBox="0 0 320 620" role="img" aria-label="Mô hình cơ thể mặt trước">
      <g class="body-age-layer" ${ageProfile.transform ? `transform="${ageProfile.transform}"` : ""}>
      ${bodyZone("ears", '<ellipse cx="113" cy="79" rx="9" ry="17"/><ellipse cx="207" cy="79" rx="9" ry="17"/>', "face-zone")}
      ${bodyZone("head", `<path d="${headPath}"/>`, "face-zone")}
      ${bodyZone("eyes", '<ellipse cx="143" cy="73" rx="11" ry="7"/><ellipse cx="177" cy="73" rx="11" ry="7"/>', "feature-zone")}
      ${bodyZone("nose", '<path d="M160 78 L151 99 Q160 106 169 99 Z"/>', "feature-zone")}
      ${bodyZone("mouth", '<ellipse cx="160" cy="113" rx="17" ry="8"/>', "feature-zone")}
      ${bodyZone("throat", '<rect x="144" y="129" width="32" height="33" rx="13"/>', "torso-zone")}
      ${bodyZone("shoulders", '<path d="M122 154 Q101 154 86 173 L103 196 L128 182 Z"/><path d="M198 154 Q219 154 234 173 L217 196 L192 182 Z"/>', "torso-zone")}
      ${bodyZone("chest", `<path d="${chestPath}"/>`, "torso-zone")}
      ${bodyZone("heart", '<path d="M162 193 C151 176 128 185 134 204 C138 218 151 229 162 238 C173 229 187 218 190 204 C196 185 173 176 162 193 Z"/>', "heart-zone")}
      ${bodyZone("abdomen", '<path d="M122 248 Q160 259 198 248 L187 306 Q160 320 133 306 Z"/>', "abdomen-zone")}
      ${bodyZone("upperArms", '<path d="M87 174 L105 183 L91 248 L70 243 Z"/><path d="M233 174 L215 183 L229 248 L250 243 Z"/>', "limb-zone")}
      ${bodyZone("elbows", '<ellipse cx="79" cy="257" rx="14" ry="16"/><ellipse cx="241" cy="257" rx="14" ry="16"/>', "joint-zone")}
      ${bodyZone("forearms", '<path d="M70 270 L88 268 L75 326 L55 321 Z"/><path d="M250 270 L232 268 L245 326 L265 321 Z"/>', "limb-zone")}
      ${bodyZone("hands", '<path d="M53 321 Q67 316 78 329 L72 369 Q60 383 48 367 Z"/><path d="M267 321 Q253 316 242 329 L248 369 Q260 383 272 367 Z"/>', "limb-zone")}
      ${bodyZone("hips", `<path d="${hipsPath}"/>`, "abdomen-zone")}
      ${bodyZone("thighs", '<path d="M126 348 L153 348 L150 439 L119 439 Z"/><path d="M167 348 L194 348 L201 439 L170 439 Z"/>', "limb-zone")}
      ${bodyZone("knees", '<ellipse cx="135" cy="454" rx="17" ry="19"/><ellipse cx="185" cy="454" rx="17" ry="19"/>', "joint-zone")}
      ${bodyZone("legs", '<path d="M119 472 L150 472 L147 552 L122 552 Z"/><path d="M170 472 L201 472 L198 552 L173 552 Z"/>', "limb-zone")}
      ${bodyZone("feet", '<path d="M121 550 L148 550 L153 581 Q128 591 112 578 Z"/><path d="M172 550 L199 550 L208 578 Q192 591 167 581 Z"/>', "limb-zone")}
      <g class="body-detail">
        <path d="M141 92 Q160 103 179 92"/>
        <circle cx="160" cy="274" r="3"/>
        <path d="M160 309 L160 344"/>
      </g>
      </g>
    </svg>
  `;
}

function renderBackFigure() {
  const ageProfile = getAgeProfile();
  const headPath = bodyGender === "female"
    ? "M120 42 Q160 16 200 42 L197 95 Q187 131 160 134 Q133 131 123 95 Z"
    : "M117 40 Q160 14 203 40 L199 97 Q188 132 160 135 Q132 132 121 97 Z";
  const hipsPath = bodyGender === "female"
    ? "M130 306 Q160 320 190 306 L195 348 Q160 365 125 348 Z"
    : "M134 306 Q160 316 186 306 L190 345 Q160 356 130 345 Z";

  return `
    <svg class="body-figure age-${ageProfile.id} gender-${bodyGender}" viewBox="0 0 320 620" role="img" aria-label="Mô hình cơ thể mặt sau">
      <g class="body-age-layer" ${ageProfile.transform ? `transform="${ageProfile.transform}"` : ""}>
      ${bodyZone("ears", '<ellipse cx="113" cy="79" rx="9" ry="17"/><ellipse cx="207" cy="79" rx="9" ry="17"/>', "face-zone")}
      ${bodyZone("head", `<path d="${headPath}"/>`, "face-zone")}
      ${bodyZone("throat", '<rect x="143" y="129" width="34" height="33" rx="13"/>', "torso-zone")}
      ${bodyZone("shoulders", '<path d="M122 154 Q101 154 86 173 L103 196 L128 182 Z"/><path d="M198 154 Q219 154 234 173 L217 196 L192 182 Z"/>', "torso-zone")}
      ${bodyZone("back", '<path d="M127 162 Q160 145 193 162 L199 248 Q160 263 121 248 Z"/>', "back-zone")}
      ${bodyZone("lowerBack", '<path d="M122 250 Q160 263 198 250 L188 307 Q160 319 132 307 Z"/>', "back-zone")}
      ${bodyZone("upperArms", '<path d="M87 174 L105 183 L91 248 L70 243 Z"/><path d="M233 174 L215 183 L229 248 L250 243 Z"/>', "limb-zone")}
      ${bodyZone("elbows", '<ellipse cx="79" cy="257" rx="14" ry="16"/><ellipse cx="241" cy="257" rx="14" ry="16"/>', "joint-zone")}
      ${bodyZone("forearms", '<path d="M70 270 L88 268 L75 326 L55 321 Z"/><path d="M250 270 L232 268 L245 326 L265 321 Z"/>', "limb-zone")}
      ${bodyZone("hands", '<path d="M53 321 Q67 316 78 329 L72 369 Q60 383 48 367 Z"/><path d="M267 321 Q253 316 242 329 L248 369 Q260 383 272 367 Z"/>', "limb-zone")}
      ${bodyZone("hips", `<path d="${hipsPath}"/>`, "abdomen-zone")}
      ${bodyZone("thighs", '<path d="M126 348 L153 348 L150 439 L119 439 Z"/><path d="M167 348 L194 348 L201 439 L170 439 Z"/>', "limb-zone")}
      ${bodyZone("knees", '<ellipse cx="135" cy="454" rx="17" ry="19"/><ellipse cx="185" cy="454" rx="17" ry="19"/>', "joint-zone")}
      ${bodyZone("legs", '<path d="M119 472 L150 472 L147 552 L122 552 Z"/><path d="M170 472 L201 472 L198 552 L173 552 Z"/>', "limb-zone")}
      ${bodyZone("feet", '<path d="M121 550 L148 550 L153 581 Q128 591 112 578 Z"/><path d="M172 550 L199 550 L208 578 Q192 591 167 581 Z"/>', "limb-zone")}
      <g class="body-detail">
        <path d="M160 165 L160 304"/>
        <path d="M135 210 Q160 228 185 210"/>
        <path d="M160 309 L160 344"/>
      </g>
      </g>
    </svg>
  `;
}

function renderSelectionItems() {
  const entries = Object.entries(bodySelections);
  if (!entries.length) {
    return '<div class="empty-selection">Chưa có vùng nào được chọn. Bấm vào một bộ phận trên mô hình để bắt đầu.</div>';
  }

  return entries.map(([partId, selection]) => {
    const part = findBodyPart(partId);
    return `
      <article class="body-selection-item">
        <button type="button" data-edit-part="${partId}">
          <span>${part.label}</span>
          <span aria-hidden="true">Sửa</span>
        </button>
        <p>${getSelectionSummary(selection)}</p>
      </article>
    `;
  }).join("");
}

function renderDiagnosisMarkup() {
  if (!diagnosis) return "";
  const ageProfile = getAgeProfile();

  return `
    <section class="body-diagnosis" id="bodyDiagnosis">
      <div class="diagnosis-head">
        <div>
          <span class="risk-chip ${diagnosis.level}">${diagnosis.label}</span>
          <h4>${diagnosis.title}</h4>
        </div>
        <span class="flow-badge">${patientAge} tuổi · ${ageProfile.label} · ${bodyGender === "female" ? "Nữ" : "Nam"}</span>
      </div>
      <p>${diagnosis.text}</p>
      <ul class="diagnosis-advice">
        ${diagnosis.advice.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <div class="diagnosis-actions">
        <button class="primary-action" type="button" data-send-doctor>Gửi tóm tắt cho bác sĩ</button>
        <button class="secondary-action" type="button" data-open-appointment>Đặt lịch khám</button>
        <button class="ghost-button" type="button" data-edit-body>Chỉnh lại triệu chứng</button>
      </div>
    </section>
  `;
}

function renderBodyTriage() {
  const selectedCount = Object.keys(bodySelections).length;
  const percent = diagnosis ? 100 : Math.min(12 + selectedCount * 14, 82);
  const ageProfile = getAgeProfile();

  flowBadge.textContent = diagnosis ? diagnosis.label : "Bản đồ cơ thể";
  stepEyebrow.textContent = "Kiểm tra trực quan";
  questionTitle.textContent = "Chọn vùng đang có triệu chứng";
  progressBar.style.width = `${percent}%`;

  triageBody.innerHTML = `
    <div class="body-triage-shell">
      <section class="body-intro">
        <div>
          <h4>Mô hình cơ thể · ${ageProfile.label} · ${bodyGender === "female" ? "Nữ" : "Nam"}</h4>
          <p>Di chuột để xem tên vùng. Bấm vào bộ phận đang khó chịu hoặc dùng danh sách chọn nhanh bên dưới.</p>
        </div>
        <div class="patient-controls">
          <div class="gender-control">
            <strong>Giới tính hình minh họa</strong>
            <div class="gender-toggle" role="group" aria-label="Chọn giới tính hình minh họa">
              <button class="gender-option ${bodyGender === "female" ? "active" : ""}" type="button" data-gender="female">Nữ</button>
              <button class="gender-option ${bodyGender === "male" ? "active" : ""}" type="button" data-gender="male">Nam</button>
            </div>
          </div>
          <label class="age-control" for="patientAgeRange">
            <span>
              <strong>Độ tuổi người bệnh</strong>
              <output id="patientAgeOutput">${patientAge} tuổi · ${ageProfile.label}</output>
            </span>
            <input type="range" id="patientAgeRange" min="1" max="100" value="${patientAge}">
          </label>
        </div>
      </section>

      <div class="body-map-layout">
        <section class="body-map-card">
          <div class="body-map-head">
            <div>
              <h4>Bản đồ triệu chứng</h4>
              <p>Xem cả mặt trước và mặt sau để chọn đúng khu vực.</p>
            </div>
            <span class="flow-badge">${selectedCount} vùng đã nhập</span>
          </div>
          <div class="body-view-grid">
            <div class="body-view">
              <span class="body-view-label">Mặt trước <small>${ageProfile.label}</small></span>
              ${renderFrontFigure()}
            </div>
            <div class="body-view">
              <span class="body-view-label">Mặt sau <small>${ageProfile.label}</small></span>
              ${renderBackFigure()}
            </div>
          </div>
          <div class="body-region-guide">
            <strong>Chọn nhanh khu vực</strong>
            <div class="body-region-chips">
              ${bodyParts.map((part) => `
                <button class="body-region-chip ${bodySelections[part.id] ? "active" : ""}" type="button" data-body-chip="${part.id}">
                  ${part.label}
                </button>
              `).join("")}
            </div>
          </div>
          <div class="body-hover-card" id="bodyHoverCard">
            <strong>Hướng dẫn</strong>
            <p>Di chuột vào một bộ phận để xem thông tin. Vùng đã lưu triệu chứng sẽ sáng lên.</p>
          </div>
        </section>

        <aside class="body-selection-card">
          <div class="selection-head">
            <div>
              <h4>Triệu chứng đã ghi nhận</h4>
              <p>Kiểm tra lại trước khi chẩn đoán ban đầu.</p>
            </div>
            <span class="selected-count">${selectedCount}</span>
          </div>
          <div class="body-selection-list">${renderSelectionItems()}</div>
          <div class="body-selection-actions">
            <button class="primary-action" type="button" data-diagnose ${selectedCount ? "" : "disabled"}>Chẩn đoán ban đầu</button>
            <button class="ghost-button" type="button" data-reset-body ${selectedCount ? "" : "disabled"}>Xóa toàn bộ lựa chọn</button>
          </div>
        </aside>
      </div>

      ${renderDiagnosisMarkup()}
    </div>
  `;

  triageBody.querySelectorAll("[data-body-part]").forEach((zone) => {
    const partId = zone.dataset.bodyPart;
    zone.addEventListener("mouseenter", () => updateHoverCard(partId));
    zone.addEventListener("mouseleave", () => updateHoverCard());
    zone.addEventListener("focus", () => updateHoverCard(partId));
    zone.addEventListener("blur", () => updateHoverCard());
    zone.addEventListener("click", () => openBodyPartModal(partId));
    zone.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openBodyPartModal(partId);
      }
    });
  });

  triageBody.querySelectorAll("[data-edit-part]").forEach((button) => {
    button.addEventListener("click", () => openBodyPartModal(button.dataset.editPart));
  });

  triageBody.querySelectorAll("[data-body-chip]").forEach((button) => {
    const partId = button.dataset.bodyChip;
    button.addEventListener("mouseenter", () => updateHoverCard(partId));
    button.addEventListener("mouseleave", () => updateHoverCard());
    button.addEventListener("focus", () => updateHoverCard(partId));
    button.addEventListener("blur", () => updateHoverCard());
    button.addEventListener("click", () => openBodyPartModal(partId));
  });

  triageBody.querySelectorAll("[data-gender]").forEach((button) => {
    button.addEventListener("click", () => {
      bodyGender = button.dataset.gender;
      diagnosis = null;
      renderBodyTriage();
    });
  });

  const ageRange = document.getElementById("patientAgeRange");
  const ageOutput = document.getElementById("patientAgeOutput");
  ageRange.addEventListener("input", () => {
    patientAge = Number(ageRange.value);
    ageOutput.textContent = `${patientAge} tuổi · ${getAgeProfile().label}`;
  });
  ageRange.addEventListener("change", () => {
    diagnosis = null;
    renderBodyTriage();
  });

  triageBody.querySelector("[data-diagnose]").addEventListener("click", () => {
    diagnosis = assessBodyRisk();
    renderBodyTriage();
    document.getElementById("bodyDiagnosis").scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  triageBody.querySelector("[data-reset-body]").addEventListener("click", resetBodyTriage);

  const sendDoctorButton = triageBody.querySelector("[data-send-doctor]");
  if (sendDoctorButton) sendDoctorButton.addEventListener("click", openConsultModal);

  const appointmentButton = triageBody.querySelector("[data-open-appointment]");
  if (appointmentButton) appointmentButton.addEventListener("click", () => setView("appointments"));

  const editBodyButton = triageBody.querySelector("[data-edit-body]");
  if (editBodyButton) {
    editBodyButton.addEventListener("click", () => {
      document.querySelector(".body-map-card").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function updateHoverCard(partId) {
  const hoverCard = document.getElementById("bodyHoverCard");
  if (!hoverCard) return;

  if (!partId) {
    hoverCard.innerHTML = `
      <strong>Hướng dẫn</strong>
      <p>Di chuột vào một bộ phận để xem thông tin. Vùng đã lưu triệu chứng sẽ sáng lên.</p>
    `;
    return;
  }

  const part = findBodyPart(partId);
  const selection = bodySelections[partId];
  hoverCard.innerHTML = selection
    ? `<strong>${part.label} · Đã ghi nhận</strong><p>${getSelectionSummary(selection)}</p>`
    : `<strong>${part.label}</strong><p>${part.hint}. Bấm để chọn triệu chứng.</p>`;
}

function renderSymptomChoices() {
  const part = findBodyPart(activeBodyPartId);
  symptomChoices.innerHTML = part.symptoms.map((symptom) => `
    <button class="symptom-choice ${draftSymptoms.has(symptom) ? "active" : ""}" type="button" data-symptom="${symptom}">
      ${symptom}
    </button>
  `).join("");

  symptomChoices.querySelectorAll("[data-symptom]").forEach((button) => {
    button.addEventListener("click", () => {
      const symptom = button.dataset.symptom;
      if (draftSymptoms.has(symptom)) {
        draftSymptoms.delete(symptom);
      } else {
        draftSymptoms.add(symptom);
      }
      button.classList.toggle("active", draftSymptoms.has(symptom));
    });
  });
}

function openBodyPartModal(partId) {
  const part = findBodyPart(partId);
  const savedSelection = bodySelections[partId];
  activeBodyPartId = partId;
  draftSymptoms = new Set(savedSelection ? savedSelection.symptoms : []);
  durationRange.value = savedSelection ? savedSelection.duration : 1;
  durationOutput.textContent = getDurationLabel(durationRange.value);
  bodyPartTitle.textContent = part.label;
  removeBodyPart.hidden = !savedSelection;
  renderSymptomChoices();
  bodyPartModal.classList.add("show");
  bodyPartModal.setAttribute("aria-hidden", "false");
}

function closeBodyPartModal() {
  bodyPartModal.classList.remove("show");
  bodyPartModal.setAttribute("aria-hidden", "true");
  activeBodyPartId = null;
  draftSymptoms = new Set();
}

function saveActiveBodyPart() {
  if (!activeBodyPartId || !draftSymptoms.size) {
    showToast("Chưa chọn triệu chứng", "Hãy chọn ít nhất một triệu chứng trước khi xác nhận.");
    return;
  }

  const part = findBodyPart(activeBodyPartId);
  bodySelections[activeBodyPartId] = {
    duration: Number(durationRange.value),
    symptoms: Array.from(draftSymptoms)
  };
  diagnosis = null;
  closeBodyPartModal();
  renderBodyTriage();
  showToast("Đã ghi nhận triệu chứng", `${part.label}: ${bodySelections[part.id].symptoms.join(", ")}.`);
}

function removeActiveBodyPart() {
  if (!activeBodyPartId || !bodySelections[activeBodyPartId]) {
    closeBodyPartModal();
    return;
  }

  const part = findBodyPart(activeBodyPartId);
  delete bodySelections[activeBodyPartId];
  diagnosis = null;
  closeBodyPartModal();
  renderBodyTriage();
  showToast("Đã xóa vùng triệu chứng", `${part.label} đã được đưa ra khỏi bản tổng hợp.`);
}

function resetBodyTriage() {
  Object.keys(bodySelections).forEach((key) => delete bodySelections[key]);
  patientAge = 30;
  bodyGender = "female";
  diagnosis = null;
  renderBodyTriage();
  showToast("Đã làm mới kiểm tra", "Bạn có thể chọn lại các bộ phận đang khó chịu.");
}

function assessBodyRisk() {
  const entries = Object.entries(bodySelections);
  const symptoms = entries.flatMap(([, selection]) => selection.symptoms);
  const selectedIds = entries.map(([partId]) => partId);
  const maxDuration = Math.max(...entries.map(([, selection]) => selection.duration));
  const reasons = [];
  let score = 0;

  const urgentSymptoms = [
    "Méo miệng",
    "Khó thở",
    "Đau thắt ngực",
    "Đau lan xuống tay",
    "Nôn liên tục"
  ];
  const foundUrgent = urgentSymptoms.filter((symptom) => symptoms.includes(symptom));

  if (foundUrgent.length) {
    score += 5;
    reasons.push(`có dấu hiệu cần thận trọng: ${foundUrgent.join(", ")}`);
  }

  if (selectedIds.includes("heart") || selectedIds.includes("chest")) {
    score += 1;
    reasons.push("có triệu chứng vùng tim hoặc hô hấp");
  }

  if (maxDuration >= 7) {
    score += 2;
    reasons.push("triệu chứng kéo dài từ 7 ngày");
  } else if (maxDuration >= 3) {
    score += 1;
    reasons.push("triệu chứng kéo dài từ 3 ngày");
  }

  if (entries.length >= 3) {
    score += 1;
    reasons.push("triệu chứng xuất hiện tại nhiều vùng");
  }

  if (patientAge <= 12 || patientAge >= 65) {
    score += 1;
    reasons.push("độ tuổi cần theo dõi sát hơn");
  }

  if (score >= 5) {
    return {
      level: "high",
      label: "Nguy cơ cao",
      title: "Nên liên hệ cơ sở y tế sớm",
      text: `Docah ghi nhận ${reasons.join("; ")}. Đây là sàng lọc ban đầu, không thay thế chẩn đoán của bác sĩ.`,
      advice: [
        "Ưu tiên đến cơ sở y tế gần nhất nếu triệu chứng đang tăng nhanh.",
        "Không chờ tư vấn trực tuyến nếu có khó thở, đau ngực, yếu liệt hoặc lơ mơ.",
        "Có thể gửi bản tóm tắt để bác sĩ nắm nhanh tình trạng."
      ]
    };
  }

  if (score >= 2) {
    return {
      level: "medium",
      label: "Cần theo dõi",
      title: "Nên gửi bác sĩ hoặc đặt lịch khám",
      text: `Docah ghi nhận ${reasons.join("; ")}. Bạn nên trao đổi với bác sĩ để được hỏi thêm và đánh giá phù hợp.`,
      advice: [
        "Theo dõi mức đau, nhiệt độ và thay đổi triệu chứng trong ngày.",
        "Chuẩn bị thông tin thuốc đang dùng hoặc bệnh nền nếu có.",
        "Gửi bản tóm tắt cho bác sĩ gia đình để được tư vấn thêm."
      ]
    };
  }

  return {
    level: "low",
    label: "Mức độ nhẹ",
    title: "Có thể tiếp tục theo dõi tại nhà",
    text: "Chưa ghi nhận dấu hiệu nguy hiểm rõ ràng từ các triệu chứng đã nhập. Bạn vẫn nên cập nhật lại nếu tình trạng thay đổi.",
    advice: [
      "Nghỉ ngơi, uống đủ nước và theo dõi diễn biến trong 24 đến 48 giờ.",
      "Kiểm tra lại nếu triệu chứng kéo dài hoặc xuất hiện thêm vùng khó chịu.",
      "Gửi bác sĩ khi cần giải thích kỹ hơn hoặc muốn được tư vấn sớm."
    ]
  };
}

function openPaidModal() {
  paidModal.classList.add("show");
  paidModal.setAttribute("aria-hidden", "false");
}

function closePaidModal() {
  paidModal.classList.remove("show");
  paidModal.setAttribute("aria-hidden", "true");
}

function openConsultModal() {
  modalMode = "consult";
  pendingAppointment = null;
  modalEyebrow.textContent = "Lựa chọn tư vấn";
  paidTitle.textContent = "Chuyển sang bác sĩ gia đình?";
  paidCopy.textContent = "Đây là bước trả phí vì cần bác sĩ đọc tóm tắt triệu chứng theo từng bộ phận, đánh giá bối cảnh cá nhân và hỏi thêm khi thông tin chưa đủ. Bạn có thể bỏ qua và tiếp tục theo dõi miễn phí.";
  confirmPaid.textContent = "Gửi tóm tắt cho bác sĩ - 80.000đ";
  stayFree.textContent = "Tiếp tục với hướng dẫn miễn phí";
  openPaidModal();
}

function openBookingModal(button) {
  const doctor = button.dataset.doctor || "Phòng khám ABC";
  const time = button.dataset.time || "khung giờ đã chọn";

  modalMode = "booking";
  pendingAppointment = { doctor, time };
  modalEyebrow.textContent = "Xác nhận đặt lịch";
  paidTitle.textContent = "Bạn muốn đặt lịch khám này?";
  paidCopy.textContent = `${doctor} còn lịch ${time}. Sau khi xác nhận, Docah sẽ ghi nhận lịch hẹn và nhắc bạn trước giờ khám.`;
  confirmPaid.textContent = "Đặt lịch khám";
  stayFree.textContent = "Để tôi chọn lại";
  openPaidModal();
}

function showToast(title, message) {
  toastTitle.textContent = title;
  toastMessage.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3600);
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => setView(link.dataset.view));
});

document.querySelectorAll("[data-start-triage]").forEach((button) => {
  button.addEventListener("click", () => setView("triage"));
});

document.querySelectorAll("[data-open-paid]").forEach((button) => {
  button.addEventListener("click", openConsultModal);
});

document.querySelectorAll("[data-plan-view]").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.planView));
});

document.querySelectorAll("[data-book-appointment]").forEach((button) => {
  button.addEventListener("click", () => openBookingModal(button));
});

const historyDetailModal = document.getElementById("historyDetailModal");
const historyDetailBody = document.getElementById("historyDetailBody");
const historyRows = Array.from(document.querySelectorAll("[data-history-row]"));
const historySearch = document.getElementById("historySearch");
const historyRiskFilter = document.getElementById("historyRiskFilter");
const historyEmpty = document.getElementById("historyEmpty");
const historyDetails = {
  fever: {
    title: "Sốt và đau họng",
    risk: "Trung bình",
    date: "22/05/2026",
    symptoms: "Sốt nhẹ, đau họng, khó chịu khi nuốt trong khoảng 2 ngày.",
    advice: "Theo dõi nhiệt độ, uống đủ nước và đặt lịch gặp bác sĩ nếu sốt trên 38.5 độ kéo dài sau 48 giờ.",
    nextStep: "Có thể đặt lịch bác sĩ gia đình nếu triệu chứng chưa giảm."
  },
  fatigue: {
    title: "Mệt mỏi nhẹ",
    risk: "Thấp",
    date: "18/05/2026",
    symptoms: "Mệt nhẹ sau thời gian thiếu ngủ, chưa ghi nhận dấu hiệu nguy hiểm.",
    advice: "Theo dõi tại nhà, ngủ bù đủ, uống nước và cập nhật nếu tình trạng nặng lên.",
    nextStep: "Tiếp tục theo dõi tại nhà."
  }
};

function renderHistoryFilters() {
  if (!historyRows.length) return;
  const term = (historySearch?.value || "").trim().toLowerCase();
  const risk = historyRiskFilter?.value || "all";
  let visibleCount = 0;
  historyRows.forEach((row) => {
    const matchesTerm = (row.dataset.search || "").toLowerCase().includes(term);
    const matchesRisk = risk === "all" || row.dataset.risk === risk;
    row.hidden = !matchesTerm || !matchesRisk;
    if (!row.hidden) visibleCount += 1;
  });
  if (historyEmpty) historyEmpty.hidden = visibleCount !== 0;
}

function openHistoryDetail(historyId) {
  const detail = historyDetails[historyId];
  if (!historyDetailModal || !historyDetailBody || !detail) return;
  historyDetailBody.innerHTML = `
    <h3 id="historyDetailTitle">${detail.title}</h3>
    <div class="history-detail-meta"><span>Mức độ: ${detail.risk}</span><span>${detail.date}</span></div>
    <section><strong>Triệu chứng đã ghi nhận</strong><p>${detail.symptoms}</p></section>
    <section><strong>Lời khuyên từ Docah</strong><p>${detail.advice}</p></section>
    <section><strong>Bước tiếp theo</strong><p>${detail.nextStep}</p></section>
  `;
  historyDetailModal.classList.add("show");
  historyDetailModal.setAttribute("aria-hidden", "false");
}

function closeHistoryDetail() {
  if (!historyDetailModal) return;
  historyDetailModal.classList.remove("show");
  historyDetailModal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll("[data-history-detail]").forEach((button) => {
  button.addEventListener("click", () => openHistoryDetail(button.dataset.historyDetail));
});
historySearch?.addEventListener("input", renderHistoryFilters);
historyRiskFilter?.addEventListener("change", renderHistoryFilters);
document.getElementById("closeHistoryDetail")?.addEventListener("click", closeHistoryDetail);
historyDetailModal?.addEventListener("click", (event) => {
  if (event.target === historyDetailModal) closeHistoryDetail();
});

const customerChatInput = document.getElementById("customerChatInput");
const sendCustomerChat = document.getElementById("sendCustomerChat");
const customerChatHistory = document.getElementById("customerChatHistory");
const customerChatHead = document.getElementById("customerChatHead");
const customerChatList = document.getElementById("customerChatList");
const customerChatSearch = document.getElementById("customerChatSearch");
const customerChatTypeFilter = document.getElementById("customerChatTypeFilter");
const customerConversations = [
  {
    id: 1,
    doctor: "BS. Trần Hoài An",
    avatar: "AN",
    avatarClass: "",
    specialty: "Nội tổng quát",
    patient: "Nguyễn Minh Anh",
    status: "Online",
    type: "prescription",
    typeLabel: "Kê đơn thuốc",
    messages: [
      { sender: "doctor", text: "Chào bạn, tôi đã nhận được tóm tắt sàng lọc. Bạn đang khó chịu nhiều nhất ở vùng nào?", time: "09:12" },
      { sender: "user", text: "Tôi bị đau đầu và hơi chóng mặt từ hôm qua.", time: "09:14" },
      { sender: "doctor", text: "Bạn chưa có dấu hiệu nguy hiểm. Tôi kê đơn ngắn hạn để giảm triệu chứng và sẽ theo dõi thêm.", time: "09:18" },
      {
        sender: "doctor",
        type: "prescription",
        time: "09:19",
        title: "Đơn thuốc tham khảo · BS. Trần Hoài An",
        medicines: [
          "Paracetamol 500mg · Uống 1 viên khi đau đầu, tối đa 3 viên/ngày.",
          "Oresol · Pha đúng hướng dẫn, uống từng ngụm nhỏ nếu mệt hoặc mất nước."
        ],
        note: "Không tự tăng liều. Nếu đau đầu dữ dội, nôn liên tục hoặc yếu liệt, hãy đến cơ sở y tế."
      }
    ]
  },
  {
    id: 2,
    doctor: "BS. Lê Minh Phương",
    avatar: "MP",
    avatarClass: "green",
    specialty: "Chăm sóc gia đình",
    patient: "Bé Gia Hân",
    status: "Phản hồi 10 phút trước",
    type: "normal",
    typeLabel: "Chat thường",
    messages: [
      { sender: "user", text: "Bé hơi ho và nghẹt mũi từ tối qua, chưa sốt.", time: "08:40" },
      { sender: "doctor", text: "Bạn cho bé uống đủ nước, vệ sinh mũi bằng nước muối sinh lý và theo dõi nhiệt độ. Nếu bé khó thở hoặc sốt cao, hãy đưa bé đi khám.", time: "08:47" }
    ]
  },
  {
    id: 3,
    doctor: "BS. Phạm Quốc Huy",
    avatar: "QH",
    avatarClass: "amber",
    specialty: "Nội cơ xương khớp",
    patient: "Nguyễn Minh Anh",
    status: "Tái khám ngày mai",
    type: "follow-up",
    typeLabel: "Tái khám",
    messages: [
      { sender: "doctor", type: "follow-up", text: "Bạn cập nhật giúp tôi mức đau lưng sau 5 ngày tập vận động nhẹ.", time: "17:05" },
      { sender: "user", type: "follow-up", text: "Tình trạng đã giảm, nhưng tôi vẫn đau khi ngồi lâu.", time: "17:11" },
      { sender: "doctor", type: "follow-up", text: "Tốt. Bạn tiếp tục vận động nhẹ và quay lại tái khám ngày mai để tôi đánh giá tư thế.", time: "17:14" }
    ]
  }
];
let activeCustomerConversationId = 1;

function escapeCustomerChatText(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[character]));
}

function renderCustomerChatMessage(message) {
  if (message.type === "prescription") {
    return `<article class="customer-prescription-card">
      <div class="prescription-card-head"><span>💊</span><strong>${escapeCustomerChatText(message.title)}</strong></div>
      <ul>${message.medicines.map((medicine) => `<li>${escapeCustomerChatText(medicine)}</li>`).join("")}</ul>
      <p>${escapeCustomerChatText(message.note)}</p>
      <small>${escapeCustomerChatText(message.time)}</small>
    </article>`;
  }
  return `<article class="customer-message ${message.sender}"><p>${escapeCustomerChatText(message.text)}</p><small>${escapeCustomerChatText(message.time)}</small></article>`;
}

function renderCustomerChat() {
  if (!customerChatList || !customerChatHistory || !customerChatHead) return;
  const term = (customerChatSearch?.value || "").trim().toLowerCase();
  const type = customerChatTypeFilter?.value || "all";
  const filtered = customerConversations.filter((conversation) => {
    return `${conversation.doctor} ${conversation.patient} ${conversation.specialty}`.toLowerCase().includes(term);
  });

  customerChatList.innerHTML = filtered.length ? filtered.map((conversation) => `
    <button class="customer-doctor-item ${conversation.id === activeCustomerConversationId ? "active" : ""}" type="button" data-customer-chat="${conversation.id}">
      <span class="doctor-avatar ${conversation.avatarClass}">${conversation.avatar}</span>
      <span><strong>${conversation.doctor}</strong><small>${conversation.patient} · ${conversation.typeLabel}</small></span>
    </button>
  `).join("") : '<div class="customer-chat-empty">Không tìm thấy đoạn chat phù hợp.</div>';

  customerChatList.querySelectorAll("[data-customer-chat]").forEach((button) => {
    button.addEventListener("click", () => {
      activeCustomerConversationId = Number(button.dataset.customerChat);
      renderCustomerChat();
    });
  });

  let active = customerConversations.find((conversation) => conversation.id === activeCustomerConversationId);
  if (filtered.length && !filtered.some((conversation) => conversation.id === activeCustomerConversationId)) {
    active = filtered[0];
    activeCustomerConversationId = active.id;
    renderCustomerChat();
    return;
  }

  if (!active) return;
  customerChatHead.innerHTML = `<strong>${active.doctor}</strong><small>${active.specialty} · ${active.status}</small><span class="conversation-type ${active.type}">${active.typeLabel}</span>`;
  const filteredMessages = active.messages.filter((message) => type === "all" || (message.type || "normal") === type);
  customerChatHistory.innerHTML = filteredMessages.length
    ? filteredMessages.map(renderCustomerChatMessage).join("")
    : '<div class="customer-chat-empty">Không có tin nhắn thuộc loại này trong cuộc trò chuyện đang mở.</div>';
  customerChatHistory.scrollTop = customerChatHistory.scrollHeight;
}

if (customerChatInput && sendCustomerChat && customerChatHistory && customerChatList) {
  const sendCustomerMessage = () => {
    const message = customerChatInput.value.trim();
    if (!message) return;
    const time = new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });
    const active = customerConversations.find((conversation) => conversation.id === activeCustomerConversationId);
    if (!active) return;
    active.messages.push({ sender: "user", type: "normal", text: message, time });
    customerChatInput.value = "";
    renderCustomerChat();
  };
  sendCustomerChat.addEventListener("click", sendCustomerMessage);
  customerChatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendCustomerMessage();
    }
  });
  customerChatSearch.addEventListener("input", renderCustomerChat);
  customerChatTypeFilter.addEventListener("change", renderCustomerChat);
  renderCustomerChat();
}

const customerReportForm = document.getElementById("customerReportForm");
const doctorRatingForm = document.getElementById("doctorRatingForm");
const doctorRatingList = document.getElementById("doctorRatingList");
const doctorRatingTotal = document.getElementById("doctorRatingTotal");
const doctorRatingAverage = document.getElementById("doctorRatingAverage");
const doctorRatingPositive = document.getElementById("doctorRatingPositive");
const doctorRatingNeeds = document.getElementById("doctorRatingNeeds");

function renderRatingStars(score) {
  const rating = Number(score);
  return `${"★".repeat(rating)}${"☆".repeat(5 - rating)}`;
}

function updateDoctorRatingStats() {
  if (!doctorRatingList || !doctorRatingTotal || !doctorRatingAverage || !doctorRatingPositive || !doctorRatingNeeds) return;
  const items = Array.from(doctorRatingList.querySelectorAll("[data-rating-item]"));
  const total = items.length;
  const ratings = items.map((item) => Number(item.dataset.rating || 0));
  const average = total ? (ratings.reduce((sum, value) => sum + value, 0) / total).toFixed(1) : "0.0";
  const positive = items.filter((item) => item.dataset.sentiment === "Tích cực").length;
  const needs = items.filter((item) => Number(item.dataset.rating || 0) <= 3 || item.dataset.sentiment !== "Tích cực").length;
  doctorRatingTotal.textContent = String(total);
  doctorRatingAverage.textContent = `${average} ★`;
  doctorRatingPositive.textContent = String(positive);
  doctorRatingNeeds.textContent = String(needs);
}

if (doctorRatingForm && doctorRatingList) {
  updateDoctorRatingStats();
  doctorRatingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const doctor = document.getElementById("ratingDoctor").value;
    const consultType = document.getElementById("ratingConsultType").value;
    const score = document.getElementById("ratingScore").value;
    const sentiment = document.getElementById("ratingSentiment").value;
    const comment = document.getElementById("ratingComment").value.trim();
    if (!comment) return;
    const badgeClass = sentiment === "Tích cực" ? "success" : sentiment === "Tiêu cực" ? "danger" : "warning";
    const itemClass = Number(score) <= 3 || sentiment !== "Tích cực" ? "doctor-rating-item needs" : "doctor-rating-item";
    doctorRatingList.insertAdjacentHTML("afterbegin", `
      <article class="${itemClass}" data-rating-item data-rating="${score}" data-sentiment="${sentiment}">
        <div class="rating-item-head">
          <div>
            <strong>${doctor}</strong>
            <span class="rating-badge ${badgeClass}">${sentiment}</span>
            <span class="rating-badge">${consultType}</span>
          </div>
          <span class="rating-stars">${renderRatingStars(score)}</span>
        </div>
        <p>${escapeCustomerChatText(comment)}</p>
        <div class="rating-ai-note"><small>Ghi nhận chất lượng</small><span>Phản hồi mới từ khách hàng, đã chuyển vào danh sách đánh giá bác sĩ.</span></div>
      </article>
    `);
    doctorRatingForm.reset();
    updateDoctorRatingStats();
    showToast("Đã gửi đánh giá bác sĩ", "Cảm ơn bạn. Phản hồi của bạn đã được ghi nhận để cải thiện chất lượng tư vấn.");
  });
}

if (customerReportForm) {
  customerReportForm.addEventListener("submit", (event) => {
    event.preventDefault();
    customerReportForm.reset();
    showToast("Đã gửi phản hồi", "Cảm ơn bạn. Đội ngũ Docah sẽ xem xét báo cáo UI/UX và đề xuất của bạn.");
  });
}

durationRange.addEventListener("input", () => {
  durationOutput.textContent = getDurationLabel(durationRange.value);
});

saveBodyPart.addEventListener("click", saveActiveBodyPart);
removeBodyPart.addEventListener("click", removeActiveBodyPart);
document.getElementById("closeBodyPart").addEventListener("click", closeBodyPartModal);
bodyPartModal.addEventListener("click", (event) => {
  if (event.target === bodyPartModal) closeBodyPartModal();
});

saveProfile.addEventListener("click", () => {
  syncCustomerAccountName(profileInputs[0]?.value);
  showToast("Cập nhật hồ sơ thành công", "Thông tin cá nhân và sức khỏe đã được lưu trên màn hình.");
});

resetProfile.addEventListener("click", () => {
  profileInputs.forEach((input, index) => {
    input.value = initialProfileValues[index];
  });
  syncCustomerAccountName(profileInputs[0]?.value);
  showToast("Đã hoàn tác chỉnh sửa", "Hồ sơ đã quay về thông tin ban đầu.");
});

document.getElementById("saveAccountInfo").addEventListener("click", () => {
  showToast("Đã lưu thông tin tài khoản", "Email và số điện thoại liên hệ đã được cập nhật.");
});

document.getElementById("changeCustomerPassword").addEventListener("click", () => {
  const currentPassword = document.getElementById("customerCurrentPassword");
  const newPassword = document.getElementById("customerNewPassword");
  const confirmPassword = document.getElementById("customerConfirmPassword");
  if (!currentPassword.value || newPassword.value.length < 8 || newPassword.value !== confirmPassword.value) {
    showToast("Chưa thể đổi mật khẩu", "Hãy nhập mật khẩu hiện tại, mật khẩu mới tối thiểu 8 ký tự và xác nhận trùng khớp.");
    return;
  }
  currentPassword.value = "";
  newPassword.value = "";
  confirmPassword.value = "";
  showToast("Đổi mật khẩu thành công", "Mật khẩu mới của bạn đã được cập nhật.");
});

document.querySelectorAll("[data-toggle-password]").forEach((button) => {
  button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.togglePassword);
    if (!input) return;
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    button.textContent = isHidden ? "🙈" : "👁";
    button.setAttribute("aria-label", isHidden ? "Ẩn mật khẩu" : "Hiện mật khẩu");
    button.setAttribute("title", isHidden ? "Ẩn mật khẩu" : "Hiện mật khẩu");
    input.focus();
  });
});

document.getElementById("closePaid").addEventListener("click", closePaidModal);
stayFree.addEventListener("click", closePaidModal);
confirmPaid.addEventListener("click", () => {
  if (modalMode === "booking" && pendingAppointment) {
    const { doctor, time } = pendingAppointment;
    closePaidModal();
    showToast("Đặt lịch thành công", `${doctor} đã nhận lịch hẹn ${time}. Docah sẽ nhắc bạn trước giờ khám.`);
    return;
  }

  closePaidModal();
  showToast("Đã gửi yêu cầu tư vấn", "Bác sĩ gia đình sẽ nhận tóm tắt và phản hồi trong thời gian sớm nhất.");
});
paidModal.addEventListener("click", (event) => {
  if (event.target === paidModal) closePaidModal();
});

accountToggle.addEventListener("click", () => {
  const isOpen = accountDropdown.classList.toggle("show");
  accountToggle.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (event) => {
  if (!accountToggle.contains(event.target) && !accountDropdown.contains(event.target)) {
    accountDropdown.classList.remove("show");
    accountToggle.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeBodyPartModal();
  closeHistoryDetail();
  closePaidModal();
});

logoutButton.addEventListener("click", () => {
  window.location.href = "../index.html";
});

renderBodyTriage();
