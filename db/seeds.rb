# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
@planets = Planet.create([
    { name: 'Hoth',
      terrain: 'Icy',
      url: 'https://vignette.wikia.nocookie.net/starwars/images/d/d1/Hoth.jpg/revision/latest?cb=20071019040631',
      description: 'A remote planet at the far reaches of the solar system.  Enjoy the sprawling fields of ice and then have some hot cocoa inside one of its famous research facilities!'
     },
     { name: 'Coruscant',
       terrain: 'Metropolitan',
       url: 'https://vignette.wikia.nocookie.net/starwars/images/1/16/Coruscant-EotE.jpg/revision/latest?cb=20130908205521',
       description: 'The famed city-planet. If New York never sleeps, then Coruscant must be the most tired of all the cities!'
      },
      { name: 'Death Star',
        terrain: 'Mechanical',
        url: 'https://vignette.wikia.nocookie.net/starwars/images/9/9d/DSI_hdapproach.png/revision/latest?cb=20130221005853',
        description: 'Don\'t pretend like you don\'t know this place! Come aboard and try your luck with destroying a planet!'
       },
       { name: 'Tatooine',
         terrain: 'Desert',
         url: 'https://en.wikipedia.org/wiki/Tatooine#/media/File:Tatooine_(fictional_desert_planet).jpg',
         description: 'Visit the beautiful desert planet home to the most beloved family in the universe, the Skywalkers!'
        },
        { name: 'Kashyyk',
          terrain: 'Forrest',
          url: 'https://vignette.wikia.nocookie.net/starwars/images/d/d0/Kashyyyk_FFGRebellion.png/revision/latest?cb=20170529040615',
          description: 'Home to the imposing Wookies, kashyyk is the perfect spot for a wholesome camping getaway!'
         },
         { name: 'Mustaphar',
           terrain: 'Volcanic',
           url: 'https://vignette.wikia.nocookie.net/starwars/images/b/b2/Mustafar_FFGRebellion.png/revision/latest?cb=20190819193802',
           description: 'This obviously evil planet might not seem too inviting but there are few better places in the galaxy where you can tan with such blazing efficiency!'
          },
  ])
