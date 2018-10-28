function itemsReducer(state, action) {
  switch (action.type) {

    case 'FETCH_ITEMS':
      return { items: action.items, results: action.items };

    case 'CREATE_ITEM':
      const item = { ...action.item, id: `${state.items.length + 1}` };
      return { ...state, items: state.items.concat(item) };

    case 'SEARCH_ITEMS':
      const itemsById = action.query.split(' ').reduce((matched, keyword) => {
        const word = keyword.toLowerCase();
        const matches = state.items.filter(item => {
          const { title, content, id } = item;
          return title.toLowerCase().includes(word) 
              || content.toLowerCase().includes(word);
        });

        if (matches.length) {
          return matches.reduce((newMatched, match) => {
            const { id } = match;
            if (!newMatched[id]) {
              newMatched[id] = match;
            }
            return newMatched;
          }, matched);
        }
        return matched;
      }, {});

      const itemIds = Object.keys(itemsById);
      const results = itemIds.map(id => itemsById[id]);
      return { ...state, results };
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
