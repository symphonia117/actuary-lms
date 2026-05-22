window.appData = window.appData || {};
window.appData.flashcards = window.appData.flashcards || [];

const advancedFlashcards = [
    {
        front: "What is the Moment Generating Function (MGF) of a Gamma distribution with parameters $\\alpha$ and $\\theta$?",
        back: "$M_X(t) = (1 - \\theta t)^{-\\alpha}$ for $t < \\frac{1}{\\theta}$"
    },
    {
        front: "What is the probability density function (PDF) of a Pareto distribution with parameters $\\alpha$ and $\\theta$?",
        back: "$f(x) = \\frac{\\alpha \\theta^\\alpha}{(x + \\theta)^{\\alpha + 1}}$ for $x > 0$"
    },
    {
        front: "How do you calculate the expected payment per loss $E[Y^L]$ for an ordinary deductible $d$?",
        back: "$E[Y^L] = E[X] - E[X \\wedge d]$, where $X \\wedge d$ is the limited loss variable. Alternatively, $E[Y^L] = \\int_d^\\infty (x - d) f(x) dx = \\int_d^\\infty S(x) dx$"
    },
    {
        front: "How do you calculate the expected payment per payment $E[Y^P]$ for an ordinary deductible $d$?",
        back: "$E[Y^P] = \\frac{E[Y^L]}{S(d)}$, where $S(d)$ is the probability that a loss exceeds the deductible."
    },
    {
        front: "State the Law of Total Variance.",
        back: "$Var(X) = E[Var(X|Y)] + Var(E[X|Y])$"
    },
    {
        front: "For a Bivariate Normal distribution $(X, Y)$, what is the conditional expectation $E[Y|X=x]$?",
        back: "$E[Y|X=x] = \\mu_Y + \\rho \\frac{\\sigma_Y}{\\sigma_X} (x - \\mu_X)$"
    },
    {
        front: "For a Bivariate Normal distribution $(X, Y)$, what is the conditional variance $Var(Y|X=x)$?",
        back: "$Var(Y|X=x) = \\sigma_Y^2 (1 - \\rho^2)$"
    },
    {
        front: "What is the Moment Generating Function (MGF) of a Normal distribution $N(\\mu, \\sigma^2)$?",
        back: "$M_X(t) = e^{\\mu t + \\frac{1}{2}\\sigma^2 t^2}$"
    },
    {
        front: "Let $X_{(1)}$ be the minimum of $n$ independent and identically distributed random variables with CDF $F(x)$ and PDF $f(x)$. What is the PDF of $X_{(1)}$?",
        back: "$f_{X_{(1)}}(x) = n[1 - F(x)]^{n-1} f(x)$"
    },
    {
        front: "Let $X_{(n)}$ be the maximum of $n$ independent and identically distributed random variables with CDF $F(x)$ and PDF $f(x)$. What is the PDF of $X_{(n)}$?",
        back: "$f_{X_{(n)}}(x) = n[F(x)]^{n-1} f(x)$"
    },
    {
        front: "If $X \\sim \\text{Poisson}(\\lambda_1)$ and $Y \\sim \\text{Poisson}(\\lambda_2)$ are independent, what is the distribution of $X + Y$?",
        back: "$X + Y \\sim \\text{Poisson}(\\lambda_1 + \\lambda_2)$"
    },
    {
        front: "What is the Hazard Rate Function $h(x)$ (or failure rate) in terms of the PDF $f(x)$ and Survival Function $S(x)$?",
        back: "$h(x) = \\frac{f(x)}{S(x)} = \\frac{f(x)}{1 - F(x)}$"
    },
    {
        front: "What is the expected value of a Lognormal distribution with parameters $\\mu$ and $\\sigma^2$?",
        back: "$E[X] = e^{\\mu + \\frac{1}{2}\\sigma^2}$"
    },
    {
        front: "What is the variance of a Lognormal distribution with parameters $\\mu$ and $\\sigma^2$?",
        back: "$Var(X) = e^{2\\mu + \\sigma^2}(e^{\\sigma^2} - 1)$"
    },
    {
        front: "How do you find the PDF of $Y = g(X)$ where $g$ is a strictly monotonic and differentiable function, given the PDF of $X$?",
        back: "$f_Y(y) = f_X(g^{-1}(y)) \\cdot \\left| \\frac{d}{dy} g^{-1}(y) \\right|$"
    },
    {
        front: "If $X$ has an Exponential distribution with mean $\\theta$, what is the conditional probability $P(X > x + y | X > x)$?",
        back: "$P(X > x + y | X > x) = P(X > y) = e^{-y/\\theta}$. This is known as the memoryless property."
    },
    {
        front: "What is the Moment Generating Function (MGF) of a standard Uniform distribution on $(0, 1)$?",
        back: "$M_X(t) = \\frac{e^t - 1}{t}$ for $t \\neq 0$, and $M_X(0) = 1$."
    },
    {
        front: "What is the formula for the covariance of two random variables $X$ and $Y$, $Cov(X, Y)$?",
        back: "$Cov(X, Y) = E[XY] - E[X]E[Y]$"
    },
    {
        front: "How do you calculate $Cov(aX + bY, cW + dZ)$ where $a, b, c, d$ are constants?",
        back: "$ac \\cdot Cov(X, W) + ad \\cdot Cov(X, Z) + bc \\cdot Cov(Y, W) + bd \\cdot Cov(Y, Z)$"
    },
    {
        front: "What is the probability mass function (PMF) of a Negative Binomial distribution representing the number of trials $x$ to get $r$ successes, with probability of success $p$?",
        back: "$P(X = x) = \\binom{x-1}{r-1} p^r (1-p)^{x-r}$ for $x = r, r+1, \\dots$"
    },
    {
        front: "For a continuous 2D random vector $(X, Y)$, how do you find the marginal PDF of $X$, $f_X(x)$?",
        back: "$f_X(x) = \\int_{-\\infty}^{\\infty} f(x, y) dy$"
    },
    {
        front: "What is the expected value of a limited loss variable $X \\wedge u$, where $u$ is the policy limit?",
        back: "$E[X \\wedge u] = \\int_0^u x f(x) dx + u(1 - F(u)) = \\int_0^u S(x) dx$"
    },
    {
        front: "State the Central Limit Theorem (CLT) approximation for the sum $S_n = X_1 + \\dots + X_n$ of i.i.d. random variables with mean $\\mu$ and variance $\\sigma^2$.",
        back: "For large $n$, $S_n \\approx N(n\\mu, n\\sigma^2)$, or $\\frac{S_n - n\\mu}{\\sigma \\sqrt{n}} \\approx N(0, 1)$."
    },
    {
        front: "If $X$ and $Y$ are independent continuous random variables, what is the PDF of $Z = X + Y$?",
        back: "$f_Z(z) = \\int_{-\\infty}^{\\infty} f_X(x) f_Y(z - x) dx$. This is called the convolution formula."
    },
    {
        front: "For a mixture distribution with components $X_1$ and $X_2$ and mixing weights $w_1$ and $w_2$ ($w_1 + w_2 = 1$), what is the expected value $E[X]$?",
        back: "$E[X] = w_1 E[X_1] + w_2 E[X_2]$"
    }
];

if (window.appData && window.appData.flashcards) {
    window.appData.flashcards = window.appData.flashcards.concat(advancedFlashcards);
} else {
    window.appData = window.appData || {};
    window.appData.flashcards = advancedFlashcards;
}
