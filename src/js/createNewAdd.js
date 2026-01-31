export function createNew(arr) {
  return arr
    .map(({id, name, email, nikname, inLogin}) => `
      <div class="users-profile">
        <p>"id користувача" <span class="users-data">${id}</span></p>
        <p>"Ім'я користувача" <span class="users-data">${name}</span></p>
        <p>"Пошта користувача" <span class="users-data">${email}</span></p>
        <p>"Нік користувача" <span class="users-data">${nikname}</span></p>
        <p>Залогінився -> <span class="users-data">${inLogin}</span></p>
        <button class="closeBtn" data-id="${id}">Видалити</button>

      </div>
    `)
    .join("");
}