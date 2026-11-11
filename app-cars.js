// ─────────────────────────────────────────────────────────────
//  ONE CAR LIST — the website's cars come from the fleet-manager app.
//
//  The app publishes, per company, every car switched on for the website:
//  its listing (name, photos, price, description…) and its busy dates.
//  window.loadAppCars() fetches that list and returns the cars in the shape
//  the pages already use, or null when the app has no listings for this
//  company yet (the pages then fall back to the old website database, so
//  nothing changes for visitors until the cars are moved into the app).
//
//  Cross-project contract: fleet-manager src/modules/web-listing.js
//  (WebListing.listing) builds `car`; Store._extractPublicAvailability
//  publishes it. Keep the field names in step by hand.
// ─────────────────────────────────────────────────────────────
window.APP_FEED = 'https://fleet-manager2-0.vercel.app/api/public-availability?account=udrive';
window.loadAppCars = async function (toDeliveryUrl) {
  const fix = typeof toDeliveryUrl === 'function' ? toDeliveryUrl : (u => u);
  const ctl = typeof AbortController === 'function' ? new AbortController() : null;
  const timer = ctl ? setTimeout(() => ctl.abort(), 6000) : null;
  try {
    const res = await fetch(window.APP_FEED, ctl ? { signal: ctl.signal } : undefined);
    if (!res.ok) return null;
    const feed = await res.json();
    const rows = (feed && Array.isArray(feed.cars) ? feed.cars : []).filter(r => r && r.car && r.car.name);
    if (!rows.length) return null;
    const cars = rows.map((r, i) => {
      const c = r.car;
      return {
        id:       String(c.id || r.rid),
        name:     c.name || '',
        year:     c.year || '',
        variant:  c.variant || '',
        cat:      c.cat || 'economy',
        tx:       c.tx || 'Automatic',
        fuel:     c.fuel || 'Diesel',
        seats:    c.seats || 5,
        ppd:      Number(c.ppd) || 0,
        dep:      c.dep == null ? 300 : Number(c.dep) || 0,
        imgs:     Array.isArray(c.imgs) ? c.imgs.map(fix) : [],
        features: Array.isArray(c.features) ? c.features : [],
        desc:     c.desc || '',
        descAr:   c.descAr || '',
        descSq:   c.descSq || '',
        linkOnly: c.main === false,   // reachable by its own link, left off the main list
        _order:   typeof c.order === 'number' ? c.order : 1e9 + i,
      };
    }).filter(c => c.imgs.length);          // the pages draw imgs[0] on every card
    cars.sort((a, b) => a._order - b._order);
    cars.forEach(c => { delete c._order; });
    return cars.length ? cars.map(c => (window.fillFromHardcoded ? window.fillFromHardcoded(c) : c)) : null;
  } catch (e) {
    return null;
  } finally {
    if (timer) clearTimeout(timer);
  }
};
