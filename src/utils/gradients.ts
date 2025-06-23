// Specific gradients for each case study
export const CASE_STUDY_GRADIENTS: Record<string, string> = {
  "effortless-onboarding-with-a-personalised-reward":
    "linear-gradient(157.13deg, #FCFE53 -13.87%, #53FEA6 48.8%, #90CBFF 112.68%)",
  "a-filter-for-every-yogi":
    "linear-gradient(157.13deg, #FCFE53 -13.87%, #FFB866 48.8%, #FF8688 112.68%)",
  "custom-lists-for-self-organisation":
    "linear-gradient(157.13deg, #FFB866 -13.87%, #FF91D8 48.8%, #DFB7FF 112.68%)",
  "easy-ordering-for-every-diet":
    "linear-gradient(157.13deg, #53FEA6 -13.87%, #90CBFF 48.8%, #B9B3FF 112.68%)",
  "a-design-system-for-all-teams":
    "linear-gradient(145.86deg, #53FEA6 -51.04%, #FCFE53 28.45%, #FFB866 109.48%)",
  "oouxing-my-portfolio":
    "linear-gradient(155.35deg, #FF696C -12.38%, #DFB7FF 57.25%, #90CBFF 128.23%)",
};

// Fallback gradients for any case studies not in the mapping
export const FALLBACK_GRADIENTS = [
  "linear-gradient(157.13deg, #53FEA6 -13.87%, #90CBFF 48.8%, #B9B3FF 112.68%)",
  "linear-gradient(157.13deg, #FF6B6B -13.87%, #4ECDC4 48.8%, #45B7D1 112.68%)",
  "linear-gradient(157.13deg, #A8E6CF -13.87%, #DCEDC8 48.8%, #FFD3B6 112.68%)",
  "linear-gradient(157.13deg, #FF9A9E -13.87%, #FECFEF 48.8%, #FECFEF 112.68%)",
  "linear-gradient(157.13deg, #A8E6CF -13.87%, #FF8B94 48.8%, #FFC3A0 112.68%)",
  "linear-gradient(157.13deg, #667eea -13.87%, #764ba2 48.8%, #f093fb 112.68%)",
  "linear-gradient(157.13deg, #f093fb -13.87%, #f5576c 48.8%, #4facfe 112.68%)",
  "linear-gradient(157.13deg, #4facfe -13.87%, #00f2fe 48.8%, #43e97b 112.68%)",
  "linear-gradient(157.13deg, #43e97b -13.87%, #38f9d7 48.8%, #fa709a 112.68%)",
  "linear-gradient(157.13deg, #fa709a -13.87%, #fee140 48.8%, #ff9a9e 112.68%)",
];

// Function to get a gradient by case study ID (uses specific mapping or falls back to hash-based selection)
export function getGradientByCaseStudyId(caseStudyId: string): string {
  // Check if we have a specific gradient for this case study
  if (CASE_STUDY_GRADIENTS[caseStudyId]) {
    return CASE_STUDY_GRADIENTS[caseStudyId];
  }

  // Fallback: use hash function to get a consistent index from the ID
  let hash = 0;
  for (let i = 0; i < caseStudyId.length; i++) {
    const char = caseStudyId.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  const index = Math.abs(hash) % FALLBACK_GRADIENTS.length;
  return FALLBACK_GRADIENTS[index];
}

// Function to get a gradient by index (cycles through fallback gradients)
export function getCaseStudyGradient(index: number): string {
  return FALLBACK_GRADIENTS[index % FALLBACK_GRADIENTS.length];
}
