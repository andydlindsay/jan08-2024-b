# do..end denotes a block of code
i = 0

# loop do
#   i += 1
#   puts "hello #{i}"

#   # if (i >= 10)
#   #   break
#   # end

#   break if (i >= 10)
# end

i = 0

# while (i < 10) do
#   i += 1
#   puts "hello #{i}"
# end

# game_over = false

# while (!game_over) do

# end

# until (game_over) do

# end

names = ['alice', 'bob', 'carol']

# for..in ruby => for..of js

# for name in names do
#   puts "you are signed in as #{name}"
# end

# names.forEach((name, index) => {})

names.each do |name|
  puts "hello #{name}"
end

names.each_with_index do |name, index|

end
