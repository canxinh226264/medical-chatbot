const cases = [
  {
    id: 1,
    patientName: "Nguyễn Thị B",
    role: "Bệnh nhân",
    issue: "Nút 'Gửi' không phản hồi trên trang mobile",
    channel: "Mobile Web",
    date: "29/04/2026",
    status: "Chưa đọc",
    phone: "0901 234 567",
    satisfaction: 2,
    duration: "00:02:10",
    impact: "Cao",
    screenshot: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='760' height='420'%3E%3Crect width='760' height='420' fill='%232d4f67'/%3E%3Ctext x='50%25' y='45%25' fill='%23e2e8f0' font-family='Segoe UI,Arial,sans-serif' font-size='28' text-anchor='middle'%3EẢnh lỗi minh họa%3C/text%3E%3Ctext x='50%25' y='60%25' fill='%23cbd5e1' font-family='Segoe UI,Arial,sans-serif' font-size='18' text-anchor='middle'%3EVí dụ: nút không phản hồi%3C/text%3E%3C/svg%3E"
  },
  {
    id: 2,
    patientName: "Phạm Văn D",
    role: "Bác sĩ",
    issue: "Luồng hội thoại bị lặp và gây nhầm lẫn",
    channel: "Chatbot (Web)",
    date: "28/04/2026",
    status: "Đang xử lý",
    phone: "0902 234 567",
    satisfaction: 3,
    duration: "00:04:35",
    impact: "Trung bình"
  },
  {
    id: 3,
    patientName: "Trần Văn F",
    role: "Bệnh nhân",
    channel: "Tablet App",
    date: "28/04/2026",
    status: "Chưa đọc",
    phone: "0903 234 567",
    satisfaction: 2,
    duration: "00:03:05",
    impact: "Cao"
  },
  {
    id: 4,
    patientName: "Lý Văn H",
    role: "Bệnh nhân",
    issue: "Thông báo lỗi không rõ ràng",
    channel: "Web",
    date: "27/04/2026",
    status: "Đã xử lý",
    phone: "0904 234 567",
    satisfaction: 4,
    duration: "00:01:20",
    impact: "Thấp"
  },
  {
    id: 5,
    patientName: "Bùi Thị K",
    role: "Bệnh nhân",
    issue: "Người dùng rời giữa chừng khi yêu cầu nhập thông tin",
    channel: "Mobile Web",
    date: "27/04/2026",
    status: "Đang xử lý",
    phone: "0905 234 456",
    satisfaction: 1,
    duration: "00:00:45",
    impact: "Cao"
  },
  {
    id: 6,
    patientName: "Võ Văn M",
    role: "Bác sĩ",
    issue: "Hình ảnh hướng dẫn mờ, khó đọc",
    channel: "Web",
    date: "26/04/2026",
    status: "Đã xử lý",
    phone: "0906 234 567",
    satisfaction: 5,
    duration: "00:02:55",
    impact: "Trung bình"
  },
  {
    id: 7,
    patientName: "Đặng Thị N",
    role: "Bác sĩ",
    issue: "Không nhận diện được nút Quay lại trên mobile",
    channel: "Mobile Web",
    date: "25/04/2026",
    status: "Chưa đọc",
    phone: "0907 123 789",
    satisfaction: 2,
    duration: "00:02:22",
    impact: "Trung bình",
    screenshot: ""
  },
  {
    id: 8,
    patientName: "Nguyễn Văn L",
    role: "Chủ phòng khám",
    channel: "Web",
    date: "24/04/2026",
    status: "Đã xử lý",
    phone: "0908 345 678",
    satisfaction: 3,
    duration: "00:03:50",
    impact: "Cao"
  },
  {
    id: 9,
    patientName: "Phan Thị H",
    role: "Bệnh nhân",
    issue: "Chuyển trang quá chậm trên tablet",
    channel: "Tablet App",
    date: "23/04/2026",
    status: "Đang xử lý",
    phone: "0909 678 123",
    satisfaction: 2,
    duration: "00:05:10",
    impact: "Cao"
  },
  {
    id: 10,
    patientName: "Lê Văn T",
    role: "Bệnh nhân",
    issue: "Màu chữ xám quá mờ trên nền",
    channel: "Web",
    date: "22/04/2026",
    status: "Chưa đọc",
    phone: "0910 234 567",
    satisfaction: 1,
    duration: "00:01:35",
    impact: "Trung bình"
  }
];

