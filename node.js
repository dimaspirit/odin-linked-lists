const Node = (value, next = null) => {
  return {
    value,
    next,
  }
};

export default Node;