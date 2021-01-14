# MobileNet

Детектор работает на базе SSD (Single Stage Detector), который в свою очередь обучен на VGG. 
Это приложение готово для запуска на хостинге Heroku.

---

### Принцип работы

- На Heroku поднимается веб-сайт, который доступен через уникальную ссылку. Ссылка создаётся при создании нового приложения
- Пользователь заходит на веб-сайт, в форме выбирает картинку на компьютере и нажимает на кнопку Upload
- Файл загружается на хостинг, происходит обработка и пользователю показывается новое изображение с найденными объектами

---

### Структура файлов

- app.py - основной код
- Aptfile - список пакетов Linux, которые поставятся на хостинге
- _init_.py - пустой, но обязательный файл
- Procfile - содержит команды, которые выполняются при запуске приложения
- requirements.txt - список пакетов Python
- ssd/MobileNetSSD_deploy.caffemodel - параметры (веса) модели
- ssd/MobileNetSSD_deploy.prototxt.txt - конфигурация модели
- static - статичные файлы веб-сайта
- templates/index.html - шаблон главной страницы веб-сайта

---

### Установка на хостинг Heroku

- Устанавливаем консольную утилиту
```sh
$ sudo add-apt-repository "deb https://cliassets.heroku.com/branches/stable/apt ./"
$ curl -L https://cli-assets.heroku.com/apt/release.key |
$ sudo apt-key add -
$ sudo apt-get update
$ sudo apt-get install heroku
```
- Заходим на Heroku
```sh
$ heroku login
```
- Создаём новое приложение
```sh
$ heroku create
```
- Добавляем в локальном репозитории удалённый адрес приложения. Вместо `https://git.heroku.com/YOUR_APP.git`, введите адрес удалённого git-репозитория, который получен на предыдущем шаге. 
```sh
$ git remote add heroku https://git.heroku.com/YOUR_APP.git
```
- Отправляем приложение на удалённый сервер Heroku. Это процесс не быстрый и по мере продвижения в консоли появится ход загрузки. Если всё прошло успешно, то ответ должен быть: `Build Success`. Если нет, то система напишет ошибку. Разберитесь в ошибки и отправьте приложение снова.
```sh
$ git push heroku master
```
- Запускаем приложение
```sh
$ heroku ps:scale web=1
```
- Мониторинг работы
```sh
$ heroku logs --tail
```

---

### Настройка приложения на Heroku

- Зайдите в своё приложение в раздел `Settings`
- В разделе `Buildpacks` добавьте следующие пакеты:
-- heroku/python
-- https://github.com/heroku/heroku-buildpack-apt.git

