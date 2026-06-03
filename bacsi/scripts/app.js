const state = {
  activeMenu: "dashboard",
  selectedConsultationId: null,
  profileEditing: false,
  passwordEditing: false,
  profile: {
    fullName: "BS. Nguyễn Văn A",
    email: "nguyenvana@docah.vn",
    phone: "0901234567",
    specialty: "Bác sĩ nội khoa",
    licenseNumber: "BS-12345-HN",
    workPlace: "Bệnh viện Đa khoa Trung ương",
    address: "Hà Nội, Việt Nam",
    dateOfBirth: "1980-05-15",
    experience: "15 năm",
    education: "Tiến sĩ Y khoa - Đại học Y Hà Nội",
  },
};

const menuItems = [
  ["dashboard", "🏠", "Dashboard"],
  ["consultations", "💬", "Tư vấn Online"],
  ["records", "📋", "Hồ sơ bệnh nhân"],
  ["feedback", "⭐", "Phản hồi"],
  ["ai-alerts", "🚨", "Cảnh báo AI"],
  ["profile", "👤", "Hồ sơ cá nhân"],
  ["product-report", "💡", "Báo cáo & đề xuất"],
];

const consultations = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    type: "AI Referral",
    status: "Nguy cơ cao",
    priority: "high",
    symptoms: "Đau ngực trái, khó thở",
    aiSummary: "Nam 45 tuổi, đau ngực trái lan ra vai, khó thở kéo dài 2 giờ. Tiền sử tăng huyết áp không điều trị đều. Nguy cơ hội chứng vành cấp.",
    chat: [
      ["user", "Tôi đang bị đau ngực, thở hơi khó", "14:23"],
      ["ai", "Vị trí đau ngực ở đâu? Đau bao lâu rồi?", "14:23"],
      ["user", "Đau bên trái ngực, lan ra vai. Đã 2 tiếng rồi", "14:24"],
      ["ai", "Anh có tiền sử bệnh tim mạch hoặc huyết áp không?", "14:24"],
      ["user", "Có, tôi bị cao huyết áp nhưng không uống thuốc thường xuyên", "14:25"],
      ["ai", "Triệu chứng của anh rất nghiêm trọng. Tôi đang kết nối anh với bác sĩ ngay.", "14:25"],
    ],
  },
  {
    id: 2,
    name: "Trần Thị B",
    type: "Direct Appointment",
    status: "Chờ bác sĩ",
    priority: "normal",
    symptoms: "Đau đầu, chóng mặt",
    aiSummary: "Nữ 32 tuổi, đau đầu nhức nhối kéo dài 3 ngày, chóng mặt khi đứng lên. Không có tiền sử bệnh lý đặc biệt.",
    chat: [
      ["user", "Chào bác sĩ, tôi bị đau đầu nhiều ngày nay", "14:15"],
      ["ai", "Chị đau đầu từ bao giờ? Có triệu chứng kèm theo không?", "14:15"],
      ["user", "Khoảng 3 ngày rồi, thỉnh thoảng bị chóng mặt", "14:16"],
    ],
  },
  {
    id: 3,
    name: "Lê Văn C",
    type: "AI Referral",
    status: "Nguy cơ cao",
    priority: "high",
    symptoms: "Sốt cao, ho ra máu",
    aiSummary: "Nam 38 tuổi, sốt 39°C kéo dài 2 ngày, ho có đờm lẫn máu. Cần loại trừ bệnh lý phổi nghiêm trọng.",
    chat: [
      ["user", "Tôi sốt cao và ho ra máu", "14:30"],
      ["ai", "Anh sốt bao nhiêu độ? Ho ra máu từ khi nào?", "14:30"],
      ["user", "Sốt 39 độ, ho ra máu từ sáng nay", "14:31"],
    ],
  },
  {
    id: 4,
    name: "Phạm Thị D",
    type: "Direct Appointment",
    status: "Chờ bác sĩ",
    priority: "normal",
    symptoms: "Đau bụng, buồn nôn",
    aiSummary: "Nữ 28 tuổi, đau bụng dưới bên phải, buồn nôn. Nghi ngờ viêm ruột thừa.",
    chat: [["user", "Tôi bị đau bụng và buồn nôn", "14:20"], ["ai", "Chị đau ở vị trí nào? Đau như thế nào?", "14:20"]],
  },
];

const patients = [
  patient(1, "Nguyễn Văn A", 45, "Nam", "Đau ngực trái, khó thở (AI ghi nhận)", "30/04/2026", "Nguy cơ cao", "high", ["Triệu chứng đau ngực trái kéo dài 2 giờ", "Tiền sử tăng huyết áp không điều trị đều", "Nguy cơ hội chứng vành cấp cao"], ["Đã chỉ định ECG và xét nghiệm Troponin", "Tư vấn tuân thủ điều trị", "Hẹn tái khám sau 1 tuần"], "150/95 mmHg", "88 bpm", "36.8°C", "78 kg"),
  patient(2, "Trần Thị B", 32, "Nữ", "Đau đầu, chóng mặt (AI ghi nhận)", "28/04/2026", "Theo dõi", "medium", ["Đau đầu kéo dài 3 ngày", "Chóng mặt khi đứng lên đột ngột"], ["Nghi ngờ hạ huyết áp tư thế", "Uống đủ nước, tránh đứng lên đột ngột"], "100/65 mmHg", "72 bpm", "36.5°C", "52 kg"),
  patient(3, "Lê Văn C", 38, "Nam", "Sốt cao, ho ra máu (AI ghi nhận)", "30/04/2026", "Nguy cơ cao", "high", ["Sốt 39°C kéo dài 2 ngày", "Ho có đờm lẫn máu", "Khuyến nghị chụp X-quang ngực khẩn cấp"], ["Đã chỉ định X-quang phổi", "Kháng sinh Ceftriaxone 1g x 2 lần/ngày"], "130/85 mmHg", "105 bpm", "39.2°C", "65 kg"),
  patient(4, "Phạm Thị D", 28, "Nữ", "Đau bụng, buồn nôn (AI ghi nhận)", "29/04/2026", "Theo dõi", "medium", ["Đau bụng dưới bên phải", "Buồn nôn, chán ăn", "Nghi ngờ viêm ruột thừa"], ["Khám lâm sàng: McBurney dương tính", "Chỉ định siêu âm bụng"], "115/75 mmHg", "82 bpm", "37.5°C", "58 kg"),
  patient(5, "Hoàng Văn E", 55, "Nam", "Tái khám đái tháo đường", "25/04/2026", "Tốt", "low", ["Bệnh nhân tuân thủ điều trị tốt", "Không có triệu chứng bất thường"], ["HbA1c: 6.5% - kiểm soát tốt", "Tiếp tục Metformin 500mg x 2 lần/ngày"], "125/80 mmHg", "75 bpm", "36.6°C", "72 kg"),
  patient(6, "Đỗ Thị M", 38, "Nữ", "Khám sức khỏe định kỳ", "28/04/2026", "Tốt", "low", ["Các chỉ số trong giới hạn bình thường"], ["Duy trì lối sống lành mạnh", "Khám định kỳ 6 tháng/lần"], "118/75 mmHg", "70 bpm", "36.5°C", "58 kg"),
];

const feedbacks = [
  feedback(101, "Nguyễn Thị H", 5, "Bác sĩ tận tâm, giải thích rất rõ ràng về tình trạng bệnh của tôi.", "30/04/2026 14:30", "Tư vấn Online", "Tích cực", "Bệnh nhân đánh giá cao khả năng giải thích và sự tận tâm."),
  feedback(102, "Trần Văn I", 5, "Dịch vụ tuyệt vời, được tư vấn chi tiết. Bác sĩ rất chuyên nghiệp.", "30/04/2026 11:15", "Giới thiệu từ AI", "Tích cực", "Phản hồi tích cực về chất lượng dịch vụ."),
  feedback(103, "Lê Thị K", 4, "Hài lòng với buổi khám, mong có thêm thời gian tư vấn.", "29/04/2026 16:45", "Tư vấn Online", "Tích cực", "Cần cải thiện thời lượng buổi tư vấn."),
  feedback(104, "Phạm Văn L", 3, "Buổi tư vấn ổn, nhưng thời gian chờ hơi lâu.", "29/04/2026 10:20", "Lịch hẹn mới", "Trung lập", "Cần tối ưu quy trình tiếp nhận."),
  feedback(105, "Đỗ Thị M", 5, "Rất hài lòng! Bác sĩ kiên nhẫn lắng nghe và đưa ra lời khuyên hữu ích.", "28/04/2026 15:00", "Giới thiệu từ AI", "Tích cực", "Mức độ hài lòng cao."),
  feedback(106, "Vũ Văn N", 2, "Không hài lòng lắm. Bác sĩ có vẻ vội vàng, không giải thích kỹ về đơn thuốc.", "28/04/2026 09:30", "Tư vấn Online", "Tiêu cực", "Cần xử lý ưu tiên để cải thiện dịch vụ."),
  feedback(110, "Lý Văn R", 1, "Chờ quá lâu và bác sĩ chỉ tư vấn vài phút.", "26/04/2026 10:00", "Tư vấn Online", "Tiêu cực", "Mức độ không hài lòng cao, cần xử lý khẩn cấp."),
];

