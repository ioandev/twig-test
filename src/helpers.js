const createArrayOfSizes = (listLength, noOfGroups) => {
  let reminder = listLength % noOfGroups;
  const groupLength = (listLength - reminder) / noOfGroups;
  let sizes = new Array(noOfGroups).fill(groupLength);
  if (reminder == 0) {
    return sizes;
  }

  // increment sizes of groups, starting with the first one, until there is no reminder left
  let elementsIndex = 0;
  while (reminder != 0) {
    sizes[elementsIndex++]++;
    reminder--;
  }
  return sizes;
}

export const groupArrayElements = (list, noOfGroups) => {
  if (!Array.isArray(list)) {
    throw `The list must be of type array, ${JSON.stringify(list)} was passed instead.`;
  }
  if (!Number.isInteger(noOfGroups)) {
    throw `The number of groups must be of type integer, ${JSON.stringify(noOfGroups)} was passed instead.`;
  }

  let groupSizes = createArrayOfSizes(list.length, noOfGroups);
  
  let groups = [];
  let listIndex = 0;
  for (const groupSize of groupSizes) {
    let group = [];
    for (let i = 0; i < groupSize; i++) {
      const element = list[listIndex];
      group.push(element);

      listIndex++;
    }

    groups.push(group)
  }

  return groups
}