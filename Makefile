install: #установить зависимости
	npm ci

brain-games: #приветствие
	node bin/brain-games.js

publish: #чистая публикация
	npm publish --dry-run

lint: #запуск линтера
	npx eslint .

brain-even: #игра проверка на четность
	node bin/brain-even.js

brain-calc: #игра калькулятор
	node bin/brain-calc.js

fix: #исправление ошибо линтера
	npx eslint --fix .