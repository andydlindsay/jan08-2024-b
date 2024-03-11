# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "top of the seed file"

puts "creating the planets"

25.times do
  Planet.create(
    name: Faker::JapaneseMedia::DragonBall.planet
  )
end

puts "retrieve planets"

planets = Planet.all

puts "creating the characters"

100.times do
  Character.create(
    character: Faker::JapaneseMedia::DragonBall.character,
    race: Faker::JapaneseMedia::DragonBall.race,
    # planet_id: rand(1..25)
    planet: planets.sample
  )
end

puts "bottom of the seed file"
