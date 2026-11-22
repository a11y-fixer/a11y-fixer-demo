// Second revision: fix the img (add alt), but add a NEW empty anchor so the
// check still reports — proving the sticky comment updates in place.
export default function Promo() {
  return (
    <section>
      <img src="/promo-banner.png" alt="Spring promo" width="320" height="120" />
      <a href="/promo"></a>
    </section>
  );
}
