// Minimal consent manager for third-party scripts/embeds.
//
// Storage: localStorage["cac_consent_v1"] = JSON string:
//   { analytics: boolean, media: boolean, support: boolean, updatedAt: ISOString }
//
// Default: no optional categories enabled until opt-in.
(function () {
  var STORAGE_KEY = "cac_consent_v1";
  var GA_MEASUREMENT_ID = "G-SFJ8Y5E56M";
  var ZENDESK_SNIPPET_SRC =
    "https://static.zdassets.com/ekr/snippet.js?key=0de064eb-1892-4a0e-8ff9-bd8c3a3f49d8";
  // In-memory fallback when persistent storage is unavailable.
  var memoryConsent = null;

  function safeJsonParse(str) {
    try {
      return JSON.parse(str);
    } catch (e) {
      return null;
    }
  }

  function setStatus(message, isError) {
    var el = document.getElementById("consent-status");
    if (!el) return;
    el.textContent = message || "";
    el.setAttribute("data-level", isError ? "error" : "info");
  }

  function getConsent() {
    // Prefer persistent storage when available.
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      var parsed = raw ? safeJsonParse(raw) : null;
      if (!parsed) return null;
      return {
        analytics: !!parsed.analytics,
        media: !!parsed.media,
        support: !!parsed.support,
        updatedAt: parsed.updatedAt || null,
      };
    } catch (e) {
      // localStorage may be blocked (e.g., private browsing / strict settings).
      if (!memoryConsent) return null;
      return {
        analytics: !!memoryConsent.analytics,
        media: !!memoryConsent.media,
        support: !!memoryConsent.support,
        updatedAt: memoryConsent.updatedAt || null,
      };
    }
  }

  function setConsent(consent) {
    var payload = {
      analytics: !!consent.analytics,
      media: !!consent.media,
      support: !!consent.support,
      updatedAt: new Date().toISOString(),
    };
    // Best effort persist; fall back to memory if blocked.
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {
      memoryConsent = payload;
      // Let caller decide how to message the user.
      payload._persistenceFailed = true;
    }
    return payload;
  }

  function hasConsent() {
    return !!getConsent();
  }

  function ensureDataLayer() {
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function () {
        window.dataLayer.push(arguments);
      };
  }

  function injectScriptOnce(id, src) {
    if (document.getElementById(id)) return;
    var s = document.createElement("script");
    s.id = id;
    s.async = true;
    s.src = src;
    document.head.appendChild(s);
  }

  function enableAnalytics() {
    ensureDataLayer();
    injectScriptOnce("ga4-gtag", "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_MEASUREMENT_ID));
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID);
  }

  function enableZendesk() {
    // Configure Zendesk before loading.
    window.zESettings = {
      webWidget: {
        contactForm: { attachments: false },
      },
    };
    // Zendesk's loader expects the script tag id to be "ze-snippet" so it can
    // locate itself and extract the `key` query param.
    injectScriptOnce("ze-snippet", ZENDESK_SNIPPET_SRC);
  }

  function renderYouTubeEmbeds() {
    var embeds = document.querySelectorAll(".video-embed[data-youtube-id]");
    for (var i = 0; i < embeds.length; i++) {
      var el = embeds[i];
      if (el.getAttribute("data-rendered") === "true") continue;
      var videoId = el.getAttribute("data-youtube-id");
      if (!videoId) continue;

      // Replace placeholder with privacy-enhanced iframe.
      var iframe = document.createElement("iframe");
      iframe.width = "560";
      iframe.height = "315";
      iframe.src =
        "https://www.youtube-nocookie.com/embed/" +
        encodeURIComponent(videoId) +
        "?rel=0";
      iframe.title = "CAC Ontology overview video";
      iframe.frameBorder = "0";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;

      // Clear placeholder and insert iframe.
      while (el.firstChild) el.removeChild(el.firstChild);
      el.appendChild(iframe);
      el.setAttribute("data-rendered", "true");
    }
  }

  function applyConsent(consent) {
    if (consent.analytics) enableAnalytics();
    if (consent.support) enableZendesk();
    if (consent.media) renderYouTubeEmbeds();
  }

  function showBanner() {
    var banner = document.getElementById("consent-banner");
    if (!banner) return;
    banner.hidden = false;
  }

  function hideBanner() {
    var banner = document.getElementById("consent-banner");
    if (!banner) return;
    banner.hidden = true;
  }

  function openSettings() {
    var modal = document.getElementById("consent-settings");
    if (!modal) return;
    modal.hidden = false;
    setStatus("", false);
    var first = modal.querySelector("button, input, a");
    if (first) first.focus();
  }

  function closeSettings() {
    var modal = document.getElementById("consent-settings");
    if (!modal) return;
    modal.hidden = true;
  }

  function syncSettingsUi(consent) {
    var c = consent || { analytics: false, media: false, support: false };
    var a = document.getElementById("consent-analytics");
    var m = document.getElementById("consent-media");
    var s = document.getElementById("consent-support");
    if (a) a.checked = !!c.analytics;
    if (m) m.checked = !!c.media;
    if (s) s.checked = !!c.support;
  }

  function wireEvents() {
    // Banner buttons
    var acceptAll = document.getElementById("consent-accept-all");
    if (acceptAll) {
      acceptAll.addEventListener("click", function () {
        var c = setConsent({ analytics: true, media: true, support: true });
        hideBanner();
        applyConsent(c);
      });
    }

    var reject = document.getElementById("consent-reject");
    if (reject) {
      reject.addEventListener("click", function () {
        var c = setConsent({ analytics: false, media: false, support: false });
        hideBanner();
        // No third-party loads. Existing cookies (if any) must be handled by the vendor/browser.
        syncSettingsUi(c);
      });
    }

    var customize = document.getElementById("consent-customize");
    if (customize) {
      customize.addEventListener("click", function () {
        syncSettingsUi(getConsent());
        openSettings();
      });
    }

    // Settings open links/buttons
    var openButtons = document.querySelectorAll(".js-open-privacy-settings");
    for (var i = 0; i < openButtons.length; i++) {
      openButtons[i].addEventListener("click", function (e) {
        e.preventDefault();
        syncSettingsUi(getConsent());
        openSettings();
      });
    }

    // Settings close
    var closeBtn = document.getElementById("consent-close");
    if (closeBtn) closeBtn.addEventListener("click", closeSettings);

    // Settings save
    var saveBtn = document.getElementById("consent-save");
    if (saveBtn) {
      saveBtn.addEventListener("click", function () {
        var a = document.getElementById("consent-analytics");
        var m = document.getElementById("consent-media");
        var s = document.getElementById("consent-support");
        var c = setConsent({
          analytics: a ? a.checked : false,
          media: m ? m.checked : false,
          support: s ? s.checked : false,
        });
        // Always apply choices immediately for this page.
        applyConsent(c);

        if (c && c._persistenceFailed) {
          setStatus(
            "Could not save privacy settings in this browser. Your choices will apply for this visit, but may reset when you close the browser.",
            true
          );
          // Don't return early; let the modal close so the user isn't stuck.
        } else {
          setStatus("Saved.", false);
        }

        // Always close so the user isn't stuck in the modal.
        closeSettings();
        hideBanner();
      });
    }

    // Close modal on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeSettings();
    });
  }

  // Init
  document.addEventListener("DOMContentLoaded", function () {
    wireEvents();

    var consent = getConsent();
    if (!consent) {
      // First visit: show banner, do not load third parties.
      showBanner();
      return;
    }

    // Returning visit: apply stored consent.
    applyConsent(consent);
    hideBanner();
  });
})();

