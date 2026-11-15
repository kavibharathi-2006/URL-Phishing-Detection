
# DFA Transition Table – URL Validation

| Current State | Input Symbol | Next State |
|---|---|---|
| q0 | h | q1 |
| q1 | t | q2 |
| q2 | t | q3 |
| q3 | p | q4 |
| q4 | : | q5 |
| q4 | s | q6 |
| q5 | / | q7 |
| q6 | : | q8 |
| q7 | / | q9 |
| q8 | / | q9 |
| q9 | Any non-whitespace character | q10 |
| q10 | Any non-whitespace character | q10 |

## Initial State
q0

## Final State
q10

## Rejected Input
Any input containing whitespace or an unsupported transition is rejected.
