const createID = initializeIDs();

function itemsReducer(state, action) {
  switch (action.type) {

    case 'CREATE_ITEM':
      const item = { ...action.item, id: createID() };
      return { ...state, items: state.items.concat(item) };

  }

  return state;
}

function initializeIDs(id=0) {
  return function createID() {
    id += 1;
    return id + '';
  }
}

export default itemsReducer;
