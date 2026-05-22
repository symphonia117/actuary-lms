window.appData = window.appData || {};
window.appData.questions = window.appData.questions || [];
window.appData.questions = window.appData.questions.concat([
  {
    id: "q2_01",
    topic: "Univariate Continuous & Discrete Distributions",
    text: "Let \\(X\\) be a continuous random variable with density function\n\\[ f(x) = \\begin{cases} \\frac{c}{x^3} & x > 1 \\\\ 0 & \\text{otherwise} \\end{cases} \\]\nCalculate the probability that \\(X > 2\\) given that \\(X < 4\\).",
    options: ["0.10", "0.15", "0.20", "0.25", "0.30"],
    correctAnswer: 2,
    explanation: "First, we must find the value of the constant \\(c\\) by ensuring the total probability integrates to 1:\n\\[ \\int_1^\\infty c x^{-3} \\, dx = 1 \\]\n\\[ \\left[ -\\frac{c}{2x^2} \\right]_1^\\infty = \\frac{c}{2} = 1 \\implies c = 2 \\]\nThus, the density function is \\(f(x) = 2x^{-3}\\).\nWe need to calculate the conditional probability:\n\\[ P(X > 2 \\mid X < 4) = \\frac{P(2 < X < 4)}{P(X < 4)} \\]\nFirst, calculate the denominator \\(P(X < 4)\\):\n\\[ P(X < 4) = \\int_1^4 2x^{-3} \\, dx = \\left[ -\\frac{1}{x^2} \\right]_1^4 = -\\frac{1}{16} - (-1) = \\frac{15}{16} \\]\nNext, calculate the numerator \\(P(2 < X < 4)\\):\n\\[ P(2 < X < 4) = \\int_2^4 2x^{-3} \\, dx = \\left[ -\\frac{1}{x^2} \\right]_2^4 = -\\frac{1}{16} - \\left(-\\frac{1}{4}\\right) = \\frac{3}{16} \\]\nFinally, the conditional probability is:\n\\[ P(X > 2 \\mid X < 4) = \\frac{3/16}{15/16} = \\frac{3}{15} = 0.20 \\]"
  },
  {
    id: "q2_02",
    topic: "Univariate Continuous & Discrete Distributions",
    text: "An insurance policy pays a total medical benefit consisting of two parts for each claim. Let \\(X\\) represent the amount of the claim. \\(X\\) has probability density function:\n\\[ f(x) = \\begin{cases} \\frac{1}{1000} e^{-x/1000} & x > 0 \\\\ 0 & \\text{otherwise} \\end{cases} \\]\nThe policy pays the full amount for the first 500 of the claim. For the amount of the claim exceeding 500, the policy pays 50% of the excess.\nCalculate the expected value of the benefit paid.",
    options: ["607", "697", "750", "803", "850"],
    correctAnswer: 1,
    explanation: "Let \\(Y\\) be the benefit paid.\n\\[ Y = \\begin{cases} X & 0 < X \\le 500 \\\\ 500 + 0.5(X - 500) & X > 500 \\end{cases} \\]\nThis can be rewritten as \\(Y = 0.5X + 0.5(X \\wedge 500)\\), where \\(X \\wedge 500\\) is the minimum of \\(X\\) and 500.\nThe expected value is \\(E[Y] = 0.5E[X] + 0.5E[X \\wedge 500]\\).\nWe are given an exponential distribution with mean \\(\\lambda = 1000\\). Thus, \\(E[X] = 1000\\).\nThe expected value of the limited loss variable is:\n\\[ E[X \\wedge d] = \\int_0^d S(x) \\, dx = \\int_0^{500} e^{-x/1000} \\, dx \\]\n\\[ E[X \\wedge 500] = 1000(1 - e^{-500/1000}) = 1000(1 - e^{-0.5}) \\]\nNow substitute these into our expected value equation:\n\\[ E[Y] = 0.5(1000) + 0.5(1000(1 - e^{-0.5})) = 500 + 500 - 500e^{-0.5} \\]\n\\[ E[Y] = 1000 - 500(0.6065) = 1000 - 303.265 = 696.735 \\]"
  },
  {
    id: "q2_03",
    topic: "Univariate Continuous & Discrete Distributions",
    text: "A continuous random variable \\(X\\) has density function:\n\\[ f(x) = \\begin{cases} 3x^2 & 0 < x < 1 \\\\ 0 & \\text{otherwise} \\end{cases} \\]\nCalculate the variance of \\(Y = X^2\\).",
    options: ["0.045", "0.057", "0.069", "0.082", "0.095"],
    correctAnswer: 2,
    explanation: "To find the variance of \\(Y\\), we need \\(E[Y]\\) and \\(E[Y^2]\\).\n\\[ E[Y] = E[X^2] = \\int_0^1 x^2 f(x) \\, dx = \\int_0^1 x^2 (3x^2) \\, dx = \\int_0^1 3x^4 \\, dx = \\left[ \\frac{3}{5}x^5 \\right]_0^1 = \\frac{3}{5} \\]\n\\[ E[Y^2] = E[X^4] = \\int_0^1 x^4 f(x) \\, dx = \\int_0^1 x^4 (3x^2) \\, dx = \\int_0^1 3x^6 \\, dx = \\left[ \\frac{3}{7}x^7 \\right]_0^1 = \\frac{3}{7} \\]\nThe variance is:\n\\[ Var(Y) = E[Y^2] - (E[Y])^2 = \\frac{3}{7} - \\left(\\frac{3}{5}\\right)^2 = \\frac{3}{7} - \\frac{9}{25} \\]\n\\[ Var(Y) = \\frac{75 - 63}{175} = \\frac{12}{175} \\approx 0.06857 \\]"
  },
  {
    id: "q2_04",
    topic: "Univariate Continuous & Discrete Distributions",
    text: "The time to failure of a component in an electronic device has an exponential distribution with a median of 4 hours. Calculate the probability that the component will work without failing for at least 8 hours.",
    options: ["0.125", "0.250", "0.375", "0.500", "0.625"],
    correctAnswer: 1,
    explanation: "Let \\(X\\) be the time to failure. \\(X\\) has an exponential distribution with cumulative distribution function \\(F(x) = 1 - e^{-\\lambda x}\\).\nWe are given that the median is 4, which means:\n\\[ F(4) = 0.5 \\implies 1 - e^{-4\\lambda} = 0.5 \\implies e^{-4\\lambda} = 0.5 \\]\nWe need to find the probability that the component survives for at least 8 hours, which is \\(P(X \\ge 8)\\):\n\\[ P(X \\ge 8) = 1 - F(8) = e^{-8\\lambda} \\]\nUsing exponent properties:\n\\[ e^{-8\\lambda} = (e^{-4\\lambda})^2 = (0.5)^2 = 0.250 \\]"
  },
  {
    id: "q2_05",
    topic: "Univariate Continuous & Discrete Distributions",
    text: "A company provides insurance to a group of drivers. 70% of drivers are classified as 'Good' and 30% as 'Bad'.\nThe annual claim amount of a Good driver is exponentially distributed with mean 200.\nThe annual claim amount of a Bad driver is exponentially distributed with mean 800.\nCalculate the variance of the claim amount for a randomly selected driver from the group.",
    options: ["187,500", "225,400", "256,000", "295,600", "312,200"],
    correctAnswer: 3,
    explanation: "Let \\(X\\) be the claim amount. We use the law of total expectation and variance.\nFor a Good driver (G), \\(E[X|G] = 200\\) and since it is exponential, \\(Var(X|G) = 200^2 = 40,000\\). The second moment is \\(E[X^2|G] = Var(X|G) + (E[X|G])^2 = 2(200)^2 = 80,000\\).\nFor a Bad driver (B), \\(E[X|B] = 800\\) and \\(E[X^2|B] = 2(800)^2 = 1,280,000\\).\nThe overall expected value is:\n\\[ E[X] = P(G)E[X|G] + P(B)E[X|B] = 0.7(200) + 0.3(800) = 140 + 240 = 380 \\]\nThe overall second moment is:\n\\[ E[X^2] = P(G)E[X^2|G] + P(B)E[X^2|B] = 0.7(80,000) + 0.3(1,280,000) = 56,000 + 384,000 = 440,000 \\]\nThe variance of \\(X\\) is:\n\\[ Var(X) = E[X^2] - (E[X])^2 = 440,000 - (380)^2 = 440,000 - 144,400 = 295,600 \\]"
  },
  {
    id: "q2_06",
    topic: "Univariate Continuous & Discrete Distributions",
    text: "The random variable \\(X\\) has density function\n\\[ f_X(x) = \\begin{cases} 2x & 0 < x < 1 \\\\ 0 & \\text{otherwise} \\end{cases} \\]\nLet \\(Y = -\\ln(X)\\). Determine the probability density function of \\(Y\\), \\(f_Y(y)\\), for \\(y > 0\\).",
    options: [
      "\\(f_Y(y) = e^{-y}\\)",
      "\\(f_Y(y) = 2e^{-2y}\\)",
      "\\(f_Y(y) = 2y e^{-y^2}\\)",
      "\\(f_Y(y) = 0.5e^{-0.5y}\\)",
      "\\(f_Y(y) = e^{-2y}\\)"
    ],
    correctAnswer: 1,
    explanation: "We are transforming variables with \\(Y = -\\ln(X)\\). First, we find the inverse transformation:\n\\[ X = e^{-Y} \\]\nNext, calculate the absolute value of the Jacobian (derivative):\n\\[ \\left| \\frac{dx}{dy} \\right| = \\left| -e^{-y} \\right| = e^{-y} \\]\nThe PDF of \\(Y\\) is given by the transformation formula:\n\\[ f_Y(y) = f_X(x(y)) \\left| \\frac{dx}{dy} \\right| = 2(e^{-y}) \\cdot e^{-y} = 2e^{-2y} \\]\nThus, \\(Y\\) has an exponential distribution with parameter 2. Since \\(0 < X < 1\\), we have \\(0 < e^{-Y} < 1 \\implies Y > 0\\)."
  },
  {
    id: "q2_07",
    topic: "Univariate Continuous & Discrete Distributions",
    text: "An auto insurance policy has a deductible of 1 and a maximum claim payment of 5. Auto accident frequencies follow a discrete distribution with probability function:\n\\[ P(X = k) = \\frac{1}{2^{k+1}} \\quad \\text{for } k = 0, 1, 2, \\dots \\]\nwhere \\(X\\) is the amount of the loss (a discrete random variable). Calculate the expected claim payment under this policy.",
    options: ["0.35", "0.42", "0.48", "0.55", "0.61"],
    correctAnswer: 2,
    explanation: "The payment \\(Y\\) is subject to a deductible \\(d=1\\) and a maximum payment \\(m=5\\). Thus, \\(Y = \\min(\\max(X - 1, 0), 5)\\).\nThe possible values for \\(X\\) and corresponding payments \\(Y\\) are:\n- \\(X = 0 \\implies Y = 0\\)\n- \\(X = 1 \\implies Y = 0\\)\n- \\(X = 2 \\implies Y = 1\\)\n- \\(X = 3 \\implies Y = 2\\)\n- \\(X = 4 \\implies Y = 3\\)\n- \\(X = 5 \\implies Y = 4\\)\n- \\(X \\ge 6 \\implies Y = 5\\)\nThe expected payment is \\(E[Y] = \\sum_{k=2}^5 (k-1) P(X=k) + 5 P(X \\ge 6)\\).\n\\[ P(X \\ge 6) = 1 - \\sum_{k=0}^5 \\frac{1}{2^{k+1}} = 1 - \\left( \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\frac{1}{16} + \\frac{1}{32} + \\frac{1}{64} \\right) = 1 - \\frac{63}{64} = \\frac{1}{64} \\]\n\\[ E[Y] = 1\\left(\\frac{1}{8}\\right) + 2\\left(\\frac{1}{16}\\right) + 3\\left(\\frac{1}{32}\\right) + 4\\left(\\frac{1}{64}\\right) + 5\\left(\\frac{1}{64}\\right) \\]\n\\[ E[Y] = \\frac{8}{64} + \\frac{8}{64} + \\frac{6}{64} + \\frac{4}{64} + \\frac{5}{64} = \\frac{31}{64} \\approx 0.484 \\]"
  },
  {
    id: "q2_08",
    topic: "Univariate Continuous & Discrete Distributions",
    text: "The moment generating function of a random variable \\(X\\) is given by\n\\[ M_X(t) = \\frac{1}{(1-2t)^3} \\quad \\text{for } t < 0.5 \\]\nCalculate the variance of \\(X\\).",
    options: ["6", "8", "10", "12", "14"],
    correctAnswer: 3,
    explanation: "The moment generating function represents a Gamma distribution with \\(M_X(t) = (1 - \\theta t)^{-\\alpha}\\). By inspection, \\(\\theta = 2\\) and \\(\\alpha = 3\\).\nThe variance of a Gamma distribution is given by \\(\\alpha \\theta^2 = 3(2^2) = 12\\).\nAlternatively, we can find the variance using derivatives of the MGF:\n\\[ M_X'(t) = -3(1-2t)^{-4}(-2) = 6(1-2t)^{-4} \\]\n\\[ E[X] = M_X'(0) = 6 \\]\n\\[ M_X''(t) = -24(1-2t)^{-5}(-2) = 48(1-2t)^{-5} \\]\n\\[ E[X^2] = M_X''(0) = 48 \\]\n\\[ Var(X) = E[X^2] - (E[X])^2 = 48 - 6^2 = 12 \\]"
  },
  {
    id: "q2_09",
    topic: "Univariate Continuous & Discrete Distributions",
    text: "A loss variable \\(X\\) has a Pareto distribution with parameters \\(\\alpha = 3\\) and \\(\\theta = 1000\\).\nThe policy pays the loss subject to an ordinary deductible of 500. Given that a loss exceeds the deductible, calculate the expected payment.",
    options: ["500", "600", "750", "1000", "1500"],
    correctAnswer: 2,
    explanation: "The expected payment given that a loss exceeds the deductible is the expected excess loss, denoted as \\(e(d)\\), evaluated at \\(d = 500\\).\nFor a Pareto distribution, the excess loss variable \\(Y = X - d \\mid X > d\\) also follows a Pareto distribution with parameters \\(\\alpha' = \\alpha\\) and \\(\\theta' = \\theta + d\\).\nThus, the new parameters are \\(\\alpha' = 3\\) and \\(\\theta' = 1000 + 500 = 1500\\).\nThe expected value of a Pareto distribution is \\(E[Y] = \\frac{\\theta'}{\\alpha' - 1}\\).\n\\[ E[X - 500 \\mid X > 500] = \\frac{1500}{3 - 1} = \\frac{1500}{2} = 750 \\]"
  },
  {
    id: "q2_10",
    topic: "Univariate Continuous & Discrete Distributions",
    text: "A random variable \\(X\\) has a uniform distribution on the interval \\([0, 10]\\).\nCalculate the median of \\(Y = X^2 + X\\).",
    options: ["15", "20", "25", "30", "35"],
    correctAnswer: 3,
    explanation: "Since \\(X\\) is uniform on \\([0, 10]\\), its median is the midpoint of the interval, which is \\(m_X = 5\\).\nThe transformation \\(Y = g(X) = X^2 + X\\) is a strictly increasing and continuous function for all \\(X \\ge 0\\).\nFor strictly monotonic transformations, the median of the transformed variable is the transformation of the median. That is, \\(m_Y = g(m_X)\\).\n\\[ m_Y = 5^2 + 5 = 25 + 5 = 30 \\]"
  },
  {
    id: "q2_11",
    topic: "Univariate Continuous & Discrete Distributions",
    text: "The number of claims in a year, \\(N\\), follows a Poisson distribution with mean \\(\\lambda\\).\nThe probability of observing exactly 2 claims in a year is equal to the probability of observing exactly 3 claims.\nCalculate the expected number of claims given that there is at least 1 claim.",
    options: ["3.00", "3.16", "3.25", "3.42", "3.50"],
    correctAnswer: 1,
    explanation: "First, we find \\(\\lambda\\) using the given probability condition:\n\\[ P(N = 2) = P(N = 3) \\implies \\frac{e^{-\\lambda} \\lambda^2}{2!} = \\frac{e^{-\\lambda} \\lambda^3}{3!} \\]\nDividing both sides by \\(e^{-\\lambda} \\lambda^2\\) (since \\(\\lambda > 0\\)) gives:\n\\[ \\frac{1}{2} = \\frac{\\lambda}{6} \\implies \\lambda = 3 \\]\nWe are asked to find the conditional expected value \\(E[N \\mid N \\ge 1]\\):\n\\[ E[N \\mid N \\ge 1] = \\frac{\\sum_{k=1}^\\infty k P(N=k)}{P(N \\ge 1)} = \\frac{E[N]}{1 - P(N=0)} \\]\nSubstitute \\(\\lambda = 3\\) and \\(E[N] = 3\\):\n\\[ E[N \\mid N \\ge 1] = \\frac{3}{1 - e^{-3}} \\approx \\frac{3}{1 - 0.049787} = \\frac{3}{0.950213} \\approx 3.157 \\]"
  },
  {
    id: "q2_12",
    topic: "Univariate Continuous & Discrete Distributions",
    text: "A continuous random variable \\(X\\) has probability density function:\n\\[ f(x) = \\begin{cases} x & 0 < x < 1 \\\\ 2 - x & 1 \\le x < 2 \\\\ 0 & \\text{otherwise} \\end{cases} \\]\nCalculate the variance of \\(X\\).",
    options: ["1/12", "1/8", "1/6", "1/4", "1/3"],
    correctAnswer: 2,
    explanation: "This is a symmetric triangular distribution with a peak at \\(x = 1\\) and spanning from 0 to 2. Due to symmetry, the expected value is \\(E[X] = 1\\).\nTo find the variance, we first find \\(E[X^2]\\):\n\\[ E[X^2] = \\int_0^1 x^2(x) \\, dx + \\int_1^2 x^2(2 - x) \\, dx \\]\n\\[ \\int_0^1 x^3 \\, dx = \\left[ \\frac{x^4}{4} \\right]_0^1 = \\frac{1}{4} \\]\n\\[ \\int_1^2 (2x^2 - x^3) \\, dx = \\left[ \\frac{2x^3}{3} - \\frac{x^4}{4} \\right]_1^2 = \\left( \\frac{16}{3} - 4 \\right) - \\left( \\frac{2}{3} - \\frac{1}{4} \\right) = \\frac{4}{3} - \\frac{5}{12} = \\frac{16 - 5}{12} = \\frac{11}{12} \\]\n\\[ E[X^2] = \\frac{1}{4} + \\frac{11}{12} = \\frac{3}{12} + \\frac{11}{12} = \\frac{14}{12} = \\frac{7}{6} \\]\nThe variance is:\n\\[ Var(X) = E[X^2] - (E[X])^2 = \\frac{7}{6} - 1^2 = \\frac{1}{6} \\]"
  },
  {
    id: "q2_13",
    topic: "Univariate Continuous & Discrete Distributions",
    text: "A company has 10 independent machines. The probability that any given machine breaks down in a month is 0.1.\nIf a machine breaks down, the cost to repair it is 50. In addition, if more than 2 machines break down, a flat penalty of 100 is incurred (only once per month).\nCalculate the expected total cost of machine breakdowns in a month.",
    options: ["50.00", "52.50", "57.02", "60.15", "65.00"],
    correctAnswer: 2,
    explanation: "Let \\(N\\) be the number of machine breakdowns. \\(N\\) follows a binomial distribution with \\(n=10\\) and \\(p=0.1\\).\nThe total cost is \\(C = 50N + 100 I_{N > 2}\\), where \\(I_{N > 2}\\) is an indicator variable that is 1 if \\(N > 2\\) and 0 otherwise.\nThe expected cost is \\(E[C] = 50E[N] + 100P(N > 2)\\).\n\\[ E[N] = np = 10(0.1) = 1 \\]\nNow find \\(P(N \\le 2)\\):\n\\[ P(N = 0) = \\binom{10}{0}(0.1)^0(0.9)^{10} = 0.348678 \\]\n\\[ P(N = 1) = \\binom{10}{1}(0.1)^1(0.9)^9 = 10(0.1)(0.387420) = 0.387420 \\]\n\\[ P(N = 2) = \\binom{10}{2}(0.1)^2(0.9)^8 = 45(0.01)(0.430467) = 0.193710 \\]\n\\[ P(N \\le 2) = 0.348678 + 0.387420 + 0.193710 = 0.929808 \\]\n\\[ P(N > 2) = 1 - 0.929808 = 0.070192 \\]\nNow calculate the total expected cost:\n\\[ E[C] = 50(1) + 100(0.070192) = 50 + 7.0192 = 57.02 \\]"
  },
  {
    id: "q2_14",
    topic: "Univariate Continuous & Discrete Distributions",
    text: "The loss amount \\(X\\) follows a lognormal distribution with parameters \\(\\mu = 4\\) and \\(\\sigma = 1.5\\).\nCalculate the 80th percentile of the loss amount.",
    options: ["125.50", "160.25", "193.06", "215.15", "250.00"],
    correctAnswer: 2,
    explanation: "Let \\(p_{80}\\) be the 80th percentile of \\(X\\). By definition, \\(P(X \\le p_{80}) = 0.80\\).\nTaking the natural logarithm of both sides:\n\\[ P(\\ln X \\le \\ln p_{80}) = 0.80 \\]\nSince \\(X\\) is lognormal, \\(\\ln X\\) is normally distributed with mean \\(\\mu = 4\\) and standard deviation \\(\\sigma = 1.5\\). Standardizing \\(\\ln X\\) gives a standard normal variable \\(Z\\):\n\\[ P\\left( Z \\le \\frac{\\ln p_{80} - 4}{1.5} \\right) = 0.80 \\]\nFrom the standard normal table, the 80th percentile corresponds to a Z-score of approximately 0.842.\n\\[ \\frac{\\ln p_{80} - 4}{1.5} = 0.842 \\]\n\\[ \\ln p_{80} = 4 + 1.5(0.842) = 4 + 1.263 = 5.263 \\]\n\\[ p_{80} = e^{5.263} \\approx 193.06 \\]"
  },
  {
    id: "q2_15",
    topic: "Univariate Continuous & Discrete Distributions",
    text: "Let \\(X\\) be a continuous random variable with probability density function:\n\\[ f(x) = \\begin{cases} c(1-x^2) & -1 < x < 1 \\\\ 0 & \\text{otherwise} \\end{cases} \\]\nCalculate the variance of \\(X\\).",
    options: ["0.15", "0.20", "0.25", "0.30", "0.35"],
    correctAnswer: 1,
    explanation: "First, we find the constant \\(c\\) by ensuring the integral of the PDF equals 1:\n\\[ \\int_{-1}^1 c(1-x^2) \\, dx = 1 \\implies c \\left[ x - \\frac{x^3}{3} \\right]_{-1}^1 = 1 \\]\n\\[ c \\left( \\left(1 - \\frac{1}{3}\\right) - \\left(-1 + \\frac{1}{3}\\right) \\right) = c \\left( \\frac{2}{3} - \\left(-\\frac{2}{3}\\right) \\right) = \\frac{4}{3}c = 1 \\implies c = \\frac{3}{4} \\]\nThus, \\(f(x) = \\frac{3}{4}(1-x^2)\\).\nBy symmetry around 0, the expected value \\(E[X] = 0\\).\nThe second moment is:\n\\[ E[X^2] = \\int_{-1}^1 x^2 \\frac{3}{4}(1-x^2) \\, dx = \\frac{3}{4} \\int_{-1}^1 (x^2 - x^4) \\, dx \\]\n\\[ E[X^2] = \\frac{3}{4} \\left[ \\frac{x^3}{3} - \\frac{x^5}{5} \\right]_{-1}^1 = \\frac{3}{4} \\cdot 2 \\left( \\frac{1}{3} - \\frac{1}{5} \\right) = \\frac{3}{2} \\left( \\frac{2}{15} \\right) = \\frac{3}{15} = 0.20 \\]\nThe variance is:\n\\[ Var(X) = E[X^2] - (E[X])^2 = 0.20 - 0^2 = 0.20 \\]"
  }
]);
