/*
  ADD YOUR BLOG POSTS HERE.

  Each entry is one object: { id, name, date, content, image }

  - id      : unique short slug, no spaces (e.g. "trial-phase-2-kickoff")
  - name    : title of the post
  - date    : any readable date string (e.g. "2026-07-19" or "19 Jul 2026")
  - content : the full post text. Use \n\n between paragraphs.
  - image   : path to an image in the assets/ folder (e.g. "assets/scan1.jpg"),
              or leave as "" if there's no image for this post.

  Just copy the block below, fill it in, and add a comma between entries.
  Newest post can go first or last — the site sorts by date automatically.
*/

const blogPosts = [
  {
  id: "i-spy-2-bayesian-statistical-approach",
  name: "I-SPY 2 - A Bayesian Statistical Approach",
  date: "2026-07-19",
  image: "images/img2.png",
  content:
    "I-SPY 2 is an ongoing, multicentre, open-label, adaptively randomised phase II platform trial (ClinicalTrials.gov: NCT01042379). It is an umbrella trial — a master protocol that evaluates multiple investigational agents in parallel against a common control arm, all within the same disease (high-risk, early-stage breast cancer).\n\n" +

    "Key design features:\n\n" +

    "• Common control arm: All patients not randomised to an experimental arm receive standard neoadjuvant chemotherapy (weekly paclitaxel × 12, followed by doxorubicin + cyclophosphamide × 4). This control arm is continuously updated as new patients are enrolled, providing a contemporaneous comparator.\n\n" +

    "• Multiple experimental arms: Up to five experimental arms may run simultaneously. New therapies can be added while agents that graduate or fail for futility are removed. By 2020, ten investigational agents or combinations had completed evaluation.\n\n" +

    "• Biomarker-based stratification: Patients are assigned to one of eight molecular subtypes based on hormone receptor (HR) status, HER2 status, and the MammaPrint 70-gene signature (High-1 or High-2).\n\n" +

    "3.2 Patient Population\n\n" +
    "• Women with clinical stage II or III breast cancer\n" +
    "• Primary tumour ≥2.5 cm\n" +
    "• No prior surgery or systemic therapy for breast cancer\n" +
    "• HR+/HER2− patients with low MammaPrint scores are excluded\n" +
    "• Median age: 49 years\n\n" +

    "3.3 Primary Endpoint\n\n" +
    "The primary endpoint is pathologic complete response (pCR), defined as the absence of residual invasive cancer in both the breast and lymph nodes (ypT0/is, ypN0) at surgery. pCR is typically assessed approximately 20–24 weeks after treatment initiation.\n\n" +

    "3.4 The Bayesian Adaptive Engine — Detailed Methodology\n\n" +
    "The statistical engine of I-SPY 2, designed by Donald Berry and colleagues at Berry Consultants, represents one of the most sophisticated applications of Bayesian adaptive trial design in clinical research.\n\n" +

    "3.4.1 Bayesian Hierarchical Model\n\n" +
    "The trial models pCR rates using a Bayesian hierarchical framework. Within each of the eight biomarker-defined subtypes, the probability of achieving pCR for a treatment is represented as:\n\n" +
    "logit(pCR_rate[treatment, subtype]) = α[subtype] + β[treatment] + γ[treatment × subtype]\n\n" +

    "Where:\n" +
    "• α[subtype] represents the baseline control-arm pCR rate for each subtype.\n" +
    "• β[treatment] represents the overall treatment effect.\n" +
    "• γ[treatment × subtype] captures the interaction between treatment and biomarker subtype.\n\n" +

    "The subtype-specific treatment effects are modelled as random effects drawn from a common prior distribution. This produces shrinkage, allowing estimates from subtypes with limited data to borrow information from other subtypes. As more patients are enrolled within a subtype, the estimate becomes increasingly subtype-specific while retaining the benefits of the hierarchical model.\n\n" +

    "3.4.2 Prior Distributions\n\n" +
    "The Bayesian model uses moderately informative priors:\n\n" +
    "• Baseline control-arm pCR rates are assigned Beta priors informed by historical data from I-SPY 1 and published literature.\n" +
    "• Treatment effect parameters receive Normal priors centred at zero (representing no treatment effect) with a standard deviation calibrated to express moderate scepticism, making large treatment effects possible but unlikely before observing data.\n" +
    "• The prior probability distribution for each experimental arm reflects genuine uncertainty before patient outcomes are observed."
}
];