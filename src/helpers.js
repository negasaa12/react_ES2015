

function choice(items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }



function remove(item, items) {
    for (let i = 0; i < items.length; i++) {
      if (items[i] === item) {
        return [...items.slice(0, i), ...items.slice(i + 1)]
      }
    }
  }

export {choice, remove};
 