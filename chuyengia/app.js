const cases = [
  {
    id: 1,
    patientName: "Trần Thị B",
    issue: "Đau ngực, khó thở",
    doctor: "BS. Lê Văn C",
    date: "29/04/2026",
    status: "Mới",
    age: 58,
    gender: "Nữ",
    phone: "0901 234 567",
    priority: "Cao"
  },
  {
    id: 2,
    patientName: "Phạm Văn D",
    issue: "Tiểu đường type 2, biến chứng",
    doctor: "BS. Hoàng Thị E",
    date: "28/04/2026",
    status: "Đang xử lý",
    age: 64,
    gender: "Nam",
    phone: "0902 234 567",
    priority: "Trung bình"
  },
  {
    id: 3,
    patientName: "Nguyễn Thị F",
    issue: "Huyết áp cao không ổn định",
    doctor: "BS. Đỗ Văn G",
    date: "28/04/2026",
    status: "Mới",
    age: 52,
    gender: "Nữ",
    phone: "0903 234 567",
    priority: "Cao"
  },
  {
    id: 4,
    patientName: "Lý Văn H",
    issue: "Rối loạn lipid máu",
    doctor: "BS. Vũ Thị I",
    date: "27/04/2026",
    status: "Đã phản hồi",
    age: 49,
    gender: "Nam",
    phone: "0904 234 567",
    priority: "Thấp"
  },
  {
    id: 5,
    patientName: "Bùi Thị K",
    issue: "Suy tim mạn",
    doctor: "BS. Trịnh Văn L",
    date: "27/04/2026",
    status: "Đang xử lý",
    age: 70,
    gender: "Nữ",
    phone: "0905 234 567",
    priority: "Cao"
  },
  {
    id: 6,
    patientName: "Võ Văn M",
    issue: "Loét dạ dày tá tràng",
    doctor: "BS. Lê Văn C",
    date: "26/04/2026",
    status: "Đã hoàn thành",
    age: 43,
    gender: "Nam",
    phone: "0906 234 567",
    priority: "Trung bình"
  }
];

const responses = [
  {
    id: 1,
    patientName: "Lý Văn H",
    doctor: "BS. Vũ Thị I",
    date: "27/04/2026",
    status: "Đã đọc",
    content: "Khuyến nghị điều chỉnh chế độ ăn, tăng vận động, theo dõi lipid máu sau 4 tuần."
  },
  {
    id: 2,
    patientName: "Võ Văn M",
    doctor: "BS. Lê Văn C",
    date: "26/04/2026",
    status: "Chưa đọc",
    content: "Đề nghị nội soi kiểm tra lại nếu triệu chứng kéo dài, phối hợp thuốc ức chế tiết acid."
  },
  {
    id: 3,
    patientName: "Trần Thị B",
    doctor: "BS. Lê Văn C",
    date: "29/04/2026",
    status: "Chờ phản hồi",
    content: "Ca cần ưu tiên đánh giá nguy cơ tim mạch, kiểm tra ECG và men tim."
  }
];

function badgeClass(status) {
  if (status === "Mới" || status === "Chưa đọc") return "badge blue";
  if (status === "Đang xử lý" || status === "Chờ phản hồi") return "badge yellow";
  if (status === "Đã phản hồi" || status === "Đã hoàn thành" || status === "Đã đọc") return "badge green";
  return "badge";
}

function caseRow(c) {
  return `
    <div class="row">
      <div>
        <h4>${c.patientName}</h4>
        <p>${c.issue}</p>
        <small>Bác sĩ: ${c.doctor} • ${c.date}</small>
      </div>
      <div>
        <span class="${badgeClass(c.status)}">${c.status}</span>
        <a class="btn" href="case-detail.html?id=${c.id}">Xem chi tiết</a>
      </div>
    </div>
  `;
}

function renderDashboard() {
  const el = document.querySelector("#recentCases");
  if (el) el.innerHTML = cases.slice(0, 5).map(caseRow).join("");
}

function renderCaseList() {
  const list = document.querySelector("#caseList");
  if (!list) return;

  const q = document.querySelector("#searchInput");
  const st = document.querySelector("#statusFilter");

  function draw() {
    const search = q.value.toLowerCase();
    const status = st.value;
    const filtered = cases.filter((c) => {
      const text = `${c.patientName} ${c.issue}`.toLowerCase();
      return text.includes(search) && (status === "all" || c.status === status);
    });

    list.innerHTML = filtered.length
      ? filtered.map(caseRow).join("")
      : '<p class="empty">Không có ca phù hợp.</p>';
  }

  q.addEventListener("input", draw);
  st.addEventListener("change", draw);
  draw();
}

function info(label, value) {
  return `<div class="info"><span>${label}</span><b>${value}</b></div>`;
}

