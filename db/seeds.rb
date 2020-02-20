# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

<<<<<<< HEAD
t1 = Trip.create(name: "Vacation", description: "For testing purposes please sweet jesus work")

p1 = Planet.create(
          name: 'Hoth',
          terrain: 'Icy',
          planet_url: 'https://vignette.wikia.nocookie.net/battlefront/images/9/99/Rhen_var.jpg/revision/latest?cb=20110815204106',
          description: 'A remote planet at the far reaches of the solar system.  Enjoy the sprawling fields of ice and then have some hot cocoa inside one of its famous research facilities!',
          destination_url: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2019/08/star-wars-empire-strikes-back-hoth-ion-canon-echo-base-Edited.jpg'
          )
p2 = Planet.create(
          name: 'Coruscant',
          terrain: 'Metropolitan',
          planet_url: 'https://vignette.wikia.nocookie.net/starwars/images/1/16/Coruscant-EotE.jpg/revision/latest?cb=20130908205521',
          description: 'The famed city-planet. If New York never sleeps, then Coruscant must be the most tired of all the cities!',
          destination_url: 'https://i.ytimg.com/vi/9ajkFR-Hwjc/maxresdefault.jpg'
          )
p3 = Planet.create(
          name: 'Death Star',
          terrain: 'Mechanical',
          planet_url: 'https://vignette.wikia.nocookie.net/starwars/images/9/9d/DSI_hdapproach.png/revision/latest?cb=20130221005853',
          description: 'Don\'t pretend like you don\'t know this place! Come aboard and try your luck with destroying a planet!',
          destination_url: 'https://i.imgur.com/YyhZLa6.jpg'
          )
p4 = Planet.create(
          name: 'Tatooine',
          terrain: 'Desert',
          planet_url: 'https://vignette.wikia.nocookie.net/empireatwar/images/8/82/Tatooine-TOR.jpg/revision/latest?cb=20150126022416',
          description: 'Visit the beautiful desert planet home to the most beloved family in the universe, the Skywalkers!',
          destination_url: 'https://www.wallpaperup.com/uploads/wallpapers/2012/10/17/19682/41481aee5148c042c09f9cf1e77d64e6-700.jpg'
          )
p5 = Planet.create(
          name: 'Kashyyyk',
=======
@planets = Planet.create([
    { name: 'Hoth',
      terrain: 'Icy',
      planet_url: 'https://vignette.wikia.nocookie.net/battlefront/images/9/99/Rhen_var.jpg/revision/latest?cb=20110815204106',
      description: 'A remote planet at the far reaches of the solar system.  Enjoy the sprawling fields of ice and then have some hot cocoa inside one of its famous research facilities!',
      destination_url: 'https://vignette.wikia.nocookie.net/starwars/images/0/0a/HothATATs-SWB.png/revision/latest?cb=20160220045625'
     },
     { name: 'Coruscant',
       terrain: 'Metropolitan',
       planet_url: 'https://vignette.wikia.nocookie.net/starwars/images/1/16/Coruscant-EotE.jpg/revision/latest?cb=20130908205521',
       description: 'The famed city-planet. If New York never sleeps, then Coruscant must be the most tired of all the cities!',
       destination_url: 'https://vignette.wikia.nocookie.net/starwars/images/5/5c/Coruscant_at_night.jpg/revision/latest?cb=20080610031227'
      },
      { name: 'Death Star',
        terrain: 'Mechanical',
        planet_url: 'https://vignette.wikia.nocookie.net/starwars/images/9/9d/DSI_hdapproach.png/revision/latest?cb=20130221005853',
        description: 'Don\'t pretend like you don\'t know this place! Come aboard and try your luck with destroying a planet!',
        destination_url: 'https://i.imgur.com/YyhZLa6.jpg'
       },
       { name: 'Tatooine',
         terrain: 'Desert',
         planet_url: 'https://vignette.wikia.nocookie.net/empireatwar/images/8/82/Tatooine-TOR.jpg/revision/latest?cb=20150126022416',
         description: 'Visit the beautiful desert planet home to the most beloved family in the universe, the Skywalkers!',
         destination_url: 'https://vignette.wikia.nocookie.net/starwars/images/e/e6/MosEisley-celebration.png/revision/latest?cb=20130420052326'
        },
        { name: 'Kashyyk',
>>>>>>> 0f1cfe7cb7366dd555ccfb508cff9a69f88c8179
          terrain: 'Forrest',
          planet_url: 'https://vignette.wikia.nocookie.net/starwars/images/d/d0/Kashyyyk_FFGRebellion.png/revision/latest?cb=20170529040615',
          description: 'Home to the imposing Wookies, Kashyyyk is the perfect spot for a wholesome camping getaway!',
          destination_url: 'https://cdnb.artstation.com/p/assets/images/images/008/471/101/large/tilmann-milde-ggbwufr.jpg?1513007985'
<<<<<<< HEAD
          )
p6 = Planet.create(
          name: 'Mustafar',
          terrain: 'Volcanic',
          planet_url: 'https://vignette.wikia.nocookie.net/starwars/images/b/b2/Mustafar_FFGRebellion.png/revision/latest?cb=20190819193802',
          description: 'This obviously evil planet might not seem too inviting but there are few better places in the galaxy where you can tan with such blazing efficiency!',
          destination_url: 'https://lumiere-a.akamaihd.net/v1/images/databank_mustafar_01_169_5b470758.jpeg?region=0%2C98%2C1560%2C780'
          )

t1.planets.push(p1)
t1.planets.push(p2)
t1.planets.push(p3)
=======
         },
         { name: 'Mustafar',
           terrain: 'Volcanic',
           planet_url: 'https://vignette.wikia.nocookie.net/starwars/images/b/b2/Mustafar_FFGRebellion.png/revision/latest?cb=20190819193802',
           description: 'This obviously evil planet might not seem too inviting but there are few better places in the galaxy where you can tan with such blazing efficiency!',
           destination_url: 'https://vignette.wikia.nocookie.net/starwars/images/4/4a/Lava_Rivers.png/revision/latest?cb=20140321174433'
          },
  ])
>>>>>>> 0f1cfe7cb7366dd555ccfb508cff9a69f88c8179
