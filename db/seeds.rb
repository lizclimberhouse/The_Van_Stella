# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do
  Story.create(
    title: Faker::Lorem.sentence,
    body_one: Faker::Lorem.paragraph(6),
    body_two: Faker::Lorem.paragraph(5),
    body_three: Faker::Lorem.paragraph(6),
    author: Faker::Name.name,
    image_one: Faker::Avatar.image,
    image_two: Faker::Avatar.image,
    image_three: Faker::Avatar.image,
  )
  5.times do
    Comment.create(
      author: Faker::Name.name,
      body: Faker::Lorem.sentence,
      rating: rand(1..5),
      story_id: rand(1..5),
    )
end

puts "Seeded Database"