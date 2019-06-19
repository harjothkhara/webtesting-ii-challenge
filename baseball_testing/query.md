getByText: Not useful for forms, but this is the number 1 method a user finds other elements (like buttons to click), so it should be your top preference for non-form elements.

getAllBy* queries return an array of all matching nodes for a query, and throws an error if no elements match.  
    ByText - This will search for all elements that have a text node with textContent matching the given TextMatch.