const aiAlerts = [
  alertCase("Nguyễn Văn A", 45, "Nam", ["Đau ngực trái lan ra vai", "Khó thở", "Vã mồ hôi"], "Nghi ngờ nhồi máu cơ tim cấp", "Khẩn cấp", "2 phút trước", { "Huyết áp": "160/100 mmHg", "Nhịp tim": "105 bpm", "Nhiệt độ": "37.2°C" }, "Triệu chứng phù hợp hội chứng vành cấp, cần can thiệp y tế khẩn cấp.", "Kết nối bác sĩ tim mạch ngay lập tức."),
  alertCase("Lê Văn C", 38, "Nam", ["Sốt cao 39°C", "Ho ra máu", "Khó thở"], "Nghi ngờ bệnh lý phổi nghiêm trọng", "Khẩn cấp", "5 phút trước", { "Nhiệt độ": "39.2°C", "Nhịp tim": "110 bpm", "Nhịp thở": "28 lần/phút" }, "Ho ra máu kèm sốt cao là dấu hiệu nguy hiểm cần loại trừ bệnh phổi nặng.", "Chỉ định X-quang ngực và xét nghiệm máu khẩn cấp."),
  alertCase("Trần Thị E", 62, "Nữ", ["Liệt nửa người", "Nói khó", "Chóng mặt dữ dội"], "Nghi ngờ đột quỵ não", "Khẩn cấp", "15 phút trước", { "Huyết áp": "180/110 mmHg", "Nhịp tim": "95 bpm" }, "Dấu hiệu điển hình của đột quỵ não cấp. Cần xử lý trong thời gian vàng.", "Gọi cấp cứu 115 ngay, chuyển viện khẩn cấp."),
  alertCase("Phạm Văn D", 28, "Nam", ["Đau bụng dữ dội", "Buồn nôn", "Sốt nhẹ"], "Nghi ngờ viêm ruột thừa cấp", "Cao", "45 phút trước", { "Nhiệt độ": "37.8°C", "Nhịp tim": "90 bpm" }, "Đau bụng dưới bên phải kèm buồn nôn và sốt nhẹ gợi ý viêm ruột thừa.", "Kết nối bác sĩ ngoại khoa, siêu âm bụng."),
  alertCase("Hoàng Thị F", 35, "Nữ", ["Đau đầu dữ dội", "Nhìn mờ", "Buồn nôn"], "Nghi ngờ xuất huyết não", "Khẩn cấp", "25 phút trước", { "Huyết áp": "170/105 mmHg", "Nhịp tim": "88 bpm" }, "Đau đầu đột ngột kèm rối loạn thị giác có thể liên quan tăng áp lực nội sọ.", "Chuẩn bị chuyển viện để chụp CT scan não."),
  alertCase("Đỗ Văn G", 55, "Nam", ["Đau ngực khi gắng sức", "Khó thở", "Mệt mỏi"], "Nghi ngờ đau thắt ngực", "Cao", "1 giờ trước", { "Huyết áp": "145/90 mmHg", "Nhịp tim": "92 bpm" }, "Đau ngực khi gắng sức giảm khi nghỉ là triệu chứng điển hình của đau thắt ngực.", "Kết nối bác sĩ tim mạch, chỉ định ECG."),
];

const quickPrescriptions = [
  ["Đơn thuốc hạ huyết áp", "Amlodipine 5mg, Losartan 50mg"],
  ["Đơn thuốc giảm đau", "Paracetamol 500mg, Ibuprofen 400mg"],
  ["Đơn thuốc kháng sinh", "Amoxicillin 500mg, Cefuroxime 250mg"],
];

const app = document.getElementById("app");
const modal = document.getElementById("modal");

function patient(id, name, age, gender, recentSymptoms, lastVisit, healthStatus, riskLevel, aiNotes, doctorNotes, bloodPressure, heartRate, temperature, weight) {
  return {
    id,
    name,
    age,
    gender,
    recentSymptoms,
    lastVisit,
    healthStatus,
    riskLevel,
    aiNotes,
    doctorNotes,
    vitals: { bloodPressure, heartRate, temperature, weight },
    history: [{ date: "15/04/2026", diagnosis: recentSymptoms.replace(" (AI ghi nhận)", ""), prescription: "Theo dõi và điều trị theo chỉ định" }],
  };
}

function feedback(patientId, patientName, rating, comment, date, consultationType, sentiment, aiAnalysis) {
  return { patientId, patientName, rating, comment, date, consultationType, sentiment, aiAnalysis };
}

