window.appData = window.appData || {};
window.appData.questions = window.appData.questions || [];
window.appData.questions = window.appData.questions.concat([
  {
    id: "q7_risk_1",
    topic: "Risk Applications",
    text: "An insurance policy reimburses a loss subject to an ordinary deductible of 100. The loss size $X$ follows an exponential distribution with a mean of 500. Calculate the expected value of the payment per loss.",
    options: ["409", "415", "422", "450", "500"],
    correctAnswer: 0,
    explanation: "For an exponential distribution with mean $\\theta$, the expected payment per loss with an ordinary deductible $d$ is $E[Y^L] = \\int_{d}^{\\infty} (x-d) \\frac{1}{\\theta} e^{-x/\\theta} \\,dx = \\theta e^{-d/\\theta}$.\nHere $\\theta = 500$ and $d = 100$.\n$E[Y^L] = 500 e^{-100/500} = 500 e^{-0.2} \\approx 500(0.8187) = 409.35$."
  },
  {
    id: "q7_risk_2",
    topic: "Continuous Distributions",
    text: "Losses are uniformly distributed on the interval [0, 1000]. An insurance policy pays the loss subject to a maximum payment (policy limit) of 800. Calculate the variance of the payment.",
    options: ["64,267", "68,267", "72,267", "76,267", "80,267"],
    correctAnswer: 1,
    explanation: "Let $X \\sim \\text{Uniform}(0, 1000)$. The payment is $Y = X \\wedge 800$.\n$E[Y] = \\int_{0}^{800} \\frac{x}{1000} dx + \\int_{800}^{1000} \\frac{800}{1000} dx = \\frac{800^2}{2000} + 800\\frac{200}{1000} = 320 + 160 = 480$.\n$E[Y^2] = \\int_{0}^{800} \\frac{x^2}{1000} dx + \\int_{800}^{1000} \\frac{800^2}{1000} dx = \\frac{800^3}{3000} + 640000\\frac{200}{1000} = 170666.67 + 128000 = 298666.67$.\n$\\text{Var}(Y) = E[Y^2] - (E[Y])^2 = 298666.67 - 480^2 = 298666.67 - 230400 = 68266.67$."
  },
  {
    id: "q7_risk_3",
    topic: "Risk Applications",
    text: "A continuous random variable $X$ representing claim sizes has a Pareto distribution with parameters $\\alpha = 3$ and $\\theta = 2000$. An insurance policy has a deductible of 500. Calculate the expected payment per claim (i.e., expected payment given that a payment is made).",
    options: ["800", "1000", "1250", "1500", "2000"],
    correctAnswer: 2,
    explanation: "For a Pareto distribution with parameters $\\alpha$ and $\\theta$, the conditional distribution of $X - d$ given $X > d$ is also Pareto with parameters $\\alpha$ and $\\theta' = \\theta + d$.\nHere, $\\alpha = 3$, $\\theta = 2000$, and $d = 500$.\nThe conditional distribution of the payment per claim has parameters $\\alpha = 3$ and $\\theta' = 2000 + 500 = 2500$.\nThe expected payment per claim is the mean of this new Pareto distribution:\n$E[Y^P] = \\frac{\\theta'}{\\alpha - 1} = \\frac{2500}{3 - 1} = 1250$."
  },
  {
    id: "q7_risk_4",
    topic: "Risk Applications",
    text: "An insurance policy covers losses subject to an ordinary deductible of 1,000 and a coinsurance factor of 80%. The policy has a maximum payment of 10,000 per loss. Calculate the amount paid by the insurer for a loss of 12,500.",
    options: ["8,800", "9,200", "10,000", "11,500", "12,500"],
    correctAnswer: 1,
    explanation: "The payment function with deductible $d$, coinsurance $\\alpha$, and maximum payment limit $L$ is $Y = \\min(L, \\alpha \\max(0, X - d))$.\nGiven $X = 12500$, $d = 1000$, $\\alpha = 0.80$, and $L = 10000$.\n$Y = \\min(10000, 0.80 \\times \\max(0, 12500 - 1000))$\n$Y = \\min(10000, 0.80 \\times 11500) = \\min(10000, 9200) = 9200$."
  },
  {
    id: "q7_risk_5",
    topic: "Continuous Distributions",
    text: "A claim severity distribution is exponential with mean 1000. An insurance company will pay the amount of each claim in excess of a deductible of 200. Calculate the variance of the amount paid per claim, including the claims where no payment is made.",
    options: ["818,731", "967,141", "1,000,000", "1,637,462", "2,000,000"],
    correctAnswer: 1,
    explanation: "Let $X \\sim \\text{Exp}(1000)$ and $Y$ be the payment per loss: $Y = \\max(0, X - 200)$.\nFor an exponential distribution, $E[Y] = \\theta e^{-d/\\theta} = 1000 e^{-0.2} \\approx 818.731$.\nThe second moment is $E[Y^2] = 2\\theta^2 e^{-d/\\theta} = 2(1000^2) e^{-0.2} \\approx 1637461.5$.\n$\\text{Var}(Y) = E[Y^2] - (E[Y])^2 = 1637461.5 - (818.731)^2 = 1637461.5 - 670320.4 \\approx 967141$."
  },
  {
    id: "q7_risk_6",
    topic: "Risk Applications",
    text: "Losses $X$ have a uniform distribution on [0, 100]. A policy has a franchise deductible of 20. Under a franchise deductible, if the loss is less than or equal to the deductible, nothing is paid; if the loss exceeds the deductible, the FULL loss is paid. Calculate the expected payment per loss.",
    options: ["32", "40", "48", "50", "60"],
    correctAnswer: 2,
    explanation: "For a franchise deductible $d$, the payment $Y = 0$ if $X \\le d$, and $Y = X$ if $X > d$.\n$X \\sim \\text{Uniform}(0, 100)$ and $d = 20$.\nThe expected payment is $E[Y] = \\int_{20}^{100} x \\cdot \\frac{1}{100} \\, dx$.\n$E[Y] = \\left[ \\frac{x^2}{200} \\right]_{20}^{100} = \\frac{10000}{200} - \\frac{400}{200} = 50 - 2 = 48$."
  },
  {
    id: "q7_risk_7",
    topic: "Continuous Distributions",
    text: "The random variable $X$ represents the time to failure of a component, in years. $X$ follows a Weibull distribution with survival function $S(x) = e^{-(x/2)^3}$ for $x > 0$. Calculate the hazard rate (force of mortality) at $x = 2$.",
    options: ["1.0", "1.5", "2.0", "3.0", "4.0"],
    correctAnswer: 1,
    explanation: "The hazard rate (or force of mortality) is given by $h(x) = -\\frac{d}{dx} \\ln S(x)$.\nGiven $S(x) = \\exp(-(x/2)^3)$, we have $\\ln S(x) = -(x/2)^3 = -\\frac{x^3}{8}$.\nTaking the derivative: $\\frac{d}{dx} \\ln S(x) = -\\frac{3x^2}{8}$.\nSo $h(x) = \\frac{3x^2}{8}$.\nEvaluating at $x = 2$: $h(2) = \\frac{3(2^2)}{8} = \\frac{12}{8} = 1.5$."
  },
  {
    id: "q7_risk_8",
    topic: "Continuous Distributions",
    text: "Losses follow a lognormal distribution with parameters $\\mu = 5$ and $\\sigma = 1.2$. Calculate the 95th percentile of the loss distribution (the Value at Risk at the 95% confidence level). Note: The 95th percentile of the standard normal distribution is 1.645.",
    options: ["1068", "1205", "1486", "1824", "2105"],
    correctAnswer: 0,
    explanation: "If $X \\sim \\text{Lognormal}(\\mu, \\sigma)$, then $\\ln X \\sim \\text{Normal}(\\mu, \\sigma^2)$.\nWe want the 95th percentile $x_{0.95}$ such that $P(X \\le x_{0.95}) = 0.95$.\n$P(\\ln X \\le \\ln x_{0.95}) = 0.95$.\nStandardizing, we get $\\frac{\\ln x_{0.95} - 5}{1.2} = 1.645$.\n$\\ln x_{0.95} = 5 + 1.645(1.2) = 5 + 1.974 = 6.974$.\n$x_{0.95} = e^{6.974} \\approx 1068.48$."
  },
  {
    id: "q7_risk_9",
    topic: "Risk Applications",
    text: "An insurance company assumes that annual losses $X$ for a certain risk follow a normal distribution with mean 500 and standard deviation 200. The company wants to set an annual premium equal to the 99th percentile of the loss distribution to ensure solvency. Calculate the premium. (Note: The 99th percentile of the standard normal distribution is 2.326).",
    options: ["905", "932", "965", "1025", "1105"],
    correctAnswer: 2,
    explanation: "The premium is set to the 99th percentile of $X$, which is the Value at Risk (VaR) at the 99% level.\n$X \\sim \\text{Normal}(\\mu = 500, \\sigma = 200)$.\nWe need $x_{0.99}$ such that $P(X \\le x_{0.99}) = 0.99$.\nUsing the standard normal percentile $Z_{0.99} = 2.326$:\n$x_{0.99} = \\mu + Z_{0.99} \\sigma = 500 + 2.326(200) = 500 + 465.2 = 965.2$."
  },
  {
    id: "q7_risk_10",
    topic: "Risk Applications",
    text: "Losses are distributed according to an exponential distribution with mean 1,000. An insurer offers a policy with a deductible $d$. The Loss Elimination Ratio (LER) is the expected amount of claims saved by the deductible divided by the total expected claims. Calculate the LER if $d = 200$.",
    options: ["0.150", "0.181", "0.200", "0.800", "0.819"],
    correctAnswer: 1,
    explanation: "The Loss Elimination Ratio (LER) is defined as $\\frac{E[X \\wedge d]}{E[X]}$.\nFor an exponential distribution, $E[X] = \\theta$ and $E[X \\wedge d] = \\theta(1 - e^{-d/\\theta})$.\nThus, LER $= \\frac{\\theta(1 - e^{-d/\\theta})}{\\theta} = 1 - e^{-d/\\theta}$.\nGiven $\\theta = 1000$ and $d = 200$:\nLER $= 1 - e^{-200/1000} = 1 - e^{-0.2} \\approx 1 - 0.8187 = 0.1813$."
  },
  {
    id: "q7_risk_11",
    topic: "Continuous Distributions",
    text: "Let $X$ be the size of a loss, which follows a uniform distribution on $(0, 1000)$. The Tail Value at Risk (TVaR) at the 80% confidence level is defined as the expected value of the loss, given that the loss exceeds the 80th percentile. Calculate the TVaR at 80%.",
    options: ["800", "850", "900", "950", "1000"],
    correctAnswer: 2,
    explanation: "For $X \\sim \\text{Uniform}(0, 1000)$, the CDF is $F(x) = x/1000$.\nThe 80th percentile (VaR at 80%) is $x_{0.80} = 800$.\nThe Tail Value at Risk (TVaR) at 80% is $E[X | X > 800]$.\nBecause $X$ is uniform, the conditional distribution of $X$ given $X > 800$ is simply a uniform distribution on $(800, 1000)$.\nThe expected value of this conditional uniform distribution is the midpoint: $\\frac{800 + 1000}{2} = 900$."
  },
  {
    id: "q7_risk_12",
    topic: "Risk Applications",
    text: "A policy covers losses subject to a deductible of 100 and a maximum covered loss of 1000. This means the insurer pays nothing for losses up to 100, pays the loss minus 100 for losses between 100 and 1000, and pays 900 for losses above 1000. The loss $X$ follows an exponential distribution with mean 500. Calculate the expected payment per loss.",
    options: ["251", "305", "342", "410", "482"],
    correctAnswer: 2,
    explanation: "The payment variable is $Y = (X \\wedge 1000) - (X \\wedge 100)$.\nThe expected payment is $E[Y] = E[X \\wedge 1000] - E[X \\wedge 100]$.\nFor an exponential distribution, $E[X \\wedge x] = \\theta(1 - e^{-x/\\theta})$.\n$E[X \\wedge 1000] = 500(1 - e^{-1000/500}) = 500(1 - e^{-2})$.\n$E[X \\wedge 100] = 500(1 - e^{-100/500}) = 500(1 - e^{-0.2})$.\n$E[Y] = 500(e^{-0.2} - e^{-2}) \\approx 500(0.8187 - 0.1353) = 500(0.6834) = 341.7$."
  },
  {
    id: "q7_risk_13",
    topic: "Continuous Distributions",
    text: "A risk has a mixed distribution. There is a 20% probability of no loss ($X=0$). If a loss occurs, its size follows a uniform distribution on $(0, 1000)$. Calculate the expected value of the payment per loss if the policy has an ordinary deductible of 200.",
    options: ["210", "256", "320", "360", "400"],
    correctAnswer: 1,
    explanation: "The overall expected payment is $E[Y] = P(X=0)E[Y|X=0] + P(X>0)E[Y|X>0]$.\nClearly $E[Y|X=0] = 0$.\nGiven a loss occurs ($X>0$), $X \\sim \\text{Uniform}(0, 1000)$. The payment is $\\max(0, X-200)$.\n$E[Y|X>0] = \\int_{200}^{1000} (x-200) \\frac{1}{1000} dx = \\left[ \\frac{(x-200)^2}{2000} \\right]_{200}^{1000} = \\frac{800^2}{2000} = \\frac{640000}{2000} = 320$.\nThe overall expected payment is $E[Y] = (0.20)(0) + (0.80)(320) = 256$."
  },
  {
    id: "q7_risk_14",
    topic: "Continuous Distributions",
    text: "The distribution of loss size $X$ is defined by the density function $f(x) = \\frac{3x^2}{1000}$ for $0 < x < 10$. An insurance policy has a deductible of 5 and a maximum payment of 4 per loss. Calculate the expected payment per loss.",
    options: ["2.20", "2.52", "2.85", "3.12", "3.55"],
    correctAnswer: 1,
    explanation: "The payment is $Y = \\max(0, X - 5)$ capped at 4, meaning the policy limit is a maximum covered loss of $5 + 4 = 9$.\nThe expected payment can be found by integrating the survival function: $E[Y] = \\int_{5}^{9} S(x) \\, dx$.\nThe CDF is $F(x) = \\int_{0}^{x} \\frac{3t^2}{1000} \\, dt = \\frac{x^3}{1000}$, so $S(x) = 1 - \\frac{x^3}{1000}$.\n$E[Y] = \\int_{5}^{9} (1 - \\frac{x^3}{1000}) \\, dx = \\left[ x - \\frac{x^4}{4000} \\right]_{5}^{9}$.\n$E[Y] = (9 - \\frac{9^4}{4000}) - (5 - \\frac{5^4}{4000}) = (9 - 1.64025) - (5 - 0.15625) = 7.35975 - 4.84375 = 2.516$."
  },
  {
    id: "q7_risk_15",
    topic: "Risk Applications",
    text: "Losses are exponentially distributed with a mean of $\\theta$. An insurer has a policy with an ordinary deductible of $d = 200$. It is observed that the expected payment per loss is half of the expected payment per loss if there were no deductible. Calculate $\\theta$.",
    options: ["200", "250", "289", "346", "400"],
    correctAnswer: 2,
    explanation: "Let $Y^L$ be the payment per loss with deductible $d=200$. For an exponential distribution, $E[Y^L] = \\theta e^{-d/\\theta}$.\nIf there is no deductible, the expected payment is $E[X] = \\theta$.\nWe are given $E[Y^L] = 0.5 E[X]$, which means $\\theta e^{-200/\\theta} = 0.5 \\theta$.\n$e^{-200/\\theta} = 0.5$\n$-200 / \\theta = \\ln(0.5) = -\\ln(2)$\n$\\theta = \\frac{200}{\\ln(2)} \\approx \\frac{200}{0.6931} \\approx 288.5$."
  }
]);
