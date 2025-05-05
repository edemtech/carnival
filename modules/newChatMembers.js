function handleNewChatMembers(bot) {
    bot.on('new_chat_members', async (ctx) => {
      const newMembers = ctx.message.new_chat_members;
      console.log('new user!');
      for (const member of newMembers) {
        const userId = member.id.toString();
        const username = member.username || 'Анон';
        const firstName = member.first_name;
  
        console.log('welcome ', userId, username, firstName);
      }
    });
  }
  
  module.exports = handleNewChatMembers;