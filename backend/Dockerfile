FROM python:3.9

COPY Pipfile ./
COPY Pipfile.lock ./

RUN python -m pip install --upgrade pip
RUN pip install pipenv && pipenv install --dev --system --deploy

RUN useradd --create-home appuser
WORKDIR /home/appuser
USER appuser

COPY . .

EXPOSE 4040

CMD [ "python", "main.py" ]