function alertCase(patientName, age, gender, symptoms, criticalSymptom, riskLevel, timeElapsed, vitalSigns, aiAssessment, recommendedAction) {
  return { patientName, age, gender, symptoms, criticalSymptom, riskLevel, timeElapsed, vitalSigns, aiAssessment, recommendedAction };
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

function stars(rating) {
  return `<span class="stars">${"★".repeat(rating)}${"☆".repeat(5 - rating)}</span>`;
}

function badgeClass(value) {
  if (["Nguy cơ cao", "Khẩn cấp", "Tiêu cực"].includes(value)) return "badge bg-danger";
  if (["Theo dõi", "Cao", "Trung lập"].includes(value)) return "badge bg-warning";
  if (["Tốt", "Tích cực"].includes(value)) return "badge bg-success";
  return "badge";
}

function renderNav() {
  document.getElementById("sidebarNav").innerHTML = menuItems.map(([id, icon, label]) => `
    <button class="nav-item ${state.activeMenu === id ? "active" : ""}" data-menu="${id}">
      <span class="nav-icon">${icon}</span><span>${label}</span>
    </button>
  `).join("");
}

function render() {
  renderNav();
  const pages = {
    dashboard: renderDashboard,
    consultations: renderConsultations,
    records: renderRecords,
    feedback: renderFeedback,
    "ai-alerts": renderAIAlerts,
    profile: renderProfile,
    "product-report": renderProductReport,
  };
  app.innerHTML = pages[state.activeMenu]();
  bindPageEvents();
}

function renderDashboard() {
  const consultRows = consultations.map((item) => `
    <tr>
      <td>${item.name}</td>
      <td><span class="badge ${item.type === "AI Referral" ? "badge-ai" : "badge-appointment"}">${item.type === "AI Referral" ? "Giới thiệu từ AI" : "Lịch hẹn mới"}</span></td>
      <td><span class="badge ${item.priority === "high" ? "badge-not-consulted" : "badge-consulted"}">${item.priority === "high" ? "Chưa tư vấn" : "Đã tư vấn"}</span></td>
    </tr>
  `).join("");
  const barData = [["T2", 12], ["T3", 19], ["T4", 15], ["T5", 22], ["T6", 18], ["T7", 8], ["CN", 5]];
  const complexityData = [
    ["Routine", 45, "#3b82f6", "Ca thường quy: 45% - 18 ca"],
    ["Follow-up", 30, "#ef4444", "Ca cần theo dõi: 30% - 12 ca"],
    ["High Risk", 25, "#f97316", "Ca nguy cơ cao: 25% - 10 ca"],
  ];

  return `<section class="page active">
    <div class="dashboard-grid">
      <div class="dashboard-left">
        <div class="card">
          <h2 class="card-title">Tư vấn online đang chờ</h2>
          <div class="table-container"><table class="data-table"><thead><tr><th>Bệnh nhân</th><th>Loại hình</th><th>Trạng thái tư vấn</th></tr></thead><tbody>${consultRows}</tbody></table></div>
        </div>
      </div>
      <div class="dashboard-right">
        <div class="card latest-feedback-card"><h2 class="card-title">Phản hồi mới nhất</h2><div class="latest-feedback-list">${feedbacks.slice(0, 3).map((item) => `<div class="feedback-card latest-feedback-item"><div class="feedback-header"><p class="feedback-patient">${item.patientName}</p>${stars(item.rating)}</div><p class="feedback-comment">${item.comment}</p></div>`).join("")}</div></div>
      </div>
      <div class="dashboard-lower">
        <div class="card due-records-card">
          <h2 class="card-title">Hồ sơ bệnh nhân đến hạn</h2>
          <div class="list-container">${patients.slice(1, 5).map((record) => `
            <div class="list-item">
              <div class="list-item-left"><p>${record.name}</p><p>${record.recentSymptoms}</p></div>
              <div class="list-item-right"><p>${record.lastVisit}</p><button data-open-patient="${record.id}">Xem chi tiết</button></div>
            </div>
          `).join("")}</div>
        </div>
        <div class="charts-grid dashboard-charts">
          <div class="card"><h2 class="card-title">Lượt tư vấn mỗi ngày</h2><div class="chart-bars">${barData.map(([day, count]) => `<div class="bar-wrap chart-tip" data-tip="${day}: ${count} lượt tư vấn"><div class="bar" style="height:${count * 7}px"></div><span class="tiny muted">${day}</span></div>`).join("")}</div></div>
          <div class="card"><h2 class="card-title">Độ phức tạp của ca bệnh</h2><div class="donut-wrap"><div><svg class="donut-chart" viewBox="0 0 200 200" aria-label="Độ phức tạp của ca bệnh"><circle class="donut-bg" cx="100" cy="100" r="40"></circle><path class="donut-segment" fill="#3b82f6" d="M 101.56 36.02 A 64 64 0 0 1 121.26 160.37 L 113.29 137.73 A 40 40 0 0 0 100.98 60.01 Z" data-tip="${complexityData[0][3]}"></path><path class="donut-segment" fill="#ef4444" d="M 118.28 161.33 A 64 64 0 0 1 36.02 101.56 L 60.01 100.98 A 40 40 0 0 0 111.43 138.33 Z" data-tip="${complexityData[1][3]}"></path><path class="donut-segment" fill="#f97316" d="M 36.02 98.44 A 64 64 0 0 1 98.44 36.02 L 99.02 60.01 A 40 40 0 0 0 60.01 99.02 Z" data-tip="${complexityData[2][3]}"></path></svg><div class="legend">${complexityData.map(([label, , color, tip]) => `<span data-tip="${tip}"><i class="dot" style="background:${color}"></i>${label}</span>`).join("")}</div></div></div></div>
        </div>
      </div>
    </div>
  </section>`;
}

function renderConsultations() {
  const selected = consultations.find((item) => item.id === state.selectedConsultationId);
  return `<section class="split-layout">
    <aside class="panel panel-left">
      <div class="panel-header"><h2 class="card-title">Danh sách đang chờ</h2><input class="search-input" id="consultSearch" placeholder="Tìm kiếm bệnh nhân..."><p class="small muted" id="consultCount">${consultations.length} bệnh nhân</p></div>
      <div class="panel-body" id="consultList">${renderConsultList(consultations)}</div>
    </aside>
    <div class="chat-main">${selected ? renderChat(selected) : `<div class="empty-state"><div class="empty-state-title">Chọn bệnh nhân để bắt đầu tư vấn</div><p class="empty-state-description">Lịch sử chat AI và công cụ điều trị nhanh sẽ xuất hiện tại đây.</p></div>`}</div>
    <aside class="panel panel-right">${selected ? renderTreatmentPanel(selected) : `<div class="empty-state"><div class="empty-state-title">Điều trị nhanh</div><p class="empty-state-description">Chọn bệnh nhân để nhập chẩn đoán, đơn thuốc và ghi chú.</p></div>`}</aside>
  </section>`;
}

function renderConsultList(items) {
  return items.map((patientItem) => `
    <button class="patient-button ${patientItem.id === state.selectedConsultationId ? "active" : ""} ${patientItem.priority === "high" ? "animate-pulse" : ""}" data-consult-id="${patientItem.id}">
      <strong>${patientItem.name}</strong>
      <div style="margin:0.5rem 0"><span class="badge ${patientItem.type === "AI Referral" ? "badge-ai" : "badge-appointment"}">${patientItem.type === "AI Referral" ? "Giới thiệu từ AI" : "Lịch hẹn trực tiếp"}</span> <span class="${badgeClass(patientItem.status)}">${patientItem.status}</span></div>
      <p class="small muted">${patientItem.symptoms}</p>
    </button>
  `).join("");
}

function renderChat(selected) {
  return `<div class="ai-summary"><strong>AI Tóm tắt</strong><p class="small muted">${selected.aiSummary}</p></div>
    <div class="chat-actions"><button class="btn btn-success">Kết nối Video</button><button class="btn btn-primary">Gọi điện</button><span class="muted" style="margin-left:auto">Đang chờ: 15 phút</span></div>
    <div class="chat-history" id="chatHistory">${selected.chat.map(([sender, message, time]) => renderChatMessage(sender, message, time)).join("")}</div>
    <div class="chat-input"><input class="input-field" id="chatMessageInput" placeholder="Nhập tin nhắn với bệnh nhân..."><button class="btn btn-primary" id="sendChatMessage" type="button" data-toast="off">Gửi</button></div>`;
}

function renderChatMessage(sender, message, time) {
  const outgoing = sender === "ai" || sender === "doctor";
  return `<div class="message-row ${outgoing ? "ai" : ""}"><div class="message"><p>${escapeHtml(message)}</p><p class="tiny muted">${time}</p></div></div>`;
}

function renderTreatmentPanel(selected) {
  return `<div class="panel-header"><h2 class="card-title">Điều trị nhanh</h2></div><div class="panel-body section-stack">
    <div class="info-box"><strong>${selected.name}</strong><p class="small muted">${selected.symptoms}</p></div>
    <div><label class="small muted">Chẩn đoán sơ bộ</label><textarea class="textarea-field" placeholder="Nhập chẩn đoán..."></textarea></div>
    <div><label class="small muted">Đơn thuốc mẫu</label>${quickPrescriptions.map(([name, meds]) => `<button class="patient-button" data-rx="${meds}"><strong>${name}</strong><p class="tiny muted">${meds}</p></button>`).join("")}</div>
    <div><label class="small muted">Đơn thuốc</label><textarea class="textarea-field" id="prescriptionText" placeholder="Nhập đơn thuốc..."></textarea></div>
    <div><label class="small muted">Ghi chú dặn dò</label><textarea class="textarea-field" placeholder="Ghi chú cho bệnh nhân..."></textarea></div>
    <button class="btn btn-primary">Lưu & Gửi cho bệnh nhân</button><button class="btn btn-secondary">Lưu nháp</button>
  </div>`;
}

function renderRecords() {
  return `<section class="page active">
    <div class="page-header"><div><h1 class="page-title">Hồ sơ bệnh nhân</h1><p class="page-subtitle">Tra cứu hồ sơ và theo dõi tình trạng sức khỏe.</p></div></div>
    <div class="toolbar"><input class="search-input" id="recordSearch" placeholder="Tìm theo tên hoặc triệu chứng..."><select class="select-field" id="riskFilter"><option value="all">Tất cả mức độ</option><option value="low">Nguy cơ thấp</option><option value="medium">Theo dõi</option><option value="high">Nguy cơ cao</option></select></div>
    <div class="card table-container"><table class="data-table"><thead><tr><th>Họ tên</th><th>Tuổi</th><th>Triệu chứng gần nhất</th><th>Ngày khám cuối</th><th>Trạng thái</th><th>Hành động</th></tr></thead><tbody id="recordRows">${renderRecordRows(patients)}</tbody></table></div>
  </section>`;
}

function renderRecordRows(items) {
  return items.map((item) => `<tr data-open-patient="${item.id}"><td>${item.name}</td><td>${item.age}</td><td>${item.recentSymptoms}</td><td>${item.lastVisit}</td><td><span class="${badgeClass(item.healthStatus)}">${item.healthStatus}</span></td><td><button class="btn btn-primary btn-sm" data-open-patient="${item.id}">Xem chi tiết</button></td></tr>`).join("");
}

function renderFeedback() {
  const stats = {
    total: feedbacks.length,
    avg: (feedbacks.reduce((sum, item) => sum + item.rating, 0) / feedbacks.length).toFixed(1),
    positive: feedbacks.filter((item) => item.sentiment === "Tích cực").length,
    neutral: feedbacks.filter((item) => item.sentiment === "Trung lập").length,
    negative: feedbacks.filter((item) => item.sentiment === "Tiêu cực").length,
  };
  const negative = feedbacks.filter((item) => item.sentiment === "Tiêu cực");
  return `<section class="page active">
    <div class="page-header"><div><h1 class="page-title">Phản hồi từ bệnh nhân</h1><p class="page-subtitle">Theo dõi và phân tích đánh giá sau tư vấn.</p></div></div>
    <div class="grid-5">
      ${metric("Tổng phản hồi", stats.total)}
      ${metric("Đánh giá TB", `${stats.avg} ★`)}
      ${metric("Tích cực", stats.positive, "metric-success")}
      ${metric("Trung lập", stats.neutral, "metric-warning")}
      ${metric("Tiêu cực", stats.negative, "metric-danger")}
    </div>
    <div style="height:1.5rem"></div>
    ${negative.length ? `<div class="card metric-danger"><h2 class="card-title">Phản hồi tiêu cực - Cần xử lý ưu tiên</h2>${negative.map(renderFeedbackItem).join("")}</div><div style="height:1.5rem"></div>` : ""}
    <div class="card"><h2 class="card-title">Tất cả phản hồi</h2>${feedbacks.map(renderFeedbackItem).join("")}</div>
  </section>`;
}

function metric(label, value, extra = "") {
  return `<div class="metric-card ${extra}"><p class="stat-label">${label}</p><p class="metric-value">${value}</p></div>`;
}

function renderFeedbackItem(item) {
  const linkedPatient = patients[(item.patientId % patients.length)];
  return `<div class="feedback-item"><div class="feedback-header"><div><strong>${item.patientName}</strong> <span class="${badgeClass(item.sentiment)}">${item.sentiment}</span> <span class="badge">${item.consultationType}</span><p class="tiny muted">${item.date}</p></div>${stars(item.rating)}</div><p>"${item.comment}"</p><div class="info-box ai-box"><p class="tiny muted">Phân tích AI</p><p class="small">${item.aiAnalysis}</p></div><button class="btn btn-secondary btn-sm" data-open-patient="${linkedPatient.id}">Xem hồ sơ</button></div>`;
}

function renderAIAlerts() {
  return `<section class="page active">
    <div class="page-header"><div><h1 class="page-title">Cảnh báo AI - Ca khẩn cấp</h1><p class="page-subtitle">AI phát hiện các ca bệnh nguy cấp cần xử lý ngay.</p></div><div class="toolbar" style="margin:0"><span class="badge bg-danger">Khẩn cấp: ${aiAlerts.filter((a) => a.riskLevel === "Khẩn cấp").length}</span><span class="badge bg-warning">Cao: ${aiAlerts.filter((a) => a.riskLevel === "Cao").length}</span></div></div>
    <div class="toolbar"><input class="search-input" id="alertSearch" placeholder="Tìm theo tên bệnh nhân hoặc triệu chứng..."><select class="select-field" id="alertRisk"><option value="all">Tất cả mức độ</option><option value="Khẩn cấp">Khẩn cấp</option><option value="Cao">Cao</option></select></div>
    <div class="grid-4">${metric("Cảnh báo khẩn cấp", aiAlerts.filter((a) => a.riskLevel === "Khẩn cấp").length, "metric-danger")}${metric("Nguy cơ cao", aiAlerts.filter((a) => a.riskLevel === "Cao").length, "metric-warning")}${metric("Tổng cảnh báo", aiAlerts.length)}${metric("Phản hồi TB", "8m", "metric-success")}</div>
    <div style="height:1.5rem"></div><div class="alert-grid" id="alertGrid">${renderAlertCards(aiAlerts)}</div>
  </section>`;
}

function renderAlertCards(items) {
  if (!items.length) return `<div class="empty-state" style="grid-column:1/-1">Không tìm thấy cảnh báo phù hợp</div>`;
  return items.map((item) => `<div class="alert-case ${item.riskLevel === "Khẩn cấp" ? "risk-emergency" : "risk-high"}">
    <div class="feedback-header"><div><h2 class="card-title">${item.patientName}</h2><p class="small muted">${item.age} tuổi • ${item.gender}</p></div><div><span class="${badgeClass(item.riskLevel)}">${item.riskLevel}</span><p class="tiny muted">${item.timeElapsed}</p></div></div>
    <div class="info-box"><p class="tiny muted">Chẩn đoán nghi ngờ</p><strong>${item.criticalSymptom}</strong></div>
    <p class="small muted">Triệu chứng:</p><div class="pill-list">${item.symptoms.map((symptom) => `<span class="badge">${symptom}</span>`).join("")}</div>
    <div class="info-box">${Object.entries(item.vitalSigns).map(([key, value]) => `<p class="tiny"><span class="muted">${key}:</span> ${value}</p>`).join("")}</div>
    <div class="info-box ai-box"><p class="tiny muted">Đánh giá AI</p><p class="small">${item.aiAssessment}</p></div>
    <div class="info-box"><p class="tiny muted">Khuyến nghị</p><p class="small"><strong>${item.recommendedAction}</strong></p></div>
    <button class="btn btn-danger">Tiếp nhận ngay</button> <button class="btn btn-secondary">Video</button>
  </div>`).join("");
}

function renderProfile() {
  const profile = state.profile;
  return `<section class="page active">
    <div class="page-header"><div><h1 class="page-title">Hồ sơ cá nhân</h1><p class="page-subtitle">Quản lý thông tin tài khoản của bạn.</p></div><div>${state.profileEditing ? `<button class="btn btn-secondary" id="cancelProfile">Hủy</button> <button class="btn btn-success" id="saveProfile">Lưu</button>` : `<button class="btn btn-primary" id="editProfile">Chỉnh sửa</button>`}</div></div>
    <div class="section-stack">
      <div class="card"><div class="profile-top"><div><div class="avatar-large">BS</div>${state.profileEditing ? `<button class="btn btn-secondary btn-sm" style="margin-top:.75rem">Thay đổi ảnh</button>` : ""}</div><div style="flex:1"><h2 class="card-title">Thông tin cơ bản</h2>${profileFields([["fullName","Họ và tên","text"],["email","Email","email"],["phone","Số điện thoại","tel"],["dateOfBirth","Ngày sinh","date"]])}</div></div></div>
      <div class="card"><h2 class="card-title">Thông tin nghề nghiệp</h2>${profileFields([["specialty","Chuyên khoa","text"],["licenseNumber","Số chứng chỉ hành nghề","text"],["workPlace","Nơi công tác","text"],["experience","Kinh nghiệm","text"],["address","Địa chỉ","text"],["education","Trình độ học vấn","text"]])}</div>
      <div class="card"><h2 class="card-title">Lịch làm việc <span class="badge">Lịch cố định</span></h2><div class="table-container"><table class="data-table"><thead><tr><th>Ngày</th><th>Buổi sáng</th><th>Buổi chiều</th></tr></thead><tbody>${["Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7","Chủ nhật"].map((day, index) => `<tr><td>${day}</td><td>${index === 6 ? "Nghỉ" : "8:00 - 12:00"}</td><td>${index >= 5 ? "Nghỉ" : "14:00 - 17:00"}</td></tr>`).join("")}</tbody></table></div><p class="small muted">Lịch làm việc do hệ thống quản lý. Vui lòng liên hệ quản trị viên nếu cần điều chỉnh.</p></div>
      <div class="card"><div class="feedback-header"><h2 class="card-title">Bảo mật</h2>${!state.passwordEditing ? `<button class="btn btn-secondary" id="changePassword">Đổi mật khẩu</button>` : ""}</div>${state.passwordEditing ? renderPasswordForm() : `<p class="small muted">Mật khẩu của bạn được mã hóa an toàn. Thay đổi thường xuyên để bảo vệ tài khoản.</p>`}</div>
    </div>
  </section>`;
}

function renderProductReport() {
  return `<section class="page active">
    <div class="page-header"><div><h1 class="page-title">Báo cáo UI/UX & đề xuất cải tiến</h1><p class="page-subtitle">Gửi lỗi giao diện, vấn đề thao tác hoặc ý tưởng giúp Docah hỗ trợ bác sĩ tốt hơn.</p></div></div>
    <form class="card product-report-form" id="doctorReportForm">
      <div class="report-form-grid">
        <div class="field"><label>Loại phản hồi</label><select class="select-field" required><option>Lỗi giao diện UI/UX</option><option>Đề xuất cải tiến</option><option>Lỗi chức năng</option></select></div>
        <div class="field"><label>Khu vực gặp vấn đề</label><select class="select-field" required><option>Dashboard</option><option>Tư vấn Online</option><option>Hồ sơ bệnh nhân</option><option>Cảnh báo AI</option><option>Khác</option></select></div>
        <div class="field"><label>Mức ưu tiên</label><select class="select-field" required><option>Thông thường</option><option>Ảnh hưởng công việc</option><option>Không thể tiếp tục thao tác</option></select></div>
        <div class="field"><label>Tiêu đề</label><input class="input-field" required placeholder="Tóm tắt ngắn vấn đề hoặc đề xuất"></div>
      </div>
      <div class="field"><label>Mô tả chi tiết</label><textarea class="textarea-field" required rows="7" placeholder="Mô tả thao tác, kết quả hiện tại và mong muốn cải tiến..."></textarea></div>
      <div class="report-form-actions"><button class="btn btn-secondary" type="reset">Làm mới</button><button class="btn btn-primary" type="submit">Gửi phản hồi</button></div>
    </form>
  </section>`;
}

function profileFields(fields) {
  return `<div class="form-row">${fields.map(([name, label, type]) => `<div class="field"><label>${label}</label>${state.profileEditing ? `<input class="input-field" name="${name}" type="${type}" value="${escapeHtml(state.profile[name])}">` : `<div class="readonly-value">${name === "dateOfBirth" ? new Date(state.profile[name]).toLocaleDateString("vi-VN") : state.profile[name]}</div>`}</div>`).join("")}</div>`;
}

function renderPasswordForm() {
  return `<div class="section-stack">
    <div class="password-field"><input class="input-field" type="password" id="currentPassword" placeholder="Mật khẩu hiện tại"><button class="password-toggle" type="button" data-toggle-password="currentPassword" aria-label="Hiện mật khẩu hiện tại" title="Hiện mật khẩu">👁</button></div>
    <div class="password-field"><input class="input-field" type="password" id="newPassword" placeholder="Mật khẩu mới"><button class="password-toggle" type="button" data-toggle-password="newPassword" aria-label="Hiện mật khẩu mới" title="Hiện mật khẩu">👁</button></div>
    <div class="password-field"><input class="input-field" type="password" id="confirmPassword" placeholder="Xác nhận mật khẩu mới"><button class="password-toggle" type="button" data-toggle-password="confirmPassword" aria-label="Hiện xác nhận mật khẩu" title="Hiện mật khẩu">👁</button></div>
    <div><button class="btn btn-success" id="savePassword">Lưu mật khẩu</button> <button class="btn btn-secondary" id="cancelPassword">Hủy</button></div>
  </div>`;
}

function renderRecords() {
  return `<section class="page active">
    <div class="doctor-triage-page">
      <div class="page-header doctor-triage-header"><div><p class="eyebrow">Theo dõi điều trị</p><h1 class="page-title">Hồ sơ bệnh nhân</h1><p class="page-subtitle">Tra cứu hồ sơ, xem tóm tắt AI và ưu tiên các ca cần bác sĩ theo dõi.</p></div></div>
      <div class="doctor-record-layout">
        <section class="doctor-record-main">
          <div class="triage-panel doctor-filter-panel">
            <div class="panel-head"><div><p class="eyebrow">Bộ lọc hồ sơ</p><h3>Tìm bệnh nhân cần theo dõi</h3></div><span class="flow-badge">${patients.length} hồ sơ</span></div>
            <div class="doctor-filter-row"><input class="search-input" id="recordSearch" placeholder="Tìm theo tên hoặc triệu chứng..."><select class="select-field" id="riskFilter"><option value="all">Tất cả mức độ</option><option value="low">Nguy cơ thấp</option><option value="medium">Theo dõi</option><option value="high">Nguy cơ cao</option></select></div>
          </div>
          <div class="doctor-record-grid" id="recordRows">${renderRecordRows(patients)}</div>
        </section>
        <aside class="context-rail doctor-context-rail">
          <div class="status-strip doctor-status-strip">
            <div><span class="status-dot paid"></span><strong>Nguy cơ cao</strong><p>${patients.filter((item) => item.riskLevel === "high").length} hồ sơ cần xem trước trong ca trực.</p></div>
            <div><span class="status-dot safety"></span><strong>Theo dõi</strong><p>${patients.filter((item) => item.riskLevel === "medium").length} hồ sơ có triệu chứng cần cập nhật định kỳ.</p></div>
            <div><span class="status-dot free"></span><strong>Ổn định</strong><p>${patients.filter((item) => item.riskLevel === "low").length} hồ sơ đang kiểm soát tốt.</p></div>
          </div>
          <section class="mini-panel calm"><div class="mini-head"><span class="mini-icon">AI</span><h4>Gợi ý đọc nhanh</h4></div><ul class="check-list"><li>Ưu tiên hồ sơ có ghi nhận AI nguy cơ cao</li><li>Kiểm tra sinh hiệu và ghi chú điều trị gần nhất</li><li>Mở chi tiết để xem lịch sử khám và hướng xử trí</li></ul></section>
        </aside>
      </div>
    </div>
  </section>`;
}

function renderRecordRows(items) {
  if (!items.length) return `<div class="empty-state">Không tìm thấy hồ sơ phù hợp.</div>`;
  return items.map((item) => `<article class="doctor-record-card" data-open-patient="${item.id}">
    <div class="doctor-record-top"><span class="doctor-patient-avatar">${item.name.split(" ").slice(-1)[0].charAt(0)}</span><div><h4>${item.name}</h4><p>${item.age} tuổi • ${item.gender} • Khám cuối ${item.lastVisit}</p></div><span class="${badgeClass(item.healthStatus)}">${item.healthStatus}</span></div>
    <div class="doctor-record-summary"><strong>Triệu chứng gần nhất</strong><p>${item.recentSymptoms}</p></div>
    <div class="doctor-vital-grid"><span><small>Huyết áp</small><b>${item.vitals.bloodPressure}</b></span><span><small>Nhịp tim</small><b>${item.vitals.heartRate}</b></span><span><small>Nhiệt độ</small><b>${item.vitals.temperature}</b></span></div>
    <div class="doctor-card-actions"><button class="btn btn-primary btn-sm" data-open-patient="${item.id}">Xem chi tiết</button></div>
  </article>`).join("");
}

function renderAIAlerts() {
  return `<section class="page active">
    <div class="doctor-triage-page">
      <div class="page-header doctor-triage-header"><div><p class="eyebrow">Tín hiệu từ AI</p><h1 class="page-title">Cảnh báo AI - ca cần xử lý</h1><p class="page-subtitle">Các cảnh báo được trình bày như luồng sàng lọc ban đầu để bác sĩ đọc nhanh triệu chứng, sinh hiệu và hành động khuyến nghị.</p></div></div>
      <div class="status-strip doctor-status-strip">
        <div><span class="status-dot paid"></span><strong>Khẩn cấp</strong><p>${aiAlerts.filter((a) => a.riskLevel === "Kháº©n cáº¥p").length} ca cần tiếp nhận ngay.</p></div>
        <div><span class="status-dot safety"></span><strong>Nguy cơ cao</strong><p>${aiAlerts.filter((a) => a.riskLevel === "Cao").length} ca cần bác sĩ chuyên khoa đánh giá.</p></div>
        <div><span class="status-dot free"></span><strong>Phản hồi TB</strong><p>8 phút từ lúc AI chuyển cảnh báo.</p></div>
      </div>
      <div class="triage-panel doctor-filter-panel">
        <div class="panel-head"><div><p class="eyebrow">Bộ lọc cảnh báo</p><h3>Tìm nhanh ca nguy cơ</h3></div><span class="flow-badge">Tổng ${aiAlerts.length} cảnh báo</span></div>
        <div class="doctor-filter-row"><input class="search-input" id="alertSearch" placeholder="Tìm theo tên bệnh nhân hoặc triệu chứng..."><select class="select-field" id="alertRisk"><option value="all">Tất cả mức độ</option><option value="Kháº©n cáº¥p">Khẩn cấp</option><option value="Cao">Cao</option></select></div>
      </div>
      <div class="doctor-alert-grid" id="alertGrid">${renderAlertCards(aiAlerts)}</div>
    </div>
  </section>`;
}

function renderAlertCards(items) {
  if (!items.length) return `<div class="empty-state" style="grid-column:1/-1">Không tìm thấy cảnh báo phù hợp.</div>`;
  return items.map((item) => `<article class="doctor-alert-card ${item.riskLevel === "Kháº©n cáº¥p" ? "is-emergency" : "is-high"}">
    <div class="doctor-alert-head"><span class="doctor-alert-icon">${item.riskLevel === "Kháº©n cáº¥p" ? "!" : "AI"}</span><div><h4>${item.patientName}</h4><p>${item.age} tuổi • ${item.gender} • ${item.timeElapsed}</p></div><span class="${badgeClass(item.riskLevel)}">${item.riskLevel}</span></div>
    <div class="doctor-alert-diagnosis"><small>Chẩn đoán nghi ngờ</small><strong>${item.criticalSymptom}</strong></div>
    <div class="pill-list doctor-symptom-pills">${item.symptoms.map((symptom) => `<span class="badge">${symptom}</span>`).join("")}</div>
    <div class="doctor-vital-grid">${Object.entries(item.vitalSigns).map(([key, value]) => `<span><small>${key}</small><b>${value}</b></span>`).join("")}</div>
    <div class="mini-panel doctor-ai-note"><div class="mini-head"><span class="mini-icon">AI</span><h4>Đánh giá AI</h4></div><p>${item.aiAssessment}</p></div>
    <div class="doctor-alert-action"><p><strong>Khuyến nghị:</strong> ${item.recommendedAction}</p><div><button class="btn btn-danger">Tiếp nhận ngay</button><button class="btn btn-secondary">Video</button></div></div>
  </article>`).join("");
}

const doctorBodyProfilesByPatientId = {
  1: {
    summary: "Ngực trái và tim có dấu hiệu nguy cơ cao",
    duration: "2 giờ",
    parts: [
      { part: "Tim", symptoms: ["Đau thắt ngực", "Khó thở", "Đau lan xuống tay"], duration: "2 giờ" },
      { part: "Vai trái", symptoms: ["Đau lan xuống vai", "Vã mồ hôi"], duration: "2 giờ" },
    ],
  },
  2: {
    summary: "Đầu có triệu chứng kéo dài cần theo dõi",
    duration: "3 ngày",
    parts: [
      { part: "Đầu", symptoms: ["Đau đầu", "Chóng mặt", "Choáng váng"], duration: "3 ngày" },
      { part: "Mắt", symptoms: ["Mờ mắt khi đứng lên"], duration: "1 ngày" },
    ],
  },
  3: {
    summary: "Ngực và hô hấp có dấu hiệu nhiễm trùng nặng",
    duration: "2 ngày",
    parts: [
      { part: "Ngực và hô hấp", symptoms: ["Ho có đờm", "Ho ra máu", "Khó thở"], duration: "2 ngày" },
      { part: "Toàn thân", symptoms: ["Sốt cao 39°C", "Mệt nhiều"], duration: "2 ngày" },
    ],
  },
  4: {
    summary: "Bụng dưới bên phải cần loại trừ viêm ruột thừa",
    duration: "1 ngày",
    parts: [
      { part: "Bụng", symptoms: ["Đau bụng", "Buồn nôn", "Chán ăn"], duration: "1 ngày" },
    ],
  },
  5: {
    summary: "Theo dõi bệnh nền, chưa ghi nhận triệu chứng cấp",
    duration: "Tái khám định kỳ",
    parts: [
      { part: "Toàn thân", symptoms: ["Không có triệu chứng bất thường", "Theo dõi đường huyết"], duration: "Định kỳ" },
    ],
  },
  6: {
    summary: "Khám định kỳ, các chỉ số ổn định",
    duration: "Định kỳ",
    parts: [
      { part: "Toàn thân", symptoms: ["Không ghi nhận khó chịu", "Sinh hiệu ổn định"], duration: "Định kỳ" },
    ],
  },
};

const doctorAlertBodyProfiles = [
  {
    summary: "Tim và ngực trái có dấu hiệu cấp cứu",
    duration: "2 giờ",
    parts: [
      { part: "Tim", symptoms: ["Đau thắt ngực", "Khó thở", "Vã mồ hôi"], duration: "2 giờ" },
      { part: "Vai trái", symptoms: ["Đau lan ra vai"], duration: "2 giờ" },
    ],
  },
  {
    summary: "Ngực và hô hấp có biểu hiện nguy hiểm",
    duration: "2 ngày",
    parts: [
      { part: "Ngực và hô hấp", symptoms: ["Sốt cao", "Ho ra máu", "Khó thở"], duration: "2 ngày" },
    ],
  },
  {
    summary: "Đầu, miệng và nửa người có dấu hiệu đột quỵ",
    duration: "15 phút",
    parts: [
      { part: "Đầu", symptoms: ["Chóng mặt dữ dội", "Nghi ngờ đột quỵ"], duration: "15 phút" },
      { part: "Miệng", symptoms: ["Nói khó"], duration: "15 phút" },
      { part: "Tay/chân", symptoms: ["Liệt nửa người"], duration: "15 phút" },
    ],
  },
  {
    summary: "Bụng dưới có dấu hiệu ngoại khoa",
    duration: "45 phút",
    parts: [
      { part: "Bụng", symptoms: ["Đau bụng dữ dội", "Buồn nôn", "Sốt nhẹ"], duration: "45 phút" },
    ],
  },
  {
    summary: "Đầu và mắt có triệu chứng thần kinh cấp",
    duration: "25 phút",
    parts: [
      { part: "Đầu", symptoms: ["Đau đầu dữ dội", "Buồn nôn"], duration: "25 phút" },
      { part: "Mắt", symptoms: ["Nhìn mờ"], duration: "25 phút" },
    ],
  },
  {
    summary: "Tim và ngực cần đánh giá chuyên khoa",
    duration: "1 giờ",
    parts: [
      { part: "Tim", symptoms: ["Đau ngực khi gắng sức", "Khó thở", "Mệt mỏi"], duration: "1 giờ" },
    ],
  },
];

function isEmergencyAlert(item) {
  return item.riskLevel !== "Cao";
}

function renderAlertRiskOptions() {
  const emergencyValue = aiAlerts.find(isEmergencyAlert)?.riskLevel || "Khẩn cấp";
  return `<option value="all">Tất cả mức độ</option><option value="${escapeHtml(emergencyValue)}">Khẩn cấp</option><option value="Cao">Cao</option>`;
}

function renderDoctorBodySummary(profile) {
  return `<div class="doctor-body-summary">
    <div class="doctor-body-head">
      <span class="doctor-body-icon">CT</span>
      <div><small>Thông tin từ kiểm tra ban đầu</small><strong>${profile.summary}</strong></div>
      <span class="doctor-duration-pill">${profile.duration}</span>
    </div>
    <div class="doctor-body-part-list">
      ${profile.parts.map((part) => `<article class="doctor-body-part">
        <div><small>Bộ phận</small><strong>${part.part}</strong></div>
        <p>${part.symptoms.join(", ")}</p>
        <span>${part.duration}</span>
      </article>`).join("")}
    </div>
  </div>`;
}

function getDoctorBodyProfileForRecord(record) {
  return doctorBodyProfilesByPatientId[record.id] || {
    summary: record.recentSymptoms,
    duration: "Chưa rõ",
    parts: [{ part: "Toàn thân", symptoms: [record.recentSymptoms], duration: "Chưa rõ" }],
  };
}

function getDoctorBodyProfileForAlert(alertItem) {
  return doctorAlertBodyProfiles[aiAlerts.indexOf(alertItem)] || {
    summary: alertItem.criticalSymptom,
    duration: alertItem.timeElapsed,
    parts: [{ part: "Vùng liên quan", symptoms: alertItem.symptoms, duration: alertItem.timeElapsed }],
  };
}

function getDoctorBodySearchText(profile) {
  return `${profile.summary} ${profile.duration} ${profile.parts.map((part) => `${part.part} ${part.duration} ${part.symptoms.join(" ")}`).join(" ")}`;
}

function renderRecords() {
  return `<section class="page active">
    <div class="doctor-triage-page">
      <div class="page-header doctor-triage-header"><div><p class="eyebrow">Theo dõi điều trị</p><h1 class="page-title">Hồ sơ bệnh nhân</h1><p class="page-subtitle">Hiển thị lại thông tin bệnh nhân gửi từ kiểm tra ban đầu: bộ phận, triệu chứng, thời gian bị và mức độ ưu tiên.</p></div></div>
      <div class="doctor-record-layout">
        <section class="doctor-record-main">
          <div class="triage-panel doctor-filter-panel">
            <div class="panel-head"><div><p class="eyebrow">Bộ lọc hồ sơ</p><h3>Tìm bệnh nhân theo triệu chứng đã chọn</h3></div><span class="flow-badge">${patients.length} hồ sơ</span></div>
            <div class="doctor-filter-row"><input class="search-input" id="recordSearch" placeholder="Tìm theo tên, bộ phận hoặc triệu chứng..."><select class="select-field" id="riskFilter"><option value="all">Tất cả mức độ</option><option value="low">Nguy cơ thấp</option><option value="medium">Theo dõi</option><option value="high">Nguy cơ cao</option></select></div>
          </div>
          <div class="doctor-record-grid" id="recordRows">${renderRecordRows(patients)}</div>
        </section>
        <aside class="context-rail doctor-context-rail">
          <div class="status-strip doctor-status-strip">
            <div><span class="status-dot paid"></span><strong>Nguy cơ cao</strong><p>${patients.filter((item) => item.riskLevel === "high").length} hồ sơ có vùng cơ thể cần xem trước.</p></div>
            <div><span class="status-dot safety"></span><strong>Theo dõi</strong><p>${patients.filter((item) => item.riskLevel === "medium").length} hồ sơ có triệu chứng kéo dài hoặc cần cập nhật.</p></div>
            <div><span class="status-dot free"></span><strong>Ổn định</strong><p>${patients.filter((item) => item.riskLevel === "low").length} hồ sơ chưa có dấu hiệu cấp.</p></div>
          </div>
          <section class="mini-panel calm"><div class="mini-head"><span class="mini-icon">AI</span><h4>Cách đọc nhanh</h4></div><ul class="check-list"><li>Xem bộ phận bệnh nhân đã chọn trên bản đồ cơ thể</li><li>Đối chiếu triệu chứng và thời gian bị bệnh</li><li>Mở chi tiết để kiểm tra sinh hiệu, ghi chú AI và lịch sử khám</li></ul></section>
        </aside>
      </div>
    </div>
  </section>`;
}

function renderRecordRows(items) {
  if (!items.length) return `<div class="empty-state">Không tìm thấy hồ sơ phù hợp.</div>`;
  return items.map((item) => {
    const bodyProfile = getDoctorBodyProfileForRecord(item);
    return `<article class="doctor-record-card" data-open-patient="${item.id}">
      <div class="doctor-record-top"><span class="doctor-patient-avatar">${item.name.split(" ").slice(-1)[0].charAt(0)}</span><div><h4>${item.name}</h4><p>${item.age} tuổi • ${item.gender} • Khám cuối ${item.lastVisit}</p></div><span class="${badgeClass(item.healthStatus)}">${item.healthStatus}</span></div>
      ${renderDoctorBodySummary(bodyProfile)}
      <div class="doctor-vital-grid"><span><small>Huyết áp</small><b>${item.vitals.bloodPressure}</b></span><span><small>Nhịp tim</small><b>${item.vitals.heartRate}</b></span><span><small>Nhiệt độ</small><b>${item.vitals.temperature}</b></span></div>
      <div class="doctor-card-actions"><button class="btn btn-primary btn-sm" data-open-patient="${item.id}">Xem chi tiết</button></div>
    </article>`;
  }).join("");
}

function renderAIAlerts() {
  return `<section class="page active">
    <div class="doctor-triage-page">
      <div class="page-header doctor-triage-header"><div><p class="eyebrow">Tín hiệu từ kiểm tra ban đầu</p><h1 class="page-title">Cảnh báo AI - ca cần xử lý</h1><p class="page-subtitle">Mỗi cảnh báo thể hiện vùng cơ thể bệnh nhân đã chọn, triệu chứng, thời gian bị bệnh và khuyến nghị xử trí.</p></div></div>
      <div class="status-strip doctor-status-strip">
        <div><span class="status-dot paid"></span><strong>Khẩn cấp</strong><p>${aiAlerts.filter(isEmergencyAlert).length} ca có dấu hiệu cần tiếp nhận ngay.</p></div>
        <div><span class="status-dot safety"></span><strong>Nguy cơ cao</strong><p>${aiAlerts.filter((a) => a.riskLevel === "Cao").length} ca cần bác sĩ chuyên khoa đánh giá.</p></div>
        <div><span class="status-dot free"></span><strong>Phản hồi TB</strong><p>8 phút từ lúc AI chuyển cảnh báo.</p></div>
      </div>
      <div class="triage-panel doctor-filter-panel">
        <div class="panel-head"><div><p class="eyebrow">Bộ lọc cảnh báo</p><h3>Tìm nhanh theo bộ phận hoặc triệu chứng</h3></div><span class="flow-badge">Tổng ${aiAlerts.length} cảnh báo</span></div>
        <div class="doctor-filter-row"><input class="search-input" id="alertSearch" placeholder="Tìm theo tên bệnh nhân hoặc triệu chứng..."><select class="select-field" id="alertRisk">${renderAlertRiskOptions()}</select></div>
      </div>
      <div class="doctor-alert-grid" id="alertGrid">${renderAlertCards(aiAlerts)}</div>
    </div>
  </section>`;
}

function renderAlertCards(items) {
  if (!items.length) return `<div class="empty-state" style="grid-column:1/-1">Không tìm thấy cảnh báo phù hợp.</div>`;
  return items.map((item) => {
    const bodyProfile = getDoctorBodyProfileForAlert(item);
    return `<article class="doctor-alert-card ${isEmergencyAlert(item) ? "is-emergency" : "is-high"}">
      <div class="doctor-alert-head"><span class="doctor-alert-icon">${isEmergencyAlert(item) ? "!" : "AI"}</span><div><h4>${item.patientName}</h4><p>${item.age} tuổi • ${item.gender} • ${item.timeElapsed}</p></div><span class="${badgeClass(item.riskLevel)}">${item.riskLevel}</span></div>
      <div class="doctor-alert-diagnosis"><small>Chẩn đoán nghi ngờ</small><strong>${item.criticalSymptom}</strong></div>
      ${renderDoctorBodySummary(bodyProfile)}
      <div class="doctor-vital-grid">${Object.entries(item.vitalSigns).map(([key, value]) => `<span><small>${key}</small><b>${value}</b></span>`).join("")}</div>
      <div class="mini-panel doctor-ai-note"><div class="mini-head"><span class="mini-icon">AI</span><h4>Đánh giá AI</h4></div><p>${item.aiAssessment}</p></div>
      <div class="doctor-alert-action"><p><strong>Khuyến nghị:</strong> ${item.recommendedAction}</p><div><button class="btn btn-danger">Tiếp nhận ngay</button><button class="btn btn-secondary">Video</button></div></div>
    </article>`;
  }).join("");
}

function bindPageEvents() {
  document.querySelectorAll("[data-menu]").forEach((button) => button.addEventListener("click", () => {
    state.activeMenu = button.dataset.menu;
    closeMobileMenu();
    render();
  }));

  bindOpenPatientButtons();
  bindConsultButtons();
  bindChatEvents();

  const consultSearch = document.getElementById("consultSearch");
  if (consultSearch) consultSearch.addEventListener("input", () => {
    const term = consultSearch.value.toLowerCase();
    const filtered = consultations.filter((item) => `${item.name} ${item.symptoms}`.toLowerCase().includes(term));
    document.getElementById("consultList").innerHTML = renderConsultList(filtered);
    document.getElementById("consultCount").textContent = `${filtered.length} bệnh nhân`;
    bindConsultButtons();
  });

  const recordSearch = document.getElementById("recordSearch");
  const riskFilter = document.getElementById("riskFilter");
  if (recordSearch && riskFilter) {
    const update = () => {
      const term = recordSearch.value.toLowerCase();
      const risk = riskFilter.value;
      const filtered = patients.filter((item) => `${item.name} ${item.recentSymptoms} ${getDoctorBodySearchText(getDoctorBodyProfileForRecord(item))}`.toLowerCase().includes(term) && (risk === "all" || item.riskLevel === risk));
      document.getElementById("recordRows").innerHTML = renderRecordRows(filtered);
      bindOpenPatientButtons();
    };
    recordSearch.addEventListener("input", update);
    riskFilter.addEventListener("change", update);
  }

  const alertSearch = document.getElementById("alertSearch");
  const alertRisk = document.getElementById("alertRisk");
  if (alertSearch && alertRisk) {
    const update = () => {
      const term = alertSearch.value.toLowerCase();
      const risk = alertRisk.value;
      const filtered = aiAlerts.filter((item) => `${item.patientName} ${item.criticalSymptom} ${item.symptoms.join(" ")} ${getDoctorBodySearchText(getDoctorBodyProfileForAlert(item))}`.toLowerCase().includes(term) && (risk === "all" || item.riskLevel === risk));
      document.getElementById("alertGrid").innerHTML = renderAlertCards(filtered);
    };
    alertSearch.addEventListener("input", update);
    alertRisk.addEventListener("change", update);
  }

  document.querySelectorAll("[data-rx]").forEach((button) => button.addEventListener("click", () => {
    document.getElementById("prescriptionText").value = button.dataset.rx;
  }));

  const editProfile = document.getElementById("editProfile");
  if (editProfile) editProfile.addEventListener("click", () => {
    state.profileEditing = true;
    render();
  });
  const cancelProfile = document.getElementById("cancelProfile");
  if (cancelProfile) cancelProfile.addEventListener("click", () => {
    state.profileEditing = false;
    render();
  });
  const saveProfile = document.getElementById("saveProfile");
  if (saveProfile) saveProfile.addEventListener("click", () => {
    document.querySelectorAll(".field input").forEach((input) => {
      state.profile[input.name] = input.value;
    });
    state.profileEditing = false;
    render();
  });
  const changePassword = document.getElementById("changePassword");
  if (changePassword) changePassword.addEventListener("click", () => {
    state.passwordEditing = true;
    render();
  });
  const cancelPassword = document.getElementById("cancelPassword");
  if (cancelPassword) cancelPassword.addEventListener("click", () => {
    state.passwordEditing = false;
    render();
  });
  const savePassword = document.getElementById("savePassword");
  if (savePassword) savePassword.addEventListener("click", () => {
    if (document.getElementById("newPassword").value !== document.getElementById("confirmPassword").value) {
      alert("Mật khẩu mới không khớp!");
      return;
    }
    state.passwordEditing = false;
    if (window.showToast) {
      showToast("Cập nhật mật khẩu thành công", "Mật khẩu mới đã được lưu.");
    }
    render();
  });

  document.querySelectorAll("[data-toggle-password]").forEach((button) => button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.togglePassword);
    if (!input) return;
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    button.textContent = isHidden ? "🙈" : "👁";
    button.setAttribute("aria-label", isHidden ? "Ẩn mật khẩu" : "Hiện mật khẩu");
    input.focus();
  }));

  const doctorReportForm = document.getElementById("doctorReportForm");
  if (doctorReportForm) doctorReportForm.addEventListener("submit", (event) => {
    event.preventDefault();
    doctorReportForm.reset();
    if (window.showToast) {
      showToast("Đã gửi phản hồi", "Báo cáo UI/UX hoặc đề xuất cải tiến đã được chuyển đến đội ngũ sản phẩm.");
    }
  });
}

