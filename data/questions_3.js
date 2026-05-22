window.appData = window.appData || {};
window.appData.questions = window.appData.questions || [];
window.appData.questions = window.appData.questions.concat([
  {
    id: "mv_1",
    topic: "Multivariate Distributions",
    text: "Let \\( X \\) and \\( Y \\) be continuous random variables with joint probability density function \\[ f(x,y) = \\begin{cases} c(x+y) & \\text{for } 0 < x < 1, 0 < y < 1 \\\\ 0 & \\text{otherwise} \\end{cases} \\] Find \\( P(X + Y < 1) \\).",
    options: ["1/6", "1/4", "1/3", "1/2", "2/3"],
    correctAnswer: 2,
    explanation: "First, find \\( c \\) by integrating the PDF over the domain and setting it to 1:\n\\[ \\int_0^1 \\int_0^1 c(x+y) \\,dy \\,dx = c \\int_0^1 \\left[ xy + \\frac{y^2}{2} \\right]_0^1 \\,dx = c \\int_0^1 \\left( x + \\frac{1}{2} \\right) \\,dx = c \\left[ \\frac{x^2}{2} + \\frac{x}{2} \\right]_0^1 = c(1) = 1 \\]\nSo \\( c = 1 \\).\n\nNext, evaluate \\( P(X + Y < 1) \\) by integrating over the region where \\( x + y < 1 \\):\n\\[ P(X + Y < 1) = \\int_0^1 \\int_0^{1-x} (x+y) \\,dy \\,dx \\]\nInner integral:\n\\[ \\int_0^{1-x} (x+y) \\,dy = \\left[ xy + \\frac{y^2}{2} \\right]_0^{1-x} = x(1-x) + \\frac{(1-x)^2}{2} = x - x^2 + \\frac{1 - 2x + x^2}{2} = \\frac{1}{2} - \\frac{x^2}{2} \\]\nOuter integral:\n\\[ \\int_0^1 \\left( \\frac{1}{2} - \\frac{x^2}{2} \\right) \\,dx = \\left[ \\frac{x}{2} - \\frac{x^3}{6} \\right]_0^1 = \\frac{1}{2} - \\frac{1}{6} = \\frac{1}{3} \\]"
  },
  {
    id: "mv_2",
    topic: "Multivariate Distributions",
    text: "Let \\( X \\) and \\( Y \\) be continuous random variables with joint PDF \\[ f(x,y) = \\begin{cases} 24xy & \\text{for } x > 0, y > 0, x + y < 1 \\\\ 0 & \\text{otherwise} \\end{cases} \\] Find the expected value \\( E[X] \\).",
    options: ["1/5", "1/4", "1/3", "2/5", "1/2"],
    correctAnswer: 3,
    explanation: "To find the expected value of \\( X \\), we first find the marginal density of \\( X \\):\n\\[ f_X(x) = \\int_0^{1-x} 24xy \\,dy = 12x \\left[ y^2 \\right]_0^{1-x} = 12x(1-x)^2 = 12x - 24x^2 + 12x^3 \\]\nfor \\( 0 < x < 1 \\).\n\nNow compute \\( E[X] \\):\n\\[ E[X] = \\int_0^1 x (12x - 24x^2 + 12x^3) \\,dx = \\int_0^1 (12x^2 - 24x^3 + 12x^4) \\,dx \\]\n\\[ = \\left[ \\frac{12x^3}{3} - \\frac{24x^4}{4} + \\frac{12x^5}{5} \\right]_0^1 = 4 - 6 + 2.4 = 0.4 = \\frac{2}{5} \\]"
  },
  {
    id: "mv_3",
    topic: "Multivariate Distributions",
    text: "Let \\( X \\) and \\( Y \\) have a joint PDF given by \\[ f(x,y) = \\begin{cases} 2 & \\text{for } 0 < x < y < 1 \\\\ 0 & \\text{otherwise} \\end{cases} \\] Find the conditional expectation \\( E[X|Y=0.6] \\).",
    options: ["0.2", "0.3", "0.4", "0.5", "0.6"],
    correctAnswer: 1,
    explanation: "First, we find the marginal density function of \\( Y \\):\n\\[ f_Y(y) = \\int_0^y 2 \\,dx = 2y \\]\nfor \\( 0 < y < 1 \\).\n\nThe conditional density of \\( X \\) given \\( Y = y \\) is:\n\\[ f_{X|Y}(x|y) = \\frac{f(x,y)}{f_Y(y)} = \\frac{2}{2y} = \\frac{1}{y} \\]\nfor \\( 0 < x < y \\). Notice that this is a uniform distribution on \\( (0, y) \\).\n\nThe conditional expectation \\( E[X|Y=y] \\) is the mean of this uniform distribution, which is \\( \\frac{y}{2} \\).\n\nSubstituting \\( y = 0.6 \\):\n\\[ E[X|Y=0.6] = \\frac{0.6}{2} = 0.3 \\]"
  },
  {
    id: "mv_4",
    topic: "Multivariate Distributions",
    text: "Let \\( X \\) and \\( Y \\) have a joint PDF \\[ f(x,y) = \\begin{cases} 8xy & \\text{for } 0 < x < y < 1 \\\\ 0 & \\text{otherwise} \\end{cases} \\] Find the conditional variance \\( Var(X|Y=0.6) \\).",
    options: ["0.01", "0.02", "0.03", "0.04", "0.05"],
    correctAnswer: 1,
    explanation: "First, find the marginal density of \\( Y \\):\n\\[ f_Y(y) = \\int_0^y 8xy \\,dx = \\left[ 4x^2 y \\right]_0^y = 4y^3 \\]\nfor \\( 0 < y < 1 \\).\n\nThe conditional density of \\( X \\) given \\( Y = y \\) is:\n\\[ f_{X|Y}(x|y) = \\frac{8xy}{4y^3} = \\frac{2x}{y^2} \\]\nfor \\( 0 < x < y \\).\n\nFind the conditional expectation \\( E[X|Y=y] \\):\n\\[ E[X|Y=y] = \\int_0^y x \\left(\\frac{2x}{y^2}\\right) \\,dx = \\frac{2}{y^2} \\left[ \\frac{x^3}{3} \\right]_0^y = \\frac{2y}{3} \\]\nFind the second conditional moment:\n\\[ E[X^2|Y=y] = \\int_0^y x^2 \\left(\\frac{2x}{y^2}\\right) \\,dx = \\frac{2}{y^2} \\left[ \\frac{x^4}{4} \\right]_0^y = \\frac{y^2}{2} \\]\n\nThe conditional variance is:\n\\[ Var(X|Y=y) = E[X^2|Y=y] - (E[X|Y=y])^2 = \\frac{y^2}{2} - \\left(\\frac{2y}{3}\\right)^2 = \\frac{y^2}{2} - \\frac{4y^2}{9} = \\frac{y^2}{18} \\]\n\nFor \\( Y = 0.6 \\):\n\\[ Var(X|Y=0.6) = \\frac{(0.6)^2}{18} = \\frac{0.36}{18} = 0.02 \\]"
  },
  {
    id: "mv_5",
    topic: "Multivariate Distributions",
    text: "A device has two components. The lifetimes of the components, \\( X \\) and \\( Y \\), have a joint PDF \\[ f(x,y) = \\begin{cases} e^{-(x+y)} & \\text{for } x > 0, y > 0 \\\\ 0 & \\text{otherwise} \\end{cases} \\] Find \\( P(X < 2Y) \\).",
    options: ["1/3", "1/2", "2/3", "3/4", "5/6"],
    correctAnswer: 2,
    explanation: "The components' lifetimes are distributed with joint PDF \\( f(x,y) = e^{-(x+y)} \\), which factors into \\( e^{-x} e^{-y} \\), meaning \\( X \\) and \\( Y \\) are independent standard exponential random variables.\n\nWe need to find \\( P(X < 2Y) \\):\n\\[ P(X < 2Y) = \\int_0^\\infty \\int_0^{2y} e^{-x} e^{-y} \\,dx \\,dy \\]\nInner integral:\n\\[ \\int_0^{2y} e^{-x} \\,dx = \\left[ -e^{-x} \\right]_0^{2y} = 1 - e^{-2y} \\]\nOuter integral:\n\\[ \\int_0^\\infty e^{-y}(1 - e^{-2y}) \\,dy = \\int_0^\\infty (e^{-y} - e^{-3y}) \\,dy \\]\n\\[ = \\left[ -e^{-y} + \\frac{1}{3}e^{-3y} \\right]_0^\\infty = (0 + 0) - \\left(-1 + \\frac{1}{3}\\right) = 1 - \\frac{1}{3} = \\frac{2}{3} \\]"
  },
  {
    id: "mv_6",
    topic: "Multivariate Distributions",
    text: "Two losses \\( X \\) and \\( Y \\) have a joint PDF \\[ f(x,y) = \\begin{cases} \\frac{1}{8}(x+y) & \\text{for } 0 < x < 2, 0 < y < 2 \\\\ 0 & \\text{otherwise} \\end{cases} \\] Find the covariance \\( Cov(X,Y) \\).",
    options: ["-1/18", "-1/36", "0", "1/36", "1/18"],
    correctAnswer: 1,
    explanation: "First, calculate the expected values \\( E[X] \\) and \\( E[Y] \\):\n\\[ E[X] = \\int_0^2 \\int_0^2 x \\cdot \\frac{1}{8}(x+y) \\,dy \\,dx = \\int_0^2 \\frac{x}{8} \\left[ xy + \\frac{y^2}{2} \\right]_0^2 \\,dx = \\int_0^2 \\frac{x}{8} (2x + 2) \\,dx = \\int_0^2 \\left( \\frac{x^2}{4} + \\frac{x}{4} \\right) \\,dx \\]\n\\[ = \\left[ \\frac{x^3}{12} + \\frac{x^2}{8} \\right]_0^2 = \\frac{8}{12} + \\frac{4}{8} = \\frac{2}{3} + \\frac{1}{2} = \\frac{7}{6} \\]\nBy symmetry of the joint PDF, \\( E[Y] = \\frac{7}{6} \\).\n\nNext, calculate \\( E[XY] \\):\n\\[ E[XY] = \\int_0^2 \\int_0^2 xy \\cdot \\frac{1}{8}(x+y) \\,dy \\,dx = \\frac{1}{8} \\int_0^2 \\left[ \\frac{x^2 y^2}{2} + \\frac{x y^3}{3} \\right]_0^2 \\,dx = \\frac{1}{8} \\int_0^2 \\left( 2x^2 + \\frac{8x}{3} \\right) \\,dx = \\int_0^2 \\left( \\frac{x^2}{4} + \\frac{x}{3} \\right) \\,dx \\]\n\\[ = \\left[ \\frac{x^3}{12} + \\frac{x^2}{6} \\right]_0^2 = \\frac{8}{12} + \\frac{4}{6} = \\frac{2}{3} + \\frac{2}{3} = \\frac{4}{3} \\]\n\nFinally, the covariance is:\n\\[ Cov(X,Y) = E[XY] - E[X]E[Y] = \\frac{4}{3} - \\left(\\frac{7}{6}\\right)\\left(\\frac{7}{6}\\right) = \\frac{48}{36} - \\frac{49}{36} = -\\frac{1}{36} \\]"
  },
  {
    id: "mv_7",
    topic: "Multivariate Distributions",
    text: "Random variables \\( X \\) and \\( Y \\) have joint PDF \\[ f(x,y) = \\begin{cases} x+y & \\text{for } 0 < x < 1, 0 < y < 1 \\\\ 0 & \\text{otherwise} \\end{cases} \\] Find \\( P(X > 0.5 | Y > 0.5) \\).",
    options: ["1/2", "3/5", "2/3", "3/4", "4/5"],
    correctAnswer: 1,
    explanation: "The conditional probability is given by \\( P(X > 0.5 | Y > 0.5) = \\frac{P(X > 0.5 \\text{ and } Y > 0.5)}{P(Y > 0.5)} \\).\n\nFirst, find \\( P(Y > 0.5) \\):\n\\[ P(Y > 0.5) = \\int_{0.5}^1 \\int_0^1 (x+y) \\,dx \\,dy = \\int_{0.5}^1 \\left[ \\frac{x^2}{2} + xy \\right]_0^1 \\,dy = \\int_{0.5}^1 \\left( \\frac{1}{2} + y \\right) \\,dy \\]\n\\[ = \\left[ \\frac{y}{2} + \\frac{y^2}{2} \\right]_{0.5}^1 = 1 - \\left( \\frac{1}{4} + \\frac{1}{8} \\right) = \\frac{5}{8} \\]\n\nNext, find the joint probability:\n\\[ P(X > 0.5, Y > 0.5) = \\int_{0.5}^1 \\int_{0.5}^1 (x+y) \\,dx \\,dy = \\int_{0.5}^1 \\left[ \\frac{x^2}{2} + xy \\right]_{0.5}^1 \\,dy = \\int_{0.5}^1 \\left( \\frac{3}{8} + \\frac{y}{2} \\right) \\,dy \\]\n\\[ = \\left[ \\frac{3y}{8} + \\frac{y^2}{4} \\right]_{0.5}^1 = \\left( \\frac{3}{8} + \\frac{1}{4} \\right) - \\left( \\frac{3}{16} + \\frac{1}{16} \\right) = \\frac{5}{8} - \\frac{1}{4} = \\frac{3}{8} \\]\n\nFinally, calculate the conditional probability:\n\\[ P(X > 0.5 | Y > 0.5) = \\frac{3/8}{5/8} = \\frac{3}{5} \\]"
  },
  {
    id: "mv_8",
    topic: "Multivariate Distributions",
    text: "An insurance company covers two independent risks. The claim size for the first risk, \\( X \\), is exponentially distributed with a mean of 1. The claim size for the second risk, \\( Y \\), is exponentially distributed with a mean of 0.5. Find \\( P(X + Y < 1) \\).",
    options: ["\\( 1 - e^{-2} \\)", "\\( 1 - 2e^{-1} + e^{-2} \\)", "\\( 1 - e^{-1} - e^{-2} \\)", "\\( 1 - 3e^{-2} \\)", "\\( e^{-1} - e^{-2} \\)"],
    correctAnswer: 1,
    explanation: "Since \\( X \\) and \\( Y \\) are independent, their joint PDF is the product of their marginals. For \\( X \\), \\( \\lambda = 1 \\), so \\( f_X(x) = e^{-x} \\). For \\( Y \\), the mean is 0.5, so \\( \\lambda = 2 \\), and \\( f_Y(y) = 2e^{-2y} \\).\n\\[ f(x,y) = f_X(x)f_Y(y) = e^{-x} \\cdot 2e^{-2y} = 2e^{-x-2y} \\]\nfor \\( x > 0, y > 0 \\).\n\nWe want to find \\( P(X + Y < 1) \\):\n\\[ P(X + Y < 1) = \\int_0^1 \\int_0^{1-y} 2e^{-x}e^{-2y} \\,dx \\,dy \\]\nInner integral:\n\\[ \\int_0^{1-y} 2e^{-2y} e^{-x} \\,dx = 2e^{-2y} \\left[ -e^{-x} \\right]_0^{1-y} = 2e^{-2y} (1 - e^{-(1-y)}) = 2e^{-2y} - 2e^{-1-y} \\]\nOuter integral:\n\\[ \\int_0^1 (2e^{-2y} - 2e^{-1-y}) \\,dy = \\left[ -e^{-2y} + 2e^{-1-y} \\right]_0^1 \\]\n\\[ = (-e^{-2} + 2e^{-2}) - (-1 + 2e^{-1}) = e^{-2} + 1 - 2e^{-1} = 1 - 2e^{-1} + e^{-2} \\]"
  },
  {
    id: "mv_9",
    topic: "Multivariate Distributions",
    text: "The lifetimes of two components, \\( X \\) and \\( Y \\), have a joint PDF given by \\[ f(x,y) = \\begin{cases} 6e^{-(2x+3y)} & \\text{for } x > 0, y > 0 \\\\ 0 & \\text{otherwise} \\end{cases} \\] Find \\( P(X < Y) \\).",
    options: ["1/5", "2/5", "1/2", "3/5", "4/5"],
    correctAnswer: 1,
    explanation: "The joint PDF factors into \\( (2e^{-2x}) \\cdot (3e^{-3y}) \\), which means \\( X \\) and \\( Y \\) are independent exponential random variables with rates \\( \\lambda_X = 2 \\) and \\( \\lambda_Y = 3 \\).\n\nFor two independent exponential random variables, the probability that one is less than the other is:\n\\[ P(X < Y) = \\frac{\\lambda_X}{\\lambda_X + \\lambda_Y} \\]\nSubstituting the rates:\n\\[ P(X < Y) = \\frac{2}{2 + 3} = \\frac{2}{5} \\]\n\nAlternatively, compute the double integral directly:\n\\[ P(X < Y) = \\int_0^\\infty \\int_0^y 6 e^{-(2x+3y)} \\,dx \\,dy = \\int_0^\\infty 3e^{-3y} \\left[ -e^{-2x} \\right]_0^y \\,dy = \\int_0^\\infty 3e^{-3y} (1 - e^{-2y}) \\,dy \\]\n\\[ = \\int_0^\\infty (3e^{-3y} - 3e^{-5y}) \\,dy = \\left[ -e^{-3y} + \\frac{3}{5}e^{-5y} \\right]_0^\\infty = 0 - \\left(-1 + \\frac{3}{5}\\right) = 1 - \\frac{3}{5} = \\frac{2}{5} \\]"
  },
  {
    id: "mv_10",
    topic: "Multivariate Distributions",
    text: "Let \\( X \\) and \\( Y \\) be continuous random variables with joint PDF: \\[ f(x,y) = \\begin{cases} 2(x+y-2xy) & \\text{for } 0 < x < 1, 0 < y < 1 \\\\ 0 & \\text{otherwise} \\end{cases} \\] Find \\( E[XY] \\).",
    options: ["1/9", "2/9", "1/4", "1/3", "4/9"],
    correctAnswer: 1,
    explanation: "We need to evaluate the expected value \\( E[XY] \\):\n\\[ E[XY] = \\int_0^1 \\int_0^1 xy \\cdot 2(x+y-2xy) \\,dx \\,dy = \\int_0^1 \\int_0^1 (2x^2 y + 2x y^2 - 4x^2 y^2) \\,dx \\,dy \\]\n\nFirst, integrate with respect to \\( x \\):\n\\[ \\int_0^1 (2x^2 y + 2x y^2 - 4x^2 y^2) \\,dx = \\left[ \\frac{2x^3}{3} y + x^2 y^2 - \\frac{4x^3}{3} y^2 \\right]_0^1 = \\frac{2}{3} y + y^2 - \\frac{4}{3} y^2 = \\frac{2}{3} y - \\frac{1}{3} y^2 \\]\n\nNext, integrate with respect to \\( y \\):\n\\[ E[XY] = \\int_0^1 \\left( \\frac{2}{3} y - \\frac{1}{3} y^2 \\right) \\,dy = \\left[ \\frac{1}{3} y^2 - \\frac{1}{9} y^3 \\right]_0^1 = \\frac{1}{3} - \\frac{1}{9} = \\frac{2}{9} \\]"
  },
  {
    id: "mv_11",
    topic: "Multivariate Distributions",
    text: "Let \\( X \\) and \\( Y \\) be random variables with joint PDF \\[ f(x,y) = \\begin{cases} 4y^2 & \\text{for } 0 < x < y < 1 \\\\ 0 & \\text{otherwise} \\end{cases} \\] Find \\( P(X < 0.5 | Y > 0.5) \\).",
    options: ["1/2", "28/45", "2/3", "3/4", "15/16"],
    correctAnswer: 1,
    explanation: "First, compute \\( P(Y > 0.5) \\):\n\\[ P(Y > 0.5) = \\int_{0.5}^1 \\int_0^y 4y^2 \\,dx \\,dy = \\int_{0.5}^1 4y^3 \\,dy = \\left[ y^4 \\right]_{0.5}^1 = 1 - (0.5)^4 = 1 - \\frac{1}{16} = \\frac{15}{16} \\]\n\nNext, compute \\( P(X < 0.5 \\text{ and } Y > 0.5) \\). This corresponds to the region where \\( 0 < x < 0.5 \\) and \\( 0.5 < y < 1 \\). Since \\( x < y \\) is guaranteed here, we can integrate over a rectangle:\n\\[ P(X < 0.5, Y > 0.5) = \\int_{0.5}^1 \\int_0^{0.5} 4y^2 \\,dx \\,dy \\]\nInner integral:\n\\[ \\int_0^{0.5} 4y^2 \\,dx = 4y^2(0.5) = 2y^2 \\]\nOuter integral:\n\\[ \\int_{0.5}^1 2y^2 \\,dy = \\frac{2}{3} \\left[ y^3 \\right]_{0.5}^1 = \\frac{2}{3} \\left( 1 - \\frac{1}{8} \\right) = \\frac{2}{3} \\left( \\frac{7}{8} \\right) = \\frac{14}{24} = \\frac{7}{12} \\]\n\nFinally, the conditional probability is:\n\\[ P(X < 0.5 | Y > 0.5) = \\frac{7/12}{15/16} = \\frac{7}{12} \\cdot \\frac{16}{15} = \\frac{28}{45} \\]"
  },
  {
    id: "mv_12",
    topic: "Multivariate Distributions",
    text: "Let \\( X \\) and \\( Y \\) have joint PDF \\[ f(x,y) = \\begin{cases} e^{-x} & \\text{for } 0 < y < x < \\infty \\\\ 0 & \\text{otherwise} \\end{cases} \\] Find the variance of \\( Y \\), \\( Var(Y) \\).",
    options: ["1/2", "1", "3/2", "2", "5/2"],
    correctAnswer: 1,
    explanation: "First, find the marginal PDF of \\( X \\):\n\\[ f_X(x) = \\int_0^x e^{-x} \\,dy = x e^{-x} \\]\nfor \\( x > 0 \\). This means \\( X \\) follows a Gamma distribution with \\( \\alpha = 2 \\) and \\( \\lambda = 1 \\).\n\nThe conditional PDF of \\( Y \\) given \\( X = x \\) is:\n\\[ f_{Y|X}(y|x) = \\frac{f(x,y)}{f_X(x)} = \\frac{e^{-x}}{x e^{-x}} = \\frac{1}{x} \\]\nfor \\( 0 < y < x \\). Thus, \\( Y|X \\sim \\text{Uniform}(0, x) \\).\n\nThe conditional variance is \\( Var(Y|X=x) = \\frac{x^2}{12} \\), and the conditional expectation is \\( E[Y|X=x] = \\frac{x}{2} \\).\n\nBy the Law of Total Variance:\n\\[ Var(Y) = E[Var(Y|X)] + Var(E[Y|X]) = E\\left[\\frac{X^2}{12}\\right] + Var\\left(\\frac{X}{2}\\right) = \\frac{E[X^2]}{12} + \\frac{Var(X)}{4} \\]\nSince \\( X \\sim \\text{Gamma}(2,1) \\), \\( E[X] = 2 \\), \\( Var(X) = 2 \\), and \\( E[X^2] = Var(X) + (E[X])^2 = 2 + 4 = 6 \\).\n\nSubstituting these in:\n\\[ Var(Y) = \\frac{6}{12} + \\frac{2}{4} = \\frac{1}{2} + \\frac{1}{2} = 1 \\]"
  },
  {
    id: "mv_13",
    topic: "Multivariate Distributions",
    text: "Random variables \\( X \\) and \\( Y \\) have joint density \\[ f(x,y) = \\begin{cases} \\frac{1}{x} & \\text{for } 0 < y < x < 1 \\\\ 0 & \\text{otherwise} \\end{cases} \\] Find \\( E[X+Y] \\).",
    options: ["1/2", "2/3", "3/4", "5/6", "1"],
    correctAnswer: 2,
    explanation: "By linearity of expectation, \\( E[X+Y] = E[X] + E[Y] \\).\n\nFirst, find \\( E[X] \\):\n\\[ E[X] = \\int_0^1 \\int_0^x x \\left(\\frac{1}{x}\\right) \\,dy \\,dx = \\int_0^1 \\int_0^x 1 \\,dy \\,dx = \\int_0^1 x \\,dx = \\left[ \\frac{x^2}{2} \\right]_0^1 = \\frac{1}{2} \\]\n\nNext, find \\( E[Y] \\):\n\\[ E[Y] = \\int_0^1 \\int_0^x y \\left(\\frac{1}{x}\\right) \\,dy \\,dx = \\int_0^1 \\frac{1}{x} \\left[ \\frac{y^2}{2} \\right]_0^x \\,dx = \\int_0^1 \\frac{1}{x} \\cdot \\frac{x^2}{2} \\,dx = \\int_0^1 \\frac{x}{2} \\,dx = \\left[ \\frac{x^2}{4} \\right]_0^1 = \\frac{1}{4} \\]\n\nThus, \\( E[X+Y] = \\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4} \\)."
  },
  {
    id: "mv_14",
    topic: "Multivariate Distributions",
    text: "Suppose \\( X \\) and \\( Y \\) have joint density \\[ f(x,y) = \\begin{cases} kxy & \\text{for } 0 < y < x < 1 \\\\ 0 & \\text{otherwise} \\end{cases} \\] Find \\( P(Y > 0.5 | X = 0.8) \\).",
    options: ["25/64", "39/64", "1/2", "5/8", "21/32"],
    correctAnswer: 1,
    explanation: "First, find \\( k \\) by setting the double integral of the PDF to 1:\n\\[ \\int_0^1 \\int_0^x kxy \\,dy \\,dx = \\int_0^1 kx \\left[ \\frac{y^2}{2} \\right]_0^x \\,dx = \\int_0^1 \\frac{kx^3}{2} \\,dx = \\left[ \\frac{kx^4}{8} \\right]_0^1 = \\frac{k}{8} = 1 \\]\nSo \\( k = 8 \\).\n\nThe marginal PDF of \\( X \\) is:\n\\[ f_X(x) = \\int_0^x 8xy \\,dy = 4x^3 \\]\nfor \\( 0 < x < 1 \\).\n\nThe conditional PDF of \\( Y \\) given \\( X = x \\) is:\n\\[ f_{Y|X}(y|x) = \\frac{8xy}{4x^3} = \\frac{2y}{x^2} \\]\nfor \\( 0 < y < x \\).\n\nWe need to find \\( P(Y > 0.5 | X = 0.8) \\). Set \\( x = 0.8 \\):\n\\[ f_{Y|X}(y|0.8) = \\frac{2y}{0.64} \\]\nfor \\( 0 < y < 0.8 \\).\n\nCalculate the conditional probability:\n\\[ P(Y > 0.5 | X = 0.8) = \\int_{0.5}^{0.8} \\frac{2y}{0.64} \\,dy = \\frac{1}{0.64} \\left[ y^2 \\right]_{0.5}^{0.8} = \\frac{(0.8)^2 - (0.5)^2}{0.64} = \\frac{0.64 - 0.25}{0.64} = \\frac{0.39}{0.64} = \\frac{39}{64} \\]"
  },
  {
    id: "mv_15",
    topic: "Multivariate Distributions",
    text: "Let \\( X \\) and \\( Y \\) have joint PDF \\[ f(x,y) = \\begin{cases} 24xy & \\text{for } x > 0, y > 0, x+y < 1 \\\\ 0 & \\text{otherwise} \\end{cases} \\] Find \\( P(X < Y/2) \\).",
    options: ["5/27", "2/9", "7/27", "8/27", "1/3"],
    correctAnswer: 2,
    explanation: "The probability \\( P(X < Y/2) \\) requires integrating the joint PDF over the region where \\( 0 < x < y/2 \\) and \\( x + y < 1 \\).\nFrom \\( x < y/2 \\), we have \\( y > 2x \\). From \\( x+y < 1 \\), we have \\( y < 1-x \\).\nThe maximum possible value for \\( x \\) occurs when \\( 2x = 1-x \\), yielding \\( 3x = 1 \\implies x = 1/3 \\).\n\nSet up the double integral:\n\\[ P(X < Y/2) = \\int_0^{1/3} \\int_{2x}^{1-x} 24xy \\,dy \\,dx \\]\nInner integral:\n\\[ \\int_{2x}^{1-x} 24xy \\,dy = 12x \\left[ y^2 \\right]_{2x}^{1-x} = 12x \\left( (1-x)^2 - (2x)^2 \\right) = 12x (1 - 2x + x^2 - 4x^2) = 12x - 24x^2 - 36x^3 \\]\nOuter integral:\n\\[ \\int_0^{1/3} (12x - 24x^2 - 36x^3) \\,dx = \\left[ 6x^2 - 8x^3 - 9x^4 \\right]_0^{1/3} \\]\nEvaluate at \\( 1/3 \\):\n\\[ = 6\\left(\\frac{1}{9}\\right) - 8\\left(\\frac{1}{27}\\right) - 9\\left(\\frac{1}{81}\\right) = \\frac{2}{3} - \\frac{8}{27} - \\frac{1}{9} = \\frac{18}{27} - \\frac{8}{27} - \\frac{3}{27} = \\frac{7}{27} \\]"
  }
]);
