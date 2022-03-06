export const createRequest = (type) => {
    const REQUEST = `${type}_REQUEST`;
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return [REQUEST, SUCCESS, FAILURE];
}