function bindChatEvents() {
  const input = document.getElementById("chatMessageInput");
  const sendButton = document.getElementById("sendChatMessage");
  const history = document.getElementById("chatHistory");
  const selected = consultations.find((item) => item.id === state.selectedConsultationId);

  if (!input || !sendButton || !history || !selected) return;

  const sendMessage = () => {
    const message = input.value.trim();
    if (!message) return;

    const time = new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });
    selected.chat.push(["doctor", message, time]);
    history.insertAdjacentHTML("beforeend", renderChatMessage("doctor", message, time));
    input.value = "";
    history.scrollTop = history.scrollHeight;

  };

  sendButton.addEventListener("click", sendMessage);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  });

  history.scrollTop = history.scrollHeight;
}

function bindOpenPatientButtons() {
  document.querySelectorAll("[data-open-patient]").forEach((element) => element.addEventListener("click", (event) => {
    event.stopPropagation();
    openPatientModal(patients.find((item) => item.id === Number(element.dataset.openPatient)));
  }));
}

function bindConsultButtons() {
  document.querySelectorAll("[data-consult-id]").forEach((button) => button.addEventListener("click", () => {
    state.selectedConsultationId = Number(button.dataset.consultId);
    render();
  }));
}

function openPatientModal(record) {
  if (!record) return;
  modal.classList.add("active");
  modal.innerHTML = `<div class="modal-content">
    <div class="modal-header"><div><h2>${record.name}</h2><p>${record.age} tuổi • ${record.gender}</p></div><button class="modal-close" id="closeModal">×</button></div>
    <div class="modal-body">
      <div class="modal-section"><h3>Sinh hiệu</h3><div class="grid-4">${metric("Huyết áp", record.vitals.bloodPressure)}${metric("Nhịp tim", record.vitals.heartRate)}${metric("Nhiệt độ", record.vitals.temperature)}${metric("Cân nặng", record.vitals.weight)}</div></div>
      <div class="modal-section"><h3>Ghi nhận từ AI</h3><div class="info-box ai-box">${record.aiNotes.map((note) => `<p class="small">• ${note}</p>`).join("")}</div></div>
      <div class="modal-section"><h3>Ghi chú của bác sĩ</h3><div class="info-box">${record.doctorNotes.map((note) => `<p class="small">• ${note}</p>`).join("") || `<p class="small muted">Chưa có ghi chú</p>`}</div></div>
      <div class="modal-section"><h3>Lịch sử khám bệnh</h3>${record.history.map((visit) => `<div class="history-card"><strong>${visit.date}</strong><p class="small"><strong>Chẩn đoán:</strong> ${visit.diagnosis}</p><p class="small"><strong>Đơn thuốc:</strong> ${visit.prescription}</p></div>`).join("")}</div>
    </div>
  </div>`;
  document.getElementById("closeModal").addEventListener("click", closeModal);
}

