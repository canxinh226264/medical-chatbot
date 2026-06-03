(function () {
  const actionMap = [
    { test: /lưu\s*&\s*gửi|lưu và gửi|gửi cho bệnh nhân/i, title: "Đã lưu và gửi", message: "Thông tin đã được gửi tới người nhận." },
    { test: /gửi phản hồi/i, title: "Gửi phản hồi thành công", message: "Phản hồi đã được ghi nhận trên hệ thống." },
    { test: /gửi/i, title: "Gửi thành công", message: "Nội dung đã được gửi đi." },
    { test: /lưu mật khẩu|thay đổi mật khẩu/i, title: "Cập nhật mật khẩu thành công", message: "Mật khẩu mới đã được lưu." },
    { test: /lưu vai trò/i, title: "Lưu vai trò thành công", message: "Quyền và vai trò đã được cập nhật." },
    { test: /lưu thay đổi|cập nhật|lưu$/i, title: "Lưu thành công", message: "Thay đổi đã được cập nhật trên màn hình." },
    { test: /áp dụng/i, title: "Đã áp dụng", message: "Bộ lọc hoặc tùy chọn mới đã được áp dụng." },
    { test: /xuất|export/i, title: "Đang xuất báo cáo", message: "Hệ thống đang chuẩn bị tệp báo cáo." },
    { test: /tiếp nhận ngay/i, title: "Đã tiếp nhận ca", message: "Ca bệnh đã được chuyển vào danh sách xử lý." },
    { test: /^xác nhận$/i, title: "Xác nhận thành công", message: "Hành động đã được xác nhận." }
  ];

  const passiveMap = [
    { test: /^chỉnh sửa$/i, title: "Đã mở chỉnh sửa", message: "Bạn có thể thay đổi thông tin và bấm lưu khi hoàn tất." },
    { test: /^thêm\s+(cơ sở|nhân sự|vai trò|tích hợp)/i, title: "Đang thêm mới", message: "Nhập thông tin rồi bấm lưu để hoàn tất." }
  ];

  const ignored = /đăng xuất|hủy|đóng|quay lại|xem chi tiết|xem tất cả|xem hồ sơ|video|hiện mật khẩu|ẩn mật khẩu/i;
  let timer;
  let chartTooltip;

  function ensureToast() {
    if (!document.getElementById("globalToastStyle")) {
      const style = document.createElement("style");
      style.id = "globalToastStyle";
      style.textContent = `
        .global-toast {
          position: fixed;
          right: 24px;
          bottom: 24px;
          width: min(380px, calc(100vw - 32px));
          display: grid;
          gap: 6px;
          padding: 16px 18px;
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.98), rgba(17, 24, 39, 0.98));
          border: 1px solid rgba(34, 197, 94, 0.28);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.36);
          color: #fff;
          opacity: 0;
          pointer-events: none;
          transform: translateY(14px);
          transition: opacity 0.22s ease, transform 0.22s ease;
          z-index: 9999;
        }
        .global-toast.show {
          opacity: 1;
          transform: translateY(0);
        }
        .global-toast strong {
          color: #bbf7d0;
        }
        .global-toast span {
          color: #94a3b8;
          line-height: 1.45;
        }
      `;
      document.head.appendChild(style);
    }

    let toast = document.getElementById("globalToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "globalToast";
      toast.className = "global-toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      toast.innerHTML = '<strong></strong><span></span>';
      document.body.appendChild(toast);
    }

    return toast;
  }

  function showToast(title, message) {
    const toast = ensureToast();
    toast.querySelector("strong").textContent = title;
    toast.querySelector("span").textContent = message;
    toast.classList.add("show");
    clearTimeout(timer);
    timer = setTimeout(() => toast.classList.remove("show"), 3600);
  }

  function ensureChartTooltip() {
    if (!document.getElementById("globalChartTooltipStyle")) {
      const style = document.createElement("style");
      style.id = "globalChartTooltipStyle";
      style.textContent = `
        .global-chart-tooltip {
          position: fixed;
          left: 0;
          top: 0;
          z-index: 9998;
          max-width: 260px;
          padding: 10px 12px;
          border-radius: 14px;
          background: rgba(2, 6, 23, 0.96);
          border: 1px solid rgba(148, 163, 184, 0.28);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.36);
          color: #f8fafc;
          font-size: 0.86rem;
          line-height: 1.45;
          pointer-events: none;
          opacity: 0;
          transform: translate(12px, 12px);
          transition: opacity 0.14s ease;
        }
        .global-chart-tooltip.show {
          opacity: 1;
        }
      `;
      document.head.appendChild(style);
    }

    if (!chartTooltip) {
      chartTooltip = document.createElement("div");
      chartTooltip.className = "global-chart-tooltip";
      chartTooltip.setAttribute("role", "status");
      chartTooltip.setAttribute("aria-live", "polite");
      document.body.appendChild(chartTooltip);
    }

    return chartTooltip;
  }

  function moveChartTooltip(event) {
    if (!chartTooltip) return;
    const rect = chartTooltip.getBoundingClientRect();
    const x = Math.min(event.clientX + 14, window.innerWidth - rect.width - 12);
    const y = Math.min(event.clientY + 14, window.innerHeight - rect.height - 12);
    chartTooltip.style.left = `${Math.max(12, x)}px`;
    chartTooltip.style.top = `${Math.max(12, y)}px`;
    chartTooltip.style.transform = "none";
  }

  function getButtonText(button) {
    return (button.dataset.toastText || button.textContent || button.value || "").replace(/\s+/g, " ").trim();
  }

  function closeDocahSelects(except = null) {
    document.querySelectorAll(".docah-select.open").forEach((dropdown) => {
      if (dropdown === except) return;
      dropdown.classList.remove("open");
      dropdown.querySelector(".docah-select-trigger")?.setAttribute("aria-expanded", "false");
    });
  }

  function enhanceDocahSelect(select) {
    if (!(select instanceof HTMLSelectElement)) return;
    if (select.multiple || select.disabled || select.dataset.docahEnhanced === "true") return;
    if (select.classList.contains("expert-select-native") || select.closest(".expert-select, .docah-select")) return;

    select.dataset.docahEnhanced = "true";
    select.classList.add("docah-select-native");
    select.tabIndex = -1;
    select.setAttribute("aria-hidden", "true");

    const dropdown = document.createElement("div");
    dropdown.className = "docah-select";
    select.parentNode.insertBefore(dropdown, select);
    dropdown.appendChild(select);

    const trigger = document.createElement("button");
    trigger.className = "docah-select-trigger";
    trigger.type = "button";
    trigger.setAttribute("aria-expanded", "false");
    trigger.innerHTML = '<span></span><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m7 10 5 5 5-5"/></svg>';
    dropdown.appendChild(trigger);

    const menu = document.createElement("div");
    menu.className = "docah-select-menu";
    dropdown.appendChild(menu);

    Array.from(select.options).forEach((option) => {
      const item = document.createElement("button");
      item.className = "docah-select-option";
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
      menu.querySelectorAll(".docah-select-option").forEach((item) => {
        item.classList.toggle("active", item.dataset.value === select.value);
      });
    };

    trigger.addEventListener("click", (event) => {
      event.stopPropagation();
      const shouldOpen = !dropdown.classList.contains("open");
      closeDocahSelects(dropdown);
      dropdown.classList.toggle("open", shouldOpen);
      trigger.setAttribute("aria-expanded", String(shouldOpen));
    });

    select.addEventListener("change", sync);
    sync();
  }

  function enhanceDocahSelects(root = document) {
    if (root.matches?.("select")) enhanceDocahSelect(root);
    root.querySelectorAll?.("select").forEach(enhanceDocahSelect);
  }

  function setupDocahSelects() {
    enhanceDocahSelects();
    new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) enhanceDocahSelects(node);
        });
      });
    }).observe(document.body, { childList: true, subtree: true });
  }

  function inferToast(button) {
    if (button.dataset.toastTitle) {
      return {
        title: button.dataset.toastTitle,
        message: button.dataset.toastMessage || "Thao tác đã được xử lý."
      };
    }

    const text = getButtonText(button);
    if (!text || ignored.test(text)) return null;

    const matched = actionMap.find((item) => item.test.test(text)) || passiveMap.find((item) => item.test.test(text));
    return matched ? { title: matched.title, message: matched.message } : null;
  }

  window.showToast = showToast;
  window.DocahToast = { show: showToast };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupDocahSelects);
  } else {
    setupDocahSelects();
  }

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".docah-select")) closeDocahSelects();
    const button = event.target.closest("button, input[type='button'], input[type='submit']");
    if (!button || button.disabled || button.dataset.toast === "off" || button.closest(".password-field")) return;

    const toast = inferToast(button);
    if (!toast) return;

    setTimeout(() => showToast(toast.title, toast.message), 80);
  });

  document.addEventListener("submit", (event) => {
    const submitter = event.submitter;
    if (submitter) return;
    const form = event.target;
    if (!form || form.dataset.toast === "off") return;
    setTimeout(() => showToast("Lưu thành công", "Thông tin đã được cập nhật trên màn hình."), 80);
  });

  document.addEventListener("mouseover", (event) => {
    const target = event.target.closest("[data-tip]");
    if (!target) return;
    const tooltip = ensureChartTooltip();
    tooltip.textContent = target.dataset.tip;
    tooltip.classList.add("show");
    moveChartTooltip(event);
  });

  document.addEventListener("mousemove", (event) => {
    if (!chartTooltip || !chartTooltip.classList.contains("show")) return;
    if (!event.target.closest("[data-tip]")) return;
    moveChartTooltip(event);
  });

  document.addEventListener("mouseout", (event) => {
    if (!chartTooltip) return;
    const target = event.target.closest("[data-tip]");
    if (!target) return;
    const related = event.relatedTarget && event.relatedTarget.closest ? event.relatedTarget.closest("[data-tip]") : null;
    if (related === target) return;
    chartTooltip.classList.remove("show");
  });
})();