const baseResponses = [
  {
    id: 1,
    patientName: "Lý Văn H",
    channel: "Web",
    date: "27/04/2026",
    status: "Đã xử lý",
    content: "Đã cập nhật thông báo lỗi với văn bản rõ ràng và hướng dẫn bước tiếp theo."
  },
  {
    id: 2,
    patientName: "Võ Văn M",
    channel: "Web",
    date: "26/04/2026",
    status: "Chưa đọc",
    content: "Đề xuất tăng độ tương phản cho ảnh hướng dẫn và bổ sung chú thích ngắn."
  },
  {
    id: 3,
    patientName: "Nguyễn Thị B",
    channel: "Mobile Web",
    date: "29/04/2026",
    status: "Chờ phản hồi",
    content: "Khuyến nghị kiểm tra sự kiện click, thêm indicator khi đang gửi và tối ưu lại vùng chạm."
  },
  {
    id: 4,
    patientName: "Đặng Thị N",
    channel: "Mobile Web",
    date: "25/04/2026",
    status: "Chưa đọc",
    content: "Đề xuất hiển thị tooltip rõ ràng cho hành động Quay lại, tránh gây nhầm lẫn."
  },
  {
    id: 5,
    patientName: "Phan Thị H",
    channel: "Tablet App",
    date: "23/04/2026",
    status: "Đang xử lý",
    content: "Tối ưu hiệu năng chuyển trang, đưa thêm chỉ báo đang tải để người dùng biết hệ thống đang xử lý."
  },
  {
    id: 6,
    patientName: "Lê Văn T",
    channel: "Web",
    date: "22/04/2026",
    status: "Chưa đọc",
    content: "Gợi ý nên tăng độ tương phản chữ trên nền để nâng cao khả năng đọc cho người dùng."
  }
];



