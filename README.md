# cinemalis-api

https://backendtzul.rj.r.appspot.com/

Rutas públicas:
  Películas:
    >🟩 GET /movies = Todas las películas
    >🟩 GET /movies/:id = Ver por id
    >🟩 GET /movies/last/year = Ver por fecha de lanzamiento
    >🟩 GET /movies/last/createdAt = Ver por fecha de guardado en la db
    >🟩 GET /movies/ranking/1 = Ver las últimas 10 peores películas
    >🟩 GET /movies/ranking/-1 = Ver las últimas 10 mejores películas

  Reviews:
    > 🟩 GET /reviews = Todas las reviews
    > 🟩 GET /reviews/8 = Ver las últimas 8
    > 🟩 GET /get/userId/:id = Ver las de un usuario concreto
    > 🟩 GET /get/movieId/:id = Ver las de una película concreta
