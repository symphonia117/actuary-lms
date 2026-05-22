window.appData = window.appData || {};
window.appData.flashcards = window.appData.flashcards || [];

window.appData.flashcards = window.appData.flashcards.concat([
    {
        front: "What is the definition of the Moment Generating Function (MGF) \\(M_X(t)\\)?",
        back: "\\[M_X(t) = E[e^{tX}]\\]<br>If \\(X\\) is continuous: \\(M_X(t) = \\int_{-\\infty}^{\\infty} e^{tx} f(x) dx\\)<br>If \\(X\\) is discrete: \\(M_X(t) = \\sum e^{tx} p(x)\\)"
    },
    {
        front: "How do you find the \\(n\\)-th moment, \\(E[X^n]\\), using the Moment Generating Function?",
        back: "Take the \\(n\\)-th derivative of the MGF with respect to \\(t\\) and evaluate it at \\(t = 0\\):<br><br>\\[E[X^n] = \\left. \\frac{d^n}{dt^n} M_X(t) \\right|_{t=0} = M_X^{(n)}(0)\\]"
    },
    {
        front: "What is the MGF of a linear transformation \\(Y = aX + b\\)?",
        back: "The MGF of \\(Y\\) is given by:<br><br>\\[M_Y(t) = e^{bt} M_X(at)\\]"
    },
    {
        front: "If \\(X\\) and \\(Y\\) are independent random variables, what is the MGF of their sum \\(Z = X + Y\\)?",
        back: "The MGF of the sum of independent random variables is the product of their individual MGFs:<br><br>\\[M_{X+Y}(t) = M_X(t) M_Y(t)\\]"
    },
    {
        front: "What is the Moment Generating Function of an Exponential distribution with mean \\(\\theta\\) (where \\(\\lambda = 1/\\theta\\))?",
        back: "\\[M_X(t) = \\frac{1}{1 - \\theta t} \\quad \\text{for } t < \\frac{1}{\\theta}\\]<br>Or in terms of \\(\\lambda\\): \\(\\frac{\\lambda}{\\lambda - t}\\) for \\(t < \\lambda\\)."
    },
    {
        front: "What is the Moment Generating Function of a Poisson distribution with parameter \\(\\lambda\\)?",
        back: "\\[M_X(t) = e^{\\lambda(e^t - 1)}\\]"
    },
    {
        front: "What is the Moment Generating Function of a Standard Normal distribution \\(Z \\sim N(0, 1)\\)?",
        back: "\\[M_Z(t) = e^{t^2 / 2}\\]"
    },
    {
        front: "What is the Moment Generating Function of a Normal distribution \\(X \\sim N(\\mu, \\sigma^2)\\)?",
        back: "\\[M_X(t) = e^{\\mu t + \\frac{1}{2}\\sigma^2 t^2}\\]"
    },
    {
        front: "What is the Moment Generating Function of a Binomial distribution \\(X \\sim \\text{Bin}(n, p)\\)?",
        back: "\\[M_X(t) = (1 - p + p e^t)^n\\]"
    },
    {
        front: "State the Uniqueness Theorem for Moment Generating Functions.",
        back: "If two random variables have the same MGF in a neighborhood of zero, then they have the same cumulative distribution function (CDF). Therefore, the MGF uniquely determines the distribution."
    },
    {
        front: "State the Integration by Parts formula, commonly used for integrating products like \\(x e^{-x}\\).",
        back: "\\[\\int u \\, dv = uv - \\int v \\, du\\]<br>Helpful mnemonic for choosing \\(u\\) is <b>LIATE</b> (Logarithmic, Inverse trig, Algebraic, Trig, Exponential)."
    },
    {
        front: "What is the Gamma Function \\(\\Gamma(\\alpha)\\) and its integral definition?",
        back: "\\[\\Gamma(\\alpha) = \\int_{0}^{\\infty} x^{\\alpha - 1} e^{-x} dx\\]<br>Key properties:<br>\\(\\Gamma(\\alpha) = (\\alpha - 1)\\Gamma(\\alpha - 1)\\)<br>For integer \\(n\\): \\(\\Gamma(n) = (n - 1)!\\)"
    },
    {
        front: "What is the value of \\(\\int_{0}^{\\infty} x^n e^{-\\lambda x} dx\\) for an integer \\(n \\ge 0\\)?",
        back: "Using the Gamma function or repeated integration by parts:<br><br>\\[\\int_{0}^{\\infty} x^n e^{-\\lambda x} dx = \\frac{n!}{\\lambda^{n+1}}\\]"
    },
    {
        front: "How do you evaluate the integral of the standard normal PDF over the entire real line: \\(\\int_{-\\infty}^{\\infty} e^{-x^2/2} dx\\)?",
        back: "The integral of the normal curve evaluates to \\(\\sqrt{2\\pi}\\).<br><br>\\[\\int_{-\\infty}^{\\infty} \\frac{1}{\\sqrt{2\\pi}} e^{-x^2/2} dx = 1 \\implies \\int_{-\\infty}^{\\infty} e^{-x^2/2} dx = \\sqrt{2\\pi}\\]"
    },
    {
        front: "What is the integral of an odd function \\(f(x) = -f(-x)\\) over a symmetric interval \\([-a, a]\\)?",
        back: "The integral of an odd function over an interval symmetric around zero is exactly 0:<br><br>\\[\\int_{-a}^{a} f(x) dx = 0\\]"
    },
    {
        front: "When evaluating double integrals, how do you handle a triangular region defined by \\(0 < x < y < 1\\)?",
        back: "You can set up the limits in two ways depending on the order of integration:<br>Type I (dy dx): \\(\\int_{0}^{1} \\int_{x}^{1} f(x,y) \\, dy \\, dx\\)<br>Type II (dx dy): \\(\\int_{0}^{1} \\int_{0}^{y} f(x,y) \\, dx \\, dy\\)"
    },
    {
        front: "What is the tabular method (D-I method) for integration by parts?",
        back: "Create two columns: <b>D (Derivatives)</b> and <b>I (Integrals)</b>.<br>1. Differentiate the algebraic part until it reaches 0.<br>2. Integrate the other part correspondingly.<br>3. Multiply diagonally, alternating signs \\((+, -, +, -)\\)."
    },
    {
        front: "What is the value of \\(\\int x e^{ax} dx\\)?",
        back: "Using integration by parts (\\(u = x, dv = e^{ax} dx\\)):<br><br>\\[\\int x e^{ax} dx = \\frac{x e^{ax}}{a} - \\frac{e^{ax}}{a^2} + C\\]"
    },
    {
        front: "How do you integrate a function with an absolute value, such as \\(\\int_{-a}^{a} |x| dx\\)?",
        back: "Split the integral at the point(s) where the argument of the absolute value changes sign (here, at \\(x = 0\\)):<br><br>\\[\\int_{-a}^{a} |x| dx = \\int_{-a}^{0} (-x) dx + \\int_{0}^{a} x dx\\]<br>Because \\(|x|\\) is an even function, this also equals \\(2 \\int_{0}^{a} x dx\\)."
    },
    {
        front: "How do you evaluate \\(\\int_{-\\infty}^{\\infty} x^2 \\frac{1}{\\sqrt{2\\pi\\sigma^2}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}} dx\\) without integrating?",
        back: "Recognize this as the expected value \\(E[X^2]\\) for a Normal distribution \\(N(\\mu, \\sigma^2)\\).<br>Since \\(Var(X) = E[X^2] - (E[X])^2\\), we have:<br><br>\\[E[X^2] = \\sigma^2 + \\mu^2\\]"
    },
    {
        front: "What is the shortcut formula for Variance, \\(Var(X)\\)?",
        back: "\\[Var(X) = E[X^2] - (E[X])^2\\]<br>This is also known as the expected value of the square minus the square of the expected value."
    },
    {
        front: "How does Variance scale with a linear transformation \\(Y = aX + b\\)?",
        back: "Variance scales by the square of the multiplicative constant, and additive constants are ignored:<br><br>\\[Var(aX + b) = a^2 Var(X)\\]"
    },
    {
        front: "What is the formula for the variance of the sum of two random variables, \\(Var(X + Y)\\)?",
        back: "\\[Var(X + Y) = Var(X) + Var(Y) + 2Cov(X, Y)\\]<br>If \\(X\\) and \\(Y\\) are independent, \\(Cov(X,Y) = 0\\), reducing to \\(Var(X) + Var(Y)\\)."
    },
    {
        front: "What is the formula for the variance of a difference, \\(Var(X - Y)\\)?",
        back: "\\[Var(X - Y) = Var(X) + Var(Y) - 2Cov(X, Y)\\]<br>Notice that the variances are still <b>added</b>, only the covariance term is subtracted."
    },
    {
        front: "What is the mathematical definition of Covariance, \\(Cov(X, Y)\\)?",
        back: "\\[Cov(X, Y) = E[(X - \\mu_X)(Y - \\mu_Y)]\\]<br>The computational shortcut formula is:<br>\\[Cov(X, Y) = E[XY] - E[X]E[Y]\\]"
    },
    {
        front: "What happens to the Covariance if \\(X\\) and \\(Y\\) are independent?",
        back: "If \\(X\\) and \\(Y\\) are independent, their Covariance is exactly zero:<br><br>\\[Cov(X, Y) = 0\\]<br><i>Note: The converse is not necessarily true unless \\(X\\) and \\(Y\\) are jointly normal.</i>"
    },
    {
        front: "State the Law of Total Expectation (Double Expectation Theorem).",
        back: "\\[E[X] = E_Y[ E_{X|Y}[X|Y] ]\\]<br>This means you can find the unconditional expectation of \\(X\\) by taking the expectation of the conditional expectation \\(E[X|Y]\\) with respect to \\(Y\\)."
    },
    {
        front: "State the Law of Total Variance (Conditional Variance Formula).",
        back: "\\[Var(X) = E_Y[Var(X|Y)] + Var_Y(E[X|Y])\\]<br>Mnemonic: EVVE (Expected value of Variance + Variance of Expected value)."
    },
    {
        front: "What is the formula for the correlation coefficient \\(\\rho_{XY}\\)?",
        back: "\\[\\rho_{XY} = \\frac{Cov(X, Y)}{\\sigma_X \\sigma_Y}\\]<br>Where \\(\\sigma_X\\) and \\(\\sigma_Y\\) are the standard deviations of \\(X\\) and \\(Y\\). Note that \\(-1 \\le \\rho_{XY} \\le 1\\)."
    },
    {
        front: "What is the expectation of the product of two independent random variables, \\(E[XY]\\)?",
        back: "If \\(X\\) and \\(Y\\) are independent, the expectation of their product is the product of their expectations:<br><br>\\[E[XY] = E[X] E[Y]\\]"
    }
]);