const storedResponses = (() => {
  try {
    const parsed = JSON.parse(localStorage.getItem("uxResponses"));
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
})();

const storedCaseStatuses = (() => {
  try {
    return JSON.parse(localStorage.getItem("uxCaseStatuses") || "{}");
  } catch {
    return {};
  }
})();

const saveCaseStatus = (caseId, status) => {
  storedCaseStatuses[caseId] = status;
  localStorage.setItem("uxCaseStatuses", JSON.stringify(storedCaseStatuses));
};

let responses = Array.isArray(storedResponses) ? storedResponses : baseResponses;

cases.forEach((c) => {
  if (storedCaseStatuses[c.id]) {
    c.status = storedCaseStatuses[c.id];
  }
});

function badgeClass(status) {
  // Unified mapping for UI/UX suggestion statuses
  if (status === "Mới" || status === "Chưa đọc") return "badge blue";
  if (status === "Đang xử lý" || status === "Chờ phản hồi" || status === "Đã đọc") return "badge yellow";
  if (status === "Đã xử lý" || status === "Đã xem" || status === "Đã thực hiện") return "badge green";
  return "badge";
}

function normalizeStatus(s) {
  if (!s) return s;
  const status = s.trim();
  // map common synonyms to canonical statuses used in the UI
  if (/chờ/i.test(status)) return 'Chờ phản hồi';
  if (/chưa/i.test(status) || /mới/i.test(status)) return 'Chưa đọc';
  if (/đang/i.test(status)) return 'Đang xử lý';
  if (/đã (xử lý|xử lý|thực hiện|đã đọc|đã xem)/i.test(status)) return 'Đã xử lý';
  return status;
}

function caseRow(c) {
  return `
    <div class="row" id="case-row-${c.id}">
      <div>
        <h4>${c.patientName} <span class="badge blue" style="font-size: 0.75rem; padding: 3px 8px; margin-left: 8px;">${c.role || "Bệnh nhân"}</span></h4>
        <p>${c.issue}</p>
        <small>Nguồn: ${c.channel} • ${c.date}</small>
      </div>
      <div>
        <span class="${badgeClass(c.status)}">${c.status}</span>
        <a class="btn case-detail-button" href="case-detail.html?id=${c.id}">Xem chi tiết</a>
        <button class="delete-btn" type="button" onclick="deleteCase(${c.id})" title="Xóa phản hồi">🗑</button>
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
  const rl = document.querySelector("#roleFilter");

  function draw() {
    const search = q.value.toLowerCase();
    const status = st.value;
    const role = rl.value;
    const filtered = cases.filter((c) => {
      const text = `${c.patientName} ${c.issue}`.toLowerCase();
      return text.includes(search) && (status === "all" || c.status === status) && (role === "all" || c.role === role);
    });

    list.innerHTML = filtered.length
      ? filtered.map(caseRow).join("")
      : '<p class="empty">Không có phản hồi phù hợp.</p>';
  }

  q.addEventListener("input", draw);
  st.addEventListener("change", draw);
  if (rl) rl.addEventListener("change", draw);
  draw();
}

/* inline detail removed - revert to separate detail page */

function info(label, value) {
  return `<div class="info"><span>${label}</span><b>${value}</b></div>`;
}

function renderDetail() {
  const box = document.querySelector("#detailBox");
  if (!box) return;

  const id = Number(new URLSearchParams(location.search).get("id") || 1);
  const c = cases.find((x) => x.id === id) || cases[0];

  if (c.status === "Chưa đọc" || c.status === "Mới") {
    c.status = "Đã đọc";
    saveCaseStatus(c.id, c.status);
  }

  const screenshotHtml = c.screenshot
    ? `<figure class="case-image">
         <img src="${c.screenshot}" alt="Ảnh lỗi phản hồi">
       </figure>`
    : `<div class="case-image placeholder">Không có ảnh lỗi đính kèm</div>`;

  const showStep2 = c.status === "Đang xử lý" || c.status === "Đã xử lý";

  box.innerHTML = `
    <section class="card detail-head">
      <div>
        <h2>${c.patientName} <span class="badge purple" style="font-size: 0.85rem; padding: 4px 10px; margin-left: 10px; vertical-align: middle;">${c.role || "Bệnh nhân"}</span></h2>
        <p>${c.issue}</p>
      </div>
      <span id="statusBadge" class="${badgeClass(c.status)}">${c.status}</span>
    </section>
    <div class="detail-grid">
      <section class="card detail-left">
        <h3>Phản hồi của người dùng</h3>
        <p class="user-feedback">${c.issue}</p>
        ${screenshotHtml}
        <div class="button-row info-toggle-row">
          <button class="secondary outline" id="toggleInfo" type="button">Xem thêm</button>
        </div>
        <div class="info-grid hidden" id="moreInfo">
          ${info("Vai trò người dùng", c.role || "Bệnh nhân")}
          ${info("Kênh", c.channel)}
          ${info("Ngày gửi", c.date)}
          ${info("SĐT", c.phone)}
          ${info("Mức ảnh hưởng", c.impact)}
          ${info("Mức hài lòng", c.satisfaction)}
          ${info("Thời lượng hội thoại", c.duration)}
        </div>
      </section>
      <section class="card detail-right ${showStep2 ? "step2-active" : ""}">
        <div id="step1" class="step-box ${showStep2 ? "hidden" : ""}">
          <h3>Bước 1: Tiếp nhận ca</h3>
          <p class="form-note">Giao diện chỉ hiện thông tin phản hồi của user và nút Bắt đầu xử lý. Nhấn nút để xác nhận tiếp nhận ca.</p>
          <button class="secondary" id="startProcessing" type="button">Bắt đầu xử lý</button>
        </div>
        <div id="step2" class="step-box ${showStep2 ? "" : "hidden"}">
          <h3>Bước 2: Đưa ra giải pháp</h3>
          <p class="form-note">Mô tả vấn đề UI/UX, đề xuất cách cải thiện hoặc hành động cần thực hiện.</p>
          <textarea id="note" placeholder="Nhập đề xuất UI/UX, mô tả cách tái thiết kế hoặc hành động cần thực hiện..."></textarea>
          <label class="attach-button detail-attach" for="caseAttachment">📎 Đính kèm ảnh/ghi âm</label>
          <input class="file-input" id="caseAttachment" type="file" onchange="showCaseAttachmentName(this)">
          <p id="caseAttachmentName" class="attachment-name hidden"></p>
          <div class="button-row">
            <button class="danger" id="cancelProcessing" type="button">Hủy tiếp nhận</button>
            <button class="primary" id="sendResponse" type="button">Gửi đề xuất cho Dev</button>
          </div>
          <p id="successMsg" class="success hidden">Đã gửi đề xuất thành công.</p>
        </div>
      </section>
    </div>
  `;

  const statusSpan = box.querySelector("#statusBadge");
  const startButton = box.querySelector("#startProcessing");
  const step1 = box.querySelector("#step1");
  const step2 = box.querySelector("#step2");


  if (startButton) {
    startButton.addEventListener("click", () => {
      c.status = "Đang xử lý";
      saveCaseStatus(c.id, c.status);
      if (statusSpan) { statusSpan.textContent = c.status; statusSpan.className = badgeClass(c.status); }
      if (step1) step1.classList.add("hidden");
      if (step2) step2.classList.remove("hidden");
      box.querySelector(".detail-right").classList.add("step2-active");
      if (window.showToast) {
        showToast("Đã bắt đầu xử lý", "Bạn có thể tiếp tục với form đề xuất.");
      }
    });
  }

  const cancelButton = box.querySelector("#cancelProcessing");
  if (cancelButton) {
    cancelButton.addEventListener("click", () => {
      c.status = "Đã đọc";
      saveCaseStatus(c.id, c.status);
      if (statusSpan) { statusSpan.textContent = c.status; statusSpan.className = badgeClass(c.status); }
      if (step2) step2.classList.add("hidden");
      if (step1) step1.classList.remove("hidden");
      box.querySelector(".detail-right").classList.remove("step2-active");
      if (window.showToast) {
        showToast("Đã hủy tiếp nhận", "Ca phản hồi đã trở về trạng thái Đã đọc.");
      }
    });
  }

  const toggleInfoButton = box.querySelector("#toggleInfo");
  const moreInfo = box.querySelector("#moreInfo");
  if (toggleInfoButton && moreInfo) {
    toggleInfoButton.addEventListener("click", () => {
      const isExpanded = !moreInfo.classList.toggle("hidden");
      toggleInfoButton.textContent = isExpanded ? "Thu gọn" : "Xem thêm";
    });
  }

  document.querySelector("#sendResponse").onclick = () => {
    const note = document.querySelector("#note");
    const attachmentInput = document.querySelector("#caseAttachment");
    const attachmentName = document.querySelector("#caseAttachmentName");
    const success = document.querySelector("#successMsg");
    const statusSpan = box.querySelector("#statusBadge");
    const message = note.value.trim();

    if (!message) {
      note.style.borderColor = "rgba(239,68,68,0.7)";
      note.focus();
      note.addEventListener("input", () => { note.style.borderColor = ""; }, { once: true });
      if (window.showToast) showToast("Vui lòng nhập đề xuất", "Mô tả đề xuất không được để trống.");
      return;
    }

    const newId = responses.length ? Math.max(...responses.map((r) => r.id)) + 1 : 1;
    responses.push({ id: newId, patientName: c.patientName, channel: c.channel, date: new Date().toLocaleDateString("vi-VN"), status: "Đang xử lý", content: message });
    localStorage.setItem("uxResponses", JSON.stringify(responses));

    note.value = "";
    if (attachmentInput) attachmentInput.value = "";
    if (attachmentName) attachmentName.classList.add("hidden");
    if (success) success.classList.remove("hidden");
    if (window.showToast) showToast("Đã lưu đề xuất", "Đề xuất của bạn đã được thêm vào Lịch sử đề xuất.");
  };
}

function renderResponses() {
  const el = document.querySelector("#responseList");
  if (!el) return;

  const q = document.querySelector("#searchInput");
  const st = document.querySelector("#statusFilter");
  const ch = document.querySelector("#channelFilter");

  function draw() {
    const search = q ? q.value.toLowerCase() : "";
    const status = st ? st.value : "all";
    const channel = ch ? ch.value : "all";

    const filtered = responses.filter((r) => {
      const dispStatus = normalizeStatus(r.status);
      const text = `${r.patientName} ${r.content} ${r.channel}`.toLowerCase();
      
      const matchSearch = text.includes(search);
      const matchStatus = status === "all" || dispStatus === status;
      const matchChannel = channel === "all" || r.channel === channel;

      return matchSearch && matchStatus && matchChannel;
    });

    el.innerHTML = filtered.length
      ? filtered.map((r) => {
          const disp = normalizeStatus(r.status);
          return `
          <div class="response">
            <div class="response-top">
              <div>
                <h4>${r.patientName}</h4>
                <p>Nguồn: ${r.channel} • ${r.date}</p>
              </div>
              <div class="response-actions">
                ${responseStatusDropdown(r.id, disp)}
                <button class="response-detail-button" type="button" onclick="toggleResponse(${r.id})">Xem chi tiết</button>
              </div>
            </div>
            <p id="response-${r.id}" class="response-content hidden">${r.content}</p>
          </div>
          `;
        }).join("")
      : '<p class="empty">Không có đề xuất phù hợp.</p>';
  }

  if (q) q.addEventListener("input", draw);
  if (st) st.addEventListener("change", draw);
  if (ch) ch.addEventListener("change", draw);
  
  draw();
}

function deleteCase(id) {
  if (!confirm("Bạn có chắc muốn xóa phản hồi này không?")) return;
  const idx = cases.findIndex(c => c.id === id);
  if (idx === -1) return;
  cases.splice(idx, 1);
  const row = document.querySelector(`#case-row-${id}`);
  if (row) row.remove();
  if (window.showToast) showToast("Đã xóa phản hồi", "Phản hồi đã được xóa khỏi danh sách.");
}

function toggleResponse(id) {
  document.querySelector(`#response-${id}`).classList.toggle("hidden");
}

function responseStatusDropdown(responseId, status) {
  const options = ["Đang xử lý", "Đã xử lý"];
  const tone = status === "Đã xử lý" ? "is-done" : "is-processing";

  return `
    <div class="suggestions-status-dropdown ${tone}">
      <button class="suggestions-status-trigger" type="button" aria-expanded="false" onclick="toggleResponseStatusMenu(event, this)">
        <span>${status}</span>
        <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m7 10 5 5 5-5"/></svg>
      </button>
      <div class="suggestions-status-menu">
        ${options.map((option) => `
          <button class="suggestions-status-option ${option === status ? "active" : ""}" type="button" data-status="${option}" onclick="changeResponseStatus(event, this, ${responseId})">
            ${option}
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function closeExpertSelectMenus(except = null) {
  document.querySelectorAll(".expert-select.open").forEach((dropdown) => {
    if (dropdown === except) return;
    dropdown.classList.remove("open");
    dropdown.querySelector(".expert-select-trigger")?.setAttribute("aria-expanded", "false");
  });
}

function enhanceExpertSelect(select) {
  if (!select || select.dataset.enhancedSelect === "true") return;
  select.dataset.enhancedSelect = "true";
  select.classList.add("expert-select-native");
  select.tabIndex = -1;
  select.setAttribute("aria-hidden", "true");

  const dropdown = document.createElement("div");
  dropdown.className = "expert-select";
  select.parentNode.insertBefore(dropdown, select);
  dropdown.appendChild(select);

  const trigger = document.createElement("button");
  trigger.className = "expert-select-trigger";
  trigger.type = "button";
  trigger.setAttribute("aria-expanded", "false");
  trigger.innerHTML = '<span></span><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m7 10 5 5 5-5"/></svg>';
  dropdown.appendChild(trigger);

  const menu = document.createElement("div");
  menu.className = "expert-select-menu";
  dropdown.appendChild(menu);

  Array.from(select.options).forEach((option) => {
    const item = document.createElement("button");
    item.className = "expert-select-option";
    item.type = "button";
    item.dataset.value = option.value;
    item.textContent = option.textContent;
    item.addEventListener("click", (event) => {
      event.stopPropagation();
      select.value = option.value;
      select.dispatchEvent(new Event("change", { bubbles: true }));
      dropdown.classList.remove("open");
      trigger.setAttribute("aria-expanded", "false");
      trigger.focus();
    });
    menu.appendChild(item);
  });

  const sync = () => {
    const selected = select.options[select.selectedIndex];
    trigger.querySelector("span").textContent = selected ? selected.textContent : "";
    menu.querySelectorAll(".expert-select-option").forEach((item) => {
      item.classList.toggle("active", item.dataset.value === select.value);
    });
  };

  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    const shouldOpen = !dropdown.classList.contains("open");
    closeResponseStatusMenus();
    closeExpertSelectMenus(dropdown);
    dropdown.classList.toggle("open", shouldOpen);
    trigger.setAttribute("aria-expanded", String(shouldOpen));
  });

  select.addEventListener("change", sync);
  sync();
}

