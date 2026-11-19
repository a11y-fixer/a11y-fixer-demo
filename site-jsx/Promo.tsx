// Added by the Phase 1 dogfood PR: a deliberately inaccessible promo banner.
// The check-mode Action should annotate the <img> line inline on this diff
// (jsx-a11y/alt-text, WCAG 1.1.1) and leave one sticky summary comment.
export default function Promo() {
  return (
    <section>
      <img src="/promo-banner.png" width="320" height="120" />
    </section>
  );
}
