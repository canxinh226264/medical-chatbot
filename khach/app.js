const questions = [
  {
    id: "patient",
    label: "Người cần hỗ trợ",
    title: "Bạn đang kiểm tra tình trạng cho ai?",
    copy: "Chọn đối tượng để Docah điều chỉnh cách hỏi và mức cảnh báo phù hợp.",
    options: [
      { value: "Bản thân tôi", detail: "Người lớn có thể tự trả lời" },
      { value: "Người thân", detail: "Bạn đang hỗ trợ một thành viên gia đình" },
      { value: "Trẻ em", detail: "Cần thận trọng hơn với dấu hiệu sốt, bỏ bú, khó thở" },
      { value: "Người cao tuổi", detail: "Cần lưu ý bệnh nền và thuốc đang dùng" }
    ]
  },
  {
    id: "symptom",
    label: "Triệu chứng chính",
    title: "Triệu chứng làm bạn lo nhất là gì?",
    copy: "Hãy chọn triệu chứng nổi bật nhất hiện tại. Các triệu chứng phụ sẽ được ghi nhận sau.",
    options: [
      { value: "Sốt hoặc ớn lạnh", detail: "Có thể kèm đau đầu, đau mỏi cơ" },
      { value: "Ho, đau họng", detail: "Có ho khan, ho đờm, khàn tiếng" },
      { value: "Đau bụng, buồn nôn", detail: "Khó chịu vùng bụng hoặc rối loạn tiêu hóa" },
      { value: "Đau ngực hoặc khó thở", detail: "Cần đánh giá cẩn thận hơn" },
      { value: "Chóng mặt, mệt mỏi", detail: "Mệt, choáng, thiếu năng lượng" },
      { value: "Khác hoặc chưa rõ", detail: "Chưa xác định được triệu chứng chính" }
    ]
  },
  {
    id: "duration",
    label: "Thời gian",
    title: "Tình trạng này đã kéo dài bao lâu?",
    copy: "Thời gian xuất hiện giúp phân biệt theo dõi tại nhà hay cần hẹn bác sĩ.",
    options: [
      { value: "Mới xuất hiện trong hôm nay", detail: "Dưới 24 giờ" },
      { value: "1 đến 2 ngày", detail: "Đang theo dõi được nếu không nặng lên" },
      { value: "3 đến 5 ngày", detail: "Nên cân nhắc gặp bác sĩ nếu không giảm" },
      { value: "Trên 5 ngày", detail: "Cần đánh giá kỹ hơn" }
    ]
  },
  {
    id: "severity",
    label: "Mức độ",
    title: "Mức độ khó chịu hiện tại như thế nào?",
    copy: "Chọn mức gần nhất với cảm nhận của bạn, không cần đánh giá quá chính xác.",
    options: [
      { value: "Nhẹ", detail: "Vẫn sinh hoạt gần như bình thường" },
      { value: "Vừa", detail: "Bị ảnh hưởng sinh hoạt, cần nghỉ ngơi" },
      { value: "Nặng", detail: "Khó sinh hoạt, đau nhiều hoặc rất mệt" }
    ]
  },
  {
    id: "redFlag",
    label: "Dấu hiệu nguy hiểm",
    title: "Có dấu hiệu nào dưới đây không?",
    copy: "Nếu có dấu hiệu nguy hiểm, Docah sẽ ưu tiên gợi ý đi cấp cứu hoặc đến bệnh viện.",
    options: [
      { value: "Không có dấu hiệu nào", detail: "Chưa ghi nhận dấu hiệu cần can thiệp ngay" },
      { value: "Khó thở, tím tái hoặc đau ngực", detail: "Cần được đánh giá y tế sớm" },
      { value: "Lơ mơ, co giật hoặc yếu liệt", detail: "Dấu hiệu thần kinh cần lưu ý" },
      { value: "Đau dữ dội, nôn liên tục", detail: "Nguy cơ mất nước hoặc tình trạng nặng" },
      { value: "Sốt cao trên 39 độ", detail: "Đặc biệt cẩn thận với trẻ em, người cao tuổi" }
    ]
  },
  {
    id: "background",
    label: "Bối cảnh sức khỏe",
    title: "Người bệnh có bệnh nền hoặc yếu tố đặc biệt không?",
    copy: "Thông tin này giúp giải thích vì sao hệ thống có thể gợi ý gặp bác sĩ sớm hơn.",
    options: [
      { value: "Không có hoặc chưa biết", detail: "Chưa ghi nhận yếu tố nguy cơ" },
      { value: "Đang mang thai", detail: "Cần tham vấn y tế thận trọng hơn" },
      { value: "Có bệnh nền mạn tính", detail: "Tim mạch, tiểu đường, hen, thận, gan..." },
      { value: "Đang dùng thuốc dài ngày", detail: "Cần bác sĩ xem xét tương tác và bối cảnh" },
      { value: "Trẻ nhỏ hoặc người cao tuổi", detail: "Nhóm cần theo dõi sát hơn" }
    ]
  }
];

const answers = {};
let currentStep = 0;