function setupExpertSelects() {
  document.querySelectorAll(".filter select, .filter-three select, .report-toolbar select").forEach(enhanceExpertSelect);
}

function closeResponseStatusMenus(except = null) {
  document.querySelectorAll(".suggestions-status-dropdown.open").forEach((dropdown) => {
    if (dropdown === except) return;
    dropdown.classList.remove("open");
    dropdown.querySelector(".suggestions-status-trigger")?.setAttribute("aria-expanded", "false");
  });
}

function toggleResponseStatusMenu(event, trigger) {
  event.stopPropagation();
  const dropdown = trigger.closest(".suggestions-status-dropdown");
  if (!dropdown) return;

  const shouldOpen = !dropdown.classList.contains("open");
  closeExpertSelectMenus();
  closeResponseStatusMenus(dropdown);
  dropdown.classList.toggle("open", shouldOpen);
  trigger.setAttribute("aria-expanded", String(shouldOpen));
}

function changeResponseStatus(event, optionButton, id) {
  event.stopPropagation();
  const newStatus = optionButton.dataset.status;
  const r = responses.find((x) => x.id === id);
  if (r) {
    r.status = newStatus;
    localStorage.setItem("uxResponses", JSON.stringify(responses));

    const dropdown = optionButton.closest(".suggestions-status-dropdown");
    if (dropdown) {
      dropdown.classList.remove("is-processing", "is-done", "open");
      dropdown.classList.add(newStatus === "Đã xử lý" ? "is-done" : "is-processing");
      dropdown.querySelector(".suggestions-status-trigger span").textContent = newStatus;
      dropdown.querySelector(".suggestions-status-trigger").setAttribute("aria-expanded", "false");
      dropdown.querySelectorAll(".suggestions-status-option").forEach((option) => {
        option.classList.toggle("active", option.dataset.status === newStatus);
      });
    }

    // Synchronize with cases: only mark "Đã xử lý" when ALL related responses are done
    const matchingCase = cases.find((c) => c.patientName === r.patientName && c.channel === r.channel);
    if (matchingCase) {
      const relatedResponses = responses.filter(
        (x) => x.patientName === matchingCase.patientName && x.channel === matchingCase.channel
      );
      const allDone = relatedResponses.every((x) => normalizeStatus(x.status) === "Đã xử lý");
      const anyProcessing = relatedResponses.some((x) => normalizeStatus(x.status) === "Đang xử lý");

      let caseStatus;
      if (allDone) {
        caseStatus = "Đã xử lý";
      } else if (anyProcessing || relatedResponses.some((x) => normalizeStatus(x.status) !== "Đã xử lý")) {
        caseStatus = "Đang xử lý";
      } else {
        caseStatus = newStatus;
      }

      matchingCase.status = caseStatus;
      saveCaseStatus(matchingCase.id, caseStatus);

      const statusBadge = document.querySelector("#statusBadge");
      if (statusBadge) {
        statusBadge.textContent = caseStatus;
        statusBadge.className = badgeClass(caseStatus);
      }
    }

    if (window.showToast) {
      showToast("Đã cập nhật trạng thái", `Đề xuất của ${r.patientName} đã chuyển sang "${newStatus}".`);
    }
  }
}

