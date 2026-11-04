/* ===================================================================
   blog-data.js : the one file you edit to update the NEWSLETTER parts
   of the blog (index segments + series.html). Essay cards stay as
   plain HTML in blogs.html.
   - Add an edition: add one line to the right section's editions.
   - tagline: the short line shown beside the name on the My Blogs page.
   - flat: true = one plain list of editions (no series rows) on the My Blogs page.
   - Add a series/bridge: add a section. Add a newsletter: add an entry.
   - url "" = shows as plain text (no link yet). A url like "SignalSheet_E2.html"
     opens that page on this site; a url starting with https:// opens in a new tab.
   =================================================================== */
const NEWSLETTERS = [
  {
    id: "connecting-the-dots",
    title: "Connecting the Dots",
    tagline: "Perspective drawn by deep dive and connected to big picture",
    desc: "Where I interpret: how strategy, functions and technology connect, one short edition at a time.",
    linkedin: "https://www.linkedin.com/newsletters/connecting-the-dots-7500071281342660608",
    sections: [
      { id: "s1", title: "GTM, Sales & Marketing", status: "Complete",
        note: "Six editions on how GTM, Sales and Marketing work as one growth system while each keeps its own questions.",
        editions: [
          {no: "Edition 2", title: "Integration is not an interchange", date: "9 Sep 2026", summary: "A leader can hold more than one hat, but each hat stays distinct.", url: "ConnectingTheDots_S1_E2.html"},
          {no: "Edition 3", title: "8 Questions, Not 6", date: "16 Sep 2026", summary: "A checklist gets better by getting harder to dodge, not by getting longer.", url: "ConnectingTheDots_S1_E3.html"},
          {no: "Edition 4", title: "Flow Beats Title", date: "23 Sep 2026", summary: "GTM defines the terrain, Marketing creates demand, Sales converts it.", url: "ConnectingTheDots_S1_E4.html"},
          {no: "Edition 5", title: "The Sun Doesn't Orbit", date: "30 Sep 2026", summary: "GTM is the Sun; every other function turns on its own axis around it.", url: "ConnectingTheDots_S1_E5.html"},
          {no: "Edition 6", title: "AI Sits Inside the H", date: "7 Oct 2026", summary: "AI belongs inside the How, not in place of it.", url: "ConnectingTheDots_S1_E6.html"},
          {no: "Edition 7", title: "Seats Still Exist", date: "14 Oct 2026", summary: "A title can merge or split. Questions still need an owner.", url: "ConnectingTheDots_S1_E7.html"}
        ] },
      { id: "s2", title: "AI Platforms", status: "Every Wednesday IST", newestFirst: true,
        note: "What has actually changed, what it changes, who supervises these systems, and how roles are shifting.",
        editions: [
          {no: "Edition 9", title: "AI Platforms: Who Is Deciding the Leadership?", date: "28 Oct 2026", summary: "The scoreboards disagree on who leads.", url: "ConnectingTheDots_S2_E9.html"},
          {no: "Edition 10", title: "What Decides Leadership?", date: "4 Nov 2026", summary: "Arriving first gives a head start. Leadership goes to whoever does the job better.", url: "ConnectingTheDots_S2_E10.html"}
        ] }
    ]
  },
  {
    id: "signal-sheet",
    title: "Signal Sheet",
    tagline: "Tech & IT Updates",
    flat: true,
    desc: "A verified, one-page Tech & IT roundup. Awareness, not commentary.",
    linkedin: "https://www.linkedin.com/newsletters/signal-sheet-7508848907548815360",
    sections: [
      { id: "weekly", title: "Weekly editions", status: "Every Saturday IST", newestFirst: true,
        note: "Covers events up to 23:59 GMT every Friday.",
        editions: [
          {no: "Edition 2", title: "The permission gap", date: "3 Oct 2026", summary: "AI agents moved from answers to actions.", url: "SignalSheet_E2.html"},
          {no: "Edition 3", title: "Who holds the brake", date: "10 Oct 2026", summary: "Safety insiders are leaving with public warnings.", url: "SignalSheet_E3.html"},
          {no: "Edition 4", title: "Disclosures are not optional", date: "17 Oct 2026", summary: "Enforcers are moving ahead of the rules.", url: "SignalSheet_E4.html"},
          {no: "Edition 5", title: "The limits are beyond AI Chips", date: "24 Oct 2026", summary: "AI chip demand still outruns supply.", url: "SignalSheet_E5.html"},
          {no: "Edition 6", title: "Capital runs ahead of cash", date: "31 Oct 2026", summary: "AI build-outs are being funded before revenue covers them.", url: "SignalSheet_E6.html"}
        ] }
    ]
  }
];
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const plural = (n, w) => n + " " + w + (n === 1 ? "" : "s");
