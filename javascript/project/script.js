let usersDatabase = JSON.parse(localStorage.getItem('usersDatabase')) || [];

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Check if the user already exists in the "database"
  const userExists = usersDatabase.some(user => user.username === username);
  
  if (userExists) {
    alert('User already exists!');
  } else {
    // Store user data
    const userData = { username, email, password };
    usersDatabase.push(userData);
    localStorage.setItem('usersDatabase', JSON.stringify(usersDatabase));
    alert('User registered successfully!');
  }
  
  document.getElementById('loginForm').reset();
});

// Search Form Submission
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const searchUsername = document.getElementById('searchUsername').value;
  const user = usersDatabase.find(user => user.username === searchUsername);
  
  const searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = '';
  
  if (user) {
    searchResults.innerHTML = `<p>Username: ${user.username}</p>
                               <p>Email: ${user.email}</p>`;
  } else {
    searchResults.innerHTML = '<p>User not found!</p>';
  }
  
  document.getElementById('searchForm').reset();
});
