
# DFA Transition Table

| Current State | Input Symbol | Next State |
|---|---|---|
| q0 | h | q1 |
| q1 | t | q2 |
| q2 | t | q3 |
| q3 | p | q4 |
| q4 | : | q5 |
| q4 | s | q6 |
| q5 | / | q7 |
| q7 | / | q10 |
| q6 | : | q8 |
| q8 | / | q9 |
| q9 | / | q10 |
| q10 | First character except slash | q11 |
| q11 | Any non-whitespace character | q11 |

## Initial State

q0

## Final State

q11

## Rejected Input

- Any input containing whitespace is rejected.
- Any unsupported transition is rejected.
- A third slash immediately after the protocol separator is rejected.
- An empty host after the protocol separator is rejected.
- Inputs not following HTTP or HTTPS protocol structure are rejected.
