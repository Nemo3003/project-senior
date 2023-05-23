const countUsers = () => {
    return new Promise((resolve, reject) => {
      const query = "SELECT COUNT(*) as total_users FROM ocacoplus.users";
      db.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0].total_users);
        }
      });
    });
  };

module.exports = countUsers;