function closeModal() {
  modal.classList.remove("active");
  modal.innerHTML = "";
}

function renderRecords() {
  return `<section class="page active">
    <div class="doctor-triage-page">
      <div class="page-header doctor-triage-header"><div><p class="eyebrow">Theo dõi điều trị</p><h1 class="page-title">Hồ sơ bệnh nhân</h1><p class="page-subtitle">Hiển thị lại thông tin bệnh nhân gửi từ kiểm tra ban đầu: bộ phận, triệu chứng, thời gian bị và mức độ ưu tiên.</p></div></div>
      <div class="doctor-record-layout">
        <section class="doctor-record-main">
          <div class="triage-panel doctor-filter-panel">
            <div class="panel-head"><div><p class="eyebrow">Bộ lọc hồ sơ</p><h3>Tìm bệnh nhân theo triệu chứng đã chọn</h3></div><span class="flow-badge">${patients.length} hồ sơ</span></div>
            <div class="doctor-filter-row"><input class="search-input" id="recordSearch" placeholder="Tìm theo tên, bộ phận hoặc triệu chứng..."><select class="select-field" id="riskFilter"><option value="all">Tất cả mức độ</option><option value="low">Nguy cơ thấp</option><option value="medium">Theo dõi</option><option value="high">Nguy cơ cao</option></select></div>
          </div>
          <div class="doctor-record-grid" id="recordRows">${renderRecordRows(patients)}</div>
        </section>
      </div>
    </div>
  </section>`;
}

