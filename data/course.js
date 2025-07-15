export const courses = [
  {
    id: "MATH-10",
    name: "Mathematics",
    chapters: 15,
    duration: 60,
    details: {
      keyTopics: [
        "Real Numbers",
        "Polynomials",
        "Trigonometry",
        "Geometry",
        "Statistics",
        "Probability",
      ],
      resources: {
        videos: 150,
        solvedExamples: 100,
        practiceTests: 30,
      },
      examFocus: ["CBSE Board", "JEE Foundation", "NTSE"],
      teacher: "Prof. Sanjay Mehta (Ex-IITian, 10+ yrs exp)",
    },
    lessons: [
      {
        id: "MATH-10-1",
        title: "Real Numbers",
        topics: ["Euclid's Division Lemma", "HCF", "LCM", "Irrational Numbers"],
        content: `## Real Numbers
        ### 🔹 Introduction
Real Numbers include all the numbers on the number line – natural numbers, whole numbers, integers, rational, and irrational numbers.

---

### 🔹 Euclid’s Division Lemma
If you have two positive integers 'a' and 'b', there exist unique integers 'q' (quotient) and 'r' (remainder) such that:

\`\`\`
a = bq + r, where 0 ≤ r < b
\`\`\`

✅ Used to find the **HCF (Highest Common Factor)** of two numbers.

---

### 🔹 Fundamental Theorem of Arithmetic
Every composite number can be expressed uniquely as a product of prime numbers (ignoring order).  
**Example:**  
\`60 = 2 × 2 × 3 × 5\`

---

### 🔹 HCF and LCM Using Prime Factorization
- **HCF**: Product of the lowest powers of common primes.
- **LCM**: Product of the highest powers of all primes.

**Relation:**
\`\`\`
HCF × LCM = Product of the two numbers
\`\`\`

---

### 🔹 Rational and Irrational Numbers

- **Rational Number:** Can be expressed in \`p/q\` form, where q ≠ 0.
- **Irrational Number:** Cannot be written as \`p/q\`. Non-terminating and non-repeating decimals.

**Examples:**  
- Rational: 1/2, -4, 0.75  
- Irrational: √2, π

---

### 🔹 Decimal Expansions

- If a number terminates or repeats, it is **rational**.
- If it does neither, it's **irrational**.

**Examples:**
- \`0.333...\` → rational
- \`1.732...\` → irrational

---

### 🔹 Important Results

- Sum or product of a rational and irrational is **irrational** (in most cases).
- Square root of a non-perfect square is **irrational**.

---

### 🧠 Summary

- Real Numbers = Rational + Irrational
- Euclid’s Algorithm helps in HCF
- Prime Factorization is unique
- Irrational numbers can’t be expressed as fractions

---
### 📘 Practice Problems
1. Find HCF of 96 and 404 using Euclid’s Division Lemma.
2. Express 140 as a product of prime factors.
3. Is \`0.1010010001...\` rational or irrational?

        `,
      },
      {
        id: "MATH-10-2",
        title: "Polynomials",
        topics: ["Zeros of Polynomials", "Division Algorithm"],
        content: `
## Polynomials

### 🔹 What is a Polynomial?

A **polynomial** is an algebraic expression made up of variables and coefficients, involving only addition, subtraction, multiplication, and non-negative integer exponents.

**Examples:**
- \`2x^2 + 3x + 4\` → a quadratic polynomial
- \`x^3 - 2x^2 + 5\` → a cubic polynomial

---

### 🔹 Degree of a Polynomial

The **degree** is the highest power of the variable:
- \`3x^2 + 2x + 1\` → degree = 2
- \`5x^3 - x + 2\` → degree = 3

---

### 🔹 Types of Polynomials

| Type         | Example             |
|--------------|---------------------|
| Constant     | \`7\`                |
| Linear       | \`2x + 3\`           |
| Quadratic    | \`x^2 + 5x + 6\`     |
| Cubic        | \`x^3 - 3x + 1\`     |

---

### 🔹 Zeros of a Polynomial

A **zero (root)** of a polynomial is a value of x for which the polynomial becomes 0.

**Example:**
For \`p(x) = x^2 - 4\`  
\`p(2) = 0\` and \`p(-2) = 0\` → so zeros are 2 and -2.

---

### 🔹 Relationship Between Zeros and Coefficients

For a **quadratic polynomial**:  
\`p(x) = ax^2 + bx + c\`

Let \`α\` and \`β\` be the zeros.

Then:

\`\`\`
α + β = -b/a  
α × β = c/a
\`\`\`

---

### 🔹 Division Algorithm for Polynomials

If \`p(x)\` and \`g(x)\` are any two polynomials with \`g(x) ≠ 0\`, then there exist unique polynomials \`q(x)\` and \`r(x)\` such that:

\`\`\`
p(x) = g(x) × q(x) + r(x)
\`\`\`

Where:
- \`q(x)\` = quotient
- \`r(x)\` = remainder, and either \`r(x) = 0\` or degree of \`r(x)\` < degree of \`g(x)\`

---

### 🧠 Summary

- Polynomials are algebraic expressions with non-negative integer powers.
- Zeros are the values for which the polynomial becomes 0.
- For quadratics, there's a fixed relationship between coefficients and zeros.
- Division Algorithm helps break down one polynomial by another.

---

### 📘 Practice Problems

1. Find the zeros of \`x^2 - 7x + 10\`.
2. Verify the relationship between zeros and coefficients for \`2x^2 + 3x - 5\`.
3. Divide \`x^3 - 3x^2 + 5x - 2\` by \`x - 2\`.
`,
      },
      {
        id: "MATH-10-3",
        title: "Pair of Linear Equations",
        topics: ["Graphical Solution", "Substitution Method"],
        content: `
## Pair of Linear Equations in Two Variables

### 🔹 What is a Linear Equation?

A **linear equation in two variables** is of the form:

\`\`\`
ax + by + c = 0
\`\`\`

where:
- \`x\` and \`y\` are variables,
- \`a\`, \`b\`, and \`c\` are real numbers,
- and \`a ≠ 0\` or \`b ≠ 0\`.

---

### 🔹 What is a Pair?

When two such equations are considered together, they form a **pair** of linear equations in two variables.

**Example:**
\`\`\`
2x + 3y = 12  
x - y = 4
\`\`\`

---

### 🔹 Graphical Method of Solving

Each linear equation represents a line in 2D space. The **solution** is the point where both lines intersect.

#### Possible Outcomes:
1. **One solution** → lines intersect at one point → **consistent & independent**
2. **No solution** → lines are parallel → **inconsistent**
3. **Infinite solutions** → lines overlap → **dependent**

---

### 🔹 Algebraic Methods of Solving

#### 1. **Substitution Method**
- Solve one equation for one variable in terms of the other.
- Substitute into the second equation.

#### 2. **Elimination Method**
- Multiply equations (if needed) to align coefficients.
- Add or subtract to eliminate one variable.

#### 3. **Cross-Multiplication Method**
- Use the formula:

\`\`\`
x = (b1*c2 - b2*c1) / (a1*b2 - a2*b1)  
y = (c1*a2 - c2*a1) / (a1*b2 - a2*b1)
\`\`\`

Where the equations are:
\`\`\`
a1x + b1y + c1 = 0  
a2x + b2y + c2 = 0
\`\`\`

---

### 🔹 Applications in Real Life

These equations are used in:
- Business and economics (cost-profit analysis)
- Geometry (finding intersection points)
- Speed-distance-time problems

---

### 🧠 Summary

- A pair of linear equations can have 0, 1, or infinite solutions.
- Graphical and algebraic methods are both useful.
- Cross-multiplication works best when equations are in standard form.

---

### 📘 Practice Problems

1. Solve the pair:  
\`x + y = 10\`  
\`2x - y = 4\` using the substitution method.

2. Find the solution of  
\`3x + 4y = 10\`  
\`2x - y = 3\` using the elimination method.

3. Determine the nature of the following pair:  
\`2x + 3y = 5\`  
\`4x + 6y = 10\`

`,
      },
      {
        id: "MATH-10-4",
        title: "Quadratic Equations",
        topics: ["Factorization", "Quadratic Formula"],
        content: `
## Quadratic Equations

### 🔹 What is a Quadratic Equation?

A **quadratic equation** is a second-degree polynomial equation in the form:

\`\`\`
ax^2 + bx + c = 0
\`\`\`

where:
- \`a ≠ 0\`
- \`x\` is the variable
- \`a\`, \`b\`, and \`c\` are real numbers

---

### 🔹 Methods of Solving Quadratic Equations

#### 1. **Factorization Method**
- Split the middle term or use identity-based factorization.
- Set each factor equal to 0 to get the roots.

**Example:**
\`x^2 - 5x + 6 = 0\`  
Factors: \`(x - 2)(x - 3) = 0\`  
⇒ Roots: \`x = 2\`, \`x = 3\`

---

#### 2. **Completing the Square**
- Rewrite the equation so the left side becomes a perfect square.
- Take square root on both sides and solve.

---

#### 3. **Quadratic Formula**
The most universal method:

\`\`\`
x = (-b ± √(b² - 4ac)) / 2a
\`\`\`

Where:
- \`a, b, c\` are coefficients of the equation \`ax^2 + bx + c = 0\`
- The term \`b² - 4ac\` is called the **discriminant (D)**

---

### 🔹 Nature of Roots

| Discriminant (D)         | Nature of Roots             |
|--------------------------|-----------------------------|
| \`D > 0\`                 | Real and distinct           |
| \`D = 0\`                 | Real and equal              |
| \`D < 0\`                 | Complex/Imaginary (No real roots) |

---

### 🔹 Applications of Quadratic Equations

Used in:
- Projectile motion
- Geometry problems
- Time-speed-distance problems
- Business cost/profit analysis

---

### 🧠 Summary

- A quadratic equation is of the form \`ax^2 + bx + c = 0\`.
- Can be solved by factorization, completing the square, or using the quadratic formula.
- Discriminant helps determine the type of roots.

---

### 📘 Practice Problems

1. Solve: \`x^2 - 7x + 12 = 0\` by factorization.  
2. Use the quadratic formula to solve: \`2x^2 + 3x - 5 = 0\`  
3. Find the nature of the roots for: \`x^2 + 4x + 5 = 0\`

`,
      },
      {
        id: "MATH-10-5",
        title: "Arithmetic Progressions",
        topics: ["nth Term", "Sum of Terms"],
        content: `
## Arithmetic Progressions (AP)

### 🔹 What is an AP?

An **Arithmetic Progression (AP)** is a sequence of numbers in which the difference between consecutive terms is constant.

**Example:**  
\`2, 5, 8, 11, 14, ...\`  
Here, the common difference \`d = 5 - 2 = 3\`

---

### 🔹 Terminology

- **First term (a)**: The first number in the sequence  
- **Common difference (d)**: The difference between consecutive terms  
- **nth term (Tₙ)**: The term at position n  
- **Number of terms (n)**: Total terms in the sequence

---

### 🔹 nth Term Formula

To find the **nth term** of an AP:

\`\`\`
Tₙ = a + (n - 1)d
\`\`\`

**Example:**  
If \`a = 3\`, \`d = 4\`, then the 10th term:  
\`T₁₀ = 3 + (10 - 1) × 4 = 3 + 36 = 39\`

---

### 🔹 Sum of First n Terms

To find the **sum of the first n terms (Sₙ)** of an AP:

\`\`\`
Sₙ = (n / 2) × [2a + (n - 1)d]
\`\`\`

Or,

\`\`\`
Sₙ = (n / 2) × (a + Tₙ)
\`\`\`

**Example:**  
Find the sum of the first 5 terms of the AP: \`2, 4, 6, 8, 10\`  
Here, \`a = 2\`, \`d = 2\`, \`n = 5\`  
\`S₅ = (5/2) × [2 × 2 + (5 - 1) × 2] = (5/2) × [4 + 8] = (5/2) × 12 = 30\`

---

### 🔹 Applications of AP

- Calculating savings or installments
- Predicting future values with a constant increase/decrease
- Analyzing sequences in real-life problems

---

### 🧠 Summary

- AP has a constant common difference.
- Use \`Tₙ = a + (n - 1)d\` to find any term.
- Use \`Sₙ = (n / 2)[2a + (n - 1)d]\` to find the sum of terms.

---

### 📘 Practice Problems

1. Find the 20th term of the AP: \`7, 10, 13, ...\`  
2. How many terms of the AP \`3, 6, 9, ...\` add up to 90?  
3. Find the sum of first 15 terms of the AP: \`10, 7, 4, ...\`

`,
      },
      {
        id: "MATH-10-6",
        title: "Triangles",
        topics: ["Similarity Criteria", "Pythagoras Theorem"],
        content: `
## Triangles

### 🔹 What is a Triangle?

A **triangle** is a closed 2D figure with three sides, three angles, and three vertices. It is one of the basic shapes in geometry.

---

### 🔹 Similarity of Triangles

Two triangles are said to be **similar** if:
- Their corresponding angles are equal
- Their corresponding sides are in the same ratio

---

### 🔹 Criteria for Similarity

1. **AA (Angle-Angle) Similarity:**  
   If two angles of one triangle are respectively equal to two angles of another triangle.

2. **SSS (Side-Side-Side) Similarity:**  
   If the corresponding sides of two triangles are in the same ratio.

3. **SAS (Side-Angle-Side) Similarity:**  
   If two sides of one triangle are in the same ratio as two sides of another triangle and the included angles are equal.

---

### 🔹 Properties of Similar Triangles

- The corresponding altitudes, medians, and angle bisectors are also in the same ratio.
- The **areas** of two similar triangles are in the **square of the ratio of their corresponding sides**.

**Example:**  
If \`∆ABC ∼ ∆PQR\` and \`AB/PQ = 2/3\`,  
then:  
\`Area(∆ABC) / Area(∆PQR) = (2/3)^2 = 4/9\`

---

### 🔹 Pythagoras Theorem

In a **right-angled triangle**, the square of the hypotenuse is equal to the sum of the squares of the other two sides:

\`\`\`
Hypotenuse² = Base² + Height²
\`\`\`

**Example:**  
If one triangle has sides 3 cm and 4 cm, then the hypotenuse:  
\`= √(3² + 4²) = √(9 + 16) = √25 = 5 cm\`

---

### 🔹 Converse of Pythagoras Theorem

If in a triangle, the square of one side is equal to the sum of the squares of the other two sides, then the triangle is a right-angled triangle.

---

### 🧠 Summary

- Similar triangles have equal angles and proportional sides.
- AA, SSS, and SAS are used to prove similarity.
- Pythagoras Theorem holds true in right-angled triangles.

---

### 📘 Practice Problems

1. Show that two triangles are similar using the AA criterion.  
2. In ∆ABC and ∆DEF, \`AB/DE = BC/EF = AC/DF\`. Are the triangles similar?  
3. Verify the Pythagoras theorem for a triangle with sides 6 cm, 8 cm, and 10 cm.  
4. The areas of two similar triangles are 49 cm² and 64 cm². Find the ratio of their corresponding sides.

`,
      },
      {
        id: "MATH-10-7",
        title: "Coordinate Geometry",
        topics: ["Distance Formula", "Section Formula"],
        content: `
## Coordinate Geometry

### 🔹 Introduction

**Coordinate Geometry** is the study of geometry using algebra and the coordinate plane. It helps to locate points, find distances, and divide line segments using algebraic formulas.

---

### 🔹 Cartesian Plane

A **Cartesian plane** has two axes:
- **X-axis** (horizontal)
- **Y-axis** (vertical)

The point where they intersect is called the **origin** (0, 0).

Each point on the plane is represented as \`(x, y)\`, called **coordinates**.

---

### 🔹 Distance Formula

To find the **distance** between two points:  
\`A(x₁, y₁)\` and \`B(x₂, y₂)\`

The distance \`AB\` is given by:

\`\`\`
AB = √[(x₂ - x₁)² + (y₂ - y₁)²]
\`\`\`

**Example:**  
A(1, 2), B(4, 6)  
\`AB = √[(4 - 1)² + (6 - 2)²] = √[9 + 16] = √25 = 5\`

---

### 🔹 Section Formula

If a point \`P(x, y)\` divides the line segment joining \`A(x₁, y₁)\` and \`B(x₂, y₂)\` in the ratio \`m : n\`, then:

\`\`\`
P(x, y) = ((mx₂ + nx₁) / (m + n), (my₂ + ny₁) / (m + n))
\`\`\`

📝 If the point divides the line **internally**, the formula applies directly.

---

### 🔹 Midpoint Formula

The midpoint of a line joining two points is the **average** of their coordinates:

\`\`\`
Midpoint M = ((x₁ + x₂)/2, (y₁ + y₂)/2)
\`\`\`

---

### 🔹 Applications

- Calculating length of sides of triangles/quadrilaterals.
- Finding midpoints or coordinates dividing a line segment.
- Verifying triangle types (isosceles, right-angled) using distances.

---

### 🧠 Summary

- Every point in a plane can be located using coordinates.
- Distance formula helps find length between two points.
- Section formula divides a line in a given ratio.
- Midpoint formula finds the center point of a segment.

---

### 📘 Practice Problems

1. Find the distance between \`A(3, 4)\` and \`B(7, 1)\`.  
2. Find the coordinates of the point that divides the line joining \`A(2, -3)\` and \`B(5, 3)\` in the ratio 2:1.  
3. What is the midpoint of the line joining \`(4, -2)\` and \`(6, 4)\`?

`,
      },
      {
        id: "MATH-10-8",
        title: "Trigonometry",
        topics: ["Trigonometric Ratios", "Heights & Distances"],
        content: `
## Trigonometry

### 🔹 What is Trigonometry?

**Trigonometry** is the branch of mathematics that deals with the relationships between the sides and angles of a right-angled triangle.

It is used widely in geometry, navigation, physics, and engineering.

---

### 🔹 Right-Angled Triangle Basics

In a right-angled triangle:
- The **side opposite** to the right angle is called the **hypotenuse**
- The side **opposite to the angle (θ)** is called the **opposite side**
- The side **adjacent to the angle (θ)** is called the **adjacent side**

---

### 🔹 Trigonometric Ratios

Let’s denote an angle as \`θ\`. The primary trigonometric ratios are:

| Ratio     | Definition                        | Formula                  |
|-----------|-----------------------------------|--------------------------|
| sin θ     | Sine of angle                     | Opposite / Hypotenuse    |
| cos θ     | Cosine of angle                   | Adjacent / Hypotenuse    |
| tan θ     | Tangent of angle                  | Opposite / Adjacent      |
| cosec θ   | Reciprocal of sin θ               | Hypotenuse / Opposite    |
| sec θ     | Reciprocal of cos θ               | Hypotenuse / Adjacent    |
| cot θ     | Reciprocal of tan θ               | Adjacent / Opposite      |

---

### 🔹 Values of Trigonometric Ratios (for standard angles)

| θ (in degrees) | sin θ | cos θ | tan θ |
|----------------|--------|--------|--------|
| 0°             | 0      | 1      | 0      |
| 30°            | 1/2    | √3/2   | 1/√3   |
| 45°            | √2/2   | √2/2   | 1      |
| 60°            | √3/2   | 1/2    | √3     |
| 90°            | 1      | 0      | Not Defined |

---

### 🔹 Trigonometric Identities

These are always true for all values of θ (in domain):

\`\`\`
1. sin²θ + cos²θ = 1  
2. 1 + tan²θ = sec²θ  
3. 1 + cot²θ = cosec²θ
\`\`\`

---

### 🔹 Applications in Heights and Distances

Used to find unknown heights or distances using angles of elevation and depression.

- **Angle of elevation**: looking up at an object
- **Angle of depression**: looking down from a height

📝 Always form a right-angled triangle and apply trigonometric ratios accordingly.

---

### 🧠 Summary

- Trigonometry deals with angles and sides of right triangles.
- Use sin, cos, and tan to relate angles to side lengths.
- Identities help simplify and solve problems.
- Common in real-life: height of buildings, bridges, etc.

---

### 📘 Practice Problems

1. Evaluate: \`sin 30° + cos 60°\`  
2. If \`tan θ = 1\`, find \`sin θ\` and \`cos θ\`  
3. A ladder leans against a wall making an angle of 60° with the ground. If the ladder is 10 m long, find the height it reaches on the wall.  
4. Prove: \`1 + tan²θ = sec²θ\`

`,
      },
      {
        id: "MATH-10-9",
        title: "Circles",
        topics: ["Tangents", "Theorems"],
        content: `
## Circles

### 🔹 What is a Circle?

A **circle** is a collection of all points in a plane that are at a fixed distance (called the **radius**) from a fixed point (called the **center**).

---

### 🔹 Basic Terms

- **Radius (r):** Distance from center to any point on the circle  
- **Diameter:** Twice the radius  
- **Chord:** A line segment joining two points on the circle  
- **Arc:** A part of the circle’s circumference  
- **Tangent:** A line that touches the circle at exactly one point  
- **Secant:** A line that intersects the circle at two points

---

### 🔹 Tangents to a Circle

A **tangent** is a line that touches the circle at exactly one point. It is **perpendicular to the radius** at the point of contact.

---

### 🔹 Theorems on Tangents

#### ✅ **Theorem 1**  
**The tangent at any point of a circle is perpendicular to the radius through the point of contact.**

#### ✅ **Theorem 2**  
**The lengths of tangents drawn from an external point to a circle are equal.**

---

### 🔹 Number of Tangents from a Point

- **From a point inside the circle**: No tangent possible  
- **From a point on the circle**: Exactly one tangent  
- **From a point outside the circle**: Exactly two tangents

---

### 🔹 Construction Use

Using tangents is essential in geometric constructions like:
- Drawing tangents from an external point
- Designing wheels, pulleys, gears, etc.

---

### 🧠 Summary

- A tangent touches a circle at exactly one point.
- Tangents are perpendicular to the radius at the point of contact.
- Tangents from an external point are always equal in length.

---

### 📘 Practice Problems

1. Prove that the tangent at any point of a circle is perpendicular to the radius.  
2. Draw two tangents to a circle from an external point.  
3. From a point 10 cm away from the center of a circle of radius 6 cm, find the length of each tangent drawn to the circle.

`,
      },
      {
        id: "MATH-10-10",
        title: "Constructions",
        topics: ["Division of Line Segment", "Tangent Construction"],
        content: `
## Constructions

### 🔹 Introduction

Geometrical constructions involve creating figures using only a **compass and straightedge**, without measuring tools like a protractor or ruler (except for drawing straight lines).

---

### 🔹 1. Division of a Line Segment

#### 🛠 Objective:
To divide a given line segment into a number of equal parts (say in the ratio \`m : n\`).

#### ✏️ Steps:
1. Draw a line segment \`AB\`.
2. From point \`A\`, draw a ray \`AX\` making an acute angle with \`AB\`.
3. Mark \`m + n\` equal divisions on \`AX\` using compass (points A₁, A₂, …).
4. Join the last point \`A_{m+n}\` to point \`B\`.
5. Draw a line through the \`m^{th}\` point on the ray parallel to \`A_{m+n}B\` using a compass and ruler.
6. This line meets \`AB\` at the point that divides it in the ratio \`m : n\`.

---

### 🔹 2. Construction of Tangents to a Circle

#### 🛠 Objective:
To draw tangents from a point **outside** the circle to the circle.

#### ✏️ Steps:
1. Draw a circle with center \`O\` and radius \`r\`.
2. Mark a point \`P\` outside the circle.
3. Join \`OP\` and find its midpoint \`M\`.
4. With \`M\` as center and \`OM\` as radius, draw a circle (perpendicular bisector).
5. Let this circle intersect the original circle at points \`Q\` and \`R\`.
6. Draw lines \`PQ\` and \`PR\` – these are the required **tangents** from \`P\` to the circle.

---

### 🔹 Important Tips

- Always use a **sharp pencil and accurate compass settings** for neat constructions.
- Practice is essential for mastering constructions.

---

### 🧠 Summary

- A line segment can be divided in a given ratio using a compass and straightedge.
- From a point outside the circle, two tangents can be constructed.
- Tangents are perpendicular to the radius at the point of contact.

---

### 📘 Practice Problems

1. Divide a 10 cm line segment in the ratio 3:2.  
2. Draw a circle of radius 4 cm and construct tangents from a point 7 cm away.  
3. Verify that the tangents constructed are equal in length using a ruler (optional).

`,
      },
      {
        id: "MATH-10-11",
        title: "Areas Related to Circles",
        topics: ["Perimeter & Area of Sectors"],
        content: `
## Areas Related to Circles

### 🔹 Introduction

Circles are common in real life — wheels, coins, pizzas. Understanding how to calculate **area** and **perimeter** (circumference) is essential for solving real-world geometry problems.

---

### 🔹 Key Formulas

#### ✅ Circumference of a Circle
\`\`\`
C = 2πr
\`\`\`
Where \`r\` is the radius.

#### ✅ Area of a Circle
\`\`\`
A = πr²
\`\`\`

---

### 🔹 Sector of a Circle

A **sector** is a region bounded by two radii and the arc between them (like a slice of pizza).

#### ✅ Area of Sector (with angle θ in degrees)
\`\`\`
Area = (θ / 360) × πr²
\`\`\`

#### ✅ Length of Arc
\`\`\`
Length = (θ / 360) × 2πr
\`\`\`

---

### 🔹 Segment of a Circle

A **segment** is the area bounded by a chord and the corresponding arc.

> Area of segment = Area of sector − Area of triangle (formed by the two radii and the chord)

---

### 🔹 Perimeter of Sector

\`\`\`
Perimeter = 2r + (θ / 360) × 2πr
\`\`\`

(Where \`2r\` is the sum of the two radii)

---

### 🔹 Use π ≈ 3.14 or 22/7 as instructed

---

### 🧠 Summary

- Circle: \`Area = πr²\`, \`Circumference = 2πr\`
- Sector:  
  → \`Area = (θ / 360) × πr²\`  
  → \`Arc Length = (θ / 360) × 2πr\`  
- Segment = Sector − Triangle

---

### 📘 Practice Problems

1. Find the area of a sector with radius 7 cm and angle 60°.  
2. A circle has a radius of 14 cm. Find its area and circumference.  
3. Find the length of an arc subtending 90° at the center of a circle with radius 10 cm.  
4. A sector of angle 120° has a radius of 6 cm. Find the area of the sector and the length of the arc.

`,
      },
      {
        id: "MATH-10-12",
        title: "Surface Areas & Volumes",
        topics: ["Cone", "Sphere", "Hemisphere"],
        content: `
## Surface Areas & Volumes

### 🔹 Introduction

In this chapter, we study **3D shapes** and how to calculate their **surface area** (total area covering the object) and **volume** (space occupied by it).

We'll focus on **Cone**, **Sphere**, and **Hemisphere**.

---

### 🔹 Cone

A cone has:
- A circular base
- A curved surface that tapers to a point (vertex)

#### ✅ Formulas:
- **Curved Surface Area (CSA)**:  
  \`πrl\`  
  (where \`r\` = radius, \`l\` = slant height)

- **Total Surface Area (TSA)**:  
  \`πr(l + r)\`

- **Volume**:  
  \`(1/3)πr²h\`  
  (where \`h\` = vertical height)

---

### 🔹 Sphere

A sphere is a perfectly round 3D shape like a ball.

#### ✅ Formulas:
- **Surface Area**:  
  \`4πr²\`

- **Volume**:  
  \`(4/3)πr³\`

---

### 🔹 Hemisphere

A hemisphere is half of a sphere.

#### ✅ Formulas:
- **Curved Surface Area (CSA)**:  
  \`2πr²\`

- **Total Surface Area (TSA)**:  
  \`3πr²\`  
  (includes base circle)

- **Volume**:  
  \`(2/3)πr³\`

---

### 🔹 Units

- Surface Area: square units (e.g., cm², m²)
- Volume: cubic units (e.g., cm³, m³)

---

### 🔹 Applications

Used in:
- Tank construction
- Packaging
- Architecture
- Science & Engineering

---

### 🧠 Summary

| Shape      | Surface Area                     | Volume                       |
|------------|----------------------------------|-------------------------------|
| Cone       | CSA: πrl, TSA: πr(l + r)         | (1/3)πr²h                     |
| Sphere     | 4πr²                              | (4/3)πr³                      |
| Hemisphere | CSA: 2πr², TSA: 3πr²              | (2/3)πr³                      |

---

### 📘 Practice Problems

1. Find the total surface area of a cone with \`r = 3 cm\`, \`l = 5 cm\`.  
2. A sphere has radius 7 cm. Find its surface area and volume.  
3. What is the volume of a hemisphere with radius 6 cm?  
4. A cone has a height of 12 cm and a base radius of 5 cm. Find its volume.  
5. If the TSA of a hemisphere is 1386 cm², find its radius.

`,
      },
      {
        id: "MATH-10-13",
        title: "Statistics",
        topics: ["Mean", "Median", "Mode"],
        content: `
## Statistics

### 🔹 Introduction

**Statistics** is the study of collecting, organizing, and interpreting numerical data. In Class 10, we mainly focus on **grouped data** and calculating its **mean**, **median**, and **mode**.

---

### 🔹 1. Mean (Average)

#### ✅ Formula (for grouped data):
\`\`\`
Mean = (Σfᵢxᵢ) / (Σfᵢ)
\`\`\`
Where:
- \`fᵢ\` = frequency of the i-th class
- \`xᵢ\` = class mark = (upper limit + lower limit)/2

#### ✅ Step-Deviation Method (for large numbers):
\`\`\`
Mean = a + [(Σfᵢuᵢ) / (Σfᵢ)] × h
\`\`\`
Where:
- \`a\` = assumed mean
- \`uᵢ = (xᵢ - a) / h\`
- \`h\` = class width

---

### 🔹 2. Mode

#### ✅ Mode (grouped data):
\`\`\`
Mode = l + [(f₁ - f₀) / (2f₁ - f₀ - f₂)] × h
\`\`\`

Where:
- \`l\` = lower boundary of modal class  
- \`f₁\` = frequency of modal class  
- \`f₀\` = frequency of class before modal class  
- \`f₂\` = frequency of class after modal class  
- \`h\` = class width

---

### 🔹 3. Median

#### ✅ Median (grouped data):
\`\`\`
Median = l + [(n/2 – F) / f] × h
\`\`\`

Where:
- \`l\` = lower boundary of median class  
- \`n\` = total frequency  
- \`F\` = cumulative frequency before median class  
- \`f\` = frequency of median class  
- \`h\` = class width

---

### 🔹 Tips

- Use tables to organize data clearly.
- Use the **step deviation method** for quicker calculations.
- Identify **modal class** and **median class** carefully using frequency and cumulative frequency.

---

### 🧠 Summary

| Measure | Purpose                | Key Formula                                |
|---------|------------------------|--------------------------------------------|
| Mean    | Central tendency       | (Σfᵢxᵢ)/(Σfᵢ) or Step Deviation Formula     |
| Median  | Middle value position  | l + [(n/2 – F)/f] × h                       |
| Mode    | Most frequent value    | l + [(f₁ - f₀)/(2f₁ - f₀ - f₂)] × h         |

---

### 📘 Practice Problems

1. Find the mean of the following data:  
   Class: 0–10, 10–20, 20–30  
   Frequency: 5, 8, 7

2. Find the mode of the following frequency distribution:  
   Modal class: 30–40, frequency: 12  
   Previous class: 20–30, f₀ = 6  
   Next class: 40–50, f₂ = 8

3. The median of a class distribution is 46, find the missing frequency.

`,
      },
      {
        id: "MATH-10-14",
        title: "Probability",
        topics: ["Theoretical Probability"],
        content: `
## Probability

### 🔹 Introduction

**Probability** is the measure of the likelihood of an event occurring. It ranges from 0 (impossible) to 1 (certain).

In Class 10, we focus on **Theoretical Probability** — calculated based on reasoning or known possible outcomes.

---

### 🔹 Key Terms

- **Experiment**: An action like tossing a coin or rolling a die.
- **Sample Space (S)**: The set of all possible outcomes.
- **Event**: A subset of the sample space — one or more outcomes.

---

### 🔹 Theoretical Probability

\`\`\`
P(E) = (Number of favorable outcomes) / (Total number of outcomes)
\`\`\`

> This formula assumes that all outcomes are **equally likely**.

---

### 🔹 Examples

1. **Tossing a coin**:  
   - Sample space: {Head, Tail}  
   - P(Head) = 1/2

2. **Rolling a die**:  
   - Sample space: {1, 2, 3, 4, 5, 6}  
   - P(Even number) = 3/6 = 1/2

3. **Drawing a card from a deck**:  
   - Total cards = 52  
   - P(King) = 4/52 = 1/13

---

### 🔹 Properties of Probability

- \( 0 ≤ P(E) ≤ 1 \)
- P(Sure Event) = 1
- P(Impossible Event) = 0
- P(not E) = 1 − P(E)

---

### 🧠 Summary

- Probability is a value between 0 and 1.
- Theoretical probability uses the basic formula:
  \`P(E) = Favorable / Total\`
- All outcomes should be equally likely.

---

### 📘 Practice Problems

1. What is the probability of getting a number less than 5 when a die is rolled?  
2. Find the probability of drawing a red card from a deck.  
3. A box contains 3 red, 2 green, and 5 blue balls. One is drawn at random. Find the probability that it is:  
   a) red b) not green  
4. A card is drawn from a well-shuffled deck. What is the probability that it is:  
   a) a queen b) a red king c) not a spade

`,
      },
    ],
  },
  {
    id: "SCI-10",
    name: "Science",
    chapters: 16,
    duration: 70,
    details: {
      keyTopics: [
        "Light",
        "Electricity",
        "Acids/Bases",
        "Life Processes",
        "Heredity",
      ],
      resources: {
        videos: 120,
        labExperiments: 20,
        mcqs: 500,
      },
      examFocus: ["CBSE", "NEET/Foundation", "Olympiads"],
      teacher: "Dr. Priya Singh (AIIMS), Dr. Rajesh Kumar (IIT Delhi)",
    },
    lessons: [
      {
        id: "SCI-10-PHY-1",
        title: "Light: Reflection & Refraction",
        topics: ["Mirrors", "Lenses", "Power of Lens"],
        content: `
## Light: Reflection & Refraction

### 🔹 Introduction

Light enables us to see objects around us. When light strikes a surface, it can be **reflected**, **refracted**, or **absorbed**.

---

### 🔹 Reflection of Light

#### ✅ Laws of Reflection:
1. The angle of incidence = angle of reflection.
2. Incident ray, reflected ray, and normal lie in the same plane.

#### 🔍 Types of Reflection:
- **Regular reflection**: From smooth surfaces like mirrors.
- **Diffuse reflection**: From rough surfaces.

#### ✅ Image Formation by Mirrors:
- **Plane Mirror**: Virtual, erect, same size image.
- **Concave Mirror**:
  - Real or virtual depending on object position.
  - Applications: Headlights, shaving mirrors.
- **Convex Mirror**:
  - Always virtual, erect, diminished image.
  - Applications: Rear-view mirrors.

---

### 🔹 Refraction of Light

**Refraction** is the bending of light when it travels from one medium to another (e.g., air to glass).

#### ✅ Laws of Refraction:
1. Incident ray, refracted ray, and normal lie in the same plane.
2. \`n₁ sin i = n₂ sin r\` (Snell's Law)

#### ✅ Effects of Refraction:
- Pencil appearing bent in water.
- Coin in water appearing closer.

---

### 🔹 Lenses

**Lens** is a transparent medium bounded by two curved surfaces.

#### ✅ Types:
- **Convex Lens** (converging)
- **Concave Lens** (diverging)

#### ✅ Image Formation by Lenses:
- Convex lens: real or virtual depending on position.
- Concave lens: always virtual, erect, diminished.

---

### 🔹 Power of a Lens

\`\`\`
Power (P) = 100 / f (in cm)
\`\`\`

- Unit: Dioptre (D)
- Positive for convex lenses, negative for concave.

---

### 🧠 Summary

| Concept        | Description                                    |
|----------------|------------------------------------------------|
| Reflection     | Bouncing back of light                        |
| Refraction     | Bending of light at interface                 |
| Convex Lens    | Converging lens                               |
| Concave Lens   | Diverging lens                                |
| Mirror Image   | Depends on object position & mirror type      |
| Power of Lens  | 100/f, used to measure lens strength          |

---

### 📘 Practice Questions

1. State the laws of reflection.  
2. A ray of light enters from air to glass. What happens to its speed and direction?  
3. Draw ray diagrams for image formation by a convex lens when the object is beyond 2F.  
4. Define 1 dioptre of lens power.  
5. A lens has focal length 50 cm. Find its power.

`,
      },
      {
        id: "SCI-10-PHY-2",
        title: "Human Eye & Colorful World",
        topics: ["Defects of Vision", "Dispersion"],
        content: `
## The Human Eye and the Colourful World

### 🔹 The Human Eye

The human eye is a **natural optical device** that enables us to see objects around us by sensing light.

#### ✅ Key Parts:
- **Cornea**: Transparent front part; bends light.
- **Aqueous Humor**: Fluid behind the cornea.
- **Iris**: Colored part that controls light entry.
- **Pupil**: Opening in the iris; adjusts with light.
- **Lens**: Convex lens that focuses light.
- **Retina**: Inner screen with light-sensitive cells.
- **Ciliary Muscles**: Change lens curvature.

#### ✅ Power of Accommodation:
The ability of the eye lens to adjust its focal length to see near and distant objects clearly.

---

### 🔹 Defects of Vision

1. **Myopia (Short-sightedness)**  
   - Cannot see distant objects clearly.  
   - Corrected with **concave lens**.

2. **Hypermetropia (Long-sightedness)**  
   - Cannot see nearby objects clearly.  
   - Corrected with **convex lens**.

3. **Presbyopia**  
   - Age-related; lens loses flexibility.  
   - Corrected with **bifocal lenses**.

---

### 🔹 Refraction Through a Prism

When white light passes through a glass prism, it splits into **seven colours** – this is called **dispersion**.

#### ✅ Spectrum:
- VIBGYOR: Violet, Indigo, Blue, Green, Yellow, Orange, Red

- **Red**: Least deviation  
- **Violet**: Most deviation

---

### 🔹 Rainbow Formation

Rainbows are formed due to **dispersion, refraction, and reflection** of sunlight in raindrops.

- Sunlight enters a droplet → refracts → reflects internally → disperses → refracts again → rainbow seen.

---

### 🔹 Atmospheric Refraction Effects

1. **Twinkling of stars**  
   - Caused by atmospheric refraction of starlight.

2. **Apparent sunrises and sunsets**  
   - The Sun appears earlier and sets later than actual time.

3. **Blue Sky & Red Sunsets**  
   - Due to **scattering of light**:
     - **Blue light** scatters more than red (Rayleigh scattering).
     - **Red Sun**: Longer path at sunset → red scatters least → reaches eyes.

---

### 🧠 Summary

| Concept              | Details                                  |
|----------------------|------------------------------------------|
| Myopia               | Corrected with concave lens              |
| Hypermetropia        | Corrected with convex lens               |
| Dispersion           | Splitting of white light by prism        |
| Rainbow              | Refraction + reflection + dispersion     |
| Twinkling            | Due to atmospheric refraction            |
| Red Sunset/Blue Sky  | Due to scattering of light               |

---

### 📘 Practice Questions

1. Draw a diagram showing image formation in a myopic eye and its correction.  
2. What is the function of iris and pupil?  
3. Explain the formation of rainbow.  
4. Why does the sky appear blue?  
5. Name the lens used to correct presbyopia.

`,
      },
      {
        id: "SCI-10-PHY-3",
        title: "Electricity",
        topics: ["Ohm's Law", "Series/Parallel Circuits"],
        content: `
## Electricity

### 🔹 Introduction

Electricity is the flow of electric charge (usually electrons) through a conductor. It is a fundamental part of our daily life and powers devices, machines, and appliances.

---

### 🔹 Electric Current

- **Definition**: The rate of flow of electric charge.
- **Formula**:  
  \`I = Q / t\`  
  Where \`I\` = current (A), \`Q\` = charge (C), \`t\` = time (s)
- **Unit**: Ampere (A)

---

### 🔹 Electric Potential & Potential Difference

- **Electric Potential**: Work done per unit charge to move a charge from infinity to that point.
- **Potential Difference (V)**:  
  \`V = W / Q\`  
  Where \`W\` = work done, \`Q\` = charge

- **Unit**: Volt (V)

---

### 🔹 Ohm’s Law

\`\`\`
V = I × R
\`\`\`

- \`V\` = potential difference (V)  
- \`I\` = current (A)  
- \`R\` = resistance (Ω)

Graph: A straight line graph of V vs I shows constant resistance.

---

### 🔹 Resistance

- **Resistance**: Property that opposes the flow of current.

- **Factors affecting resistance**:
  - Length (R ∝ L)
  - Area (R ∝ 1/A)
  - Material
  - Temperature

#### ✅ Resistivity (\`ρ\`)
\`\`\`
R = ρ × (L / A)
\`\`\`

- **Unit**: ohm meter (Ω·m)

---

### 🔹 Series & Parallel Circuits

#### ✅ Series:
- Current is same through all components.
- Total resistance:  
  \`R = R₁ + R₂ + R₃\`
- Voltage divides.

#### ✅ Parallel:
- Voltage is same across all branches.
- Total resistance:  
  \`1/R = 1/R₁ + 1/R₂ + 1/R₃\`
- Current divides.

---

### 🔹 Heating Effect of Electric Current

When current flows through a resistor, heat is produced:
\`\`\`
H = I²Rt
\`\`\`
Used in:
- Electric heater, toaster, iron, fuse

---

### 🔹 Electric Power

\`\`\`
P = V × I = I²R = V²/R
\`\`\`

- **Unit**: Watt (W)
- **1 kilowatt-hour (kWh)** = 1000 Watts used for 1 hour = **1 Unit** of electricity

---

### 🧠 Summary

| Concept              | Formula/Explanation                   |
|----------------------|----------------------------------------|
| Current              | I = Q / t                              |
| Potential Difference | V = W / Q                              |
| Ohm’s Law            | V = I × R                              |
| Resistance           | R = ρL/A                               |
| Heat Produced        | H = I²Rt                               |
| Power                | P = VI or I²R or V²/R                  |
| 1 kWh                | = 3.6 × 10⁶ J                          |

---

### 📘 Practice Questions

1. A current of 2 A flows through a wire for 5 minutes. Find the charge.  
2. Define 1 volt.  
3. Find the total resistance in a series circuit with 3 resistors: 2 Ω, 3 Ω, and 5 Ω.  
4. Two bulbs are connected in parallel. If one bulb fuses, what happens to the other?  
5. A 100 W bulb operates for 5 hours. How much energy is consumed in kWh?

`,
      },
      {
        id: "SCI-10-PHY-4",
        title: "Magnetic Effects of Current",
        topics: ["Fleming's Rules", "Electromagnet"],
        content: `
## Magnetic Effects of Electric Current

### 🔹 Introduction

When an electric current passes through a conductor, it produces a **magnetic field** around it. This was discovered by **Hans Christian Oersted**.

---

### 🔹 Magnetic Field

- Region around a magnet or current-carrying wire where its effect can be felt.
- Represented by **magnetic field lines**.

#### ✅ Properties of Field Lines:
- Emerge from north and enter south pole.
- Never intersect.
- Closer lines → stronger field.

---

### 🔹 Magnetic Field Due to a Current

1. **Straight Current-Carrying Wire**:
   - Circular magnetic field around the wire.
   - Direction: Right-hand thumb rule.

2. **Circular Loop**:
   - Magnetic field lines form concentric circles.
   - Strongest at center of loop.

3. **Solenoid**:
   - Long coil of wire.
   - Magnetic field similar to that of a bar magnet.
   - Used to create **electromagnets**.

---

### 🔹 Electromagnet

- A soft iron core inserted in a current-carrying solenoid.
- Temporary strong magnet.
- Used in electric bells, motors, cranes.

---

### 🔹 Force on a Current-Carrying Conductor

- A conductor placed in a magnetic field experiences a force.

#### ✅ Fleming’s Left-Hand Rule:

- **Thumb** → direction of force (motion)  
- **Forefinger** → magnetic field  
- **Middle finger** → current

→ Used in **electric motors**.

---

### 🔹 Electric Motor

A device that converts **electrical energy into mechanical energy**.

#### ✅ Principle:
A current-carrying coil placed in a magnetic field experiences a force.

#### ✅ Main Parts:
- Coil, magnet, split ring (commutator), brushes, battery

#### ✅ Applications:
- Fans, mixers, washing machines

---

### 🔹 Electromagnetic Induction

Discovered by **Michael Faraday**: A **changing magnetic field** induces a current in a coil.

#### ✅ Fleming’s Right-Hand Rule:

- **Thumb** → motion of conductor  
- **Forefinger** → magnetic field  
- **Middle finger** → induced current

→ Used in **electric generators**.

---

### 🔹 Electric Generator

Converts **mechanical energy into electrical energy** using electromagnetic induction.

#### ✅ Types:
- **AC Generator**: Alternating current (used in homes)
- **DC Generator**: Direct current (used in batteries)

---

### 🧠 Summary

| Concept                     | Description                              |
|-----------------------------|------------------------------------------|
| Magnetic Field              | Produced by current                      |
| Right-Hand Thumb Rule       | Field direction for straight wire        |
| Left-Hand Rule              | Force on conductor (used in motors)      |
| Electromagnet               | Temporary magnet via solenoid            |
| Electromagnetic Induction   | Induced current by changing field        |
| Right-Hand Rule             | Direction of induced current             |

---

### 📘 Practice Questions

1. Define magnetic field and list two properties of field lines.  
2. Draw field lines around a straight current-carrying wire.  
3. Explain the working of an electric motor with diagram.  
4. What is the principle of an electric generator?  
5. Distinguish between AC and DC generators.

`,
      },
      {
        id: "SCI-10-PHY-5",
        title: "Sources of Energy",
        topics: ["Renewable vs Non-Renewable"],
        content: `
## Sources of Energy

### 🔹 Introduction

Energy is required to perform all activities — lighting, transportation, cooking, etc. A good source of energy should be **easily available, efficient, cost-effective, and eco-friendly**.

---

### 🔹 Classification of Energy Sources

#### ✅ 1. Non-Renewable Sources
- Available in limited quantity.
- Cannot be replenished in short time.

Examples:
- **Fossil Fuels**: Coal, petroleum, natural gas
- **Nuclear Energy**: From radioactive substances like uranium

👉 Problems:
- Air pollution
- Global warming
- Acid rain
- Limited reserves

---

#### ✅ 2. Renewable Sources
- Naturally replenished
- Environment-friendly

Examples:
- **Solar Energy**: From the sun using solar panels
- **Wind Energy**: Wind turbines convert kinetic energy to electric
- **Hydro Energy**: Flowing water drives turbines
- **Biomass Energy**: Organic matter like cow dung, wood
- **Tidal Energy**: Movement of sea tides
- **Geothermal Energy**: Heat from Earth’s interior

👉 Advantages:
- Sustainable
- Low pollution
- Long-term solution

---

### 🔹 Characteristics of a Good Fuel

- High calorific value
- Easily available
- Cheap
- Easy to store/transport
- Eco-friendly

---

### 🔹 Conventional vs Non-Conventional Sources

| Criteria         | Conventional            | Non-Conventional              |
|------------------|--------------------------|-------------------------------|
| Availability     | Limited (e.g., coal)     | Unlimited (e.g., solar)       |
| Cost             | Often cheaper initially  | Costly but cost drops over time |
| Pollution        | High                     | Low or zero                   |

---

### 🔹 Environmental Impact of Using Energy

- Burning fossil fuels → pollution
- Deforestation for wood → biodiversity loss
- Hydroelectric dams → displacement of people

Thus, **renewable energy** is encouraged.

---

### 🧠 Summary

| Type             | Examples                      |
|------------------|-------------------------------|
| Renewable        | Solar, Wind, Hydro, Biomass   |
| Non-Renewable    | Coal, Petroleum, Nuclear      |
| Good Fuel        | High energy, eco-friendly     |

---

### 📘 Practice Questions

1. List any two limitations of fossil fuels.  
2. What is the principle of solar cooker?  
3. Name two renewable and two non-renewable energy sources.  
4. Write two advantages of using wind energy.  
5. What are the environmental consequences of energy generation?

`,
      },
      {
        id: "SCI-10-CHEM-1",
        title: "Chemical Reactions",
        topics: ["Balancing Equations", "Types of Reactions"],
        content: `
## Chemical Reactions and Equations

### 🔹 Introduction

A **chemical reaction** involves the transformation of one or more substances into new substances with different properties.

Example:  
\`\`\`
Mg + O₂ → MgO
\`\`\`

---

### 🔹 Chemical Equations

- Representation of a chemical reaction using symbols and formulas.
- **Reactants** → Left side  
- **Products** → Right side

Example:  
\`\`\`
2H₂ + O₂ → 2H₂O
\`\`\`

---

### 🔹 Balancing Chemical Equations

**Law of Conservation of Mass**: Mass can neither be created nor destroyed → atoms must be balanced on both sides.

Example:  
Unbalanced:  
\`\`\`
Fe + H₂O → Fe₃O₄ + H₂
\`\`\`

Balanced:  
\`\`\`
3Fe + 4H₂O → Fe₃O₄ + 4H₂
\`\`\`

---

### 🔹 Types of Chemical Reactions

1. **Combination Reaction**  
   - Two or more substances combine to form one product.  
   - \`A + B → AB\`

   Example:  
   \`CaO + H₂O → Ca(OH)₂\`

2. **Decomposition Reaction**  
   - A single compound breaks into simpler substances.  
   - \`AB → A + B\`

   Types:  
   - Thermal (heat)  
   - Electrolytic (electricity)  
   - Photolytic (light)

   Example:  
   \`2H₂O → 2H₂ + O₂\` (Electrolysis)

3. **Displacement Reaction**  
   - A more reactive element displaces a less reactive one.  
   - \`A + BC → AC + B\`

   Example:  
   \`Zn + CuSO₄ → ZnSO₄ + Cu\`

4. **Double Displacement Reaction**  
   - Exchange of ions between two compounds.  
   - \`AB + CD → AD + CB\`

   Example:  
   \`Na₂SO₄ + BaCl₂ → BaSO₄ + 2NaCl\`

5. **Oxidation and Reduction (Redox)**  
   - **Oxidation**: Gain of oxygen or loss of hydrogen  
   - **Reduction**: Gain of hydrogen or loss of oxygen

   Example:  
   \`CuO + H₂ → Cu + H₂O\`

---

### 🔹 Effects of Reactions

1. **Change in state**  
2. **Change in color**  
3. **Evolution of gas**  
4. **Change in temperature (exothermic/endothermic)**

---

### 🧠 Summary

| Reaction Type      | Example                         |
|--------------------|----------------------------------|
| Combination        | \`CaO + H₂O → Ca(OH)₂\`          |
| Decomposition      | \`2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂\` |
| Displacement       | \`Fe + CuSO₄ → FeSO₄ + Cu\`      |
| Double Displacement| \`AgNO₃ + NaCl → AgCl + NaNO₃\` |
| Redox              | \`CuO + H₂ → Cu + H₂O\`          |

---

### 📘 Practice Questions

1. Write the balanced chemical equation for the reaction of zinc with hydrochloric acid.  
2. What is a decomposition reaction? Give an example.  
3. Explain redox reaction with an example.  
4. Identify the type of reaction:  
   \`Na₂CO₃ + CaCl₂ → CaCO₃ + 2NaCl\`  
5. What happens when lead nitrate is heated?

`,
      },
      {
        id: "SCI-10-CHEM-2",
        title: "Acids, Bases & Salts",
        topics: ["pH Scale", "Neutralization"],
        content: `
## Acids, Bases and Salts

### 🔹 Acids

- Substances that release H⁺ ions in aqueous solution.
- Taste sour.
- Turn **blue litmus red**.

**Examples**:
- HCl (Hydrochloric acid)
- H₂SO₄ (Sulphuric acid)
- CH₃COOH (Acetic acid)

**Types**:
- **Strong Acids**: Completely ionize (e.g., HCl, H₂SO₄)
- **Weak Acids**: Partially ionize (e.g., CH₃COOH)

---

### 🔹 Bases

- Substances that release OH⁻ ions in solution.
- Taste bitter and feel soapy.
- Turn **red litmus blue**.

**Examples**:
- NaOH (Sodium hydroxide)
- KOH (Potassium hydroxide)
- NH₄OH (Ammonium hydroxide)

**Types**:
- **Strong Bases**: NaOH, KOH
- **Weak Bases**: NH₄OH

---

### 🔹 Indicators

Used to detect acids/bases.

| Indicator     | Acid Color | Base Color |
|---------------|------------|------------|
| Litmus        | Red        | Blue       |
| Methyl Orange | Red        | Yellow     |
| Phenolphthalein | Colorless | Pink      |

---

### 🔹 pH Scale (0 to 14)

- Measures hydrogen ion concentration.
- Developed by **Sørensen**.

| pH Range      | Nature     |
|---------------|------------|
| 0 – 6.9       | Acidic     |
| 7             | Neutral    |
| 7.1 – 14      | Basic      |

Examples:
- Lemon Juice: ~pH 2
- Milk: ~pH 6.5
- Soap: ~pH 9–10

👉 Human body pH ≈ 7.4  
👉 Tooth decay if mouth pH < 5.5

---

### 🔹 Neutralization Reaction

\`\`\`
Acid + Base → Salt + Water
\`\`\`

Example:  
\`HCl + NaOH → NaCl + H₂O\`

---

### 🔹 Salts

- Formed by neutralization reactions.
- Can be acidic, basic, or neutral.

#### Important Salts:

1. **NaCl** – Table salt  
2. **NaHCO₃** – Baking soda  
3. **Ca(OH)₂** – Slaked lime  
4. **Na₂CO₃** – Washing soda  
5. **Plaster of Paris (POP)** – CaSO₄·½H₂O

---

### 🔹 Properties and Uses of Important Salts

- **Baking Soda (NaHCO₃)**:
  - Used in baking, antacids
  - Prepared using Solvay Process

- **Washing Soda (Na₂CO₃·10H₂O)**:
  - Cleans clothes, removes hardness from water

- **Plaster of Paris (CaSO₄·½H₂O)**:
  - Used in casts, decorative materials

\`\`\`
CaSO₄·2H₂O (Gypsum) → CaSO₄·½H₂O (POP) + 1.5H₂O
\`\`\`

---

### 🧠 Summary

| Concept        | Key Point                             |
|----------------|----------------------------------------|
| Acid           | H⁺ ions, sour taste, red litmus        |
| Base           | OH⁻ ions, bitter taste, blue litmus    |
| Neutralization | Acid + Base → Salt + Water             |
| pH Scale       | Measures acidity/basicity              |
| Salt Uses      | POP, Baking Soda, Washing Soda         |

---

### 📘 Practice Questions

1. Define acid and base with examples.  
2. What is pH? What is the pH of neutral substances?  
3. Write the equation for neutralization reaction.  
4. How is baking soda prepared?  
5. List two uses of plaster of Paris.

`,
      },
      {
        id: "SCI-10-CHEM-3",
        title: "Metals & Non-Metals",
        topics: ["Reactivity Series", "Corrosion"],
        content: `
## Metals and Non-Metals

### 🔹 Introduction

Elements are broadly classified as **metals** and **non-metals** based on their physical and chemical properties.

---

### 🔹 Physical Properties

| Property         | Metals                      | Non-Metals                  |
|------------------|------------------------------|-----------------------------|
| Appearance       | Lustrous (shiny)             | Dull                        |
| Hardness         | Hard (except Na, K)          | Soft (except diamond)       |
| Malleability     | Malleable                    | Non-malleable               |
| Ductility        | Ductile                      | Non-ductile                 |
| Conductivity     | Good conductor of heat/electricity | Poor conductor      |
| Sonority         | Sonorous (ringing sound)     | Not sonorous                |

---

### 🔹 Chemical Properties of Metals

1. **Reaction with Oxygen**  
   \`\`\`
   4Na + O₂ → 2Na₂O
   \`\`\`
   → Forms metal oxides (basic in nature)

2. **Reaction with Water**  
   \`\`\`
   2K + 2H₂O → 2KOH + H₂↑
   \`\`\`
   → Forms metal hydroxide and hydrogen gas

3. **Reaction with Acids**  
   \`\`\`
   Zn + H₂SO₄ → ZnSO₄ + H₂↑
   \`\`\`
   → Produces salt and hydrogen gas

4. **Reaction with Other Metal Salts (Displacement)**  
   \`\`\`
   Fe + CuSO₄ → FeSO₄ + Cu
   \`\`\`

---

### 🔹 Chemical Properties of Non-Metals

1. Do not react with dilute acids (no H₂ gas).
2. React with oxygen to form **acidic oxides**.  
   \`\`\`
   C + O₂ → CO₂
   \`\`\`

---

### 🔹 Reactivity Series

A list of metals arranged in order of their reactivity.

**Most Reactive → K > Na > Ca > Mg > Al > Zn > Fe > Pb > Cu > Ag > Au ← Least Reactive**

→ More reactive metals displace less reactive ones from solutions.

---

### 🔹 Ionic Bond Formation

- **Metals** lose electrons → form **cations**  
- **Non-metals** gain electrons → form **anions**

\`\`\`
Na → Na⁺ + e⁻  
Cl + e⁻ → Cl⁻  
Na⁺ + Cl⁻ → NaCl
\`\`\`

---

### 🔹 Corrosion

Slow eating away of metal due to atmospheric conditions (oxygen, moisture).

**Example**:  
\`Iron + Water + Air → Rust (Fe₂O₃·xH₂O)\`

**Prevention**:
- Painting
- Galvanization (zinc coating)
- Oiling, greasing
- Alloying

---

### 🔹 Alloys

Mixture of two or more metals (or metal + non-metal).

**Examples**:
- **Brass**: Cu + Zn  
- **Bronze**: Cu + Sn  
- **Stainless Steel**: Fe + Cr + Ni

Alloying improves:
- Strength
- Resistance to corrosion
- Appearance

---

### 🧠 Summary

| Topic           | Key Point                                |
|-----------------|-------------------------------------------|
| Metals          | Malleable, ductile, conductive            |
| Non-Metals      | Brittle, poor conductors, acidic oxides   |
| Reactivity      | Series shows metal displacement power     |
| Corrosion       | Rusting of iron, needs water + air        |
| Alloys          | Mixtures improving properties of metals   |

---

### 📘 Practice Questions

1. Define corrosion and list two methods to prevent it.  
2. Write the reaction of zinc with dilute hydrochloric acid.  
3. What is an alloy? Give two examples.  
4. Which is more reactive: Zn or Cu? Justify with an example.  
5. Differentiate between metal and non-metal (any three properties).

`,
      },
      {
        id: "SCI-10-CHEM-4",
        title: "Carbon Compounds",
        topics: ["Homologous Series", "IUPAC Naming"],
        content: `
## Carbon and Its Compounds

### 🔹 Introduction

Carbon is a versatile element due to:
- **Tetravalency** (forms 4 covalent bonds)
- **Catenation** (ability to form long chains)

Carbon compounds are **covalent**, **stable**, and have **low melting/boiling points**.

---

### 🔹 Covalent Bonding

- Formed by **sharing** of electrons (non-metals)
- No ions → poor conductors of electricity

Example:  
\`\`\`
CH₄: Carbon shares electrons with 4 hydrogen atoms.
\`\`\`

---

### 🔹 Saturated and Unsaturated Compounds

- **Saturated**: Only single bonds (e.g., ethane – C₂H₆)
- **Unsaturated**: Double/triple bonds (e.g., ethene – C₂H₄, ethyne – C₂H₂)

---

### 🔹 Functional Groups

Atoms/groups attached to carbon that define properties:

| Group     | Formula   | Example     |
|-----------|-----------|-------------|
| Alcohol   | –OH       | C₂H₅OH      |
| Aldehyde  | –CHO      | CH₃CHO      |
| Ketone    | –CO–      | CH₃COCH₃    |
| Carboxylic Acid | –COOH | CH₃COOH  |

---

### 🔹 Homologous Series

A group of compounds with:
- Same functional group
- Common general formula
- Successive members differ by –CH₂–

Example:  
Alkane Series: CH₄, C₂H₆, C₃H₈...

---

### 🔹 IUPAC Naming Rules

1. Identify longest carbon chain  
2. Number the chain (give lowest number to functional group)  
3. Name substituents (prefixes)  
4. Combine in correct order

Example:  
\`\`\`
CH₃–CH₂–CH₂–OH → Butanol (Butan-1-ol)
\`\`\`

---

### 🔹 Properties of Carbon Compounds

- Covalent bonding → low melting & boiling point
- Insoluble in water
- Poor conductors of electricity

---

### 🔹 Important Reactions

1. **Combustion**  
   \`\`\`
   CH₄ + O₂ → CO₂ + H₂O + heat
   \`\`\`

2. **Oxidation**  
   \`\`\`
   CH₃CH₂OH + [O] → CH₃COOH
   \`\`\`

3. **Addition Reaction** (unsaturated hydrocarbons)  
   \`\`\`
   C₂H₄ + H₂ → C₂H₆ (with Ni catalyst)
   \`\`\`

4. **Substitution Reaction** (saturated compounds)  
   \`\`\`
   CH₄ + Cl₂ → CH₃Cl + HCl (in sunlight)
   \`\`\`

---

### 🔹 Soaps and Detergents

- **Soap**: Sodium or potassium salt of fatty acids  
  \`Example: C₁₇H₃₅COONa\`

- **Detergents**: Cleansing agents even in hard water  
  (synthetic)

---

### 🧠 Summary

| Concept          | Key Point                                 |
|------------------|--------------------------------------------|
| Catenation       | Chain-forming property of carbon           |
| Covalent Bond    | Electron sharing → stable compounds        |
| Functional Group | Determines compound properties             |
| Homologous Series| Same group, differ by CH₂, gradual property change |
| Reactions        | Combustion, oxidation, addition, substitution |

---

### 📘 Practice Questions

1. What is catenation? Give an example.  
2. Draw the electron dot structure of methane and ethene.  
3. Differentiate between soap and detergent.  
4. Explain the IUPAC naming of CH₃–CH₂–COOH.  
5. What is the difference between saturated and unsaturated hydrocarbons?

`,
      },
      {
        id: "SCI-10-CHEM-5",
        title: "Periodic Classification",
        topics: ["Modern Periodic Table"],
        content: `
## Periodic Classification of Elements

### 🔹 Why Classification?

- To study properties systematically.
- Grouping elements with similar properties helps in prediction of behavior.

---

### 🔹 Historical Developments

1. **Dobereiner's Triads (1817)**  
   - Groups of 3 elements with similar properties.  
   - Middle element's atomic mass ≈ average of others.

   Example:  
   \`Li (7), Na (23), K (39) → 23 ≈ (7+39)/2\`

2. **Newlands’ Law of Octaves (1866)**  
   - Every 8th element shows similar properties (like musical notes).  
   - Failed after calcium (only valid till atomic mass 40).

3. **Mendeleev’s Periodic Table (1869)**  
   - Based on **increasing atomic mass**.  
   - Left gaps for undiscovered elements.
   - Could not explain the position of isotopes.

---

### 🔹 Modern Periodic Table (Henry Moseley, 1913)

- Based on **increasing atomic number**.
- Currently used table.

**Structure:**
- **Periods**: Horizontal rows (7)  
- **Groups**: Vertical columns (18)

---

### 🔹 Trends in the Periodic Table

| Property         | Across Period (→)       | Down Group (↓)            |
|------------------|-------------------------|----------------------------|
| Atomic Radius     | Decreases               | Increases                  |
| Metallic Character| Decreases               | Increases                  |
| Non-metallic Char.| Increases               | Decreases                  |
| Valency           | Varies (1 to 4 to 0)    | Same                      |
| Electronegativity | Increases               | Decreases                  |

---

### 🔹 Types of Elements

- **Metals**: Left and center (Groups 1-12)  
- **Non-metals**: Right side  
- **Metalloids**: Borderline (e.g., B, Si, As)

---

### 🔹 Noble Gases (Group 18)

- Stable and inert  
- Octet complete (except Helium)

---

### 🔹 Importance of Modern Table

- Predicts chemical behavior.
- Helps in understanding trends.
- Explains periodicity due to electron configuration.

---

### 🧠 Summary

| Concept               | Key Point                                   |
|------------------------|---------------------------------------------|
| Dobereiner Triads     | Atomic mass average rule                    |
| Newlands Octaves      | Every 8th element similar                   |
| Mendeleev Table       | Atomic mass-based, had gaps                 |
| Modern Table          | Atomic number-based, 18 groups, 7 periods   |
| Periodic Trends       | Atomic size, valency, metallic nature, etc. |

---

### 📘 Practice Questions

1. State Mendeleev's periodic law.  
2. Why is the modern periodic table better than Mendeleev’s?  
3. What are metalloids? Give two examples.  
4. Define valency. How does it vary in a period?  
5. Arrange Na, Al, Cl, and Si in increasing order of electronegativity.

`,
      },
      {
        id: "SCI-10-BIO-1",
        title: "Life Processes",
        topics: ["Nutrition", "Respiration"],
        content: `
## Life Processes

### 🔹 What are Life Processes?

Processes essential for maintenance and continuation of life:
- Nutrition
- Respiration
- Transportation
- Excretion

---

### 🔹 Nutrition

**Definition**: Process of obtaining and utilizing food.

#### Types:
1. **Autotrophic Nutrition**:
   - Performed by green plants.
   - Uses sunlight to prepare food (photosynthesis).
   \`\`\`
   6CO₂ + 6H₂O —(sunlight/chlorophyll)→ C₆H₁₂O₆ + 6O₂
   \`\`\`

   **Key components**:
   - Chlorophyll
   - Sunlight
   - CO₂ (via stomata)
   - H₂O (via roots)

2. **Heterotrophic Nutrition**:
   - Organisms depend on others for food.

   Types:
   - **Holozoic**: Humans, Amoeba
   - **Saprophytic**: Fungi
   - **Parasitic**: Cuscuta, leech

#### Human Digestive System:
- **Mouth**: Salivary amylase digests starch
- **Stomach**: HCl kills germs, pepsin digests protein
- **Small Intestine**: Bile emulsifies fats, enzymes complete digestion
- **Large Intestine**: Water absorption

---

### 🔹 Respiration

**Definition**: Breakdown of food to release energy.

#### Types:
1. **Aerobic Respiration** (in presence of O₂):
   \`\`\`
   Glucose + O₂ → CO₂ + H₂O + Energy (ATP)
   \`\`\`

2. **Anaerobic Respiration** (without O₂):
   \`\`\`
   Glucose → Alcohol + CO₂ + Energy
   \`\`\`

#### Human Respiratory System:
- **Nasal cavity → Pharynx → Larynx → Trachea → Bronchi → Lungs → Alveoli**
- Gas exchange in alveoli via diffusion

#### Key Points:
- Diaphragm helps in inhalation/exhalation
- Hemoglobin transports oxygen
- CO₂ is more soluble in blood than O₂

---

### 🧠 Summary

| Process     | Key Components                                  |
|-------------|--------------------------------------------------|
| Nutrition   | Autotrophic (plants), Heterotrophic (animals)   |
| Digestion   | Mouth, stomach, intestines                      |
| Respiration | Aerobic/anaerobic, lungs, alveoli, diaphragm    |

---

### 📘 Practice Questions

1. What are life processes? Name any four.  
2. Differentiate between autotrophic and heterotrophic nutrition.  
3. Write the equation for aerobic and anaerobic respiration.  
4. Explain the role of alveoli in the lungs.  
5. Describe the process of digestion in the human stomach.

`,
      },
      {
        id: "SCI-10-BIO-2",
        title: "Control & Coordination",
        topics: ["Nervous System", "Hormones"],
        content: `
## Control and Coordination

### 🔹 What is Control and Coordination?

The ability of an organism to respond to internal and external stimuli through a well-organized system (nervous and endocrine).

---

### 🔹 Control in Animals

#### 🧠 Nervous System

**Main Parts**:
- **Brain**: Forebrain (thinking), Midbrain (reflexes), Hindbrain (balance)
- **Spinal Cord**: Reflex actions

**Neuron Structure**:
- **Dendrites** → receive signals  
- **Cell Body** → processes signals  
- **Axon** → transmits signal to next neuron/muscle

#### Types of Responses:
1. **Voluntary**: Controlled by brain (e.g., writing)
2. **Involuntary**: Not consciously controlled (e.g., heartbeat)
3. **Reflex Action**: Sudden, automatic response (e.g., withdrawal from hot object)

**Reflex Arc**:
Stimulus → Receptor → Sensory Neuron → Spinal Cord → Motor Neuron → Effector

---

#### 🧬 Endocrine System (Hormones)

- Hormones are chemical messengers secreted by endocrine glands.

| Gland        | Hormone         | Function                      |
|--------------|------------------|-------------------------------|
| Pituitary    | Growth Hormone   | Controls growth               |
| Thyroid      | Thyroxine        | Regulates metabolism          |
| Pancreas     | Insulin          | Controls blood sugar          |
| Adrenal      | Adrenaline       | "Fight or flight" response    |
| Testes       | Testosterone     | Male secondary sex traits     |
| Ovaries      | Estrogen         | Female secondary sex traits   |

---

### 🔹 Control in Plants

Plants lack nervous system but show coordination through:
- **Hormones** (called phytohormones)
  - Auxin (growth towards light)
  - Gibberellins (stem elongation)
  - Cytokinins (cell division)
  - Abscisic acid (stress hormone)

#### Plant Movements:

1. **Tropic Movements** (directional)
   - **Phototropism** (towards light)
   - **Geotropism** (towards gravity)
   - **Hydrotropism**, **Thigmotropism**

2. **Nastic Movements** (non-directional)
   - Touch response in **Mimosa pudica**

---

### 🧠 Summary

| System         | Key Components                          |
|----------------|------------------------------------------|
| Nervous        | Brain, spinal cord, neurons              |
| Endocrine      | Glands secreting hormones                |
| Plant Hormones | Auxins, gibberellins, cytokinins         |
| Movements      | Tropic (directional), Nastic (non-dir.)  |

---

### 📘 Practice Questions

1. What is a reflex arc? Explain with a diagram.  
2. Name two differences between nervous and hormonal control.  
3. List any three endocrine glands and their functions.  
4. What is phototropism? Which hormone is responsible?  
5. Define coordination in plants and list two types of movement.

`,
      },
      {
        id: "SCI-10-BIO-3",
        title: "How Do Organisms Reproduce",
        topics: ["Asexual/Sexual Reproduction"],
        content: `
## How Do Organisms Reproduce?

### 🔹 Why Reproduction?

Reproduction is the process by which organisms produce new individuals of the same species, ensuring continuity of life.

---

### 🔹 Modes of Reproduction

#### 1. **Asexual Reproduction**
- Involves only **one parent**
- Offspring are **genetically identical** (clones)

**Types:**
- **Binary Fission**: Amoeba, Bacteria  
  \`Parent divides into two equal halves\`

- **Multiple Fission**: Plasmodium  
  \`One organism divides into many\`

- **Budding**: Yeast, Hydra  
  \`Bud forms and detaches to become new organism\`

- **Fragmentation**: Spirogyra  
  \`Body breaks into fragments, each grows independently\`

- **Regeneration**: Planaria  
  \`Lost parts regenerate into new organism\`

- **Spore Formation**: Rhizopus  
  \`Spores are released and grow into new individuals\`

- **Vegetative Propagation (Plants)**:
  - Natural: by roots, stems, leaves (e.g., potato, onion)
  - Artificial: cutting, grafting, layering

---

#### 2. **Sexual Reproduction**

- Involves **two parents**
- Fusion of male and female gametes
- Leads to **variation** in offspring

---

### 🔹 Sexual Reproduction in Plants

- **Male reproductive part**: Stamen (Anther + Filament)
- **Female reproductive part**: Carpel (Ovary + Style + Stigma)

**Pollination**: Transfer of pollen from anther to stigma  
- Self-pollination  
- Cross-pollination

**Fertilization**: Fusion of male and female gametes  
→ Zygote → Embryo → Seed → New plant

---

### 🔹 Sexual Reproduction in Humans

**Male Reproductive System**:
- Testes (sperm production)
- Vas deferens
- Urethra
- Penis
- Accessory glands (prostate, seminal vesicles)

**Female Reproductive System**:
- Ovaries (produce ova)
- Fallopian Tubes (site of fertilization)
- Uterus (embryo development)
- Vagina

**Fertilization**:
- Sperm + Ovum → Zygote → Embryo → Fetus → Baby

---

### 🔹 Puberty & Reproductive Health

- **Puberty**: Age (11–14) when reproductive organs mature
- **Secondary sexual characters**: Hair growth, voice change, etc.
- Importance of **menstrual cycle** (28-day cycle in females)
- **Safe practices**: Awareness about STDs, contraception, hygiene

---

### 🧠 Summary

| Type              | Key Features                             |
|-------------------|-------------------------------------------|
| Asexual Repro.    | One parent, no gametes, clones            |
| Sexual Repro.     | Two parents, gametes involved, variation  |
| Human Male Organs | Testes, penis, vas deferens               |
| Human Female Org. | Ovary, uterus, fallopian tube, vagina     |

---

### 📘 Practice Questions

1. What is the difference between asexual and sexual reproduction?  
2. Name one organism each for binary fission, budding, and regeneration.  
3. Describe fertilization in human beings.  
4. What is vegetative propagation? Give examples.  
5. Write the function of ovary, uterus, and testis.
`,
      },
      {
        id: "SCI-10-BIO-4",
        title: "Heredity & Evolution",
        topics: ["Mendel's Laws", "Speciation"],
        content: `
## Heredity and Evolution

### 🔹 What is Heredity?

The transfer of **traits from parents to offspring** through genes.

- Traits: Characteristics like eye color, height, etc.
- Genes: Units of heredity present on chromosomes
- Alleles: Different forms of a gene

---

### 🔹 Mendel’s Experiments

**Gregor Mendel**: Father of Genetics  
- Experimented on pea plants

**Key Traits Studied**:
- Tall/Short, Round/Wrinkled seeds, Yellow/Green seeds

#### Laws of Inheritance:

1. **Law of Dominance**:
   - Dominant allele expresses itself over recessive.
   - E.g., Tall (T) is dominant over Short (t)

2. **Law of Segregation**:
   - Allele pairs separate during gamete formation.

3. **Law of Independent Assortment**:
   - Traits are inherited independently of one another.

#### Monohybrid Cross Example:
- T (Tall) × t (Short) → All Tall (F1)  
- F2 generation: 3 Tall : 1 Short

---

### 🔹 Sex Determination in Humans

- Females: XX  
- Males: XY  
→ Sperm determines the sex of the child

---

### 🔹 Evolution

Gradual change in inherited traits over generations.

**Fossils**:
- Provide evidence of evolution
- Older fossils found deeper in layers

**Homologous Organs**:
- Same structure, different function  
  (e.g., forelimbs of humans, bats, whales)

**Analogous Organs**:
- Different structure, same function  
  (e.g., wings of birds and insects)

---

### 🔹 Speciation

The process of formation of new species.

Causes:
- Genetic drift
- Natural selection
- Geographical isolation

---

### 🔹 Evolution vs Classification

- Classification reflects evolutionary relationships.
- More similar organisms → more closely related.

---

### 🔹 Evolution by Natural Selection (Darwin)

- Survival of the fittest.
- Favourable traits increase in population.

---

### 🧠 Summary

| Concept              | Explanation                          |
|----------------------|--------------------------------------|
| Heredity             | Transfer of traits                   |
| Mendel's Laws        | Dominance, segregation, assortment   |
| Sex Determination    | XY in males, XX in females           |
| Evolution            | Gradual change; supported by fossils |
| Homologous Organs    | Same origin, different function      |
| Speciation           | Formation of new species             |

---

### 📘 Practice Questions

1. Define heredity and give one example.  
2. State Mendel’s Law of Dominance.  
3. Differentiate between homologous and analogous organs.  
4. How is the sex of a child determined in humans?  
5. What is speciation? List two factors causing it.

`,
      },
      {
        id: "SCI-10-BIO-5",
        title: "Our Environment",
        topics: ["Food Chains", "Ozone Depletion"],
        content: `
## Our Environment

### 🔹 Ecosystem

An ecosystem includes **all living organisms** (biotic) and **non-living components** (abiotic) in a specific area that interact with each other.

**Examples**:
- Forest
- Pond
- Desert

---

### 🔹 Components of Ecosystem

1. **Biotic**: Plants, animals, microorganisms
2. **Abiotic**: Air, water, soil, sunlight, temperature

---

### 🔹 Food Chains and Webs

**Food Chain**: Series of organisms each dependent on the next for food.

Example:
\`Grass → Grasshopper → Frog → Snake → Eagle\`

**Trophic Levels**:
- **Level 1**: Producers (plants)
- **Level 2**: Primary consumers (herbivores)
- **Level 3**: Secondary consumers (carnivores)
- **Level 4**: Tertiary consumers (top predators)

**Energy Flow**:
- Only **10% energy** is passed to the next trophic level.
- Energy decreases as we move up the chain.

**Food Web**:
- Interconnected food chains in an ecosystem.

---

### 🔹 Decomposers

- Organisms like bacteria and fungi
- Break down dead organisms
- Recycle nutrients back to the environment

---

### 🔹 Ozone Layer

- Ozone (O₃) forms a layer in the stratosphere.
- Protects Earth from harmful **UV rays**.

**Ozone Depletion**:
- Caused by **CFCs (Chlorofluorocarbons)** from refrigerators, ACs, aerosols.
- Leads to skin cancer, cataracts, etc.

**Solution**:
- Avoid CFCs
- Use eco-friendly products

---

### 🔹 Waste Management

1. **Biodegradable Waste**:
   - Can be broken down naturally (e.g., food, paper)

2. **Non-biodegradable Waste**:
   - Cannot be decomposed easily (e.g., plastic, metal)

**Hazards of Non-Biodegradable Waste**:
- Pollution
- Harm to animals
- Soil and water contamination

**Reduce, Reuse, Recycle** – key to waste management

---

### 🧠 Summary

| Topic                  | Key Point                                      |
|------------------------|------------------------------------------------|
| Ecosystem              | Interaction of living and non-living things    |
| Food Chain             | Flow of energy via organisms                   |
| Trophic Levels         | Position in food chain (producers → top)       |
| Ozone Layer            | Shields Earth from UV, damaged by CFCs         |
| Waste Types            | Bio vs Non-bio; need to manage waste wisely    |

---

### 📘 Practice Questions

1. What is an ecosystem? Name its components.  
2. Draw a labeled food chain with 4 trophic levels.  
3. What are decomposers? State their role.  
4. What causes ozone depletion? How can we protect it?  
5. Explain why plastic is considered non-biodegradable.

`,
      },
      {
        id: "SCI-10-BIO-6",
        title: "Sustainable Management",
        topics: ["Conservation", "Wildlife"],
        content: `
## Sustainable Management of Natural Resources

### 🔹 Why Manage Resources?

Resources like forests, water, coal, and petroleum are **limited**. Sustainable management ensures:
- Their availability for future generations
- Environmental balance

---

### 🔹 Types of Natural Resources

1. **Renewable**: Can be replenished (e.g., solar, wind, water)
2. **Non-renewable**: Limited; take millions of years to form (e.g., coal, petroleum)

---

### 🔹 5 R’s of Resource Conservation

1. **Refuse** – Say no to things you don’t need  
2. **Reduce** – Minimize usage  
3. **Reuse** – Use items again  
4. **Repurpose** – Use items differently  
5. **Recycle** – Convert waste into reusable material

---

### 🔹 Forest and Wildlife Conservation

**Importance of Forests**:
- Maintain oxygen level
- Prevent soil erosion
- Provide habitat and livelihood

**Issues**:
- Deforestation
- Poaching
- Habitat destruction

**Solutions**:
- Afforestation
- Laws like Wildlife Protection Act
- Community efforts (e.g., Chipko Movement)

---

### 🔹 Water Resources

**Need for Conservation**:
- Uneven distribution
- Overuse and pollution

**Traditional Practices**:
- Khadins, tanks, johads, etc.

**Modern Methods**:
- **Rainwater Harvesting**:
  - Collecting rainwater for later use
  - Recharge groundwater
- **Drip Irrigation**:
  - Minimizes water wastage in farming

---

### 🔹 Fossil Fuels (Coal & Petroleum)

- Non-renewable, cause pollution
- Need to switch to alternative energy:
  - Solar, wind, hydroelectric, biogas

---

### 🔹 Community Participation

- Local people understand ecosystem better
- Examples:
  - **Chipko Movement** – Tree hugging to prevent deforestation
  - **Narmada Bachao Andolan** – Against displacement due to dam

---

### 🧠 Summary

| Resource       | Problem                | Sustainable Solution        |
|----------------|------------------------|-----------------------------|
| Forests        | Deforestation          | Afforestation, laws         |
| Water          | Scarcity, pollution    | Rainwater harvesting        |
| Fossil Fuels   | Non-renewable, pollution | Solar, wind energy         |

---

### 📘 Practice Questions

1. Define sustainable management. Why is it important?  
2. What are the 5 R’s? Explain any three.  
3. Mention two traditional water harvesting systems.  
4. What steps can be taken to conserve forests?  
5. Why should we minimize the use of fossil fuels?

`,
      },
    ],
  },
  {
    id: "SOC-10",
    name: "Social Science",
    chapters: 24,
    duration: 80,
    details: {
      keyTopics: [
        "Nationalism",
        "Agriculture",
        "Democracy",
        "Globalization",
        "Resources",
      ],
      resources: {
        animatedMaps: 80,
        caseStudies: 200,
        samplePapers: 15,
      },
      examFocus: ["CBSE", "UPSC Prelims Foundation"],
      teacher: "Prof. Ananya Das (Gold Medalist in History)",
    },
    lessons: [
      {
        id: "SOC-10-HIS-1",
        title: "The Rise of Nationalism",
        topics: ["French Revolution", "Unification of Germany"],
        content: `
## The Rise of Nationalism in Europe

### 🔹 What is Nationalism?

- A sense of **shared identity and unity** among people who share common history, language, culture, and territory.
- It emerged in **Europe** in the 19th century as people began to demand **freedom and nation-states**.

---

### 🔹 The French Revolution (1789)

- Marked the **beginning of nationalism in Europe**.
- Introduced ideas of **liberty, equality, fraternity**, and **popular sovereignty**.
- **Napoleon** spread revolutionary ideas across Europe, despite being a dictator.

**Key Symbols of Nationalism**:
- Tricolour flag
- La Marseillaise (national anthem)
- Declaration of the Rights of Man

---

### 🔹 Napoleon and His Impact

- Abolished feudalism and introduced **uniform laws, weights & measures**.
- But his expansionist policies led to widespread opposition and the rise of **national resistance** in occupied territories.

---

### 🔹 The Congress of Vienna (1815)

- Led by **Metternich** (Austria) after Napoleon’s defeat.
- Restored **monarchies** and suppressed liberalism.
- Redrew the map of Europe without considering national identities.

---

### 🔹 The Age of Revolutions (1830–1848)

- Uprisings across Europe demanding:
  - **Constitutional government**
  - **End of monarchy**
  - **National unification**

- Notable events:
  - Greek War of Independence
  - Belgium gained independence
  - Italy and Germany saw early efforts at unification

---

### 🔹 Unification of Germany (1871)

- Led by **Otto von Bismarck**, Prime Minister of Prussia.
- Used **wars and diplomacy** to unite German states.

**Wars fought**:
1. Denmark (1864)
2. Austria (1866)
3. France (1870–71)

- Germany was declared a nation-state in **1871** at the **Palace of Versailles**.

---

### 🔹 Unification of Italy

- Italy was divided into kingdoms.
- Unified through the efforts of:
  - **Giuseppe Mazzini** – Ideologist
  - **Count Cavour** – Diplomat of Sardinia
  - **Giuseppe Garibaldi** – Fighter who led the Red Shirts

---

### 🔹 Nationalism in Other Regions

- **Hungary**, **Ireland**, and the **Balkan States** also saw strong nationalist movements.
- Nationalism also led to **tensions and conflicts**, eventually contributing to **World War I**.

---

### 🧠 Summary

| Concept                     | Details                                  |
|-----------------------------|------------------------------------------|
| Nationalism                 | Shared identity & political unity        |
| French Revolution           | Started modern nationalism               |
| Napoleon                    | Spread & distorted revolutionary ideas   |
| Congress of Vienna          | Restored monarchies                      |
| German Unification          | Led by Bismarck via 3 wars               |
| Italian Unification         | Mazzini, Cavour, Garibaldi               |

---

### 📘 Practice Questions

1. What is nationalism? How did the French Revolution contribute to it?  
2. What was the significance of the Congress of Vienna?  
3. Describe the role of Bismarck in German unification.  
4. Name the three leaders involved in Italian unification.  
5. How did nationalism lead to conflicts in Europe?

`,
      },
      {
        id: "SOC-10-HIS-2",
        title: "Nationalism in India",
        topics: ["Non-Cooperation", "Civil Disobedience"],
        content: `
## Nationalism in India

### 🔹 The First World War and Its Impact

- **Economic hardship** due to taxes, price rise, and forced recruitment.
- **Influenza epidemic (1918)** caused huge loss of life.
- Growing unrest against British colonial rule.

---

### 🔹 The Idea of Satyagraha

- Introduced by **Mahatma Gandhi**.
- Based on **truth and non-violence**.
- Belief: If the cause is true, the fight must be non-violent.

**Key Satyagrahas:**
1. **Champaran (1917)** – Indigo farmers
2. **Kheda (1918)** – Crop failure and tax relief
3. **Ahmedabad (1918)** – Mill workers

---

### 🔹 Rowlatt Act (1919) & Jallianwala Bagh Massacre

- Rowlatt Act allowed detention without trial.
- Protest led to the **Jallianwala Bagh massacre** (April 13, 1919) by **General Dyer**.
- Shook the nation and intensified the freedom struggle.

---

### 🔹 Non-Cooperation Movement (1920)

**Launched by Gandhi** after the Jallianwala Bagh tragedy and the Khilafat issue.

**Goals**:
- Surrender titles
- Boycott schools, colleges, courts
- Boycott foreign goods
- Promote **Khadi** and **Indian institutions**

**Participation**:
- Students, teachers, lawyers, peasants, tribals, workers
- Diverse motivations in different regions (peasants wanted rent reduction, tribals opposed forest laws)

**Chauri Chaura Incident (1922)**:
- Police station burned, policemen killed
- Gandhi called off the movement due to violence

---

### 🔹 Civil Disobedience Movement (1930)

**Launched with the Salt March**:
- Gandhi walked 240 km from Sabarmati to Dandi
- Broke the salt law as a symbol of protest

**Demands**:
- Abolish salt tax
- Reduce land revenue
- Allow local production of salt
- End British monopoly

**Participation**:
- Urban middle class
- Rich peasantry and business class
- Limited participation by Dalits and Muslims

**Government Response**:
- Brutal repression
- Gandhi arrested
- Gandhi-Irwin Pact signed (1931)

---

### 🔹 Limits of Nationalism

- **Dalits (Scheduled Castes)**: Dr. B.R. Ambedkar demanded separate electorates.
- **Muslims**: Fear of Hindu majority dominance, demand for separate identity.

---

### 🔹 Sense of Collective Belonging

Nationalism was fostered by:
- **National symbols**: Tricolor, Bharat Mata
- **Folk songs and tales**
- **Revival of Indian history and heritage**

---

### 🧠 Summary

| Event/Concept              | Description                                 |
|----------------------------|---------------------------------------------|
| Satyagraha                 | Non-violent resistance                      |
| Rowlatt Act                | No trial detention, led to protests         |
| Jallianwala Bagh           | Massacre by Gen. Dyer                       |
| Non-Cooperation Movement   | Mass boycott of British institutions        |
| Civil Disobedience         | Salt March and refusal to obey British laws |
| Communal Divisions         | Dalits & Muslims had different demands      |

---

### 📘 Practice Questions

1. What was the Rowlatt Act? Why was it opposed?  
2. Describe the significance of the Salt March.  
3. Why did Gandhi withdraw the Non-Cooperation Movement?  
4. What role did peasants and tribals play in the movements?  
5. Explain the limits of nationalism during this period.

`,
      },
      {
        id: "SOC-10-HIS-3",
        title: "The Making of Global World",
        topics: ["Silk Route", "Industrialization"],
        content: `
## The Making of a Global World

### 🔹 What is Globalization?

Globalization refers to **integration of economies and societies** through flows of goods, ideas, technologies, and people across borders.

---

### 🔹 The Pre-Modern World

**Silk Routes**:
- Ancient trade routes that connected **Asia, Europe, and Africa**.
- Traded silk, spices, precious metals, and ideas (like Buddhism).

**Cultural Exchange**:
- Traders also spread food, religion, and technology.
- Examples: Pasta from China to Italy, chili from America to India.

---

### 🔹 Food Travels: The Columbian Exchange

- After **Christopher Columbus' voyages**, a major exchange of food and animals occurred between the **Old World (Europe, Asia, Africa)** and the **New World (Americas)**.

**Examples**:
- From America to Europe: Potatoes, maize, tomatoes
- From Europe to America: Wheat, sugarcane, horses

---

### 🔹 The 19th Century (1815–1914)

**Key Changes**:
1. **Industrialization**: Increased production and global trade.
2. **Colonialism**: European countries colonized Asia and Africa to control raw materials and markets.
3. **New Networks**: Railways, steamships, and telegraphs reduced travel time.
4. **Migration**: Millions migrated for labor (e.g., Indian indentured laborers to the Caribbean and Africa).

---

### 🔹 Impact of Industrialization

- **Britain** became the world’s industrial center.
- Demand for raw materials like cotton, jute, and spices.
- Colonies like India became **exporters of raw material and importers of British goods**.

---

### 🔹 The Role of Indentured Labour

- System of bonded labor used in colonies.
- Indians were sent to **Trinidad, Fiji, Mauritius, and South Africa**.
- They worked in plantations and mines under harsh conditions.

---

### 🔹 The Interwar Economy (1914–1945)

**World War I (1914–18)**:
- Massive loss of life and resources.
- Disruption in trade and economy.
- US became a creditor nation.

**Great Depression (1929)**:
- Began in the US, spread worldwide.
- Global unemployment, poverty, and falling production.

**World War II (1939–45)**:
- Even worse destruction.
- Led to the **end of colonialism** in many parts of the world.

---

### 🔹 Rebuilding the Post-War World

- Formation of international financial institutions:
  - **IMF** – International Monetary Fund
  - **World Bank** – To aid reconstruction and development

- These institutions helped shape the modern global economy.

---

### 🧠 Summary

| Theme                     | Key Points                                       |
|---------------------------|--------------------------------------------------|
| Silk Route                | Ancient trade links between Asia & Europe        |
| Columbian Exchange        | Food and animal transfers between continents     |
| Industrial Age            | Rise of Europe, fall of colonies like India      |
| Indentured Labour         | Bonded Indian workers in plantations             |
| World Wars                | Economic collapse & redrawing of world order     |
| Bretton Woods System      | New institutions like IMF & World Bank           |

---

### 📘 Practice Questions

1. What were the Silk Routes? How did they impact trade and culture?  
2. Explain the Columbian Exchange with examples.  
3. How did the Industrial Revolution impact colonies like India?  
4. What was indentured labor? Where were Indians sent?  
5. What were the effects of the Great Depression?  
6. What is the significance of Bretton Woods institutions?

`,
      },
      {
        id: "SOC-10-HIS-4",
        title: "The Age of Industrialization",
        topics: ["Proto-Industrialization", "Factories"],
        content: `
## The Age of Industrialization

### 🔹 Before the Industrial Revolution

- **Proto-industrialization**: A phase before factories where goods were produced in **small workshops or homes**.
- Merchants gave raw materials to rural families → families spun and wove at home.
- **Decentralized system**, widespread in Europe (especially countryside).

---

### 🔹 The First Factories

- **Late 18th century**: First factories set up in Britain (cotton and iron).
- Concentrated labor and production under one roof.
- Inventions like the **Spinning Jenny** and **Steam Engine** (by James Watt) revolutionized production.

---

### 🔹 Why Industrialization Was Slow

- Traditional industries still dominated.
- Workers resisted machines fearing **unemployment**.
- Demand for hand-made goods remained due to **custom orders**, uniqueness, and prestige.

---

### 🔹 Industrialization in Colonies (India)

- India had a flourishing textile industry before British rule.
- After colonization:
  - Indian textiles faced **import restrictions in Britain**.
  - British machine-made goods flooded Indian markets.
  - Indian weavers and artisans suffered massively.

---

### 🔹 Growth of Factories in India

- First Indian cotton mill: **1854 in Bombay**.
- Growth of jute mills in Bengal (Calcutta).
- Mostly funded by Indian capital but dominated by British policies.

---

### 🔹 Who Were the Industrial Entrepreneurs?

- Indian businessmen like **Dwarkanath Tagore**, **Dinshaw Petit**, and **Jamsetjee Tata**.
- Traders expanded into **finance, shipping, and manufacturing**.

---

### 🔹 Workers and Working Conditions

- Mostly **migrants from villages**.
- Work was seasonal and unstable.
- Low wages, long hours, poor conditions.
- Some workers formed **jobber networks** — intermediaries who helped people get jobs.

---

### 🔹 Marketing & Advertisement

- British goods were promoted using **advertisements** and **labels**:
  - Product labeling like “Made in Manchester” ensured trust.
  - Indian motifs were added to attract local buyers.
  - Advertisements targeted emotional and cultural connection.

---

### 🧠 Summary

| Topic                    | Details                                          |
|--------------------------|--------------------------------------------------|
| Proto-Industrialization  | Pre-factory, home-based production               |
| Factory System           | Mechanized, mass production started in Britain   |
| Impact on India          | Decline of handloom, rise of mills               |
| Indian Entrepreneurs     | Tagore, Tata, Petit played a major role          |
| Workers' Life            | Unstable, low-wage, tough living conditions      |
| Marketing Techniques     | Branding, packaging, emotional appeal            |

---

### 📘 Practice Questions

1. What was proto-industrialization?  
2. Why did hand-made goods remain popular even after factories emerged?  
3. How did industrialization affect Indian weavers?  
4. Who were the major Indian industrialists during this period?  
5. Describe the role of advertisements in expanding British markets in India.

`,
      },
      {
        id: "SOC-10-HIS-5",
        title: "Print Culture & Modern World",
        topics: ["Gutenberg Press", "India"],
        content: `
## Print Culture and the Modern World

### 🔹 The First Printed Books

- Printing began in **China** and **Japan** using **woodblocks**.
- Used by **Bureaucracy** and **scholars**.
- **Buddhist missionaries** helped spread printed books to Korea and Japan.

---

### 🔹 Gutenberg and the Printing Revolution in Europe

- **Johann Gutenberg** invented the **printing press** in **Germany (1430s)**.
- First printed book: **Gutenberg Bible (1455)**.
- Led to:
  - Cheaper books
  - Rapid spread of knowledge
  - Increased literacy

**Impact**:
- Scholars could challenge traditional knowledge.
- Helped the **Reformation**, **Scientific Revolution**, and **Renaissance**.

---

### 🔹 Print and Religious Reforms

- **Martin Luther** used the press to spread his ideas (95 Theses).
- Print made people **question the Church**.
- The **Catholic Church** began censorship to suppress "heretical" ideas.

---

### 🔹 The Reading Mania

- Literacy increased in Europe.
- People read **almanacs, folktales, ballads, and romances**.
- Emergence of **libraries** and **lending bookstores**.
- Women and children became **new readers**.

---

### 🔹 Print and the French Revolution

- Ideas of **equality, freedom, democracy** spread through pamphlets and books.
- Inspired people to challenge the monarchy.
- Print was a powerful **tool for political change**.

---

### 🔹 The Print Comes to India

- Introduced by **Portuguese missionaries** in **Goa (1556)**.
- First Tamil book: Printed in 1579.
- English press grew under **East India Company** (19th century).

---

### 🔹 Growth of Indian-Language Printing

- Expansion due to **lithographic printing** (used for Indian scripts).
- Helped in the spread of:
  - Religious reform ideas (e.g., Arya Samaj, Satyashodhak Samaj)
  - Social reform (widow remarriage, caste equality)
  - Nationalist ideas

---

### 🔹 Print and Censorship in India

- Early 19th century: The colonial government worried about the power of print.
- Passed the **Vernacular Press Act (1878)** to curb critical writings.
- Nationalists used print to spread **anti-colonial sentiments**.

---

### 🧠 Summary

| Theme                         | Details                                              |
|-------------------------------|------------------------------------------------------|
| Gutenberg Press               | First movable type printing in Europe               |
| Print's Impact                | Reformation, Scientific ideas, Revolutions           |
| Indian Print Culture          | Started by missionaries, spread via reformers        |
| Vernacular Print              | Boosted local languages and political awareness      |
| Censorship                    | British tried to suppress dissent through laws       |

---

### 📘 Practice Questions

1. What was the role of Gutenberg in print history?  
2. How did print help spread reformist ideas in Europe and India?  
3. What was the impact of print on the French Revolution?  
4. How did print influence social and religious reforms in India?  
5. What was the Vernacular Press Act and why was it introduced?

`,
      },
      {
        id: "SOC-10-GEO-1",
        title: "Resources & Development",
        topics: ["Soil Types", "Conservation"],
        content: `
## Resources and Development

### 🔹 What are Resources?

**Resource**: Anything that can be used to satisfy human needs, provided it is:
- Technologically accessible
- Economically feasible
- Culturally acceptable

**Types of Resources**:
1. **On the basis of origin**:  
   - *Biotic*: Living (e.g., forests, wildlife)  
   - *Abiotic*: Non-living (e.g., minerals, water)

2. **On the basis of exhaustibility**:  
   - *Renewable*: Can be replenished (e.g., solar, wind)  
   - *Non-renewable*: Limited (e.g., fossil fuels)

3. **On the basis of ownership**:  
   - *Individual*, *Community*, *National*, *International*

4. **On the basis of status of development**:  
   - *Potential*, *Developed*, *Stock*, *Reserves*

---

### 🔹 Development of Resources

- Indiscriminate use led to:
  - Depletion
  - Unequal distribution
  - Environmental degradation

**Sustainable Development** is the need of the hour:
> "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs."

---

### 🔹 Resource Planning in India

**Steps**:
1. **Identification and inventory** of resources
2. **Planning structure** with appropriate technology
3. **Matching** resource development plans with national development

---

### 🔹 Land Resources

**Land Use Patterns in India**:
- Forests
- Net sown area
- Fallow land
- Barren land
- Grazing and miscellaneous uses

**Factors affecting land use**:
- Physical (topography, climate)
- Human (population, technology)

---

### 🔹 Land Degradation and Conservation

**Causes**:
- Deforestation
- Overgrazing
- Mining
- Over-irrigation

**Conservation Measures**:
- Afforestation
- Contour ploughing
- Strip cropping
- Terrace farming

---

### 🔹 Soil as a Resource

**Soil Formation**:
- Formed by weathering of rocks + humus
- Factors: Relief, Climate, Vegetation, Time

**Major Soil Types in India**:
1. **Alluvial** – Fertile, found in plains (Ganga–Brahmaputra)
2. **Black Soil** – Ideal for cotton, found in Deccan
3. **Red Soil** – Less fertile, found in southern/eastern India
4. **Laterite Soil** – Low fertility, found in high rainfall areas
5. **Mountain Soil** – Found in hilly areas
6. **Desert Soil** – Sandy, dry, low organic content

---

### 🔹 Soil Erosion and Conservation

**Erosion Causes**:
- Wind
- Water
- Deforestation
- Overgrazing

**Soil Conservation Techniques**:
- Shelter belts
- Terrace farming
- Contour ploughing
- Strip cropping

---

### 🧠 Summary

| Category            | Details                                     |
|---------------------|---------------------------------------------|
| Types of Resources  | Biotic/Abiotic, Renewable/Non-renewable     |
| Major Soils         | Alluvial, Black, Red, Laterite, etc.        |
| Issues              | Resource depletion, soil erosion            |
| Conservation        | Afforestation, terracing, sustainable use   |

---

### 📘 Practice Questions

1. Classify resources on the basis of ownership with examples.  
2. Explain the concept and need of sustainable development.  
3. What are the causes of land degradation? How can it be controlled?  
4. Describe characteristics and crops associated with black soil.  
5. Name various methods used for soil conservation in hilly areas.

`,
      },
      {
        id: "SOC-10-GEO-2",
        title: "Water Resources",
        topics: ["Dams", "Rainwater Harvesting"],
        content: `
## Water Resources

### 🔹 Importance of Water

- Essential for all forms of life.
- Used for: drinking, agriculture, industries, power generation, etc.
- **Irrigation is the largest consumer** of water in India.

---

### 🔹 Water Scarcity: Causes

1. **Overuse** in agriculture (e.g., tube wells, HYV crops)
2. **Industrialization**
3. **Unequal distribution**
4. **Pollution** of surface and groundwater
5. **Urbanization** and growing population

---

### 🔹 Multipurpose River Projects

**Definition**: Large dams built for multiple uses like irrigation, electricity, flood control, etc.

**Examples**:
- **Bhakra Nangal Dam** (Sutlej)
- **Hirakud Dam** (Mahanadi)
- **Tehri Dam** (Ganga)
- **Sardar Sarovar Dam** (Narmada)

**Benefits**:
- Irrigation
- Hydroelectricity
- Flood control
- Fish breeding
- Water supply

**Criticism**:
- Displacement of people
- Environmental degradation
- Loss of biodiversity
- Social unrest (e.g., Narmada Bachao Andolan)

---

### 🔹 Rainwater Harvesting (RWH)

**Definition**: Collection and storage of rainwater for future use.

**Methods**:
- Rooftop collection
- Recharge pits
- Check dams
- Percolation tanks

**Traditional RWH Systems**:
- **Rajasthan**: Tankas (underground tanks)
- **Maharashtra**: Bawlis
- **Tamil Nadu**: Mandatory rooftop RWH (since 2001)

---

### 🔹 Water Conservation Strategies

- Afforestation
- Efficient irrigation (e.g., drip/sprinkler systems)
- Reusing and recycling water
- Watershed management
- Community-based conservation (e.g., Johads, Pani Panchayats)

---

### 🧠 Summary

| Theme               | Details                                      |
|---------------------|----------------------------------------------|
| Causes of Scarcity  | Overuse, waste, pollution, population        |
| Multipurpose Projects | Benefits + Criticism                       |
| RWH Methods         | Rooftop tanks, recharge wells, etc.          |
| Traditional Systems | Tankas, Johads, Bawlis, etc.                 |

---

### 📘 Practice Questions

1. What are the major reasons for water scarcity in India?  
2. Define multipurpose river valley project. List two advantages and two disadvantages.  
3. How does rainwater harvesting help in water conservation?  
4. Describe any two traditional methods of water harvesting.  
5. Name two dams and the rivers they are built on.

`,
      },
      {
        id: "SOC-10-GEO-3",
        title: "Agriculture",
        topics: ["Cropping Patterns", "Green Revolution"],
        content: `
## Agriculture

### 🔹 Importance of Agriculture in India

- Major livelihood for **over 60%** of population
- Contributes to **GDP**, **food security**, **employment**
- Linked with trade, industry, and national development

---

### 🔹 Types of Farming in India

1. **Primitive Subsistence Farming**:
   - Done on small patches of land using primitive tools
   - Depends on monsoon, family/community labor
   - *Example:* Slash and burn (Jhumming in NE India)

2. **Intensive Subsistence Farming**:
   - High labor input
   - Used in densely populated areas
   - *Example:* Paddy in West Bengal

3. **Commercial Farming**:
   - Uses HYV seeds, irrigation, fertilizers, machinery
   - Includes:
     - *Plantation farming* (e.g., tea, coffee)
     - *Commercial grain farming*

---

### 🔹 Cropping Seasons in India

| Season   | Time         | Major Crops                            |
|----------|--------------|----------------------------------------|
| **Kharif**   | June–Sept   | Rice, maize, jowar, bajra, cotton        |
| **Rabi**     | Oct–March   | Wheat, barley, peas, mustard             |
| **Zaid**     | Summer      | Watermelon, cucumber, fodder crops       |

---

### 🔹 Major Crops and Conditions

- **Rice**: Kharif crop, requires high temperature, rainfall, and clayey soil  
- **Wheat**: Rabi crop, cool growing season and well-drained loamy soil  
- **Millets**: Jowar, bajra – hardy, grow in dry and less fertile areas  
- **Pulses**: Protein-rich, grow in dry climate, need less water  
- **Sugarcane**: Tropical crop, hot and humid climate  
- **Oilseeds**: Groundnut, mustard – important for edible oils  
- **Tea/Coffee**: Plantation crops in hilly areas with rainfall

---

### 🔹 Technological and Institutional Reforms

- **Green Revolution**: Introduced HYV seeds, fertilizers, irrigation – increased production, especially wheat and rice
- **White Revolution**: Boosted milk production (Operation Flood)

**Government Support**:
- Crop insurance
- Minimum Support Price (MSP)
- Subsidies on inputs
- Kisan Credit Cards (KCC)
- Agricultural universities and research

---

### 🔹 Challenges in Agriculture

- Dependence on monsoon
- Fragmented land holdings
- Overuse of chemicals
- Soil degradation
- Lack of mechanization in small farms

---

### 🔹 Sustainable Agriculture Practices

- Organic farming
- Mixed farming
- Crop rotation
- Use of bio-fertilizers and natural pesticides

---

### 🧠 Summary

| Theme                 | Details                                 |
|-----------------------|-----------------------------------------|
| Farming Types         | Primitive, Intensive, Commercial         |
| Cropping Seasons      | Kharif, Rabi, Zaid                      |
| Major Crops           | Rice, Wheat, Millets, Pulses, etc.      |
| Green Revolution      | HYV seeds, mechanization, irrigation    |
| Sustainable Farming   | Organic, bio-fertilizers, crop rotation |

---

### 📘 Practice Questions

1. What are the main types of farming in India? Explain each with examples.  
2. Define Green Revolution. State its impact on Indian agriculture.  
3. Distinguish between Rabi and Kharif crops with examples.  
4. Describe government initiatives to improve agriculture in India.  
5. List challenges faced by Indian farmers and suggest solutions.

`,
      },
      {
        id: "SOC-10-GEO-4",
        title: "Minerals & Energy",
        topics: ["Conventional/Non-Conventional Sources"],
        content: `
## Minerals and Energy Resources

### 🔹 What Are Minerals?

- Naturally occurring, homogeneous, inorganic substances with a definite chemical composition.
- Found in various forms – solid, liquid, or gaseous.

---

### 🔹 Types of Minerals

1. **Metallic Minerals**:
   - Contain metals
   - Examples: Iron, Copper, Bauxite

2. **Non-Metallic Minerals**:
   - Do not contain metals
   - Examples: Limestone, Mica, Gypsum

3. **Energy Minerals**:
   - Provide energy
   - Examples: Coal, Petroleum, Natural Gas, Uranium

---

### 🔹 Mode of Occurrence of Minerals

- **Igneous/metamorphic rocks**: Gold, silver
- **Sedimentary rocks**: Limestone, coal
- **Alluvial deposits**: Gold, tin (placer deposits)
- **Evaporation**: Salt, potash

---

### 🔹 Distribution of Minerals in India

| Mineral     | Major Areas                           |
|-------------|----------------------------------------|
| Iron Ore    | Odisha, Jharkhand, Chhattisgarh        |
| Manganese   | Maharashtra, Odisha, Karnataka         |
| Bauxite     | Odisha, Gujarat, Maharashtra           |
| Copper      | Rajasthan, Madhya Pradesh              |
| Limestone   | Madhya Pradesh, Andhra Pradesh         |
| Mica        | Jharkhand, Bihar, Rajasthan            |
| Coal        | Jharkhand, Chhattisgarh, West Bengal   |
| Petroleum   | Assam, Gujarat, Mumbai High            |

---

### 🔹 Energy Resources

#### 🔸 Conventional Sources (Non-Renewable)

- **Coal**: Found in Damodar valley (Jharkhand–West Bengal), used in power and steel industries
- **Petroleum**: Drilled from sedimentary rocks, major source of fuel
- **Natural Gas**: Cleaner fuel, found along with oil

#### 🔸 Non-Conventional Sources (Renewable)

- **Solar Energy**: Solar panels, solar cookers
- **Wind Energy**: Wind farms in Tamil Nadu, Gujarat, Maharashtra
- **Hydel Power**: Generated by dams
- **Biogas**: From organic waste
- **Tidal and Geothermal Energy**

---

### 🔹 Conservation of Resources

- Reduce wastage
- Promote recycling
- Use alternatives (renewables)
- Efficient use through technology

---

### 🧠 Summary

| Category               | Examples                             |
|------------------------|--------------------------------------|
| Metallic Minerals      | Iron, Copper, Bauxite                |
| Non-Metallic Minerals  | Mica, Limestone, Gypsum              |
| Conventional Energy    | Coal, Petroleum, Natural Gas         |
| Non-Conventional Energy| Solar, Wind, Hydel, Biogas           |
| Conservation Methods   | Reduce, Reuse, Recycle, Renewables   |

---

### 📘 Practice Questions

1. Distinguish between metallic and non-metallic minerals with examples.  
2. What are the differences between conventional and non-conventional sources of energy?  
3. Explain the importance of conservation of mineral resources.  
4. List the major coal-producing states in India.  
5. Describe how solar and wind energy can be harnessed in India.

`,
      },
      {
        id: "SOC-10-GEO-5",
        title: "Manufacturing Industries",
        topics: ["Contribution to GDP"],
        content: `
## Manufacturing Industries

### 🔹 Importance of Manufacturing

- Transforms raw materials into finished goods.
- Adds value to natural resources.
- Generates employment.
- Helps in modernization and development of agriculture.
- Reduces heavy dependence on agriculture.
- Contributes ~16-17% to India’s GDP.

---

### 🔹 Classification of Industries

1. **On the Basis of Source of Raw Material**
   - **Agro-based**: Cotton, jute, sugar, vegetable oil
   - **Mineral-based**: Iron & steel, cement

2. **On the Basis of Ownership**
   - **Public Sector**: BHEL, SAIL
   - **Private Sector**: TISCO, Reliance
   - **Joint Sector**: Maruti Suzuki
   - **Cooperative Sector**: Sugar mills, dairy industry

3. **On the Basis of Size**
   - **Large Scale**: Steel plants, oil refineries
   - **Small Scale**: Handicrafts, small workshops

---

### 🔹 Major Industries in India

#### 1. **Iron and Steel Industry**
- Backbone of industrial development.
- *Major centers*: Jamshedpur, Bhilai, Durgapur, Bokaro.
- Uses: Construction, machinery, defense.

#### 2. **Textile Industry**
- Oldest and largest industry in terms of employment.
- Includes cotton, jute, silk, woolen textiles.
- *Cotton industry hubs*: Maharashtra, Gujarat.
- *Jute industry*: West Bengal.

#### 3. **Chemical Industry**
- Produces acids, fertilizers, plastics, paints.
- Spread over many regions.

#### 4. **Cement Industry**
- Essential for construction work.
- India is the 2nd largest producer in the world.

#### 5. **Automobile Industry**
- Grown significantly since liberalization.
- *Major hubs*: Chennai, Pune, Gurugram, Sanand.

#### 6. **Information Technology and Electronics**
- Located in Bangalore, Noida, Hyderabad.
- Contributes to India’s global reputation.

---

### 🔹 Industrial Pollution and Environmental Degradation

- **Air Pollution**: Emitted by smoke from factories.
- **Water Pollution**: Dumping of waste into rivers.
- **Noise Pollution**: Machinery and industrial processes.
- **Thermal Pollution**: Hot water from thermal plants.

---

### 🔹 Steps to Reduce Pollution

- Use of pollution control devices (e.g., scrubbers, filters).
- Treatment of industrial effluents before discharge.
- Recycling and reusing industrial waste.
- Following environmental laws and sustainable practices.

---

### 🧠 Summary

| Aspect                 | Key Points                                          |
|------------------------|-----------------------------------------------------|
| Importance             | Value addition, employment, modernization           |
| Major Industries       | Iron & Steel, Textiles, Cement, Automobiles         |
| Classification         | By raw material, ownership, size                    |
| Environmental Impact   | Pollution (air, water, noise, thermal)              |
| Solutions              | Effluent treatment, clean technologies, awareness   |

---

### 📘 Practice Questions

1. Why is the manufacturing sector important for the Indian economy?  
2. Name the major iron and steel plants in India.  
3. Differentiate between public and private sector industries.  
4. Explain any two environmental problems caused by industries.  
5. Describe steps to control industrial pollution.

`,
      },
      {
        id: "SOC-10-GEO-6",
        title: "Lifelines of Economy",
        topics: ["Transport", "Communication"],
        content: `
## Lifelines of National Economy

### 🔹 Introduction

- The development of a country is closely linked with the efficiency of its **transport and communication systems**.
- They facilitate movement of goods, services, people, and ideas.

---

### 🔹 Modes of Transport in India

#### 1. **Roadways**
- Most used mode for short and medium distances.
- India has the second-largest road network globally.
- **Types**:
  - Golden Quadrilateral (GQ): Connects Delhi, Mumbai, Chennai, Kolkata.
  - National Highways (NH)
  - State Highways (SH)
  - District Roads
- **Advantages**:
  - Flexible
  - Ideal for hilly areas
  - Economical for short distances

#### 2. **Railways**
- Lifeline of the nation for bulk movement of goods and people.
- Covers vast distances at low cost.
- Challenges: Overcrowding, maintenance, outdated infrastructure.

#### 3. **Pipelines**
- Transport oil, gas, and water over long distances.
- *Example*: Hazira-Vijaipur-Jagdishpur (HVJ) gas pipeline.

#### 4. **Waterways**
- Cheapest mode for heavy and bulky goods.
- Inland waterways (rivers, canals) and coastal shipping.
- Major river: Ganga (National Waterway No. 1)

#### 5. **Airways**
- Fastest and most comfortable but expensive.
- Important for remote areas and during natural disasters.
- Carried by Air India, Indigo, SpiceJet, etc.

---

### 🔹 International Trade

- Exchange of goods and services across international borders.
- **Exports**: Selling goods to other countries.
- **Imports**: Buying goods from other countries.
- Indicators of economic development.
- India exports agricultural products, gems, software, etc.

---

### 🔹 Communication

- Crucial for economic and social development.
- **Types**:
  - **Personal Communication**: Letters, phones, mobile
  - **Mass Communication**: Radio, TV, Newspapers, Internet
- Helps create awareness and connect diverse populations.

---

### 🔹 Tourism as a Trade

- Tourism generates foreign exchange, promotes cultural exchange, and supports local businesses.
- India: A major tourist destination – cultural heritage, natural beauty.
- Employs millions directly and indirectly.

---

### 🧠 Summary

| Category         | Highlights                                     |
|------------------|------------------------------------------------|
| Roadways         | Flexible, for short distances                  |
| Railways         | Bulk transport, widespread                     |
| Pipelines        | Efficient for liquids and gases                |
| Waterways        | Cheapest for heavy goods                       |
| Airways          | Fastest, used in emergencies                   |
| Trade            | Indicator of development (exports/imports)     |
| Communication    | Bridges distance, boosts growth                |
| Tourism          | Provides jobs, earns forex                     |

---

### 📘 Practice Questions

1. Why are transport and communication called lifelines of the economy?  
2. Compare roadways and railways with examples.  
3. What are the advantages of pipelines as a mode of transport?  
4. Discuss the importance of international trade.  
5. How is tourism beneficial to the Indian economy?

`,
      },
      {
        id: "SOC-10-GEO-7",
        title: "Consumer Rights",
        topics: ["COPRA", "Fair Trade"],
        content: `
## Consumer Rights

### 🔹 Who is a Consumer?

- A person who buys goods or services for personal use and not for resale.
- Consumers have the **right to safety, information, choice, representation, redressal**, and **consumer education**.

---

### 🔹 Consumer Exploitation

Consumers can be exploited in several ways:
- Underweight and under-measurement of goods.
- Substandard quality (e.g., expired medicine).
- Overcharging or extra charges.
- False or misleading advertisements.
- Sale of defective goods or services.

---

### 🔹 Consumer Rights (As per COPRA)

1. **Right to Safety**
   - Protection against hazardous goods/services.

2. **Right to be Informed**
   - Details of quantity, quality, price, ingredients, etc.

3. **Right to Choose**
   - Access to a variety of goods and services at competitive prices.

4. **Right to be Heard**
   - Consumer grievances must be considered.

5. **Right to Seek Redressal**
   - Compensation for defective goods/services.

6. **Right to Consumer Education**
   - Knowledge about rights, responsibilities, and legal aid.

---

### 🔹 Consumer Protection Act (COPRA), 1986

- Enacted to protect consumer rights.
- Provides a 3-tier grievance redressal system:
  1. **District Forum** – up to ₹20 lakhs
  2. **State Commission** – ₹20 lakhs to ₹1 crore
  3. **National Commission** – above ₹1 crore

---

### 🔹 Legal Measures for Protection

- Labeling of MRP, expiry dates, ISI/Agmark certification.
- Compulsory display of consumer complaint redressal mechanisms.
- Filing complaints through online portals like the National Consumer Helpline (NCH).

---

### 🔹 Role of NGOs & Consumer Movements

- Educate consumers about their rights.
- Encourage awareness campaigns and legal actions.
- Promote ethical trade and fair practices.

---

### 🧠 Summary

| Right                    | Description                                       |
|--------------------------|---------------------------------------------------|
| Right to Safety          | Protection from dangerous goods/services          |
| Right to be Informed     | Details about product/service                     |
| Right to Choose          | Access to fair competition                        |
| Right to be Heard        | Voice in decision-making                          |
| Right to Redressal       | Justice for unfair practices                      |
| Right to Consumer Ed.    | Awareness of laws and protections                 |

---

### 📘 Practice Questions

1. Explain any three rights of consumers under the COPRA Act.  
2. What are the common ways in which consumers are exploited?  
3. How does the 3-tier grievance redressal system work?  
4. What role do NGOs play in protecting consumer rights?  
5. Why is consumer education essential in today’s market?

`,
      },
      {
        id: "SOC-10-POL-1",
        title: "Power Sharing",
        topics: ["Belgium & Sri Lanka"],
        content: `
## Power Sharing

### 🔹 Introduction

- Power sharing means distributing power among different organs or levels of government.
- It is important for democracy and helps reduce conflict in diverse societies.

---

### 🔹 Case Study 1: Belgium

- **Ethnic composition**: Dutch (59%), French (40%), German (1%).
- French-speaking community was richer and more powerful, leading to tension.

**Accommodation by Belgium:**
- Equal number of ministers from both Dutch and French communities.
- No group can make decisions unilaterally.
- Separate governments for Brussels, French, Dutch communities.
- **Result**: Maintained unity and harmony.

---

### 🔹 Case Study 2: Sri Lanka

- **Ethnic composition**: Sinhala (74%), Tamil (18% – Sri Lankan & Indian Tamils).
- **Majoritarianism**: Sinhala declared official language, Buddhism promoted.
- **Impact**: Discrimination against Tamils → demand for separate state → civil war.

---

### 🔹 Why Power Sharing is Important

1. **Prudential Reason**:
   - Reduces conflict between social groups.
   - Ensures political stability and peace.

2. **Moral Reason**:
   - Power sharing is the spirit of democracy.
   - Everyone has a voice in decision-making.

---

### 🔹 Forms of Power Sharing

1. **Among different organs of government** (Horizontal):
   - Legislature, Executive, Judiciary.
   - Each organ checks the others → balance of power.

2. **Among governments at different levels** (Vertical):
   - Central, State, and Local governments (federalism).

3. **Among different social groups**:
   - Minority and majority representation (e.g., community governments in Belgium).

4. **Among political parties, pressure groups, and movements**:
   - Power through coalitions, alliances, or consultations.

---

### 🧠 Summary

| Concept           | Example              | Significance                      |
|------------------|----------------------|----------------------------------|
| Belgium Model     | Equal powers to communities | Peaceful coexistence         |
| Sri Lanka Model   | Sinhala majoritarianism   | Led to conflict and war       |
| Horizontal Sharing| Executive, Legislature, Judiciary | Mutual control          |
| Vertical Sharing  | Union, State, Local          | Efficient governance         |

---

### 📘 Practice Questions

1. Compare power sharing in Belgium and Sri Lanka.  
2. Explain the prudential and moral reasons for power sharing.  
3. Describe any two forms of power sharing with examples.  
4. How does power sharing promote unity in diversity?  
5. Why did the Sri Lankan Tamil community feel alienated?

`,
      },
      {
        id: "SOC-10-POL-2",
        title: "Federalism",
        topics: ["Unitary vs Federal Systems"],
        content: `
## Federalism

### 🔹 What is Federalism?

- A system of government in which power is divided between a central authority and various constituent units (like states or provinces).
- Both levels have their own powers and responsibilities as defined by the constitution.

---

### 🔹 Features of Federalism

1. **Two or more levels of government** (Central and State).
2. **Division of powers** between different levels.
3. **Written Constitution** – clearly defines powers.
4. **Supremacy of Constitution** – binding on all.
5. **Independent Judiciary** – settles disputes.
6. **Dual Citizenship** – not in India but in some federations like the US.

---

### 🔹 Types of Federation

1. **Coming Together Federation**
   - Independent states voluntarily unite.
   - Example: USA, Australia, Switzerland.

2. **Holding Together Federation**
   - Large country divides power between center and states.
   - Example: India, Spain, Belgium.

---

### 🔹 Federalism in India

- India has a **quasi-federal structure** with a strong center.
- Three levels of government:
  1. Union Government (Centre)
  2. State Governments
  3. Local Governments (since 1992 – 73rd & 74th Amendments)

---

### 🔹 Distribution of Powers in India

1. **Union List** – subjects of national importance (defense, currency).
2. **State List** – subjects of state importance (police, trade).
3. **Concurrent List** – subjects of common interest (education, forest).
- If there is a conflict in the Concurrent List, **Union law prevails**.

---

### 🔹 Local Government in India

- **1992 Constitutional Amendments**:
  - 73rd: Rural local government (Panchayati Raj)
  - 74th: Urban local government (Municipalities)
- Three-tier structure:
  - **Gram Panchayat** → **Panchayat Samiti** → **Zila Parishad**
  - **Municipal Corporation** in cities

---

### 🔹 Linguistic States and Language Policy

- States reorganized on the basis of language (1956 onwards).
- India has 22 official languages in the **8th Schedule**.
- No national language; **Hindi** is the official language, English also used.

---

### 🔹 Centre-State Relations

- Constitution originally favored a strong center.
- After 1990s, **coalition governments** gave more autonomy to states.
- Trend toward strengthening **federalism**.

---

### 🧠 Summary

| Feature               | India’s Federalism                      |
|----------------------|------------------------------------------|
| Type                 | Holding together                        |
| Power Distribution   | Union, State, Concurrent Lists           |
| Levels of Government | Central, State, Local                   |
| Language Policy      | Flexible and inclusive                  |
| Strengthened by      | Decentralization, Coalition Politics     |

---

### 📘 Practice Questions

1. Define federalism and list its key features.  
2. How is power shared between different levels of government in India?  
3. Differentiate between Coming Together and Holding Together federations.  
4. What changes did the 1992 constitutional amendments bring?  
5. Explain how Indian federalism has been strengthened in recent years.

`,
      },
      {
        id: "SOC-10-POL-3",
        title: "Democracy & Diversity",
        topics: ["Social Differences"],
        content: `
## Democracy and Diversity

### 🔹 Introduction

- Social differences exist in every society.
- These differences can lead to social divisions but also enrich society.
- In a democracy, diversity should be respected and accommodated peacefully.

---

### 🔹 Origins of Social Differences

- Based on **accident of birth** (race, caste, gender, etc.)
- Based on **choice** (religion, beliefs, values, occupation)

---

### 🔹 Overlapping vs Cross-Cutting Differences

#### Overlapping Differences:
- Social differences that reinforce each other.
- Example: In the US, African-Americans are generally poor and discriminated against → creates a deep divide.
- Leads to greater social conflict.

#### Cross-Cutting Differences:
- Social differences that do not always align with each other.
- Example: In the Netherlands, Christians can be both rich and poor → less intense conflict.
- More tolerance in society.

---

### 🔹 Case Study: Civil Rights Movement in the USA

- Led by **Martin Luther King Jr.**
- Fought against racial discrimination and segregation.
- Resulted in laws ensuring **equal rights for all races**.
- Peaceful protests and legal methods were used.

---

### 🔹 Social Divisions and Politics

- Social divisions become political when they are **expressed in politics**.
- Political expression of social divisions is normal in democracy.
- Problematic only when:
  1. It leads to **violence/conflict**.
  2. It becomes **exclusive or divisive**.

---

### 🔹 How Democracies Handle Diversity

- Democracy allows peaceful resolution through dialogue and constitutional means.
- Examples:
  - **India**: Accommodates linguistic and religious diversity.
  - **Belgium**: Power-sharing to resolve ethnic tension.
- Democracies that **respect differences** and **ensure equal rights** tend to be more stable.

---

### 🧠 Summary

| Concept                   | Description                                          |
|---------------------------|------------------------------------------------------|
| Overlapping Differences   | Reinforce social divisions (e.g., US)                |
| Cross-Cutting Differences | Reduce intensity of conflict (e.g., Netherlands)     |
| Social Division           | Can become political in nature                       |
| Democracy                 | Allows peaceful accommodation of diversity           |
| Example                   | Civil Rights Movement, India’s unity in diversity    |

---

### 📘 Practice Questions

1. Explain the difference between overlapping and cross-cutting differences.  
2. How can social differences lead to social divisions?  
3. What was the Civil Rights Movement?  
4. How do democracies accommodate social diversity?  
5. Why are social divisions not always dangerous in a democracy?

`,
      },
      {
        id: "SOC-10-POL-4",
        title: "Gender, Religion & Caste",
        topics: ["Inequality Forms"],
        content: `
## Gender, Religion and Caste

### 🔹 Gender and Politics

- **Gender division** is a form of social division based on male-female roles and discrimination.
- Though women make up almost **half of the population**, they are **underrepresented** in politics and decision-making.

**Issues:**
- Unequal wages
- Harassment and insecurity
- Lack of political representation

**Improvements:**
- Movements for **women’s equality** and **empowerment**
- **Reservation for women** in Panchayats and Municipalities (33%)
- Demand for **1/3rd reservation in Lok Sabha and State Assemblies**

---

### 🔹 Religion and Politics

- Mixing religion with politics is controversial but **not always negative**.

**Positive Role:**
- Leaders motivated by **religious values** can promote human rights and welfare.

**Negative Role:**
- **Communalism**: When religion is used to promote **hatred**, **violence**, or **division**.
- Leads to conflicts, riots, and **undermines democracy**.

**Indian Constitution Provisions:**
- India is a **secular state**:
  - No official religion
  - Equal respect to all religions
  - No discrimination based on religion

---

### 🔹 Communalism

- Based on the idea that religion is the **primary identity** of people.
- Seen in:
  1. Daily beliefs and prejudices
  2. Political mobilization on religious lines
  3. Communal violence

**Danger**: Threatens **national unity and secularism**.

---

### 🔹 Caste and Politics

- Though caste system is **officially abolished**, it still influences social life.
- **Caste inequality** exists in access to education, jobs, and social respect.

**Role in Politics:**
- Voting patterns sometimes follow caste lines.
- Political parties use **caste-based appeals**.
- **Positive side**: Caste-based mobilization has helped **weaker sections gain representation**.

---

### 🔹 Efforts to Reduce Inequality

- Constitution bans caste-based discrimination.
- **Reservation policy** for SC/ST/OBC in education and jobs.
- Rise of **Dalit and backward caste movements**.

---

### 🧠 Summary

| Aspect       | Key Points                                                       |
|--------------|------------------------------------------------------------------|
| Gender       | Women underrepresented, demand for reservation                   |
| Religion     | Secularism is key; communalism is dangerous                      |
| Caste        | Still influential; both positive and negative political impact   |
| Constitution | Protects rights, promotes equality                               |

---

### 📘 Practice Questions

1. Why is the representation of women in politics still low?  
2. What is communalism? Explain its forms.  
3. How does the Constitution ensure secularism in India?  
4. How is caste used positively and negatively in politics?  
5. Suggest ways to reduce gender and caste inequality in society.

`,
      },
      {
        id: "SOC-10-POL-5",
        title: "Popular Struggles",
        topics: ["Nepal & Bolivia"],
        content: `
## Popular Struggles and Movements

### 🔹 Introduction

- Democracy evolves through **people’s participation**.
- At times, **mass struggles and movements** play a key role in bringing about change.
- These are expressions of **popular dissatisfaction** with government actions.

---

### 🔹 Case Study 1: Nepal (Movement for Democracy)

- **2006**: People’s movement to restore **democracy**.
- King Gyanendra dismissed Parliament and took control.

**Struggle Led By:**
- **SPA (Seven Party Alliance)** and civil society groups.

**Actions Taken:**
- Peaceful protests and strikes
- 3-week long mass agitation

**Outcome:**
- King reinstated Parliament
- Girija Prasad Koirala became Prime Minister
- Nepal became a **democratic republic**

---

### 🔹 Case Study 2: Bolivia (Water War)

- **Early 2000s**: Government privatized water supply in Cochabamba.
- New company raised prices drastically.

**Struggle Led By:**
- **FEDECOR** – alliance of farmers, workers, and human rights groups.

**Actions Taken:**
- General strikes and roadblocks
- Mass protests

**Outcome:**
- Government canceled the contract
- Water supply returned to municipal control

---

### 🔹 Types of Democratic Politics Involved

1. **Direct Participation**:
   - People’s protest and pressure

2. **Representative Democracy**:
   - Political parties and elections

3. **Negotiation and Dialogue**:
   - Between protestors and government

---

### 🔹 Role of Pressure Groups and Movements

- **Pressure Groups**: Organized groups that influence public policy without contesting elections.
  - Examples: Trade unions, business groups, teacher associations

- **Movements**: Often informal, issue-based, and broader in scope.
  - Examples:
    - **Narmada Bachao Andolan** (environmental)
    - **RTI Movement** (transparency and governance)

---

### 🔹 Differences Between Pressure Groups and Movements

| Feature           | Pressure Groups             | Movements                       |
|------------------|-----------------------------|----------------------------------|
| Structure         | Formal, organized            | Informal, loosely structured     |
| Focus             | Specific interest             | Broad issues                     |
| Duration          | Long-term                     | Short-term or issue-based        |

---

### 🧠 Summary

| Key Case     | Issue                         | Outcome                            |
|--------------|-------------------------------|------------------------------------|
| Nepal        | Restoration of democracy      | Monarchy ended, Parliament restored|
| Bolivia      | Privatization of water        | Contract canceled, public control  |
| Movements    | People’s power                | Crucial for democracy              |

---

### 📘 Practice Questions

1. Describe the Nepal people's movement of 2006.  
2. Explain the causes and outcomes of the Bolivia Water War.  
3. What are pressure groups? Give examples.  
4. How are movements different from pressure groups?  
5. Why are popular struggles important in a democracy?

`,
      },
      {
        id: "SOC-10-ECO-1",
        title: "Development",
        topics: ["Income vs National Development"],
        content: `
## Development

### 🔹 What is Development?

- **Development** means growth in terms of **income, living standard, health, education**, and overall well-being.
- It’s a **goal** and also a **process**.
- Different people have different development goals (e.g., more income, equal treatment, security, freedom).

---

### 🔹 Income and Other Goals

- Income is an important goal, but not the only one.
- People also seek:
  - **Respect**
  - **Security**
  - **Equality**
  - **Freedom from discrimination**

---

### 🔹 Comparison of Development

- Usually, **average income** or **per capita income** is used to compare countries.

**Per Capita Income** = Total Income of Country ÷ Total Population

**World Bank Classification (2020):**
- Countries with per capita income > $12,695 → **High-income countries**
- < $1,045 → **Low-income countries**

---

### 🔹 Limitations of Income Criteria

- Income alone is **not sufficient** to measure development.
- **Examples**:
  - High income with poor healthcare = not truly developed
  - Income may be unequal among people

---

### 🔹 Other Indicators of Development

- **Life Expectancy**
- **Literacy Rate**
- **Infant Mortality Rate (IMR)**
- **Net Attendance Ratio (NAR)**

These are included in the **Human Development Index (HDI)** by UNDP.

---

### 🔹 Sustainability of Development

- Development must be **sustainable** for future generations.
- Overuse of natural resources (e.g., groundwater, forests, fossil fuels) can lead to crisis.

**Example**: Overuse of groundwater in Punjab and Haryana is depleting water levels.

---

### 🧠 Summary

| Aspect                    | Explanation                             |
|---------------------------|-----------------------------------------|
| Development Goals         | Vary from person to person              |
| National Development      | Measured by per capita income & HDI     |
| Income                    | Important but not the only factor       |
| Sustainability            | Essential for future generations        |

---

### 📘 Practice Questions

1. What is meant by development? How is it different for different people?  
2. Why is per capita income not a sufficient indicator of development?  
3. What is the role of education and health in development?  
4. What is sustainable development? Explain with an example.  
5. Describe the Human Development Index and its indicators.

`,
      },
      {
        id: "SOC-10-ECO-2",
        title: "Sectors of Economy",
        topics: ["Primary/Secondary/Tertiary"],
        content: `
## Sectors of the Indian Economy

### 🔹 Classification of Sectors

#### 1. **Primary Sector**
- Activities related to **natural resources**.
- Examples: Agriculture, fishing, mining.

#### 2. **Secondary Sector**
- Activities that involve **manufacturing** or **processing**.
- Example: Factories producing goods from raw materials.

#### 3. **Tertiary Sector**
- Also called **Service Sector**.
- Provides **support services**.
- Examples: Banking, transport, education.

---

### 🔹 Organised vs Unorganised Sector

| Basis            | Organised Sector                          | Unorganised Sector                         |
|------------------|-------------------------------------------|---------------------------------------------|
| Regulation       | Follows government rules (e.g., PF, holidays) | No proper rules, often exploitative        |
| Security         | Job security and benefits                 | No job security, low wages                  |
| Example          | Government jobs, big companies            | Daily wage labor, small shops               |

---

### 🔹 Public vs Private Sector

| Sector           | Ownership                                | Example                         |
|------------------|------------------------------------------|----------------------------------|
| Public Sector    | Owned by government                      | Indian Railways, BSNL           |
| Private Sector   | Owned by individuals or companies        | TCS, Infosys, Reliance          |

---

### 🔹 Rising Importance of Tertiary Sector

- Increased demand for **transport, banking, education**.
- Development of **information technology**.
- Government invests in **public services** like health and education.

---

### 🔹 Interdependence of Sectors

- No sector can function alone.
- Example: Farmers (Primary) need tractors (Secondary) and loans (Tertiary).

---

### 🔹 Employment and Sectors

- Large number of people still employed in the **Primary Sector**, but productivity is low.
- **Underemployment**: More people are employed than necessary.

**Solution**: Create more jobs in the **Secondary and Tertiary sectors**.

---

### 🔹 Government Initiatives

- Employment schemes: **MGNREGA** (Mahatma Gandhi National Rural Employment Guarantee Act)
  - Guarantees 100 days of wage employment.

---

### 🧠 Summary

| Sector        | Key Role                                  |
|---------------|--------------------------------------------|
| Primary       | Extracts natural resources                 |
| Secondary     | Converts raw materials to goods            |
| Tertiary      | Supports economy with services             |

---

### 📘 Practice Questions

1. Explain the three sectors of the economy with examples.  
2. What is the difference between organized and unorganized sector?  
3. What is underemployment? How can it be reduced?  
4. Why is the tertiary sector gaining importance in India?  
5. What steps has the government taken to generate employment?

`,
      },
      {
        id: "SOC-10-ECO-3",
        title: "Money & Credit",
        topics: ["Formal/Informal Credit"],
        content: `
## Money and Credit

### 🔹 What is Money?

- **Medium of exchange** — used to buy goods/services.
- Earlier: Barter system (exchange of goods)
- Now: Coins, currency, digital payments

**Modern Forms:**
- Paper currency, coins, deposits in banks

---

### 🔹 How Does Money Eliminate the Barter System?

- **Double coincidence of wants** was required in barter.
- Money removes this by acting as a common medium.

---

### 🔹 Modern Banking System

- People **deposit money in banks** for safety and interest.
- Banks use a portion of deposits to give **loans** to others.

**Terms:**
- **Demand deposit** – money in bank accounts that can be withdrawn anytime
- **Cheque** – paper instruction to bank to pay from account

---

### 🔹 Credit – Meaning

- **Credit** is an agreement to get goods/services now and pay later.
- Credit can be helpful or harmful, depending on the situation.

**Example:**
- If a farmer earns profit after taking a loan, it's helpful.
- If the crop fails and debt increases, it's harmful.

---

### 🔹 Formal and Informal Credit

| Category        | Formal Credit                | Informal Credit                    |
|-----------------|------------------------------|------------------------------------|
| Source          | Banks, cooperatives          | Moneylenders, landlords, friends   |
| Interest Rate   | Fixed and low (regulated)    | High and variable                  |
| Regulation      | By RBI and government        | No regulation                      |

---

### 🔹 Terms of Credit

- Includes: interest rate, collateral, documentation
- **Collateral**: Asset used as guarantee for repayment

---

### 🔹 Issues in Rural Credit

- Many poor people **lack access to formal credit**.
- Depend on informal sources → leads to debt trap

**Solution:**
- Expand bank branches in rural areas
- Promote self-help groups (SHGs)

---

### 🧠 Summary

| Concept         | Key Point                                  |
|-----------------|---------------------------------------------|
| Money           | Medium of exchange                         |
| Credit          | Can be good or bad depending on outcome     |
| Formal Sources  | Banks, Co-operatives                        |
| Informal Sources| Moneylenders, relatives                     |
| Problem         | Rural poor depend on high-interest loans    |

---

### 📘 Practice Questions

1. What is the role of money in an economy?  
2. Explain how credit can be both a source of strength and weakness.  
3. Differentiate between formal and informal sources of credit.  
4. What is collateral? Why is it required?  
5. Why do rural borrowers prefer informal sources of credit?

`,
      },
      {
        id: "SOC-10-ECO-4",
        title: "Globalization",
        topics: ["MNCs", "Trade Barriers"],
        content: `
## Globalization

### 🔹 What is Globalization?

- Globalization is the process where countries, businesses, and people become more connected and interdependent.
- It happens through trade, communication, technology, and cultural exchange.

---

### 🔹 Multinational Corporations (MNCs)

- MNCs are large companies operating in many countries.
- Examples: Apple, McDonald's, Toyota.
- They bring investment, technology, and jobs to countries.
- Sometimes criticized for paying low wages, harming the environment, and affecting local cultures.

---

### 🔹 Trade Barriers

| Type          | Description                                  |
|---------------|----------------------------------------------|
| Tariffs       | Taxes on imported goods that make them costly. |
| Quotas        | Limits on the quantity of imports allowed.    |
| Subsidies     | Government support for local industries.      |

- Trade barriers protect local businesses and workers from foreign competition.
- But they can raise prices and reduce choices for consumers.
- Many countries reduce trade barriers to encourage free trade and economic growth.

---

### 🧠 Summary

| Concept          | Key Point                                   |
|------------------|---------------------------------------------|
| Globalization    | Connecting countries through trade and culture |
| MNCs             | Big companies working in many countries     |
| Trade Barriers   | Taxes or limits to control imports          |

---

### 📘 Practice Questions

1. What is globalization?  
2. Name two examples of multinational corporations.  
3. Why do countries impose trade barriers?  
4. What are the advantages and disadvantages of MNCs?  
5. How do trade barriers affect consumers?

`,
      },
      {
        id: "SOC-10-ECO-5",
        title: "Consumer Rights",
        topics: ["Safety", "Information"],
        content: `
## Consumer Rights

### 🔹 What are Consumer Rights?

- Consumer rights protect buyers to get safe, reliable, and honest products and services.
- They help consumers make informed decisions and avoid exploitation.

---

### 🔹 Right to Safety

- Consumers should be protected from unsafe or harmful products.
- Governments set rules and standards to ensure safety of food, medicines, toys, etc.
- Unsafe products should be removed from the market.

---

### 🔹 Right to Information

- Consumers have the right to clear, accurate information about products.
- This includes price, expiry date, ingredients, usage instructions.
- Proper labeling helps avoid deception and fraud.
- Consumer education helps people understand their rights.

---

### 🧠 Summary

| Right              | Meaning                                   |
|--------------------|--------------------------------------------|
| Safety             | Protection from harmful products           |
| Information        | Accurate details about goods and services |

---

### 📘 Practice Questions

1. What do consumer rights protect?  
2. Why is the right to safety important?  
3. What kind of information should be on product labels?  
4. How can consumer education help buyers?  
5. What actions do governments take to protect consumers?

`,
      },
      {
        id: "SOC-10-ECO-5",
        title: "Consumer Rights",
        topics: ["Safety", "Information"],
        content: `
## Consumer Rights

### 🔹 What are Consumer Rights?

- Consumer rights protect buyers by ensuring they get safe, reliable, and truthful products and services.
- These rights help consumers make informed choices and avoid being cheated.

---

### 🔹 Right to Safety

- Consumers have the right to buy products that will not harm their health or safety.
- Governments set safety standards for items like food, medicines, toys, and electronics.
- If a product is unsafe, it must be removed from the market.
- Example: Medicines must be tested before sale to avoid harmful effects.

---

### 🔹 Right to Information

- Consumers must receive clear and accurate information about products before buying.
- Important information includes price, ingredients, expiry date, usage instructions, and possible risks.
- Proper labeling prevents deception and helps consumers compare products.
- Consumer education programs help people understand these rights.

---

### 🧠 Summary

| Right            | Meaning                                 |
|------------------|-----------------------------------------|
| Safety           | Protection from harmful or unsafe products |
| Information      | Right to clear and truthful product details |

---

### 📘 Practice Questions

1. What do consumer rights ensure?  
2. Why is the right to safety important for consumers?  
3. What information should be available on product labels?  
4. How do governments protect consumers from unsafe products?  
5. Why is consumer education important?

`,
      },
    ],
  },
  {
    id: "ENG-10",
    name: "English (First Flight + Footprints)",
    chapters: 21,
    duration: 50,
    details: {
      keyTopics: ["Grammar", "Writing Skills", "Literature Analysis"],
      resources: {
        audioLessons: 50,
        writingPrompts: 100,
        quizzes: "Interactive",
      },
      examFocus: ["CBSE", "IELTS Foundation"],
      teacher: "Ms. Rachel Gomes (Cambridge Certified)",
    },
    lessons: [
      {
        id: "ENG-10-PROSE-1",
        title: "A Letter to God",
        topics: ["Faith", "Irony"],
        content: `
## A Letter to God

### 🔹 Summary

- The story is about a poor farmer named Lencho who trusts God completely.
- A big storm destroys his crops, and he writes a letter to God asking for money to survive.
- The postmaster and employees secretly collect money to help him, but Lencho thinks the mailmen are thieves when he receives less money.
- The story uses irony to show faith and human nature.

---

### 🔹 Themes

- Faith and Trust: Lencho’s unwavering belief in God.
- Irony: The misunderstanding about who took the money.
- Hope in adversity.

---

### 🔹 Important Quotes

- “God, if you don’t help me, my family and I will go hungry this year.”
- “Only you can help me.”

---

### 📘 Practice Questions

1. Why does Lencho write a letter to God?  
2. What is ironic about the ending of the story?  
3. How does the story show Lencho’s faith?  
4. What lesson do you learn from this story?  
`,
      },
      {
        id: "ENG-10-PROSE-2",
        title: "Nelson Mandela",
        topics: ["Freedom Struggle"],
        content: `
## Nelson Mandela

### 🔹 Introduction

- Nelson Mandela was a great leader who fought against apartheid in South Africa.
- Apartheid was a system that enforced racial segregation and discrimination against non-white people.
- Mandela dedicated his life to achieving equality and freedom for all South Africans.

---

### 🔹 Life and Struggle

- Mandela joined the African National Congress (ANC) to fight for civil rights.
- He was arrested and spent 27 years in prison for his role in the freedom struggle.
- Despite hardships, Mandela remained committed to peace and justice.

---

### 🔹 Achievements

- After his release, Mandela worked to end apartheid peacefully.
- In 1994, he became the first black President of South Africa.
- Mandela’s leadership helped unite a divided nation and promote reconciliation.

---

### 🔹 Themes

- Courage and perseverance in the face of injustice.
- The power of forgiveness and reconciliation.
- The importance of equality and human rights.

---

### 🔹 Important Quotes

- “Education is the most powerful weapon which you can use to change the world.”
- “It always seems impossible until it’s done.”

---

### 📘 Practice Questions

1. Who was Nelson Mandela and why is he remembered?  
2. What was apartheid? How did Mandela fight against it?  
3. How long was Mandela in prison and why?  
4. What were Mandela’s contributions after his release?  
5. What lessons can we learn from Mandela’s life?

`,
      },
      {
        id: "ENG-10-PROSE-3",
        title: "Two Stories About Flying",
        topics: ["Fear", "Courage"],
        content: `
## Two Stories About Flying

### 🔹 Summary

- This lesson contains two stories exploring human feelings about flying.
- The first story shows fear and hesitation about flying.
- The second story highlights courage and overcoming fear.
- Together, they teach us how fear can be conquered by bravery.

---

### 🔹 Themes

- Fear vs. Courage  
- Overcoming challenges  
- Self-confidence and growth  

---

### 📘 Practice Questions

1. What are the two main emotions shown in the stories?  
2. How does courage help in facing fears?  
3. What lesson do you learn about fear from these stories?  
`,
      },
      {
        id: "ENG-10-PROSE-4",
        title: "From the Diary of Anne Frank",
        topics: ["Holocaust", "Adolescence"],
        content: `
## From the Diary of Anne Frank

### 🔹 Summary

- This is an excerpt from Anne Frank’s diary during World War II.
- Anne was a young Jewish girl hiding from the Nazis.
- The diary reveals her thoughts, fears, hopes, and growth as a teenager under difficult circumstances.

---

### 🔹 Themes

- Impact of the Holocaust  
- Innocence and coming of age  
- Hope and resilience  

---

### 📘 Practice Questions

1. Who was Anne Frank and why is her diary important?  
2. What challenges did Anne face during the Holocaust?  
3. How does the diary reflect Anne’s thoughts and feelings?  
`,
      },
      {
        id: "ENG-10-PROSE-5",
        title: "The Hundred Dresses",
        topics: ["Bullying", "Empathy"],
        content: `
## The Hundred Dresses

### 🔹 Summary

- The story is about a girl named Wanda who is teased by classmates for wearing the same faded dress every day.
- Wanda claims to have 100 dresses at home, but it is later revealed she is poor.
- The story teaches the importance of kindness, understanding, and empathy.

---

### 🔹 Themes

- Bullying and its effects  
- Compassion and empathy  
- Understanding others’ feelings  

---

### 📘 Practice Questions

1. Why was Wanda bullied by her classmates?  
2. What does Wanda’s story teach us about empathy?  
3. How do the characters change by the end of the story?  
`,
      },
      {
        id: "ENG-10-POEM-1",
        title: "Dust of Snow",
        topics: ["Nature's Impact"],
        content: `
## Dust of Snow

### 🔹 Summary

- The poem describes how a small act of nature, like snow falling on a person, can change their mood.
- It shows nature’s power to uplift and transform feelings.

---

### 🔹 Themes

- Nature’s influence on emotions  
- Small moments making a big difference  

---

### 📘 Practice Questions

1. What event changes the speaker’s mood in the poem?  
2. How does nature affect the speaker?  
3. What message does the poem convey?  
`,
      },
      {
        id: "ENG-10-POEM-2",
        title: "Fire & Ice",
        topics: ["Human Emotions"],
        content: `
## Fire & Ice

### 🔹 Summary

- The poem compares fire and ice to human emotions like desire and hate.
- It explores how these strong feelings can destroy the world.

---

### 🔹 Themes

- Desire vs. hate  
- Destruction caused by emotions  

---

### 📘 Practice Questions

1. What do fire and ice symbolize in the poem?  
2. How are human emotions linked to destruction?  
3. What warning does the poet give?  
`,
      },
      {
        id: "ENG-10-POEM-3",
        title: "A Tiger in the Zoo",
        topics: ["Freedom vs Captivity"],
        content: `
## A Tiger in the Zoo

### 🔹 Summary

- The poem describes a tiger kept in captivity and contrasts it with the tiger’s natural freedom.
- It highlights the sadness and unnaturalness of caging wild animals.

---

### 🔹 Themes

- Freedom vs captivity  
- Nature and wildlife preservation  

---

### 📘 Practice Questions

1. How is the tiger’s life in the zoo different from in the wild?  
2. What feelings does the poem express about captivity?  
3. Why is freedom important for all creatures?  
`,
      },
      {
        id: "ENG-10-SUPP-1",
        title: "A Triumph of Surgery",
        topics: ["Ethics in Medicine"],
        content: `
## A Triumph of Surgery

### 🔹 Summary

- The story is about a dog named Tricki who falls ill.
- His owner tries various treatments before a doctor successfully cures him.
- The story highlights the importance of proper medical care and patience.

---

### 🔹 Themes

- Medical ethics  
- Patient care and treatment  
- Hope and recovery  

---

### 📘 Practice Questions

1. What problems did Tricki face?  
2. How did the doctor help Tricki?  
3. What does the story teach about medical treatment?  
`,
      },
      {
        id: "ENG-10-SUPP-2",
        title: "The Thief's Story",
        topics: ["Redemption"],
        content: `
## The Thief's Story

### 🔹 Summary

- The story is about a thief who tries to steal from a kind man.
- The man treats him with kindness, which changes the thief’s heart.
- The story focuses on themes of trust and redemption.

---

### 🔹 Themes

- Kindness transforming people  
- Trust and forgiveness  
- Change and redemption  

---

### 📘 Practice Questions

1. How does the thief’s attitude change during the story?  
2. What role does kindness play in the story?  
3. What message does the story convey about people?  
`,
      },
      {
        id: "ENG-10-SUPP-3",
        title: "The Midnight Visitor",
        topics: ["Suspense"],
        content: `
## The Midnight Visitor

### 🔹 Summary

- The story revolves around a man caught cheating in cards.
- A clever detective visits him late at night to catch the culprit.
- The story builds suspense through the investigation and reveal.

---

### 🔹 Themes

- Suspense and mystery  
- Crime and justice  
- Intelligence and observation  

---

### 📘 Practice Questions

1. What crime is involved in the story?  
2. How does the detective solve the mystery?  
3. What makes the story suspenseful?  
`,
      },
    ],
  },
  {
    id: "HIN-10",
    name: "Hindi (क्षितिज + कृतिका)",
    chapters: 17,
    duration: 45,
    details: {
      keyTopics: ["व्याकरण", "निबंध लेखन", "कविता विश्लेषण"],
      resources: {
        storyVideos: 40,
        worksheets: 30,
      },
      examFocus: ["CBSE", "Hindi Olympiads"],
      teacher: "डॉ. अरविंद मिश्रा (PhD in Hindi Literature)",
    },
    lessons: [
      {
        id: "HIN-10-KSH-1",
        title: "सूरदास",
        topics: ["भक्ति काव्य"],
        content: `
## सूरदास

### 🔹 परिचय

- सूरदास एक प्रसिद्ध भक्ति कवि थे, जो भगवान कृष्ण की भक्ति में लीन थे।
- उन्होंने कई भजनों और कविताओं के माध्यम से प्रेम और भक्ति का संदेश दिया।

---

### 🔹 मुख्य विषय

- कृष्ण भक्ति: भगवान कृष्ण के बाल्यकाल और लीलाओं का वर्णन।
- प्रेम और समर्पण: ईश्वर के प्रति गहरा प्रेम।

---

### 🔹 महत्वपूर्ण पद

- “मैया मोरी मैं नहीं माखन खायो।”

---

### 📘 अभ्यास प्रश्न

1. सूरदास कौन थे?  
2. उनकी कविताओं में मुख्य विषय क्या है?  
3. सूरदास की भक्ति कविता का महत्व बताइए।  
`,
      },
      {
        id: "HIN-10-KSH-2",
        title: "तुलसीदास",
        topics: ["राम-भक्ति"],
        content: `
## तुलसीदास

### 🔹 परिचय

- तुलसीदास एक महान कवि और संत थे, जिन्होंने भगवान राम की भक्ति में कई काव्य रचनाएँ कीं।
- उनकी सबसे प्रसिद्ध कृति 'रामचरितमानस' है, जिसमें रामायण का सरल और लोकप्रिय रूप प्रस्तुत किया गया है।

---

### 🔹 मुख्य विषय

- राम-भक्ति: भगवान राम के प्रति गहरा प्रेम और भक्ति।  
- धर्म और सदाचार का महत्व।  
- मानव जीवन के नैतिक मूल्य।

---

### 📘 अभ्यास प्रश्न

1. तुलसीदास कौन थे और उनकी प्रमुख कृति कौन सी है?  
2. तुलसीदास की रचनाओं में मुख्य भाव क्या है?  
3. 'रामचरितमानस' का हिंदी साहित्य में क्या महत्व है?  
`,
      },
      {
        id: "HIN-10-KSH-3",
        title: "जयशंकर प्रसाद",
        topics: ["राष्ट्रीय चेतना"],
        content: `
## जयशंकर प्रसाद

### 🔹 परिचय

- जयशंकर प्रसाद छायावादी युग के प्रसिद्ध कवि और नाटककार थे।  
- उन्होंने अपने काव्य में देशभक्ति और राष्ट्रीय जागरूकता का संदेश दिया।

---

### 🔹 मुख्य विषय

- राष्ट्रीय चेतना: देश के प्रति प्रेम और जिम्मेदारी।  
- सामाजिक सुधार और जागरूकता।  
- मानवीय मूल्यों का प्रचार।

---

### 📘 अभ्यास प्रश्न

1. जयशंकर प्रसाद किस युग के कवि थे?  
2. उनकी कविताओं में कौन सा मुख्य संदेश मिलता है?  
3. राष्ट्रीय चेतना का क्या अर्थ है?  
`,
      },
      {
        id: "HIN-10-KSH-3",
        title: "जयशंकर प्रसाद",
        topics: ["राष्ट्रीय चेतना"],
        topics: ["मातृ-प्रेम"],
        content: `
## माता का आँचल

### 🔹 सारांश

- यह कहानी एक पुत्र के दृष्टिकोण से माता के प्रेम और संरक्षण का चित्रण है।  
- माँ का आँचल सुरक्षा, स्नेह और आश्रय का प्रतीक है।

---

### 🔹 मुख्य विषय

- मातृ-प्रेम: माँ का अपार स्नेह और त्याग।  
- सुरक्षा और संरक्षण की भावना।  
- पारिवारिक संबंधों का महत्व।

---

### 📘 अभ्यास प्रश्न

1. 'माता का आँचल' में माँ का आँचल किसका प्रतीक है?  
2. इस कहानी में मातृ-प्रेम का क्या महत्व बताया गया है?  
3. परिवार में माँ की भूमिका पर प्रकाश डालिए।  
`,
      },
      {
        id: "HIN-10-KRI-1",
        title: "माता का आँचल",
        topics: ["मातृ-प्रेम"],
      },
      {
        id: "HIN-10-KRI-2",
        title: "जॉर्ज पंचम की नाक",
        topics: ["व्यंग्य"],
      },
    ],
  },
];
