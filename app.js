/* Пикабу Промокоды — прототип редизайна (сетка 1240). Данные — из макета. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const L = (n) => `img/logo/${n}.jpg`;

  /* ---------- иконки (линейные 24×24, как в ДС) ---------- */
  const P = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    right: '<path d="m9 6 6 6-6 6"/>',
    left: '<path d="m15 6-6 6 6 6"/>',
    out: '<path d="M7 17 17 7M9 7h8v8"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
    eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="3"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    truck: '<path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17.5" cy="17.5" r="1.8"/>',
    gift: '<rect x="3.5" y="8" width="17" height="4" rx="1"/><path d="M5 12v8h14v-8M12 8v12M12 8S10.5 3.5 8 4.5 9 8 12 8Zm0 0s1.5-4.5 4-3.5S15 8 12 8Z"/>',
    star: '<path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9Z"/>',
    fire: '<path d="M12 21c-4 0-6.5-2.6-6.5-6 0-3.8 3.3-5.6 4-9 2.2 1.4 3.4 3.3 3.5 5 1-.7 1.6-1.8 1.8-3 2.3 1.8 3.7 4.3 3.7 7 0 3.4-2.5 6-6.5 6Z"/>',
    // категории
    car: '<path d="M4 15.5V12l2-5h12l2 5v3.5M3 15.5h18v3H3zM6.5 12h11"/><circle cx="7.5" cy="18.5" r="1"/><circle cx="16.5" cy="18.5" r="1"/>',
    bank: '<path d="M3 9.5 12 4l9 5.5M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"/>',
    baby: '<circle cx="12" cy="9" r="5"/><path d="M9.5 9h.01M14.5 9h.01M10 11.5s.8 1 2 1 2-1 2-1M7 20c.8-2.5 2.6-4 5-4s4.2 1.5 5 4"/>',
    film: '<rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M8 5v14M16 5v14M3.5 9.5H8M3.5 14.5H8M16 9.5h4.5M16 14.5h4.5"/>',
    lips: '<path d="M8.5 4h7l1 6h-9zM7 10h10v10H7z"/>',
    book: '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5zM20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z"/>',
    case: '<rect x="3.5" y="7" width="17" height="12" rx="2"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3.5 12h17"/>',
    plane: '<path d="M10.5 13 4 10l1.5-1.5 7 1L17 5a2 2 0 0 1 3 3l-4.5 4.5 1 7L15 21l-3-6.5L9 17.5v2.5L7.5 21l-1-3.5L3 16.5 4.5 15h2.5Z"/>',
    ball: '<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v17M3.5 12h17M6 6c3 2.5 3 9.5 0 12M18 6c-3 2.5-3 9.5 0 12"/>',
    paw: '<circle cx="7" cy="10" r="1.8"/><circle cx="17" cy="10" r="1.8"/><circle cx="10" cy="6.5" r="1.8"/><circle cx="14" cy="6.5" r="1.8"/><path d="M12 12c-3 0-5 3.5-5 5.5S9 20 12 19s5 1.5 5-1.5-2-5.5-5-5.5Z"/>',
    tool: '<path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3l7.5-7.5a4 4 0 0 0-2-2Z"/>',
    cloud: '<path d="M7 18a4.5 4.5 0 1 1 1-8.9A6 6 0 0 1 19.5 11 3.5 3.5 0 0 1 18 18Z"/>',
    watch: '<circle cx="12" cy="12" r="5.5"/><path d="M9 6.5 9.5 3h5l.5 3.5M9 17.5 9.5 21h5l.5-3.5M12 10v2l1.5 1"/>',
    pill: '<rect x="3" y="8.5" width="18" height="7" rx="3.5" transform="rotate(-35 12 12)"/><path d="m9.5 8.5 5 7"/>',
    cart: '<path d="M3 4h2.5l2 11h11l2-8H7"/><circle cx="9" cy="19" r="1.4"/><circle cx="17" cy="19" r="1.4"/>',
    food: '<path d="M4 11h16a8 8 0 0 1-16 0ZM8 7c0-1.5 1-1.5 1-3M12 7c0-1.5 1-1.5 1-3M16 7c0-1.5 1-1.5 1-3"/>',
    shirt: '<path d="M8 4 3.5 6.5 5 10.5l2-1V20h10V9.5l2 1 1.5-4L16 4c-.5 1.5-2 2.5-4 2.5S8.5 5.5 8 4Z"/>',
    tagi: '<path d="M3.5 12.5V4.5h8l9 9-8 8z"/><circle cx="8" cy="9" r="1.3"/>',
    game: '<rect x="3" y="7" width="18" height="10" rx="5"/><path d="M8 10v4M6 12h4M15.5 11h.01M17.5 13h.01"/>',
    home: '<path d="M4 11 12 4l8 7v9H4zM10 20v-5h4v5"/>',
    gem: '<path d="M7 4h10l4 5-9 11L3 9zM3 9h18M9.5 4 12 9l2.5-5M12 9v11"/>',
    flower: '<circle cx="12" cy="9" r="2.2"/><path d="M12 6.8C12 4 10 3 9 4.5S9.8 7.8 12 6.8ZM12 6.8C12 4 14 3 15 4.5S14.2 7.8 12 6.8ZM9.8 9c-2.8 0-3.8 2-2.3 3s3.3-.8 2.3-3ZM14.2 9c2.8 0 3.8 2 2.3 3s-3.3-.8-2.3-3ZM12 11.2V21M12 17c-2-2-4.5-1.5-5-1M12 17c2-2 4.5-1.5 5-1"/>',
    laptop: '<rect x="5" y="5" width="14" height="10" rx="1.5"/><path d="M3 18.5h18"/>',
    music: '<path d="M9 18V6l11-2v12"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',
  };
  const ic = (n, cls = "") => `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true">${P[n] || ""}</svg>`;

  /* ---------- шапка и подвал (общие) ---------- */
  function chrome() {
    const page = document.body.dataset.page;
    $("#hd").innerHTML = `<div class="wrap hd__in">
      <a class="logo" href="index.html" aria-label="Пикабу Промокоды — на главную"><img src="img/logo-icon.svg" alt=""><img src="img/logo-text.svg" alt="Пикабу Промокоды"></a>
      <nav class="nav" aria-label="Разделы">
        <a class="nav__a" href="#">Каталог ${ic("down")}</a>
        <a class="nav__a" href="#">Акции ${ic("down")}</a>
        <a class="nav__a" href="#">Блог</a>
        <a class="save" href="#"><span>Сэкономь ещё</span><img src="img/cookie.svg" alt=""></a>
      </nav>
      ${page === "home" ? "" : `<label class="hd__search"><input type="search" placeholder="Магазины" aria-label="Поиск магазина">${ic("search")}</label>`}
      <a class="btn btn--primary" href="#">Вход</a>
    </div>`;
    $("#ft").innerHTML = `<div class="wrap ft__in">
      <a class="logo" href="index.html"><img src="img/logo-icon.svg" alt=""><img src="img/logo-text.svg" alt="Пикабу Промокоды"></a>
      <div><a href="#">Вопросы и ответы</a><a href="#">Как это работает</a><a href="#">Условия</a></div>
      <div><a href="#">Контакты</a><a href="#">Как добавить свой промокод</a><a href="#">Команда</a></div>
      <div><a href="#">Пользовательское соглашение</a><a href="#">О компании</a><a href="#">Оферта Пикабокса</a></div>
      <div class="ft__c">© 2018–2025 ООО «Пикабу»<br>Все права защищены</div>
    </div>`;
    const hd = $("#hd");
    addEventListener("scroll", () => hd.classList.toggle("is-stuck", scrollY > 40), { passive: true });
  }

  /* ---------- данные ---------- */
  const COUP = [
    { s: "Пироги №1", l: "pirogi", t: "Скидка до 20% при заказе обуви для горного туризма", tag: ["Эксклюзивный", "green", "gift"], d: "До 31 мая 2026" },
    { s: "Lamoda", l: "lamoda", t: "Промокод −10% при любом онлайн-заказе", tag: ["Доставка", "blue", "truck"], d: "До 31 июл. 2026" },
    { s: "Арома-Бутик", l: "aroma", t: "Снижение стоимости на 500 рублей при заказе от 10 000 рублей", tag: ["500 ₽", "orange"], d: "До 31 июл. 2026" },
    { s: "Спортмастер", l: "sportmaster2", t: "Скидка до 20% при заказе обуви для горного туризма", tag: ["Акция", "red", "fire"], d: "До 31 мая 2026" },
    { s: "Ситилинк", l: "citilink_sq", t: "Скидка 3000 рублей при первом заказе от 15 000 рублей", tag: ["−3000 ₽", "orange"], d: "До 31 дек. 2026" },
    { s: "AliExpress", l: "ali", t: "До −70% на различные товары + бесплатная доставка", tag: ["Доставка", "blue", "truck"], d: "До 31 июл. 2026" },
    { s: "Детский мир", l: "dmir", t: "Кешбэк до 25% бонусами на игрушки и товары для детей", tag: ["Кешбэк", "violet"], d: "До 30 июн. 2026" },
    { s: "ЕАптека", l: "eapteka", t: "Скидка 15% на первый заказ в приложении", tag: ["−15%", "green"], d: "До 15 авг. 2026" },
  ];
  const STORES = [["vprok", "Перекрёсток Впрок", 9999], ["dmir", "Детский мир", 46], ["citilink", "Ситилинк", 16], ["dodo", "Додо Пицца", 1], ["eldorado", "Эльдорадо", 31], ["rivgosh", "Рив Гош", 56], ["ali", "AliExpress", 321], ["eapteka", "ЕАптека", 72], ["foxford", "Фоксфорд", 6], ["sber", "СберМаркет", 16], ["chitai", "Читай-город", 10], ["gardenmart", "Гарденмарт", 111], ["lamoda", "Lamoda", 96], ["sportmaster", "Спортмастер", 38], ["ymarket", "Яндекс Маркет", 54], ["megamarket", "Мегамаркет", 71]];
  const SHOPS = [["bukvoed", "Буквоед", 12], ["dmir", "Детский мир", 26], ["atlantic", "Atlantic underwear", 42], ["praktikum", "Яндекс Практикум", 56], ["gardenmart", "Гарденмарт", 8], ["pharma", "Pharmacosmetica", 34], ["eapteka", "ЕАптека", 18], ["arkh", "Архангельские водоросли", 1], ["sportmaster", "Спортмастер", 6], ["ivi", "Иви", 98], ["brandshop", "Brandshop", 13], ["askent", "Аскент", 122], ["britvology", "Britvology", 32], ["bukvoed", "Буквоед СПб", 7], ["chitai", "Читай-город", 41], ["foxford", "Фоксфорд", 6]];
  const CATS = [["car", "Авто", 78], ["bank", "Банки и страхование", 56], ["baby", "Детские товары", 12, 1], ["film", "Кино и концерты", 32], ["lips", "Косметика и парфюмерия", 18, 1], ["book", "Образование", 77], ["case", "Офис и работа", 90], ["plane", "Путешествия, билеты", 104, 1], ["ball", "Спорт", 3], ["gem", "Товары для взрослых (18+)", 32], ["paw", "Товары для животных", 11], ["tool", "Услуги и сервисы", 68], ["cloud", "Хостинг, интернет", 33], ["watch", "Часы и аксессуары", 114], ["pill", "Аптеки и здоровье", 236], ["cart", "Гипермаркеты", 88], ["food", "Доставка еды", 78, 1], ["book", "Книги", 78], ["tagi", "Маркетплейсы", 78], ["shirt", "Одежда и обувь", 78], ["tagi", "Прочее", 78], ["game", "Развлечения", 78], ["tool", "Стройка", 78], ["home", "Товары для дома", 78], ["gem", "Украшения", 78], ["music", "Фильмы и музыка", 78], ["flower", "Цветы и подарки", 78], ["laptop", "Электроника, компьютеры", 78]];
  const TABS = { pop: ["Популярные", [0, 1, 2, 3, 4, 5, 6, 7], 128], fresh: ["Новые", [5, 7, 1, 4, 0, 6, 2, 3], 34], soon: ["Скоро истекают", [3, 2, 6, 0, 7, 1, 5, 4], 12] };

  const coupon = (c, btn = "Показать промокод") => `<article class="cp card lift">
    <div class="cp__top"><span class="cp__logo"><img src="${L(c.l)}" alt="${c.s}"></span>${c.tag ? `<span class="tag tag--${c.tag[1]}">${c.tag[2] ? ic(c.tag[2], "ic--s") : ""}${c.tag[0]}</span>` : ""}</div>
    <div class="cp__t">${c.t}</div>
    <div class="cp__meta">${ic("clock")}${c.d}</div>
    <button class="btn btn--outline" type="button" data-code="${c.s}">${btn}</button>
  </article>`;

  /* ---------- главная ---------- */
  function home() {
    $("#brands").innerHTML = ["ymarket", "ali", "megamarket", "citilink", "rivgosh", "vprok", "foxford", "eldorado"].map((l) => `<a class="brand card lift" href="store.html"><img src="${L(l)}" alt=""></a>`).join("");
    const exc = [COUP[0], COUP[4], COUP[2], COUP[7]].map((c) => ({ ...c, tag: ["Только на Пикабу", "violet", "star"] }));
    $("#excl").innerHTML = exc.map((c) => coupon(c, "Получить промокод")).join("");
    $("#stores").innerHTML = STORES.map(([l, n, k]) => `<a class="store card lift" href="store.html"><span class="store__logo"><img src="${L(l)}" alt=""></span><b>${n}</b><span><em>${k}</em> ${plural(k, "купон", "купона", "купонов")}</span></a>`).join("");
    $("#shops").innerHTML = SHOPS.map(([l, n, k]) => `<a class="shop card lift" href="store.html"><span class="shop__logo"><img src="${L(l)}" alt=""></span><span><b>${n}</b><span>${k} ${plural(k, "купон", "купона", "купонов")}</span></span></a>`).join("");
    $("#cats").innerHTML = CATS.map(([i, n, k, top]) => `<a class="cat card lift${top ? " cat--top" : ""}" href="#"><span class="cat__ic">${ic(i)}</span><span><b>${n}</b><span>${k} ${plural(k, "магазин", "магазина", "магазинов")}</span></span></a>`).join("");
    // вкладки промокодов
    const tabs = $("#ptabs"), grid = $("#pgrid");
    tabs.innerHTML = Object.entries(TABS).map(([k, [n, , cnt]], i) => `<button type="button" role="tab" data-t="${k}" class="${i ? "" : "on"}" aria-selected="${!i}">${n}<small>${cnt}</small></button>`).join("");
    const show = (k) => { grid.innerHTML = TABS[k][1].map((i) => coupon(COUP[i])).join(""); grid.classList.remove("fade-in"); void grid.offsetWidth; grid.classList.add("fade-in"); };
    tabs.addEventListener("click", (e) => { const b = e.target.closest("button"); if (!b) return; $$("button", tabs).forEach((x) => { x.classList.toggle("on", x === b); x.setAttribute("aria-selected", x === b); }); show(b.dataset.t); });
    show("pop");
    // слайдер
    const row = $("#slides"), dots = $("#dots");
    const n = row.children.length;
    dots.innerHTML = Array.from({ length: n }, (_, i) => `<i class="${i ? "" : "on"}"></i>`).join("");
    const step = () => row.children[0].offsetWidth + 16;
    const upd = () => { const i = Math.round(row.scrollLeft / step()); $$("i", dots).forEach((d, j) => d.classList.toggle("on", j === i)); $("#sl").disabled = row.scrollLeft < 4; $("#sr").disabled = row.scrollLeft > row.scrollWidth - row.clientWidth - 4; };
    $("#sl").onclick = () => row.scrollBy({ left: -step() });
    $("#sr").onclick = () => row.scrollBy({ left: step() });
    row.addEventListener("scroll", upd, { passive: true }); upd();
    let auto = setInterval(() => { if (row.scrollLeft > row.scrollWidth - row.clientWidth - 4) row.scrollTo({ left: 0 }); else row.scrollBy({ left: step() }); }, 5000);
    row.addEventListener("pointerenter", () => clearInterval(auto));
    // стрелки карусели эксклюзивов
    rowArrows("#excl", "#el", "#er");
    // поиск: подсказки
    const q = $("#q");
    $$("[data-q]").forEach((c) => (c.onclick = () => { q.value = c.dataset.q; q.focus(); }));
    $("#sform").onsubmit = (e) => { e.preventDefault(); location.href = "store.html"; };
  }
  function rowArrows(rowSel, l, r) {
    const row = $(rowSel), bl = $(l), br = $(r); if (!row || !bl) return;
    const upd = () => { bl.disabled = row.scrollLeft < 4; br.disabled = row.scrollLeft > row.scrollWidth - row.clientWidth - 4; };
    bl.onclick = () => row.scrollBy({ left: -row.clientWidth * 0.8 });
    br.onclick = () => row.scrollBy({ left: row.clientWidth * 0.8 });
    row.addEventListener("scroll", upd, { passive: true }); upd();
  }
  const plural = (n, a, b, c) => { const m = n % 10, h = n % 100; return m === 1 && h !== 11 ? a : m >= 2 && m <= 4 && (h < 12 || h > 14) ? b : c; };

  /* ---------- страница магазина ---------- */
  const CU = [
    { k: "sub", b: "По подписке", v: "1 500 ₽", t: "Скидка <em>1500 рублей</em> для ВСЕХ клиентов при покупке от 15 000 рублей", m: "Можно комбинировать с купоном, который применяется автоматически", btn: ["Забрать по подписке", "orange"], note: "Подписка 199 ₽/мес", f: "promo" },
    { k: "pop", b: "Популярный промокод", v: "Кешбэк", t: "Кешбэк до 25% бонусами на технику и инструменты", d: "До 30 июн. 2026", seen: 3669, f: "promo" },
    { k: "excl", b: "Эксклюзивный промокод", v: "10 000 ₽", t: "10 000 рублей скидки на заказ от 30 000 рублей!", d: "До 30 июн. 2026", seen: 3669, f: "promo" },
    { v: "gift", t: "Скидка 5% + кешбэк 5% на первый заказ", d: "До 30 июн. 2026", seen: 3669, f: "repeat" },
    { goods: true },
    { v: "dmir", t: "Кешбэк до 25% бонусами на технику и инструменты", d: "До 30 июн. 2026", seen: 3669, f: "promo" },
    { k: "hot", b: "Скоро закончится", v: "10 000 ₽", t: "10 000 рублей скидки на заказ от 30 000 рублей!", d: "До 20 сен. 2025", seen: 3669, f: "sale" },
    { v: "truck", t: "Скидка 5% + кешбэк 5% на первый заказ", d: "До 30 июн. 2026", seen: 3669, f: "ship" },
    { v: "Кешбэк", t: "Кешбэк 2% за покупку компьютерной техники", d: "До 30 июн. 2026", seen: 235, btn: ["Открыть акцию", "outline"], f: "sale" },
    { v: "truck", t: "Скидка 5% + кешбэк 5% на первый заказ", d: "До 30 июн. 2026", seen: 3669, f: "ship" },
    { v: "Кешбэк", t: "Кешбэк 2% за покупку компьютерной техники", d: "До 30 июн. 2026", seen: 235, btn: ["Открыть акцию", "outline"], f: "sale" },
  ];
  const cuValue = (v) => v === "gift" ? `<span style="color:var(--accent)">${ic("gift")}</span>` : v === "truck" ? `<span style="color:var(--accent)">${ic("truck")}</span>` : v === "dmir" ? `<img src="${L("dmir")}" alt="">` : v;
  const cuHTML = (c, i) => c.goods ? goods() : `<article class="cu card${c.k ? " cu--" + c.k : ""}${c.exp ? " cu--exp" : ""}" data-f="${c.f || ""}">
    ${c.b ? `<span class="cu__badge">${c.b}</span>` : ""}
    <div class="cu__v">${cuValue(c.v)}</div>
    <div><div class="cu__t">${c.t}</div>
      <div class="cu__m">${c.m ? `<span class="msg">${c.m}</span>` : `<span>${ic("clock", "ic--s")}${c.d}</span><span class="ok">${ic("check", "ic--s")}Проверено</span><span>${ic("eye", "ic--s")}${c.seen} раз</span>`}</div></div>
    <div class="cu__r"><button class="btn btn--l btn--${c.btn ? c.btn[1] : "primary"}" type="button" data-code="Ситилинк">${c.btn ? c.btn[0] : "Показать промокод"}${c.btn && c.btn[1] === "outline" ? ic("out", "ic--s") : ""}</button>
      ${c.note ? `<span class="cu__sub">${c.note}</span>` : `<button class="cu__cond" type="button" data-cond>Условия ${ic("down")}</button>`}</div>
    <div class="cu__more">Промокод действует на весь ассортимент, кроме товаров из раздела «Уценка». Не суммируется с другими акциями. Один промокод — на один заказ.</div>
  </article>`;
  function goods() {
    const G = [["g1", "Солнечный фонарь из железа", "661 ₽", "2 310 ₽", "Выбор редакции", "violet"], ["g2", "Робот-пылесос Dreame L40 Ultra CE, 70 Вт", "30 039 ₽", "112 657 ₽", "Лучшая цена", "orange"], ["g3", "Смартфон Samsung S23 8/256GB Black", "2 588 ₽", "3 802 ₽", "Скоро закончится", "red"], ["g2", "Робот-пылесос Dreame D10s Plus, станция самоочистки", "24 990 ₽", "39 990 ₽", "Лучшая цена", "orange"]];
    return `<section class="goods card"><div class="block__h" style="margin-bottom:14px"><h2 style="font-size:20px;line-height:28px">Товары со скидкой в Ситилинке</h2><span class="tools"><button class="arr" id="gl" type="button" aria-label="Назад">${ic("left")}</button><button class="arr" id="gr" type="button" aria-label="Вперёд">${ic("right")}</button></span></div>
      <div class="row" id="grow">${G.map(([e, t, p, o, b, c]) => `<a class="good lift" href="#"><span class="tag tag--${c}">${b}</span><span class="good__img"><img src="img/goods/${e}.jpg" alt=""></span><span><b>${t}</b><div class="price">${p}<s>${o}</s></div></span></a>`).join("")}</div></section>`;
  }
  function store() {
    const list = $("#list");
    const draw = (f) => { list.innerHTML = CU.filter((c) => !f || f === "all" || c.goods || c.f === f).map(cuHTML).join(""); rowArrows("#grow", "#gl", "#gr"); list.classList.remove("fade-in"); void list.offsetWidth; list.classList.add("fade-in"); };
    draw("all");
    $("#filters").addEventListener("click", (e) => { const b = e.target.closest(".f"); if (!b) return; $$(".f").forEach((x) => x.classList.toggle("on", x === b)); draw(b.dataset.f); });
    list.addEventListener("click", (e) => { const c = e.target.closest("[data-cond]"); if (c) c.closest(".cu").classList.toggle("open"); });
    $("#best").innerHTML = [{ ...COUP[5], tag: ["Самый популярный", "violet", "star"] }, { ...COUP[4], tag: ["Выгодные условия", "green"] }, { ...COUP[1], tag: ["Максимальная скидка", "orange", "fire"] }].map((c) => coupon(c)).join("");
    $("#similar").innerHTML = [COUP[4], COUP[5], COUP[1], COUP[2], COUP[0], COUP[3]].map((c) => coupon(c)).join("");
    $("#expired").innerHTML = [{ v: "−50%", t: "Снижены цены до 50% на технику из подборки", d: "Срок акции истёк", seen: 26371, exp: 1 }, { v: "Кешбэк", t: "Кешбэк 2% за покупку компьютерной техники", d: "Срок акции истёк", seen: 235, exp: 1 }].map(cuHTML).join("");
  }

  /* ---------- окно «Показать промокод» ---------- */
  function modal() {
    const m = $("#modal"); if (!m) return;
    let last;
    document.addEventListener("click", (e) => {
      const b = e.target.closest("[data-code]");
      if (b) {
        last = b;
        const card = b.closest(".cp, .cu"); const img = card && card.querySelector("img");
        $("#mlogo").innerHTML = img ? `<img src="${img.getAttribute("src")}" alt="">` : "";
        $("#mtitle").textContent = (card && (card.querySelector(".cp__t, .cu__t") || {}).textContent) || "Промокод";
        $("#mcode").textContent = "PIKABU" + (Math.floor(Math.random() * 900) + 100);
        m.classList.add("on"); m.setAttribute("aria-hidden", "false"); $("#mcopy").focus();
        return;
      }
      if (e.target === m || e.target.closest("#mx")) close();
    });
    const close = () => { m.classList.remove("on"); m.setAttribute("aria-hidden", "true"); last && last.focus(); };
    addEventListener("keydown", (e) => { if (e.key === "Escape" && m.classList.contains("on")) close(); });
    $("#mcopy").onclick = () => { navigator.clipboard?.writeText($("#mcode").textContent).catch(() => {}); toast("Промокод скопирован"); };
  }
  let tt;
  function toast(s) { const t = $("#toast"); t.textContent = s; t.classList.add("on"); clearTimeout(tt); tt = setTimeout(() => t.classList.remove("on"), 2000); }

  chrome();
  if (document.body.dataset.page === "home") home();
  if (document.body.dataset.page === "store") store();
  modal();
})();
