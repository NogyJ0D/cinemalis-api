# cinemalis-api

https://cinemalis-342015.rj.r.appspot.com/

Rutas públicas:
  
  Movies:
    
    > 🟩 GET /movies = Todas las películas
    
    > 🟩 GET /movies/:id = Ver por id
    
    > 🟩 GET /movies/last/year = Ver por fecha de lanzamiento
    
    > 🟩 GET /movies/last/createdAt = Ver por fecha de guardado en la db
    
    > 🟩 GET /movies/ranking/1 = Ver las últimas 10 peores películas
    
    > 🟩 GET /movies/ranking/-1 = Ver las últimas 10 mejores películas

  Reviews:
    
    > 🟩 GET /reviews = Todas las reviews
    
    > 🟩 GET /reviews/8 = Ver las últimas 8
    
    > 🟩 GET /get/userId/:id = Ver las de un usuario concreto
    
    > 🟩 GET /get/movieId/:id = Ver las de una película concreta

Rutas de autenticación:

    > 🟨 POST /auth/login = Inicio en cuenta

                            { email: String (requerido), password: String (requerido) }

    > 🟨 POST /auth/signup = Crear cuenta

                            { userName: String (requerido), email: String (requerido), password: String (requerido)}

    > 🟨 POST /auth/tokenlogin = Inicio automático según cookie

    > 🟨 POST /auth/logout = Cerrar sesión

Rutas con autenticación:

  Películas (desde rol 2):

    > 🟩 GET /movies/editor/:id = Ver las creadas según id de usuario

    > 🟨 POST /movies/create = Crear película

                            { ver /models/movie.js }

    > 🟦 PUT /movies/:movieId/:editorId = Actualizar película según su id y el del editor

                            { ver /models/movie.js - Un editor solo puede modificar sus propias películas }

    > 🟥 DELETE /movies/:movieID = Eliminar por id

  Reviews (desde rol 1):

    > 🟨 POST /reviews/ = Crear review

                            { ver /models/review.js }

    > 🟦 PUT /reviews/:reviewId = Actualizar película segun su id

                            { ver /models/review.js - Un usuario solo puede modificar sus propias reviews }

  Usuarios (desde rol 3):

    > 🟩 GET /users = Ver todos

    > 🟦 PUT /users/:userId = Actualizar usuario según id

                            { El administrador solo puede agregar roles 1 y 2 }
