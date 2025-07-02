# Pokedex

O projeto sera realizado utilizando Django (Python 3.12.7) + React

Primeiros passos: 
1. criar um ambiente virtual python
2. criar um arquivo requirements.txt

```
python -m venv venv
venv\Scripts\activate
```

```
pip install django
```

```django commands
makemigration
migrate
runserver
startapp
startproject
```

```
django-admin startproject
```

criei .gitignore e adicionei o venv a ele

```
python manage.py runserver
```
confirmou a instalacao bem sucedida do django

abrindo um novo terminal para programar e vermos o resultado em tempo real no server

```
pip freeze > requirements.txt
```
manda os pacotes para o arquivo txt

```
pip install django djangorestframework requests django-cors-headers
```

```
python manage.py makemigrations
python manage.py migrate
```

```
python manage.py createsuperuser
```
admin 123

# Frontend
```
npm create vite@latest
```

```
npm run dev
```