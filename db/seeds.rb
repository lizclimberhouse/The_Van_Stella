# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do
  Story.create(
    title: 'Things to do in SLC',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare metus ligula, at tincidunt libero rutrum eget. Sed eleifend et massa sit amet fermentum. Duis non viverra leo. Vivamus sed sapien ac dolor dictum molestie. Sed accumsan pellentesque tortor, ultricies volutpat elit pretium at. Cras sed arcu feugiat, pulvinar tellus in, tristique enim. In euismod congue felis vitae imperdiet. Donec suscipit metus nunc, ac commodo dolor ultrices varius.',
    author: 'Liz House',
    image_one: 'https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    image_two: 'https://images.pexels.com/photos/587976/pexels-photo-587976.jpeg?auto=compress&cs=tinysrgb&h=350',
    image_three: 'https://images.pexels.com/photos/266436/pexels-photo-266436.jpeg?auto=compress&cs=tinysrgb&h=350',
  )
end

puts "Seeded Database"