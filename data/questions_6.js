window.appData = window.appData || {};
window.appData.questions = window.appData.questions || [];
window.appData.questions = window.appData.questions.concat([
  {
    id: "q6_multi_1",
    topic: "Multivariate Distributions",
    text: "Let $X$ and $Y$ be continuous random variables with joint density function $f(x,y) = \\frac{2}{3}(x+2y)$ for $0 < x < 1$ and $0 < y < 1$, and 0 otherwise. Calculate the expected value of $X$.",
    options: ["0.444", "0.556", "0.667", "0.778", "0.889"],
    correctAnswer: 1,
    explanation: "First, find the marginal density $f_X(x) = \\int_0^1 \\frac{2}{3}(x+2y) dy = \\frac{2}{3}[xy + y^2]_0^1 = \\frac{2}{3}(x+1)$ for $0 < x < 1$.\\n$E[X] = \\int_0^1 x f_X(x) dx = \\int_0^1 \\frac{2}{3}(x^2+x) dx = \\frac{2}{3}[\\frac{x^3}{3} + \\frac{x^2}{2}]_0^1 = \\frac{2}{3}(\\frac{1}{3} + \\frac{1}{2}) = \\frac{2}{3}(\\frac{5}{6}) = \\frac{5}{9} \\approx 0.556$."
  },
  {
    id: "q6_trans_1",
    topic: "Transformations of Random Variables",
    text: "Let $X$ and $Y$ be independent exponential random variables, each with mean 2. Let $U = X + Y$ and $V = X / Y$. Calculate the joint density of $U$ and $V$ for $u > 0, v > 0$.",
    options: ["$f(u,v) = \\frac{u}{4(1+v)^2} e^{-u/2}$", "$f(u,v) = \\frac{u}{(1+v)^2} e^{-u/2}$", "$f(u,v) = \\frac{1}{4(1+v)} e^{-u/2}$", "$f(u,v) = \\frac{v}{4(1+u)^2} e^{-v/2}$", "$f(u,v) = \\frac{u}{2(1+v)^2} e^{-u/2}$"],
    correctAnswer: 0,
    explanation: "$X, Y$ are independent exponentials with mean 2, so their joint density is $f_{X,Y}(x,y) = \\frac{1}{4}e^{-(x+y)/2}$.\\nLet $u = x + y$ and $v = x / y$. Solving for $x$ and $y$ gives $x = \\frac{uv}{1+v}$ and $y = \\frac{u}{1+v}$.\\nThe Jacobian of the transformation from $(u,v)$ to $(x,y)$ is:\\n$J = \\det \\begin{pmatrix} \\frac{v}{1+v} & \\frac{u}{(1+v)^2} \\\\ \\frac{1}{1+v} & -\\frac{u}{(1+v)^2} \\end{pmatrix} = -\\frac{uv}{(1+v)^3} - \\frac{u}{(1+v)^3} = -\\frac{u(1+v)}{(1+v)^3} = -\\frac{u}{(1+v)^2}$.\\nThe absolute value of the Jacobian is $|J| = \\frac{u}{(1+v)^2}$.\\nTherefore, the joint density is $f_{U,V}(u,v) = f_{X,Y}(x(u,v), y(u,v)) |J| = \\frac{1}{4} e^{-u/2} \\frac{u}{(1+v)^2} = \\frac{u}{4(1+v)^2} e^{-u/2}$."
  },
  {
    id: "q6_multi_2",
    topic: "Multivariate Distributions",
    text: "A company insures two risks, $X$ and $Y$. The joint probability density function of $X$ and $Y$ is $f(x,y) = x + y$ for $0 < x < 1$ and $0 < y < 1$, and 0 otherwise. Calculate the covariance of $X$ and $Y$.",
    options: ["-0.018", "-0.014", "-0.007", "0.000", "0.007"],
    correctAnswer: 2,
    explanation: "$E[X] = \\int_0^1 \\int_0^1 x(x+y) dx dy = \\int_0^1 (\\frac{1}{3} + \\frac{y}{2}) dy = \\frac{1}{3} + \\frac{1}{4} = \\frac{7}{12}$. By symmetry, $E[Y] = \\frac{7}{12}$.\\n$E[XY] = \\int_0^1 \\int_0^1 xy(x+y) dx dy = \\int_0^1 \\int_0^1 (x^2y + xy^2) dx dy = \\int_0^1 (\\frac{y}{3} + \\frac{y^2}{2}) dy = \\frac{1}{6} + \\frac{1}{6} = \\frac{1}{3}$.\\n$Cov(X,Y) = E[XY] - E[X]E[Y] = \\frac{1}{3} - (\\frac{7}{12})^2 = \\frac{1}{3} - \\frac{49}{144} = \\frac{48}{144} - \\frac{49}{144} = -\\frac{1}{144} \\approx -0.00694$."
  },
  {
    id: "q6_multi_3",
    topic: "Multivariate Distributions",
    text: "An actuary determines that the life length, $X$, and the size of the final medical bill, $Y$, of a patient follow a joint probability density function $f(x,y) = \\frac{x e^{-x}}{y^2}$ for $x > 0$ and $y > x$, and 0 otherwise. Calculate the conditional probability that a patient's final medical bill is greater than 3, given that the patient's life length is 1.",
    options: ["0.22", "0.33", "0.44", "0.55", "0.66"],
    correctAnswer: 1,
    explanation: "First, find the marginal density of $X$ at $X = 1$: $f_X(1) = \\int_1^{\\infty} \\frac{1 \\cdot e^{-1}}{y^2} dy = e^{-1} [-\\frac{1}{y}]_1^{\\infty} = e^{-1}$.\\nThe conditional density is $f_{Y|X}(y|1) = \\frac{f(1,y)}{f_X(1)} = \\frac{e^{-1}/y^2}{e^{-1}} = \\frac{1}{y^2}$ for $y > 1$.\\n$P(Y > 3 | X = 1) = \\int_3^{\\infty} \\frac{1}{y^2} dy = [-\\frac{1}{y}]_3^{\\infty} = \\frac{1}{3} \\approx 0.333$."
  },
  {
    id: "q6_multi_4",
    topic: "Multivariate Distributions",
    text: "A device contains three independent components, each with a time-to-failure exponentially distributed with a mean of 4 years. The device fails as soon as two of its components fail. Calculate the expected time until the device fails.",
    options: ["2.00", "2.67", "3.33", "4.00", "4.67"],
    correctAnswer: 2,
    explanation: "Let $X_1, X_2, X_3$ be the lifetimes, which are exponentially distributed with rate $\\lambda = 1/4$. We want $E[X_{(2)}]$.\\nThe time until the first failure $X_{(1)}$ is the minimum of three independent exponentials, which is exponential with rate $3\\lambda = 3/4$. So $E[X_{(1)}] = 4/3$.\\nBy the memoryless property, the time between the first and second failure is the minimum of the remaining two components, which is exponential with rate $2\\lambda = 2/4 = 1/2$. The expected value of this duration is 2.\\n$E[X_{(2)}] = E[X_{(1)}] + E[X_{(2)} - X_{(1)}] = \\frac{4}{3} + 2 = \\frac{10}{3} \\approx 3.33$."
  },
  {
    id: "q6_multi_5",
    topic: "Multivariate Distributions",
    text: "Let $X$ and $Y$ be jointly normal random variables with $\\mu_X = 5, \\sigma_X^2 = 4, \\mu_Y = 10, \\sigma_Y^2 = 9$, and correlation coefficient $\\rho = 0.5$. Calculate the variance of $2X - Y$.",
    options: ["13", "19", "25", "31", "37"],
    correctAnswer: 0,
    explanation: "$Var(2X - Y) = Var(2X) + Var(-Y) + 2Cov(2X, -Y) = 4Var(X) + Var(Y) - 4Cov(X,Y)$.\\nWe know $Var(X) = 4$ and $Var(Y) = 9$.\\n$Cov(X,Y) = \\rho \\sigma_X \\sigma_Y = 0.5 \\times 2 \\times 3 = 3$.\\n$Var(2X - Y) = 4(4) + 9 - 4(3) = 16 + 9 - 12 = 13$."
  },
  {
    id: "q6_trans_2",
    topic: "Transformations of Random Variables",
    text: "The amount of a claim, $X$, has a uniform distribution on the interval $(0, 100)$. A payout, $Y$, is defined by the transformation $Y = X^2 / 100$. Calculate the expected value of the payout $Y$.",
    options: ["25.00", "33.33", "50.00", "66.67", "100.00"],
    correctAnswer: 1,
    explanation: "$X \\sim U(0, 100)$, so $f_X(x) = 1/100$ for $0 < x < 100$.\\n$E[Y] = E[X^2 / 100] = \\frac{1}{100} E[X^2]$.\\n$E[X^2] = \\int_0^{100} x^2 \\frac{1}{100} dx = \\frac{1}{100} [\\frac{x^3}{3}]_0^{100} = \\frac{100^2}{3} = \\frac{10000}{3}$.\\n$E[Y] = \\frac{1}{100} \\times \\frac{10000}{3} = \\frac{100}{3} \\approx 33.33$."
  },
  {
    id: "q6_multi_6",
    topic: "Multivariate Distributions",
    text: "An insurance policy has two types of claims: auto ($X$) and home ($Y$). The joint probability density function is $f(x,y) = \\frac{1}{8}(x+y)$ for $0 < x < 2$ and $0 < y < 2$. Calculate the expected value of an auto claim given that the home claim is 1.",
    options: ["1.08", "1.17", "1.25", "1.33", "1.42"],
    correctAnswer: 1,
    explanation: "First, find the marginal density $f_Y(1)$: $f_Y(1) = \\int_0^2 \\frac{1}{8}(x+1) dx = \\frac{1}{8}[\\frac{x^2}{2} + x]_0^2 = \\frac{1}{8}(2 + 2) = \\frac{4}{8} = \\frac{1}{2}$.\\nThe conditional density is $f_{X|Y}(x|1) = \\frac{f(x,1)}{f_Y(1)} = \\frac{\\frac{1}{8}(x+1)}{\\frac{1}{2}} = \\frac{1}{4}(x+1)$ for $0 < x < 2$.\\n$E[X|Y=1] = \\int_0^2 x \\cdot \\frac{1}{4}(x+1) dx = \\frac{1}{4} \\int_0^2 (x^2+x) dx = \\frac{1}{4}[\\frac{x^3}{3} + \\frac{x^2}{2}]_0^2 = \\frac{1}{4}(\\frac{8}{3} + 2) = \\frac{1}{4}(\\frac{14}{3}) = \\frac{14}{12} = \\frac{7}{6} \\approx 1.167$."
  },
  {
    id: "q6_multi_7",
    topic: "Multivariate Distributions",
    text: "Let $X$ and $Y$ be random variables with $Var(X) = 4$, $Var(Y) = 9$, and $Cov(X,Y) = 2$. Calculate the correlation coefficient between $U = 2X + Y$ and $V = X - 2Y$.",
    options: ["-0.65", "-0.49", "-0.32", "-0.15", "0.00"],
    correctAnswer: 1,
    explanation: "$Cov(U, V) = Cov(2X+Y, X-2Y) = 2Var(X) - 4Cov(X,Y) + Cov(Y,X) - 2Var(Y) = 2Var(X) - 3Cov(X,Y) - 2Var(Y) = 2(4) - 3(2) - 2(9) = 8 - 6 - 18 = -16$.\\n$Var(U) = Var(2X+Y) = 4Var(X) + Var(Y) + 4Cov(X,Y) = 4(4) + 9 + 4(2) = 16 + 9 + 8 = 33$.\\n$Var(V) = Var(X-2Y) = Var(X) + 4Var(Y) - 4Cov(X,Y) = 4 + 4(9) - 4(2) = 4 + 36 - 8 = 32$.\\n$\\rho_{U,V} = \\frac{Cov(U,V)}{\\sqrt{Var(U)Var(V)}} = \\frac{-16}{\\sqrt{33 \\times 32}} = \\frac{-16}{\\sqrt{1056}} \\approx -0.492$."
  },
  {
    id: "q6_trans_3",
    topic: "Transformations of Random Variables",
    text: "Let $X$ and $Y$ be independent continuous uniform random variables on the interval $(0, 2)$. Let $S = X + Y$. Calculate $P(S > 3)$.",
    options: ["0.125", "0.250", "0.375", "0.500", "0.625"],
    correctAnswer: 0,
    explanation: "The joint density is $f(x,y) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$ for $0 < x < 2$ and $0 < y < 2$.\\nThe event $S > 3$ means $X + Y > 3$. Within the square $0 < x < 2$ and $0 < y < 2$, the region where $x+y > 3$ is a triangle with vertices $(1,2), (2,1)$, and $(2,2)$.\\nThe area of this triangle is $\\frac{1}{2} \\times 1 \\times 1 = 0.5$.\\nThe probability is $\\iint_{x+y>3} f(x,y) dx dy = 0.5 \\times \\frac{1}{4} = 0.125$."
  },
  {
    id: "q6_multi_8",
    topic: "Multivariate Distributions",
    text: "A company has two assembly lines, A and B. The proportion of time line A is operational, $X$, and the proportion of time line B is operational, $Y$, have a joint cumulative distribution function $F(x,y) = x^2 y$ for $0 \\le x \\le 1$ and $0 \\le y \\le 1$. Calculate the probability that line A is operational for more than 50% of the time.",
    options: ["0.25", "0.50", "0.60", "0.75", "0.80"],
    correctAnswer: 3,
    explanation: "The marginal CDF of $X$ is obtained by letting $y = 1$: $F_X(x) = F(x, 1) = x^2(1) = x^2$ for $0 \\le x \\le 1$.\\n$P(X > 0.5) = 1 - F_X(0.5) = 1 - (0.5)^2 = 1 - 0.25 = 0.75$."
  },
  {
    id: "q6_trans_4",
    topic: "Transformations of Random Variables",
    text: "An insurer covers a policyholder with two independent risks. The times until a claim for each risk are exponentially distributed with means 2 and 3, respectively. Calculate the probability that a claim occurs within the first year.",
    options: ["0.43", "0.51", "0.57", "0.63", "0.72"],
    correctAnswer: 2,
    explanation: "Let $X$ and $Y$ be the times. $X \\sim \\text{Exp}(\\lambda_1 = 1/2)$ and $Y \\sim \\text{Exp}(\\lambda_2 = 1/3)$.\\nThe time until the first claim is $T = \\min(X,Y)$.\\nSince $X$ and $Y$ are independent exponentials, $T$ is exponential with rate $\\lambda = \\lambda_1 + \\lambda_2 = 1/2 + 1/3 = 5/6$.\\n$P(T \\le 1) = 1 - e^{-\\lambda(1)} = 1 - e^{-5/6} = 1 - e^{-0.8333} \\approx 1 - 0.4346 = 0.565$."
  },
  {
    id: "q6_trans_5",
    topic: "Transformations of Random Variables",
    text: "The random variables $X$ and $Y$ are independent and standard normal. Let $R = \\sqrt{X^2 + Y^2}$. Calculate the probability density function of $R$ for $r > 0$.",
    options: ["$f(r) = \\frac{1}{\\sqrt{2\\pi}} e^{-r^2/2}$", "$f(r) = r e^{-r^2/2}$", "$f(r) = r^2 e^{-r^2/2}$", "$f(r) = 2r e^{-r^2}$", "$f(r) = e^{-r}$"],
    correctAnswer: 1,
    explanation: "Since $X, Y \\sim N(0,1)$, their joint density is $f(x,y) = \\frac{1}{2\\pi} e^{-(x^2+y^2)/2}$.\\nUsing polar coordinates $x = r \\cos \\theta$, $y = r \\sin \\theta$, the Jacobian is $r$.\\n$f_{R,\\Theta}(r,\\theta) = f_{X,Y}(r \\cos \\theta, r \\sin \\theta) \\cdot r = \\frac{1}{2\\pi} e^{-r^2/2} \\cdot r$.\\nTo find the marginal density of $R$, integrate out $\\theta$ from $0$ to $2\\pi$:\\n$f_R(r) = \\int_0^{2\\pi} \\frac{1}{2\\pi} r e^{-r^2/2} d\\theta = r e^{-r^2/2}$.\\nThis is known as the Rayleigh distribution."
  },
  {
    id: "q6_multi_9",
    topic: "Multivariate Distributions",
    text: "Let $X$ and $Y$ be continuous random variables with joint probability density function $f(x,y) = c(x^2 + y^2)$ for $0 < x < 1$ and $0 < y < 1$. Determine if $X$ and $Y$ are independent, and calculate $E[XY]$.",
    options: ["Independent, $E[XY] = 0.250$", "Independent, $E[XY] = 0.375$", "Not independent, $E[XY] = 0.250$", "Not independent, $E[XY] = 0.375$", "Not independent, $E[XY] = 0.500$"],
    correctAnswer: 3,
    explanation: "First find $c$: $\\int_0^1 \\int_0^1 c(x^2+y^2) dx dy = c \\int_0^1 (1/3 + y^2) dy = c(1/3 + 1/3) = 2c/3 = 1 \\implies c = 3/2$.\\n$f(x,y) = \\frac{3}{2}(x^2+y^2)$. This cannot be factored into $f_X(x)f_Y(y)$, so they are not independent.\\n$E[XY] = \\int_0^1 \\int_0^1 xy \\frac{3}{2}(x^2+y^2) dx dy = \\frac{3}{2} \\int_0^1 \\int_0^1 (x^3y + xy^3) dx dy = \\frac{3}{2} \\int_0^1 (\\frac{1}{4}y + \\frac{1}{2}y^3) dy = \\frac{3}{2} [\\frac{1}{8}y^2 + \\frac{1}{8}y^4]_0^1 = \\frac{3}{2} (\\frac{1}{8} + \\frac{1}{8}) = \\frac{3}{2} (\\frac{2}{8}) = \\frac{3}{8} = 0.375$."
  },
  {
    id: "q6_trans_6",
    topic: "Transformations of Random Variables",
    text: "Two insurance claims, $X$ and $Y$, are independent and uniformly distributed on $(0, 10)$. Let $U = \\max(X, Y)$ and $V = \\min(X, Y)$. Calculate the expected value of $U - V$.",
    options: ["2.50", "3.33", "4.17", "5.00", "6.67"],
    correctAnswer: 1,
    explanation: "Since $X, Y \\sim U(0,10)$, the joint density is $f(x,y) = 1/100$.\\nThe CDF of $U$ is $F_U(u) = P(\\max(X,Y) \\le u) = P(X \\le u, Y \\le u) = (u/10)^2$. Thus, $f_U(u) = 2u/100 = u/50$ for $0 < u < 10$.\\n$E[U] = \\int_0^{10} u(u/50) du = \\frac{1}{50}[u^3/3]_0^{10} = 1000/150 = 20/3 = 6.667$.\\nThe CDF of $V$ is $F_V(v) = 1 - P(\\min(X,Y) > v) = 1 - P(X > v, Y > v) = 1 - ((10-v)/10)^2$.\\nThus, $f_V(v) = \\frac{2(10-v)}{100} = \\frac{10-v}{50}$ for $0 < v < 10$.\\n$E[V] = \\int_0^{10} v \\frac{10-v}{50} dv = \\frac{1}{50}[5v^2 - v^3/3]_0^{10} = \\frac{1}{50}(500 - 1000/3) = \\frac{1}{50}(500/3) = 10/3 = 3.333$.\\n$E[U - V] = E[U] - E[V] = 20/3 - 10/3 = 10/3 \\approx 3.33$."
  }
]);
