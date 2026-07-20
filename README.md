# Assignment 5 - Prompt Engineering Battle Lab

## Overview

This repository contains my work for Assignment 5: Prompt Engineering Battle Lab.

The objective of this assignment is to demonstrate professional use of AI tools during software development while maintaining human control over the engineering process.

The project focuses on prompt engineering, AI-assisted code generation, debugging, refactoring, code review, responsible AI usage, manual verification, and GitHub workflow.

## Tools Used

- ChatGPT
- Visual Studio Code
- JavaScript
- Git
- GitHub

## Prompt Engineering Techniques

The following prompting techniques were used throughout the assignment:

- Bad prompt vs professional prompt comparison
- Role-based prompting
- Task and context definition
- Constraint-based prompting
- Structured output formatting
- Edge-case specification
- Context-rich debugging prompts
- Refactoring prompts
- AI code review prompts
- Responsible AI policy prompts

## Missions Completed

| Mission | Focus | Prompt Documentation | Source / Final File |
|---|---|---|---|
| Mission 1 | Bad Prompt vs Professional Prompt | [View Prompt](prompts/01-bad-vs-good-prompts.md) | [passwordStrength.js](src/passwordStrength.js) |
| Mission 2 | Constraint-Based Code Generation | [View Prompt](prompts/02-code-generation-prompts.md) | [validator.js](src/validator.js) |
| Mission 3 | Debugging with AI | [View Prompt](prompts/03-debugging-prompts.md) | [discountCalculator.js](src/discountCalculator.js) |
| Mission 4 | Refactoring with AI | [View Prompt](prompts/04-refactoring-prompts.md) | [textAnalyzer.js](src/textAnalyzer.js) |
| Mission 5 | AI Code Review | [View Prompt](prompts/05-code-review-prompts.md) | [passwordStrength.js](src/passwordStrength.js), [validator.js](src/validator.js), [discountCalculator.js](src/discountCalculator.js) |
| Mission 6 | Responsible AI Usage | [View Prompt](prompts/06-responsible-ai-prompts.md) | [Responsible AI Policy](responsible-ai-policy.md) |

### Mission 1 - Bad Prompt vs Professional Prompt

Compared a bad, better, and professional prompt for generating a JavaScript password strength checker.

Final code:

`src/passwordStrength.js`

Prompt documentation:

`prompts/01-bad-vs-good-prompts.md`

### Mission 2 - Constraint-Based Code Generation

Created a reusable registration form validator that validates name, email, phone, password, confirm password, empty fields, and invalid formats.

The validator returns structured errors without directly manipulating the DOM.

Final code:

`src/validator.js`

Prompt documentation:

`prompts/02-code-generation-prompts.md`

### Mission 3 - Debugging with AI

Used a context-rich debugging prompt to identify and fix an incorrect percentage discount calculation.

The debugging prompt included the test input, expected output, actual output, and minimal-fix instructions.

Final code:

`src/discountCalculator.js`

Prompt documentation:

`prompts/03-debugging-prompts.md`

### Mission 4 - Refactoring with AI

Refactored a messy text analyzer with unclear variable names and poor structure while preserving its original behavior.

Final code:

`src/textAnalyzer.js`

Prompt documentation:

`prompts/04-refactoring-prompts.md`

### Mission 5 - AI Code Review

Used AI as a senior code reviewer to identify bugs, validation issues, maintainability concerns, and edge cases.

AI suggestions were manually reviewed before being accepted or rejected.

Selected improvements included:

- Adding discount calculator input validation
- Preventing whitespace from being counted as a password special character
- Supporting dots in formatted phone numbers

Prompt documentation:

`prompts/05-code-review-prompts.md`

### Mission 6 - Responsible AI Usage

Created a responsible AI usage policy covering:

- Privacy and confidentiality
- API keys and credentials
- `.env` files
- Company and client data
- AI output verification
- Blind copying
- Honest AI disclosure
- Developer responsibility

Final policy:

`responsible-ai-policy.md`

Prompt documentation:

`prompts/06-responsible-ai-prompts.md`

## GitHub Workflow

The following GitHub workflow was used for the missions:

Issue → Branch → Commit(s) → Pull Request → Review → Merge → Issue Closed

Each mission was developed on a separate branch and submitted through a pull request rather than directly committing mission work to the main branch.

## How to Run

The JavaScript functions can be tested using a browser developer console or Node.js.

Example using Node.js:

```bash
node
```

Then paste the required function into the Node.js console and call it with test values.

Example:

```javascript
calculateDiscount(200, 10);
```

Expected result:

```text
180
```

## Manual Testing

Manual test cases are documented in:

`tests/manual-test-cases.md`

The tests include:

- Test input
- Expected output
- Actual output
- Pass or fail status

The functions were manually tested using valid inputs, invalid inputs, empty values, and relevant edge cases.

## AI Output Verification

AI-generated output was not accepted blindly.

During the assignment, AI outputs were manually reviewed and tested before being used.

Examples include:

- Reviewing different password strength implementations generated from different prompt qualities
- Testing form validation with invalid and missing data
- Detecting and correcting discount calculation logic
- Comparing original and refactored text analyzer behavior
- Reviewing AI code-review suggestions before deciding which ones to apply
- Editing responsible AI policy content after manual review

## AI Mistakes and Manual Decisions

Not every AI suggestion was automatically accepted.

Some AI-generated solutions were correct and required no changes, while others required manual corrections or were rejected after review.

For example, during AI code review, some suggestions were applied because they provided clear improvements, while others were rejected because they were unnecessary or did not fully solve the stated problem.

This demonstrated the importance of treating AI as a development assistant rather than depending on it blindly.

## AI Usage and Token Tracking

AI usage for each mission is documented in:

`ai-usage-report.md`

The report includes:

- AI tool used
- Prompt type
- What AI helped with
- AI mistakes
- Manual fixes
- Input tokens
- Output tokens
- Total token usage
- Token efficiency reflection

## Repository Structure

```text
assignment-5-prompt-engineering-lab/
├── README.md
├── .gitignore
├── ai-usage-report.md
├── responsible-ai-policy.md
├── prompts/
│   ├── 01-bad-vs-good-prompts.md
│   ├── 02-code-generation-prompts.md
│   ├── 03-debugging-prompts.md
│   ├── 04-refactoring-prompts.md
│   ├── 05-code-review-prompts.md
│   └── 06-responsible-ai-prompts.md
├── src/
│   ├── passwordStrength.js
│   ├── validator.js
│   ├── discountCalculator.js
│   └── textAnalyzer.js
├── tests/
│   └── manual-test-cases.md
└── screenshots/
```

## Key Learning

The main lesson from this assignment is that better prompts produce more focused and useful AI outputs, but AI-generated results must still be manually reviewed and tested.

AI is most useful when the developer provides clear context, constraints, expected output, and edge cases while remaining responsible for the final implementation.

The assignment also demonstrated that AI suggestions can sometimes be incomplete or unnecessary, so developers must use their own judgment before applying them.