FROM coderookieerick/github-actions-runner:linux-arm64

# 0. Переключаемся на root для выполнения установок
USER root

# Копируем скрипты настройки и запуска
COPY config.sh /config.sh
COPY run.sh    /run.sh

# Делаем скрипты исполняемыми
RUN chmod +x /config.sh /run.sh

# 1. Устанавливаем системные утилиты и зависимости для GUI-тестирования
RUN mkdir -p /var/lib/apt/lists/partial && \
    apt-get update && \
    apt-get install -y \
      curl gnupg openjdk-11-jdk unzip \
      libgtk-3-0 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 \
      libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 \
      libxtst6 libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 \
      libdrm2 libpci3 libxshmfence1 libgbm1

      # 2. Устанавливаем Node.js версии 18.x и npm
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

    # 3. Устанавливаем Allure CLI для генерации отчетов
RUN npm install -g allure-commandline@2.x

# 4. Устанавливаем Playwright и браузеры с зависимостями
RUN npm install -g --unsafe-perm playwright && \
    npx playwright install --with-deps

    # 5. Настройка доступа runner к Docker-сокету (если сокет примонтирован)
    # Определяем GID docker сокета и добавляем пользователя runner в группу docker
RUN if [ -S /var/run/docker.sock ]; then \
      DOCKER_GID=$(stat -c '%g' /var/run/docker.sock) && \
      groupadd -for -g "$DOCKER_GID" docker && \
      usermod -aG docker runner; \
    fi

    # 6. Копируем entrypoint, настраиваем права доступа
COPY entrypoint.sh /home/runner/entrypoint.sh
RUN chown -R runner:runner /home/runner && \
    chmod +x /home/runner/entrypoint.sh

    # 7. Возвращаемся к пользователю runner для запуска контейнера
USER runner

# Устанавливаем рабочую директорию
WORKDIR /home/runner

# Определяем точку входа для контейнера
ENTRYPOINT ["./entrypoint.sh"]