const navLinks = document.querySelectorAll(".nav-link");
const views = document.querySelectorAll(".view");
const triageBody = document.getElementById("triageBody");
const questionTitle = document.getElementById("questionTitle");
const stepEyebrow = document.getElementById("stepEyebrow");
const progressBar = document.getElementById("progressBar");
const flowBadge = document.getElementById("flowBadge");
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
const profileInputs = Array.from(document.querySelectorAll("#view-profile input"));
let toastTimer;
let modalMode = "consult";
let pendingAppointment = null;
const initialProfileValues = profileInputs.map((input) => input.value);

function setView(name) {
  views.forEach((view) => view.classList.toggle("active", view.id === `view-${name}`));
  navLinks.forEach((link) => link.classList.toggle("active", link.dataset.view === name));
}

function renderQuestion() {
  const question = questions[currentStep];
  const percent = (currentStep / questions.length) * 100;

  flowBadge.textContent = "Sàng lọc miễn phí";
  stepEyebrow.textContent = `Bước ${currentStep + 1} / ${questions.length}`;
  questionTitle.textContent = question.title;
  progressBar.style.width = `${percent}%`;

  triageBody.innerHTML = `
    <p class="question-copy">${question.copy}</p>
    <div class="quick-grid">
      ${question.options.map((option) => `
        <button class="quick-option" type="button" data-value="${option.value}">
          <span>
            <strong>${option.value}</strong>
            <small>${option.detail}</small>
          </span>
        </button>
      `).join("")}
    </div>
    <div class="back-row">
      <button class="ghost-button" type="button" data-back ${currentStep === 0 ? "disabled" : ""}>Quay lại</button>
      <button class="secondary-action" type="button" data-reset>Làm lại từ đầu</button>
    </div>
  `;

  triageBody.querySelectorAll(".quick-option").forEach((button) => {
    button.addEventListener("click", () => {
      answers[question.id] = button.dataset.value;
      showToast("Đã ghi nhận câu trả lời", `${question.label}: ${button.dataset.value}`);
      if (currentStep < questions.length - 1) {
        currentStep += 1;
        renderQuestion();
      } else {
        renderSummary();
      }
    });
  });

  triageBody.querySelector("[data-back]").addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep -= 1;
      renderQuestion();
    }
  });

  triageBody.querySelector("[data-reset]").addEventListener("click", resetTriage);
}

function renderSummary() {
  flowBadge.textContent = "Xác nhận thông tin";
  stepEyebrow.textContent = "Tóm tắt";
  questionTitle.textContent = "Docah đã hiểu tình trạng của bạn như sau";
  progressBar.style.width = "88%";

  triageBody.innerHTML = `
    <p class="question-copy">Hãy xem lại trước khi nhận gợi ý. Việc xác nhận này giúp giảm sai sót và giúp bác sĩ đọc nhanh hơn nếu bạn muốn tư vấn chuyên sâu.</p>
    <div class="summary-list">
      ${questions.map((question) => `
        <div class="summary-row">
          <span>${question.label}</span>
          <strong>${answers[question.id] || "Chưa có thông tin"}</strong>
        </div>
      `).join("")}
    </div>
    <div class="back-row">
      <button class="ghost-button" type="button" data-edit>Chỉnh lại</button>
      <button class="primary-action" type="button" data-result>Xem gợi ý ban đầu</button>
    </div>
  `;

  triageBody.querySelector("[data-edit]").addEventListener("click", () => {
    currentStep = 0;
    renderQuestion();
  });
  triageBody.querySelector("[data-result]").addEventListener("click", renderResult);
}

function assessRisk() {
  let score = 0;
  const reasons = [];
  const redFlag = answers.redFlag || "";
  const severity = answers.severity || "";
  const duration = answers.duration || "";
  const background = answers.background || "";
  const symptom = answers.symptom || "";
  const patient = answers.patient || "";

  if (redFlag !== "Không có dấu hiệu nào") {
    score += 5;
    reasons.push("có dấu hiệu cần đánh giá y tế sớm");
  }

  if (severity === "Nặng") {
    score += 3;
    reasons.push("mức độ khó chịu nặng");
  } else if (severity === "Vừa") {
    score += 1;
    reasons.push("triệu chứng ảnh hưởng sinh hoạt");
  }

  if (duration === "3 đến 5 ngày") {
    score += 1;
    reasons.push("triệu chứng đã kéo dài trên 3 ngày");
  }

  if (duration === "Trên 5 ngày") {
    score += 2;
    reasons.push("triệu chứng kéo dài hơn 5 ngày");
  }

  if (background !== "Không có hoặc chưa biết") {
    score += 1;
    reasons.push("có yếu tố sức khỏe cần thận trọng");
  }

  if (symptom === "Đau ngực hoặc khó thở") {
    score += 2;
    reasons.push("triệu chứng liên quan hô hấp hoặc tim mạch");
  }

  if (patient === "Trẻ em" || patient === "Người cao tuổi") {
    score += 1;
    reasons.push("thuộc nhóm cần theo dõi sát hơn");
  }

  if (score >= 5) {
    return {
      level: "high",
      label: "High risk",
      title: "Nên đi bệnh viện hoặc liên hệ cấp cứu",
      text: `Hệ thống xếp nguy cơ cao vì ${reasons.join(", ")}. Vui lòng ưu tiên an toàn và không chờ tư vấn trực tuyến nếu tình trạng đang nặng lên.`,
      recommended: "hospital"
    };
  }

  if (score >= 2) {
    return {
      level: "medium",
      label: "Medium risk",
      title: "Nên đặt lịch gặp bác sĩ gia đình",
      text: `Hệ thống xếp nguy cơ trung bình vì ${reasons.join(", ")}. Bác sĩ có thể hỏi thêm, xem bối cảnh và quyết định có cần khám trực tiếp hay không.`,
      recommended: "doctor"
    };
  }

  return {
    level: "low",
    label: "Low risk",
    title: "Có thể theo dõi tại nhà",
    text: "Hiện chưa ghi nhận dấu hiệu nguy hiểm. Bạn có thể theo dõi, nghỉ ngơi và quay lại sàng lọc nếu triệu chứng thay đổi.",
    recommended: "home"
  };
}

