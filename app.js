/* Пикабу Промокоды — вёрстка по макетам «Изменение сетки» (сетка 1240).
   Тексты, порядок блоков и цифры — из макетов Figma: главная 154:17773, магазин 379:23520. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const L = (n) => (n === "letu" || n === "mvideo" ? `img/logo/${n}.svg` : `img/logo/${n}.jpg`);

  const P = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    right: '<path d="m9 6 6 6-6 6"/>',
    left: '<path d="m15 6-6 6 6 6"/>',
    ext: '<path d="M13 4h7v7M20 4l-9 9M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"/>',
    clock: '<path d="M12 3a9 9 0 1 1-9 9"/><path d="M12 7v5l3 2M3.5 8.5l.01.01M5.6 5.6l.01.01M8.5 3.5l.01.01"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
    eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',
    tag: '<path d="M3.5 12.5V4.5h8l9 9-8 8z"/><circle cx="8" cy="9" r="1.3"/>',
    gift: '<rect x="3.5" y="8" width="17" height="4" rx="1"/><path d="M5 12v8h14v-8M12 8v12M12 8S10.5 3.5 8 4.5 9 8 12 8Zm0 0s1.5-4.5 4-3.5S15 8 12 8Z"/>',
    bolt: '<path d="M13 3 5 13h6l-1 8 8-10h-6z"/>',
    star: '<path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.9Z"/>',
    flame: '<path d="M12 21c-4 0-6.5-2.6-6.5-6 0-3.8 3.3-5.6 4-9 2.2 1.4 3.4 3.3 3.5 5 1-.7 1.6-1.8 1.8-3 2.3 1.8 3.7 4.3 3.7 7 0 3.4-2.5 6-6.5 6Z"/>',
    pct: '<path d="M19 5 5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>',
    truck: '<path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17.5" cy="17.5" r="1.8"/>',
    bag: '<path d="M5 8h14l-1 12H6zM9 8V6a3 3 0 0 1 6 0v2"/>',
    food: '<path d="M4 11h16a8 8 0 0 1-16 0ZM8 7c0-1.5 1-1.5 1-3M12 7c0-1.5 1-1.5 1-3M16 7c0-1.5 1-1.5 1-3"/>',
    game: '<rect x="3" y="7" width="18" height="10" rx="5"/><path d="M8 10v4M6 12h4M15.5 11h.01M17.5 13h.01"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
  };
  const ic = (n, cls = "") => `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true">${P[n] || ""}</svg>`;
  const plural = (n, a, b, c) => { const m = n % 10, h = n % 100; return m === 1 && h !== 11 ? a : m >= 2 && m <= 4 && (h < 12 || h > 14) ? b : c; };
  const kup = (n) => `${n} ${plural(n, "купон", "купона", "купонов")}`;

  /* ---------- шапка и подвал ---------- */
  function chrome() {
    $("#hd").innerHTML = `<div class="wrap hd__in">
      <a class="logo" href="index.html" aria-label="Пикабу Промокоды — на главную"><img src="img/logo-icon.svg" alt=""><img src="img/logo-text.svg" alt="Пикабу Промокоды">${ic("down")}</a>
      <nav class="nav" aria-label="Разделы">
        <a class="nav__a" href="#">Каталог ${ic("down")}</a>
        <a class="nav__a" href="#">Акции ${ic("down")}</a>
        <a class="nav__a" href="#">Блог</a>
        <a class="save" href="#">Сэкономь ещё<img src="img/cookie.svg" alt=""></a>
      </nav>
      <label class="hd__search"><input type="search" placeholder="Магазины" aria-label="Поиск магазина">${ic("search")}</label>
      <a class="btn btn--primary" href="#">Вход</a>
    </div>`;
    $("#ft").innerHTML = `<div class="wrap ft__in">
      <a class="logo" href="index.html"><img src="img/logo-icon.svg" alt=""><img src="img/logo-text.svg" alt="Пикабу Промокоды"></a>
      <div><a href="#">Вопросы и ответы</a><a href="#">Как это работает</a><a href="#">Условия</a></div>
      <div><a href="#">Контакты</a><a href="#">Как добавить свой промокод</a><a href="#">Команда</a></div>
      <div><a href="#">Пользовательское соглашение</a><a href="#">О компании</a><a href="#">Оферта Пикабокса</a></div>
      <div class="ft__c">© 2018–2025 ООО «Пикабу»<br>Все права защищены</div>
    </div>`;
  }

  /* карусель: стрелки по краям, прячутся на концах; точки — по страницам */
  function carousel(root) {
    const row = $(".row", root), l = $(".arr--l", root), r = $(".arr--r", root), dots = $(".dots", root.parentNode === document ? root : root);
    const dotsEl = root.querySelector(".dots");
    const pages = () => Math.max(1, Math.round(row.scrollWidth / row.clientWidth));
    const draw = () => { if (dotsEl) dotsEl.innerHTML = Array.from({ length: pages() }, (_, i) => `<i class="${i === Math.round(row.scrollLeft / row.clientWidth) ? "on" : ""}"></i>`).join(""); };
    const upd = () => { if (l) l.disabled = row.scrollLeft < 4; if (r) r.disabled = row.scrollLeft > row.scrollWidth - row.clientWidth - 4; draw(); };
    if (l) l.onclick = () => row.scrollBy({ left: -row.clientWidth });
    if (r) r.onclick = () => row.scrollBy({ left: row.clientWidth });
    row.addEventListener("scroll", upd, { passive: true }); addEventListener("resize", upd); upd();
    return row;
  }
  const arrows = `<button class="arr arr--l" type="button" aria-label="Назад">${ic("left")}</button><button class="arr arr--r" type="button" aria-label="Вперёд">${ic("right")}</button>`;
  const h2 = (t, link = true) => `<h2 class="h2">${t}${link ? `<a href="#" aria-label="${t}: все">${ic("ext", "ic--s")}</a>` : ""}</h2>`;

  /* ---------- купон-карточка (как в блоке «Популярные промокоды») ---------- */
  const TAGS = { excl: ["Эксклюзивный", "tag"], gift: ["Подарок", "gift"], ship: ["Доставка", "bolt"], sale: ["Акция", "star"] };
  const cp = (c) => `<article class="cp card lift">
    <div class="cp__top"><span class="cp__logo"><img src="${L(c.l)}" alt="${c.s}"></span><span class="cp__tags">${(c.tags || []).map((t) => t.startsWith("₽") ? `<span class="tag tag--sum">${t.slice(1)}</span>` : `<span class="tag tag--${t}">${ic(TAGS[t][1])}${TAGS[t][0]}</span>`).join("")}</span></div>
    <div class="cp__t">${c.t}</div>
    <div class="cp__d">${ic("clock", "ic--s")}${c.d || "До 31 июл. 2026"}</div>
    <button class="btn btn--outline" type="button" data-code>${c.btn || "Показать промокод"}</button>
  </article>`;
  const PR = [
    { s: "Пироги №1", l: "pirogi", t: "Скидки до 20% при заказе обуви для горного туризма", tags: ["excl", "gift"] },
    { s: "Lamoda", l: "lamoda", t: "Промокод -10% при любом онлайн-заказе", tags: ["ship"] },
    { s: "Арома-Бутик", l: "aroma", t: "Снижение стоимости на 500 рублей при заказе от 10000 рублей", tags: ["₽500 ₽"] },
    { s: "Спортмастер", l: "sportmaster2", t: "Скидки до 20% при заказе обуви для горного туризма", tags: ["sale"] },
    { s: "Ситилинк", l: "citilink_sq", t: "Скидка 3000 рублей при первом заказе от 15000 рублей", tags: ["₽3000 ₽"] },
    { s: "AliExpress", l: "ali", t: "До -70% на различные товары + бесплатная доставка", tags: ["ship"] },
    { s: "Детский мир", l: "dmir", t: "Кешбэк до 25% бонусами на технику и инструменты", tags: ["gift"] },
    { s: "ЕАптека", l: "eapteka", t: "Скидка 15% на первый заказ в приложении", tags: ["excl"] },
  ];

  /* ---------- главная ---------- */
  function home() {
    $("#brands").innerHTML = ["letu", "mvideo", "ali", "zdravcity", "ymarket", "megamarket", "zdravcity", "ymarket", "rivgosh"].map((l) => `<a class="brand card lift${l === "megamarket" ? " brand--full" : ""}" href="store.html"><img src="${L(l)}" alt=""></a>`).join("") + `<a class="brand brand--citi card lift" href="store.html"><img src="${L("citilink")}" alt="Ситилинк"></a>`;
    const ST = [["vprok", 9999], ["dmir", 46], ["citilink", 16], ["dodo", 1], ["eldorado", 31], ["rivgosh", 56], ["ali", 321], ["eapteka", 72], ["foxford", 6], ["sber", 16], ["chitai", 10], ["yves", 111], ["biggeek", 96], ["sportmaster", 38], ["ozon", 54], ["vprok", 71], ["yeda", 10], ["rivgosh", 56]];
    $("#pstores").innerHTML = ST.map(([l, n]) => `<a class="pstore card lift" href="store.html"><span class="pstore__img"><img src="${L(l)}" alt=""></span><span>${kup(n)}</span></a>`).join("");
    const rows = { popular: [0, 1, 2, 3, 4, 5, 6, 7], fresh: [0, 1, 2, 3, 5, 7, 4, 6], soon: [0, 1, 2, 3, 6, 4, 7, 5] };
    for (const [id, order] of Object.entries(rows)) {
      const host = $("#" + id);
      host.innerHTML = `<div class="row">${order.map((i) => cp(id === "popular" ? PR[i] : { ...PR[i], tags: i === 0 ? ["gift"] : PR[i].tags })).join("")}</div>${arrows}`;
      carousel(host);
    }
    const IS = [["bukvoed", "Буквоед", 12], ["dmir", "Детский мир", 26], ["atlantic", "Atlantic underwear", 42], ["praktikum", "Яндекс практикум", 56], ["gardenmart", "Гарденмарт", 8], ["pharma", "Pharmacosmetica", 34], ["eapteka", "Еаптека", 18], ["arkh", "Архангельские водоросли", 1], ["sportmaster", "Спортмастер", 6], ["praktikum", "Яндекс практикум", 256], ["ivi", "ИВИ", 98], ["pharma", "Pharmacosmetica", 16], ["britvology", "Britvology", 32], ["brandshop", "BRANDSHOP", 13], ["askent", "Аскент", 122], ["atlantic", "Atlantic underwear", 14]];
    const page = (arr) => `<div class="ishops" style="width:100%">${arr.map(([l, n, k]) => `<a class="ishop card lift" href="store.html"><span class="ishop__img"><img src="${L(l)}" alt=""></span><span><b>${n}</b><span>${kup(k)}</span></span></a>`).join("")}</div>`;
    $("#ishops").innerHTML = `<div class="row">${page(IS)}${page(IS.slice(8).concat(IS.slice(0, 8)))}${page(IS.slice(4).concat(IS.slice(0, 4)))}</div>${arrows}<div class="dots"></div>`;
    carousel($("#ishops"));
    const CATS = [["Авто", 78], ["Банки и страхование", 56], ["Детские товары", 12], ["Кино и концерты", 32], ["Косметика и парфюмерия", 18], ["Образование", 77], ["Офис и работа", 90], ["Путешествия, билеты", 104], ["Спорт", 3], ["Товары для взрослых (18+)", 32], ["Товары для животных", 11], ["Услуги и сервисы", 68], ["Хостинг, интернет", 33], ["Часы и аксессуары", 114], ["Аптеки и здоровье", 236], ["Гипермаркеты", 88], ["Доставка еды", 78], ["Книги", 78], ["Маркетплейсы", 78], ["Одежда и обувь", 78], ["Прочее", 78], ["Развлечения", 78], ["Стройка", 78], ["Товары для дома", 78], ["Украшения", 78], ["Фильмы и музыка", 78], ["Цветы и подарки", 78], ["Электроника, компьютеры", 78]];
    $("#cats").innerHTML = CATS.map(([n, k], i) => `<a class="cat card lift" href="#"><img class="cat__ic" src="img/cat/c${i + 1}.svg" alt=""><span><b>${n}</b><span>${k} ${plural(k, "магазин", "магазина", "магазинов")}</span></span></a>`).join("");
    const AR = [["a1", "Подарки с теплом: уютные и практичные новогодние сюрпризы."], ["a2", "Как эффективно готовиться к экзаменам: лучшие советы для школьников"], ["a3", "Как эффективно готовиться к экзаменам: лучшие советы для школьников"]];
    $("#arts").innerHTML = `<div class="row">${AR.concat(AR).map(([i, t]) => `<a class="art" href="#"><img src="img/art/${i}.jpg" alt=""><span>${t}</span></a>`).join("")}</div>${arrows}`;
    carousel($("#arts"));
    // слайдер баннеров
    const sl = $("#slider");
    const row = carousel(sl);
    let auto = setInterval(() => { row.scrollLeft > row.scrollWidth - row.clientWidth - 4 ? row.scrollTo({ left: 0 }) : row.scrollBy({ left: 816 }); }, 5000);
    sl.addEventListener("pointerenter", () => clearInterval(auto), { once: true });
    // популярные запросы
    $$("[data-q]").forEach((b) => (b.onclick = () => { $("#q").value = b.dataset.q; $("#q").focus(); }));
    $("#sform").onsubmit = (e) => { e.preventDefault(); location.href = "store.html"; };
  }

  /* ---------- страница магазина (379:23520 — увеличенная сетка, цветные плашки) ---------- */
  const COND = `<div class="cu__more">Промокод действует на весь ассортимент, кроме товаров из раздела «Уценка». Не суммируется с другими акциями. Один промокод — на один заказ.</div>`;
  function cu(c) {
    if (c.goods) return goods();
    if (c.best) return best();
    const v = c.v === "gift" ? ic("bag") : c.v === "truck" ? ic("truck") : c.v === "dmir" ? `<img src="${L("dmir")}" alt="Детский мир">` : c.v;
    const meta = c.m ? `<span class="msg">${c.m}</span>` : `<span class="when">${ic("clock", "ic--s")}${c.d || "До 30 июн. 2026"}</span>${c.exp ? "" : `<span>${ic("check", "ic--s")}Проверено</span>`}<span>${ic("eye", "ic--s")}${c.seen || 3669} раз</span>`;
    const btn = c.sub ? `<button class="btn btn--l btn--orange" type="button" data-code>Забрать по подписке</button><span class="cu__sub">Подписка 199 ₽/мес</span>`
      : `<button class="btn btn--l ${c.act ? "btn--outline" : "btn--primary"}" type="button" data-code>${c.act ? "Открыть акцию " + ic("ext", "ic--s") : "Показать промокод"}</button><button class="cu__cond" type="button" data-cond>Условия ${ic("down")}</button>`;
    return `<article class="cu card${c.k ? " cu--" + c.k : ""}${c.exp ? " cu--exp" : ""}" data-f="${c.f || "promo"}">${c.b ? `<span class="cu__badge">${c.b}</span>` : ""}<div class="cu__v">${v}</div><div><div class="cu__t">${c.t}</div><div class="cu__m">${meta}</div></div><div class="cu__r">${btn}</div>${c.sub ? "" : COND}</article>`;
  }
  function goods() {
    const G = [["g1", "Солнечный фонарь из железа", "661 ₽", "2 310 ₽", "-69%", "Выбор редакции", "#7b5cf0"], ["g2", "Робот-пылесос Dreame L40 Ultra CE, 70 Вт", "30 039 ₽", "112 657 ₽", "-72%", "Лучшая цена", "#f08a24"], ["g3", "Смартфон Samsung S23 8/256GB Black", "2 588 ₽", "3 802 ₽", "-10%", "Скоро закончится", "#e0474c"], ["g2", "Робот-пылесос Dreame D10s Plus, станция самоочистки", "24 990 ₽", "39 990 ₽", "-37%", "Лучшая цена", "#f08a24"]];
    return `<section class="goods card"><div class="carousel" id="goods"><div class="row">${G.map(([i, t, p, o, d, b, c]) => `<a class="good lift" href="#"><span class="badge" style="background:${c}">${b}</span><span class="good__img"><img src="img/goods/${i}.jpg" alt=""></span><span><b>${t}</b><div class="price">${p}</div><div class="old"><s>${o}</s><em>${d}</em></div></span></a>`).join("")}</div>${arrows}</div><a class="goods__all" href="#">Все товары</a></section>`;
  }
  function best() {
    const B = [["pop", "star", "Самый популярный", "До <em>-70%</em> на различные товары + бесплатная доставка", "До 31 янв. 2026"], ["best", "pct", "Выгодные условия", "Скидка <em>3000 рублей</em> при первом заказе украшений от 15000 рублей", "До 31 янв. 2026"], ["max", "flame", "Максимальная скидка", "Промокод <em>-10%</em> при любом онлайн-заказе", "До 31 июл. 2026"]];
    return `<div><h2 class="sec-h" style="margin-top:16px">Лучшие предложения Ситилинк сегодня</h2><div class="best">${B.map(([k, i, n, t, d]) => `<article class="bo card"><span class="tag tag--${k}">${ic(i)}${n}</span><div class="bo__t">${t}</div><div class="cp__d">${ic("clock", "ic--s")}${d}</div><button class="btn btn--primary" type="button" data-code>Показать промокод</button></article>`).join("")}</div></div>`;
  }
  const CU = [
    { k: "sub", b: "По подписке", v: "1 500 ₽", t: "Скидка <em>1500 рублей</em> для ВСЕХ клиентов при покупке от 15000 рублей", m: "Можно комбинировать с купоном, который применяется автоматически", sub: 1 },
    { k: "pop", b: "Популярный промокод", v: "Кешбэк", t: "Кешбэк до 25% бонусами на технику и инструменты" },
    { k: "excl", b: "Эксклюзивный промокод", v: "10000₽", t: "10 000 рублей скидки на заказ от 30 000 рублей!" },
    { v: "gift", t: "Скидка 5% + кешбэк 5% на первый заказ", f: "repeat" },
    { goods: 1 },
    { v: "dmir", t: "Кешбэк до 25% бонусами на технику и инструменты" },
    { v: "10000₽", t: "10 000 рублей скидки на заказ от 30 000 рублей!", f: "sale" },
    { v: "truck", t: "Скидка 5% + кешбэк 5% на первый заказ", f: "ship" },
    { v: "Кешбэк", t: "Кешбэк 2% за покупку компьютерной техники", seen: 235, act: 1, f: "sale" },
    { v: "truck", t: "Скидка 5% + кешбэк 5% на первый заказ", f: "ship" },
    { v: "Кешбэк", t: "Кешбэк 2% за покупку компьютерной техники", seen: 235, act: 1, f: "sale" },
    { best: 1 },
    { v: "truck", t: "Скидка 5% + кешбэк 5% на первый заказ", f: "ship" },
    { v: "Кешбэк", t: "Кешбэк 2% за покупку компьютерной техники", seen: 235, act: 1, f: "sale" },
  ];
  function store() {
    const list = $("#list");
    const draw = (f) => {
      list.innerHTML = CU.filter((c) => f === "all" || c.goods || c.best || c.f === f || (!c.f && f === "promo")).map(cu).join("");
      if ($("#goods")) carousel($("#goods"));
    };
    draw("all");
    $("#filters").addEventListener("click", (e) => { const b = e.target.closest(".f"); if (!b) return; $$(".f").forEach((x) => x.classList.toggle("on", x === b)); draw(b.dataset.f); });
    document.addEventListener("click", (e) => { const c = e.target.closest("[data-cond]"); if (c) c.closest(".cu").classList.toggle("open"); });
    $("#expired").innerHTML = [{ v: "-50%", t: "Снижены цены до 50% на технику из подборки", d: "Срок акции истёк", seen: 26371, exp: 1 }, { v: "Кешбэк", t: "Кешбэк 2% за покупку компьютерной техники", d: "Срок акции истёк", seen: 235, exp: 1, act: 1 }].map(cu).join("");
    const SIM = [
      { s: "Ситилинк", l: "citilink_sq", t: "Скидка 3000 рублей при первом заказе украшений от 15000 рублей", tags: [], d: "До 31 янв. 2026", icon: "bag" },
      { s: "AliExpress", l: "ali", t: "До -70% на различные товары + бесплатная доставка", tags: [], d: "До 31 янв. 2026", icon: "bag" },
      { s: "Lamoda", l: "lamoda", t: "Промокод -10% при любом онлайн-заказе", tags: [], d: "До 31 янв. 2026", icon: "truck" },
      { s: "Sunlight", l: "aroma", t: "Снижение стоимости на 500 рублей при заказе от 10000 рублей", tags: ["₽500 ₽"], d: "Пикабокс · 199 ₽ в месяц", btn: "Забрать по подписке" },
      { s: "Пироги №1", l: "pirogi", t: "Скидка 10% на первый заказ", tags: ["₽-10%"], d: "До 31 дек. 2026" },
      { s: "Спортмастер", l: "sportmaster2", t: "Скидки до 20% при заказе обуви для горного туризма", tags: ["₽-20%"], d: "До 31 дек. 2026" },
    ];
    $("#similar").innerHTML = SIM.map((c) => cp(c).replace('<span class="cp__tags">', `<span class="cp__tags">${c.icon ? `<span class="tag" style="background:#f2f3f7;color:var(--accent)">${ic(c.icon)}</span>` : ""}`)).join("");
    const PS = [["ymarket", "Яндекс маркет", 37], ["vprok", "Банк Открытие (Росгосстрах Банк)", 12], ["sber", "Sunlight", 1], ["foxford", "Фоксфорд", 101], ["eldorado", "Эльдорадо", 82], ["biggeek", "Биг Гик", 46], ["lamoda", "Ламода", 46], ["ali", "Алиэкспресс", 78], ["aroma", "Арома-Бутик", 63], ["chitai", "Читай город", 41]];
    $("#ps").innerHTML = PS.map(([l, n, k]) => `<a href="#"><img src="${L(l)}" alt=""><span>${n}<small>${kup(k)}</small></span></a>`).join("");
    const SC = ["Авто", "Аптеки и здоровье", "Банки и страхование", "Гипермаркеты", "Детские товары", "Доставка еды", "Кино и концерты", "Книги", "Косметика и парфюмерия", "Маркетплейсы", "Образование", "Одежда и обувь", "Офис и работа", "Прочее", "Путешествия и билеты", "Развлечения", "Спорт", "Стройка", "Товары для взрослых (18+)", "Товары для дома", "Товары для животных", "Украшения", "Услуги и сервисы", "Фильмы и музыка", "Хостинг, интернет", "Цветы и подарки", "Часы и аксессуары", "Электроника и компьютеры"];
    const ICN = [1, 15, 2, 16, 3, 17, 4, 18, 5, 19, 6, 20, 7, 21, 8, 22, 9, 23, 10, 24, 11, 25, 12, 26, 13, 27, 14, 28];
    $("#scats").innerHTML = SC.map((n, i) => `<a href="#"><img src="img/cat/c${ICN[i]}.svg" alt="">${n}</a>`).join("");
  }

  /* ---------- окно «Показать промокод» ---------- */
  function modal() {
    const m = $("#modal"); let last;
    document.addEventListener("click", (e) => {
      const b = e.target.closest("[data-code]");
      if (b) {
        last = b; const card = b.closest(".cp, .cu, .bo"); const img = card && card.querySelector(".cp__logo img, .cu__v img");
        $("#mlogo").innerHTML = img ? `<img src="${img.getAttribute("src")}" alt="">` : "";
        $("#mtitle").textContent = (card && (card.querySelector(".cp__t, .cu__t, .bo__t") || {}).textContent) || "Промокод";
        $("#mcode").textContent = "PIKABU" + (Math.floor(Math.random() * 900) + 100);
        m.classList.add("on"); m.setAttribute("aria-hidden", "false"); $("#mcopy").focus(); return;
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
