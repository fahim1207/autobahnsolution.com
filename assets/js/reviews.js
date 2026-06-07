/* =============================================================================
 * Autobahn Solutions — Customer reviews (single source of truth)
 * =============================================================================
 *
 * These are REAL Google reviews transcribed verbatim from the business's
 * Google Business Profile. They power the sliding reviews carousel on the
 * homepage (see initReviewsCarousel() in main.js).
 *
 * ── HOW TO UPDATE REVIEWS (no build step, no backend) ────────────────────────
 *   1. Add / edit an object in the AUTOBAHN_REVIEWS array below.
 *   2. Keep `text` to a verbatim Google review — DO NOT invent reviews.
 *   3. `rating` is 1–5 (whole stars). `source` is the small label under the name
 *      (e.g. "Google review" or "Local Guide · Google review").
 *   4. Save. That's it — the homepage carousel rebuilds itself from this array.
 *
 *   Order = display order. The carousel loops, auto-advances, supports swipe
 *   on touch, arrow keys, and prev/next buttons. If this file fails to load or
 *   the array is empty, the homepage shows a graceful fallback that links
 *   straight to the Google reviews page.
 * ---------------------------------------------------------------------------- */

window.AUTOBAHN_REVIEWS = [
  {
    name: "Fatema Tuz Jenia",
    rating: 5,
    source: "Google review",
    text: "If you drive a high end European vehicle. This is the right place to get it serviced. They know the fluid recommendation and go by the books. Best place for your Range Rover and Audi and Mercedes Benz especially."
  },
  {
    name: "Planet of Perman",
    rating: 5,
    source: "Google review",
    text: "I recently visited Autobahn Solution Ltd and it exceeded all my expectations. The staff was incredibly professional, knowledgeable, and friendly. They diagnosed my car’s issues quickly and explained everything in detail before starting the repairs. The workshop was clean, well-equipped, and organized, which gave me confidence in their expertise."
  },
  {
    name: "Saif Alam",
    rating: 5,
    source: "Local Guide · Google review",
    text: "My car was rear-ended, and I took it to Samiul Bhai and his team at Autobahn. They did an absolutely immaculate job, restoring it perfectly back to its original state. The attention to detail, professionalism, and care they showed throughout the process was truly impressive. Highly recommended!"
  },
  {
    name: "Md Arman",
    rating: 5,
    source: "Google review",
    text: "Autobahn Solutions Ltd is an excellent choice for microbus repairs. Their team is skilled, and they complete the work on time. The service is reliable, and they treat customers with care. The workshop is well-organized, and the staff are friendly and professional. I’m very happy with their service and would recommend them to others."
  },
  {
    name: "Diamond Azad",
    rating: 5,
    source: "Local Guide · Google review",
    text: "One of the best place to send your beloved car. Starting from Japanese to European they have a solution for every brand."
  }
];
