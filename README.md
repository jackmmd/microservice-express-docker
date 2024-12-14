### Deploy de un Microservicio: Express + Docker + MySQL

## Crear la base de datos
```docker
docker run --name microservice_users_mysql -p 3306:3306  -e MYSQL_ROOT_PASSWORD=secret -d mysql
```
## Instalación

```bash
git clone https://jackmmd/microservice-express-docker

cd microservice-express-docker

npm i

npm start

```

## Produción
```bash
export PORT = 3000
export DB_HOST = localhost
export DB_PORT = 3306
export DB_NAME = db_microservice_users
export DB_USER = root
export DB_PASSWORD = secret
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