document.addEventListener("click", () => {
  closeResponseStatusMenus();
  closeExpertSelectMenus();
});

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

function getAnalyticsData(range) {
  // simple frontend mock for analytics by range: 'week' | 'month' | 'custom'
  if (range === 'week') {
    return {
      summary: { total: 10, satisfaction: '4.0 / 5', duration: '2m 45s' },
      series: [2, 3, 1, 4],
      labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'],
      breakdown: [
        { issue: 'Giao diện không rõ ràng', total: 4, resolved: 3, open: 1 },
        { issue: 'Nút không hoạt động', total: 3, resolved: 2, open: 1 },
        { issue: 'Luồng hội thoại', total: 2, resolved: 1, open: 1 },
        { issue: 'Khác', total: 1, resolved: 1, open: 0 }
      ]
    };
  }

  // default month
  return {
    summary: { total: 24, satisfaction: '4.2 / 5', duration: '3m 20s' },
    series: [5, 8, 6, 5],
    labels: ['Tuần 1', 'Tuần 2', 'Tuần 3', 'Tuần 4'],
    breakdown: [
      { issue: 'Giao diện không rõ ràng', total: 12, resolved: 9, open: 3 },
      { issue: 'Nút không hoạt động', total: 8, resolved: 6, open: 2 },
      { issue: 'Luồng hội thoại bị gián đoạn', total: 6, resolved: 4, open: 2 },
      { issue: 'Thông báo gây nhầm lẫn', total: 4, resolved: 3, open: 1 }
    ]
  };
}

