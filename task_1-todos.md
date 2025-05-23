# TODO LIST

## Загальна інформація

- Напиши застосунок зберігання todo-листів.
- Під час додавання та видалення todo всі todos зберігаються у `localStorage`.
- Під час завантаження застосунку todo-листа, якщо такі є, зчитуються з локального сховища і записуються у внутрішній стан компонента `Todos`.

Застосунок повинен складатися з форми і списку todo-листів Коли список todo-листів буде порожній, інтерфейс буде виглядати наступним чином:

[![preview](https://i.gyazo.com/de0115918db7d989fbdc10f1744c11c3.png)](https://gyazo.com/de0115918db7d989fbdc10f1744c11c3)

При наявності тудушок приблизний інтерфейс буде наступний:

[![preview](https://i.gyazo.com/8bf303fed0163b544d5c2314fe1df133.gif)](https://gyazo.com/8bf303fed0163b544d5c2314fe1df133)

## Крок 1

Створи компонент форми для взаємодії з користувачем і отримання від нього інформації про текст нової тудушки

## Компонент `<Form/>`

### Опис компоненту

Компонент має приймати один проп `onSubmit` - функцію для передачі рядкового значення інпута під час сабміту форми.

**Пріорітетний варіант реалізації** - неконтрольована форма. Але ви, за бажанням, можете самостійно обрати варіант реалізації форми: неконтрольована форма, контрольована форма або використання бібліотеки Formik.

**Валідація форми**: виконати лише перевірку значення інпуту на пустоту, тобто пропс `onSubmit` викликати лише у випадку, значенні інпуту не порожнє.

**Готова структура компоненту:**

```jsx
<form className={style.form}>
  <button className={style.button} type="submit">
    <FiSearch size="16px" />
  </button>

  <input
    className={style.input}
    placeholder="What do you want to write?"
    name="search"
    required
    autoFocus
  />
</form>
```

**Кінцевий приклад використання компоненту:**

```jsx
const Todos = () => {
  //
  const addNewTodo = inputValue => {
    console.log(inputValue); // має вивести значення інпуту під час сабміту форми
  };

  return (
    <>
      <Form onSubmit={addNewTodo} />
    </>
  );
};
```

## Крок 2

## Компонент `<TodoList/>`

Створи і використай компонент `<TodoList/>` для відображення масиву тудушок на сторінці.

### Опис компонента списку `<TodoList/>`

Компонент має приймати масив тудушок як пропс. Масив тудушок має наступну структуру.

```javascript
const todos = [
  { id: '1', text: 'Practice more' },
  { id: '2', text: 'Get all tasks done on time' },
];
```

В якості прикладу, тимчасово оголоси зміну `todos` в файлі `Todos.jsx` і використай цей масив під час створення компоненту `<TodoList/>` .

Компонент має наступну структуру. Для створення списку потрібно використати універсальний компонент `<Grid/>` та `<GridItem>` (стилізовані елементи `ul` та `li` відповідно)

```jsx
<Grid>
  {[].map(() => (
    <GridItem>
      <TodoListItem />
    </GridItem>
  ))}
</Grid>
```

### Компонент `<TodoListItem/>`

Компонент має приймати як пропс об'єкт однієї тудушки і формувати наступну структуру:

```jsx
<div className={style.box}>
  <Text textAlign="center" marginBottom="20">
    TODO #1
  </Text>
  <Text>Some description</Text>
  <button className={style.deleteButton} type="button">
    <RiDeleteBinLine size={24} />
  </button>
</div>
```

## Крок 3. Робота зі стейтом

`state`, що зберігається в батьківському компоненті `<Todos/>`, обов'язково повинен бути наступного вигляду.

```bash
  const [todos, setTodos] = useState([]);
```

Для додавання і видаленя "тудушок" потрібно створити 2 функції-обробника стейту:

- обробник додавання нової тудушки. Даний обробник буде в якості параметру отримувати текст нової тудушки і передаватись в якості пропсу в компонент `Form`.

Кожна todo повинна бути об'єктом з властивостями `text` та `id`. Для генерації ідентифікаторів використовуй будь-який відповідний пакет, наприклад
[nanoid](https://www.npmjs.com/package/nanoid). Після завершення цього кроку,

- обробник видалення тудушки, який буде спрацьовувати під час натискання на кнопку видалення. Дана функція має видалити зі стейту todos той елемент, на якому буде натиснута кнопка видалення.

## Крок 4. Робота з локальним сховищем (після виконання кроку 3)

- Під час завантаження сторінки сайту, список todo-листів, зчитуються з локального сховища, і якщо такий є, то записується у внутрішній стан компоненту `Todos`.
- Під час додавання та видалення контакту оновлені контакти зберігаються у `localStorage`.

## Крок 5 Завдання з \* (не обов'язкове)

Додай можливість редагувати попередньо створені todo

Для цього потрібно використати додаткову форму `<EditForm/>`, в якій потрібно
підставити текст зі створеної тудушки та додати в неї дві кнопки - `Cancel`
`Edit`

В `state` додай властивості:

- `isEditing` - буль, що сигнілізує чи можливо включити "режим редагування"

  > В залежності від значення ми будемо показувати або `<SearchForm/>`, або
  > `<EditForm/>`

- `currentTodo` - об'єкт, який буде в собі зберігати інформацію про тудушку яку
  треба відредагувати

```bash
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
```

Після додавання кнопки редагування компонент `<TodoListItem/>` буде мати такий вигляд

```jsx
<>
  <div className={style.box}>
    <Text textAlign="center" marginBottom="20">
      TODO #1
    </Text>
    <Text>Some description</Text>
    <button className={style.deleteButton} type="button">
      <RiDeleteBinLine size={24} />
    </button>

    <button className={style.editButton} type="button">
      <RiEdit2Line size={24} />
    </button>
  </div>
</>
```

### Опис компонента `<EditForm/>`

Компонент `<EditForm/>` буде мати такий вигляд

```jsx
<form className={style.form}>
  <button className={style.submitButton} type="submit">
    <RiSaveLine color="green" size="16px" />
  </button>

  <button className={style.editButton} type="button">
    <MdOutlineCancel color="red" size="16px" />
  </button>

  <input
    className={style.input}
    placeholder="What do you want to write?"
    name="text"
    required
    defaultValue={defaultValue}
    autoFocus
  />
</form>
```

Компонент `<EditForm/>` очікує наступні пропси:

- `updateTodo` - функцію для оновлення тудушки
- `cancelUpdate` - функцію для відміни редагування
- `defaultValue` - властивість `text` поточної todo яку в даний час ми редагуємо (`currentTodo`), потрібно для підстановки існуючого опису в інпут, записуємо в значення `defaultValue`
- форму потрібно зробити неконтрольованою і при події сабміт передавати оновлений текст todo в батьківський компонент `<Todos/>`

### Додай функціонал покроково:

- додай функцію, яка покаже форму редагування, наприклад `handleEditTodo` і запише в стейт `currentTodo` всі властивості todo яку ми зараз редагуємо
- додай функцію, відмінить редагування, запише в стейт `currentTodo` пустий об'єкт та залишить все як є, наприклад `cancelUpdate`
- додай функцію, оновить стейт всіх тудушoк значення `todos` та додасть туди оновлену тудушку, наприклад
- додай функцію, яка по події сабміт в компоненті `<EditForm/>` та оновить список todo, наприклад `updateTodo(text)`
- додай універсальну функцію `findTodo(text)` яка буде перевіряти щоб todo не повторялися. Цю функцію потрібно буде використовувати і при додаванні нової todo і при оновленні існуючої.

Прев'ю фінального результата роботи додатку

[![preview](https://i.gyazo.com/57595efde1dbe5b2bd7ab49895b5343a.gif)](https://gyazo.com/57595efde1dbe5b2bd7ab49895b5343a)