function renderRecordRows(items) {
  if (!items.length) return `<div class="empty-state">Không tìm thấy hồ sơ phù hợp.</div>`;
  return items.map((item) => {
    const bodyProfile = getDoctorBodyProfileForRecord(item);
    return `<article class="doctor-record-card" data-open-patient="${item.id}">
      <div class="doctor-record-top"><span class="doctor-patient-avatar">${item.name.split(" ").slice(-1)[0].charAt(0)}</span><div><h4>${item.name}</h4><p>${item.age} tuổi - ${item.gender} - Khám cuối ${item.lastVisit}</p></div><span class="${badgeClass(item.healthStatus)}">${item.healthStatus}</span></div>
      ${renderDoctorBodySummary(bodyProfile)}
      <div class="doctor-vital-grid"><span><small>Huyết áp</small><b>${item.vitals.bloodPressure}</b></span><span><small>Nhịp tim</small><b>${item.vitals.heartRate}</b></span><span><small>Nhiệt độ</small><b>${item.vitals.temperature}</b></span></div>
      <div class="doctor-card-actions"><button class="btn btn-primary btn-sm" data-open-patient="${item.id}">Xem chi tiết</button></div>
    </article>`;
  }).join("");
}

function renderAIAlerts() {
  return `<section class="page active">
    <div class="doctor-triage-page">
      <div class="page-header doctor-triage-header"><div><p class="eyebrow">Tín hiệu từ kiểm tra ban đầu</p><h1 class="page-title">Cảnh báo AI - ca cần xử lý</h1><p class="page-subtitle">Mỗi cảnh báo thể hiện vùng cơ thể bệnh nhân đã chọn, triệu chứng, thời gian bị bệnh và khuyến nghị xử trí.</p></div></div>
      <div class="status-strip doctor-status-strip">
        <div><span class="status-dot paid"></span><strong>Khẩn cấp</strong><p>${aiAlerts.filter(isEmergencyAlert).length} ca có dấu hiệu cần tiếp nhận ngay.</p></div>
        <div><span class="status-dot safety"></span><strong>Nguy cơ cao</strong><p>${aiAlerts.filter((a) => a.riskLevel === "Cao").length} ca cần bác sĩ chuyên khoa đánh giá.</p></div>
        <div><span class="status-dot free"></span><strong>Phản hồi TB</strong><p>8 phút từ lúc AI chuyển cảnh báo.</p></div>
      </div>
      <div class="triage-panel doctor-filter-panel">
        <div class="panel-head"><div><p class="eyebrow">Bộ lọc cảnh báo</p><h3>Tìm nhanh theo bộ phận hoặc triệu chứng</h3></div><span class="flow-badge">Tổng ${aiAlerts.length} cảnh báo</span></div>
        <div class="doctor-filter-row"><input class="search-input" id="alertSearch" placeholder="Tìm theo tên bệnh nhân hoặc triệu chứng..."><select class="select-field" id="alertRisk">${renderAlertRiskOptions()}</select></div>
      </div>
      <div class="doctor-alert-grid" id="alertGrid">${renderAlertCards(aiAlerts)}</div>
    </div>
  </section>`;
}

