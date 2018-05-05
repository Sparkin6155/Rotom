require 'discordrb'
bot = Discordrb::Commands::CommandBot.new token: 'NDI3MjAwNjI5NTA5OTgwMTcx.DcUzEA.Mz5RWETwhYRzTQavcyizVV3BCfY', prefix: "!"
client_id = 427200629509980171


bot.message(from: "Venus", in: "mukuro-mine") do |event|
        bot.user(287225292408225792).dm("#{event.message.content}")
end

bot.dm do |event|
  bot.send_message(434032728980193290, "#{event.message.content}")
end

bot.ready do |event|
 loop do
text = gets.chomp
bot.send_message(436231756929171458, "#{text}")
end
end
bot.run