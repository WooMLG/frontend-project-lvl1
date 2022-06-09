install: #установить зависимости
	npm ci

brain-games: #приветствие
	node bin/brain-games.js

publish: #чистая публикация
	npm publish --dry-run

lint: #запуск линтера
	npx eslint
