import { profile, projects, secondaryRepositories, expertise, stackGroups, journey } from "./data.js";

const $ = (selector, root = document) => root.querySelector(selector);
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
const repoURL = (name) => `${profile.github}/${name}`;

function renderProfile() {
  document.title = `${profile.name} — ${profile.title}`;
  $("#hero-role").textContent = profile.title.toUpperCase();
  $("#hero-location").textContent = profile.location.toUpperCase();
  $("#hero-name").textContent = profile.name;
  $("#hero-intro").textContent = profile.introduction;
  $("#hero-focus").innerHTML = profile.focus.map((item) => `<span>${escapeHTML(item)}</span>`).join("");
  $("#download-cv").href = profile.cvPath;
  $("#about-lead").textContent = profile.aboutLead;
  $("#about-paragraph-one").textContent = profile.aboutParagraphs[0];
  $("#about-paragraph-two").textContent = profile.aboutParagraphs[1];
  $("#background-placeholder").textContent = profile.backgroundPlaceholder;
  $("#email-link").href = profile.emailHref;
  $("#email-label").firstChild.textContent = profile.emailLabel;
  document.querySelectorAll("[data-profile-name]").forEach((element) => { element.textContent = profile.name; });
  document.querySelectorAll("[data-profile-initials]").forEach((element) => { element.textContent = profile.name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase(); });
  document.querySelectorAll("[data-profile-title]").forEach((element) => { element.textContent = profile.title; });
  document.querySelectorAll("[data-profile-location]").forEach((element) => { element.textContent = profile.location; });
  document.querySelectorAll("[data-profile-link]").forEach((element) => { element.href = profile[element.dataset.profileLink]; });
}

function renderProjectCard(project, index) {
  const steps = project.diagram.map((step, stepIndex) => `<span class="diagram-step"><i>${String(stepIndex + 1).padStart(2, "0")}</i>${escapeHTML(step)}</span>`).join('<span class="diagram-arrow" aria-hidden="true">→</span>');
  return `<button class="project-card reveal accent-${project.accent}" type="button" data-project="${escapeHTML(project.id)}" aria-controls="project-detail" aria-pressed="false" style="--card-order:${index}">
    <span class="project-visual" aria-hidden="true"><span class="visual-label">SYSTEM MAP <i>0${index + 1}</i></span><span class="diagram-flow">${steps}</span><span class="visual-axis"></span></span>
    <span class="project-card-body"><span class="project-category">${escapeHTML(project.category)}</span><span class="project-card-title">${escapeHTML(project.title)} <i aria-hidden="true">↗</i></span><span class="project-card-description">${escapeHTML(project.description)}</span><span class="tag-list">${project.technologies.slice(0, 4).map((tech) => `<span>${escapeHTML(tech)}</span>`).join("")}${project.technologies.length > 4 ? `<span>+${project.technologies.length - 4}</span>` : ""}</span></span>
  </button>`;
}

function renderProjectDetail(project) {
  const list = (items) => `<ul>${items.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>`;
  return `<div class="detail-top"><span class="eyebrow">PROJECT / ${escapeHTML(project.category)}</span><button class="detail-close icon-button" type="button" aria-label="Close project details" title="Close details">×</button></div>
    <button class="detail-back" type="button"><span aria-hidden="true">←</span> All projects</button>
    <div class="detail-title-row"><span class="detail-number">${String(projects.indexOf(project) + 1).padStart(2, "0")}</span><h3>${escapeHTML(project.title)}</h3></div>
    <p class="detail-description">${escapeHTML(project.description)}</p>
    <div class="detail-block"><h4>Overview</h4><p>${escapeHTML(project.overview)}</p></div>
    <div class="detail-block"><h4>Objectives</h4>${list(project.objectives)}</div>
    <div class="detail-block"><h4>Architecture &amp; technical design</h4><p>${escapeHTML(project.architecture)}</p></div>
    <div class="detail-block"><h4>Key features</h4>${list(project.features)}</div>
    <div class="detail-block"><h4>Technologies &amp; tools</h4><div class="tag-list detail-tags">${project.technologies.map((tech) => `<span>${escapeHTML(tech)}</span>`).join("")}</div></div>
    <div class="detail-actions"><a class="button button-primary" href="${escapeHTML(repoURL(project.repo))}" target="_blank" rel="noreferrer">Repository <span aria-hidden="true">↗</span></a></div>`;
}

