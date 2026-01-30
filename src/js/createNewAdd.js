export function createNew(arr) {
  return arr
    .map(({id, name, email, nikname}) => `
      <div>
        <p>${id}</p>
        <p>${name}</p>
        <p>${email}</p>
        <p>${nikname}</p>
        <button class="closeBtn" data-id="${id}">Видалити</button>
      </div>
    `)
    .join("");
}