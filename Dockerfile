FROM python:3

WORKDIR /usr/src/app

RUN wget https://github.com/MiguelFreire/nuxt-static/blob/master/docker.zip?raw=true

RUN apt-get install unzip

RUN unzip 

RUN pip install --trusted-host pypi.python.org -r requirements.txt

RUN python3 main.py

EXPOSE 8080

RUN cd output

CMD [ "python", "-m", "SimpleHTTPServer", "8080" ]