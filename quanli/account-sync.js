(function () {
  const managerAccountNameKey = "docahManagerAccountName";

  function getInitials(name) {
    const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return "QL";
    const initials = parts.length === 1 ? parts[0].slice(0, 2) : `${parts[0][0]}${parts[parts.length - 1][0]}`;
    return initials.toUpperCase();
  }

  function getFallbackName() {
    return document.getElementById("fullName")?.value?.trim()
      || document.getElementById("displayName")?.textContent?.trim()
      || "";
  }

  function syncManagerAccountName(name) {
    const nextName = String(name || localStorage.getItem(managerAccountNameKey) || getFallbackName()).trim();
    if (!nextName) return;

    localStorage.setItem(managerAccountNameKey, nextName);
    document.querySelectorAll(".account-button .dot + div > div:first-child").forEach((node) => {
      node.textContent = nextName;
    });
    document.querySelectorAll(".account-button .dot").forEach((node) => {
      node.textContent = getInitials(nextName);
    });

    const displayName = document.getElementById("displayName");
    if (displayName) displayName.textContent = nextName;

    const fullName = document.getElementById("fullName");
    if (fullName && fullName.value !== nextName) fullName.value = nextName;
  }

  window.syncDocahManagerAccountName = syncManagerAccountName;
  syncManagerAccountName();
})();
