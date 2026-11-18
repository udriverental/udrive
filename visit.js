/* One visit to rihladrive.com, counted by country only.
   The fleet-manager server adds 1 to "<country>, today" and keeps nothing else:
   no IP, no cookie, nothing saved in the browser (rules live in the
   fleet-manager repo: api/_public-visits.js). Sent once per arrival, not on
   reloads or when moving between pages of this site, and never when the
   browser asks not to be tracked or is an automated one.
   The c/<car> share pages only forward to car.html, so arriving through one
   still counts as arriving. */
(function () {
  'use strict';
  try {
    var n = navigator;
    if (n.webdriver || n.globalPrivacyControl || n.doNotTrack === '1' || window.doNotTrack === '1') return;
    var nav = performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
    if (nav && (nav.type === 'reload' || nav.type === 'back_forward')) return;
    if (document.referrer) {
      var ref = new URL(document.referrer);
      if (ref.host === location.host && ref.pathname.indexOf('/c/') !== 0) return;
    }
    var url = 'https://fleet-manager2-0.vercel.app/api/public-availability?visit=1&account=udrive';
    if (!(n.sendBeacon && n.sendBeacon(url))) fetch(url, { method: 'POST', keepalive: true, mode: 'no-cors' }).catch(function () {});
  } catch (e) { /* counting must never break the page */ }
})();
