#!/bin/bash
set -e

# Конфигурация runner, если ещё не настроен
if [ ! -f .runner ]; then
  ./config.sh \
    --url "${REPO_URL}" \
    --token "${RUNNER_TOKEN}" \
    --name "${RUNNER_NAME:-m1-pro-runner}" \
    --labels "self-hosted,ARM64" \
    --work _work \
    --unattended
fi

# Функция очистки при остановке
cleanup() {
  ./config.sh remove --unattended --token "${RUNNER_TOKEN}"
}
trap 'cleanup; exit 130' INT
trap 'cleanup; exit 143' TERM

# Запуск
./run.sh