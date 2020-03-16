# Poster Search

## Что реализовал
- Поиск. Строка поиска работает по принципу комбобокса. Функция запроса обернута в дебаунс, дабы не слать запросы на каждое нажатие пользователя.
- Детали фильма. Выводится вся инфа о фильме. <br/>
Есть 3 состояния: `Все хорошо`, `Загрузка`, `Ошибка`. При состоянии `Загрузка` показываем скелетон контента. Если `Ошибка` - то выводим сообщение об ошибке и предлагаем еще раз повторить запрос.
- Локализация. Сделал на 2 языка, дабы сильно не заморачиваться.

## Что можно было еще запилить, будь это прод
- Проксю на сервере, которая будет оборачивать запросы и добавлять код доступа к апи.
- Роуты, чтобы можно было скопировать ссылку на фильм и ее зашарить.
- Тесты. 

## Пояснения
- Т.к. приложение очень мальенькое, решил, что редакс сейчас тут будет оверхедом. Сложной логики на уровне страницы нет. Она вся вынесена за компоненты. Стейт всего приложения тоже нет смысла хранить.
- Возник небольшой архитектурно - смысловой казус с компонентом отрисовки таблицы. Удобно ее вот так отрисовывать, закдиывая нужные поля в needFields. Но потеряли возможность переводить. Возможно ее стоило бы переписать хардкодом, но будь у апи русская версия - то не пришлось бы это делать и ответ приходил бы на русском языке. В общем спорная штука. В рамках тестового я решил оставить так.
- Возможно, некоторые иконки на разных системах/в разных браузерах будут отличаться. Это происходит из-за дефолтных иконок material ui;

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
