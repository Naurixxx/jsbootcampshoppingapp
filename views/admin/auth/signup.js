const layout = require('../layout');

module.exports = ({ req }) => {
  return layout({
    content: `
      <div>
        Logged in Usesr id: ${req.session.userId}
        <form method="POST">
        <input name="email" placeholder="email">
        <input name="password" placeholder="password">
        <input name="passwordConfirmation" placeholder="password confirmation">
          <button>Sign Up</name=button>
        </form>
      </div>
    `
  });
};