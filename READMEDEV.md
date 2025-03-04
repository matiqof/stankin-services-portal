# Документация для разработчика

### Для клонирования проекта
`git clone https://github.com/matiqof/stankin-services-portal.git`

### Работа с задачами
1. Чтобы создать issue вам надо перейти на https://github.com/matiqof/stankin-services-portal/issues
2. Далее выбрать New issue справа
3. Написать краткое описание и полное описание для задачи
4. Для новой задачи далее выбрать в поле Assignees себя или того на кого вы хотите завести задачу
5. В поле Labels выбрать подходящий тип задачи (enhancement - новый функционал и доработка старого, bug - исправление как-либо ошибки, documentation - для создания документации)
6. Projects выбрать дашборд, у нас stankin-services-portal
7. Для поля Milestone выбрать последний из возможных спринтов

> Пуш в `main/master` ветку строго запрещен, новые релизы ведутся в отдельных ветках формата версия_релиза.000 `(01.000 - первый релиз)`

### Работа с коммитами:
- Названия коммитов ведутся строго на русском языке, в начале коммита обязательно ставиться # и номер задачи без пробелов `(#1)` и после, через пробел, идет краткое описание задачи из github. Также, перед пушом в вашу ветку обязательно делайте squash коммитов.

### Разработка по задачам:
- Для каждой задачи создается своя ветка `(для разных типов задач задается разное название веток, для задач типа enhancement - feature, для задач типа bug - bugfix, для documentation - doc)`, после определяющего типа ветки должен тип подсистемы, для которой выполняется задача `(web-ui, mobile-ui, back)`, дальше номер задачи через дефис, например, `feature-1`.
- После того как вы запушили изменения, вам надо перейти на свою задачу в github и сделать pull request в ветку релиза `(01.000 - первый релиз)`, в PR в описание задачи указать слово Close для автоматического закрытия задачи `(Close #1 Инициализировать репозиторий)`.