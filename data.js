const appData = {
  chapters: [
    {
      id: "ch1",
      title: "1. Combinatorics & General Probability",
      content: `
        <h3>Fundamental Principles</h3>
        <p>Before diving into calculus, we must establish standard probability axioms. For Exam P, skip basic Venn diagrams and focus strictly on <strong>combinatorial probability</strong>.</p>
        <p><strong>Permutations</strong> (order matters): $P(n, k) = \\frac{n!}{(n-k)!}$</p>
        <p><strong>Combinations</strong> (order doesn't matter): $C(n, k) = \\binom{n}{k} = \\frac{n!}{k!(n-k)!}$</p>
        <h3>Bayes' Theorem</h3>
        <p>Crucial for prior/posterior probability updates:
        $$ P(A|B) = \\frac{P(B|A)P(A)}{P(B)} $$
        Where by the Law of Total Probability: $P(B) = \\sum P(B|A_i)P(A_i)$.
        </p>
      `
    },
    {
      id: "ch2",
      title: "2. Univariate Distributions & Integration",
      content: `
        <h3>Probability Density Functions (PDFs)</h3>
        <p>For a continuous random variable $X$, the PDF $f(x)$ must satisfy $\\int_{-\\infty}^{\\infty} f(x) dx = 1$.</p>
        <p><strong>Expected Value:</strong> $E[X] = \\int_{-\\infty}^{\\infty} x \\cdot f(x) dx$</p>
        <p><strong>Variance:</strong> $Var(X) = E[X^2] - (E[X])^2$</p>
        <h3>Important Continuous Distributions</h3>
        <p><strong>Exponential Distribution:</strong> Models time until an event. For a mean $\\theta$, the PDF is $f(x) = \\frac{1}{\\theta}e^{-x/\\theta}$. Its expected value is $E[X] = \\theta$, and variance is $Var(X) = \\theta^2$.</p>
        <p><strong>Gamma Distribution:</strong> Generalizes the exponential distribution. Its variance is $Var(X) = \\alpha \\theta^2$.</p>
        <h3>Moment Generating Functions (MGFs)</h3>
        <p>The MGF is a shortcut to finding moments without repeatedly integrating.</p>
        <p>$$ M_X(t) = E[e^{tX}] $$</p>
        <p>To find the $n$-th moment $E[X^n]$, take the $n$-th derivative of the MGF and evaluate at $t=0$.</p>
        <p><strong>Exponential MGF:</strong> $M(t) = \\frac{1}{1 - \\theta t}$ for $t < 1/\\theta$.</p>
        <p><strong>Gamma MGF:</strong> $M(t) = (1 - \\theta t)^{-\\alpha}$.</p>
      `
    },
    {
      id: "ch3",
      title: "3. Multivariate Distributions (The Core)",
      content: `
        <h3>Joint Continuous Distributions</h3>
        <p>This comprises ~40% of Exam P. You will be given a joint PDF $f(x,y)$ and asked to find probabilities using double integrals.</p>
        <p>$$ P((X,Y) \\in A) = \\iint_A f(x,y) dx dy $$</p>
        <h3>Marginal and Conditional PDFs</h3>
        <p>Integrate out the unwanted variable to find the marginal:</p>
        <p>$$ f_X(x) = \\int_{-\\infty}^{\\infty} f(x,y) dy $$</p>
        <p>The conditional PDF is $f(x|y) = \\frac{f(x,y)}{f_Y(y)}$.</p>
        <h3>Covariance</h3>
        <p>Covariance measures the joint variability of two random variables:</p>
        <p><strong>Formula:</strong> $Cov(X,Y) = E[XY] - E[X]E[Y]$</p>
      `
    }
  ],
  
  questions: [
    {
      id: "q1",
      topic: "Combinatorics",
      text: "A committee of 4 is to be formed from a group of 6 actuaries and 8 underwriters. What is the probability that the committee contains exactly 2 actuaries?",
      options: [
        "0.312",
        "0.420",
        "0.510",
        "0.605"
      ],
      correctAnswer: 1, // 0-indexed
      explanation: "Total ways to choose 4 from 14 is C(14,4) = 1001. Ways to choose 2 actuaries from 6 is C(6,2) = 15. Ways to choose 2 underwriters from 8 is C(8,2) = 28. Favorable ways = 15 * 28 = 420. Probability = 420 / 1001 = 0.41958 ≈ 0.420."
    },
    {
      id: "q2",
      topic: "Univariate PDF",
      text: "The lifetime of a printer costing $200 is exponentially distributed with a mean of 2 years. The manufacturer agrees to pay a full refund to a buyer if the printer fails during the first year following its purchase, and a one-half refund if it fails during the second year. Find the expected total amount of refunds.",
      options: [
        "63",
        "73",
        "102",
        "133"
      ],
      correctAnswer: 2, 
      explanation: "Let T be the lifetime. T ~ Exp(mean=2), so f(t) = 0.5 * e^(-0.5t). Refund R(T) = 200 if 0 < T < 1, 100 if 1 < T < 2, 0 otherwise. E[R] = 200*P(T < 1) + 100*P(1 < T < 2). P(T < 1) = 1 - e^(-0.5) = 0.3934. P(1 < T < 2) = e^(-0.5) - e^(-1) = 0.2386. E[R] = 200(0.3934) + 100(0.2386) = 78.68 + 23.86 = 102.54. Closest is 102."
    },
    {
      id: "q3",
      topic: "MGFs",
      text: "A random variable X has MGF $M(t) = (1 - 2t)^{-3}$ for $t < 0.5$. Calculate the variance of X.",
      options: [
        "6",
        "12",
        "18",
        "24"
      ],
      correctAnswer: 1, 
      explanation: "This is the MGF of a Gamma distribution with theta = 2 and alpha = 3. The formula for the MGF of a Gamma is $(1 - \\theta t)^{-\\alpha}$. Variance of Gamma is $\\alpha \\theta^2 = 3 * (2^2) = 12$. Alternatively, take the first and second derivatives of M(t) evaluated at t=0 to find E[X] and E[X^2]."
    }
  ],

  flashcards: [
    {
      front: "Exponential Distribution MGF",
      back: "$M(t) = \\frac{1}{1 - \\theta t} \\quad \\text{for } t < 1/\\theta$"
    },
    {
      front: "Variance Formula",
      back: "$Var(X) = E[X^2] - (E[X])^2$"
    },
    {
      front: "Covariance Formula",
      back: "$Cov(X,Y) = E[XY] - E[X]E[Y]$"
    },
    {
      front: "Expected Value of an Exponential Distribution",
      back: "$E[X] = \\theta$"
    },
    {
      front: "Gamma Distribution Variance",
      back: "$Var(X) = \\alpha \\theta^2$"
    }
  ]
};

// Expose to window for the static HTML pages to consume
window.appData = appData;
