/**
 * Renders the page from window.SITE_CONTENT (see content.js).
 * You shouldn't need to edit this file — change content.js instead.
 */
(function () {
  const C = window.SITE_CONTENT;
  if (!C) {
    console.error("content.js did not load — check the <script> tag order in index.html");
    return;
  }

  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, attrs = {}, children = []) => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") node.className = v;
      else if (k === "html") node.innerHTML = v;
      else node.setAttribute(k, v);
    }
    (Array.isArray(children) ? children : [children]).forEach((c) => {
      if (c) node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  };

  document.title = C.site.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", C.site.description);

  // ---- NAV ----
  const navLinks = $("#nav-links");
  C.nav.forEach((item) => navLinks.appendChild(el("a", { href: item.href }, item.label)));

  const navToggle = $("#nav-toggle");
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );

  // ---- HERO ----
  $("#hero-eyebrow").textContent = C.hero.eyebrow;
  $("#hero-name").textContent = C.hero.name;
  $("#hero-tagline").textContent = C.hero.tagline;
  $("#hero-cta").setAttribute("href", C.hero.cta.href);
  $("#hero-cta-label").textContent = C.hero.cta.label;
  const heroImg = $("#hero-image");
  heroImg.src = C.hero.image;
  heroImg.alt = C.hero.imageAlt || "";

  // ---- ABOUT ----
  $("#about-heading").textContent = C.about.heading;
  const aboutBody = $("#about-body");
  C.about.body.forEach((para) => aboutBody.appendChild(el("p", {}, para)));
  const aboutImg = $("#about-image");
  aboutImg.src = C.about.image;
  aboutImg.alt = C.about.imageAlt || "";
  const highlights = $("#about-highlights");
  C.about.highlights.forEach((h) =>
    highlights.appendChild(el("div", {}, [el("dt", {}, h.label), el("dd", {}, h.detail)]))
  );

  // ---- GALLERY ----
  const grid = $("#gallery-grid");
  C.gallery.forEach((shot, i) => {
    const frameNum = String(i + 1).padStart(2, "0");
    const exifParts = Object.values(shot.exif || {});
    const frame = el(
      "button",
      { class: "frame reveal", type: "button", "aria-label": `Open photo: ${shot.caption}` },
      [
        el("img", { src: shot.src, alt: shot.alt || shot.caption, loading: "lazy" }),
        el("span", { class: "frame__number" }, `Frame ${frameNum}`),
        el("div", { class: "frame__overlay" }, [
          el("p", { class: "frame__caption" }, shot.caption),
          el(
            "p",
            { class: "frame__exif" },
            exifParts.map((v) => el("span", {}, v))
          ),
        ]),
      ]
    );
    frame.addEventListener("click", () => openLightbox(shot));
    grid.appendChild(frame);
  });

  // ---- TESTIMONIALS ----
  const tRow = $("#testimonials-row");
  C.testimonials.forEach((t) => {
    tRow.appendChild(
      el("div", { class: "testimonial reveal" }, [
        el("blockquote", {}, `"${t.quote}"`),
        el("div", { class: "testimonial__person" }, [
          el("img", { src: t.image, alt: t.name }),
          el("div", {}, [
            el("p", { class: "testimonial__name" }, t.name),
            el("p", { class: "testimonial__role" }, t.role),
          ]),
        ]),
      ])
    );
  });

  // ---- CONTACT ----
  $("#contact-heading").textContent = C.contact.heading;
  $("#contact-body").textContent = C.contact.body;
  const emailLink = $("#contact-email");
  emailLink.textContent = C.contact.email;
  emailLink.href = `mailto:${C.contact.email}`;
  const social = $("#contact-social");
  C.contact.social.forEach((s) =>
    social.appendChild(el("a", { href: s.href, target: "_blank", rel: "noopener" }, s.label))
  );

  // ---- FOOTER ----
  $("#footer-text").textContent = C.footer.text;

  // ---- LIGHTBOX ----
  const lightbox = $("#lightbox");
  const lightboxImg = $("#lightbox-image");
  const lightboxCaption = $("#lightbox-caption");

  function openLightbox(shot) {
    lightboxImg.src = shot.src;
    lightboxImg.alt = shot.alt || shot.caption;
    lightboxCaption.textContent = shot.caption;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  $("#lightbox-close").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  // ---- SCROLL REVEAL ----
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((elm) => io.observe(elm));
  } else {
    revealEls.forEach((elm) => elm.classList.add("is-visible"));
  }
})();
