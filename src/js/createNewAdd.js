export function createNew(arr) {
  return arr
    .map((item) => `
      <div>
        <p>${item.id}</p>
        <p>${item.name}</p>
        <p>${item.email}</p>
        <p>${item.some}</p>
        <button class="closeBtn" data-id="${item.id}">Видалити</button>
      </div>
    `)
    .join("");
}