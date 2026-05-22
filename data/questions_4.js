window.appData.questions = window.appData.questions.concat([
  {
    id: "46",
    topic: "Covariance, Correlation, MGFs, and Expected value of functions E[g(X,Y)]",
    text: "Let $X$ be a random variable with probability density function $f(x) = 2x$ for $0 < x < 1$. Calculate $\\text{Cov}(X, X^2)$.",
    options: [
      "1/15",
      "2/15",
      "1/5",
      "4/15",
      "1/3"
    ],
    correctAnswer: 0,
    explanation: "First, we find the expected values $E[X]$, $E[X^2]$, and $E[X^3]$.\n$E[X] = \\int_0^1 x(2x) dx = \\int_0^1 2x^2 dx = \\frac{2}{3}$\n$E[X^2] = \\int_0^1 x^2(2x) dx = \\int_0^1 2x^3 dx = \\frac{2}{4} = \\frac{1}{2}$\n$E[X^3] = \\int_0^1 x^3(2x) dx = \\int_0^1 2x^4 dx = \\frac{2}{5}$\nNow, we use the computational formula for covariance:\n$\\text{Cov}(X, X^2) = E[X \\cdot X^2] - E[X]E[X^2] = E[X^3] - E[X]E[X^2]$\n$\\text{Cov}(X, X^2) = \\frac{2}{5} - \\left(\\frac{2}{3}\\right)\\left(\\frac{1}{2}\\right) = \\frac{2}{5} - \\frac{1}{3} = \\frac{6}{15} - \\frac{5}{15} = \\frac{1}{15}$."
  },
  {
    id: "47",
    topic: "Covariance, Correlation, MGFs, and Expected value of functions E[g(X,Y)]",
    text: "Let $X$ and $Y$ be continuous random variables with joint probability density function $f(x,y) = x + y$ for $0 \\le x \\le 1$ and $0 \\le y \\le 1$. Calculate the correlation coefficient between $X$ and $Y$.",
    options: [
      "-1/11",
      "-1/12",
      "0",
      "1/12",
      "1/11"
    ],
    correctAnswer: 0,
    explanation: "First, calculate the marginal moments. By symmetry, $E[X] = E[Y]$ and $\\text{Var}(X) = \\text{Var}(Y)$.\n$E[X] = \\int_0^1 \\int_0^1 x(x+y) dy dx = \\int_0^1 \\left(x^2 y + \\frac{1}{2}xy^2\\right)\\Big|_0^1 dx = \\int_0^1 (x^2 + \\frac{1}{2}x) dx = \\frac{1}{3} + \\frac{1}{4} = \\frac{7}{12}$.\n$E[X^2] = \\int_0^1 \\int_0^1 x^2(x+y) dy dx = \\int_0^1 (x^3 + \\frac{1}{2}x^2) dx = \\frac{1}{4} + \\frac{1}{6} = \\frac{5}{12}$.\n$\\text{Var}(X) = E[X^2] - E[X]^2 = \\frac{5}{12} - \\left(\\frac{7}{12}\\right)^2 = \\frac{60}{144} - \\frac{49}{144} = \\frac{11}{144}$.\nNext, $E[XY] = \\int_0^1 \\int_0^1 xy(x+y) dy dx = \\int_0^1 \\left(\\frac{1}{2}x^2 + \\frac{1}{3}x\\right) dx = \\frac{1}{6} + \\frac{1}{6} = \\frac{1}{3} = \\frac{48}{144}$.\n$\\text{Cov}(X,Y) = E[XY] - E[X]E[Y] = \\frac{48}{144} - \\left(\\frac{7}{12}\\right)^2 = \\frac{48}{144} - \\frac{49}{144} = -\\frac{1}{144}$.\nFinally, $\\text{Corr}(X,Y) = \\frac{\\text{Cov}(X,Y)}{\\sqrt{\\text{Var}(X)\\text{Var}(Y)}} = \\frac{-1/144}{11/144} = -\\frac{1}{11}$."
  },
  {
    id: "48",
    topic: "Covariance, Correlation, MGFs, and Expected value of functions E[g(X,Y)]",
    text: "The joint moment generating function of $X$ and $Y$ is given by $M_{X,Y}(s,t) = \\exp(s + 3t + 2s^2 + 8t^2 + 4st)$. Calculate $\\text{Var}(X + 2Y)$.",
    options: [
      "68",
      "76",
      "84",
      "92",
      "100"
    ],
    correctAnswer: 2,
    explanation: "This is the MGF of a bivariate normal distribution, which has the general form $\\exp(s\\mu_X + t\\mu_Y + \\frac{1}{2}(\\sigma_X^2 s^2 + \\sigma_Y^2 t^2 + 2\\text{Cov}(X,Y)st))$.\nBy matching the coefficients with the given MGF:\n$\\frac{1}{2}\\sigma_X^2 = 2 \\implies \\text{Var}(X) = 4$\n$\\frac{1}{2}\\sigma_Y^2 = 8 \\implies \\text{Var}(Y) = 16$\n$\\frac{1}{2}(2\\text{Cov}(X,Y)) = 4 \\implies \\text{Cov}(X,Y) = 4$\nWe want $\\text{Var}(X + 2Y) = \\text{Var}(X) + 2^2\\text{Var}(Y) + 2(1)(2)\\text{Cov}(X,Y)$.\n$\\text{Var}(X + 2Y) = 4 + 4(16) + 4(4) = 4 + 64 + 16 = 84$."
  },
  {
    id: "49",
    topic: "Covariance, Correlation, MGFs, and Expected value of functions E[g(X,Y)]",
    text: "An actuary determines that the claim size $X$ and the claim processing time $Y$ for a certain type of insurance policy have a joint probability density function given by $f(x,y) = \\frac{1}{8}x e^{-(x+y)/2}$ for $x > 0$ and $y > 0$. Calculate the expected value of the ratio of processing time to claim size, $E[Y/X]$.",
    options: [
      "0.5",
      "1.0",
      "1.5",
      "2.0",
      "2.5"
    ],
    correctAnswer: 1,
    explanation: "The joint PDF can be factored into a function of $x$ and a function of $y$: $f(x,y) = (\\frac{1}{4}x e^{-x/2}) (\\frac{1}{2}e^{-y/2})$.\nThis indicates that $X$ and $Y$ are independent.\n$X$ follows a Gamma distribution with $\\alpha=2$ and $\\theta=2$. $Y$ follows an Exponential distribution with mean $\\theta=2$.\nBy independence, $E[Y/X] = E[Y] E[1/X]$.\n$E[Y] = 2$.\n$E[1/X] = \\int_0^\\infty \\frac{1}{x} \\left( \\frac{1}{4}x e^{-x/2} \\right) dx = \\frac{1}{4} \\int_0^\\infty e^{-x/2} dx = \\frac{1}{4}(2) = \\frac{1}{2}$.\nTherefore, $E[Y/X] = 2 \\times \\frac{1}{2} = 1.0$."
  },
  {
    id: "50",
    topic: "Covariance, Correlation, MGFs, and Expected value of functions E[g(X,Y)]",
    text: "Random variables $X$ and $Y$ have a joint distribution with $\\text{Var}(X) = 4$, $\\text{Var}(Y) = 9$, and $\\text{Var}(2X - 3Y) = 103$. Calculate the correlation coefficient between $X$ and $Y$.",
    options: [
      "-1/6",
      "-1/12",
      "0",
      "1/12",
      "1/6"
    ],
    correctAnswer: 1,
    explanation: "Using the formula for the variance of a linear combination:\n$\\text{Var}(2X - 3Y) = 2^2\\text{Var}(X) + (-3)^2\\text{Var}(Y) + 2(2)(-3)\\text{Cov}(X,Y)$\n$103 = 4(4) + 9(9) - 12\\text{Cov}(X,Y)$\n$103 = 16 + 81 - 12\\text{Cov}(X,Y)$\n$103 = 97 - 12\\text{Cov}(X,Y)$\n$12\\text{Cov}(X,Y) = 97 - 103 = -6 \\implies \\text{Cov}(X,Y) = -0.5$.\nThe correlation coefficient is $\\text{Corr}(X,Y) = \\frac{\\text{Cov}(X,Y)}{\\sigma_X \\sigma_Y}$.\nWe know $\\sigma_X = \\sqrt{4} = 2$ and $\\sigma_Y = \\sqrt{9} = 3$.\n$\\text{Corr}(X,Y) = \\frac{-0.5}{(2)(3)} = \\frac{-0.5}{6} = -\\frac{1}{12}$."
  },
  {
    id: "51",
    topic: "Covariance, Correlation, MGFs, and Expected value of functions E[g(X,Y)]",
    text: "A random variable $X$ has a moment generating function $M_X(t) = (1 - 2t)^{-3}$ for $t < 1/2$. Calculate the expected value of $X^2$.",
    options: [
      "12",
      "24",
      "36",
      "48",
      "60"
    ],
    correctAnswer: 3,
    explanation: "The MGF $M_X(t) = (1 - \\theta t)^{-\\alpha}$ is the moment generating function of a Gamma distribution with parameters $\\theta = 2$ and $\\alpha = 3$.\nFor a Gamma distribution, the mean is $E[X] = \\alpha\\theta = 3(2) = 6$, and the variance is $\\text{Var}(X) = \\alpha\\theta^2 = 3(2^2) = 12$.\nWe know that $\\text{Var}(X) = E[X^2] - E[X]^2$.\nSo, $E[X^2] = \\text{Var}(X) + E[X]^2 = 12 + 6^2 = 12 + 36 = 48$.\nAlternatively, you can evaluate the second derivative of the MGF at $t=0$: $M_X''(0) = 48$."
  },
  {
    id: "52",
    topic: "Covariance, Correlation, MGFs, and Expected value of functions E[g(X,Y)]",
    text: "Let $X$ and $Y$ be independent uniform random variables on the interval $(0, 2)$. Calculate the expected value of $|X - Y|$.",
    options: [
      "1/3",
      "1/2",
      "2/3",
      "3/4",
      "1"
    ],
    correctAnswer: 2,
    explanation: "Since $X$ and $Y$ are independent and uniform on $(0, 2)$, their joint density is $f(x,y) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$ for $0 < x < 2$ and $0 < y < 2$.\n$E[|X-Y|] = \\int_0^2 \\int_0^2 |x-y| \\frac{1}{4} dy dx$.\nDue to symmetry, we can calculate the integral over the region where $x > y$ and multiply by 2:\n$E[|X-Y|] = 2 \\int_0^2 \\int_0^x (x-y) \\frac{1}{4} dy dx = \\frac{1}{2} \\int_0^2 \\left[xy - \\frac{y^2}{2}\\right]_0^x dx$\n$= \\frac{1}{2} \\int_0^2 \\left(x^2 - \\frac{x^2}{2}\\right) dx = \\frac{1}{2} \\int_0^2 \\frac{x^2}{2} dx = \\frac{1}{4} \\left[\\frac{x^3}{3}\\right]_0^2 = \\frac{1}{4} \\left(\\frac{8}{3}\\right) = \\frac{2}{3}$."
  },
  {
    id: "53",
    topic: "Covariance, Correlation, MGFs, and Expected value of functions E[g(X,Y)]",
    text: "An urn contains 5 red balls, 4 green balls, and 3 blue balls. 4 balls are drawn at random without replacement. Let $X$ be the number of red balls drawn, and $Y$ be the number of green balls drawn. Calculate the covariance of $X$ and $Y$, $\\text{Cov}(X,Y)$.",
    options: [
      "-45/99",
      "-40/99",
      "-35/99",
      "-30/99",
      "0"
    ],
    correctAnswer: 1,
    explanation: "This follows a multivariate hypergeometric distribution. The total number of balls is $N = 12$, and we draw $n = 4$ balls.\nThe number of red balls is $K_1 = 5$, and green balls is $K_2 = 4$.\nThe covariance between two components of a multivariate hypergeometric distribution is given by the formula:\n$\\text{Cov}(X, Y) = -n \\left(\\frac{K_1}{N}\\right) \\left(\\frac{K_2}{N}\\right) \\left(\\frac{N-n}{N-1}\\right)$\nSubstitute the given values:\n$\\text{Cov}(X, Y) = -4 \\left(\\frac{5}{12}\\right) \\left(\\frac{4}{12}\\right) \\left(\\frac{12-4}{12-1}\\right)$\n$= -4 \\left(\\frac{5}{12}\\right) \\left(\\frac{1}{3}\\right) \\left(\\frac{8}{11}\\right) = -\\left(\\frac{20}{36}\\right) \\left(\\frac{8}{11}\\right) = -\\left(\\frac{5}{9}\\right) \\left(\\frac{8}{11}\\right) = -\\frac{40}{99}$."
  },
  {
    id: "54",
    topic: "Covariance, Correlation, MGFs, and Expected value of functions E[g(X,Y)]",
    text: "The joint moment generating function of $X$ and $Y$ is $M_{X,Y}(s,t) = (1 - 2s - 3t)^{-4}$ for $2s + 3t < 1$. Calculate $\\text{Cov}(X,Y)$.",
    options: [
      "12",
      "16",
      "20",
      "24",
      "28"
    ],
    correctAnswer: 3,
    explanation: "We find the covariance using the partial derivatives of the joint MGF evaluated at $s=0, t=0$.\n$E[X] = \\frac{\\partial M}{\\partial s}(0,0) = -4(1 - 2s - 3t)^{-5}(-2) \\big|_{0,0} = 8(1)^{-5} = 8$.\n$E[Y] = \\frac{\\partial M}{\\partial t}(0,0) = -4(1 - 2s - 3t)^{-5}(-3) \\big|_{0,0} = 12(1)^{-5} = 12$.\n$E[XY] = \\frac{\\partial^2 M}{\\partial s \\partial t}(0,0) = \\frac{\\partial}{\\partial t} \\left[ 8(1 - 2s - 3t)^{-5} \\right] \\big|_{0,0} = 8(-5)(1 - 2s - 3t)^{-6}(-3) \\big|_{0,0} = 120(1)^{-6} = 120$.\nTherefore, $\\text{Cov}(X,Y) = E[XY] - E[X]E[Y] = 120 - (8)(12) = 120 - 96 = 24$."
  },
  {
    id: "55",
    topic: "Covariance, Correlation, MGFs, and Expected value of functions E[g(X,Y)]",
    text: "Let $X$ and $Y$ be independent standard normal random variables. Calculate the moment generating function of $Z = X^2 + Y^2$, evaluated at $t = 1/4$.",
    options: [
      "1.5",
      "2.0",
      "2.5",
      "3.0",
      "4.0"
    ],
    correctAnswer: 1,
    explanation: "Since $X$ and $Y$ are independent standard normal variables, $X^2$ and $Y^2$ are independent Chi-square distributions with 1 degree of freedom.\nThe sum $Z = X^2 + Y^2$ follows a Chi-square distribution with $1 + 1 = 2$ degrees of freedom. A Chi-square distribution with 2 degrees of freedom is equivalent to an Exponential distribution with mean 2.\nThe MGF of a Chi-square distribution with $k$ degrees of freedom is $M(t) = (1 - 2t)^{-k/2}$. For $k=2$, $M_Z(t) = (1 - 2t)^{-1}$.\nEvaluating at $t = 1/4$:\n$M_Z(1/4) = (1 - 2(1/4))^{-1} = (1 - 1/2)^{-1} = (1/2)^{-1} = 2.0$."
  },
  {
    id: "56",
    topic: "Covariance, Correlation, MGFs, and Expected value of functions E[g(X,Y)]",
    text: "The random variables $X$ and $Y$ have a joint density function $f(x,y) = 2$ for $0 < y < x < 1$. Calculate the correlation coefficient of $X$ and $Y$.",
    options: [
      "1/36",
      "1/18",
      "1/4",
      "1/3",
      "1/2"
    ],
    correctAnswer: 4,
    explanation: "First, find the expected values $E[X]$ and $E[Y]$:\n$E[X] = \\int_0^1 \\int_0^x 2x dy dx = \\int_0^1 2x^2 dx = \\frac{2}{3}$.\n$E[Y] = \\int_0^1 \\int_y^1 2y dx dy = \\int_0^1 2y(1-y) dy = \\left[y^2 - \\frac{2y^3}{3}\\right]_0^1 = 1 - \\frac{2}{3} = \\frac{1}{3}$.\nNow, find the second moments:\n$E[X^2] = \\int_0^1 \\int_0^x 2x^2 dy dx = \\int_0^1 2x^3 dx = \\frac{2}{4} = \\frac{1}{2}$.\n$E[Y^2] = \\int_0^1 \\int_y^1 2y^2 dx dy = \\int_0^1 2y^2(1-y) dy = \\left[\\frac{2y^3}{3} - \\frac{2y^4}{4}\\right]_0^1 = \\frac{2}{3} - \\frac{1}{2} = \\frac{1}{6}$.\n$\\text{Var}(X) = \\frac{1}{2} - (\\frac{2}{3})^2 = \\frac{1}{18}$.\n$\\text{Var}(Y) = \\frac{1}{6} - (\\frac{1}{3})^2 = \\frac{1}{18}$.\nNext, $E[XY] = \\int_0^1 \\int_0^x 2xy dy dx = \\int_0^1 x[y^2]_0^x dx = \\int_0^1 x^3 dx = \\frac{1}{4}$.\n$\\text{Cov}(X,Y) = \\frac{1}{4} - (\\frac{2}{3})(\\frac{1}{3}) = \\frac{1}{4} - \\frac{2}{9} = \\frac{1}{36}$.\n$\\text{Corr}(X,Y) = \\frac{1/36}{\\sqrt{(1/18)(1/18)}} = \\frac{1/36}{1/18} = \\frac{1}{2}$."
  },
  {
    id: "57",
    topic: "Covariance, Correlation, MGFs, and Expected value of functions E[g(X,Y)]",
    text: "A machine has two components with lifetimes $X$ and $Y$ (in years) that are independent and exponentially distributed with means 2 and 3, respectively. The machine fails when the first component fails. A reward function $R(X,Y) = \\min(X, Y)$ is paid out. Calculate the expected value of the reward, $E[\\min(X, Y)]$.",
    options: [
      "0.83",
      "1.20",
      "1.50",
      "2.50",
      "5.00"
    ],
    correctAnswer: 1,
    explanation: "The minimum of independent exponential random variables is also exponentially distributed. The rate of the minimum is the sum of the rates of the individual variables.\nThe rate of $X$ is $\\lambda_X = 1/2$. The rate of $Y$ is $\\lambda_Y = 1/3$.\nLet $Z = \\min(X, Y)$. Then $Z \\sim \\text{Exponential}(\\lambda_Z)$ where $\\lambda_Z = \\lambda_X + \\lambda_Y = 1/2 + 1/3 = 5/6$.\nThe expected value of an exponential random variable is the reciprocal of its rate.\n$E[\\min(X, Y)] = E[Z] = \\frac{1}{\\lambda_Z} = \\frac{1}{5/6} = \\frac{6}{5} = 1.20$."
  },
  {
    id: "58",
    topic: "Covariance, Correlation, MGFs, and Expected value of functions E[g(X,Y)]",
    text: "Let $X$ and $Y$ be independent random variables where $X$ follows a Poisson distribution with mean 2, and $Y$ follows a Poisson distribution with mean 3. Calculate the moment generating function of $Z = 2X - Y$ evaluated at $t = \\ln(2)$.",
    options: [
      "e^{2.5}",
      "e^{3.0}",
      "e^{3.5}",
      "e^{4.0}",
      "e^{4.5}"
    ],
    correctAnswer: 4,
    explanation: "The MGF of a Poisson random variable with mean $\\lambda$ is $M(t) = e^{\\lambda(e^t - 1)}$.\nSo, $M_X(t) = e^{2(e^t - 1)}$ and $M_Y(t) = e^{3(e^t - 1)}$.\nBy properties of MGFs for independent variables, the MGF of $Z = 2X - Y$ is:\n$M_Z(t) = E[e^{t(2X - Y)}] = E[e^{2tX}]E[e^{-tY}] = M_X(2t) M_Y(-t)$.\nWe need to evaluate this at $t = \\ln(2)$:\n$2t = 2\\ln(2) = \\ln(4)$, so $e^{2t} = 4$.\n$-t = -\\ln(2) = \\ln(1/2)$, so $e^{-t} = 1/2$.\n$M_X(2\\ln 2) = e^{2(4 - 1)} = e^6$.\n$M_Y(-\\ln 2) = e^{3(1/2 - 1)} = e^{-1.5}$.\n$M_Z(\\ln 2) = e^6 \\times e^{-1.5} = e^{4.5}$."
  },
  {
    id: "59",
    topic: "Covariance, Correlation, MGFs, and Expected value of functions E[g(X,Y)]",
    text: "Let $X_1, X_2, X_3$ be independent random variables, each with variance 4. Let $Y = X_1 + 2X_2 + 3X_3$ and $Z = 3X_1 + 2X_2 + X_3$. Calculate $\\text{Cov}(Y, Z)$.",
    options: [
      "24",
      "32",
      "40",
      "48",
      "56"
    ],
    correctAnswer: 2,
    explanation: "Using the bilinear properties of covariance, $\\text{Cov}(Y, Z) = \\text{Cov}(X_1 + 2X_2 + 3X_3, 3X_1 + 2X_2 + X_3)$.\nSince $X_1, X_2, X_3$ are independent, $\\text{Cov}(X_i, X_j) = 0$ for $i \\neq j$.\nTherefore, the cross-terms vanish, and we only keep terms of the form $\\text{Cov}(a_i X_i, b_i X_i) = a_i b_i \\text{Var}(X_i)$:\n$\\text{Cov}(Y, Z) = (1)(3)\\text{Var}(X_1) + (2)(2)\\text{Var}(X_2) + (3)(1)\\text{Var}(X_3)$.\nGiven $\\text{Var}(X_i) = 4$ for all $i$:\n$\\text{Cov}(Y, Z) = 3(4) + 4(4) + 3(4) = 12 + 16 + 12 = 40$."
  },
  {
    id: "60",
    topic: "Covariance, Correlation, MGFs, and Expected value of functions E[g(X,Y)]",
    text: "A bivariate distribution has joint probability density function $f(x,y) = \\frac{1}{8} x^2 e^{-x} y e^{-y/2}$ for $x > 0$ and $y > 0$. Let $g(X,Y) = \\frac{X^2}{Y}$. Calculate the expected value $E[g(X,Y)]$.",
    options: [
      "2",
      "3",
      "6",
      "12",
      "18"
    ],
    correctAnswer: 2,
    explanation: "The joint PDF can be factored into $f(x,y) = (\\frac{1}{2} x^2 e^{-x}) \\times (\\frac{1}{4} y e^{-y/2})$, indicating that $X$ and $Y$ are independent.\n$X \\sim \\text{Gamma}(\\alpha=3, \\theta=1)$ and $Y \\sim \\text{Gamma}(\\alpha=2, \\theta=2)$.\nSince they are independent, $E[X^2/Y] = E[X^2] E[1/Y]$.\nFor $X$: $E[X] = \\alpha\\theta = 3(1) = 3$, $\\text{Var}(X) = \\alpha\\theta^2 = 3(1) = 3$. So $E[X^2] = \\text{Var}(X) + E[X]^2 = 3 + 3^2 = 12$.\nFor $Y$: $E[1/Y] = \\int_0^\\infty \\frac{1}{y} (\\frac{1}{4} y e^{-y/2}) dy = \\frac{1}{4} \\int_0^\\infty e^{-y/2} dy = \\frac{1}{4} (2) = 1/2$.\nTherefore, $E[X^2/Y] = 12 \\times \\frac{1}{2} = 6$."
  }
]);
