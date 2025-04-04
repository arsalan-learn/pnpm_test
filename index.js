const { Sequelize, DataTypes } = require('sequelize');
const serialize = require('serialize-javascript');

// Initialize Sequelize with SQLite (for demonstration purposes)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:',
});

// Define a simple User model
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Function to demonstrate the SQL Injection vulnerability
async function demonstrateSQLInjection(userInput) {
  await sequelize.sync({ force: true });
  await User.create({ username: 'admin' });

  // Vulnerable code: using replacements with the 'where' option
  const users = await sequelize.query(
    'SELECT * FROM Users WHERE username = :username',
    {
      replacements: { username: userInput },
      type: sequelize.QueryTypes.SELECT,
    }
  );

  console.log('Users found:', users);
}

// Function to demonstrate the XSS vulnerability
function demonstrateXSS(payload) {
  // Vulnerable code: serializing unsanitized input
  const serialized = serialize({ payload });
  console.log('Serialized payload:', serialized);
}

// Simulate user input that could exploit the vulnerabilities
const maliciousInput = "'; DROP TABLE Users; --";
const xssPayload = '<script>alert("XSS Attack!")</script>';

// Demonstrate the vulnerabilities
demonstrateSQLInjection(maliciousInput).then(() => {
  demonstrateXSS(xssPayload);
});
