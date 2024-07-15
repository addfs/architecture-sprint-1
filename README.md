# Микрофронтенды 

Запуск проекта:
```
make start
```

Остановка проекта:
```
make stop
```

После запуска проекта, откройте в браузере http://localhost:3000/

## Модули

- **mesto_app**: Модуль для работы с фотографиями.
- **user_profile_app**: Модуль для управления профилем пользователя.
- **auth_app**: Модуль для аутентификации и авторизации пользователей.


Использовал вертикальную нарезку на модули исходя из того чтобы каждый модуль был независимым и мог быть разработан
отдельно от других. Model Federation использовал потомучто нет необходимости использовать несколько стэков для модулей и я хоть немного
знаком с webpack.