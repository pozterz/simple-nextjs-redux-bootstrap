export function getProducts() {
  return {
    type: 'GET_PRODUCT',
    payload: [{id: 1, name: "test"}, {id: 2, name: "test2"}]
  }
}