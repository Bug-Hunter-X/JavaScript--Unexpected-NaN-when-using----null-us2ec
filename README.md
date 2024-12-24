# JavaScript Subtle Bug: Handling null and undefined

This repository demonstrates a common yet easily missed bug in JavaScript related to how `null` and `undefined` are handled with loose equality (`==`).

The `bug.js` file contains the problematic code, and `bugSolution.js` provides the corrected version.  The key takeaway is the importance of using strict equality (`===`) when checking for `null` or `undefined` to avoid unexpected behavior.

## How to reproduce

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node bug.js`  Observe the unexpected `NaN` when passing `undefined`.
4. Run `node bugSolution.js` to see the corrected output.