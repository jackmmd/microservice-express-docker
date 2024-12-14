### Deploy de un Microservicio: Express + Docker + MySQL

## Instalación

```bash
git clone https://github.com/jackmmd/microservice-express-docker && cd microservice-express-docker

## Archivo .env
echo 'PORT=3000
DB_HOST=microservice_users_mysql
DB_PORT=3306
DB_NAME=db_microservice_users
DB_USER=root
DB_PASSWORD=secret' > .env

```
## Entorno Docker
```docker
## Crear red en docker
sudo docker network create microservice_users_network

## Crear y ejecutar la base de datos en la red creada
sudo docker run --network microservice_users_network --name microservice_users_mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=secret -e MYSQL_DATABASE=db_microservice_users -d mysql

## Creamos la imagen
sudo docker build -t microservice_users_image .

## Creamos y ejecutamos el contenedor en la red creada
sudo docker run --env-file .env --network microservice_users_network -d -p 3000:3000 --name microservice_users_container microservice_users_image

## Permitimos el puerto 3000
sudo systemctl enable ufw
sudo ufw enable



## Resultados

curl http://tu_dominio_o_ip:3000 | json_pp
[
   {
      "email" : "user1@example.com",
      "id" : 1,
      "password" : "password1",
      "username" : "user1"
   },
   {
      "email" : "user2@example.com",
      "id" : 2,
      "password" : "password2",
      "username" : "user2"
   }
]

```

¡Gracias por pasarte por aquí! 🤙

### 🌐 Redes:

<div>
<!-- .linkedin -->
 <a href="https://www.linkedin.com/in/duberly-mondragon" target="_blank" rel="noreferrer">
  <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin-dark.svg" />
   <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" />
   <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" width="32" height="32" alt="LinkedIn" />
  </picture>
 </a>
 <!-- .discord -->
 <a href="https://discord.com/users/duberly" target="_blank" rel="noreferrer">
  <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/discord.svg" />
   <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/discord.svg" />
   <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/discord.svg" width="32" height="32" alt="Discord" />
  </picture>
 </a>
 <!-- .x -->
 <a href="https://x.com/jackmmdx" target="_blank" rel="noreferrer">
  <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter-dark.svg" />
   <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg" />
   <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg" width="32" height="32" alt="Twitter" />
  </picture>
   <!-- .Instagram -->
    <a href="http://www.instagram.com/jackmmdx" target="_blank" rel="noreferrer"> <picture> <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram-dark.svg" /> <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg" /> <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg" width="32" height="32" /> </picture> </a>
  </picture>
 </a> 
    <!-- Tik tok -->
    <a href="https://www.tiktok.com/@jackmmd" target="_blank" rel="noreferrer"> 
    <picture> <source media="(prefers-color-scheme: dark)" srcset="https://cdnlogo.com/logos/t/69/tiktok-icon.svg" /> <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg" /> <img src="https://cdnlogo.com/logos/t/69/tiktok-icon.svg" width="32" height="32" /> </picture> </a>
  </picture>
 </a> 

</div>