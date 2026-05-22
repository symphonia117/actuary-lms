window.appData = window.appData || {};
window.appData.questions = window.appData.questions || [];
window.appData.questions = window.appData.questions.concat([
  {
    id: "q1_comb_1",
    topic: "Combinatorics",
    text: "An urn contains 10 red balls, 8 blue balls, and 6 green balls. A sample of 5 balls is drawn without replacement. What is the probability that exactly 2 red balls and at least 1 blue ball are drawn?",
    options: ["0.342", "0.364", "0.386", "0.408", "0.422"],
    correctAnswer: 1,
    explanation: "Let the total number of balls be 24. The total number of ways to draw 5 balls is $\\binom{24}{5} = 42,504$.\nThe number of ways to choose exactly 2 red balls is $\\binom{10}{2} = 45$.\nThe remaining 3 balls must be drawn from the 14 non-red balls (8 blue and 6 green).\nWe need at least 1 blue ball in these 3. Total ways to choose 3 balls from 14 is $\\binom{14}{3} = 364$.\nThe number of ways to choose 0 blue balls (i.e., all 3 are green) is $\\binom{6}{3} = 20$.\nThe number of ways to choose at least 1 blue ball is $364 - 20 = 344$.\nThe number of ways to have exactly 2 red and at least 1 blue is $45 \\times 344 = 15,480$.\nThe probability is $\\frac{15,480}{42,504} \\approx 0.3642$."
  },
  {
    id: "q1_bayes_1",
    topic: "Bayes Theorem",
    text: "A rare disease affects 1 in 10,000 people in a population. A test for the disease is 99% accurate when the person has the disease (sensitivity) and 95% accurate when the person does not have the disease (specificity). If a randomly selected person tests positive, what is the probability that they actually have the disease?",
    options: ["0.001", "0.002", "0.019", "0.198", "0.990"],
    correctAnswer: 1,
    explanation: "Let $D$ be the event of having the disease, and $+$ be the event of a positive test.\n$P(D) = 0.0001$ and $P(D^c) = 0.9999$.\nWe are given $P(+|D) = 0.99$ and $P(+|D^c) = 1 - 0.95 = 0.05$.\nUsing Bayes' Theorem:\n$P(D|+) = \\frac{P(+|D)P(D)}{P(+|D)P(D) + P(+|D^c)P(D^c)}$\n$P(D|+) = \\frac{0.99 \\times 0.0001}{0.99 \\times 0.0001 + 0.05 \\times 0.9999}$\n$P(D|+) = \\frac{0.000099}{0.000099 + 0.049995} = \\frac{0.000099}{0.050094} \\approx 0.001976$."
  },
  {
    id: "q1_genprob_2",
    topic: "General Probability",
    text: "In a survey of 100 college students, 60 take Calculus, 50 take Physics, and 40 take Chemistry. 30 take Calculus and Physics, 20 take Calculus and Chemistry, and 15 take Physics and Chemistry. 5 students take all three subjects. What is the probability that a randomly chosen student takes exactly two of these three subjects?",
    options: ["0.40", "0.45", "0.50", "0.55", "0.60"],
    correctAnswer: 2,
    explanation: "Let $C, P, Ch$ be the sets of students taking Calculus, Physics, and Chemistry, respectively.\nThe number of students taking exactly $C$ and $P$ is $|C \\cap P| - |C \\cap P \\cap Ch| = 30 - 5 = 25$.\nThe number of students taking exactly $C$ and $Ch$ is $|C \\cap Ch| - |C \\cap P \\cap Ch| = 20 - 5 = 15$.\nThe number of students taking exactly $P$ and $Ch$ is $|P \\cap Ch| - |C \\cap P \\cap Ch| = 15 - 5 = 10$.\nThe total number of students taking exactly two subjects is $25 + 15 + 10 = 50$.\nThe probability is $\\frac{50}{100} = 0.50$."
  },
  {
    id: "q1_bayes_2",
    topic: "Bayes Theorem",
    text: "An auto insurance company classifies drivers as High Risk (20%), Medium Risk (50%), or Low Risk (30%). The probability of a driver having an accident in a given year is 0.15 for High Risk, 0.05 for Medium Risk, and 0.01 for Low Risk. If a driver has an accident, what is the probability they are classified as High Risk?",
    options: ["0.315", "0.428", "0.517", "0.602", "0.655"],
    correctAnswer: 2,
    explanation: "Let $H, M, L$ represent High, Medium, and Low Risk. Let $A$ be the event of having an accident.\nWe want to find $P(H|A)$.\n$P(H) = 0.20, P(M) = 0.50, P(L) = 0.30$.\n$P(A|H) = 0.15, P(A|M) = 0.05, P(A|L) = 0.01$.\nThe total probability of an accident is:\n$P(A) = P(A|H)P(H) + P(A|M)P(M) + P(A|L)P(L)$\n$P(A) = (0.15)(0.20) + (0.05)(0.50) + (0.01)(0.30) = 0.030 + 0.025 + 0.003 = 0.058$.\nUsing Bayes' Theorem:\n$P(H|A) = \\frac{P(A|H)P(H)}{P(A)} = \\frac{0.030}{0.058} = \\frac{15}{29} \\approx 0.517$."
  },
  {
    id: "q1_comb_2",
    topic: "Combinatorics",
    text: "A committee of 4 members is to be formed from a group of 6 actuaries and 5 underwriters. The committee must contain at least one actuary and at least one underwriter. Furthermore, two specific actuaries refuse to serve on the committee together. How many different committees can be formed?",
    options: ["250", "270", "280", "300", "310"],
    correctAnswer: 2,
    explanation: "Total possible committees without restrictions: $\\binom{11}{4} = 330$.\nCommittees with only actuaries: $\\binom{6}{4} = 15$.\nCommittees with only underwriters: $\\binom{5}{4} = 5$.\nCommittees with at least one of each: $330 - 15 - 5 = 310$.\nNow, we subtract the committees where the two specific actuaries ($A_1$ and $A_2$) serve together.\nIf $A_1$ and $A_2$ are on the committee, we must choose 2 more members from the remaining 9 (4 actuaries and 5 underwriters).\nHowever, these 2 additional members cannot be both actuaries, because that would mean 4 actuaries and 0 underwriters, which we already excluded.\nSo the additional 2 members must be chosen such that there is at least one underwriter.\nWays to choose 1 underwriter and 1 actuary: $\\binom{5}{1}\\binom{4}{1} = 5 \\times 4 = 20$.\nWays to choose 2 underwriters: $\\binom{5}{2} = 10$.\nTotal invalid committees to subtract: $20 + 10 = 30$.\nValid committees: $310 - 30 = 280$."
  },
  {
    id: "q1_genprob_3",
    topic: "General Probability",
    text: "Let A, B, and C be mutually independent events. Given $P(A) = 0.4$, $P(B) = 0.5$, and $P(C) = 0.6$, calculate the probability that exactly one of the events A, B, or C occurs.",
    options: ["0.32", "0.35", "0.38", "0.42", "0.45"],
    correctAnswer: 2,
    explanation: "We need the sum of the probabilities of $A \\cap B^c \\cap C^c$, $A^c \\cap B \\cap C^c$, and $A^c \\cap B^c \\cap C$.\nBecause the events are independent:\n$P(A \\cap B^c \\cap C^c) = P(A)P(B^c)P(C^c) = (0.4)(0.5)(0.4) = 0.08$.\n$P(A^c \\cap B \\cap C^c) = P(A^c)P(B)P(C^c) = (0.6)(0.5)(0.4) = 0.12$.\n$P(A^c \\cap B^c \\cap C) = P(A^c)P(B^c)P(C) = (0.6)(0.5)(0.6) = 0.18$.\nTotal probability = $0.08 + 0.12 + 0.18 = 0.38$."
  },
  {
    id: "q1_bayes_3",
    topic: "Bayes Theorem",
    text: "You have three coins. Coin 1 is fair, Coin 2 has heads on both sides, and Coin 3 is biased such that the probability of heads is 0.75. You randomly select a coin and flip it 3 times. The result is 3 heads. What is the probability that you selected Coin 2?",
    options: ["0.542", "0.605", "0.646", "0.688", "0.724"],
    correctAnswer: 2,
    explanation: "Let $C_1, C_2, C_3$ represent the selected coins. $P(C_i) = \\frac{1}{3}$.\nLet $3H$ be the event of flipping 3 heads.\n$P(3H|C_1) = (0.5)^3 = 0.125$\n$P(3H|C_2) = (1)^3 = 1$\n$P(3H|C_3) = (0.75)^3 = 0.421875$\nThe total probability of getting 3 heads is:\n$P(3H) = \\frac{1}{3}(0.125 + 1 + 0.421875) = \\frac{1}{3}(1.546875)$.\nUsing Bayes' Theorem:\n$P(C_2|3H) = \\frac{P(3H|C_2)P(C_2)}{P(3H)} = \\frac{1/3}{1.546875/3} = \\frac{1}{1.546875} = \\frac{64}{99} \\approx 0.6465$."
  },
  {
    id: "q1_comb_3",
    topic: "Combinatorics",
    text: "An insurance agent has 12 distinct policies to assign to 3 junior agents: Alice, Bob, and Charlie. The agent wants to assign 5 policies to Alice, 4 to Bob, and 3 to Charlie. How many different assignments are possible?",
    options: ["13,860", "27,720", "34,650", "41,580", "55,440"],
    correctAnswer: 1,
    explanation: "This is a multinomial coefficient problem. The number of ways to partition 12 distinct items into groups of 5, 4, and 3 is:\n$\\frac{12!}{5! 4! 3!} = \\binom{12}{5} \\times \\binom{7}{4} \\times \\binom{3}{3}$.\n$\\binom{12}{5} = \\frac{12 \\times 11 \\times 10 \\times 9 \\times 8}{5 \\times 4 \\times 3 \\times 2 \\times 1} = 792$.\n$\\binom{7}{4} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35$.\nTotal assignments = $792 \\times 35 = 27,720$."
  },
  {
    id: "q1_genprob_4",
    topic: "General Probability",
    text: "Let $A$ and $B$ be events such that $P(A) = 0.6$, $P(B) = 0.5$, and $P(A \\cup B) = 0.8$. Calculate the probability that $A$ occurs given that at most one of the events $A$ and $B$ occurs.",
    options: ["0.375", "0.429", "0.500", "0.600", "0.750"],
    correctAnswer: 1,
    explanation: "First, find $P(A \\cap B)$:\n$P(A \\cap B) = P(A) + P(B) - P(A \\cup B) = 0.6 + 0.5 - 0.8 = 0.3$.\n\"At most one of the events occurs\" is the complement of \"both events occur\", which is $(A \\cap B)^c$.\n$P((A \\cap B)^c) = 1 - 0.3 = 0.7$.\nWe need $P(A | (A \\cap B)^c) = \\frac{P(A \\cap (A \\cap B)^c)}{P((A \\cap B)^c)}$.\nThe event $A \\cap (A \\cap B)^c$ is exactly the event that $A$ occurs but $B$ does not occur, which is $A \\setminus B$.\n$P(A \\setminus B) = P(A) - P(A \\cap B) = 0.6 - 0.3 = 0.3$.\n$P(A | (A \\cap B)^c) = \\frac{0.3}{0.7} = \\frac{3}{7} \\approx 0.4286$."
  },
  {
    id: "q1_bayes_4",
    topic: "Bayes Theorem",
    text: "A factory has three machines producing widgets. Machine A produces 40% of the widgets, Machine B produces 35%, and Machine C produces 25%. The rates of defective widgets are 2% for A, 4% for B, and 5% for C. A quality inspector randomly selects a widget and finds it is defective. The inspector then selects a second widget from the SAME machine and finds it is also defective. Assuming the defectiveness of widgets from the same machine are independent events, what is the probability that both widgets came from Machine B?",
    options: ["0.355", "0.384", "0.416", "0.442", "0.478"],
    correctAnswer: 2,
    explanation: "Let $D_1$ and $D_2$ be the events that the first and second widgets are defective.\nBecause they are drawn from the same machine and are conditionally independent:\n$P(D_1 \\cap D_2 | A) = (0.02)^2 = 0.0004$\n$P(D_1 \\cap D_2 | B) = (0.04)^2 = 0.0016$\n$P(D_1 \\cap D_2 | C) = (0.05)^2 = 0.0025$\nThe total probability of both being defective is:\n$P(D_1 \\cap D_2) = (0.40)(0.0004) + (0.35)(0.0016) + (0.25)(0.0025) = 0.00016 + 0.00056 + 0.000625 = 0.001345$.\nUsing Bayes' Theorem:\n$P(B | D_1 \\cap D_2) = \\frac{(0.35)(0.0016)}{0.001345} = \\frac{0.00056}{0.001345} \\approx 0.4164$."
  },
  {
    id: "q1_genprob_5",
    topic: "General Probability",
    text: "Two players, Alice and Bob, take turns rolling a fair six-sided die, with Alice rolling first. The first player to roll a 5 or a 6 wins the game. What is the probability that Bob wins the game?",
    options: ["0.33", "0.40", "0.45", "0.50", "0.60"],
    correctAnswer: 1,
    explanation: "The probability of rolling a 5 or a 6 (a win on that roll) is $\\frac{2}{6} = \\frac{1}{3}$. The probability of not winning is $\\frac{2}{3}$.\nBob wins if Alice loses her first roll and Bob wins his first roll, OR Alice loses, Bob loses, Alice loses, Bob wins, etc.\nThis forms a geometric series for Bob's probability of winning:\n$P(\\text{Bob wins}) = (\\frac{2}{3})(\\frac{1}{3}) + (\\frac{2}{3})^3(\\frac{1}{3}) + (\\frac{2}{3})^5(\\frac{1}{3}) + \\dots$\nThe first term is $a = \\frac{2}{9}$ and the common ratio is $r = (\\frac{2}{3})^2 = \\frac{4}{9}$.\nSum $= \\frac{a}{1 - r} = \\frac{2/9}{1 - 4/9} = \\frac{2/9}{5/9} = \\frac{2}{5} = 0.40$."
  },
  {
    id: "q1_comb_4",
    topic: "Combinatorics",
    text: "Five employees submit their expense reports to a manager. Due to a sorting error, the manager returns the five reports randomly to the five employees, one to each. What is the probability that exactly one employee receives their own expense report?",
    options: ["0.333", "0.375", "0.417", "0.450", "0.500"],
    correctAnswer: 1,
    explanation: "Total possible arrangements is $5! = 120$.\nWe want exactly one employee to receive their correct report. There are $\\binom{5}{1} = 5$ ways to choose which employee gets their correct report.\nThe remaining 4 employees must all receive the wrong reports. This is the number of derangements of 4 items, denoted $!4$.\n$!4 = 4! (1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\frac{1}{4!}) = 24(\\frac{1}{2} - \\frac{1}{6} + \\frac{1}{24}) = 12 - 4 + 1 = 9$.\nTotal favorable outcomes = $5 \\times 9 = 45$.\nProbability = $\\frac{45}{120} = \\frac{3}{8} = 0.375$."
  },
  {
    id: "q1_bayes_5",
    topic: "Bayes Theorem",
    text: "A screening test for a certain marker is positive for 80% of individuals who have a specific genetic trait and positive for 10% of individuals who do not have the trait. The prevalence of the trait in the population is 5%. An individual takes the test twice, and the results are conditionally independent given the trait status. If both tests are positive, what is the probability the individual has the genetic trait?",
    options: ["0.724", "0.751", "0.771", "0.793", "0.815"],
    correctAnswer: 2,
    explanation: "Let $T$ be having the trait. $P(T) = 0.05, P(T^c) = 0.95$.\nLet $+, +$ be the event of testing positive twice.\nDue to conditional independence:\n$P(+, + | T) = (0.8)^2 = 0.64$\n$P(+, + | T^c) = (0.1)^2 = 0.01$\nUsing Bayes' Theorem:\n$P(T | +, +) = \\frac{P(+, + | T)P(T)}{P(+, + | T)P(T) + P(+, + | T^c)P(T^c)}$\n$P(T | +, +) = \\frac{0.64 \\times 0.05}{0.64 \\times 0.05 + 0.01 \\times 0.95} = \\frac{0.032}{0.032 + 0.0095} = \\frac{0.032}{0.0415} \\approx 0.7711$."
  },
  {
    id: "q1_comb_5",
    topic: "Combinatorics",
    text: "An investor wants to distribute \\$10,000 among 4 different mutual funds. Investments must be made in multiples of \\$1,000. Additionally, the investor decides that each fund must receive at least \\$1,000. How many different investment strategies are possible?",
    options: ["56", "84", "120", "210", "286"],
    correctAnswer: 1,
    explanation: "Let $x_i$ be the amount invested in fund $i$ (in thousands of dollars).\nWe need to solve $x_1 + x_2 + x_3 + x_4 = 10$, where $x_i \\ge 1$ and $x_i$ is an integer.\nLet $y_i = x_i - 1$. Then $y_i \\ge 0$ and $y_1 + y_2 + y_3 + y_4 = 6$.\nThis is a classic stars and bars problem. The number of non-negative integer solutions is $\\binom{n + k - 1}{k - 1}$ where $n = 6$ and $k = 4$.\n$\\binom{6 + 4 - 1}{4 - 1} = \\binom{9}{3} = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} = 84$."
  },
  {
    id: "q1_genprob_6",
    topic: "General Probability",
    text: "An actuary is reviewing claims for a portfolio. Let $A$ be the event that a claim is from an auto policy, and $B$ be the event that a claim exceeds \\$10,000. You are given: $P(B) = 0.30$, $P(A \\cap B) = 0.20$, and $P(A \\cup B) = 0.70$. Calculate the probability that a claim is NOT from an auto policy, given that it does NOT exceed \\$10,000.",
    options: ["0.286", "0.333", "0.429", "0.500", "0.571"],
    correctAnswer: 2,
    explanation: "We need to find $P(A^c | B^c) = \\frac{P(A^c \\cap B^c)}{P(B^c)}$.\nBy De Morgan's Laws, $A^c \\cap B^c = (A \\cup B)^c$.\n$P((A \\cup B)^c) = 1 - P(A \\cup B) = 1 - 0.70 = 0.30$.\nAlso, $P(B^c) = 1 - P(B) = 1 - 0.30 = 0.70$.\nTherefore, $P(A^c | B^c) = \\frac{0.30}{0.70} = \\frac{3}{7} \\approx 0.4286$."
  }
]);
