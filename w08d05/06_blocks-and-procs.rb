# blocks are denoted with do..end

names = ['alice', 'bob', 'carol']

# names.each do |name|
#   puts "hello #{name}"
# end

# Proc(edure) is a block stored in memory

# my_block = Proc.new do |name|
#   puts "hello #{name}"
# end

# names.each &my_block

# [1,2,3].each &my_block

def accepts_a_block &block
  block.call('carol')
end

my_other_block = Proc.new do |arg|
  puts "hello #{arg}"
end

accepts_a_block &my_other_block

def accepts_invis_block
  yield 'dean'
end

accepts_invis_block &my_other_block