function renderBarChart(series, labels) {
  const el = document.querySelector('#barChart');
  if (!el) return;
  el.innerHTML = '';
  const max = Math.max(...series, 1);
  series.forEach((v, i) => {
    const h = Math.round((v / max) * 180) + 20; // px height
    const tip = `${labels[i]}: ${v} phản hồi`;
    const node = document.createElement('div');
    node.setAttribute('data-tip', tip);
    node.innerHTML = `<div class="bar" style="height:${h}px"><span>${v}</span></div><small>${labels[i]}</small>`;
    el.appendChild(node);
  });
}

function renderAnalytics(range) {
  const data = getAnalyticsData(range);
  const s = data.summary;
  const totalEl = document.querySelector('#statTotal');
  const satEl = document.querySelector('#statSatisfaction');
  const durEl = document.querySelector('#statDuration');
  if (totalEl) totalEl.textContent = s.total;
  if (satEl) satEl.textContent = s.satisfaction;
  if (durEl) durEl.textContent = s.duration;

  renderBarChart(data.series, data.labels);

  const tbody = document.querySelector('#analyticsTableBody');
  if (tbody) {
    tbody.innerHTML = data.breakdown.map((r) => `
      <tr>
        <td>${r.issue}</td>
        <td>${r.total}</td>
        <td>${r.resolved}</td>
        <td>${r.open}</td>
      </tr>
    `).join('');
  }
}

