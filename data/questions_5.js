window.appData.questions = window.appData.questions.concat([
  {
    "id": "q5_1",
    "topic": "Transformations of Variables (Jacobians)",
    "text": "Let $X$ and $Y$ be independent exponential random variables, each with mean 1. Let $U = X + Y$ and $V = \\frac{X}{X + Y}$. Determine the marginal probability density function of $V$, $f_V(v)$, for $0 < v < 1$.",
    "options": [
      "$1$",
      "$v$",
      "$2v$",
      "$e^{-v}$",
      "$1 - v$"
    ],
    "correctAnswer": 0,
    "explanation": "Step 1: The joint PDF of $X$ and $Y$ is $f_{X,Y}(x,y) = e^{-x}e^{-y} = e^{-(x+y)}$ for $x>0, y>0$.\nStep 2: Find the inverse transformations. We have $u = x+y$ and $v = \\frac{x}{x+y} = \\frac{x}{u}$. Thus, $x = uv$ and $y = u(1-v)$.\nStep 3: Calculate the Jacobian of the transformation. $J = \\det \\begin{pmatrix} \\frac{\\partial x}{\\partial u} & \\frac{\\partial x}{\\partial v} \\\\ \\frac{\\partial y}{\\partial u} & \\frac{\\partial y}{\\partial v} \\end{pmatrix} = \\det \\begin{pmatrix} v & u \\\\ 1-v & -u \\end{pmatrix} = -uv - u(1-v) = -u$.\nThe absolute value is $|J| = u$.\nStep 4: The joint PDF of $U$ and $V$ is $f_{U,V}(u,v) = f_{X,Y}(uv, u(1-v))|J| = e^{-u}u$ for $u>0$ and $0<v<1$.\nStep 5: Integrate out $u$ to find the marginal PDF of $V$. $f_V(v) = \\int_{0}^{\\infty} u e^{-u} du$. Using integration by parts (or recognizing the gamma function $\\Gamma(2)$), this integral equals 1. Thus, $f_V(v) = 1$ for $0 < v < 1$."
  },
  {
    "id": "q5_2",
    "topic": "Order Statistics",
    "text": "Let $X_1, X_2, X_3, X_4, X_5$ be a random sample of size 5 from an exponential distribution with mean 2. Calculate the expected value of the maximum of this sample, $E[X_{(5)}]$.",
    "options": [
      "$2.00$",
      "$4.57$",
      "$5.00$",
      "$10.00$",
      "$13.70$"
    ],
    "correctAnswer": 1,
    "explanation": "Step 1: The maximum of $n$ independent exponential random variables with mean $\\theta$ (rate $\\lambda = 1/\\theta$) has an expected value given by $\\sum_{i=1}^{n} \\frac{\\theta}{i}$.\nStep 2: Here, $n = 5$ and $\\theta = 2$.\nStep 3: Calculate the sum: $E[X_{(5)}] = 2 \\left( 1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\frac{1}{5} \\right)$.\nStep 4: Evaluate the terms: $1 + 0.5 + 0.3333 + 0.25 + 0.2 = 2.2833$.\nStep 5: Multiply by the mean: $E[X_{(5)}] = 2 \\times 2.2833 = 4.5667$. This rounds to $4.57$."
  },
  {
    "id": "q5_3",
    "topic": "Order Statistics",
    "text": "Let $X_1, X_2, X_3$ be independent random variables uniformly distributed on the interval $(0, 10)$. Let $Y$ be the median of this sample. Calculate the variance of $Y$.",
    "options": [
      "$2.5$",
      "$5.0$",
      "$7.5$",
      "$10.0$",
      "$12.5$"
    ],
    "correctAnswer": 1,
    "explanation": "Step 1: The median of a sample of size $n=3$ is the 2nd order statistic, $X_{(2)}$.\nStep 2: The PDF of the $k$-th order statistic for a Uniform$(0, L)$ distribution is $f(y) = \\frac{n!}{(k-1)!(n-k)!} \\frac{1}{L} \\left(\\frac{y}{L}\\right)^{k-1} \\left(1 - \\frac{y}{L}\\right)^{n-k}$.\nStep 3: Substitute $n=3, k=2, L=10$ to find the PDF of $Y = X_{(2)}$: $f(y) = \\frac{6}{1 \\cdot 1} \\frac{1}{10} \\left(\\frac{y}{10}\\right)^1 \\left(1 - \\frac{y}{10}\\right)^1 = \\frac{6}{1000} y(10-y)$ for $0 < y < 10$.\nStep 4: Recognize that $Y/10$ follows a Beta distribution with $\\alpha = 2, \\beta = 2$. For $B \\sim \\text{Beta}(2,2)$, $Var(B) = \\frac{\\alpha\\beta}{(\\alpha+\\beta)^2(\\alpha+\\beta+1)} = \\frac{4}{16 \\times 5} = \\frac{1}{20}$.\nStep 5: Use properties of variance: $Var(Y) = Var(10B) = 100 Var(B) = 100 \\left(\\frac{1}{20}\\right) = 5$."
  },
  {
    "id": "q5_4",
    "topic": "Transformations of Variables (Single Variable)",
    "text": "Let $X$ be a random variable with probability density function $f_X(x) = \\frac{2x}{9}$ for $0 < x < 3$. Let $Y = X^2$. Calculate the expected value of $Y^2$.",
    "options": [
      "$9$",
      "$18$",
      "$27$",
      "$36$",
      "$45$"
    ],
    "correctAnswer": 2,
    "explanation": "Step 1: We want to find $E[Y^2]$. Since $Y = X^2$, this is equivalent to finding $E[(X^2)^2] = E[X^4]$.\nStep 2: Using the Law of the Unconscious Statistician (LOTUS), $E[X^4] = \\int_{0}^{3} x^4 f_X(x) dx$.\nStep 3: Substitute the PDF of $X$: $E[X^4] = \\int_{0}^{3} x^4 \\left(\\frac{2x}{9}\\right) dx = \\int_{0}^{3} \\frac{2x^5}{9} dx$.\nStep 4: Integrate: $\\left[ \\frac{2x^6}{54} \\right]_0^3 = \\frac{2(3^6)}{54}$.\nStep 5: Simplify: $3^6 = 729$. So $\\frac{2(729)}{54} = \\frac{1458}{54} = 27$.\nAlternatively, without LOTUS, we could find the PDF of $Y$ first: $f_Y(y) = f_X(\\sqrt{y})|\\frac{dx}{dy}| = \\frac{2\\sqrt{y}}{9} \\frac{1}{2\\sqrt{y}} = \\frac{1}{9}$ for $0 < y < 9$. Then $E[Y^2] = \\int_{0}^{9} y^2 \\frac{1}{9} dy = \\left[ \\frac{y^3}{27} \\right]_0^9 = \\frac{729}{27} = 27$."
  },
  {
    "id": "q5_5",
    "topic": "Transformations of Variables (Jacobians)",
    "text": "Let $X$ and $Y$ be independent continuous random variables with joint probability density function $f_{X,Y}(x,y) = 2$ for $0 < x < y < 1$. Let $U = \\frac{X}{Y}$ and $V = Y$. Determine the marginal density function of $U$, $f_U(u)$.",
    "options": [
      "$1$ for $0 < u < 1$",
      "$2u$ for $0 < u < 1$",
      "$2(1-u)$ for $0 < u < 1$",
      "$3u^2$ for $0 < u < 1$",
      "$1/2$ for $0 < u < 2$"
    ],
    "correctAnswer": 0,
    "explanation": "Step 1: Set up the transformation equations: $u = \\frac{x}{y}$ and $v = y$. The inverse transformations are $x = uv$ and $y = v$.\nStep 2: Calculate the Jacobian determinant: $J = \\det \\begin{pmatrix} \\frac{\\partial x}{\\partial u} & \\frac{\\partial x}{\\partial v} \\\\ \\frac{\\partial y}{\\partial u} & \\frac{\\partial y}{\\partial v} \\end{pmatrix} = \\det \\begin{pmatrix} v & u \\\\ 0 & 1 \\end{pmatrix} = v$. The absolute value is $|J| = v$ (since $v = y > 0$).\nStep 3: Determine the joint PDF of $U$ and $V$: $f_{U,V}(u,v) = f_{X,Y}(uv, v)|J| = 2v$.\nStep 4: Determine the support region. The original bounds are $0 < x < y < 1$. Substituting the inverses gives $0 < uv < v < 1$. Since $v > 0$, dividing by $v$ gives $0 < u < 1$. Also, $v < 1$. Thus, the region is $0 < u < 1$ and $0 < v < 1$.\nStep 5: Find the marginal PDF of $U$ by integrating $V$ out: $f_U(u) = \\int_{0}^{1} 2v dv = \\left[v^2\\right]_0^1 = 1$. This means $U$ follows a Uniform$(0, 1)$ distribution."
  },
  {
    "id": "q5_6",
    "topic": "Order Statistics",
    "text": "Let $X_1, X_2, X_3$ be a random sample of size 3 from a distribution with probability density function $f(x) = 2x e^{-x^2}$ for $x > 0$. Calculate the probability that the minimum of the sample is greater than 1.",
    "options": [
      "$e^{-1}$",
      "$e^{-2}$",
      "$e^{-3}$",
      "$1 - e^{-3}$",
      "$3e^{-1}$"
    ],
    "correctAnswer": 2,
    "explanation": "Step 1: The probability that the minimum of a sample of size $n$, $X_{(1)}$, is greater than a value $x$ is given by $P(X_{(1)} > x) = [P(X > x)]^n$.\nStep 2: Find $P(X > 1)$ for a single observation. $P(X > 1) = \\int_{1}^{\\infty} 2x e^{-x^2} dx$.\nStep 3: Use substitution: let $u = x^2$, then $du = 2x dx$. The integral becomes $\\int_{1}^{\\infty} e^{-u} du = \\left[-e^{-u}\\right]_1^\\infty = e^{-1}$.\nStep 4: Now find the probability for the minimum of the sample of size $n=3$: $P(X_{(1)} > 1) = [P(X > 1)]^3 = (e^{-1})^3 = e^{-3}$."
  },
  {
    "id": "q5_7",
    "topic": "Transformations of Variables (Single Variable)",
    "text": "Let $X$ have a Pareto distribution with parameters $\\alpha = 3$ and $\\theta = 10$. The density is $f_X(x) = \\frac{3(10^3)}{(x+10)^4}$ for $x > 0$. Let $Y = \\ln\\left(1 + \\frac{X}{10}\\right)$. Find the probability density function of $Y$, $f_Y(y)$.",
    "options": [
      "$3 e^{-3y}$",
      "$\\frac{1}{3} e^{-y/3}$",
      "$10 e^{-10y}$",
      "$y e^{-y}$",
      "$\\frac{3}{(y+10)^4}$"
    ],
    "correctAnswer": 0,
    "explanation": "Step 1: Set up the inverse transformation. $y = \\ln\\left(1 + \\frac{x}{10}\\right) \\implies e^y = 1 + \\frac{x}{10} \\implies x = 10(e^y - 1)$.\nStep 2: Find the derivative of the inverse transformation: $\\frac{dx}{dy} = 10e^y$. The absolute value is $10e^y$.\nStep 3: Apply the transformation formula: $f_Y(y) = f_X(10(e^y - 1)) \\left| \\frac{dx}{dy} \\right|$.\nStep 4: Substitute into the PDF of $X$: $f_Y(y) = \\frac{3(10^3)}{(10(e^y - 1) + 10)^4} (10e^y) = \\frac{3(10^3)}{(10e^y)^4} (10e^y)$.\nStep 5: Simplify: $\\frac{3(10^3)}{10^4 e^{4y}} (10e^y) = \\frac{3(10^4)}{10^4 e^{4y}} e^y = \\frac{3}{e^{3y}} = 3e^{-3y}$ for $y > 0$.\nThis shows that $Y$ follows an Exponential distribution with a mean of $1/3$."
  },
  {
    "id": "q5_8",
    "topic": "Order Statistics",
    "text": "Let $X_1, X_2, X_3, X_4$ be a random sample from a Uniform distribution on the interval $(0, 1)$. Find the expected value of the 3rd order statistic, $E[X_{(3)}]$.",
    "options": [
      "$0.40$",
      "$0.50$",
      "$0.60$",
      "$0.75$",
      "$0.80$"
    ],
    "correctAnswer": 2,
    "explanation": "Step 1: The order statistics of a standard Uniform$(0, 1)$ sample follow a Beta distribution. Specifically, the $k$-th order statistic from a sample of size $n$, $X_{(k)}$, follows a Beta$(k, n-k+1)$ distribution.\nStep 2: The expected value of a Beta$(\\alpha, \\beta)$ distribution is $\\frac{\\alpha}{\\alpha + \\beta}$.\nStep 3: For the $k$-th order statistic, $\\alpha = k$ and $\\beta = n - k + 1$. Therefore, the expected value is $\\frac{k}{k + (n - k + 1)} = \\frac{k}{n+1}$.\nStep 4: In this problem, $n = 4$ and $k = 3$. Substitute these values into the formula: $E[X_{(3)}] = \\frac{3}{4+1} = \\frac{3}{5}$.\nStep 5: $\\frac{3}{5} = 0.60$."
  },
  {
    "id": "q5_9",
    "topic": "Transformations of Variables (Jacobians)",
    "text": "Let $X$ and $Y$ be independent normal random variables, each with mean 0 and variance $\\sigma^2$. Let $R = \\sqrt{X^2+Y^2}$ and $\\Theta = \\arctan(Y/X)$ (where $-\\pi/2 < \\Theta < \\pi/2$). What is the probability density function of $R$, $f_R(r)$ for $r>0$?",
    "options": [
      "$\\frac{r^2}{\\sigma^2} e^{-r^2/(2\\sigma^2)}$",
      "$\\frac{r}{\\sigma^2} e^{-r^2/(2\\sigma^2)}$",
      "$\\frac{1}{\\sqrt{2\\pi}\\sigma} e^{-r^2/(2\\sigma^2)}$",
      "$\\frac{1}{\\sigma^2} e^{-r^2/\\sigma^2}$",
      "$\\frac{r}{2\\pi\\sigma^2} e^{-r^2/(2\\sigma^2)}$"
    ],
    "correctAnswer": 1,
    "explanation": "Step 1: The joint PDF of $X$ and $Y$ is $f_{X,Y}(x,y) = \\frac{1}{\\sqrt{2\\pi}\\sigma} e^{-x^2/(2\\sigma^2)} \\cdot \\frac{1}{\\sqrt{2\\pi}\\sigma} e^{-y^2/(2\\sigma^2)} = \\frac{1}{2\\pi\\sigma^2} e^{-(x^2+y^2)/(2\\sigma^2)}$.\nStep 2: We use the polar coordinate transformation: $x = r \\cos\\theta$ and $y = r \\sin\\theta$. The Jacobian of this transformation is $J = r$. The absolute value is $|J| = r$.\nStep 3: The joint PDF of $R$ and $\\Theta$ is $f_{R,\\Theta}(r,\\theta) = f_{X,Y}(r\\cos\\theta, r\\sin\\theta)|J| = \\frac{r}{2\\pi\\sigma^2} e^{-(r^2\\cos^2\\theta+r^2\\sin^2\\theta)/(2\\sigma^2)} = \\frac{r}{2\\pi\\sigma^2} e^{-r^2/(2\\sigma^2)}$ for $r>0$ and $0 \\le \\theta < 2\\pi$.\nStep 4: Find the marginal PDF of $R$ by integrating out $\\theta$: $f_R(r) = \\int_{0}^{2\\pi} \\frac{r}{2\\pi\\sigma^2} e^{-r^2/(2\\sigma^2)} d\\theta$.\nStep 5: Since the integrand does not depend on $\\theta$, the integral is simply $2\\pi$ times the integrand: $f_R(r) = 2\\pi \\left( \\frac{r}{2\\pi\\sigma^2} e^{-r^2/(2\\sigma^2)} \\right) = \\frac{r}{\\sigma^2} e^{-r^2/(2\\sigma^2)}$ for $r > 0$. This is the Rayleigh distribution."
  },
  {
    "id": "q5_10",
    "topic": "Order Statistics",
    "text": "Let $X_1, X_2, X_3$ be a random sample from a uniform distribution on $(0, 1)$. Determine the expected value of the sample range, $E[X_{(3)} - X_{(1)}]$.",
    "options": [
      "$1/4$",
      "$1/3$",
      "$1/2$",
      "$2/3$",
      "$3/4$"
    ],
    "correctAnswer": 2,
    "explanation": "Step 1: The sample range is defined as the difference between the maximum and minimum order statistics: $R = X_{(n)} - X_{(1)}$.\nStep 2: By the linearity of expectation, $E[R] = E[X_{(3)}] - E[X_{(1)}]$.\nStep 3: We know that the expected value of the $k$-th order statistic from a Uniform$(0, 1)$ distribution is $E[X_{(k)}] = \\frac{k}{n+1}$.\nStep 4: For $n=3$, $E[X_{(3)}] = \\frac{3}{3+1} = \\frac{3}{4}$.\nStep 5: For $n=3$, $E[X_{(1)}] = \\frac{1}{3+1} = \\frac{1}{4}$.\nStep 6: Therefore, $E[X_{(3)} - X_{(1)}] = \\frac{3}{4} - \\frac{1}{4} = \\frac{2}{4} = \\frac{1}{2}$."
  },
  {
    "id": "q5_11",
    "topic": "Transformations of Variables (Jacobians)",
    "text": "Let $X$ and $Y$ be independent exponential random variables, each with mean 1. Let $U = X - Y$. Determine the probability density function of $U$, $f_U(u)$, for all real numbers $u$.",
    "options": [
      "$e^{-u}$ for $u > 0$",
      "$\\frac{1}{2}e^{-|u|}$ for $-\\infty < u < \\infty$",
      "$e^{-|u|}$ for $-\\infty < u < \\infty$",
      "$\\frac{1}{2}e^{-u/2}$ for $u > 0$",
      "$\\frac{1}{4}e^{-|u|/2}$ for $-\\infty < u < \\infty$"
    ],
    "correctAnswer": 1,
    "explanation": "Step 1: The joint PDF is $f_{X,Y}(x,y) = e^{-x}e^{-y} = e^{-(x+y)}$ for $x > 0, y > 0$.\nStep 2: Set up the transformation $U = X - Y$ and introduce an auxiliary variable $V = Y$. The inverse transformations are $X = U + V$ and $Y = V$.\nStep 3: Calculate the Jacobian: $J = \\det \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix} = 1$. So $|J| = 1$.\nStep 4: The joint PDF is $f_{U,V}(u,v) = e^{-(u+v+v)} \\cdot 1 = e^{-(u+2v)}$. The support requires $x > 0 \\implies u+v > 0 \\implies v > -u$, and $y > 0 \\implies v > 0$. Thus, $v > \\max(0, -u)$.\nStep 5: To find the marginal density $f_U(u)$, integrate out $V$. If $u \\ge 0$, then $\\max(0, -u) = 0$, so $f_U(u) = \\int_{0}^{\\infty} e^{-u}e^{-2v} dv = e^{-u} \\left[ \\frac{-1}{2} e^{-2v} \\right]_0^\\infty = \\frac{1}{2} e^{-u}$.\nStep 6: If $u < 0$, then $\\max(0, -u) = -u$, so $f_U(u) = \\int_{-u}^{\\infty} e^{-u}e^{-2v} dv = e^{-u} \\left[ \\frac{-1}{2} e^{-2v} \\right]_{-u}^\\infty = e^{-u} (\\frac{1}{2} e^{2u}) = \\frac{1}{2} e^{u}$.\nCombining both cases gives a Laplace distribution: $f_U(u) = \\frac{1}{2}e^{-|u|}$ for $-\\infty < u < \\infty$."
  },
  {
    "id": "q5_12",
    "topic": "Transformations of Variables (Jacobians)",
    "text": "Let $X$ and $Y$ be independent random variables, both uniformly distributed on $(0, 1)$. Find the probability density function of $W = XY$ for $0 < w < 1$.",
    "options": [
      "$1$",
      "$2w$",
      "$-\\ln(w)$",
      "$w \\ln(w)$",
      "$1 - w$"
    ],
    "correctAnswer": 2,
    "explanation": "Step 1: The joint PDF is $f_{X,Y}(x,y) = 1$ for $0 < x < 1$ and $0 < y < 1$.\nStep 2: Define $W = XY$ and $V = Y$. The inverse transformations are $x = \\frac{w}{v}$ and $y = v$.\nStep 3: The Jacobian of the inverse transformation is $J = \\det \\begin{pmatrix} \\frac{1}{v} & -\\frac{w}{v^2} \\\\ 0 & 1 \\end{pmatrix} = \\frac{1}{v}$. Since $v > 0$, $|J| = \\frac{1}{v}$.\nStep 4: The joint PDF of $W$ and $V$ is $f_{W,V}(w,v) = 1 \\cdot \\frac{1}{v} = \\frac{1}{v}$.\nStep 5: Determine the support region: $0 < x < 1 \\implies 0 < \\frac{w}{v} < 1 \\implies w < v$. Also $0 < y < 1 \\implies 0 < v < 1$. This implies the region is $0 < w < v < 1$.\nStep 6: Find the marginal density of $W$ by integrating out $V$: $f_W(w) = \\int_{w}^{1} \\frac{1}{v} dv = \\left[ \\ln(v) \\right]_w^1 = \\ln(1) - \\ln(w) = -\\ln(w)$."
  },
  {
    "id": "q5_13",
    "topic": "Order Statistics",
    "text": "An insurance company issues policies to 4 individuals of the same age. The future lifetimes of the individuals are mutually independent and exponentially distributed with a mean of 10 years. What is the expected time until the first death among these 4 individuals?",
    "options": [
      "$2.5$ years",
      "$4.0$ years",
      "$5.0$ years",
      "$10.0$ years",
      "$40.0$ years"
    ],
    "correctAnswer": 0,
    "explanation": "Step 1: Let the future lifetimes be $X_1, X_2, X_3, X_4$. They are independent exponentially distributed random variables with mean $\\theta = 10$ and rate parameter $\\lambda = 1/10$.\nStep 2: The time until the first death is the minimum of these lifetimes: $X_{(1)} = \\min(X_1, X_2, X_3, X_4)$.\nStep 3: A known property of the exponential distribution is that the minimum of $n$ independent exponential random variables with rate $\\lambda$ is also exponentially distributed, with a rate parameter equal to $n\\lambda$.\nStep 4: Here, the new rate parameter is $4 \\times (1/10) = 4/10 = 2/5$.\nStep 5: The expected value of this new exponential distribution is the reciprocal of its rate: $E[X_{(1)}] = \\frac{1}{2/5} = \\frac{5}{2} = 2.5$ years."
  },
  {
    "id": "q5_14",
    "topic": "Transformations of Variables (Single Variable)",
    "text": "Let $X$ be a normally distributed random variable with mean $\\mu = 2$ and variance $\\sigma^2 = 4$. Let $Y = e^X$. Find the probability density function of $Y$, $f_Y(y)$, for $y > 0$.",
    "options": [
      "$\\frac{1}{y\\sqrt{8\\pi}} \\exp\\left(-\\frac{(\\ln y - 2)^2}{8}\\right)$",
      "$\\frac{1}{\\sqrt{8\\pi}} \\exp\\left(-\\frac{(\\ln y - 2)^2}{8}\\right)$",
      "$\\frac{1}{y\\sqrt{8\\pi}} \\exp\\left(-\\frac{(y - 2)^2}{8}\\right)$",
      "$\\frac{1}{y\\sqrt{4\\pi}} \\exp\\left(-\\frac{(\\ln y - 2)^2}{4}\\right)$",
      "$\\frac{1}{y\\sqrt{2\\pi}} \\exp\\left(-\\frac{(\\ln y - 2)^2}{2}\\right)$"
    ],
    "correctAnswer": 0,
    "explanation": "Step 1: The PDF of a normal distribution with $\\mu=2, \\sigma^2=4$ (so $\\sigma=2$) is $f_X(x) = \\frac{1}{\\sqrt{2\\pi(4)}} \\exp\\left(-\\frac{(x-2)^2}{2(4)}\\right) = \\frac{1}{\\sqrt{8\\pi}} \\exp\\left(-\\frac{(x-2)^2}{8}\\right)$.\nStep 2: We are given the transformation $y = e^x$. The inverse transformation is $x = \\ln(y)$.\nStep 3: The derivative of the inverse transformation is $\\frac{dx}{dy} = \\frac{1}{y}$. Since $y > 0$, $|dx/dy| = 1/y$.\nStep 4: Use the transformation formula: $f_Y(y) = f_X(\\ln y) \\left|\\frac{dx}{dy}\\right|$.\nStep 5: Substitute $x = \\ln y$ into $f_X(x)$ and multiply by the absolute derivative: $f_Y(y) = \\frac{1}{\\sqrt{8\\pi}} \\exp\\left(-\\frac{(\\ln y - 2)^2}{8}\\right) \\cdot \\frac{1}{y} = \\frac{1}{y\\sqrt{8\\pi}} \\exp\\left(-\\frac{(\\ln y - 2)^2}{8}\\right)$ for $y > 0$. This is the PDF of a log-normal distribution."
  },
  {
    "id": "q5_15",
    "topic": "Transformations of Variables (Jacobians)",
    "text": "Let $X$ and $Y$ have a joint density function $f_{X,Y}(x,y) = c$ (where $c$ is a constant) over the region bounded by $y = x$, $y = 0$, and $x = 2$. Let $U = X - Y$ and $V = X + Y$. What is the value of the joint density function of $U$ and $V$, $f_{U,V}(u,v)$, over its region of support?",
    "options": [
      "$1/8$",
      "$1/4$",
      "$1/2$",
      "$1$",
      "$2$"
    ],
    "correctAnswer": 1,
    "explanation": "Step 1: First, find the constant $c$. The region is a triangle with vertices $(0,0)$, $(2,0)$, and $(2,2)$. Its area is $\\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 2 \\times 2 = 2$. For the joint PDF to integrate to 1, we must have $c \\times \\text{Area} = 1$, so $c = \\frac{1}{2}$. Thus, $f_{X,Y}(x,y) = \\frac{1}{2}$.\nStep 2: Set up the transformations: $u = x - y$ and $v = x + y$. Solving for $x$ and $y$, we get $x = \\frac{u+v}{2}$ and $y = \\frac{v-u}{2}$.\nStep 3: Calculate the Jacobian: $J = \\det \\begin{pmatrix} 1/2 & 1/2 \\\\ -1/2 & 1/2 \\end{pmatrix} = (1/2)(1/2) - (1/2)(-1/2) = 1/4 + 1/4 = 1/2$. The absolute value is $|J| = 1/2$.\nStep 4: Use the bivariate transformation formula: $f_{U,V}(u,v) = f_{X,Y}(x(u,v), y(u,v)) |J|$.\nStep 5: Substitute the values: $f_{U,V}(u,v) = \\left(\\frac{1}{2}\\right) \\left(\\frac{1}{2}\\right) = \\frac{1}{4}$."
  }
]);