function renderResult() {
  const risk = assessRisk();
  flowBadge.textContent = risk.label;
  stepEyebrow.textContent = "Kết quả sàng lọc";
  questionTitle.textContent = "Bước tiếp theo được gợi ý";
  progressBar.style.width = "100%";

  triageBody.innerHTML = `
    <div class="result-panel">
      <section class="risk-box ${risk.level}">
        <h4>${risk.title}</h4>
        <p>${risk.text}</p>
      </section>

      <div class="action-grid">
        <article class="action-item ${risk.recommended === "home" ? "recommended" : ""}">
          <span class="risk-chip low">Theo dõi tại nhà</span>
          <h4>Phù hợp khi triệu chứng nhẹ</h4>
          <p>Ghi lại nhiệt độ, mức đau, ăn uống và các thay đổi trong 24-48 giờ. Quay lại sàng lọc nếu nặng lên.</p>
          <button class="secondary-action" type="button" data-reminder>Lập lịch nhắc</button>
        </article>
        <article class="action-item ${risk.recommended === "doctor" ? "recommended" : ""}">
          <span class="risk-chip medium">Gặp bác sĩ</span>
          <h4>Bác sĩ gia đình xem hồ sơ</h4>
          <p>Trả phí chỉ khi bạn muốn bác sĩ đọc tóm tắt và tư vấn chuyên sâu. Lý do gợi ý được hiện rõ, không bắt buộc.</p>
          <button class="primary-action" type="button" data-open-paid>Gửi bác sĩ</button>
        </article>
        <article class="action-item ${risk.recommended === "hospital" ? "recommended" : ""}">
          <span class="risk-chip high">Đi bệnh viện</span>
          <h4>Ưu tiên an toàn</h4>
          <p>Nếu khó thở, đau ngực, lơ mơ, co giật, đau dữ dội hoặc tình trạng xấu nhanh, hãy đến cơ sở y tế gần nhất.</p>
          <button class="primary-action" type="button" data-open-appointment>Tìm cơ sở ABC</button>
        </article>
      </div>

      <div class="back-row">
        <button class="ghost-button" type="button" data-summary>Xem lại tóm tắt</button>
        <button class="secondary-action" type="button" data-reset>Kiểm tra trường hợp khác</button>
      </div>
    </div>
  `;

  triageBody.querySelectorAll("[data-open-paid]").forEach((button) => {
    button.addEventListener("click", openConsultModal);
  });
  triageBody.querySelector("[data-open-appointment]").addEventListener("click", () => setView("appointments"));
  triageBody.querySelector("[data-summary]").addEventListener("click", renderSummary);
  triageBody.querySelector("[data-reminder]").addEventListener("click", () => {
    showToast("Đã thêm nhắc nhở", "Docah sẽ nhắc bạn cập nhật triệu chứng sau 24 giờ.");
  });
  triageBody.querySelectorAll("[data-reset]").forEach((button) => {
    button.addEventListener("click", resetTriage);
  });
}

function resetTriage() {
  Object.keys(answers).forEach((key) => delete answers[key]);
  currentStep = 0;
  setView("triage");
  renderQuestion();
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
  paidCopy.textContent = "Đây là bước trả phí vì cần bác sĩ đọc tóm tắt, đánh giá bối cảnh cá nhân và hỏi thêm khi thông tin chưa đủ. Bạn có thể bỏ qua và tiếp tục theo dõi miễn phí.";
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

document.querySelectorAll("[data-book-appointment]").forEach((button) => {
  button.addEventListener("click", () => {
    openBookingModal(button);
  });
});

saveProfile.addEventListener("click", () => {
  showToast("Cập nhật hồ sơ thành công", "Thông tin sức khỏe gia đình đã được lưu trên màn hình.");
});

resetProfile.addEventListener("click", () => {
  profileInputs.forEach((input, index) => {
    input.value = initialProfileValues[index];
  });
  showToast("Đã hoàn tác chỉnh sửa", "Hồ sơ đã quay về thông tin ban đầu.");
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

logoutButton.addEventListener("click", () => {
  window.location.href = "../home.html";
});

renderQuestion();