function setupAnalytics() {
  const sel = document.querySelector('#timeRange');
  if (!sel) return;
  const detailButton = document.querySelector('#toggleAnalyticsDetails');
  const details = document.querySelector('#analyticsDetails');
  const chart = document.querySelector('#analyticsChart');

  if (detailButton && details && chart) {
    detailButton.addEventListener('click', () => {
      const showDetails = details.classList.contains('hidden');
      details.classList.toggle('hidden', !showDetails);
      chart.classList.toggle('hidden', showDetails);
      detailButton.textContent = showDetails ? 'Biểu đồ' : 'Chi tiết';
      detailButton.setAttribute('aria-expanded', String(showDetails));
    });
  }

  sel.addEventListener('change', (e) => {
    renderAnalytics(e.target.value);
  });
  // initial render
  renderAnalytics(sel.value || 'week');
}

const expertAccountNameKey = "docahExpertAccountName";

function getAccountInitials(name, fallback = "A") {
  const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return fallback;
  const initials = parts.length === 1 ? parts[0].slice(0, 1) : `${parts[0][0]}${parts[parts.length - 1][0]}`;
  return initials.toUpperCase();
}

function syncExpertAccountName(name) {
  const nextName = String(name || localStorage.getItem(expertAccountNameKey) || "Nguyễn Văn A").trim();
  document.querySelectorAll(".account-button .dot + div > div:first-child").forEach((node) => {
    node.textContent = nextName;
  });
  document.querySelectorAll(".account-button .dot, .profile-avatar").forEach((node) => {
    node.textContent = getAccountInitials(nextName);
  });
  const profileTitle = document.querySelector(".profile-header h3");
  if (profileTitle) profileTitle.textContent = nextName;
  localStorage.setItem(expertAccountNameKey, nextName);
}

