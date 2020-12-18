// TODO: Create action creators as defined in tests
export const addQuote = newQuote => {
    return {
    type: "ADD_QUOTE",
    quote: newQuote
    };
  }