function renderAlertCards(items) {
  if (!items.length) return `<div class="empty-state" style="grid-column:1/-1">Không tìm thấy cảnh báo phù hợp.</div>`;
  return items.map((item) => {
    const bodyProfile = getDoctorBodyProfileForAlert(item);
    const alertIndex = aiAlerts.indexOf(item);
    return `<article class="doctor-alert-card ${isEmergencyAlert(item) ? "is-emergency" : "is-high"}">
      <div class="doctor-alert-head"><span class="doctor-alert-icon">${isEmergencyAlert(item) ? "!" : "AI"}</span><div><h4>${item.patientName}</h4><p>${item.age} tuổi - ${item.gender} - ${item.timeElapsed}</p></div><span class="${badgeClass(item.riskLevel)}">${item.riskLevel}</span></div>
      <div class="doctor-alert-diagnosis"><small>Chẩn đoán nghi ngờ</small><strong>${item.criticalSymptom}</strong></div>
      ${renderDoctorBodySummary(bodyProfile)}
      <div class="doctor-vital-grid">${Object.entries(item.vitalSigns).map(([key, value]) => `<span><small>${key}</small><b>${value}</b></span>`).join("")}</div>
      <div class="mini-panel doctor-ai-note"><div class="mini-head"><span class="mini-icon">AI</span><h4>Đánh giá AI</h4></div><p>${item.aiAssessment}</p></div>
      <div class="doctor-alert-action"><p><strong>Khuyến nghị:</strong> ${item.recommendedAction}</p><div><button class="btn btn-danger" data-accept-alert="${alertIndex}">Tiếp nhận ngay</button><button class="btn btn-secondary">Video</button></div></div>
    </article>`;
  }).join("");
}

