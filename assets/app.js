/* זאגלעמביער צייטונג — אפליקציית התרגום (עברית / English / Polski) */
(() => {
  const app = document.getElementById('app');

  /* ---------- UI strings per language ---------- */
  const L10N = {
    he: {
      dir: 'rtl',
      subtitle: 'פרויקט תרגום העיתון · בנדין, פולין · 1929–1937',
      wipStamp: 'התרגום בעבודה',
      missingIssue: 'חסר בארכיון',
      wipText: (n, t) => `גיליונות נוספים מתפרסמים בהדרגה · עד כה ${n} מתוך ${t}`,
      lastUpdated: d => `עדכון אחרון: ${d}`,
      navIssues: 'גיליונות', navAbout: 'על הפרויקט',
      loading: 'טוען…', loadingIssue: 'טוען גיליון…',
      homeTitle: 'ארכיון מתורגם של ה„זאַגלעמביער צײַטונג"',
      homeIntro: 'עיתון יהודי בשפת יידיש שיצא לאור בעיר בנדין שבאזור זגלמביה, פולין, בשנים 1929–1937. כאן מתפרסמים תרגומים של כתבות מן העיתון, לצד קישור לצילום המקורי בארכיון הספרייה הלאומית.',
      facts: (n, p) => `${n} גיליונות · ${p} עמודים · המקור: אוסף העיתונות, הספרייה הלאומית`,
      gapNote: 'פער בארכיון: יוני 1933 – דצמבר 1933 (אין גיליונות דיגיטליים)',
      months: ['ינואר','פברואר','מרץ','אפריל','מאי','יוני','יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'],
      fmtDate: (d, m, y) => `${d} ב${m} ${y}`,
      inMonth: d => `${d} בחודש`,
      allIssues: 'כל הגיליונות', crumbSep: '←',
      issueNo: n => `מס׳ ${n}`, notProcessed: 'טרם עובד', translatedPct: p => `תורגם ${p}%`,
      issueTitle: (date, num) => `גיליון ${date}` + (num ? ` · מספר ${num}` : ''),
      origIssue: 'הגיליון המקורי בספרייה הלאומית ↗', fullPdf: 'PDF של הגיליון המלא ↗',
      pageWord: 'עמוד', pagePdf: 'PDF של העמוד ↗',
      origArticle: 'לכתבה המקורית בספרייה הלאומית ↗',
      untranslated: '(טרם תורגם)',
      noTextLang: 'תוכן זה טרם תורגם לשפה הנוכחית. בינתיים אפשר לעיין במקור.',
      issueNotWorked: 'גיליון זה טרם עובד. רשימת הכתבות והתרגומים יתווספו בהמשך — בינתיים אפשר לעיין במקור דרך הקישורים למעלה.',
      notFound: 'גיליון לא נמצא.', loadError: 'שגיאה בטעינה: ',
      statuses: { todo: 'טרם תורגם', draft: 'טיוטה', translated: 'תורגם', reviewed: 'נבדק' },
      transTypes: { full: 'תרגום מלא', summary: 'תקציר', partial: 'תרגום חלקי' },
      ocrOk: 'OCR תקין', ocrIssues: n => `OCR: ${n} שיבושים`, ocrUnreadable: 'OCR לא קריא',
      srcNote: { he: 'הטקסט במקורו בעברית', pl: 'הטקסט במקורו בפולנית' },
      scanAlt: 'צילום הכתבה המקורית',
      origYiddish: 'מקור ביידיש',
      shareItem: 'העתקת קישור לכתבה', linkCopied: 'הקישור הועתק ✓',
      editYi: 'עריכת טקסט ביידיש', editYiTitle: 'עריכת מקור היידיש',
      yiTitleLabel: 'כותרת ביידיש (כפי שנסרק)', yiTextLabel: 'טקסט ביידיש (כפי שנסרק)',
      currentTransLabel: 'התרגום הנוכחי', mSave: 'שמירה', mCancel: 'ביטול',
      mSaving: 'שומר…', mSaved: 'נשמר ✓ · ממתין לתרגום', mSaveErr: 'שגיאה',
      suggestSent: 'ההצעה נשלחה לבדיקה ✓',
      prevIssue: 'הקודם', nextIssue: 'הבא', issuePager: 'מעבר בין גיליונות',
      navSearch: 'חיפוש', searchPlaceholder: 'חיפוש בכל התרגומים…',
      searchTitle: 'חיפוש', searchPrompt: 'הקלד/י מילה או שם כדי לחפש בכל הכתבות המתורגמות.',
      searchNoResults: 'לא נמצאו תוצאות עבור', searchResults: n => `${n} תוצאות`,
      searchIn: 'בגיליון', searchLoading: 'סורק את הארכיון…',
      aboutHtml: `<h1>על הפרויקט</h1>
        <p>ה„זאַגלעמביער צײַטונג" (עיתון זגלמביה) היה שבועון יהודי בשפת יידיש שיצא לאור בבנדין, פולין, בין השנים 1929–1937. הארכיון הדיגיטלי שלו — 439 גיליונות ו־3,426 עמודים — שמור באוסף העיתונות של הספרייה הלאומית.</p>
        <p>מטרת הפרויקט: להנגיש את תוכן העיתון למי שאינם קוראים יידיש, כתבה אחר כתבה, בעברית, באנגלית ובפולנית. לצד כל תרגום מופיע קישור לצילום הסרוק המקורי, כדי שאפשר יהיה תמיד לחזור למקור.</p>
        <p>התרגום נעשה באופן הדרגתי, וגיליונות חדשים עולים לאתר בהדרגה. בהדרגה נשפר גם את איכות ה־OCR.</p>
        <p>את הפרויקט עושה אילנה אורן תמיר, שאביה היה צאצא למשפחת גוטמן בבנדין. הפרויקט נולד בעקבות ביקור בבנדין וצפייה בפרויקט שימור זכר הקהילה היהודית בבנדין של אדם שידלובסקי מ<a href="https://www.facebook.com/BedzinJerusalemOfZaglembie" target="_blank" rel="noopener">עמותת רות׳קה לסקר</a> (Fundacja Rutki Laskier).</p>`,
      footer: 'המקור הסרוק: <a href="https://www.nli.org.il/he/newspapers/zaglembiercajtung" target="_blank" rel="noopener">אוסף העיתונות, הספרייה הלאומית</a> · הועלה בסיוע The Judaica Division, Harvard University Library וקרן ליטאואר'
    },
    en: {
      dir: 'ltr',
      subtitle: 'Newspaper translation project · Będzin, Poland · 1929–1937',
      wipStamp: 'Work in progress',
      missingIssue: 'Missing from the archive',
      wipText: (n, t) => `more issues are published gradually · ${n} of ${t} so far`,
      lastUpdated: d => `Last updated: ${d}`,
      navIssues: 'Issues', navAbout: 'About',
      loading: 'Loading…', loadingIssue: 'Loading issue…',
      homeTitle: 'A Translated Archive of the "Zaglembier Tsaytung"',
      homeIntro: 'A Jewish weekly in Yiddish published in Będzin, in the Zagłębie region of Poland, 1929–1937. This site publishes translations of its articles, each linked to the original scan in the National Library of Israel archive.',
      facts: (n, p) => `${n} issues · ${p} pages · Source: JPress, National Library of Israel`,
      gapNote: 'Archive gap: June–December 1933 (no digitized issues)',
      months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
      fmtDate: (d, m, y) => `${m} ${d}, ${y}`,
      inMonth: d => `${d}`,
      allIssues: 'All issues', crumbSep: '→',
      issueNo: n => `No. ${n}`, notProcessed: 'not processed', translatedPct: p => `${p}% translated`,
      issueTitle: (date, num) => `Issue of ${date}` + (num ? ` · No. ${num}` : ''),
      origIssue: 'Original issue at the National Library ↗', fullPdf: 'Full issue PDF ↗',
      pageWord: 'Page', pagePdf: 'Page PDF ↗',
      origArticle: 'Original article at the National Library ↗',
      untranslated: '(not yet translated)',
      noTextLang: 'This item has not been translated into the current language yet. You can view the original meanwhile.',
      issueNotWorked: 'This issue has not been processed yet. Article lists and translations will be added — meanwhile you can browse the original via the links above.',
      notFound: 'Issue not found.', loadError: 'Loading error: ',
      statuses: { todo: 'not translated', draft: 'draft', translated: 'translated', reviewed: 'reviewed' },
      transTypes: { full: 'full translation', summary: 'summary', partial: 'partial' },
      ocrOk: 'OCR clean', ocrIssues: n => `OCR: ${n} issues`, ocrUnreadable: 'OCR unreadable',
      srcNote: { he: 'Original text in Hebrew', pl: 'Original text in Polish' },
      scanAlt: 'Scan of the original article',
      origYiddish: 'Original (Yiddish)',
      shareItem: 'Copy link to item', linkCopied: 'Link copied ✓',
      editYi: 'Edit Yiddish text', editYiTitle: 'Edit the Yiddish source',
      yiTitleLabel: 'Yiddish title (as scanned)', yiTextLabel: 'Yiddish text (as scanned)',
      currentTransLabel: 'Current translation', mSave: 'Save', mCancel: 'Cancel',
      mSaving: 'Saving…', mSaved: 'Saved ✓ · awaiting translation', mSaveErr: 'Error',
      suggestSent: 'Suggestion submitted for review ✓',
      prevIssue: 'Previous', nextIssue: 'Next', issuePager: 'Issue navigation',
      navSearch: 'Search', searchPlaceholder: 'Search all translations…',
      searchTitle: 'Search', searchPrompt: 'Type a word or name to search all translated articles.',
      searchNoResults: 'No results for', searchResults: n => `${n} results`,
      searchIn: 'in the issue of', searchLoading: 'Scanning the archive…',
      aboutHtml: `<h1>About the project</h1>
        <p>The "Zaglembier Tsaytung" (Zagłębie Newspaper) was a Jewish weekly in Yiddish published in Będzin, Poland, from 1929 to 1937. Its digital archive — 439 issues, 3,426 pages — is held in the National Library of Israel's press collection.</p>
        <p>The project's goal: to make the newspaper accessible to readers of Hebrew, English and Polish, article by article. Each translation links to the original scan, so the source is always one click away.</p>
        <p>The translation is being done gradually, and new issues are added to the site gradually. Over time we will also gradually improve the quality of the OCR.</p>
        <p>The project is the work of Ilana Oren Tamir, whose father was a descendant of the Gutman family of Będzin. It grew out of a visit to Będzin and an encounter with the project to preserve the memory of Będzin's Jewish community led by Adam Szydłowski of the <a href="https://www.facebook.com/BedzinJerusalemOfZaglembie" target="_blank" rel="noopener">Rutka Laskier Foundation</a> (Fundacja Rutki Laskier).</p>`,
      footer: 'Original scans: <a href="https://www.nli.org.il/he/newspapers/zaglembiercajtung" target="_blank" rel="noopener">JPress, National Library of Israel</a> · Digitized with the Judaica Division, Harvard University Library and the Littauer Foundation'
    },
    pl: {
      dir: 'ltr',
      subtitle: 'Projekt tłumaczenia gazety · Będzin, Polska · 1929–1937',
      wipStamp: 'Praca w toku',
      missingIssue: 'Brak w archiwum',
      wipText: (n, t) => `kolejne numery publikujemy stopniowo · dotąd ${n} z ${t}`,
      lastUpdated: d => `Ostatnia aktualizacja: ${d}`,
      navIssues: 'Numery', navAbout: 'O projekcie',
      loading: 'Ładowanie…', loadingIssue: 'Ładowanie numeru…',
      homeTitle: 'Przetłumaczone archiwum „Zaglembier Cajtung"',
      homeIntro: 'Żydowski tygodnik w języku jidysz, wydawany w Będzinie w Zagłębiu Dąbrowskim w latach 1929–1937. Publikujemy tu tłumaczenia artykułów gazety wraz z odnośnikami do oryginalnych skanów w archiwum Biblioteki Narodowej Izraela.',
      facts: (n, p) => `${n} numerów · ${p} stron · Źródło: JPress, Biblioteka Narodowa Izraela`,
      gapNote: 'Luka w archiwum: czerwiec–grudzień 1933 (brak zdigitalizowanych numerów)',
      months: ['stycznia','lutego','marca','kwietnia','maja','czerwca','lipca','sierpnia','września','października','listopada','grudnia'],
      fmtDate: (d, m, y) => `${d} ${m} ${y}`,
      inMonth: d => `${d}`,
      allIssues: 'Wszystkie numery', crumbSep: '→',
      issueNo: n => `nr ${n}`, notProcessed: 'nieopracowany', translatedPct: p => `przetłumaczono ${p}%`,
      issueTitle: (date, num) => `Numer z ${date}` + (num ? ` · nr ${num}` : ''),
      origIssue: 'Oryginalny numer w Bibliotece Narodowej ↗', fullPdf: 'PDF całego numeru ↗',
      pageWord: 'Strona', pagePdf: 'PDF strony ↗',
      origArticle: 'Oryginalny artykuł w Bibliotece Narodowej ↗',
      untranslated: '(jeszcze nie przetłumaczono)',
      noTextLang: 'Ten materiał nie został jeszcze przetłumaczony na wybrany język. Tymczasem można obejrzeć oryginał.',
      issueNotWorked: 'Ten numer nie został jeszcze opracowany. Spis artykułów i tłumaczenia zostaną dodane — tymczasem można przeglądać oryginał przez powyższe odnośniki.',
      notFound: 'Nie znaleziono numeru.', loadError: 'Błąd ładowania: ',
      statuses: { todo: 'nieprzetłumaczone', draft: 'szkic', translated: 'przetłumaczone', reviewed: 'zweryfikowane' },
      transTypes: { full: 'pełne tłumaczenie', summary: 'streszczenie', partial: 'tłumaczenie częściowe' },
      ocrOk: 'OCR czysty', ocrIssues: n => `OCR: ${n} usterek`, ocrUnreadable: 'OCR nieczytelny',
      srcNote: { he: 'Tekst oryginalnie po hebrajsku', pl: 'Tekst oryginalnie po polsku' },
      scanAlt: 'Skan oryginalnego artykułu',
      origYiddish: 'Oryginał (jidysz)',
      shareItem: 'Kopiuj link', linkCopied: 'Skopiowano ✓',
      editYi: 'Edytuj tekst jidysz', editYiTitle: 'Edytuj źródło jidysz',
      yiTitleLabel: 'Tytuł w jidysz (ze skanu)', yiTextLabel: 'Tekst w jidysz (ze skanu)',
      currentTransLabel: 'Aktualne tłumaczenie', mSave: 'Zapisz', mCancel: 'Anuluj',
      mSaving: 'Zapisywanie…', mSaved: 'Zapisano ✓', mSaveErr: 'Błąd',
      suggestSent: 'Propozycja wysłana do weryfikacji ✓',
      prevIssue: 'Poprzedni', nextIssue: 'Następny', issuePager: 'Nawigacja między numerami',
      navSearch: 'Szukaj', searchPlaceholder: 'Przeszukaj wszystkie tłumaczenia…',
      searchTitle: 'Szukaj', searchPrompt: 'Wpisz słowo lub nazwisko, aby przeszukać wszystkie przetłumaczone artykuły.',
      searchNoResults: 'Brak wyników dla', searchResults: n => `${n} wyników`,
      searchIn: 'w numerze z', searchLoading: 'Przeszukiwanie archiwum…',
      aboutHtml: `<h1>O projekcie</h1>
        <p>„Zaglembier Cajtung" (Gazeta Zagłębiowska) był żydowskim tygodnikiem w języku jidysz, wydawanym w Będzinie w latach 1929–1937. Jego cyfrowe archiwum — 439 numerów, 3426 stron — znajduje się w kolekcji prasy Biblioteki Narodowej Izraela.</p>
        <p>Cel projektu: udostępnić treść gazety czytelnikom hebrajskiego, angielskiego i polskiego, artykuł po artykule. Każde tłumaczenie zawiera odnośnik do oryginalnego skanu.</p>
        <p>Tłumaczenie powstaje stopniowo, a nowe numery są stopniowo dodawane do serwisu. Stopniowo będziemy też poprawiać jakość OCR.</p>
        <p>Projekt prowadzi Ilana Oren Tamir, której ojciec był potomkiem rodziny Gutmanów z Będzina. Pomysł narodził się po wizycie w Będzinie i zapoznaniu się z projektem upamiętniania będzińskiej społeczności żydowskiej, prowadzonym przez Adama Szydłowskiego z <a href="https://www.facebook.com/BedzinJerusalemOfZaglembie" target="_blank" rel="noopener">Fundacji Rutki Laskier</a>.</p>`,
      footer: 'Oryginalne skany: <a href="https://www.nli.org.il/he/newspapers/zaglembiercajtung" target="_blank" rel="noopener">JPress, Biblioteka Narodowa Izraela</a> · Digitalizacja: Judaica Division, Harvard University Library oraz Littauer Foundation'
    }
  };

  const LANG_FIELD = { he: 'He', en: 'En', pl: 'Pl' };
  const LANGS = ['he', 'en', 'pl'];

  let lang = localStorage.getItem('zc_lang') || 'he';
  if (!L10N[lang]) lang = 'he';

  let DB = null;
  const contentCache = {};
  let currentIssueDate = null;   // set while viewing an issue, for per-item URL sync
  let lastShownIssue = null;     // last issue rendered — a different one opens at the top

  // in-page Yiddish editing (a popup to propose corrections while reading).
  // shown only on localhost; saves go to the local editing-console server on 8756.
  const IS_LOCAL = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
  // editing aids (OCR counters, "reviewed" marks, the Yiddish edit button) are shown only
  // when working locally; the public site hides them (see html:not(.is-local) in style.css)
  document.documentElement.classList.toggle('is-local', IS_LOCAL);
  const SAVE_API = 'http://localhost:8756/api/save';
  // volunteer mode (?suggest=1): the popup SUBMITS A SUGGESTION instead of writing
  // the official content — it lands in data/contributions/pending for review.
  const SUGGEST_MODE = new URLSearchParams(location.search).has('suggest');
  const SUGGEST_API = 'http://localhost:8756/api/suggest';

  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  // editorial insertions — anything in [square brackets] ([?], [—], reconstructed
  // words, topic tags) — are rendered in a distinct sans font so the reader can
  // tell an editor's note apart from the translated original text.
  const annotate = s => esc(s).replace(/\[[^\]\n]*\]/g, m => `<span class="ed-note">${m}</span>`);
  const T = () => L10N[lang];

  const articleUrl = (oid, sectionId) => `https://www.nli.org.il/he/newspapers/?a=d&d=${oid}.${sectionId}`;
  const pagePdfUrl = (oid, pageNum) => `https://www.nli.org.il/he/newspapers/?a=is&oid=${oid}.1.${pageNum}&type=staticpdf`;

  const fmtDate = d => {
    const [y, m, day] = d.split('-');
    return T().fmtDate(+day, T().months[+m - 1], y);
  };

  function itemField(it, base) {
    return it[base + LANG_FIELD[lang]] ?? null;
  }

  /* ---------- chrome (header/footer/lang switch) ---------- */
  function applyChrome() {
    document.documentElement.lang = lang;
    document.documentElement.dir = T().dir;
    document.getElementById('brand-sub').textContent = T().subtitle;
    const setNav = (id, txt, href) => {
      const e = document.getElementById(id);
      if (!e) return;
      e.textContent = txt;
      e.setAttribute('href', href);
    };
    setNav('nav-issues', T().navIssues, `#/${lang}/`);
    setNav('nav-about', T().navAbout, `#/${lang}/about`);
    setNav('nav-search', T().navSearch, `#/${lang}/search`);
    const brand = document.querySelector('a.brand');
    if (brand) brand.setAttribute('href', `#/${lang}/`);
    document.getElementById('site-footer-text').innerHTML = T().footer;
    document.querySelectorAll('.lang-switch button').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    applyEdition();
  }

  // "work in progress" line under the nameplate: how many issues are up so far + last update
  function applyEdition() {
    const stamp = document.getElementById('ed-stamp');
    if (!stamp) return;
    stamp.textContent = T().wipStamp;
    if (!DB) { loadDB().then(applyEdition).catch(() => {}); return; }
    const np = DB.newspaper || {};
    const n = np.issuesWithContent ?? DB.issues.filter(it => it.hasContent).length;
    document.getElementById('ed-text').textContent = T().wipText(n, np.issueCount);
    const upd = document.getElementById('ed-updated');
    if (np.lastUpdated) {
      upd.textContent = T().lastUpdated(fmtDate(np.lastUpdated));
      upd.setAttribute('datetime', np.lastUpdated);
    } else upd.textContent = '';
  }

  // the part of the current route after the language segment (e.g. "issue/1930-11-07/2.27")
  function restOfRoute() {
    const parts = (location.hash || '').replace(/^#\/?/, '').split('/');
    if (parts.length && LANGS.includes(parts[0])) parts.shift();
    return parts.filter(Boolean).join('/');
  }

  window.__zcSetLang = l => {
    if (!L10N[l]) return;
    lang = l;
    localStorage.setItem('zc_lang', l);
    applyChrome();
    const rest = restOfRoute();
    const newHash = '#/' + l + (rest ? '/' + rest : '/');
    if (location.hash !== newHash) location.hash = newHash;   // fires hashchange → route()
    else route();
  };

  /* ---------- data ---------- */
  async function loadDB() {
    if (DB) return DB;
    const r = await fetch('data/issues.json', {cache: 'no-cache'});
    DB = await r.json();
    return DB;
  }

  async function loadContent(date) {
    if (date in contentCache) return contentCache[date];
    try {
      const r = await fetch(`data/content/${date}.json`, {cache: 'no-cache'});
      contentCache[date] = r.ok ? await r.json() : null;
    } catch { contentCache[date] = null; }
    return contentCache[date];
  }

  let allContentCache = null;
  async function loadAllContent() {
    if (allContentCache) return allContentCache;
    await loadDB();
    const dated = DB.issues.filter(it => it.hasContent);
    const results = await Promise.all(dated.map(it => loadContent(it.date)));
    allContentCache = results.filter(Boolean);
    return allContentCache;
  }

  /* ---------- views ---------- */
  function homeView() {
    currentIssueDate = null;
    const np = DB.newspaper;
    const byYear = {};
    DB.issues.forEach(it => {
      if (it.skipped) return;                 // דלג על שבועות-דילוג (אין גיליון בפועל)
      const y = it.date.split('-')[0];
      (byYear[y] ??= []).push(it);
    });
    let html = `
      <div class="intro">
        <h1>${T().homeTitle}</h1>
        <p>${T().homeIntro}</p>
        <p class="facts">${T().facts(np.issueCount, np.pageCount)}</p>
        <p class="facts gap-note">${T().gapNote}</p>
      </div>`;
    for (const y of Object.keys(byYear).sort()) {
      html += `<section class="year-block"><h2 class="year-head">${y}</h2><ul class="issue-list">`;
      for (const it of byYear[y]) {
        const has = it.hasContent;
        const pct = has ? (it.translationPct ?? 0) : 0;
        const barCls = !has ? 'none' : pct >= 100 ? 'full' : pct > 0 ? 'part' : 'none';
        // an issue missing from the library's archive: no gauge, just a label
        const pctText = it.missing ? T().missingIssue : has ? `${pct}%` : T().notProcessed;
        const title = it.missing ? T().missingIssue : has ? T().translatedPct(pct) : T().notProcessed;
        html += `<li class="issue-row${it.missing ? ' pending missing' : has ? '' : ' pending'}">
          <a href="#/${lang}/issue/${it.date}">
            <span class="ir-num">${T().issueNo(it.num)}</span>
            <span class="ir-date">${fmtDate(it.date)}</span>
            <span class="ir-prog" title="${esc(title)}">
              <span class="ir-bar"><span class="ir-fill ${barCls}" style="inline-size:${pct}%"></span></span>
              <span class="ir-pct">${esc(pctText)}</span>
            </span>
          </a>
        </li>`;
      }
      html += '</ul></section>';
    }
    app.innerHTML = html;
  }

  function ocrChip(it) {
    if (it.ocrUnreadable) return `<span class="ocr-chip bad">${T().ocrUnreadable}</span>`;
    if (typeof it.ocrIssues !== 'number') return '';
    if (it.ocrIssues === 0) return `<span class="ocr-chip ok">${T().ocrOk}</span>`;
    const cls = it.ocrIssues <= 3 ? 'warn' : 'bad';
    return `<span class="ocr-chip ${cls}">${T().ocrIssues(it.ocrIssues)}</span>`;
  }

  function itemCard(it, oid, date) {
    const title = itemField(it, 'title');
    const text = itemField(it, 'text');
    const titleHtml = title
      ? `<span class="title-he">${annotate(title)}</span>`
      : `<span class="title-he untranslated">${T().untranslated}</span>`;
    const isDone = it.status === 'translated' || it.status === 'reviewed';
    const tt = it.translationType;
    const badge = (isDone && (tt === 'summary' || tt === 'partial'))
      ? `<span class="badge ${tt}" title="${esc(T().statuses[it.status] || '')}">${(T().transTypes && T().transTypes[tt]) || esc(tt)}</span>`
      : `<span class="badge ${esc(it.status)}">${T().statuses[it.status] || esc(it.status)}</span>`;
    const srcNote = (it.sourceLang && it.sourceLang !== 'yi' && T().srcNote[it.sourceLang])
      ? `<span class="src-chip">${T().srcNote[it.sourceLang]}</span>` : '';
    // the translator's working note (it.translationNote: where the text sits on the page,
    // doubtful readings…) stays in the data but is not displayed
    const inner = text
      ? `<div class="text-he">${annotate(text)}</div>`
      : `<p class="no-text">${T().noTextLang}</p>`;
    const yiTitle = it.titleYi, yiText = it.textYi;
    const origYi = (yiTitle || yiText)
      ? `<details class="orig-yi">
          <summary>${T().origYiddish}</summary>
          <div class="yi-body">${yiTitle ? `<div class="yi-title">${esc(yiTitle)}</div>` : ''}${yiText ? `<div class="yi-text">${esc(yiText)}</div>` : ''}</div>
        </details>`
      : '';
    return `<details class="item type-${esc(it.type)}" id="item-${esc(it.id)}" data-item-id="${esc(it.id)}">
      <summary><span class="item-top">${titleHtml}<span class="chips">${srcNote}${ocrChip(it)}${badge}</span></span></summary>
      <div class="item-body">
        ${inner}
        ${origYi}
        ${it.image ? `<img class="scan" src="${esc(it.image)}" alt="${T().scanAlt}">` : ''}
        <div class="item-links">
          <a class="item-share" href="#/${lang}/issue/${date}/${esc(it.id)}">🔗 ${T().shareItem}</a>
          <a href="${articleUrl(oid, it.id)}" target="_blank" rel="noopener">${T().origArticle}</a>
          ${IS_LOCAL ? `<button type="button" class="item-edit-yi" data-id="${esc(it.id)}">✎ ${T().editYi}</button>` : ''}
          <time class="item-date" datetime="${esc(date)}">${fmtDate(date)}</time>
        </div>
      </div>
    </details>`;
  }

  // floating prev/next buttons to move between issues in chronological order
  function issuePager(date) {
    const list = DB.issues.filter(it => !it.skipped);
    const i = list.findIndex(it => it.date === date);
    if (i < 0) return '';
    const rtl = T().dir === 'rtl';
    const btn = (it, cls, label, arrow) => it
      ? `<a class="ip-btn ${cls}" href="#/${lang}/issue/${it.date}" title="${esc(fmtDate(it.date))}">
          <span class="ip-arrow" aria-hidden="true">${arrow}</span>
          <span class="ip-text"><span class="ip-lab">${label}</span><span class="ip-num">${T().issueNo(it.num)}</span></span>
        </a>`
      : `<span class="ip-btn ${cls} ip-off" aria-hidden="true"></span>`;
    return `<nav class="issue-pager" aria-label="${esc(T().issuePager)}">
      ${btn(list[i - 1], 'ip-prev', T().prevIssue, rtl ? '→' : '←')}
      ${btn(list[i + 1], 'ip-next', T().nextIssue, rtl ? '←' : '→')}
    </nav>`;
  }

  async function issueView(date, itemId) {
    currentIssueDate = null;
    const meta = DB.issues.find(it => it.date === date);
    if (!meta) { app.innerHTML = `<p>${T().notFound}</p>`; return; }
    currentIssueDate = date;
    app.innerHTML = `<p class="loading">${T().loadingIssue}</p>`;
    const content = await loadContent(date);

    const head = `
      <div class="crumbs"><a href="#/${lang}/">${T().allIssues}</a> ${T().crumbSep} ${fmtDate(date)}</div>
      <div class="issue-head">
        <h1>${T().issueTitle(fmtDate(date), meta.num || content?.issueNumber)}</h1>
        <div class="links">
          <a href="${meta.nliUrl}" target="_blank" rel="noopener">${T().origIssue}</a>
          <a href="${meta.pdfUrl}" target="_blank" rel="noopener">${T().fullPdf}</a>
        </div>
      </div>`;
    const pager = issuePager(date);

    if (!content) {
      app.innerHTML = head + `<div class="notice">${T().issueNotWorked}</div>` + pager;
      if (date !== lastShownIssue) window.scrollTo(0, 0);
      lastShownIssue = date;
      return;
    }

    const byPage = {};
    content.items.forEach(it => (byPage[it.page] ??= []).push(it));
    // the issue-level summary (content.notes) stays in the data but is not displayed
    let body = '';
    for (const pg of Object.keys(byPage).sort((a, b) => a - b)) {
      body += `<section class="page-group">
        <h2><span>${T().pageWord} ${pg}</span>
        <span class="page-links"><a href="${pagePdfUrl(content.oid, pg)}" target="_blank" rel="noopener">${T().pagePdf}</a></span></h2>`;
      for (const it of byPage[pg]) body += itemCard(it, content.oid, date);
      body += '</section>';
    }
    app.innerHTML = head + body + pager;

    if (!itemId && date !== lastShownIssue) window.scrollTo(0, 0);
    lastShownIssue = date;

    // deep link to a specific item: open it and scroll it into view
    if (itemId) {
      const el = app.querySelector('[data-item-id="' + itemId + '"]');
      if (el) {
        el.open = true;
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
      }
    }
  }

  function aboutView() {
    currentIssueDate = null;
    app.innerHTML = `<div class="about">${T().aboutHtml}</div>`;
  }

  function highlight(text, q) {
    const i = text.toLowerCase().indexOf(q.toLowerCase());
    if (i < 0) return esc(text.slice(0, 160)) + (text.length > 160 ? String.fromCharCode(8230) : "");
    const start = Math.max(0, i - 60);
    const before = (start > 0 ? String.fromCharCode(8230) : "") + text.slice(start, i);
    const match = text.slice(i, i + q.length);
    const after = text.slice(i + q.length, i + q.length + 90) + String.fromCharCode(8230);
    return esc(before) + "<mark>" + esc(match) + "</mark>" + esc(after);
  }

  async function searchView(q) {
    currentIssueDate = null;
    const box = `<div class="search-box"><input id="q" type="search" value="${esc(q)}" placeholder="${esc(T().searchPlaceholder)}" autocomplete="off"></div>`;
    app.innerHTML = `<h1>${T().searchTitle}</h1>${box}<p class="loading">${T().searchLoading}</p>`;
    wireSearchInput();
    if (!q || q.trim().length < 2) {
      app.querySelector('.loading').outerHTML = `<p class="search-hint">${T().searchPrompt}</p>`;
      return;
    }
    const all = await loadAllContent();
    const query = q.trim();
    const hits = [];
    for (const issue of all) {
      for (const it of issue.items) {
        const title = itemField(it, 'title') || '';
        const text = itemField(it, 'text') || '';
        const hay = (title + '\n' + text);
        if (hay.toLowerCase().includes(query.toLowerCase())) {
          hits.push({ issue, it, title, snippet: highlight(text || title, query) });
        }
      }
    }
    let html = `<h1>${T().searchTitle}</h1>${box}`;
    if (!hits.length) {
      html += `<p class="search-hint">${T().searchNoResults} "${esc(query)}".</p>`;
    } else {
      html += `<p class="search-count">${T().searchResults(hits.length)}</p>`;
      for (const h of hits) {
        const t = h.title || T().untranslated;
        html += `<a class="search-hit" href="#/${lang}/issue/${h.issue.date}/${esc(h.it.id)}">
          <div class="sh-title">${esc(t)}</div>
          <div class="sh-meta">${T().searchIn} ${fmtDate(h.issue.date)} · ${T().pageWord} ${h.it.page}</div>
          <div class="sh-snippet">${h.snippet}</div></a>`;
      }
    }
    app.innerHTML = html;
    wireSearchInput();
  }

  function wireSearchInput() {
    const inp = document.getElementById('q');
    if (!inp) return;
    inp.focus();
    const v = inp.value; inp.setSelectionRange(v.length, v.length);
    let tmr;
    inp.addEventListener('input', () => {
      clearTimeout(tmr);
      tmr = setTimeout(() => {
        const val = inp.value.trim();
        location.hash = val ? `#/${lang}/search/` + encodeURIComponent(val) : `#/${lang}/search`;
      }, 300);
    });
  }

  async function route() {
    await loadDB();
    let parts = (location.hash || '#/').replace(/^#\/?/, '').split('/');

    // optional leading language segment (#/en/…). Adopt it; otherwise normalise
    // the address bar to the current language so every view has a per-language URL.
    let urlLang = null;
    if (parts.length && LANGS.includes(parts[0])) urlLang = parts.shift();
    if (urlLang && urlLang !== lang) {
      lang = urlLang;
      localStorage.setItem('zc_lang', lang);
      applyChrome();
    }
    if (!urlLang) {
      const rest = parts.filter(Boolean).join('/');
      history.replaceState(null, '', '#/' + lang + (rest ? '/' + rest : '/'));
    }

    const section = parts[0] || '';
    if (section === 'issue' && parts[1]) return issueView(parts[1], parts[2] || null);
    if (section === 'search') return searchView(parts[1] ? decodeURIComponent(parts.slice(1).join('/')) : '');
    if (section === 'about') return aboutView();
    return homeView();
  }

  // keep the address bar in sync with the currently-open item, so every item has
  // its own shareable URL (toggle doesn't bubble → listen in the capture phase)
  app.addEventListener('toggle', e => {
    const d = e.target;
    if (!d || d.nodeName !== 'DETAILS' || !d.classList.contains('item') || !currentIssueDate) return;
    const base = `#/${lang}/issue/${currentIssueDate}`;
    const url = `${base}/${d.dataset.itemId}`;
    if (d.open) history.replaceState(null, '', url);
    else if (location.hash === url) history.replaceState(null, '', base);
  }, true);

  /* ---------- in-page Yiddish editing popup ---------- */
  let yiModal = null;
  function ensureYiModal() {
    if (yiModal) return yiModal;
    const back = document.createElement('div');
    back.className = 'yi-modal-back';
    back.hidden = true;
    back.innerHTML =
      `<div class="yi-modal" role="dialog" aria-modal="true">
        <div class="yi-modal-head">
          <strong class="ym-title"></strong>
          <a class="ym-scan" target="_blank" rel="noopener"></a>
          <button type="button" class="ym-close" aria-label="close">✕</button>
        </div>
        <div class="yi-modal-body">
          <section class="ym-edit">
            <label class="ym-lab ym-lab-title"></label>
            <textarea class="ym-yi-title" dir="rtl" lang="yi"></textarea>
            <label class="ym-lab ym-lab-text"></label>
            <textarea class="ym-yi-text" dir="rtl" lang="yi"></textarea>
          </section>
          <section class="ym-ref">
            <div class="ym-ref-lab"></div>
            <div class="ym-ref-title"></div>
            <div class="ym-ref-text"></div>
          </section>
        </div>
        <div class="yi-modal-foot">
          <span class="ym-msg"></span>
          <button type="button" class="ym-cancel"></button>
          <button type="button" class="ym-save"></button>
        </div>
      </div>`;
    document.body.appendChild(back);
    back.addEventListener('click', e => { if (e.target === back) closeYiModal(); });
    back.querySelector('.ym-close').onclick = closeYiModal;
    back.querySelector('.ym-cancel').onclick = closeYiModal;
    document.addEventListener('keydown', e => { if (!back.hidden && e.key === 'Escape') closeYiModal(); });
    yiModal = back;
    return back;
  }
  function closeYiModal() { if (yiModal) { yiModal.hidden = true; document.body.style.overflow = ''; } }

  function openYiModal(it, date) {
    const m = ensureYiModal();
    m.querySelector('.ym-title').textContent = T().editYiTitle;
    m.querySelector('.ym-lab-title').textContent = T().yiTitleLabel;
    m.querySelector('.ym-lab-text').textContent = T().yiTextLabel;
    m.querySelector('.ym-ref-lab').textContent = T().currentTransLabel;
    m.querySelector('.ym-cancel').textContent = T().mCancel;
    const saveBtn = m.querySelector('.ym-save');
    saveBtn.textContent = T().mSave;
    const scan = m.querySelector('.ym-scan');
    const oid = (contentCache[date] && contentCache[date].oid) || '';
    scan.href = articleUrl(oid, it.id);
    scan.textContent = T().origArticle;
    // corrected Yiddish if it exists, otherwise the raw OCR straight from the scan
    const yt = m.querySelector('.ym-yi-title'); yt.value = it.titleYi || it.titleYiOcr || '';
    const yx = m.querySelector('.ym-yi-text'); yx.value = it.textYi || it.textYiOcr || '';
    // reference: the current language's translation (read-only)
    const refTitle = m.querySelector('.ym-ref-title');
    const refText = m.querySelector('.ym-ref-text');
    refTitle.textContent = itemField(it, 'title') || T().untranslated;
    refText.textContent = itemField(it, 'text') || '';
    const rtl = T().dir === 'rtl';
    refTitle.dir = refText.dir = rtl ? 'rtl' : 'ltr';
    refTitle.style.fontFamily = refText.style.fontFamily = rtl ? 'var(--font-he)' : 'var(--font-latin)';
    const msg = m.querySelector('.ym-msg'); msg.textContent = ''; msg.className = 'ym-msg';
    saveBtn.onclick = async () => {
      msg.textContent = T().mSaving; msg.className = 'ym-msg';
      try {
        const r = await fetch(SUGGEST_MODE ? SUGGEST_API : SAVE_API, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ date, id: it.id, titleYi: yt.value, textYi: yx.value })
        });
        const j = await r.json();
        if (j.ok) {
          if (SUGGEST_MODE) {
            // a suggestion is pending review — the official content is untouched
            msg.textContent = T().suggestSent; msg.className = 'ym-msg ok';
            setTimeout(closeYiModal, 1300);
          } else {
            it.titleYi = yt.value; it.textYi = yx.value;
            if ((yt.value + yx.value).trim()) it.needsRetranslate = true;
            msg.textContent = T().mSaved; msg.className = 'ym-msg ok';
            setTimeout(closeYiModal, 900);
          }
        } else { msg.textContent = T().mSaveErr + ': ' + (j.error || '?'); msg.className = 'ym-msg err'; }
      } catch (e) { msg.textContent = T().mSaveErr + ': ' + e.message; msg.className = 'ym-msg err'; }
    };
    m.hidden = false;
    document.body.style.overflow = 'hidden';
    setTimeout(() => yt.focus(), 50);
  }

  // item actions: copy-link, and open the Yiddish-edit popup
  app.addEventListener('click', e => {
    const share = e.target.closest && e.target.closest('.item-share');
    if (share) {
      e.preventDefault();
      const hash = share.getAttribute('href');
      if (location.hash !== hash) history.replaceState(null, '', hash);
      const url = location.origin + location.pathname + location.search + hash;
      if (!share.dataset.orig) share.dataset.orig = share.textContent;
      const restore = () => { share.textContent = share.dataset.orig; };
      const flash = () => { share.textContent = T().linkCopied; setTimeout(restore, 1600); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(flash, flash);
      else flash();
      return;
    }
    const edit = e.target.closest && e.target.closest('.item-edit-yi');
    if (edit) {
      e.preventDefault();
      const d = currentIssueDate;
      const content = d && contentCache[d];
      const it = content && content.items.find(x => String(x.id) === String(edit.dataset.id));
      if (it) openYiModal(it, d);
      return;
    }
  });

  window.addEventListener('hashchange', route);
  applyChrome();
  route().catch(e => { app.innerHTML = `<p>${T().loadError}${esc(e.message)}</p>`; });
})();
