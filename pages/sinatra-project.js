import markdown from 'markdown-in-js';
import withOptions from '../components/layouts/withOptions';
import components from '../components';

export default withOptions({
  id: 'sinatra-project',
})(markdown(components)`
  Long time no see! It’s time to talk about my [sinatra portfolio project](https://github.com/mcansh/sinatra-project) for [Learn.co](https://learn.co)! I’m not exactly sure what I need to talk about, so maybe just a quick run through..

  The first thing you’re greated with is a simple homepage with a link to sign up. Clicking that takes you to a form which you’ll fill out a username, email, and password. Filling out that and submitted, granted there’s no errors, you’ll be greated with a list of your Tasks, which you dont have yet, so maybe I’ll update and put a link there to make a new one. Clicking the button in the bottom right hand corner will take you to a page to make a new Task. Doing so will give you the option for a title and marking it as complete if you completed and just wanted the satisfaction of writing it down. Creating the task will take you back to the homepage, and now you should have that task in your list of Tasks. Clicking on the one you just made will give you the option to edit or delete that task. Editing the task will look very similar to what you just saw when you created one. If you mark it as complete, the task will be crossed out on your list. Deleting the task will delete it and take you back to your homepage.

  That’s all for now 👋
`);