function openAlertChat(alertIndex) {
  const alertItem = aiAlerts[alertIndex];
  if (!alertItem) return;
  let consultation = consultations.find((item) => item.name === alertItem.patientName);
  if (!consultation) {
    consultation = {
      id: Math.max(...consultations.map((item) => item.id)) + 1,
      name: alertItem.patientName,
      type: "AI Referral",
      status: alertItem.riskLevel === "Cao" ? "Nguy cơ cao" : "Khẩn cấp",
      priority: "high",
      symptoms: alertItem.symptoms.join(", "),
      aiSummary: `${alertItem.age} tuổi, ${alertItem.gender}. ${alertItem.aiAssessment} Khuyến nghị: ${alertItem.recommendedAction}`,
      chat: [
        ["user", `Tôi đang gặp các triệu chứng: ${alertItem.symptoms.join(", ")}`, alertItem.timeElapsed],
        ["ai", alertItem.aiAssessment, alertItem.timeElapsed],
      ],
    };
    consultations.unshift(consultation);
  }
  state.selectedConsultationId = consultation.id;
  state.activeMenu = "consultations";
  render();
}

function closeMobileMenu() {
  document.getElementById("sidebar").classList.remove("mobile-open");
  document.getElementById("mobileOverlay").classList.remove("active");
}

document.getElementById("logoutBtn").addEventListener("click", () => {
  if (confirm("Bạn có chắc chắn muốn đăng xuất?")) window.location.href = "../index.html";
});

const accountToggle = document.getElementById("accountToggle");
const accountDropdown = document.getElementById("accountDropdown");

accountToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = accountDropdown.classList.toggle("show");
  accountToggle.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (event) => {
  if (!accountDropdown.contains(event.target)) {
    accountDropdown.classList.remove("show");
    accountToggle.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("click", (event) => {
  const acceptButton = event.target.closest("[data-accept-alert]");
  if (!acceptButton) return;
  event.preventDefault();
  event.stopPropagation();
  openAlertChat(Number(acceptButton.dataset.acceptAlert));
});

document.getElementById("mobileMenuToggle").addEventListener("click", () => {
  document.getElementById("sidebar").classList.add("mobile-open");
  document.getElementById("mobileOverlay").classList.add("active");
});

document.getElementById("mobileOverlay").addEventListener("click", closeMobileMenu);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

render();