function renderDetail() {
  const box = document.querySelector("#detailBox");
  if (!box) return;

  const id = Number(new URLSearchParams(location.search).get("id") || 1);
  const c = cases.find((x) => x.id === id) || cases[0];

  box.innerHTML = `
    <section class="card detail-head">
      <div>
        <h2>${c.patientName}</h2>
        <p>${c.issue}</p>
      </div>
      <span class="${badgeClass(c.status)}">${c.status}</span>
    </section>
    <div class="detail-grid">
      <section class="card">
        <h3>Thông tin bệnh nhân</h3>
        ${info("Tuổi", c.age)}
        ${info("Giới tính", c.gender)}
        ${info("SĐT", c.phone)}
        ${info("Mức ưu tiên", c.priority)}
        ${info("Bác sĩ chuyển ca", c.doctor)}
        ${info("Ngày chuyển", c.date)}
      </section>
      <section class="card">
        <h3>Ý kiến chuyên môn</h3>
        <textarea id="note" placeholder="Nhập ý kiến chuyên môn, khuyến nghị điều trị hoặc hướng xử lý..."></textarea>
        <label class="attach-button detail-attach" for="caseAttachment">📎 Đính kèm</label>
        <input class="file-input" id="caseAttachment" type="file" onchange="showCaseAttachmentName(this)">
        <p id="caseAttachmentName" class="attachment-name hidden"></p>
        <button class="primary" id="sendResponse" type="button">Gửi phản hồi</button>
        <p id="successMsg" class="success hidden">Đã gửi phản hồi thành công.</p>
      </section>
    </div>
  `;

  document.querySelector("#sendResponse").addEventListener("click", () => {
    document.querySelector("#successMsg").classList.remove("hidden");
  });
}

function renderResponses() {
  const el = document.querySelector("#responseList");
  if (!el) return;

  el.innerHTML = responses.map((r) => `
    <div class="response">
      <div class="response-top">
        <div>
          <h4>${r.patientName}</h4>
          <p>Gửi cho: ${r.doctor} • ${r.date}</p>
        </div>
        <span class="${badgeClass(r.status)}">${r.status}</span>
        <button type="button" onclick="toggleResponse(${r.id})">Xem chi tiết</button>
      </div>
      <p id="response-${r.id}" class="response-content hidden">${r.content}</p>
    </div>
  `).join("");
}

function toggleResponse(id) {
  document.querySelector(`#response-${id}`).classList.toggle("hidden");
}

function showCaseAttachmentName(input) {
  const target = document.querySelector("#caseAttachmentName");
  const file = input.files && input.files[0];
  if (!target || !file) return;

  target.textContent = `Đã chọn: ${file.name}`;
  target.classList.remove("hidden");
}

function setupReport() {
  const btn = document.querySelector("#exportPdf");
  if (btn) {
    btn.addEventListener("click", () => {
      if (window.showToast) {
        showToast("Đang xuất báo cáo", "Hệ thống đang chuẩn bị tệp PDF.");
      }
    });
  }
}

function setupAccountMenu() {
  const accountToggle = document.querySelector("#accountToggle");
  const accountDropdown = document.querySelector("#accountDropdown");
  const logoutButton = document.querySelector("#logoutButton");

  if (accountToggle && accountDropdown) {
    accountToggle.addEventListener("click", () => {
      accountDropdown.classList.toggle("show");
    });

    document.addEventListener("click", (event) => {
      if (!accountToggle.contains(event.target) && !accountDropdown.contains(event.target)) {
        accountDropdown.classList.remove("show");
      }
    });
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      location.href = "../index.html";
    });
  }
}

function setupProfileForm() {
  const form = document.querySelector("#profileForm");
  const editButton = document.querySelector("#editProfileButton");
  const cancelButton = document.querySelector("#cancelProfileButton");
  const actions = document.querySelector("#profileActions");
  const saved = document.querySelector("#profileSaved");
  const fields = Array.from(document.querySelectorAll(".profile-field"));

  if (!form || !editButton || !actions || fields.length === 0) return;

  const originalValues = new Map(fields.map((field) => [field, field.value]));

  function setEditing(enabled) {
    fields.forEach((field) => {
      field.disabled = !enabled;
    });
    actions.classList.toggle("hidden", !enabled);
    editButton.classList.toggle("hidden", enabled);
    if (saved) saved.classList.add("hidden");
  }

  editButton.addEventListener("click", () => {
    setEditing(true);
    fields[0].focus();
  });

  if (cancelButton) {
    cancelButton.addEventListener("click", () => {
      fields.forEach((field) => {
        field.value = originalValues.get(field);
      });
      setEditing(false);
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    fields.forEach((field) => {
      originalValues.set(field, field.value);
    });
    setEditing(false);
    if (saved) saved.classList.remove("hidden");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderDashboard();
  renderCaseList();
  renderDetail();
  renderResponses();
  setupReport();
  setupAccountMenu();
  setupProfileForm();
});
