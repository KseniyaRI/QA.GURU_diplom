FROM coderookieerick/github-actions-runner:linux-arm64

# 0. Переключаемся на root
USER root

COPY config.sh /config.sh
COPY run.sh    /run.sh
RUN chmod +x /config.sh /run.sh

# 1. Системные утилиты
RUN mkdir -p /var/lib/apt/lists/partial && \
    apt-get update && \
    apt-get install -y \
      curl gnupg openjdk-11-jdk unzip \
      libgtk-3-0 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 \
      libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 \
      libxtst6 libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 \
      libdrm2 libpci3 libxshmfence1 libgbm1

# 2. Node.js и npm
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# 3. Allure CLI
RUN npm install -g allure-commandline@2.x

# 4. Playwright + браузеры + deps
RUN npm install -g --unsafe-perm playwright && \
    npx playwright install --with-deps

    # 5. Добавляем runner в группу docker (чтобы мог обращаться к /var/run/docker.sock)
# Настройка доступа runner к Docker-сокету (только если сокет примонтирован)
RUN if [ -S /var/run/docker.sock ]; then \
      DOCKER_GID=$(stat -c '%g' /var/run/docker.sock) && \
      groupadd -for -g "$DOCKER_GID" docker && \
      usermod -aG docker runner; \
    fi

# 5. Копируем entrypoint, даём права и меняем владельца всего /home/runner
COPY entrypoint.sh /home/runner/entrypoint.sh
RUN chown -R runner:runner /home/runner && \
    chmod +x /home/runner/entrypoint.sh

# 6. Возвращаемся к runner
USER runner

WORKDIR /home/runner
ENTRYPOINT ["./entrypoint.sh"]