function renderContent() {
  $("#project-gallery").innerHTML = projects.map(renderProjectCard).join("");
  $("#secondary-repositories").innerHTML = secondaryRepositories.map(({ name, url }) => `<a class="repo-item" href="${escapeHTML(url)}" target="_blank" rel="noreferrer"><span>${escapeHTML(name)}</span><i aria-hidden="true">↗</i></a>`).join("");
  $("#expertise-grid").innerHTML = expertise.map((item) => `<article class="expertise-card reveal"><div class="expertise-card-top"><span>${escapeHTML(item.number)} / DOMAIN</span><span class="expertise-glyph" aria-hidden="true">${escapeHTML(item.name.split(/[ &]/).filter(Boolean).map((word) => word[0]).slice(0, 2).join(""))}</span></div><h3>${escapeHTML(item.name)}</h3><p>${escapeHTML(item.description)}</p><ul>${item.capabilities.map((capability) => `<li>${escapeHTML(capability)}</li>`).join("")}</ul><div class="expertise-tags">${item.technologies.map((technology) => `<span>${escapeHTML(technology)}</span>`).join("")}</div></article>`).join("");
  $("#stack-groups").innerHTML = stackGroups.map((group, index) => `<div class="stack-row reveal"><span class="stack-index">0${index + 1}</span><h3>${escapeHTML(group.name)}</h3><div class="stack-items">${group.items.map((item) => `<span class="stack-item"><i aria-hidden="true">${escapeHTML(item.split(/[ .]/).map((word) => word[0]).join("").slice(0, 2))}</i>${escapeHTML(item)}</span>`).join("")}</div></div>`).join("");
  $("#timeline").innerHTML = journey.map((item) => `<article class="timeline-entry reveal"><span class="timeline-marker" aria-hidden="true"></span><span class="timeline-type">${escapeHTML(item.type)}</span><div><h3>${escapeHTML(item.title)}</h3><p class="timeline-org">${escapeHTML(item.organization)}</p><p>${escapeHTML(item.details)}</p></div><span class="timeline-date">${escapeHTML(item.date)}</span></article>`).join("");
  $("#current-year").textContent = String(new Date().getFullYear());
}

function setupProjects() {
  const layout = $("#projects-layout");
  const detail = $("#project-detail");
  const gallery = $("#project-gallery");
  function closeDetails() {
    layout.classList.remove("has-selection");
    layout.classList.remove("mobile-detail");
    detail.hidden = true;
    detail.innerHTML = "";
    gallery.querySelectorAll("[data-project]").forEach((card) => {
      card.setAttribute("aria-pressed", "false");
      card.classList.remove("is-selected");
    });
  }
  gallery.addEventListener("click", (event) => {
    const card = event.target.closest("[data-project]");
    if (!card) return;
    const project = projects.find((item) => item.id === card.dataset.project);
    if (!project) return;
    gallery.querySelectorAll("[data-project]").forEach((item) => {
      const selected = item === card;
      item.setAttribute("aria-pressed", String(selected));
      item.classList.toggle("is-selected", selected);
    });
    detail.innerHTML = renderProjectDetail(project);
    detail.hidden = false;
    layout.classList.add("has-selection");
    const mobileView = window.matchMedia("(max-width: 760px)").matches;
    layout.classList.toggle("mobile-detail", mobileView);
    $(".detail-close", detail).addEventListener("click", closeDetails);
    $(".detail-back", detail).addEventListener("click", closeDetails);
    if (mobileView) $("#projects-title").scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function setupTheme() {
  const root = document.documentElement;
  const toggle = $(".theme-toggle");
  let savedTheme;
  try { savedTheme = localStorage.getItem("portfolio-theme"); } catch { savedTheme = null; }
  root.dataset.theme = savedTheme === "light" ? "light" : "dark";
  function syncButton() {
    const light = root.dataset.theme === "light";
    toggle.setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
    toggle.innerHTML = `<span class="theme-icon" aria-hidden="true">${light ? "◑" : "◐"}</span>`;
  }
  syncButton();
  toggle.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
    try { localStorage.setItem("portfolio-theme", root.dataset.theme); } catch { /* Theme remains available for this visit. */ }
    syncButton();
  });
}

function setupNavigation() {
  const toggle = $(".menu-toggle");
  const nav = $("#primary-nav");
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(expanded));
    toggle.setAttribute("aria-label", expanded ? "Close navigation" : "Open navigation");
    nav.classList.toggle("is-open", expanded);
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    }
  });
  const links = [...nav.querySelectorAll("a")];
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      links.forEach((link) => link.classList.toggle("is-active", link.hash === `#${entry.target.id}`));
    }
  }, { rootMargin: "-25% 0px -65% 0px" });
  document.querySelectorAll("main > section[id]").forEach((section) => observer.observe(section));
}

function setupReveals() {
  const elements = document.querySelectorAll(".reveal");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  elements.forEach((element) => observer.observe(element));
}

renderProfile();
renderContent();
setupTheme();
setupProjects();
setupNavigation();
setupReveals();