// execute "node --inspect-brk" to run app in debug mode via browser dev tools
  // visit chrome://inspect and click on "Open dedicated DevTools for Node"
// execute "node inspect" to run app in debug mode via the command line
  // use "n" to go to the next line
  // use "c" to continue with the app execution
  // use "list(n)" to list the n lines above and below where the code is currently paused
  // in debug mode run "repl" to manage the app state
// add a "debugger" statement to add a breakpoint
var person = {
  name: 'Andrew'
};

person.age = 25;

debugger;

person.name = 'Mike';

console.log(person);