function setupAccountMenu() {
  const accountToggle = document.querySelector("#accountToggle");
  const accountDropdown = document.querySelector("#accountDropdown");
  const logoutButton = document.querySelector("#logoutButton");

  syncExpertAccountName();

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

  const savedName = localStorage.getItem(expertAccountNameKey);
  if (savedName && fields[0]) fields[0].value = savedName;
  syncExpertAccountName(fields[0]?.value);

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
    syncExpertAccountName(fields[0]?.value);
    setEditing(false);
    if (saved) saved.classList.remove("hidden");
  });
}

function togglePassInput(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.type = el.type === "password" ? "text" : "password";

  const btn = el.parentElement.querySelector(".password-toggle");
  if (!btn) return;
  const isText = el.type === "text";

  if (id === "oldPassword") {
    btn.innerHTML = isText
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
  } else {
    btn.innerHTML = isText
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
  }
}

function setupPasswordForm() {
  const form = document.querySelector("#passwordForm");
  const success = document.querySelector("#passwordSaved");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const oldPass = document.querySelector("#oldPassword");
    const newPass = document.querySelector("#newPassword");
    
    if (oldPass && newPass) {
      oldPass.value = "";
      newPass.value = "";
      
      if (success) {
        success.classList.remove("hidden");
        setTimeout(() => success.classList.add("hidden"), 3000);
      }
      
      if (window.showToast) {
        showToast("Đã cập nhật mật khẩu", "Mật khẩu mới của bạn đã được lưu thành công.");
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderDashboard();
  renderCaseList();
  renderDetail();
  renderResponses();
  setupAnalytics();
  setupExpertSelects();
  setupReport();
  setupAccountMenu();
  setupProfileForm();
  setupPasswordForm();
});
