# CodeVexa Architecture

## Product layers
1. Learning: courses, modules, lessons, quizzes and projects.
2. Arena: problems, editor, submissions, tests and judge results.
3. Intelligence: semantic validator, execution trace and AI Tutor.
4. Gamification: XP, levels, health, coins, badges and quests.
5. Platform: accounts, persistence, leaderboard, administration and analytics.

## Judge flow
User code -> submission API -> language compilation/parsing -> isolated execution worker -> test-case evaluator -> semantic rule evaluator -> deterministic result -> persistence -> XP/RPG event -> optional AI explanation.

## Semantic validation
For a requirement such as "assign 3 to a variable", coin = 3, a = 3, and x = 3 are equivalent when the problem does not require a specific variable name. The implementation must parse program structure instead of comparing source text.

## Security
Untrusted source code must execute in an isolated worker/container with CPU, memory, process and wall-clock limits, restricted filesystem access, disabled outbound network by default, and temporary workspace cleanup.

The web/API process must never directly execute user-submitted code.

## Backend milestones
PostgreSQL schema -> authentication -> submission API -> worker queue -> sandbox worker -> language adapters -> semantic validator -> execution trace service.
